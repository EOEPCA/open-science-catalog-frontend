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
    :style="`height: 100%; ${
      $vuetify.breakpoint.smAndDown ? 'overflow-y: auto' : ''
    }`"
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
          Product Search
        </h1>
      </v-col>
    </v-row>
    <v-progress-linear v-if="!items" indeterminate></v-progress-linear>
    <v-row class="fill-height flex-grow-1" style="height: 0">
      <v-col v-if="results" cols="12" md="3" class="px-4 py-0 order-1">
        <h2>Filters</h2>
      </v-col>
      <v-col
        v-if="results"
        cols="12"
        md="9"
        class="px-4 py-0 order-3 order-md-2"
      >
        <h2>Results ({{ results.length }})</h2>
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="fill-height order-2 order-md-3"
        style="position: relative"
      >
        <v-row style="overflow-y: auto; max-height: 100%">
          <v-col cols="12">
            <eox-itemfilter
              v-show="results"
              :filterProperties.prop="filterProperties"
              :showResults.prop="false"
              :items.prop="items"
              class="row mb-4 fill-height"
              style="position: relative; z-index: 1"
            >
              <span slot="filterstitle"><br /><br /></span>
            </eox-itemfilter>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="9"
        class="fill-height order-4"
        style="position: relative"
      >
        <v-row
          v-if="results"
          class="my-0"
          style="overflow-y: auto; max-height: 100%"
        >
          <v-col
            v-for="result in results"
            :key="result.id"
            cols="12"
            class="px-4 pt-0 pb-4"
          >
            <v-card :to="`/products/${result.id}/collection`" outlined>
              <v-card-title
                class="text-subtitle-2 text-uppercase"
                style="word-break: break-word"
              >
                {{ result.title }}
              </v-card-title>
              <v-card-text>
                <p>
                  {{
                    result.description
                      ? `${result.description.substring(0, 150)} [...]`
                      : "No description"
                  }}
                </p>
                <div class="mt-2">
                  <v-chip
                    v-for="keyword in result.keywords"
                    :key="keyword"
                    x-small
                    color="primary"
                    dark
                    label
                    class="mr-2 mb-2 text-uppercase"
                  >
                    {{ keyword }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    // years: [],
    items: null,
    results: null,
    filterProperties: [
      {
        key: "geometry",
        type: "spatial",
        title: "Region",
        expanded: true,
      },
      {
        keys: ["title", "themes", "variable"],
        title: "Freetext search",
        placeholder: "Type something...",
        type: "text",
      },
      { key: "theme" },
      { key: "variable" },
      { key: "project" },
      { key: "eo-mission" },
    ],
  }),
  async mounted() {
    const items = await this.retreiveProducts();
    this.items = items;
    this.results = items;
    this.$nextTick(() => {
      const itemFilter = document.querySelector("eox-itemfilter");
      itemFilter.addEventListener("filter", (event) => {
        this.results = event.detail.results;
      });
    });
  },
  methods: {
    ...mapActions(["retreiveProducts"]),
  },
};
</script>

<style>
eox-itemfilter::part(details-filter) {
  background: #fff;
  border-radius: 4px;
  border: thin solid #0004;
  padding: 5px 7px;
}
eox-itemfilter::part(input-search) {
  background: #fff;
  border-radius: 4px;
  border: thin solid #0004;
  font-size: 1rem;
  line-height: 1.7;
}
eox-itemfilter::part(spatial-filter-map) {
  height: 300px;
}
</style>
