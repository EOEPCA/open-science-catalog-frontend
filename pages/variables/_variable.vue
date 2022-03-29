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
        <v-row>
          <v-col>
            <h2 class="text-h2">
              {{ variable.id }}
            </h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-chip
              color="rgb(124, 69, 86)"
              dark
            >
              {{ variable['osc:theme'] }}
            </v-chip>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span>
              {{ variable.description }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <a
              v-for="link in variable.links.filter(el => el.rel === 'via')"
              :key="link.href"
              :href="link.href"
              target="_blank"
              class="mr-1 variableLink"
            >
              <v-icon>
                mdi-link
              </v-icon>
              <span>
                {{ link.title }}
              </span>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="white" :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-0'">
      <search-combobox
        embedded-mode
        :pre-selected-items="[
          {
            key: 'variable',
            value: variable.id
          },
          {
            key: 'type',
            value: 'product'
          }
        ]"
        class="ma-8 mb-0"
      />
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
          <!-- <v-text-field
            v-model="productsSearch"
            dense
            hide-details
            outlined
            single-line
            style="width: 400px !important; flex-grow: 0"
            label="Search products"
            prepend-inner-icon="mdi-magnify"
            @input="filterProducts"
          /> -->
        </v-col>
      </v-row>
      <item-grid
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
import { mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters('metrics', [
      'missions',
      'summary',
      'themes',
      'variables'
    ])
  },
  watch: {
    productsFilterMission () {
      this.filterProducts()
    }
  },
  async created () {
    await this.retreiveVariable(this.$route.params.variable)
    // todo handle variable names divided by '_'
    this.variable = this.variables[this.$route.params.variable]

    // format products
    await Promise.all(this.variable.links.map(async (link) => {
      if (link.rel === 'item') {
        const productResponse = await this.$axios.$get(link.href)
        this.products.push(productResponse)
      }
    }))

    await this.retreiveMetrics()
    this.metrics = {}
    this.metrics.missions = this.missions
    this.metrics.summary = this.summary
    this.metrics.themes = this.themes
  },
  methods: {
    ...mapActions('metrics', [
      'retreiveMetrics',
      'retreiveVariable'
    ]),
    async filterProducts () {
      // const queryString = `/collections/metadata:main/items?type=dataset&q=${str}&sortby=${this.productsFilterSortBy}`
      // TODO proper filtering (todo on backend)
      const queryString = `/collections/metadata:main/items?type=dataset${
        `&q=${this.$metaInfo.title}`}${
          (this.productsSearch ? `&q=${this.productsSearch}` : '')}${
            (this.productsFilterMission ? `&q=${this.productsFilterMission}` : '')}&sortby=${
              this.productsFilterSortBy}&offset=${
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

<style scoped>
.variableHeaderContainer {
  border-bottom: 0.25em solid #335E6F;
}
.variableLink {
  text-decoration: none;
}
</style>
