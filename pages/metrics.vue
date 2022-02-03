<template>
  <v-container>
    <div class="d-flex" style="background-color:white">
      <v-tabs
        v-model="selectedTab"
      >
        <v-tab>
          All
        </v-tab>
        <v-tab v-for="theme in themes" :key="theme.id">
          <div>
            {{ theme.name }}
          </div>
        </v-tab>
      </v-tabs>
      <v-spacer />
      <v-col cols="3">
        <v-text-field 
          v-model="filter"
          hide-details
          solo
          single-line
          outlined
          placeholder="Filter by keywords..."
          prepend-inner-icon="mdi-magnify"
        />
      </v-col>
    </div>
    <MetricsTable
      :filter="filter"
      :headers="metrics.years"
      :items="metrics.variables"
    />
    <v-dialog
      v-model="dialog"
      scrollable
      width="1000"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          @click="fetchVariables"
          v-on="on"
        >
          <v-icon>mdi-poll</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h6">
          <v-icon color="success" left>
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
              <span>Number of projects: {{ metrics.summary.totalProjects }}</span>
              <v-spacer />
              <span>Number of records: {{ metrics.summary.records }}</span>
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
                      {{ variable.name }}: {{ variable.numberOfRecords }}
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col>
                  <canvas
                    id="variablePie"
                    @mousemove="hoverHandler"
                  />
                </v-col>
              </v-row>
            </v-container>
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
  </v-container>
</template>

<script>
import Chart from 'chart.js/auto'
import annotationPlugin from 'chartjs-plugin-annotation'

Chart.register(annotationPlugin)
export default {
  name: 'Metrics',
  async asyncData ({ $axios }) {
    const metrics = await $axios.$get('/metrics')
    const themes = await $axios.$get('/themes')

    return {
      metrics,
      themes
    }
  },
  data () {
    this.recordsChart = null
    this.variablePie = null
    return {
      dialog: false,
      filter: '',
      selectedTab: 0,
    }
  },
  head: {
    title: 'Metrics'
  },
  computed: {
    nonEmptyVariables () {
      return this.metrics.variables
        .filter(variable => variable.numberOfRecords > 0)
        .sort((a, b) => b.numberOfRecords - a.numberOfRecords)
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
    }
  },
  methods: {
    async fetchVariables () {
      const response = await this.$axios.$get('/variables/metrics')

      // Number of records bar chart setup
      const recordsDataset = {}
      response.variables.forEach((record) => {
        record.years.forEach((year) => {
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
            labels: this.metrics.years,
            datasets: [
              {
                label: 'Number of records',
                data: Object.values(recordsDataset),
                backgroundColor: [
                  'rgb(111, 184, 144)'
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
        variableDataset[item.name] = item.numberOfRecords
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
                hoverBackgroundColor: ['rgb(111, 184, 144)'],
                hoverBorderWidth: 0,
                innerText: sortedVariables[0],
                radius: 120,
                cutout: 128
              },
              {
                data: sortedVariables,
                backgroundColor: ['rgb(111, 184, 144)'],
                hoverBackgroundColor: ['rgb(111, 184, 144)'],
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
    },
    hoverHandler (e) {
      const points = this.variablePie.getElementsAtEventForMode(
        e,
        'nearest',
        { intersect: true },
        true
      )
      if (points.length > 0 && points[0].datasetIndex > 0) {
        this.variablePie.setActiveElements([
          {
            datasetIndex: 0,
            index: points[0].index
          }
        ])
        this.variablePie.update()
      }
    },
    hoverLabel () {
      let variablesTextLabel = null
      let variablesNumberLabel = null
      let variablesLabelColor = null

      return {
        id: 'hoverLabel',
        afterDraw (chart) {
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

          ctx.font = 'bolder 10px Arial'
          ctx.fillStyle = 'black'
          ctx.textAlign = 'center'
          ctx.fillText(
            variablesNumberLabel ? `${variablesNumberLabel} records` : '',
            width / 2,
            height / 2 + top
          )
          ctx.restore()
        }
      }
    },
    filterItems (e) {
      console.log(e)
    }
  }
}
</script>
