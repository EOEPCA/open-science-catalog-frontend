<template>
  <v-container>
    <v-row v-if="metrics" class="px-0 white">
      <v-col cols="12" sm="8" lg="9">
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
      <v-col cols="12" sm="4" lg="3" class="d-flex pa-2">
        <v-text-field
          v-model="filter"
          hide-details
          solo
          single-line
          outlined
          dense
          placeholder="Filter by keywords..."
          prepend-inner-icon="mdi-magnify"
        />
      </v-col>
      <v-col cols="12" class="px-0">
        <MetricsTable
          v-if="metrics"
          :filter="filter"
          :headers="metrics.summary.years"
          :items="variables"
        />
        <v-progress-linear v-else indeterminate />
      </v-col>
      <v-col v-if="metrics" cols="12" class="text-right">
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
      variables: []
    }
  },
  head: {
    title: 'Metrics'
  },
  mounted () {
    this.filterItems(null)
  },
  methods: {
    async filterItems (i) {
      this.metrics = await this.$axios.$get('/metrics')
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
        ...variables.filter(v => v.summary.numberOfProducts >= 1),
        ...variables.filter(v => v.summary.numberOfProducts < 1)
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
