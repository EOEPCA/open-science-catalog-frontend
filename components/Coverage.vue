<template>
  <v-dialog v-model="dialog" scrollable width="1000">
    <template #activator="{ on, attrs }">
      <v-tooltip v-model="showActivatorTooltip" top>
        <template #activator="{}">
          <v-btn
            icon
            v-bind="attrs"
            :color="variable ? 'primary' : 'applications'"
            :disabled="disable"
            v-on="on"
            @mouseover="showActivatorTooltip = true"
            @mouseleave="showActivatorTooltip = false"
          >
            <v-icon>{{ variable ? "mdi-earth" : "mdi-map-marker" }}</v-icon>
          </v-btn>
        </template>
        <span>Coverage</span>
      </v-tooltip>
    </template>
    <v-card v-if="products">
      <v-card-title class="text-h6">
        <v-icon color="applications" left>
          {{ products.length === 1 ? "mdi-map-marker" : "mdi-earth" }}
        </v-icon>
        <span
          >{{
            products.length === 1
              ? products[0].title
              : variable && variable.name
          }}
          Coverage</span
        >
        <v-spacer />
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider />

      <v-card-text class="px-0 black--text pb-0 pb-md-3">
        <v-container>
          <v-row>
            <v-col cols="12" sm="5">
              <v-list v-if="!!variable" dense subheader>
                <v-subheader class="px-0"> Products </v-subheader>
                <v-divider />
                <v-list-item
                  v-for="product in products"
                  :key="product.id"
                  class="px-0"
                  style="cursor: pointer"
                  @mouseover="currentHighlight = product"
                  @mouseleave="currentHighlight = null"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{
                      product.title
                    }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action class="flex-row">
                    <v-btn
                      v-if="variable"
                      icon
                      color="primary"
                      :disabled="!product.geometry"
                    >
                      <v-icon>mdi-map-marker</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      color="primary"
                      :to="`/products/${$extractSlug(product)}`"
                      target="_blank"
                    >
                      <v-icon>mdi-open-in-new</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
              <template v-else-if="products[0]">
                <div><strong>Name</strong></div>
                <div class="mb-2">
                  {{ products[0].title }}
                </div>
                <div><strong>Region</strong></div>
                <div class="mb-2">
                  {{ products[0]["osc:region"] }}
                </div>
                <div><strong>Satellite missions</strong></div>
                <div class="mb-2">
                  {{ products[0]["osc:missions"].join(", ") }}
                </div>
                <div><strong>BBOX</strong></div>
                <div class="mb-2">
                  {{ products[0].extent.spatial.bbox }}
                </div>
              </template>
            </v-col>
            <v-col cols="12" sm="7">
              <client-only>
                <CoverageMap
                  v-if="products"
                  ref="map"
                  :features="products.map(product => {
                    return {
                      ...product,
                      geometry: {
                        bbox: product.extent.spatial.bbox[0],
                        coordinates: [
                          [
                            [
                              product.extent.spatial.bbox[0][0],
                              product.extent.spatial.bbox[0][1]
                            ],
                            [
                              product.extent.spatial.bbox[0][2],
                              product.extent.spatial.bbox[0][1]
                            ],
                            [
                              product.extent.spatial.bbox[0][2],
                              product.extent.spatial.bbox[0][3],
                            ],
                            [
                              product.extent.spatial.bbox[0][0],
                              product.extent.spatial.bbox[0][3]
                            ],
                            [
                              product.extent.spatial.bbox[0][0],
                              product.extent.spatial.bbox[0][1]
                            ]
                          ]
                        ],
                        type: 'Polygon'
                      },
                      type: 'Feature'
                    }
                  })"
                  :highlight="currentHighlight"
                />
              </client-only>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CoverageMap from "@/components/CoverageMap.vue";

export default {
  name: "CoverageDialog",
  components: {
    CoverageMap,
  },
  props: {
    products: {
      type: Array,
      default: null,
    },
    variable: {
      type: Object,
      default: null,
    },
    disable: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      dialog: false,
      showActivatorTooltip: false,
      currentHighlight: null,
    };
  },
  watch: {
    dialog(on) {
      if (on) {
        if (this.variable && !this.products) {
          this.$emit("loadProducts");
        }
      }
    },
  },
};
</script>
