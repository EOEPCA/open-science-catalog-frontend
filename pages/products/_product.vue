<template>
  <div v-if="product">
    <Item
      :title="product.properties.title"
      :description="product.properties.description"
      :chips="{
        themes: product.properties['osc:themes'],
        variable: product.properties['osc:variable']
      }"
      :details="{
        start_datetime: product.properties.start_datetime,
        end_datetime: product.properties.end_datetime,
        datetime: product.properties.datetime,
        'osc:project': product.properties['osc:project'],
        'osc:missions': product.properties['osc:missions'],
        links: product.links
      }"
      :nav="{
        theme: product['osc:theme'],
        product: product.id
      }"
    >
      <v-container class="white" :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-2'">
        <h6 class="text-h6 mt-8 mb-2 d-flex align-center">
          <v-icon left>
            mdi-image-size-select-large
          </v-icon>
          Product Extent
        </h6>
        <client-only>
          <CoverageMap
            ref="map"
            :features="[product]"
          />
        </client-only>
      </v-container>
    </Item>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Item from '@/components/Item.vue'
import CoverageMap from '@/components/CoverageMap.vue'

export default {
  name: 'ProductSingle',
  components: {
    CoverageMap,
    Item
  },
  data () {
    return {
      product: null,
      productsDialog: false,
      showDescription: false
    }
  },
  head () {
    return {
      title: this.$route.params.product.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  async created () {
    this.product = await this.retreiveProduct(this.$route.params.product)
    this.product.properties = {
      ...this.product.properties,
      description: this.product.properties.description
    }
  },
  methods: {
    ...mapActions('staticCatalog', [
      'retreiveProduct'
    ])
  }
}
</script>
