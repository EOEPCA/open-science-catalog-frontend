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
              @click="fetchVariables"
              v-on="on"
            >
              <v-icon left>
                mdi-poll
              </v-icon>
              Statistics
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h6">
              <v-icon color="applications" left>
                mdi-poll
              </v-icon>
              <span>All stats</span>
              <v-spacer />
              <v-btn
                icon
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-divider />

            <v-card-text class="py-4 black--text">
              <v-container>
                <div class="d-flex mx-6">
                  <span>Number of projects: {{ metrics.summary.numberOfProjects }}</span>
                  <v-spacer />
                  <span>Number of records: {{ metrics.summary.numberOfProducts }}</span>
                </div>

                <div style="text-align: center" class="ma-6">
                  Temporal coverage
                </div>
                <canvas
                  id="recordsChart"
                />
              </v-container>

              <v-divider />

              <v-container>
                <div style="text-align: center" class="ma-6">
                  Variable distribution
                </div>
                <v-container>
                  <v-row style="height: 300px">
                    <v-col>
                      Variable list
                      <v-list
                        style="max-height: 300px"
                        class="overflow-y-auto"
                      >
                        <v-list-item v-for="variable in nonEmptyVariables" :key="variable.id">
                          {{ variable.name }}: {{ variable.summary.numberOfProducts }} records
                        </v-list-item>
                      </v-list>
                    </v-col>
                    <v-col>
                      <canvas
                        id="variablePie"
                        @mousemove="e => hoverHandler(e, 'variablePie')"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-container>

              <v-divider style="margin-top: 35px" />

              <v-container>
                <div style="text-align: center" class="ma-6">
                  Satellite mission distribution
                </div>
                <v-row style="height: 300px">
                  <v-col>
                    Satellite mission list
                    <v-list
                      style="max-height: 300px"
                      class="overflow-y-auto"
                    >
                      <v-list-item v-for="mission in sortedMissions" :key="mission.name">
                        {{ mission.name }}: {{ mission.summary.numberOfProducts }} records
                      </v-list-item>
                    </v-list>
                  </v-col>
                  <v-col>
                    <canvas
                      id="missionPie"
                      @mousemove="e => hoverHandler(e, 'missionPie')"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chart from 'chart.js/auto'
import annotationPlugin from 'chartjs-plugin-annotation'

Chart.register(annotationPlugin)
export default {
  name: 'Metrics',
  data () {
    this.recordsChart = null
    this.variablePie = null
    this.missionPie = null
    return {
      dialog: false,
      filter: '',
      selectedTab: 0,
      metrics: null,
      variables: [],
      sortedMissions: []
    }
  },
  head: {
    title: 'Metrics'
  },
  computed: {
    nonEmptyVariables () {
      return this.variables
        .filter(variable => variable.summary.numberOfProducts > 0)
        .sort((a, b) => b.summary.numberOfProducts - a.summary.numberOfProducts)
    }
  },
  watch: {
    dialog (newDialog) {
      if (newDialog) { return }
      if (this.recordsChart) {
        this.recordsChart.destroy()
      }
      if (this.variablePie) {
        this.variablePie.destroy()
      }
      if (this.missionPie) {
        this.missionPie.destroy()
      }
    }
  },
  mounted () {
    this.filterItems(null)
  },
  methods: {
    async fetchVariables () {
      // chart breaks if this is removed :D
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await this.$axios.$get('/metrics')

      // Number of records bar chart setup
      const recordsDataset = {}
      this.variables.forEach((record) => {
        record.summary.years.forEach((year) => {
          if (recordsDataset[year]) {
            recordsDataset[year] += 1
          } else {
            recordsDataset[year] = 1
          }
        })
      })

      this.recordsChart = new Chart(
        document.getElementById('recordsChart'),
        {
          type: 'bar',
          data: {
            labels: this.metrics.summary.years,
            datasets: [
              {
                label: 'Number of records',
                data: Object.values(recordsDataset),
                backgroundColor: [
                  this.$vuetify.theme.themes.light.applications
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        }
      )

      // Variable distribution doughnut chart setup
      const variableDataset = {}
      this.nonEmptyVariables.forEach((item) => {
        variableDataset[item.name] = item.summary.numberOfProducts
      })
      let sortedVariables = Object.values(variableDataset)
      sortedVariables = sortedVariables.sort((a, b) => {
        return a - b
      })

      this.variablePie = new Chart(
        document.getElementById('variablePie'),
        {
          plugins: [this.hoverLabel()],
          type: 'doughnut',
          data: {
            labels: Object.keys(variableDataset),
            datasets: [
              {
                data: sortedVariables,
                backgroundColor: 'white',
                hoverBackgroundColor: [this.$vuetify.theme.themes.light.applications],
                hoverBorderWidth: 0,
                innerText: sortedVariables[0],
                radius: 110,
                cutout: 180
              },
              {
                data: sortedVariables,
                backgroundColor: [this.$vuetify.theme.themes.light.applications],
                hoverBackgroundColor: [this.$vuetify.theme.themes.light.applications],
                hoverBorderWidth: 0,
                innerText: sortedVariables[0],
                radius: 150,
                cutout: 65
              }
            ]
          },
          options: {
            responsive: true,
            events: [],
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: false
              }
            }
          }
        }
      )

      // Satellite mission doughnut chart setup
      const missionDataset = {}
      this.metrics.missions.forEach((mission) => {
        missionDataset[mission.name] = mission.summary.numberOfProducts
      })
      let missionLabels = Object.values(missionDataset)
      missionLabels = missionLabels.sort((a, b) => {
        return a - b
      })
      this.sortedMissions = this.metrics.missions.sort((a, b) => {
        if (a.summary.numberOfProducts < b.summary.numberOfProducts) { return 1 }
        if (a.summary.numberOfProducts > b.summary.numberOfProducts) { return -1 }
        return 0
      })

      this.missionPie = new Chart(
        document.getElementById('missionPie'),
        {
          plugins: [this.hoverLabel()],
          type: 'doughnut',
          data: {
            labels: Object.keys(missionDataset),
            datasets: [
              {
                data: missionLabels,
                backgroundColor: 'white',
                hoverBackgroundColor: [this.$vuetify.theme.themes.light.applications],
                hoverBorderWidth: 0,
                innerText: missionLabels[0],
                radius: 110,
                cutout: 180
              },
              {
                data: missionLabels,
                backgroundColor: [this.$vuetify.theme.themes.light.applications],
                hoverBackgroundColor: [this.$vuetify.theme.themes.light.applications],
                hoverBorderWidth: 0,
                innerText: missionLabels[0],
                radius: 150,
                cutout: 65
              }
            ]
          },
          options: {
            responsive: true,
            events: [],
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: false
              }
            }
          }
        }
      )
    },
    hoverHandler (e, name) {
      const points = this[name].getElementsAtEventForMode(
        e,
        'nearest',
        { intersect: true },
        true
      )
      if (points.length > 0 && points[0].datasetIndex > 0) {
        this[name].setActiveElements([
          {
            datasetIndex: 0,
            index: points[0].index
          }
        ])
        this[name].update()
      }
    },
    hoverLabel () {
      let variablesTextLabel = null
      let variablesNumberLabel = null
      let variablesLabelColor = null

      return {
        id: 'hoverLabel',
        afterDraw: (chart) => {
          const {
            ctx,
            chartArea: { top, width, height }
          } = chart
          ctx.save()
          if (chart._active.length > 0) {
            variablesTextLabel = chart.config.data.labels[chart._active[0].index]
            variablesNumberLabel =
              chart.config.data.datasets[chart._active[0].datasetIndex].data[
                chart._active[0].index
              ]
            variablesLabelColor =
              chart.config.data.datasets[chart._active[0].datasetIndex]
                .hoverBackgroundColor[chart._active[0].index]
          }
          ctx.font = 'bolder 10px Arial'
          ctx.fillStyle = variablesLabelColor
          ctx.textAlign = 'center'
          ctx.fillText(variablesTextLabel || '', width / 2, 15)

          ctx.font = 'bolder 12px Arial'
          ctx.fillStyle = 'black'
          ctx.textAlign = 'center'
          ctx.fillText(
            variablesNumberLabel ? `${variablesNumberLabel} records` : '',
            width / 2,
            height / 2 + top - 5
          )

          ctx.font = 'bolder 10px Arial'
          ctx.fillStyle = 'grey'
          ctx.textAlign = 'center'
          ctx.fillText(
            variablesNumberLabel ? `${(variablesNumberLabel * 100 / this.metrics.summary.numberOfProducts).toFixed(2)}%` : '',
            width / 2,
            height / 2 + top + 10
          )
          ctx.restore()
        }
      }
    },
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
