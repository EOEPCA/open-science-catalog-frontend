<template>
  <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-8' : 'pa-4'">
    <v-row class="py-5">
      <v-col>
        <h1
          :class="$vuetify.breakpoint.mdAndUp ? 'text-h2 mt-0' : 'text-h4 mt-5'"
        >
          Search
        </h1>
      </v-col>
    </v-row>
    <search-combobox
      ref="searchBox"
      :current-page="page"
      :sort-by="productsFilterSortBy"
      :sort-order="productsFilterOrder"
      class="my-4"
      @searchQuery="handleSearchEmit"
    />
    <v-row>
      <v-col class="d-flex">
        <v-spacer />
        <v-tooltip top>
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              class="mr-4"
              v-bind="attrs"
              v-on="on"
              @click="TOGGLE_EMPTY_ITEMS"
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
            {{ showEmptyItems ? "Hide empty items" : "Show empty items" }}
          </span>
        </v-tooltip>
        <v-select
          v-model="productsFilterSortBy"
          dense
          hide-details
          :items="productsFilterOptions"
          label="Sort by"
          outlined
          class="mr-2"
          :style="`max-width:${$vuetify.breakpoint.lgAndUp ? 150 : 120}px`"
          @change="filterProducts"
        />
        <v-select
          v-model="productsFilterOrder"
          dense
          hide-details
          :items="['Ascending', 'Descending']"
          label="Order"
          outlined
          :style="`max-width:${$vuetify.breakpoint.lgAndUp ? 150 : 120}px`"
          @change="filterProducts"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-end">
        <small>{{ numberOfItems }} items found</small>
      </v-col>
    </v-row>
    <item-display
      :items="items"
      :show-empty-items="showEmptyItems"
      :number-of-pages="numberOfPages"
      @input="filterProducts"
      @next="filterProducts"
      @previous="filterProducts"
    />
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import SearchCombobox from "@/components/SearchCombobox.vue";
import ItemDisplay from "@/components/ItemDisplay.vue";

export default {
  name: "Search",
  components: {
    SearchCombobox,
    ItemDisplay,
  },
  data() {
    return {
      items: [],
      page: 1,
      numberOfPages: 1,
      numberOfItems: 0,
      productsFilterOptions: [
        {
          text: "Name",
          value: "title",
        },
        {
          text: "Description",
          value: "description",
        },
      ],
      productsFilterSortBy: "title",
      productsFilterOrder: "Ascending",
    };
  },
  head: {
    title: "Search",
  },
  computed: {
    ...mapState(["showEmptyItems"]),
  },
  mounted() {
    this.filterProducts(true);
  },
  methods: {
    ...mapMutations(["TOGGLE_EMPTY_ITEMS"]),
    ...mapActions("staticCatalog", ["retreiveProjects"]),
    async handleSearchEmit(result) {
      await Promise.all(
        result.items.map(async (item) => {
          if (item.id.substring(0, 7) === "project") {
            await this.retreiveProjects(this.$extractSlug(item))
              .then((projectResponse) => {
                item.links = projectResponse.links;
              })
              .catch((err) => console.log(err));
          }
        })
      );
      this.items = result.items;
      this.numberOfPages = result.numberOfPages;
      this.numberOfItems = result.numberOfItems;
    },
    filterProducts(init) {
      if (typeof init === "number") {
        this.page = init;
      }
      this.$nextTick(() => {
        this.$refs.searchBox.filterProducts(init);
      });
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .v-select__slot {
  .v-input__append-inner {
    display: none;
  }
}
.headless-input {
  ::v-deep .v-input__control > .v-input__slot:before {
    border: none;
  }
  label {
    display: none;
  }
}
::v-deep .v-text-field__slot input,
::v-deep .v-select__selections input {
  margin-top: 5px;
}
</style>
