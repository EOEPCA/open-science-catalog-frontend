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
          :label="`${embeddedMode ? 'Filter': 'Search'} items`"
          :outlined="embeddedMode"
          :dense="embeddedMode"
          :hide-details="embeddedMode"
          :value="mainInputValue"
          height="42"
        />
      </div>
      <v-chip
        v-for="(item, index) in filterItems"
        :key="index"
        small
        :close="!!item.value && !(preSelectedItems.map(i => i.key).includes(item.key))"
        :class="embeddedMode ? 'mx-1' : 'mr-1'"
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
        :outlined="embeddedMode"
        :dense="embeddedMode"
        :hide-details="embeddedMode"
        class="headless-input"
        :class="embeddedMode ? 'customOutline' : ''"
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
        auto-select-first
        :outlined="embeddedMode"
        :dense="embeddedMode"
        :hide-details="embeddedMode"
        class="headless-input"
        :class="embeddedMode ? 'customOutline' : ''"
        :search-input.sync="textInputModel"
        @input="select"
        @focus="mainInputValue = ' '"
        @keyup.enter="onEnter"
        @keyup.delete="onDelete"
      >
        <template #no-data>
          <v-list-item>
            <v-list-item-title>
              Search for in all records (freetext)
            </v-list-item-title>
          </v-list-item>
        </template>
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
      <v-icon>
        mdi-magnify
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SearchCombobox',
  props: {
    embeddedMode: {
      type: Boolean,
      default: false
    },
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
      default: 'Ascending'
    },
    preSelectedItems: {
      type: Array,
      default: () => ([])
    },
    itemType: {
      type: String,
      default: 'product'
    },
    bbox: {
      type: Array,
      default: () => ([0, 0, 0, 0])
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
      variables: [],
      inProgressItem: null,
      textInputModel: null
    }
  },
  computed: {
    ...mapState('staticCatalog', [
      'missions',
      'themes'
    ]),
    availableItems () {
      return [
        {
          field_name: 'theme',
          filter: 'exact',
          available_values: this.themes ? this.themes.map(theme => theme.name) : []
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
        },
        {
          field_name: 'mission',
          filter: 'exact',
          available_values: this.missions ? this.missions.map(mission => mission.name) : []
        },
        {
          field_name: 'type',
          filter: 'exact',
          available_values: [
            'project',
            'product'
          ]
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

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.inProgressItem = this.filterItems.find(f => f.value === null)
      if (this.inProgressItem || this.currentlyFreeText) {
        const currentMeta = this.inProgressItem &&
          this.availableItems.find(f => f.field_name === this.inProgressItem.key)
        if (this.inProgressItem.operator) {
          items = [
          ]
        } else if (currentMeta.filter === 'boolean') {
          items = [
            {
              filter_value: true,
              field_name: 'true',
              original_field_name: this.inProgressItem.key
            },
            {
              filter_value: false,
              field_name: 'false',
              original_field_name: this.inProgressItem.key
            }
          ]
        } else if (currentMeta.filter === 'exact') {
          if (currentMeta.available_values) {
            if (Array.isArray(currentMeta.available_values)) {
              items = currentMeta.available_values.map(i => ({
                filter_value: i,
                field_name: i,
                original_field_name: currentMeta.field_name
              }))
                .filter((item) => {
                  const previouslySetFilters = this.filterItems ? this.filterItems.filter(i => i.value) : []
                  const checkFilter = (type, check) => {
                    const applicableFilter = previouslySetFilters.find(f => f.key === type)
                    if (applicableFilter) {
                      const typeObject = `${type}s`
                      const typeFilter = this[typeObject]
                        .find(t => t.name === applicableFilter.value)
                      if (typeFilter) {
                        const includedItem = typeFilter[check].find(v => v.name === item.field_name)
                        return includedItem
                      }
                    }
                    return true
                  }
                  switch (item.original_field_name) {
                    case 'variable': {
                      return checkFilter('theme', 'variables')
                    }
                    default: {
                      return true
                    }
                  }
                })
                .sort((a, b) => a.field_name < b.field_name ? -1 : 1)
            }
          } else {
            items = [
              {
                filter_value: null,
                field_name: 'is exactly',
                operator: '=',
                original_field_name: this.inProgressItem.key
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
                original_field_name: this.inProgressItem.key
              }
            ]
          }
        } else if (currentMeta.filter === 'range') {
          const existingOperator = this.filterItems
            .find(i => i.key === this.inProgressItem.key && !!i.operator)
          items = [
            ...((existingOperator ? existingOperator.operator !== '≤' : true)
              ? [
                  {
                    filter_value: null,
                    field_name: '≤ lower than or equal}',
                    operator: '≤',
                    original_field_name: this.inProgressItem.key
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
                    original_field_name: this.inProgressItem.key
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
    if (this.preSelectedItems.length > 0) {
      this.filterItems = this.preSelectedItems
    }
    await this.retreiveMetrics()
    this.themes.forEach((theme) => {
      theme.variables.forEach((variable) => {
        this.variables.push(variable.name)
      })
    })
  },
  mounted () {
    this.$refs.headless.focus()
    if (!this.embeddedMode) {
      this.$refs.headless.activateMenu()
    }
  },
  methods: {
    ...mapActions('dynamicCatalog', [
      'fetchCustomQuery'
    ]),
    ...mapActions('staticCatalog', [
      'retreiveMetrics'
    ]),
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
      this.textInputModel = null
    },
    remove (item) {
      this.filterItems.splice(this.filterItems.indexOf(item), 1)
      this.onEnter()
    },
    onEnter () {
      if (!this.inProgressItem && this.textInputModel) {
        this.filterItems.push({
          key: 'record',
          operator: 'includes',
          value: this.textInputModel
        })
        this.inputComplete = false
        setTimeout(() => { this.inputComplete = true }, 300)
      }
      if (this.inputComplete && this.filterItems.every(i => !!i.value)) {
        this.submit()
      }
      this.textInputModel = null
    },
    onDelete () {
      if (this.filterItems.length < 1) {
        return
      }
      if (this.searchText) {
        return
      }
      if (this.preSelectedItems.map(i => i.key).includes(this.filterItems[this.filterItems.length - 1].key)) {
        return
      }
      if (this.textInputModel !== null) {
        if (this.textInputModel === '') {
          this.textInputModel = null
        }
        return
      }
      this.filterItems.pop()
      this.filterModel = null
    },
    submit () {
      this.filterProducts()
    },
    async filterProducts (init) {
      this.loading = true
      try {
        const searchQuery = this.filterItems.reduce((acc, curr) => {
          return curr.key === 'type'
            ? `${acc}&type=${curr.value === 'project' ? 'datasetcollection' : 'dataset'}`
            : `${acc}&q=${curr.value}`
        }, '')
        const queryString = `/collections/metadata:main/items?sortby=${
          this.sortOrder === 'Descending' ? `-${this.sortBy}` : `${this.sortBy}`}&offset=${
            (this.currentPage - 1) * 10}${searchQuery}${this.bbox ? `&bbox=${this.bbox.join(',')}` : ''}`

        const itemsResponse = await this.fetchCustomQuery(queryString)

        this.$emit('searchQuery', {
          items: itemsResponse.features,
          numberOfPages: Math.round(itemsResponse.numberMatched / 10)
        })
        if (!init) {
          this.$refs.headless.blur()
        }
      } catch (error) {
        console.error(error)
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
.customOutline ::v-deep fieldset {
  border: none !important;
}
</style>
