<template>
  <div v-if="variable">
    <Item
      :title="variable.id"
      :chips="{
        themes: [variable['osc:theme'].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())]
      }"
      :description="variable.description"
      :details="{
        links: variable.links
      }"
      :nav="{
        theme: variable['osc:theme'],
        variable: variable.id
      }"
    >
      <v-container class="white" :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-2'">
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
          class="mt-8 mb-0"
        />
        <v-row class="pt-8">
          <v-col cols="12" md="4">
            <span class="text-h4">
              Products
            </span>
          </v-col>
          <v-col cols="12" md="8" class="d-flex">
            <v-spacer />
            <v-select
              v-model="productsFilterSortBy"
              dense
              hide-details
              :items="productsFilterOptions"
              label="Sort by"
              outlined
              class="mr-2"
              :style="`max-width:${$vuetify.breakpoint.lgAndUp ? 150 : 120}px`"
              @change="filterProducts()"
            />
            <v-select
              v-model="productsFilterOrder"
              dense
              hide-details
              :items="['Ascending', 'Descending']"
              label="Order"
              outlined
              class="mr-2"
              :style="`max-width:${$vuetify.breakpoint.lgAndUp ? 150 : 120}px`"
              @change="filterProducts()"
            />
            <v-select
              v-if="metrics"
              v-model="productsFilterMission"
              dense
              hide-details
              :items="metrics.missions.map(m => m.name).sort()"
              label="Satellite mission"
              :style="`max-width:${$vuetify.breakpoint.lgAndUp ? 150 : 120}px`"
              outlined
            />
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
    </Item>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'VariableSingle',
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
      numberOfPages: 1,
      showDescription: false
    }
  },
  head () {
    return {
      title: this.$route.params.variable.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  computed: {
    ...mapState('staticCatalog', [
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
    await this.retreiveVariable(this.$route.params.variable).then(async (variable) => {
      this.variable = variable
      // format products
      await Promise.all(this.variable.links.map(async (link) => {
        if (link.rel === 'item') {
          await this.$axios.$get(link.href).then((productResponse) => {
            this.products.push(productResponse)
          }).catch(err => console.error(err))
        }
      }))
    }).catch(err => console.error(err))

    this.metrics = await this.retreiveMetrics()
  },
  methods: {
    ...mapActions('dynamicCatalog', [
      'fetchCustomQuery'
    ]),
    ...mapActions('staticCatalog', [
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
      await this.fetchCustomQuery(queryString).then((productsResponse) => {
        if (this.productsFilterOrder === 'Descending') {
          this.products = productsResponse.features.reverse()
        }
        this.products = productsResponse.features
        this.numberOfPages = Math.round(productsResponse.numberMatched / 10)
      })
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
