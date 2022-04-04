<template>
  <div>
    <v-container fluid class="mb-2">
      <v-row class="pa-5 pb-0">
        <v-col>
          <h1 :class="$vuetify.breakpoint.mdAndUp ? 'text-h2 mt-5' : 'text-h4 mt-5'">
            Welcome to the Open Science Catalog
          </h1>
        </v-col>
      </v-row>
      <v-row class="pa-5 pt-0">
        <v-col>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non sollicitudin ex. Sed at orci at erat maximus molestie fermentum ac nulla.</p>
          <p>
            <strong>What products can I find here?</strong>
          </p>
          <p>Mauris sagittis vulputate sollicitudin. Donec consectetur aliquet massa vel scelerisque. Sed venenatis tempus justo, scelerisque aliquet lacus mollis pulvinar. Suspendisse vitae iaculis velit. Curabitur tempor ultrices purus sit amet feugiat. Suspendisse in elit commodo, blandit ante ac, molestie nunc. Aliquam consequat eget justo tempor feugiat.</p>
          <p>
            <v-btn
              dark
              small
              :color="$typeColor('theme')"
              class="mb-2 mb-sm-0"
            >
              Themes
            </v-btn>
            <v-btn
              dark
              small
              :color="$typeColor('project')"
              to="/projects"
              class="mb-2 mb-sm-0"
            >
              Projects
            </v-btn>
            <v-btn
              dark
              small
              :color="$typeColor('variable')"
              to="/variables"
              class="mb-2 mb-sm-0"
            >
              Variables
            </v-btn>
            <v-btn
              dark
              small
              :color="$typeColor('product')"
              to="/products"
              class="mb-2 mb-sm-0"
            >
              Products
            </v-btn>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit:
          </p>
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
          <p>Choose a theme below to get started or access the <a href="https://opensciencedata.esa.int/api/docs/" target="_blank">API Documentation</a>!</p>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid style="height: 100%;" class="pa-0">
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
  async asyncData ({ store }) {
    await store.dispatch('staticCatalog/retreiveMetrics')
  },
  head: {
    titleTemplate: 'ESA Open Science Catalog'
  },
  computed: {
    ...mapState('staticCatalog', [
      'themes'
    ])
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
