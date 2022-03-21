<template>
  <v-container>
    <h2 class="text-h2 mt-3 mb-5">
      Search
    </h2>
    <search-combobox
      @searchQuery="handleSearchEmit"
    />
    <v-row>
      <v-col cols="12" md="8" :class="$vuetify.breakpoint.lgAndUp ? 'd-flex' : ''">
        <v-spacer />
        <v-select
          v-model="productsFilterSortBy"
          dense
          hide-details
          :items="productsFilterOptions"
          label="Sort by"
          outlined
          :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
          @change="filterProducts()"
        />
        <v-select
          v-model="productsFilterOrder"
          dense
          hide-details
          :items="['Ascending', 'Descending']"
          label="Order"
          outlined
          :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
          @change="filterProducts()"
        />
      </v-col>
    </v-row>
    <item-grid
      type="products"
      :items="items"
    />
    <v-row>
      <v-col cols="12" class="text-center">
        <v-pagination
          v-model="page"
          :length="numberOfPages"
          @input="filterProducts"
          @next="filterProducts"
          @previous="filterProducts"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemGrid from '@/components/ItemGrid.vue'
import SearchCombobox from '@/components/SearchCombobox.vue'

export default {
  name: 'Search',
  components: {
    ItemGrid,
    SearchCombobox
  },
  data () {
    return {
      items: [],
      page: 1,
      numberOfPages: 1,
      productsFilterOptions: [
        {
          text: 'Name',
          value: 'title'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ],
      productsFilterSortBy: 'title',
      productsFilterOrder: 'Ascending',
      searchQuery: ''
    }
  },
  head: {
    title: 'Search'
  },
  async created () {
    await this.filterProducts()
  },
  methods: {
    async filterProducts () {
      const queryString = `/collections/metadata:main/items?type=dataset&sortby=${
        this.productsFilterOrder === 'Descending' ? `-${this.productsFilterSortBy}` : `${this.productsFilterSortBy}`}&offset=${
          (this.page - 1) * 10}${this.searchQuery}`

      const itemsResponse = await this.$dynamicCatalog.$get(queryString)

      this.items = itemsResponse.features
      this.numberOfPages = Math.round(itemsResponse.numberMatched / 10)
    },
    handleSearchEmit (query) {
      console.log(query)
      this.searchQuery = query
      this.filterProducts()
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .v-select__slot {
  .v-input__append-inner  {
    display: none;
  }
}
.headless-input {
  ::v-deep .v-input__control > .v-input__slot:before {
    border: none
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
