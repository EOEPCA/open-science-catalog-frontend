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
            <div
              :class="$vuetify.breakpoint.mdAndUp ? 'text-h4' : 'text-h6'"
            >
              {{ variable.id }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-chip
              color="rgb(124, 69, 86)"
              dark
              label
            >
              {{ variable['osc:theme'].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) }}
            </v-chip>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <template v-if="$vuetify.breakpoint.smAndDown">
              <v-scale-transition>
                <small v-show="showDescription">{{ variable.description }}</small>
              </v-scale-transition>
              <v-btn
                text
                x-small
                block
                @click="showDescription = !showDescription"
              >
                <v-icon left>
                  {{ showDescription ? 'mdi-arrow-collapse-vertical' : 'mdi-arrow-expand-vertical' }}
                </v-icon>
                Description
              </v-btn>
            </template>
            <template v-else>
              <h6 class="text-h6 mb-2 d-flex align-center">
                <v-icon left>
                  mdi-text-long
                </v-icon>
                Description
              </h6>
              <p>
                <small>
                  {{ variable.description }}
                </small>
              </p>
            </template>
          </v-col>
          <v-col cols="12" md="6">
            <h6 class="text-h6 mb-2 d-flex align-center">
              <v-icon left>
                mdi-information-outline
              </v-icon>
              Details
            </h6>
            <v-btn
              v-for="(link, key) in variable.links.filter(el => el.rel === 'via').sort((a,b) => (a.title < b.title || !b.title) ? -1 : 1)"
              :key="key"
              color="primary"
              :outlined="link.title !== 'Access'"
              :block="$vuetify.breakpoint.xsOnly"
              :class="$vuetify.breakpoint.xsOnly ? 'mb-2' : 'mr-3'"
              :href="link.href"
              target="_blank"
            >
              <v-icon v-if="link.title === 'Access'" left>
                mdi-location-enter
              </v-icon>
              <v-icon v-else-if="link.title === 'Documentation'" left>
                mdi-file-document-outline
              </v-icon>
              <v-icon v-else left>
                mdi-web
              </v-icon>
              {{ link.title || 'Website' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
    <edit-button />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

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
    this.variable = await this.retreiveVariable(this.$route.params.variable)

    // format products
    await Promise.all(this.variable.links.map(async (link) => {
      if (link.rel === 'item') {
        const productResponse = await this.$axios.$get(link.href)
        this.products.push(productResponse)
      }
    }))

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
      const productsResponse = await this.fetchCustomQuery(queryString)

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
