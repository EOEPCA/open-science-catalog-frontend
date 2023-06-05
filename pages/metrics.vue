<template>
  <v-container
    :class="
      $vuetify.breakpoint.lgAndUp
        ? 'px-15 pt-8'
        : $vuetify.breakpoint.smAndDown &&
          $vuetify.breakpoint.width > $vuetify.breakpoint.height
        ? 'pa-0'
        : 'pa-4'
    "
  >
    <v-row
      v-if="
        !(
          $vuetify.breakpoint.smAndDown &&
          $vuetify.breakpoint.width > $vuetify.breakpoint.height
        )
      "
      class="py-5"
    >
      <v-col>
        <h1
          :class="$vuetify.breakpoint.mdAndUp ? 'text-h2 mt-0' : 'text-h4 mt-5'"
        >
          Metrics
        </h1>
      </v-col>
    </v-row>
    <v-row
      class="white"
      :style="`z-index: 5; ${
        showMobileFilters
          ? 'position: absolute; width: 95vw; display: flex; box-shadow: 0 5px 20px 5px #0005'
          : $vuetify.breakpoint.smOnly
          ? 'display: none'
          : 'display: flex'
      }`"
    >
      <v-col class="d-flex align-center">
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
        <v-select
          v-if="metrics"
          v-model="aggregationProperty"
          label="Aggregate by"
          outlined
          :items="
            Object.keys(metrics).filter(
              (m) => !['numberOfProducts', 'years'].includes(m)
            )
          "
        ></v-select>
        <eox-itemfilter></eox-itemfilter>
      </v-col>
    </v-row>
    <v-row class="mt-0 mt-md-3">
      <v-col cols="12" class="pa-0 py-md-3">
        <MetricsTable
          v-if="metrics"
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
        />
        <v-progress-linear v-else indeterminate />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="metrics" cols="12" class="pa-2 pa-sm-1 pa-md-2">
        <v-container>
          <v-row align="center">
            <v-col cols="6" class="py-2 py-sm-1 py-md-2">
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
              <v-btn
                v-if="$vuetify.breakpoint.smOnly"
                text
                @click="showMobileFilters = !showMobileFilters"
              >
                {{ showMobileFilters ? "hide" : "show" }} filters
              </v-btn>
            </v-col>
            <v-spacer />
            <v-col
              cols="6"
              class="d-flex align-center justify-end py-2 py-sm-1 py-md-2"
            >
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
export default {
  data: () => ({
    dialog: false,
    aggregationProperty: "eo-missions",
    allAggregationItems: null,
    items: null,
    metrics: null,
    tableZoom: 1,
    showEmptyItems: false,
    showMobileFilters: false,
    filteredMetrics: {},
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
    const items = await this.fetchItems();
    const itemFilter = document.querySelector("eox-itemfilter");
    itemFilter.config = {
      titleProperty: "title",
      filterProperties: ["osc:themes", "osc:variables"],
      // enableSearch: true,
      // enableHighlighting: true,
      // aggregateResults: "osc:variables",
      showResults: false,
      fuseConfig: {
        keys: ["title", "osc:themes", "osc:variables"],
      },
      onSearch: (items) => {
        const metrics = this.createMetrics(items);
        if (this.showEmptyItems) {
          metrics[this.aggregationProperty] = {
            ...this.allAggregationItems,
            ...metrics[this.aggregationProperty],
          };
        }
        this.metrics = metrics;
      },
    };
    itemFilter.apply(items);
    this.metrics = this.createMetrics(items);
    this.items = items;
  },
  methods: {
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
    async fetchItems() {
      let items;
      await this.$dynamicCatalog
        .$get("/collections/metadata:main/items?type=collection")
        .then(async (itemsResponse) => {
          const additionalPages =
            itemsResponse.numberMatched / itemsResponse.numberReturned;
          let currPage = 1;
          for (let pageCount = 1; pageCount < additionalPages; pageCount++) {
            currPage++;
            await this.$dynamicCatalog
              .$get(
                `/collections/metadata:main/items?type=collection&limit=500&offset=${
                  (currPage - 1) * 500
                }`
              )
              .then((response) => {
                itemsResponse.features = [
                  ...itemsResponse.features,
                  ...response.features,
                ];
              })
              .catch((err) => console.error(err));
          }
          items = itemsResponse.features;
        })
        .catch((err) => console.error(err));
      return items;
    },
  },
};
</script>
