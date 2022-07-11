<template>
  <div v-if="theme">
    <Item
      :title="theme.id"
      :description="theme.description"
      :details="{
        links: theme.links
      }"
      :nav="{
        theme: theme.id
      }"
    >
      <v-tabs
        v-model="tab"
        background-color="#003247"
        dark
        grow
      >
        <v-tab>
          Variables
        </v-tab>
        <v-tab>
          Projects
        </v-tab>
      </v-tabs>
      <v-container class="white" :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'pa-2'">
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <search-combobox
              ref="variableCombobox"
              embedded-mode
              pagination-loop
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
              class="mt-8 mb-0"
              @searchQuery="handleVariableEmit"
            />
            <v-row class="pt-8 d-flex align-center">
              <v-col cols="12" md="4">
                <span class="text-h4">
                  Variables
                </span>
              </v-col>
              <v-col cols="12" md="8" class="d-flex">
                <v-spacer />
                <v-tooltip top>
                  <template #activator="{ on, attrs }">
                    <v-btn
                      icon
                      class="mr-2"
                      v-bind="attrs"
                      v-on="on"
                      @click="TOGGLE_EMPTY_ITEMS"
                    >
                      <v-icon>
                        {{ showEmptyItems ? 'mdi-archive-check-outline' : 'mdi-archive-cancel-outline' }}
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>
                    {{ showEmptyItems ? 'Hide empty variables': 'Show empty variables' }}
                  </span>
                </v-tooltip>
                <v-select
                  v-model="variablesDetailsOrder"
                  dense
                  hide-details
                  :items="['Ascending', 'Descending']"
                  label="Order direction"
                  outlined
                  :style="`max-width:${$vuetify.breakpoint.lgAndUp ? 150 : 120}px`"
                  @change="orderData('variables', 'name', variablesDetailsOrder, variablesSearch)"
                />
              </v-col>
            </v-row>
            <item-display
              :items="variablesDetails"
              :show-empty-items="showEmptyItems"
            />
          </v-tab-item>
          <v-tab-item eager>
            <search-combobox
              ref="projectCombobox"
              embedded-mode
              pagination-loop
              sort-on-created
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
              class="mt-8 mb-0"
              @searchQuery="handleProjectEmit"
            />
            <v-row class="pt-8 d-flex align-center">
              <v-col cols="12" md="4">
                <span class="text-h4">
                  Projects
                </span>
              </v-col>
              <v-col cols="12" md="8" class="d-flex">
                <v-spacer />
                <v-tooltip top>
                  <template #activator="{ on, attrs }">
                    <v-btn
                      icon
                      class="mr-2"
                      v-bind="attrs"
                      v-on="on"
                      @click="TOGGLE_EMPTY_ITEMS"
                    >
                      <v-icon>
                        {{ showEmptyItems ? 'mdi-archive-check-outline' : 'mdi-archive-cancel-outline' }}
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>
                    {{ showEmptyItems ? 'Hide empty projects': 'Show empty projects' }}
                  </span>
                </v-tooltip>
                <v-select
                  v-model="projectsDetailsFilter"
                  dense
                  hide-details
                  :items="projectDetailsItems"
                  label="Order by"
                  outlined
                  class="mr-2"
                  :style="`max-width:${$vuetify.breakpoint.lgAndUp ? 150 : 120}px`"
                  @change="orderData('projects', projectsDetailsFilter.toLowerCase(), projectsDetailsOrder, projectsSearch, true)"
                />
                <v-select
                  v-model="projectsDetailsOrder"
                  dense
                  hide-details
                  :items="['Ascending', 'Descending']"
                  label="Order direction"
                  outlined
                  :style="`max-width:${$vuetify.breakpoint.lgAndUp ? 150 : 120}px`"
                  @change="orderData('projects', projectsDetailsFilter.toLowerCase(), projectsDetailsOrder, projectsSearch, true)"
                />
              </v-col>
            </v-row>
            <item-display
              :items="projectDetails"
              :show-empty-items="showEmptyItems"
            />
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </Item>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

import Item from '@/components/Item.vue'
import ItemDisplay from '~/components/ItemDisplay.vue'

export default {
  name: 'ThemeSingle',
  components: {
    Item,
    ItemDisplay
  },
  data () {
    return {
      theme: null,
      tab: 0,
      projectDetails: [],
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
      variablesDetails: [],
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
    ...mapState([
      'showEmptyItems'
    ]),
    ...mapState('staticCatalog', [
      'themes'
    ])
  },
  async created () {
    const theme = await this.$store.dispatch('staticCatalog/retreiveTheme', this.$route.params.theme)
    await this.$store.dispatch('staticCatalog/retreiveMetrics')
    // format theme variables data
    const variablesDetailsRaw = []
    this.$store.state.staticCatalog.themes.forEach((element) => {
      if (element.name === theme.id) {
        element.variables.forEach((variable) => {
          variablesDetailsRaw.push(variable)
        })
      }
    })
    // format theme project data
    const projectDetailsRaw = []
    await Promise.all(theme.links.map(async (link) => {
      if (link.rel === 'item') {
        const projectResponse = await this.$staticCatalog.$get(this.$replaceStaticBase(link.href))
        projectDetailsRaw.push(projectResponse)
      }
    }))
    const variablesDetails = variablesDetailsRaw
    const projectDetails = projectDetailsRaw
    this.theme = theme
    this.projectDetails = projectDetails
    this.projectDetailsRaw = projectDetailsRaw
    this.variablesDetails = variablesDetails
    this.variablesDetailsRaw = variablesDetailsRaw
    this.orderData('projects', this.projectsDetailsFilter, this.projectsDetailsOrder, this.projectsSearch, true)
    this.orderData('variables', 'name', this.variablesDetailsOrder, this.variablesSearch)
  },
  methods: {
    ...mapMutations([
      'TOGGLE_EMPTY_ITEMS'
    ]),
    ...mapActions('staticCatalog', [
      'retreiveMetrics',
      'retreiveTheme',
      'retreiveProjects'
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
    async handleProjectEmit (result) {
      await Promise.all(result.items.filter(project => this.$extractSlug(project)).map(async (project) => {
        await this.retreiveProjects(this.$extractSlug(project)).then((projectResponse) => {
          project.links = projectResponse.links
          project.properties['osc:consortium'] = projectResponse.properties['osc:consortium']
        }).catch((err) => {
          console.error(err)
        })
      }))
      if (this.projectDetailsRaw.length === 0) {
        this.projectDetailsRaw = result.items
      }
      this.projectDetails = result.items
    },
    handleVariableEmit (result) {
      const resultedVariables = {}
      result.items.forEach((item) => {
        item.properties.keywords.forEach((keyword) => {
          if (keyword.substring(0, 9) === 'variable:') {
            resultedVariables[keyword.slice(9)] = 1
          }
        })
      })
      this.variablesDetails = this.variablesDetailsRaw.filter(variable => resultedVariables[variable.name])
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
