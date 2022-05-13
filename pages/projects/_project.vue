<template>
  <div v-if="project">
    <bread-crumb-nav
      :theme="project.collection"
      :project="project.properties.title"
    />
    <div
      class="pb-4 variableHeaderContainer"
    >
      <v-container>
        <v-row>
          <v-col>
            <div
              :class="$vuetify.breakpoint.mdAndUp ? 'text-h4' : 'text-h6'"
            >
              {{ project.properties['osc:name'] }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-chip
              v-for="theme in project.properties['osc:themes']"
              :key="theme"
              class="mr-1"
              color="grey"
              dark
              label
            >
              {{ theme }}
            </v-chip>
            <v-chip
              color="green"
              dark
              label
            >
              {{ project.properties['osc:status'] }}
            </v-chip>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <template v-if="$vuetify.breakpoint.smAndDown">
              <v-scale-transition>
                <small v-show="showDescription">{{ project.properties.description }}</small>
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
                <small>
                  {{ project.properties.description }}
                </small>
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
              <strong class="text-uppercase mr-2 mt-1">Start Date</strong> {{ project.properties.start_datetime }}
            </div>
            <div class="d-flex align-center mt-1">
              <v-icon left>
                mdi-calendar
              </v-icon>
              <strong class="text-uppercase mr-2">End Date</strong> {{ project.properties.end_datetime }}
            </div>
            <div class="d-flex align-center mb-5 mt-1">
              <v-icon left>
                mdi-account-multiple
              </v-icon>
              <strong class="text-uppercase mr-2">Consortium</strong> {{ project.properties['osc:consortium'].join(', ') }}
            </div>
            <v-btn
              v-for="(link, key) in project.links.filter(el => el.rel === 'via').sort((a,b) => (a.title < b.title || !b.title) ? -1 : 1)"
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
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="white" :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-2'">
      <search-combobox
        embedded-mode
        :pre-selected-items="[
          {
            key: 'project',
            value: project.id
          },
          {
            key: 'type',
            value: 'product'
          }
        ]"
        class="ma-8 mb-0"
      />
      <v-row class="pa-6">
        <v-col cols="12" md="4">
          <span class="text-h2">
            Products
          </span>
        </v-col>
        <v-col cols="12" md="8" :class="$vuetify.breakpoint.lgAndUp ? 'd-flex' : ''">
          <v-spacer />
          <v-select
            v-model="productsFilterSortBy"
            dense
            hide-details
            :items="['Name']"
            label="Sort by"
            outlined
            :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
          />
          <v-select
            v-model="productsFilterOrder"
            dense
            hide-details
            :items="['Ascending', 'Descending']"
            label="Order"
            outlined
            :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
          />
          <!-- <v-text-field
            v-model="productsSearch"
            dense
            hide-details
            outlined
            single-line
            label="Search products"
            prepend-inner-icon="mdi-magnify"
          /> -->
        </v-col>
      </v-row>
      <item-grid
        :items="products"
      />
      <v-row>
        <v-col cols="12" class="text-center">
          <v-pagination
            v-model="page"
            :length="numberOfPages"
          />
        </v-col>
      </v-row>
    </v-container>
    <edit-button />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import BreadCrumbNav from '@/components/BreadCrumbNav.vue'

export default {
  name: 'ProjectSingle',
  components: {
    BreadCrumbNav
  },
  data () {
    return {
      project: null,
      products: [],
      productsSearch: '',
      productsFilterSortBy: 'Name',
      productsFilterOrder: 'Ascending',
      showDescription: false,
      page: 1,
      numberOfPages: 1
    }
  },
  head () {
    return {
      title: this.$route.params.project.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  computed: {
    ...mapState('staticCatalog', [
      'projects'
    ])
  },
  async created () {
    this.project = await this.retreiveProjects(this.$route.params.project)
    const productsResponse = await this.fetchProducts({
      projectID: this.project.id,
      page: (this.page - 1) * 10
    })
    this.products = productsResponse.features
    this.numberOfPages = Math.round(productsResponse.numberMatched / 10)
  },
  methods: {
    ...mapActions('dynamicCatalog', [
      'fetchProducts'
    ]),
    ...mapActions('staticCatalog', [
      'retreiveProjects'
    ])
  }
}
</script>

<style scoped>
.variableHeaderContainer {
  border-bottom: 0.25em solid #335E6F;
}
.projectLink {
  text-decoration: none;
}
</style>
