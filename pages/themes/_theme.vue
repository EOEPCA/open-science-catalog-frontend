<template>
  <v-container>
    <h2 class="text-h2 mt-3 mb-5 text-capitalize">
      {{ theme.name }}
    </h2>
    <p>
      {{ theme.description }}
    </p>
    <item-grid :items="items" />
  </v-container>
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
      ]
    }
  },
  head () {
    return {
      title: this.$route.params.theme.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  }
}
</script>
