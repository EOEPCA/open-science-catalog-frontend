<template>
  <div v-if="theme">
    <bread-crumb-nav
      :theme="theme.id"
    />
    <div
      ref="themeBanner"
      :style="`backgroundImage: url('${$staticCatalog.defaults.baseURL}/themes/${theme.assets.image.href}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;`"
    >
      <v-container :class="$vuetify.breakpoint.mdAndUp ? 'px-15' : ''">
        <v-row>
          <v-col cols="12" md="6" class="d-flex align-center" :class="$vuetify.breakpoint.smAndDown ? 'justify-center' : ''">
            <span class="themeTitle">
              {{ theme.id }}
            </span>
          </v-col>
          <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <div class="themeDescription">
              <template v-if="$vuetify.breakpoint.smAndDown">
                <v-scale-transition>
                  <small v-show="showDescription">{{ theme.description }}</small>
                </v-scale-transition>
                <v-btn
                  text
                  x-small
                  dark
                  block
                  @click="showDescription = !showDescription"
                >
                  <v-icon left>
                    {{ showDescription ? 'mdi-arrow-collapse-vertical' : 'mdi-arrow-expand-vertical' }}
                  </v-icon>
                  Description
                </v-btn>
              </template>
              <small v-else>{{ theme.description }}</small>
            </div>
            <v-btn
              color="rgba(0, 49, 72, 0.733)"
              dark
              :href="theme.links[1].href"
              target="_blank"
              class="mt-3"
            >
              <v-icon left>
                mdi-link
              </v-icon>
              EO4SOCIETY
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-tabs
      v-model="tab"
      background-color="#003247"
      dark
      grow
    >
      <v-tab>
        Projects
      </v-tab>
      <v-tab>
        Variables
      </v-tab>
    </v-tabs>
    <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-0'">
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <search-combobox
            embedded-mode
            :item-type="'project'"
            :pre-selected-items="[
              {
                key: 'theme',
                value: theme.id
              },
              {
                key: 'type',
                value: 'Project'
              }
            ]"
            class="ma-8 mb-0"
            @searchQuery="handleSearchEmit"
          />
          <v-row class="px-8 pt-8 d-flex align-center">
            <v-col cols="12" md="4">
              <span class="text-h2">
                Projects
              </span>
            </v-col>
            <v-col cols="12" md="8" :class="$vuetify.breakpoint.lgAndUp ? 'd-flex' : ''">
              <v-spacer />
              <v-select
                v-model="projectsDetailsFilter"
                dense
                hide-details
                :items="projectDetailsItems"
                label="Order by"
                outlined
                :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
                style="max-width:150px"
                @change="orderData('projects', projectsDetailsFilter.toLowerCase(), projectsDetailsOrder, projectsSearch, true)"
              />
              <v-select
                v-model="projectsDetailsOrder"
                dense
                hide-details
                :items="['Ascending', 'Descending']"
                label="Order direction"
                outlined
                :class="$vuetify.breakpoint.lgAndUp ? '' : 'mb-4'"
                style="max-width:150px"
                @change="orderData('projects', projectsDetailsFilter.toLowerCase(), projectsDetailsOrder, projectsSearch, true)"
              />
              <!-- <v-text-field
                v-model="projectsSearch"
                dense
                hide-details
                outlined
                single-line
                label="Search projects"
                prepend-inner-icon="mdi-magnify"
                @input="orderData('projects', projectsDetailsFilter.toLowerCase(), projectsDetailsOrder, projectsSearch, true)"
              /> -->
            </v-col>
          </v-row>
          <item-grid
            :items="projectDetails"
          />
        </v-tab-item>
        <v-tab-item>
          <search-combobox
            embedded-mode
            :item-type="'project'"
            :pre-selected-items="[
              {
                key: 'theme',
                value: theme.id
              },
              {
                key: 'type',
                value: 'Variable'
              }
            ]"
            class="ma-8 mb-0"
            @searchQuery="handleSearchEmit"
          />
          <v-row class="px-8 pt-8 d-flex align-center">
            <v-col cols="12" md="4">
              <span class="text-h2">
                Variables
              </span>
            </v-col>
            <v-col cols="12" md="8" :class="$vuetify.breakpoint.lgAndUp ? 'd-flex' : ''">
              <v-spacer />
              <v-select
                v-model="variablesDetailsOrder"
                dense
                hide-details
                :items="['Ascending', 'Descending']"
                label="Order direction"
                outlined
                :class="$vuetify.breakpoint.lgAndUp ? '' : 'mb-4'"
                style="max-width:150px"
                @change="orderData('variables', 'name', variablesDetailsOrder, variablesSearch)"
              />
              <!-- <v-text-field
                v-model="variablesSearch"
                dense
                hide-details
                outlined
                single-line
                label="Search variables"
                prepend-inner-icon="mdi-magnify"
                @input="orderData('variables', 'name', variablesDetailsOrder, variablesSearch)"
              /> -->
            </v-col>
          </v-row>
          <item-grid
            :items="variablesDetails"
          />
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import BreadCrumbNav from '@/components/BreadCrumbNav.vue'
import ItemGrid from '@/components/ItemGrid.vue'

export default {
  name: 'ThemeSingle',
  components: {
    BreadCrumbNav,
    ItemGrid
  },
  data () {
    return {
      theme: null,
      tab: 0,
      projectDetails: null,
      projectDetailsRaw: [],
      projectsSearch: '',
      projectDetailsItems: [
        {
          text: 'Name',
          value: 'title'
        },
        {
          text: 'Consortium',
          value: 'osc:consortium'
        },
        {
          text: 'Start Date',
          value: 'start_datetime'
        },
        {
          text: 'End date',
          value: 'end_datetime'
        }
      ],
      projectsDetailsFilter: 'title',
      projectsDetailsOrder: 'Ascending',
      variablesDetails: null,
      variablesDetailsRaw: [],
      variablesSearch: '',
      variablesDetailsOrder: 'Ascending',
      showDescription: false
    }
  },
  head () {
    return {
      title: this.$route.params.theme.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  computed: {
    ...mapGetters('staticCatalog', [
      'themes'
    ])
  },
  async created () {
    this.theme = await this.retreiveTheme(this.$route.params.theme)
    await this.retreiveMetrics()
    // format theme variables data
    this.themes.forEach((element) => {
      if (element.name === this.theme.id) {
        element.variables.forEach((variable) => {
          this.variablesDetailsRaw.push(variable)
        })
      }
    })

    // format theme project data
    await Promise.all(this.theme.links.map(async (link) => {
      if (link.rel === 'item') {
        const projectResponse = await this.$axios.$get(link.href)
        this.projectDetailsRaw.push(projectResponse)
      }
    }))
    this.variablesDetails = this.variablesDetailsRaw
    this.projectDetails = this.projectDetailsRaw
    this.orderData('projects', this.projectsDetailsFilter, this.projectsDetailsOrder, this.projectsSearch, true)
    this.orderData('variables', 'name', this.variablesDetailsOrder, this.variablesSearch)
  },
  methods: {
    ...mapActions('staticCatalog', [
      'retreiveMetrics',
      'retreiveTheme'
    ]),
    orderData (source, key, direction, string, nested = null) {
      function compare (a, b) {
        if (nested) {
          if (a.properties[key] < b.properties[key]) {
            return direction === 'Ascending' ? -1 : 1
          }
          if (a.properties[key] > b.properties[key]) {
            return direction === 'Ascending' ? 1 : -1
          }
        } else {
          if (a[key] < b[key]) {
            return direction === 'Ascending' ? -1 : 1
          }
          if (a[key] > b[key]) {
            return direction === 'Ascending' ? 1 : -1
          }
        }
        return 0
      }
      if (source === 'variables') {
        const sortedSource = this.variablesDetailsRaw.sort(compare)
        this.variablesDetails = string ? this.filterByValue(sortedSource, string) : sortedSource
      } else {
        const sortedSource = this.projectDetailsRaw.sort(compare)
        this.projectDetails = string ? this.filterByValue(sortedSource, string, 'properties') : sortedSource
      }
    },
    filterByValue (array, string, key = null) {
      return array.filter((o) => {
        return Object.keys(key ? o[key] : o).some((k) => {
          if (typeof (key ? o[key][k] : o[k]) === 'string') {
            return (key ? o[key][k] : o[k]).toLowerCase().includes(string.toLowerCase())
          }
          return null
        })
      })
    },
    handleSearchEmit (result) {
      this.projectDetails = result.items
    }
  }
}
</script>

<style scoped>
.themeTitle {
  background: #003247;
  color: white;
  padding: 1px 10px;
  position: relative;
  text-transform: uppercase !important;
  font-weight: bold !important;
  font-size: 30px;
  width: auto !important;
}

.themeDescription {
  position: relative;
  background: rgba(0, 49, 72, 0.733);
  padding: 10px;
  color: white;
  overflow-y: auto;
}

.themeDescription a {
  color: white;
}
</style>
