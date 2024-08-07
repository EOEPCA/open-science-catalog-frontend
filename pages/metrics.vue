<template>
  <v-container
    class="d-flex flex-column"
    :class="
      $vuetify.breakpoint.lgAndUp
        ? 'px-15 pt-8'
        : $vuetify.breakpoint.smAndDown &&
          $vuetify.breakpoint.width > $vuetify.breakpoint.height
        ? 'pa-0'
        : 'pa-4'
    "
    style="height: 100%"
  >
    <v-row
      v-if="
        !(
          $vuetify.breakpoint.smAndDown &&
          $vuetify.breakpoint.width > $vuetify.breakpoint.height
        )
      "
      class="py-5 flex-grow-0"
    >
      <v-col>
        <h1
          :class="$vuetify.breakpoint.mdAndUp ? 'text-h2 mt-0' : 'text-h4 mt-5'"
        >
          Metrics
        </h1>
      </v-col>
    </v-row>
    <v-row class="white flex-grow-0">
      <v-col cols="12">
        <eox-itemfilter
          v-show="metrics"
          inline-mode
          :showResults.prop="false"
          :filterProperties.prop="filterProperties"
          :items.prop="items"
          class="row"
          style="position: relative; z-index: 5"
        ></eox-itemfilter>
      </v-col>
    </v-row>
    <v-row class="d-flex flex-grow-1" style="overflow: hidden">
      <MetricsTable
        v-if="metrics"
        :aggregation-property="aggregationProperty"
        :headers="Object.keys(metrics.years)"
        :items="
          Object.values(metrics[aggregationProperty])
            .filter((i) =>
              showEmptyItems ? true : Object.keys(i.products).length
            )
            .sort((a, b) => {
              return a.name.localeCompare(b.name, 'en', {
                sensitivity: 'base',
              });
            })
        "
        :table-zoom="tableZoom"
        class="d-flex flex-grow-1"
        style="max-height: 100%"
      />
      <v-progress-linear v-else indeterminate />
    </v-row>
    <v-row class="flex-grow-0">
      <v-col v-if="metrics" cols="12" class="pa-2 pa-sm-1 pa-md-2">
        <v-container>
          <v-row align="center">
            <v-col cols="6" class="py-2 py-sm-1 py-md-2 d-flex">
              <v-dialog v-model="dialog" scrollable width="1000">
                <template #activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    class="align-self-center"
                    color="applications"
                    dark
                    :block="$vuetify.breakpoint.xsOnly"
                    v-on="on"
                  >
                    <v-icon left> mdi-poll </v-icon>
                    Statistics
                  </v-btn>
                </template>
                <MetricsStatistics
                  v-if="metrics"
                  :key="filteredMetrics.numberOfProducts"
                  :metrics="filteredMetrics"
                  @close="dialog = false"
                />
              </v-dialog>
              <v-select
                v-if="metrics"
                v-model="aggregationProperty"
                dense
                hide-details
                class="ml-4 text-capitalize"
                label="Aggregate by"
                outlined
                :items="
                  Object.keys(metrics).filter(
                    (m) => !['numberOfProducts', 'years'].includes(m)
                  )
                "
              ></v-select>
            </v-col>
            <v-spacer />
            <v-col
              cols="6"
              class="d-flex align-center justify-end py-2 py-sm-1 py-md-2"
            >
              <v-tooltip v-if="$vuetify.breakpoint.smAndUp" top>
                <template #activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    class="mr-3"
                    v-on="on"
                    @click="showEmptyItems = !showEmptyItems"
                  >
                    <v-icon>
                      {{
                        showEmptyItems
                          ? "mdi-archive-check-outline"
                          : "mdi-archive-cancel-outline"
                      }}
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  {{
                    showEmptyItems
                      ? `Hide empty ${aggregationProperty}`
                      : `Show empty ${aggregationProperty}`
                  }}
                </span>
              </v-tooltip>
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
import { mapActions } from "vuex";
export default {
  data: () => ({
    dialog: false,
    aggregationProperty: "variables",
    allAggregationItems: null,
    items: null,
    metrics: null,
    tableZoom: 1,
    showEmptyItems: false,
    filteredMetrics: {},
    filterProperties: [
      { id: "theme", key: "theme", title: "Theme" },
      { id: "variable", key: "variable", title: "Variable" },
      { id: "project", key: "project", title: "Project" },
      { id: "mission", key: "eo-mission", title: "EO Mission" },
      { id: "geometry", key: "geometry", type: "spatial", title: "Geometry" },
      {
        id: "search",
        keys: ["title", "themes", "variable"],
        title: "Freetext search",
        placeholder: "Type something...",
        type: "text",
      },
    ],
  }),
  watch: {
    aggregationProperty() {
      this.allAggregationItems = null;
      const previousSetting = this.showEmptyItems;
      this.showEmptyItems = null;
      this.$nextTick(() => {
        this.showEmptyItems = previousSetting;
      });
    },
    showEmptyItems(activated) {
      if (activated && !this.allAggregationItems) {
        this.fetchAllAggregationItems(this.aggregationProperty);
      }
    },
    metrics(newMetrics) {
      this.filteredMetrics = newMetrics;
    },
  },
  async mounted() {
    const items = await this.retreiveProducts();
    this.metrics = this.createMetrics(items);
    this.items = items;
    this.$nextTick(() => {
      const itemFilter = document.querySelector("eox-itemfilter");
      itemFilter.addEventListener("filter", (event) => {
        const metrics = this.createMetrics(event.detail.results);
        if (this.showEmptyItems) {
          metrics[this.aggregationProperty] = {
            ...this.allAggregationItems,
            ...metrics[this.aggregationProperty],
          };
        }
        this.metrics = metrics;
      });
    });
  },
  methods: {
    ...mapActions(["retreiveProducts"]),
    async fetchAllAggregationItems(type) {
      let allItems = {};
      await this.$staticCatalog
        .$get(`/${type}/catalog`)
        .then((response) => {
          response.links
            .filter((l) => l.rel === "child")
            .forEach((v) => {
              const variableId = v.href.substring(
                v.href.indexOf("./") + 2,
                v.href.indexOf("/catalog.json")
              );
              allItems[variableId] = {
                id: variableId,
                name: v.title,
                products: {},
                years: {},
              };
            });
        })
        .catch((err) => console.error(err));
      this.allAggregationItems = allItems;
      const metrics = this.createMetrics(this.items);
      if (this.showEmptyItems) {
        metrics[this.aggregationProperty] = {
          ...this.allAggregationItems,
          ...metrics[this.aggregationProperty],
        };
      }
      this.metrics = metrics;
    },
  },
};
</script>

<style>
.v-list-item__title {
  text-transform: capitalize;
}
</style>
