<template>
  <div>
    <v-img
      :src="withBase(theme.image.replace('/static/', '/')).slice(0, -3) + 'webp'"
    >
      <v-breadcrumbs
        class="ml-5 pt-0 navigationBreadcrumb"
        :items="navigationBreadcrumb"
      >
        <template v-slot:item="{ item }">
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
            {{ theme.name }}
          </span>
        </v-row>
        <v-row class="ml-2">
          <span class="themeDescription">
            {{ theme.description }}
          </span>
        </v-row>
        <v-row class="ml-2 mt-6">
          <span class="themeDescription">
            <a :href="theme.website">
              EO4SOCIETY
            </a>
          </span>
        </v-row>
      </v-container>
    </v-img>
    <v-tabs
      v-model="tab"
      background-color="#003247"
      dark>
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
            />
          </v-row>
          <item-grid :items="items" />
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
            />
          </v-row>
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
    return {
      theme
    }
  },
  data () {
    return {
      items: [
        {
          description: 'Atmospheric aerosols are minor constituents of the atmosphere by mass, but a critical component in terms of impacts on the climate and especially climate changes. Aerosols influence the global radiation balance by directly scattering solar radiation and indirectly through influencing cloud reflectivity, cloud cover and cloud lifetime. https://gcos.wmo.int/en/essential-climate-variables/aerosols',
          id: 'aerosols',
          name: 'Aerosols',
          recordsNumber: '15'
        },
        {
          description: 'Global anthropogenic emissions of Greenhouse gases (CO2, CH4, N2O and F-gases) continue to be emitted at an annual rate that is not yet significantly decreasing. The global warming potential of each of the greenhouse gases and their long residence time in the atmosphere are causing increased surface temperature and climate change. The scientific community illustrated with inverse models and data assimilation how consistent the reported inventories and the atmospheric observations are, which is taken up also in few national inventory reports (e.g. UK, Switzerland, Australia). https://gcos.wmo.int/en/essential-climate-variables/ghg-fluxes',
          id: 'anthropogenic_greenhouse_gas_fluxes',
          name: 'Anthropogenic Greenhouse gas fluxes',
          recordsNumber: '0'
        },
        {
          description: 'The atmospheric abundance of carbon dioxide (CO2), the dominant human-produced greenhouse gas, has increased by about 50% since pre-industrial times due to the proliferation of fossil fuel combustion. Methane (CH4) is also a strong greenhouse gas; its atmospheric abundance has more than doubled since the pre-industrial era because of human activities. Other significant greenhouse gases include nitrous oxide (N2O), chlorofluorocarbons (CFCs), hydrochlorofluorocarbons (HCFCs), hydrofluorocarbons (HFCs), perfluorocarbons (PFCs) and sulphur hexafluoride (SF6). https://gcos.wmo.int/en/essential-climate-variables/ghg',
          id: 'carbon_dioxide,_methane_and_other_greenhouse_gases',
          name: 'Carbon dioxide, methane and other greenhouse gases',
          recordsNumber: '0'
        }
      ],
      tab: 0,
      variablesSearch: '',
      projectsSearch: '',
      navigationBreadcrumb: [
        {
          text: 'ESA EO Catalogue',
          disabled: false,
          href: '/'
        }
      ]
    }
  },
  head () {
    return {
      title: this.$route.params.theme.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  created () {
    this.navigationBreadcrumb.push({
      text: this.theme.name,
      disabled: false,
      href: `/themes/${this.theme.name.toLowerCase()}`
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