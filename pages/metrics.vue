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
      v-if="metrics"
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
              showEmptyItems ? "Hide empty variables" : "Show empty variables"
            }}
          </span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="mt-0 mt-md-3">
      <v-col cols="12" class="pa-0 py-md-3">
        <MetricsTable
          v-if="metrics"
          :headers="Object.keys(metrics.years)"
          :items="
            Object.values(metrics.variables)
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
    <eox-itemfilter></eox-itemfilter>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    variables: null,
    items: null,
    metrics: null,
    tableZoom: 1,
    showEmptyItems: false,
  }),
  async mounted() {
    this.variables = await this.fetchVariables();
    const items = await this.fetchItems();
    const itemFilter = document.querySelector("eox-itemfilter");
    itemFilter.config = {
      titleProperty: "title",
      filterProperties: ["osc:themes", "osc:variables"],
      enableSearch: true,
      enableHighlighting: true,
      aggregateResults: "osc:variables",
      fuseConfig: {
        keys: ["title", "osc:themes", "osc:variables"],
      },
      onSearch: (items) => {
        const metrics = this.createMetrics(items);
        this.metrics = {
          ...metrics,
          variables: {
            ...this.variables,
            ...metrics.variables,
          },
        };
      },
    };
    itemFilter.apply(items);
    const metrics = this.createMetrics(items);
    this.metrics = {
      ...metrics,
      variables: {
        ...this.variables,
        ...metrics.variables,
      },
    };
    this.items = items;
  },
  methods: {
    async fetchVariables() {
      let variables = {};
      await this.$staticCatalog
        .$get("/variables/catalog")
        .then((response) => {
          response.links
            .filter((l) => l.rel === "child")
            .forEach((v) => {
              const variableId = v.href.substring(
                v.href.indexOf("./") + 2,
                v.href.indexOf("/catalog.json")
              );
              variables[variableId] = {
                id: variableId,
                name: v.title,
                products: {},
                years: {},
              };
            });
        })
        .catch((err) => console.error(err));
      return variables;
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
