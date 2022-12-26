<template>
  <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-8' : 'pa-4'">
    <h2 class="text-h2 mt-3 mb-5">
      Start process
    </h2>
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <v-stepper
          v-model="currentStep"
          vertical
        >
          <v-stepper-step
            :complete="currentStep > 1"
            step="1"
          >
            Select a process<span v-if="selectedProcess" class="grey--text"> - {{ selectedProcess }}</span>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-autocomplete
              v-model="selectedProcess"
              :items="[
                'Test Process'
              ]"
              outlined
              required
            ></v-autocomplete>
            <v-btn
              color="primary"
              :disabled="!selectedProcess"
              @click="currentStep++"
            >
              Continue
            </v-btn>
            <v-btn
              text
              @click="navigateParent('/')"
            >
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
            :complete="currentStep > 2"
            step="2"
          >
            Select a product<span v-if="selectedProduct" class="grey--text"> - {{ selectedProduct.properties.title }}</span>
          </v-stepper-step>

          <v-stepper-content step="2">
            <template v-if="!selectedProduct">
              <search-combobox
                ref="searchBox"
                embedded-mode
                :current-page="page"
                :sort-by="productsFilterSortBy ? productsFilterSortBy : 'title'"
                :sort-order="productsFilterOrder"
                :pre-selected-items="[
                  {
                    key: 'type',
                    value: 'product'
                  }
                ]"
                class="my-4 flex-grow-1"
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
                selection-mode
                @input="filterProducts"
                @next="filterProducts"
                @previous="filterProducts"
                @selectItem="(item) => { selectedProduct = item }"
              />
            </template>
            <p v-else>
              {{ selectedProduct.properties.title }}
            </p>
            <v-btn
              color="primary"
              :disabled="!selectedProduct"
              @click="currentStep++"
            >
              Continue
            </v-btn>
            <v-btn
              text
              @click="currentStep--"
            >
              Back
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
            :complete="currentStep > 3"
            step="3"
          >
            Select cloud
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-autocomplete
              v-model="selectedCloud"
              :items="[
                'Space Applications Services',
                'Terradue'
              ]"
              outlined
            ></v-autocomplete>
            <v-btn
              color="primary"
              :disabled="!selectedCloud"
              @click="currentStep++"
            >
              Continue
            </v-btn>
            <v-btn
              text
              @click="currentStep--"
            >
              Back
            </v-btn>
          </v-stepper-content>

          <v-stepper-step step="4">
            Review and start processing
          </v-stepper-step>
          <v-stepper-content step="4">
            <h1>Summary</h1>
            <p>Process: {{ selectedProcess }}</p>
            <p v-if="selectedProduct">
              Product: {{ selectedProduct.properties.title }}
            </p>
            <p>Cloud: {{ selectedCloud }} </p>
            <v-checkbox
              v-model="tosAgreed"
              label="I agree to the processing Terms of Service"
            ></v-checkbox>
            <p
              v-if="processingError"
              class="red--text"
            >
              {{ processingError }}
            </p>
            <p
              v-if="processingInfo"
              class="success--text"
            >
              {{ processingInfo }}
            </p>
            <v-btn
              v-if="!processingInfo"
              color="success"
              :disabled="!tosAgreed || processingStarted"
              :loading="processingStarted"
              @click="startProcessing"
            >
              <v-icon
                left
              >
                mdi-cloud-cog-outline
              </v-icon>
              Start Processing
            </v-btn>
            <v-btn
              v-if="!processingInfo"
              text
              :disabled="processingStarted"
              @click="currentStep--"
            >
              Back
            </v-btn>
            <v-btn
              v-if="processingInfo"
              text
              to="/processing-status"
            >
              <v-icon left>
                mdi-arrow-right
              </v-icon>
              Processing status overview
            </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    currentStep: 1,
    selectedProcess: null,
    products: [],
    productsSearch: '',
    productsFilterSortBy: 'title',
    productsFilterOrder: 'Ascending',
    page: 1,
    numberOfPages: 1,
    selectedProduct: null,
    selectedCloud: null,
    tosAgreed: null,
    processingStarted: null,
    processingError: null,
    processingInfo: null
  }),
  head () {
    return {
      title: 'New process'
    }
  },
  created () {
    const { process, product } = this.$route.query
    if (process && product) {
      this.selectedProcess = process
      this.selectedProduct = { properties: { title: product } }
      this.currentStep = 3
    }
  },
  mounted () {
    this.filterProducts()
  },
  methods: {
    filterProducts (init) {
      if (typeof init === 'number') {
        this.page = init
      }
      this.$nextTick(() => {
        if (this.productsFilterSortBy && this.productsFilterOrder && this.$refs.searchBox) {
          this.$refs.searchBox.filterProducts(init)
        }
      })
    },
    handleSearchEmit (result) {
      this.products = result.items
      this.numberOfPages = result.numberOfPages
    },
    async startProcessing () {
      this.processingInfo = null
      this.processingStarted = true

      console.log(this.selectedProduct)

      try {
        const params = new URLSearchParams()
        params.append('scope', 'openid user_name is_operator')
        params.append('grant_type', 'password')
        params.append('username', 'osc')
        params.append('password', '<pwd>')
        params.append('client_id', 'eba82eb7-5cb0-4f5e-99ab-3830eef383e2')
        const auth = await axios.post('https://auth.eoepca-staging.spaceapplications.com/oxauth/restv1/token', params, {
          headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        const process = await axios.post('https://eoepca-staging.spaceapplications.com/ades/osc/wps3/processes/python-sleeper-0_0_2/execution', {
          inputs: {
            min_sleep_seconds: 10,
            max_sleep_seconds: 10,
            ignored_product: 'https://eoepca.github.io/open-science-catalog-metadata/projects/4d-antarctica.json'
          },
          outputs: {
            wf_outputs: {
              transmissionMode: 'value'
            }
          }
        }, {
          headers: {
            Accept: 'application/json',
            'X-User-Id': auth.data.id_token,
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.data.id_token}`,
            Prefer: 'respond-async'
          }
        })

        console.log(process)
        this.processingInfo = `Process started successfully!`
      } catch (error) {
        this.processingStarted = false
        this.processingInfo = null
        this.processingError = error
        console.error(error)
      }
    }
  }
}
</script>
