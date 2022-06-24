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
          ref="searchBox"
          embedded-mode
          :sort-by="productsFilterSortBy ? productsFilterSortBy : 'title'"
          :sort-order="productsFilterOrder"
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
          @searchQuery="handleSearchEmit"
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
          </v-col>
        </v-row>
        <item-display
          :items="products"
          :number-of-pages="numberOfPages"
          @input="filterProducts"
          @next="filterProducts"
          @previous="filterProducts"
        />
      </v-container>
    </Item>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ItemDisplay from '@/components/ItemDisplay.vue'

export default {
  name: 'VariableSingle',
  components: {
    ItemDisplay
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
      productsFilterSortBy: null,
      productsFilterOrder: null,
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
          await this.$staticCatalog
            .$get(this.$replaceStaticBase(link.href)).then((productResponse) => {
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
    filterProducts (init) {
      if (typeof init === 'number') {
        this.page = init
      }
      this.$nextTick(() => {
        if (this.productsFilterSortBy && this.productsFilterOrder) {
          this.$refs.searchBox.filterProducts(init)
        }
      })
    },
    handleSearchEmit (result) {
      this.products = result.items
      this.numberOfPages = result.numberOfPages
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
