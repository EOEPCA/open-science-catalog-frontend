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
          Search
        </h1>
      </v-col>
    </v-row>
    <v-row class="white flex-grow-0">
      <v-col cols="12">
        <eox-itemfilter
          class="row"
          style="position: relative; z-index: 1"
        ></eox-itemfilter>
      </v-col>
    </v-row>
    <v-progress-linear v-if="!items" indeterminate></v-progress-linear>
    <v-row
      v-if="results"
      class="d-flex flex-grow-1"
      style="overflow-y: auto; max-height: 100%"
    >
      <v-col
        v-for="result in results"
        :key="result.id"
        cols="12"
        class="px-4 pt-4 pb-0"
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
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    // years: [],
    items: null,
    results: null,
  }),
  async mounted() {
    const items = await this.retreiveProducts();
    const itemFilter = document.querySelector("eox-itemfilter");
    itemFilter.config = {
      titleProperty: "title",
      filterProperties: ["theme", "variable", "project", "eo-mission"],
      enableSearch: true,
      // enableHighlighting: true,
      showResults: false,
      // aggregateResults: "osc:variables",
      inlineMode: true,
      fuseConfig: {
        includeScore: true,
        keys: [
          "title",
          "theme",
          "variable",
          "project",
          "description",
          "eo-mission",
        ],
        // threshold: 0.4,
        // distance: 100,
      },
      onSearch: (items) => {
        this.results = items;
        // this.aggregateItems(items);
      },
      // externalSearch: (input, filters) => {
      //     const base = 'https://resource-catalogue.testing.opensciencedata.esa.int/collections/metadata:main/items?type=collection&f=json'
      //     if (filters) {
      //       let filterString = ''
      //       Object.keys(filters).forEach((filter) => Object.entries(filters[filter]).forEach(([key, value]) => {
      //         if (value) {
      //           filterString += `${filter.replace('s', '')}:${key}`
      //         }
      //       }))
      //       console.log(filterString)
      //       return `${base}&q=${input}&filter=keywords%20ILIKE%20%27%${filterString}%%27`
      //     } else {
      //       return `${base}&q=${input}`
      //     }
      //   }
    };
    itemFilter.apply(items);
    // this.aggregateItems(items);
    this.items = items;
    this.results = items;
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
  line-height: 1.4;
}
eox-itemfilter::part(input-search) {
  background: #fff;
  border-radius: 4px;
  border: thin solid #0004;
  font-size: 1rem;
  line-height: 1.7;
}
</style>
