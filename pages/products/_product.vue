<template>
  <div v-if="product">
    <bread-crumb-nav
      :theme="product['osc:theme']"
      :product="product.id"
    />
    <v-container class="white px-15">
      <v-row>
        <v-col>
          <h1 :class="$vuetify.breakpoint.mdAndUp ? 'text-h4 mt-5' : 'text-h6 mt-5'">
            {{ product.properties.title }}
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-chip
            v-for="theme in product.properties['osc:themes']"
            :key="theme"
            class="mr-1 text-uppercase"
            color="grey"
            small
            dark
            label
            :to="`/themes/${slugify(theme)}`"
          >
            {{ theme }}
          </v-chip>
          <v-chip
            class="text-uppercase"
            color="green"
            small
            dark
            label
            :to="`/variables/${slugify(product.properties['osc:variable'])}`"
          >
            {{ product.properties['osc:variable'] }}
          </v-chip>
        </v-col>
      </v-row>
      <hr class="my-7">
      <v-row>
        <v-col cols="12" md="6">
          <template v-if="$vuetify.breakpoint.smAndDown">
            <v-scale-transition>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <small v-show="showDescription" v-html="product.properties.description" />
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
              <!-- eslint-disable-next-line vue/no-v-html -->
              <small v-html="product.properties.description" />
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
          <div class="d-flex align-center">
            <v-icon left>
              mdi-calendar-today
            </v-icon>
            <strong class="text-uppercase mr-2">Start Date</strong> {{ product.properties.start_datetime }}
          </div>
          <div class="d-flex align-center">
            <v-icon left>
              mdi-calendar
            </v-icon>
            <strong class="text-uppercase mr-2">End Date</strong> {{ product.properties.end_datetime }}
          </div>
          <div v-if="product.properties.datetime" class="d-flex align-center">
            <v-icon left>
              mdi-calendar-check
            </v-icon>
            <strong class="text-uppercase mr-2">Release Date</strong> {{ product.properties.datetime && product.properties.datetime.slice(0, -10) }}
          </div>
          <div class="d-flex align-center mt-5">
            <v-icon left>
              mdi-calendar-text
            </v-icon>
            <strong class="text-uppercase mr-2">Project</strong> {{ product.properties['osc:project'] }}
          </div>
          <div class="d-flex align-center mb-5">
            <v-icon left>
              mdi-satellite
            </v-icon>
            <strong class="text-uppercase mr-2">Satellite missions</strong> {{ product.properties['osc:missions'].join(', ') }}
          </div>
          <v-btn
            v-for="(link, key) in product.links.filter(el => el.rel === 'via').sort((a,b) => (a.title < b.title || !b.title) ? -1 : 1)"
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
          <hr class="my-7">
          <h6 class="text-h6 mb-2 d-flex align-center">
            <v-icon left>
              mdi-image-size-select-large
            </v-icon>
            Product Extent
          </h6>
          <no-ssr>
            <CoverageMap
              ref="map"
              :features="[product]"
            />
          </no-ssr>
        </v-col>
      </v-row>
    </v-container>
    <edit-button />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import CoverageMap from '@/components/CoverageMap.vue'

export default {
  name: 'ProductSingle',
  components: {
    CoverageMap
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
