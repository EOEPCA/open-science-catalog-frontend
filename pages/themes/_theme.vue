<template>
  <div>
    <bread-crumb-nav
      :theme="theme.id"
    />
    <div
      ref="themeBanner"
      :style="`backgroundImage: url('${withBase(`img//EO_${theme.id}.webp`)}');
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
    <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : ''">
      <v-tabs-items v-model="tab">
        <v-tab-item>
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
                :items="['Name', 'Consortium', 'Start Date', 'End date']"
                label="Order by"
                outlined
                :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
              />
              <v-select
                v-model="projectsDetailsOrder"
                dense
                hide-details
                :items="['Ascending', 'Descending']"
                label="Order direction"
                outlined
                :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
              />
              <v-text-field
                v-model="projectsSearch"
                dense
                hide-details
                outlined
                single-line
                label="Search projects"
                prepend-inner-icon="mdi-magnify"
                @input="filterData('projects')"
              />
            </v-col>
          </v-row>
          <item-grid
            type="projects"
            :items="projectDetails"
          />
        </v-tab-item>
        <v-tab-item>
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
                :class="$vuetify.breakpoint.lgAndUp ? 'mr-4' : 'mb-4'"
              />
              <v-text-field
                v-model="variablesSearch"
                dense
                hide-details
                outlined
                single-line
                label="Search variables"
                prepend-inner-icon="mdi-magnify"
                @input="filterData('variables')"
              />
            </v-col>
          </v-row>
          <item-grid
            type="variables"
            :items="variablesDetails"
          />
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import BreadCrumbNav from '@/components/BreadCrumbNav.vue'
import ItemGrid from '@/components/ItemGrid.vue'

export default {
  name: 'ThemeSingle',
  components: {
    BreadCrumbNav,
    ItemGrid
  },
  async asyncData ({ $axios, params }) {
    const theme = await $axios.$get(`/themes/${params.theme}`)
    const allThemes = await $axios.$get('/metrics')

    // format theme variables data
    const variablesDetails = []
    allThemes.themes.forEach((element) => {
      if (element.name === theme.id) {
        element.variables.forEach((variable) => {
          variablesDetails.push(variable)
        })
      }
    })

    // format theme project data
    // const projectDetails = []
    // theme.links.forEach(async (link) => {
    //   if (link.rel === 'item') {
    //     const projectResponse = await $axios.$get(`/themes/${link.href.substring(0, link.href.length - 5)}`)
    //     projectDetails.push(projectResponse)
    //   }
    // })

    return {
      theme,
      variablesDetails
    }
  },
  data () {
    return {
      tab: 0,
      variablesSearch: '',
      projectsSearch: '',
      projectDetails: [],
      projectsDetailsFilter: 'Name',
      projectsDetailsOrder: 'Ascending',
      variablesDetailsOrder: 'Ascending',
      showDescription: false
    }
  },
  head () {
    return {
      title: this.$route.params.theme.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  created () {
    this.theme.links.forEach(async (link) => {
      if (link.rel === 'item') {
        const projectResponse = await axios.get(`https://raw.githubusercontent.com/constantinius/open-science-catalog-builder/gh-pages/themes/${link.href}`)
        this.projectDetails.push(projectResponse.data)
      }
    })
  }
}
</script>

<style>
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
