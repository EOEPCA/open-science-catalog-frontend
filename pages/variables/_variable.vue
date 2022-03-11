<template>
  <div v-if="variable">
    <bread-crumb-nav
      :theme="variable['osc:theme']"
      :variable="variable.id"
    />
    <div
      class="pb-4 variableHeaderContainer"
    >
      <v-container>
        <v-row class="ml-2">
          <span class="mt-3 mb-5 text-h2">
            {{ variable.id }}
          </span>
        </v-row>
        <v-row class="ml-2 pt-0 mt-0 mb-4">
          <v-chip
            color="rgb(124, 69, 86)"
            dark
          >
            {{ variable['osc:theme'] }}
          </v-chip>
        </v-row>
        <v-row class="ml-2">
          <span>
            {{ variable.description }}
          </span>
        </v-row>
      </v-container>
    </div>
    <v-container class="white" :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-0'">
      <v-row class="pa-6">
        <v-col cols="12" md="4">
          <span class="text-h2">
            Products
          </span>
        </v-col>
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
          <v-select
            v-if="metrics"
            v-model="productsFilterMission"
            dense
            hide-details
            :items="metrics.missions.map(m => m.name).sort()"
            label="Satellite mission"
            :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
            outlined
          />
          <v-text-field
            v-model="productsSearch"
            dense
            hide-details
            outlined
            single-line
            style="width: 400px !important; flex-grow: 0"
            label="Search products"
            prepend-inner-icon="mdi-magnify"
            @input="filterProducts"
          />
        </v-col>
      </v-row>
      <item-grid
        type="products"
        :items="products"
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
  </div>
</template>

<script>
import BreadCrumbNav from '@/components/BreadCrumbNav.vue'

export default {
  name: 'VariableSingle',
  components: {
    BreadCrumbNav
  },
  data () {
    return {
      variable: null,
      products: [],
      productsSearch: '',
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
      productsFilterMission: null,
      metrics: null,
      page: 1,
      numberOfPages: 1
    }
  },
  head () {
    return {
      title: this.$route.params.variable.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  watch: {
    productsFilterMission () {
      this.filterProducts()
    }
  },
  async created () {
    // todo handle variable names divided by '_'
    await this.$staticCatalog.$get(`variables/${this.$route.params.variable}`).then((res) => {
      this.variable = res
    }).catch((err) => {
      console.log(err)
    })

    // format products
    await Promise.all(this.variable.links.map(async (link) => {
      if (link.rel === 'item') {
        const productResponse = await this.$staticCatalog.$get(`/products/${link.href.slice(0, -5)}`)
        this.products.push(productResponse)
      }
    }))

    this.metrics = await this.$staticCatalog.$get('/metrics')
  },
  methods: {
    async filterProducts () {
      // const queryString = `/collections/metadata:main/items?type=dataset&q=${str}&sortby=${this.productsFilterSortBy}`
      // TODO proper filtering (todo on backend)
      const queryString = `/collections/metadata:main/items?type=dataset${
        `&q=${this.$metaInfo.title}`}${
          (this.productsSearch ? `&q=${this.productsSearch}` : '')}${
            (this.productsFilterMission ? `&q=${this.productsFilterMission}` : '')}&sortby=${
              this.productsFilterSortBy}&startindex=${
                (this.page - 1) * 10}`
      const productsResponse = await this.$dynamicCatalog.$get(queryString)

      if (this.productsFilterOrder === 'Descending') {
        this.products = productsResponse.features.reverse()
      }
      this.products = productsResponse.features
      this.numberOfPages = Math.round(productsResponse.numberMatched / 10)
    }
  }
}
</script>

<style>
.variableHeaderContainer {
  border-bottom: 0.25em solid #335E6F;
}
</style>
