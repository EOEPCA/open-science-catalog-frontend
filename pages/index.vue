<template>
  <div>
    <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-8' : 'pa-2'">
      <v-row class="pt-5 pb-0">
        <v-col>
          <h1
            class="primary--text"
            :class="$vuetify.breakpoint.mdAndUp ? 'text-h2 mt-5' : 'text-h4 mt-5'">
            Welcome to the Open Science Catalog
          </h1>
        </v-col>
      </v-row>
      <v-row class="pb-5 pt-0">
        <v-col>
          <p>A catalog of publicly available geoscience products, datasets and resources developed in the frame of scientific research Projects funded by ESA EO (Earth Observation). Products vary in geographical and temporal extent, production methodology, validation and quality. Please refer to the documentation of each product for details.</p>
          <p>
            <strong>What products can I find here?</strong>
          </p>
          <p>The majority of pages on opensciencedata.esa.int  only hold metadata for each product and project. The actual data and its documentation are maintained and accessible at the data providers, outside of esa.int, for the majority of cases. This catalog provides the metadata and links to the data as it exists in those many other locations.</p>
          <p>
            Explore the catalog, consisting of
            <v-chip
              dark
              small
              label
              :color="$typeColor('theme')"
              class="mb-2 mb-sm-0 text-uppercase"
            >
              Themes
            </v-chip>,
            <v-chip
              dark
              small
              label
              :color="$typeColor('project')"
              class="mb-2 mb-sm-0 text-uppercase"
            >
              Projects
            </v-chip>,
            <v-chip
              dark
              small
              label
              :color="$typeColor('variable')"
              class="mb-2 mb-sm-0 text-uppercase"
            >
              Variables
            </v-chip> and
            <v-chip
              dark
              small
              label
              :color="$typeColor('product')"
              class="mb-2 mb-sm-0 text-uppercase"
            >
              Products
            </v-chip>.
          </p>
          <p>Choose a theme below to get started or access the <a :href="$dynamicCatalog.defaults.baseURL" target="_blank">API Documentation</a>!</p>
          <p>
            <v-btn
              dark
              small
              color="primary"
              to="/metrics"
            >
              <v-icon
                left
              >
                mdi-poll
              </v-icon>
              Metrics
            </v-btn>
            <v-btn
              dark
              small
              color="primary"
              to="/search"
            >
              <v-icon
                left
              >
                mdi-magnify
              </v-icon>
              Search
            </v-btn>
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-0' : 'pa-2'">
      <v-row
        justify="center"
        align="center"
        no-gutters
      >
        <v-col
          v-for="theme in themes"
          :key="theme.name"
          cols="12"
          md="4"
          class="pa-1"
        >
          <nuxt-link
            :to="`/themes/${slugify(theme.name)}`"
          >
            <div
              class="d-flex align-center elevation-2 rounded"
              style="position: relative; height: 300px; overflow: hidden;
              border-bottom: 0.25em solid rgb(51, 94, 111);"
            >
              <v-img
                :src="`${$staticCatalog.defaults.baseURL}/themes/${theme.image}`"
                width="100%"
                height="100%"
              >
                <span
                  class="h1 imageLabel elevation-2"
                >
                  {{ theme.name.replace('_', ' ') }}
                </span>
              </v-img>
            </div>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'IndexPage',
  head: {
    titleTemplate: 'ESA Open Science Catalog'
  },
  computed: {
    ...mapState('staticCatalog', [
      'themes'
    ])
  },
  async created() {
    await this.$store.dispatch('staticCatalog/retreiveMetrics')
  },
  methods: {
    ...mapActions('staticCatalog', [
      'retreiveMetrics'
    ])
  }
}
</script>

<style>
.imageLabel {
  background: #003247;
  color: white;
  position: absolute;
  text-transform: uppercase;
  padding: 1px 10px;
  top: 37%;
  left: 15%;
  font-size: 21px;
  font-weight: bold;
}
</style>
