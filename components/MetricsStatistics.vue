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
          <span
            >Number of projects: {{ metrics.summary.numberOfProjects }}</span
          >
          <v-spacer />
          <span
            >Number of products: {{ metrics.summary.numberOfProducts }}</span
          >
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
                  v-for="variable in nonEmptyVariables"
                  :key="variable.id"
                  class="px-0"
                >
                  <v-list-item-icon class="mr-2">
                    <v-icon color="applications"> mdi-circle-medium </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    {{ variable.name }}:
                    {{ variable.summary.numberOfProducts }} products
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
                  {{ mission.summary.numberOfProducts }} products
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
    nonEmptyVariables() {
      return this.variables
        .filter((variable) => variable.summary.numberOfProducts > 0)
        .sort(
          (a, b) => b.summary.numberOfProducts - a.summary.numberOfProducts
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
      // chart breaks if this is removed :D
      await this.$staticCatalog.$get("/metrics");

      // Number of products bar chart setup
      const productsDataset = {};
      this.variables.forEach((product) => {
        product.summary.years.forEach((year) => {
          if (productsDataset[year]) {
            productsDataset[year] += 1;
          } else {
            productsDataset[year] = 1;
          }
        });
      });

      this.productsChart = new Chart(document.getElementById("productsChart"), {
        type: "bar",
        data: {
          labels: this.metrics.summary.years,
          datasets: [
            {
              label: "Number of products",
              data: Object.values(productsDataset),
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
      this.nonEmptyVariables.forEach((item) => {
        variableDataset[item.name] = item.summary.numberOfProducts;
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
          labels: Object.keys(variableDataset),
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
      this.sortedMissions = [...this.metrics.missions].sort((a, b) => {
        if (a.summary.numberOfProducts < b.summary.numberOfProducts) {
          return 1;
        }
        if (a.summary.numberOfProducts > b.summary.numberOfProducts) {
          return -1;
        }
        return 0;
      });
      const missionDataset = {};
      this.sortedMissions.forEach((mission) => {
        missionDataset[mission.name] = mission.summary.numberOfProducts;
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
                  this.metrics.summary.numberOfProducts
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
