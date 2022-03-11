<template>
  <div v-if="product">
    <bread-crumb-nav
      :theme="product['osc:theme']"
      :product="product.id"
    />
    <v-container class="ml-2">
      <v-row>
        <v-col>
          <div :class="$vuetify.breakpoint.mdAndUp ? 'text-h4' : 'text-h6'">
            {{ product.properties.title }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-chip
          v-for="theme in product.properties['osc:themes']"
          :key="theme"
          class="mx-1"
          color="rgb(124, 69, 86)"
          dark
          label
        >
          {{ theme }}
        </v-chip>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-icon>
                  mdi-calendar-today
                </v-icon>
                Start date {{ product.properties.start_datetime }}
              </v-col>
              <v-col cols="12">
                <v-icon>
                  mdi-calendar
                </v-icon>
                End date {{ product.properties.end_datetime }}
              </v-col>
              <v-col v-if="product.properties.datetime" cols="12">
                <v-icon>
                  mdi-calendar-check
                </v-icon>
                Release date {{ product.properties.datetime && product.properties.datetime.slice(0, -10) }}
              </v-col>
              <v-col cols="12">
                <v-icon>
                  mdi-format-list-bulleted
                </v-icon>
                Project - {{ product.properties['osc:project'] }}
              </v-col>
              <v-col cols="12">
                <v-icon>
                  mdi-image-outline
                </v-icon>
                Satellite missions - {{ product.properties['osc:missions'].join(', ') }}
              </v-col>
              <v-col cols="12">
                <v-dialog
                  v-model="productsDialog"
                  width="500"
                >
                  <template #activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Products
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
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" md="6">
          <v-container>
            <v-row>
              <v-col>
                <template v-if="$vuetify.breakpoint.smAndDown">
                  <v-scale-transition>
                    <small v-show="showDescription">{{ product.properties.description }}</small>
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
                  <v-container>
                    <v-row class="text-h6">
                      <v-col>
                        <v-icon>
                          mdi-file-document
                        </v-icon>
                        Description
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <small>
                          {{ product.properties.description }}
                        </small>
                      </v-col>
                    </v-row>
                  </v-container>
                </template>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
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
      this.product = res
    })
  }
}
</script>
