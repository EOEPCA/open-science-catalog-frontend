<template>
  <v-card>
    <v-card-title class="text-h6">
      <v-icon color="applications" left> mdi-poll </v-icon>
      <span>All stats</span>
      <v-spacer />
      <v-btn icon @click="() => $emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-divider />

    <v-card-text class="py-4 black--text px-0 px-md-6">
      <v-container>
        <div class="d-flex mx-6">
          <span>Number of products: {{ metrics.numberOfProducts }}</span>
        </div>

        <div style="text-align: center" class="ma-6">Temporal coverage</div>
        <canvas id="productsChart" />
      </v-container>

      <v-divider />

      <v-container>
        <div style="text-align: center" class="ma-6">Variable distribution</div>
        <v-container>
          <v-row>
            <v-col>
              <strong>Variable list</strong>
              <v-list dense style="max-height: 400px" class="overflow-y-auto">
                <v-list-item
                  v-for="variable in sortedVariables"
                  :key="variable.name"
                  class="px-0"
                >
                  <v-list-item-icon class="mr-2">
                    <v-icon color="applications"> mdi-circle-medium </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    {{ variable.name }}:
                    {{ Object.keys(variable.products).length }} products
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col>
              <canvas
                id="variablePie"
                @mousemove="(e) => hoverHandler(e, 'variablePie')"
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
        <v-row>
          <v-col>
            <strong>Satellite mission list</strong>
            <v-list dense style="max-height: 400px" class="overflow-y-auto">
              <v-list-item
                v-for="mission in sortedMissions"
                :key="mission.name"
                class="px-0"
              >
                <v-list-item-icon class="mr-2">
                  <v-icon :color="$textToHex(mission.name)">
                    mdi-circle-medium
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ mission.name }}:
                  {{ Object.keys(mission.products).length }} products
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col>
            <canvas
              id="missionPie"
              @mousemove="(e) => hoverHandler(e, 'missionPie')"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" text @click="() => $emit('close')"> Close </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";

Chart.register(annotationPlugin);

export default {
  props: {
    metrics: {
      type: Object,
      default: () => ({}),
    },
    variables: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    this.productsChart = null;
    this.variablePie = null;
    this.missionPie = null;
    return {
      sortedMissions: [],
    };
  },
  computed: {
    sortedVariables() {
      return Object.values(this.metrics.variables).sort(
        (a, b) =>
          Object.keys(b.products).length - Object.keys(a.products).length
      );
    },
  },
  mounted() {
    this.fetchVariables();
  },
  beforeMount() {
    if (this.productsChart) {
      this.productsChart.destroy();
    }
    if (this.variablePie) {
      this.variablePie.destroy();
    }
    if (this.missionPie) {
      this.missionPie.destroy();
    }
  },
  methods: {
    async fetchVariables() {
      // here lied a useless line of code that broke the chart if deleted, today we don't need it anymore 🎉
      this.productsChart = new Chart(document.getElementById("productsChart"), {
        type: "bar",
        data: {
          labels: Object.keys(this.metrics.years),
          datasets: [
            {
              label: "Number of products",
              data: Object.values(this.metrics.years),
              backgroundColor: [this.$vuetify.theme.themes.light.applications],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Variable distribution doughnut chart setup
      const variableDataset = {};
      this.sortedVariables.forEach((item) => {
        variableDataset[item.name] = Object.keys(item.products).length;
      });
      let sortedVariables = Object.values(variableDataset);
      sortedVariables = sortedVariables.sort((a, b) => {
        return b - a;
      });

      this.variablePie = new Chart(document.getElementById("variablePie"), {
        plugins: [this.hoverLabel()],
        type: "doughnut",
        data: {
          id: "variablePie",
          labels: Object.keys(this.metrics.variables),
          datasets: [
            {
              data: sortedVariables,
              backgroundColor: "white",
              hoverBackgroundColor: [
                this.$vuetify.theme.themes.light.applications,
              ],
              hoverBorderWidth: 0,
              innerText: sortedVariables[0],
              radius: "80%",
              cutout: "90%",
            },
            {
              data: sortedVariables,
              backgroundColor: [this.$vuetify.theme.themes.light.applications],
              hoverBackgroundColor: [
                this.$vuetify.theme.themes.light.applications,
              ],
              hoverBorderWidth: 0,
              innerText: sortedVariables[0],
              radius: "97%",
            },
          ],
        },
        options: {
          responsive: true,
          aspectRatio: 1,
          events: [],
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
      });

      // Satellite mission doughnut chart setup
      this.sortedMissions = [
        ...Object.values(this.metrics["eo-missions"]),
      ].sort((a, b) => {
        if (Object.keys(a.products).length < Object.keys(b.products).length) {
          return 1;
        }
        if (Object.keys(a.products).length > Object.keys(b.products).length) {
          return -1;
        }
        return 0;
      });
      const missionDataset = {};
      this.sortedMissions.forEach((mission) => {
        missionDataset[mission.name] = Object.keys(mission.products).length;
      });
      const missionLabels = Object.values(missionDataset);

      const getMissionColor = (i) =>
        this.$textToHex(Object.keys(missionDataset)[i.dataIndex]);

      this.missionPie = new Chart(document.getElementById("missionPie"), {
        plugins: [this.hoverLabel()],
        type: "doughnut",
        data: {
          id: "missionPie",
          labels: Object.keys(missionDataset),
          datasets: [
            {
              data: missionLabels,
              backgroundColor: "white",
              hoverBackgroundColor: getMissionColor,
              hoverBorderWidth: 0,
              innerText: missionLabels[0],
              radius: "80%",
              cutout: "90%",
            },
            {
              data: missionLabels,
              backgroundColor: getMissionColor,
              hoverBackgroundColor: getMissionColor,
              hoverBorderWidth: 0,
              innerText: missionLabels[0],
              radius: "97%",
            },
          ],
        },
        options: {
          responsive: true,
          aspectRatio: 1,
          events: [],
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
      });
    },
    hoverHandler(e, name) {
      const points = this[name].getElementsAtEventForMode(
        e,
        "nearest",
        { intersect: true },
        true
      );
      if (points.length > 0 && points[0].datasetIndex > 0) {
        this[name].setActiveElements([
          {
            datasetIndex: 0,
            index: points[0].index,
          },
        ]);
        this[name].update();
      }
    },
    hoverLabel() {
      let variablesTextLabel = null;
      let variablesNumberLabel = null;
      let variablesLabelColor = null;

      return {
        id: "hoverLabel",
        afterDraw: (chart) => {
          const {
            ctx,
            chartArea: { top, width, height },
          } = chart;
          ctx.save();
          if (chart._active.length > 0) {
            variablesTextLabel =
              chart.config.data.labels[chart._active[0].index];
            variablesNumberLabel =
              chart.config.data.datasets[chart._active[0].datasetIndex].data[
                chart._active[0].index
              ];
            variablesLabelColor =
              chart.config.data.id === "missionPie"
                ? this.$textToHex(variablesTextLabel)
                : chart.config.data.datasets[chart._active[0].datasetIndex]
                    .hoverBackgroundColor;
          }
          ctx.font = "20px Arial";
          ctx.fillStyle = variablesLabelColor;
          ctx.textAlign = "center";
          ctx.fillText(variablesTextLabel || "", width / 2, 15);

          ctx.font = "bold 16px Arial";
          ctx.fillStyle = "black";
          ctx.textAlign = "center";
          ctx.fillText(
            variablesNumberLabel ? `${variablesNumberLabel} products` : "",
            width / 2,
            height / 2 + top - 5
          );

          ctx.font = "14px Arial";
          ctx.fillStyle = "grey";
          ctx.textAlign = "center";
          ctx.fillText(
            variablesNumberLabel
              ? `${(
                  (variablesNumberLabel * 100) /
                  this.metrics.numberOfProducts
                ).toFixed(2)}%`
              : "",
            width / 2,
            height / 2 + top + 15
          );
          ctx.restore();
        },
      };
    },
  },
};
</script>
