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
          <v-dialog
            v-model="productsDialog"
            width="500"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                :block="$vuetify.breakpoint.xsOnly"
                :class="$vuetify.breakpoint.xsOnly ? 'mb-2' : 'mr-3'"
                v-bind="attrs"
                v-on="on"
              >
                Product Access
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                Product links
                <v-spacer />
                <v-icon @click="productsDialog = false">
                  mdi-close
                </v-icon>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <v-row>
                  <v-col
                    v-for="link in product.links.filter(el => el.rel === 'via')"
                    :key="link.href"
                    cols="6"
                  >
                    <v-card class="pa-4" outlined>
                      <v-chip
                        color="green"
                        small
                        label
                        dark
                      >
                        Link
                      </v-chip>
                      <div>
                        Website
                      </div>
                      <v-icon>
                        mdi-web
                      </v-icon>
                      Type URL
                      <v-btn
                        color="primary"
                        :href="link.href"
                        target="_blank"
                      >
                        Open Link
                      </v-btn>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-btn
            color="primary"
            outlined
            :block="$vuetify.breakpoint.xsOnly"
            v-bind="attrs"
          >
            Documentation
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
  </div>
</template>

<script>
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
    await this.$staticCatalog.$get(`products/${this.$route.params.product}`).then((res) => {
      this.product = {
        ...res,
        properties: {
          ...res.properties,
          description: res.id === 'product-84' // TEMP DEMO
            ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus. Euismod nisi porta lorem mollis aliquam ut porttitor. Pharetra vel turpis nunc eget lorem dolor. Facilisis mauris sit amet massa vitae tortor condimentum lacinia.<br /><br />
            <img style="max-width: 100%" src="https://dummyimage.com/480x120/ddd/aaa" /><br /><br />
            Feugiat nisl pretium fusce id velit. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Eget mauris pharetra et ultrices neque ornare aenean. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt augue interdum velit euismod in pellentesque.<br /><br />
            <a href="#">Laoreet non curabitur gravida arcu ac</a>. Eget nunc scelerisque viverra mauris in. Purus in massa tempor nec feugiat nisl.<br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus. Euismod nisi porta lorem mollis aliquam ut porttitor. Pharetra vel turpis nunc eget lorem dolor. Facilisis mauris sit amet massa vitae tortor condimentum lacinia.<br /><br />
            <img style="max-width: 50%" src="https://dummyimage.com/300x300/aaa/fff" /><img style="max-width: 50%" src="https://dummyimage.com/300x300/ddd/aaa" /><br /><br />
            Feugiat nisl pretium fusce id velit. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Eget mauris pharetra et ultrices neque ornare aenean. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt augue interdum velit euismod in pellentesque.<br /><br />
            <a href="#">Laoreet non curabitur gravida arcu ac</a>. Eget nunc scelerisque viverra mauris in. Purus in massa tempor nec feugiat nisl.<br /><br />`
            : res.properties.description
        }
      }
    })
  }
}
</script>
