<template>
  <div v-if="project">
    <Item
      :id="project.id"
      :title="project.properties.title"
      :subtitle="project.properties['osc:name']"
      :chips="{
        themes: project.properties['osc:themes'],
        status: project.properties['osc:status']
      }"
      :description="project.properties.description"
      :details="{
        start_datetime: project.properties.start_datetime,
        end_datetime: project.properties.end_datetime,
        consortium: project.properties['osc:consortium'],
        links: project.links
      }"
      :nav="{
        theme: project.collection,
        project: {
          url: $extractSlug(project),
          name: project.properties.title
        }
      }"
    >
      <v-container class="white" :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-2'">
        <search-combobox
          ref="searchBox"
          embedded-mode
          :current-page="page"
          :sort-by="productsFilterSortBy ? productsFilterSortBy : 'title'"
          :sort-order="productsFilterOrder"
          :pre-selected-items="[
            {
              key: 'project',
              value: project.id
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
              :items="[{ text: 'Name', value: 'title' }]"
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

import Item from '@/components/Item.vue'
import ItemDisplay from '~/components/ItemDisplay.vue'

export default {
  name: 'ProjectSingle',
  components: {
    Item,
    ItemDisplay
  },
  data () {
    return {
      project: null,
      products: [],
      productsSearch: '',
      productsFilterSortBy: 'title',
      productsFilterOrder: 'Ascending',
      showDescription: false,
      page: 1,
      numberOfPages: 1
    }
  },
  head () {
    return {
      title: this.$route.params.project.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  computed: {
    ...mapState('staticCatalog', [
      'projects'
    ])
  },
  async created () {
    try {
      this.project = await this.retreiveProjects(this.$route.params.project)
    } catch (err) {
      console.error(err)
    }
    this.filterProducts()
  },
  methods: {
    ...mapActions('dynamicCatalog', [
      'fetchProducts'
    ]),
    ...mapActions('staticCatalog', [
      'retreiveProjects'
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
