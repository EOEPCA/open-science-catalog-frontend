<template>
  <div v-if="project">
    <Item
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
        project: project.properties.title
      }"
    >
      <v-container class="white" :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-2'">
        <search-combobox
          embedded-mode
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
        />
        <v-row class="pt-8">
          <v-col cols="12" md="4">
            <span class="text-h4">
              Products
            </span>
          </v-col>
          <v-col cols="12" md="8" :class="$vuetify.breakpoint.lgAndUp ? 'd-flex' : ''">
            <v-spacer />
            <v-select
              v-model="productsFilterSortBy"
              dense
              hide-details
              :items="['Name']"
              label="Sort by"
              outlined
              :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
              style="max-width:150px"
            />
            <v-select
              v-model="productsFilterOrder"
              dense
              hide-details
              :items="['Ascending', 'Descending']"
              label="Order"
              outlined
              :class="$vuetify.breakpoint.lgAndUp ? '' : 'mb-4'"
              style="max-width:150px"
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
            />
          </v-col>
        </v-row>
      </v-container>
    </Item>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Item from '@/components/Item.vue'

export default {
  name: 'ProjectSingle',
  components: {
    Item
  },
  data () {
    return {
      project: null,
      products: [],
      productsSearch: '',
      productsFilterSortBy: 'Name',
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
    this.project = await this.retreiveProjects(this.$route.params.project)
    const productsResponse = await this.fetchProducts({
      projectID: this.project.id,
      page: (this.page - 1) * 10
    })
    this.products = productsResponse.features
    this.numberOfPages = Math.round(productsResponse.numberMatched / 10)
  },
  methods: {
    ...mapActions('dynamicCatalog', [
      'fetchProducts'
    ]),
    ...mapActions('staticCatalog', [
      'retreiveProjects'
    ])
  }
}
</script>
