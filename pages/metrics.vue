<template>
  <v-container class="white">
    <v-row
      v-if="metrics"
      class="white"
      :style="`z-index: 5; ${showMobileFilters
        ? 'position: absolute; display: flex; box-shadow: 0 5px 20px 5px #0005'
        : ($vuetify.breakpoint.smOnly ? 'display: none' : 'display: flex')}`"
    >
      <v-col cols="12" sm="8" lg="8">
        <v-tabs
          v-model="selectedTab"
          @change="filterItems"
        >
          <v-tab>
            All
          </v-tab>
          <v-tab
            v-for="theme in metrics.themes"
            :key="theme.id"
          >
            <div>
              {{ theme.name }}
            </div>
          </v-tab>
        </v-tabs>
      </v-col>
      <v-spacer />
      <v-col cols="12" sm="4" lg="4" class="d-flex align-center pa-3">
        <!-- <v-text-field
          v-model="filter"
          hide-details
          solo
          single-line
          outlined
          dense
          placeholder="Filter by keywords..."
          prepend-inner-icon="mdi-magnify"
        /> -->
        <search-combobox
          ref="searchBox"
          embedded-mode
          class="mx-2 my-4"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="py-3 py-sm-0 py-md-3">
        <MetricsTable
          v-if="metrics"
          :filter="filter"
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
      selectedTab: 0,
      metrics: null,
      variables: [],
      tableZoom: 1,
      showMobileFilters: false
    }
  },
  head: {
    title: 'Metrics'
  },
  mounted () {
    this.filterItems(null)
  },
  methods: {
    handleSearchEmit (result) {
      console.log(result)
    },
    async filterItems (i) {
      this.metrics = await this.$staticCatalog.$get('/metrics')
      const variables = []

      const themes = (i === 0 || !i) ? this.metrics.themes : [this.metrics.themes[i - 1]]
      themes.forEach((theme) => {
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
      this.variables = [
        ...variables.filter(v => v.summary.numberOfProducts >= 1)
      ]
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
