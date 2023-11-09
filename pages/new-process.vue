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
            Select Input parameters
          </v-stepper-step>

          <v-stepper-content step="2">
            <template v-if="selectedProcess && !availableProcessesLoading">
              <template
                v-for="[inputId, input] in Object.entries(
                  selectedProcessDetails.$graph[0].inputs
                )"
              >
                <!-- <div v-if="input.title === 'Product'"></div> -->
                <v-text-field
                  :key="inputId"
                  v-model="selectedParameters[inputId]"
                  :label="input.label"
                  :hint="input.doc"
                  :placeholder="input.label"
                  :type="input.type"
                  outlined
                  class="mt-2"
                ></v-text-field>
              </template>
            </template>

            <v-btn
              color="primary"
              :disabled="!selectedParameters"
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
                <span v-if="selectedProcessDetails.$graph[0].inputs[parameter]"
                  >{{
                    selectedProcessDetails.$graph[0].inputs[parameter].label
                  }}:</span
                >
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
      const result = await this.fetchApplications("metadata:main");
      if (result.features) {
        result.features.forEach((process) => {
          this.$set(this.availableProcesses, process.id, process);
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
          if (
            this.selectedProcessDetails &&
            this.selectedProcessDetails.$graph[0].inputs
          ) {
            Object.entries(
              this.selectedProcessDetails.$graph[0].inputs
            ).forEach(([inputId, input]) => {
              if (input.default) {
                this.selectedParameters[inputId] = input.default;
              }
            });
          }
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
