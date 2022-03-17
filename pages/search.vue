<template>
  <v-container>
    <h2 class="text-h2 mt-3 mb-5">
      Search
    </h2>
    <div
      class="d-flex align-center"
    >
      <div
        class="
          d-flex
          lightgrey
          align-center"
        style="width: 100%; position: relative"
      >
        <div style="position: absolute; width: 100%">
          <v-text-field
            style="pointer-events: none;"
            label="Filter items"
            :value="mainInputValue"
            :class="mainInputValue ? 'v-input--is-focused' : ''"
            height="42"
          />
        </div>
        <v-chip
          v-for="(item, index) in filterItems"
          :key="index"
          small
          :close="!!item.value"
          class="mr-1"
          @click:close="remove(item)"
        >
          {{ item.key }}
          <span
            v-if="
              !!item.value || item.operator"
            class="px-1"
          >
            {{ item.operator || ':' }}</span>
          <strong>{{ !!item.value ? ` ${item.value}` : '' }}</strong>
        </v-chip>
        <v-combobox
          v-if="currentlyFreeText"
          ref="headless"
          placeholder="..."
          label=" "
          :items="[
          ]"
          chips
          :search-input.sync="searchText"
          class="headless-input"
          :type="isNumberField ? 'number' : 'text'"
          @change="select"
          @focus="mainInputValue = ' '"
          @keydown.delete="onDelete"
        >
          <template #no-data>
            <v-list-item @click="select(searchText)">
              <v-list-item-content>
                <v-list-item-title>
                  {{ searchText }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-combobox>
        <v-autocomplete
          v-else
          ref="headless"
          v-model="filterModel"
          :items="
            filterFields"
          chips
          item-text="display_name"
          return-object
          label=" "
          class="headless-input"
          @input="select"
          @focus="mainInputValue = ' '"
          @keyup.enter="onEnter"
          @keyup.delete="onDelete"
        >
          <template #item="data">
            {{ data.item.display_name }}
          </template>
        </v-autocomplete>
      </div>
      <v-btn
        color="primary"
        class="ml-3"
        :disabled="filterItems.length < 1 || !!filterItems.find(f => f.value === null)"
        :loading="loading"
        @click="filterProducts"
      >
        submit
      </v-btn>
    </div>
    <v-row>
      <v-col cols="12" md="8" :class="$vuetify.breakpoint.lgAndUp ? 'd-flex' : ''">
        <v-spacer />
        <v-select
          v-model="productsFilterSortBy"
          dense
          hide-details
          :items="productsFilterOptions"
          label="Sort by"
          outlined
          :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
          @change="filterProducts()"
        />
        <v-select
          v-model="productsFilterOrder"
          dense
          hide-details
          :items="['Ascending', 'Descending']"
          label="Order"
          outlined
          :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
          @change="filterProducts()"
        />
      </v-col>
    </v-row>
    <item-grid
      type="products"
      :items="items"
    />
    <v-row>
      <v-col cols="12" class="text-center">
        <v-pagination
          v-model="page"
          :length="numberOfPages"
          @input="filterProducts"
          @next="filterProducts"
          @previous="filterProducts"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemGrid from '@/components/ItemGrid.vue'

export default {
  name: 'Search',
  components: {
    ItemGrid
  },
  data () {
    return {
      items: [],
      page: 1,
      numberOfPages: 1,
      filterModel: null,
      filterItems: [
      ],
      mainInputValue: null,
      inputComplete: false,
      searchText: null,
      loading: false,
      productsFilterOptions: [
        {
          text: 'Name',
          value: 'title'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ],
      productsFilterSortBy: 'title',
      productsFilterOrder: 'Ascending'
    }
  },
  head: {
    title: 'Search'
  },
  computed: {
    currentlyFreeText () {
      return this.filterItems && this.filterItems.find((i) => {
        return !i.value && i.operator
      })
    },
    isNumberField () {
      // const currentFilter = this.filterItems.find(f => f.value === null)
      // const currentField = this.metaInfo.fields.find(f => f.field_name === currentFilter.key)
      return false
    },
    filterFields () {
      let items
      const allItems = [
        {
          field_name: 'theme',
          display_name: 'Theme',
          filter: 'exact'
        },
        {
          field_name: 'variable',
          display_name: 'Variable',
          filter: 'exact'
        },
        {
          field_name: 'project',
          display_name: 'Project',
          filter: 'exact'
        },
        {
          field_name: 'product',
          display_name: 'Product',
          filter: 'exact'
        },
        {
          field_name: 'startDate',
          display_name: 'Start date',
          filter: 'range',
          digits: 0
        }
      ]
      const inProgressItem = this.filterItems.find(f => f.value === null)
      if (inProgressItem || this.currentlyFreeText) {
        const currentMeta = inProgressItem &&
          allItems.find(f => f.field_name === inProgressItem.key)
        if (inProgressItem.operator) {
          items = [
          ]
        } else if (currentMeta.filter === 'boolean') {
          items = [
            {
              filter_value: true,
              field_name: 'true',
              original_field_name: inProgressItem.key
            },
            {
              filter_value: false,
              field_name: 'false',
              original_field_name: inProgressItem.key
            }
          ]
        } else if (currentMeta.filter === 'exact') {
          items = [
            {
              filter_value: null,
              field_name: '=exactly',
              operator: '=',
              original_field_name: inProgressItem.key
            }
          ]
        } else if (currentMeta.filter === 'range') {
          const existingOperator = this.filterItems
            .find(i => i.key === inProgressItem.key && !!i.operator)
          items = [
            ...((existingOperator ? existingOperator.operator !== '≤' : true)
              ? [
                  {
                    filter_value: null,
                    field_name: '≤ lower than or equal}',
                    operator: '≤',
                    original_field_name: inProgressItem.key
                  }
                ]
              : [
                ]),
            ...((existingOperator ? existingOperator.operator !== '≥' : true)
              ? [
                  {
                    filter_value: null,
                    field_name: '≥ higher than or equal',
                    operator: '≥',
                    original_field_name: inProgressItem.key
                  }
                ]
              : [
                ])
          ]
        } else {
          items = allItems
        }
      } else {
        items = allItems
      }
      return items
    }
  },
  async created () {
    await this.filterProducts()
  },
  methods: {
    async filterProducts () {
      const searchQuery = this.filterItems.reduce((acc, curr) => `${acc}&${
        curr.operator
          ? 'q'
            // .replace('≤', '__lte') todo: range if needed
            // .replace('≥', '__gte')
            // .replace('=', '')
          : curr.key
      }=${curr.value}`, '')
      const queryString = `/collections/metadata:main/items?type=dataset&sortby=${
        this.productsFilterOrder === 'Descending' ? `-${this.productsFilterSortBy}` : `${this.productsFilterSortBy}`}&offset=${
          (this.page - 1) * 10}${searchQuery}`

      const itemsResponse = await this.$dynamicCatalog.$get(queryString)

      this.items = itemsResponse.features
      this.numberOfPages = Math.round(itemsResponse.numberMatched / 10)
    },
    select (item) {
      if (item) {
        if (this.currentlyFreeText) {
          this.filterItems = this.filterItems
            .map((i) => {
              if (!i.value && i.operator) {
                i.value = item
              }
              return i
            })
        } else if (item.operator) {
          this.filterItems = this.filterItems
            .map((i) => {
              if (!i.value) {
                i.operator = item.operator
              }
              return i
            })
        } else if (item.filter_value) {
          this.filterItems = this.filterItems
            .map((i) => {
              if (!i.value) {
                i.value = item.filter_value
              }
              return i
            })
        } else {
          this.filterItems.push({
            key: item.field_name,
            value: null
          })
        }
        this.inputComplete = false
        setTimeout(() => { this.inputComplete = true }, 300)
        this.$nextTick(() => {
          this.$refs.headless.focus()
          if (!this.currentlyFreeText) {
            this.$refs.headless.activateMenu()
          }
        })
      }
    },
    remove (item) {
      this.filterItems.splice(this.filterItems.indexOf(item), 1)
    },
    onEnter () {
      if (this.inputComplete && this.filterItems.every(i => !!i.value)) {
        this.filterProducts()
      }
    },
    onDelete () {
      if (this.filterItems.length < 1) {
        return
      }
      if (this.searchText) {
        return
      }
      this.filterItems.pop()
      this.filterModel = null
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .v-select__slot {
  .v-input__append-inner  {
    display: none;
  }
}
.headless-input {
  ::v-deep .v-input__control > .v-input__slot:before {
    border: none
  }
  label {
    display: none;
  }
}
::v-deep .v-text-field__slot input,
::v-deep .v-select__selections input {
  margin-top: 5px;
}
</style>
