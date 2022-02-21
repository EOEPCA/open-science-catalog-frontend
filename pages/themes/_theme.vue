<template>
  <div>
    <div
      ref="themeBanner"
      :style="`backgroundImage: url('${withBase(`img//EO_${theme.id}.webp`)}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;`"
      class="pb-4"
    >
      <v-breadcrumbs
        class="mx-5 pt-0 navigationBreadcrumb"
        :items="navigationBreadcrumb"
      >
        <template #item="{ item }">
          <v-breadcrumbs-item
            :href="item.href"
            :disabled="item.disabled"
          >
            <v-chip
              v-if="navigationBreadcrumb.indexOf(item) === navigationBreadcrumb.length - 1"
              color="rgb(124, 69, 86)"
              dark
              small
              class="mr-2"
            >
              THEME
            </v-chip>
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-container>
        <v-row class="ml-2">
          <span class="mt-3 mb-5 themeTitle">
            {{ theme.id }}
          </span>
        </v-row>
        <v-row class="ml-2">
          <span class="themeDescription">
            {{ theme.description }}
          </span>
        </v-row>
        <v-row class="ml-2 mt-6">
          <span class="themeDescription">
            <a
              :href="theme.links[1].href"
              target="_blank"
            >
              EO4SOCIETY
            </a>
          </span>
        </v-row>
      </v-container>
    </div>
    <v-tabs
      v-model="tab"
      background-color="#003247"
      dark
    >
      <v-tab>
        Projects
      </v-tab>
      <v-tab>
        Variables
      </v-tab>
    </v-tabs>
    <v-container>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-row class="pa-6">
            <span class="text-h2">
              Projects
            </span>
            <v-spacer />
            <v-text-field
              v-model="projectsSearch"
              hide-details
              solo
              outlined
              single-line
              style="width: 400px !important; flex-grow: 0"
              label="Search projects"
              prepend-inner-icon="mdi-magnify"
              @input="filterData('projects')"
            />
          </v-row>
          <v-row>
            <v-col cols="3">
              <v-select
                v-model="projectsDetailsFilter"
                :items="['Name', 'Consortium', 'Start Date', 'End date']"
                label="Order by"
                outlined
              />
            </v-col>
            <v-col cols="3">
              <v-select
                v-model="projectsDetailsOrder"
                :items="['Ascending', 'Descending']"
                label="Order direction"
                outlined
              />
            </v-col>
          </v-row>
          <item-grid
            type="projects"
            :items="projectDetails"
          />
        </v-tab-item>
        <v-tab-item>
          <v-row class="pa-6">
            <span class="text-h2">
              Variables
            </span>
            <v-spacer />
            <v-text-field
              v-model="variablesSearch"
              hide-details
              solo
              outlined
              single-line
              style="width: 400px !important; flex-grow: 0"
              label="Search variables"
              prepend-inner-icon="mdi-magnify"
              @input="filterData('variables')"
            />
          </v-row>
          <v-row>
            <v-col cols="3">
              <v-select
                v-model="variablesDetailsOrder"
                :items="['Ascending', 'Descending']"
                label="Order direction"
                outlined
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
import ItemGrid from '@/components/ItemGrid.vue'

export default {
  name: 'ThemeSingle',
  components: {
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
    const projectDetails = []
    theme.links.forEach(async (link) => {
      if (link.rel === 'item') {
        const projectResponse = await $axios.$get(`/themes/${link.href.substring(0, link.href.length - 5)}`)
        projectDetails.push(projectResponse)
      }
    })

    return {
      theme,
      variablesDetails,
      projectDetails
    }
  },
  data () {
    return {
      tab: 0,
      variablesSearch: '',
      projectsSearch: '',
      navigationBreadcrumb: [
        {
          text: 'ESA EO Catalogue',
          disabled: false,
          href: '/'
        }
      ],
      projectsDetailsFilter: 'Name',
      projectsDetailsOrder: 'Ascending',
      variablesDetailsOrder: 'Ascending'
    }
  },
  head () {
    return {
      title: this.$route.params.theme.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  created () {
    this.navigationBreadcrumb.push({
      text: this.theme.id,
      disabled: false,
      href: `/themes/${this.theme.id.toLowerCase()}`
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

.navigationBreadcrumb {
  background: rgba(255, 255, 255, 0.667);
  padding: 3px;
}

.navigationBreadcrumb li {
  font-size: 17px !important;
}
</style>
