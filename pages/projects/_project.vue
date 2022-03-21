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
              <v-chip
                color="green"
                dark
                label
              >
                {{ project.properties['osc:status'] }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-row class="ml-2 pt-0 mt-0 mb-4">
              <v-chip
                v-for="theme in project.properties['osc:themes']"
                :key="theme"
                class="mx-1"
                color="rgb(124, 69, 86)"
                dark
                label
              >
                {{ theme }}
              </v-chip>
            </v-row>
            <v-row class="ml-2 pt-0 mt-0 mb-4">
              <v-col>
                <v-icon>
                  mdi-calendar-today
                </v-icon>
                Start date - {{ project.properties.start_datetime }}
              </v-col>
              <v-col>
                <v-icon>
                  mdi-calendar
                </v-icon>
                Estimated end date - {{ project.properties.end_datetime }}
              </v-col>
            </v-row>
            <v-row class="ml-2 pt-0 mt-0 mb-4 text-h6">
              <v-icon>
                mdi-account-multiple
              </v-icon>
              Consortium
            </v-row>
            <v-row class="ml-2 pt-0 mt-0 mb-4">
              <span v-for="consort in project.properties['osc:consortium']" :key="consort">
                {{ consort }}
              </span>
            </v-row>
            <v-row class="ml-2 pt-0 mt-0 mb-4">
              <a
                v-for="link in project.links.filter(el => el.rel === 'via')"
                :key="link.href"
                :href="link.href"
                target="_blank"
                class="mx-1 projectLink"
              >
                <v-icon>
                  mdi-link
                </v-icon>
                <span>
                  {{ link.href.includes('eo4society.esa.int') ? 'EO4SOCIETY LINK' : 'WEBSITE' }}
                </span>
              </a>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-container>
              <v-row>
                <v-col>
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
                            {{ project.properties.description }}
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
    </div>
    <v-container class="white" :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-0'">
      <v-row class="mt-2">
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
            :class="$vuetify.breakpoint.mdAndUp ? 'mr-4' : 'mb-4'"
          />
          <v-select
            v-model="productsFilterOrder"
            dense
            hide-details
            :items="['Ascending', 'Descending']"
            label="Order"
            outlined
            :class="$vuetify.breakpoint.mdAndUp ? 'mr-4' : 'mb-4'"
          />
          <v-text-field
            v-model="productsSearch"
            dense
            hide-details
            outlined
            single-line
            label="Search products"
            prepend-inner-icon="mdi-magnify"
          />
        </v-col>
      </v-row>
      <item-grid
        type="products"
        :items="products"
      />
      <v-row>
        <v-col cols="12" class="text-center">
          <v-pagination
            v-model="page"
            :length="numberOfPages"
            @input="filterProducts"
            @next="filterProducts"
            @previous="filterProducts"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
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
  async created () {
    // todo handle variable names divided by '_'
    await this.$staticCatalog.$get(`projects/${this.$route.params.project}`).then((res) => {
      this.project = res
    }).catch((err) => {
      console.log(err)
    })

    const productsResponse = await this.$dynamicCatalog.$get(`/collections/${this.project.id}/items?offset=${
      (this.page - 1) * 10}`)
    this.products = productsResponse.features
    this.numberOfPages = Math.round(productsResponse.numberMatched / 10)
  }
}
</script>

<style>
.variableHeaderContainer {
  border-bottom: 0.25em solid #335E6F;
}
.projectLink {
  text-decoration: none;
}
</style>
