<template>
  <v-container>
    <h1>Metrics page</h1>
    <MetricsTable
      :headers="metrics.years"
      :items="metrics.variables"
    />
    <v-dialog
      v-model="dialog"
      scrollable
      width="700"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          @click="fetchVariables"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-chart-bar</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          <v-icon>mdi-chart-bar</v-icon>
          <span class="ml-3">All stats</span>
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
                    <v-list-item v-for="variable in metrics.variables" :key="variable.id">
                      {{ variable.name }}: {{ variable.numberOfRecords }}
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col>
                  <canvas
                    id="variablePie"
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
    return {
      metrics
    }
  },
  data () {
    this.recordsChart = null
    this.variablePie = null
    return {
      dialog: false,
      records: null,
    }
  },
  methods: {
    async fetchVariables() {
      const response = await this.$axios.$get('/variables/metrics')
      this.records = response.variables

      const recordsDataset = {}
      this.records.forEach((record) => {
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
            datasets: [{
              label: 'Number of records',
              data: Object.values(recordsDataset),
              backgroundColor: [
                'rgb(111, 184, 144)'
              ],
              borderWidth: 1
            }]
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

      const variableDataset = {}
      this.metrics.variables.forEach(item => {
        variableDataset[item.name] = item.numberOfRecords
      })
      this.variablePie = new Chart(
        document.getElementById('variablePie'),
        {
          type: 'doughnut',
          data: {
            labels: Object.keys(variableDataset),
            datasets: [{
              label: 'Dataset',
              data: Object.values(variableDataset),
              backgroundColor: [
                'rgb(111, 184, 144)'
              ]
            }]
          },
          options: {
            plugins: {
              legend: false,
            }
          }
        }
      )
    }
  },
  watch: {
    dialog(newDialog) {
      if (newDialog) return;
      if (this.recordsChart) {
        this.recordsChart.destroy()
      }
      if (this.variablePie) {
        this.variablePie.destroy()
      }
    }
  },
  head: {
    title: 'Metrics'
  }
}
</script>
