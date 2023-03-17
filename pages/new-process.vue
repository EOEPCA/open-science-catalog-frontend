<template>
  <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-8' : 'pa-4'">
    <h2 class="text-h2 mt-3 mb-5">Start process</h2>
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <v-stepper v-model="currentStep" vertical>
          <v-stepper-step :complete="currentStep > 1" step="1">
            Select a process<span v-if="selectedProcess" class="grey--text">
              - {{ availableProcesses[selectedProcess].properties.title }}</span
            >
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-autocomplete
              v-model="selectedProcess"
              :items="Object.keys(availableProcesses)"
              return-object
              outlined
              required
              :loading="availableProcessesLoading"
            >
              <template #item="{ item }">
                <strong>{{ availableProcesses[item].properties.title }}</strong
                ><span class="mx-1">-</span
                ><span>{{
                  availableProcesses[item].properties.description
                }}</span>
              </template>
              <template #selection="{ item }">
                <strong>{{ availableProcesses[item].properties.title }}</strong
                ><span class="mx-1">-</span
                ><span>{{
                  availableProcesses[item].properties.description
                }}</span>
              </template>
            </v-autocomplete>
            <template v-if="selectedProcess && !availableProcessesLoading">
              <p><strong>Input Parameters:</strong></p>
              <template
                v-for="[inputId, input] in Object.entries(
                  selectedProcessDetails.$graph[0].inputs
                )"
              >
                <!-- <div v-if="input.title === 'Product'"></div> -->
                <v-text-field
                  v-if="input.type === 'number' || input.type === 'string'"
                  :key="inputId"
                  v-model="selectedParameters[inputId]"
                  :label="input.label"
                  :hint="input.doc"
                  :placeholder="input.label"
                  :type="input.type"
                  outlined
                ></v-text-field>
              </template>
            </template>

            <v-btn
              color="primary"
              :disabled="!selectedProcess"
              @click="currentStep++"
            >
              Continue
            </v-btn>
            <v-btn text @click="navigateParent('/')"> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="currentStep > 2" step="2">
            Select a product<span v-if="selectedProduct" class="grey--text">
              - {{ selectedProduct.properties.title }}</span
            >
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
                    value: 'product',
                  },
                ]"
                class="my-4 flex-grow-1"
                @searchQuery="handleSearchEmit"
              />
              <v-row class="pt-8">
                <v-col cols="12" md="4">
                  <span class="text-h4"> Products </span>
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
                    :style="`max-width:${
                      $vuetify.breakpoint.lgAndUp ? 150 : 120
                    }px`"
                    @change="filterProducts()"
                  />
                  <v-select
                    v-model="productsFilterOrder"
                    dense
                    hide-details
                    :items="['Ascending', 'Descending']"
                    label="Order"
                    outlined
                    :style="`max-width:${
                      $vuetify.breakpoint.lgAndUp ? 150 : 120
                    }px`"
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
                @selectItem="
                  (item) => {
                    selectedProduct = item;
                  }
                "
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
            <v-btn text @click="currentStep--"> Back </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="currentStep > 3" step="3">
            Select cloud<span v-if="selectedCloud" class="grey--text">
              - {{ selectedCloud }}</span
            >
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-autocomplete
              v-model="selectedCloud"
              :items="['Space Applications Services', 'Terradue']"
              outlined
            ></v-autocomplete>
            <v-btn
              color="primary"
              :disabled="!selectedCloud"
              @click="currentStep++"
            >
              Continue
            </v-btn>
            <v-btn text @click="currentStep--"> Back </v-btn>
          </v-stepper-content>

          <v-stepper-step step="4">
            Review and start processing
          </v-stepper-step>
          <v-stepper-content step="4">
            <h1>Summary</h1>
            <p v-if="selectedProcess">
              <strong>Process:</strong>
              {{ availableProcesses[selectedProcess].properties.title }}
            </p>
            <p class="mb-0"><strong>Parameters:</strong></p>
            <ul v-if="selectedParameters" class="mb-4">
              <li
                v-for="parameter in Object.keys(selectedParameters)"
                :key="parameter"
              >
                {{ selectedProcessDetails.$graph[0].inputs[parameter].label }}:
                {{ selectedParameters[parameter] }}
              </li>
            </ul>
            <p v-if="selectedProduct">
              <strong>Product:</strong> {{ selectedProduct.properties.title }}
            </p>
            <p><strong>Cloud:</strong> {{ selectedCloud }}</p>
            <v-checkbox
              v-model="tosAgreed"
              label="I agree to the processing Terms of Service"
            ></v-checkbox>
            <p v-if="processingError" class="red--text">
              {{ processingError }}
            </p>
            <p v-if="processingInfo" class="success--text">
              {{ processingInfo }}
            </p>
            <v-btn
              v-if="!processingInfo"
              color="success"
              :disabled="!tosAgreed || processingStarted"
              :loading="processingStarted"
              @click="startProcessing"
            >
              <v-icon left> mdi-cloud-cog-outline </v-icon>
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
            <v-btn v-if="processingInfo" text to="/processing-status">
              <v-icon left> mdi-arrow-right </v-icon>
              Processing status overview
            </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    currentStep: 1,
    availableProcesses: {},
    selectedProcess: null,
    selectedProcessDetails: {},
    selectedParameters: {},
    products: [],
    productsSearch: "",
    productsFilterSortBy: "title",
    productsFilterOrder: "Ascending",
    page: 1,
    numberOfPages: 1,
    selectedProduct: null,
    selectedCloud: null,
    tosAgreed: null,
    processingStarted: null,
    processingError: null,
    processingInfo: null,
    availableProcessesLoading: null,
  }),
  head() {
    return {
      title: "New process",
    };
  },
  watch: {
    selectedProcess(newProcess) {
      this.getProcessDetails(newProcess);
    },
  },
  created() {},
  async mounted() {
    this.filterProducts();
    try {
      const result = await this.fetchApplications();
      if (result.features) {
        result.features.forEach((process) => {
          this.availableProcesses[process.id] = process;
        });
      }
    } catch (error) {
      console.error(error);
    }
    const { process, product } = this.$route.query;
    if (process && product) {
      this.selectedProcess = process;
      this.selectedProduct = { properties: { title: product } };
      this.currentStep = 3;
    }
  },
  methods: {
    ...mapActions("dynamicCatalog", ["fetchApplications"]),
    filterProducts(init) {
      if (typeof init === "number") {
        this.page = init;
      }
      this.$nextTick(() => {
        if (
          this.productsFilterSortBy &&
          this.productsFilterOrder &&
          this.$refs.searchBox
        ) {
          this.$refs.searchBox.filterProducts(init);
        }
      });
    },
    handleSearchEmit(result) {
      this.products = result.items;
      this.numberOfPages = result.numberOfPages;
    },
    async getProcessDetails(processId) {
      if (!this.availableProcesses[processId]?.inputs) {
        try {
          this.availableProcessesLoading = true;
          this.selectedProcessDetails = await this.$axios.$get(
            `https://backend-api.staging.opensciencedata.esa.int/applications/${this.selectedProcess}`
          );
          this.availableProcessesLoading = false;
        } catch (error) {
          console.error(console.error);
          this.availableProcessesLoading = false;
        }
      }
    },
    async startProcessing() {
      this.processingInfo = null;
      this.processingStarted = true;

      try {
        await this.$processingBackend.$post(
          `/processes/${this.selectedProcess}/execution`,
          {
            inputs: {
              ...this.selectedParameters,
            },
            // outputs: {
            //   wf_outputs: {
            //     transmissionMode: "value",
            //   },
            // },
          }
        );

        this.processingInfo = `Process started successfully!`;
      } catch (error) {
        this.processingStarted = false;
        this.processingInfo = null;
        this.processingError = error;
        console.error(error);
      }
    },
  },
};
</script>
