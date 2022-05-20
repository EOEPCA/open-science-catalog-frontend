<template>
  <v-container
    :class="$vuetify.breakpoint.lgAndUp
      ? 'px-15 pt-8'
      : (($vuetify.breakpoint.smAndDown && ($vuetify.breakpoint.width > $vuetify.breakpoint.height))
        ? 'pa-0'
        : 'pa-4')"
  >
    <v-row
      v-if="!($vuetify.breakpoint.smAndDown && ($vuetify.breakpoint.width > $vuetify.breakpoint.height))"
      class="py-5"
    >
      <v-col>
        <h1 :class="$vuetify.breakpoint.mdAndUp ? 'text-h2 mt-0' : 'text-h4 mt-5'">
          Metrics
        </h1>
      </v-col>
    </v-row>
    <v-row
      v-if="metrics"
      class="white"
      :style="`z-index: 5; ${showMobileFilters
        ? 'position: absolute; width: 95vw; display: flex; box-shadow: 0 5px 20px 5px #0005'
        : ($vuetify.breakpoint.smOnly ? 'display: none' : 'display: flex')}`"
    >
      <v-col class="d-flex align-center">
        <v-tooltip v-if="$vuetify.breakpoint.smAndUp" top>
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              class="mr-3"
              v-on="on"
              @click="() => { TOGGLE_EMPTY_ITEMS(); }"
            >
              <v-icon>
                {{ showEmptyItems ? 'mdi-archive-check-outline' : 'mdi-archive-cancel-outline' }}
              </v-icon>
            </v-btn>
          </template>
          <span>
            {{ showEmptyItems ? 'Hide empty variables': 'Show empty variables' }}
          </span>
        </v-tooltip>
        <search-combobox
          ref="searchBox"
          embedded-mode
          pagination-loop
          class="my-4 flex-grow-1"
          @searchQuery="handleSearchEmit"
          @clearEvent="clearFilter"
        />
      </v-col>
    </v-row>
    <v-row class="mt-0 mt-md-3">
      <v-col cols="12" class="pa-0 py-md-3">
        <MetricsTable
          v-if="metrics"
          :filtered-products="filteredProducts"
          :headers="metrics.summary.years"
          :items="variables"
          :table-zoom="tableZoom"
        />
        <v-progress-linear v-else indeterminate />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="metrics" cols="12" class="pa-2 pa-sm-1 pa-md-2">
        <v-container>
          <v-row align="center">
            <v-col cols="6" class="py-2 py-sm-1 py-md-2">
              <v-dialog
                v-model="dialog"
                scrollable
                width="1000"
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    class="align-self-center"
                    color="applications"
                    dark
                    :block="$vuetify.breakpoint.xsOnly"
                    v-on="on"
                  >
                    <v-icon left>
                      mdi-poll
                    </v-icon>
                    Statistics
                  </v-btn>
                </template>
                <MetricsStatistics
                  v-if="metrics && variables"
                  :metrics="metrics"
                  :variables="variables"
                  @close="dialog = false"
                />
              </v-dialog>
              <v-btn
                v-if="$vuetify.breakpoint.smOnly"
                text
                @click="showMobileFilters = !showMobileFilters"
              >
                {{ showMobileFilters ? 'hide' : 'show' }} filters
              </v-btn>
            </v-col>
            <v-spacer />
            <v-col cols="6" class="d-flex align-center justify-end py-2 py-sm-1 py-md-2">
              <v-slider
                v-model="tableZoom"
                hide-details
                min="1"
                max="3"
                step="1"
                ticks="always"
                tick-size="4"
                style="max-width: 300px"
                :prepend-icon="'mdi-magnify-minus-outline'"
                :append-icon="'mdi-magnify-plus-outline'"
                @click:prepend="tableZoom > 1 ? tableZoom-- : null"
                @click:append="tableZoom < 3 ? tableZoom++ : null"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import MetricsStatistics from '@/components/MetricsStatistics.vue'

export default {
  name: 'Metrics',
  components: {
    MetricsStatistics
  },
  data () {
    return {
      dialog: false,
      filter: '',
      metrics: null,
      variables: [],
      staticVariables: [],
      tableZoom: 1,
      showMobileFilters: false,
      filteredProducts: []
    }
  },
  head: {
    title: 'Metrics'
  },
  computed: {
    ...mapState([
      'showEmptyItems'
    ]),
    ...mapState('staticCatalog', [
      'missions',
      'summary',
      'themes'
    ])
  },
  watch: {
    showEmptyItems (status) {
      if (status === false) {
        this.$refs.searchBox.filterProducts()
        this.filterItems(true)
      } else {
        this.filterItems()
      }
    }
  },
  mounted () {
    this.filterItems(null)
  },
  methods: {
    ...mapMutations([
      'TOGGLE_EMPTY_ITEMS'
    ]),
    ...mapActions('staticCatalog', [
      'retreiveMetrics'
    ]),
    handleSearchEmit (result) {
      const filteredResults = []
      this.filteredProducts = result.items
      result.items.forEach((item) => {
        item.properties.keywords.forEach((keyword) => {
          if (keyword.substring(0, 9) === 'variable:') {
            filteredResults.push(keyword.substring(9, keyword.length))
          }
        })
      })
      const auxVar = this.staticVariables.filter((variable) => {
        return filteredResults.find(result => result === variable.name)
      })

      this.variables = auxVar
    },
    clearFilter () {
      this.variables = this.staticVariables
    },
    async filterItems (silent) {
      this.metrics = await this.retreiveMetrics()
      const variables = []

      this.metrics.themes.forEach((theme) => {
        theme.variables.forEach((variable) => {
          variables.push(variable)
        })
      })
      variables.sort(function (a, b) {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        if (a.name > b.name) { return 1 }
        return 0
      })
      if (!this.showEmptyItems) {
        if (!silent) {
          this.variables = [
            ...variables.filter(v => v.summary.numberOfProducts >= 1)
          ]
        }
        this.staticVariables = [
          ...variables.filter(v => v.summary.numberOfProducts >= 1)
        ]
      } else {
        if (!silent) {
          this.variables = variables
        }
        this.staticVariables = variables
      }
    }
  }
}
</script>

<style scoped lang="scss">
.v-tabs {
  ::v-deep {
    .v-tab {
      min-width: 0;
      text-transform: unset;
      padding: 0 10px;
      font-size: 80%;
    }
    .v-tabs-slider-wrapper {
      transition: none;
    }
    .v-tabs-bar--is-mobile > .v-slide-group__prev,
    .v-tabs-bar--is-mobile > .v-slide-group__next {
      display: none !important;
    }
  }
}
</style>
