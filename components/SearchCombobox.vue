<template>
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
        <span class="text-capitalize">
          {{ item.key }}
        </span>
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
        item-text="field_name"
        return-object
        label=" "
        class="headless-input"
        @input="select"
        @focus="mainInputValue = ' '"
        @keyup.enter="onEnter"
        @keyup.delete="onDelete"
      >
        <template #item="data">
          <span :class="data.item.operator ? '' : 'text-capitalize'">
            {{ data.item.field_name }}
          </span>
        </template>
      </v-autocomplete>
    </div>
    <v-btn
      color="primary"
      class="ml-3"
      :disabled="filterItems.length < 1 || !!filterItems.find(f => f.value === null)"
      :loading="loading"
      @click="submit"
    >
      submit
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'SearchCombobox',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    sortBy: {
      type: String,
      default: 'title'
    },
    sortOrder: {
      type: String,
      default: 'Descending'
    }
  },
  data () {
    return {
      filterModel: null,
      filterItems: [
      ],
      mainInputValue: null,
      inputComplete: false,
      searchText: null,
      loading: false,
      themes: [],
      variables: [],
    }
  },
  computed: {
    availableItems() {
      return [
        {
          field_name: 'theme',
          filter: 'exact',
          available_values: this.themes
        },
        {
          field_name: 'variable',
          filter: 'exact',
          available_values: this.variables
        },
        {
          field_name: 'project',
          filter: 'like'
        },
        {
          field_name: 'product',
          filter: 'like'
        }
      ]
    },
    currentlyFreeText () {
      return this.filterItems && this.filterItems.find((i) => {
        return !i.value && i.operator
      })
    },
    isNumberField () {
      const currentFilter = this.filterItems.find(f => f.value === null)
      const currentField = this.availableItems.find(f => f.field_name === currentFilter.key)
      return currentField.digits !== undefined
    },
    filterFields () {
      let items
      const allItems = this.availableItems.filter(f => f.filter && (!this.filterItems
        .find(i => i.key === f.field_name) || (f.filter === 'range' && this.filterItems
          .filter(i => i.key === f.field_name).length < 2)))

      const inProgressItem = this.filterItems.find(f => f.value === null)
      if (inProgressItem || this.currentlyFreeText) {
        const currentMeta = inProgressItem &&
          this.availableItems.find(f => f.field_name === inProgressItem.key)
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
          if (currentMeta.available_values) {
            if (Array.isArray(currentMeta.available_values)) {
              items = currentMeta.available_values.map(i => ({
                filter_value: i,
                field_name: i,
                original_field_name: currentMeta.field_name,
              }));
            }
          } else {
            items = [
              {
                filter_value: null,
                field_name: 'is exactly',
                operator: '=',
                original_field_name: inProgressItem.key
              }
            ]
          }
        } else if (currentMeta.filter === 'like') {
          if (currentMeta.available_values) {
            items = currentMeta.available_values.map(i => ({
              filter_value: i,
              field_name: i,
              original_field_name: currentMeta.field_name
            }))
          } else {
            items = [
              {
                filter_value: null,
                field_name: 'includes',
                operator: 'includes',
                original_field_name: inProgressItem.key
              }
            ]
          }
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
    const response = await this.$staticCatalog.$get('/metrics')
    response.themes.forEach((theme) => {
      this.themes.push(theme.name)
      theme.variables.forEach((variable) => {
        this.variables.push(variable.name)
      })
    })
  },
  methods: {
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
        this.submit()
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
    },
    submit () {
      this.filterProducts()
    },
    async filterProducts () {
      this.loading = true
      try {
        const searchQuery = this.filterItems.reduce((acc, curr) => `${acc}&q=${curr.value}`, '')
        const queryString = `/collections/metadata:main/items?type=dataset&sortby=${
          this.sortOrder === 'Descending' ? `-${this.sortBy}` : `${this.sortBy}`}&offset=${
            (this.currentPage - 1) * 10}${searchQuery}`
  
        const itemsResponse = await this.$dynamicCatalog.$get(queryString)
  
        this.$emit('searchQuery', {
          items: itemsResponse.features,
          numberOfPages: Math.round(itemsResponse.numberMatched / 10)
        })
          this.$refs.headless.blur();
      } catch (error) {
        console.error(error)
      }
      this.loading = false
    },
  }
}
</script>
