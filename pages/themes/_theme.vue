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
            :items="projectDetails.projects"
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
    const variablesDetails = []
    // format theme variables data
    allThemes.themes.forEach((element) => {
      if (element.name === theme.id) {
        element.variables.forEach((variable) => {
          variablesDetails.push(variable)
        })
      }
    })

    return {
      theme,
      variablesDetails
    }
  },
  data () {
    return {
      projectDetails: {
        projects: [
          {
            id: 'aeolus_innovation_cdom_proxy_retrieval_from_aeolus_observations_color_',
            name: 'AEOLUS+ INNOVATION - CDOM-PROXY RETRIEVAL FROM AEOLUS OBSERVATIONS (COLOR)',
            description: 'Assessing the feasibility of deriving an in-water AEOLUS product from the analysis of the ocean sub-surface backscattered component of the 355 nm signal acquired by the ALADIN (Atmospheric LAser Doppler INstrument).',
            consortium: [
              'CNR-RESEARCH INSTITUTE FOR GEO-HYDROLOGICAL PROTECTION ‚ IRPI (IT)',
              'Aequora (PT)',
              'SERCO ITALIA SPA (IT)',
              'UNIV BASILICATA (IT)'
            ],
            contractOfficerName: 'Marie-Helene Rio',
            contractOfficerEmail: 'marie-helene.rio@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2021-02-01T00:00:00.000Z',
            estimatedEndDate: '2022-08-15T00:00:00.000Z',
            website: 'https://eo4society.esa.int/projects/aeolus-innovation-expro-cdom-proxy-retrieval-from-aeolus-observations-color/',
            eoSocietyLink: 'https://eo4society.esa.int/projects/aeolus-innovation-expro-cdom-proxy-retrieval-from-aeolus-observations-color/',
            shortName: 'AEOLUS+INNOVATION - COLOR',
            status: 'ONGOING'
          },
          {
            id: 'aeolus_innovation_expro_improving_dust_monitoring_and_forecasting_through_aeolus_wind_data_assimilation_newton_',
            name: 'AEOLUS+ INNOVATION - EXPRO+ IMPROVING DUST MONITORING AND FORECASTING THROUGH AEOLUS WIND DATA ASSIMILATION (NEWTON)',
            description: 'Demonstrate the potential improvement of short-term dust forecasts when the numerical simulations are initialized from meteorological fields in which Aeolus observations have been assimilated. ',
            consortium: [
              'NATIONAL OBSERVATORY OF ATHENS (GR)',
              'The Cyprus Institute (CY)'
            ],
            contractOfficerName: 'Christian Retscher',
            contractOfficerEmail: 'christian.retscher@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2020-11-11T00:00:00.000Z',
            estimatedEndDate: '2022-05-31T00:00:00.000Z',
            website: 'http://newton.space.noa.gr/index.html',
            eoSocietyLink: 'https://eo4society.esa.int/projects/aeolus-innovation-expro-newton/',
            shortName: 'AEOLUS+INNOVATION - NEWTON',
            status: 'ONGOING'
          },
          {
            id: 'aeolus_innovation_expro_lidar_measurements_to_identify_streamers_and_analyze_atmospheric_waves_lisa_',
            name: 'AEOLUS+ INNOVATION ‚ EXPRO+ LIDAR MEASUREMENTS TO IDENTIFY STREAMERS AND ANALYZE ATMOSPHERIC WAVES (LISA)',
            description: 'Aeolus wind measurements enable for the first time the derivation of atmospheric wave structures on different temporal and spatial scales and wind gradients in particular above the oceans, where wind measurements from ground-based instruments are sparse. These measurements will help us to better understand the atmospheric dynamics.',
            consortium: [
              'DLR - GERMAN AEROSPACE CENTER (DE)',
              'INSTITUTE OF ATMOSPHERIC PHYSICS (CZ)'
            ],
            contractOfficerName: 'Christian Retscher',
            contractOfficerEmail: 'christian.retscher@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2020-12-15T00:00:00.000Z',
            estimatedEndDate: '2021-07-02T00:00:00.000Z',
            website: 'https://www.wdc.dlr.de/lisa/',
            eoSocietyLink: 'https://eo4society.esa.int/projects/lidar-measurements-to-identify-streamers-and-analyze-atmospheric-waves-lisa/',
            shortName: 'AEOLUS+INNOVATION - LISA',
            status: 'COMPLETED'
          },
          {
            id: 'aeolus_innovation_expro_ocean_sub_surface_products_and_applications',
            name: 'AEOLUS+ INNOVATION - EXPRO+ OCEAN SUB-SURFACE PRODUCTS AND APPLICATIONS',
            description: 'Assessing the potential of the Aeolus mission to monitor ocean sub-surface optical and biogeochemical properties based on the measurements from the wind lidar ALADIN (Atmospheric Laser Doppler Instrument) at 355 nm.',
            consortium: [
              'NOVELTIS SAS (FR)',
              "UNIVERSITE DU LITTORAL COTE D'OPALE (FR)"
            ],
            contractOfficerName: 'Marie-Helene Rio',
            contractOfficerEmail: 'marie-helene.rio@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2020-12-09T00:00:00.000Z',
            estimatedEndDate: '2021-06-27T00:00:00.000Z',
            website: 'https://eo4society.esa.int/projects/aeolus-innovation-ocean-sub-surface-products-and-applications/',
            eoSocietyLink: 'https://eo4society.esa.int/projects/aeolus-innovation-ocean-sub-surface-products-and-applications/',
            shortName: 'AEOLUS+INNOVATION - AOC',
            status: 'COMPLETED'
          },
          {
            id: 'aeolus_innovation_expro_ocean_surface_wind_from_aeolus_sea_surface_returns_sea_flect_',
            name: 'AEOLUS+ INNOVATION ‚ EXPRO+ OCEAN SURFACE WIND FROM AEOLUS SEA SURFACE RETURNS (SEA-FLECT)',
            description: 'Demonstrate the potential of the Aeolus observations for monitoring of sea surface winds.',
            consortium: ['Verisk Analytics GmbH (DE)', 'INFORMUS GMBH (DE)'],
            contractOfficerName: 'Christian Retscher',
            contractOfficerEmail: 'christian.retscher@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2020-11-11T00:00:00.000Z',
            estimatedEndDate: '2021-06-22T00:00:00.000Z',
            website: 'https://aeolus-surface-wind.aer.com/index.html',
            eoSocietyLink: 'https://eo4society.esa.int/projects/aeolus-innovation-expro-ocean-surface-wind-from-aeolus-sea-surface-returns-sea-flect/',
            shortName: 'AEOLUS+INNOVATION - SEA-FLECT',
            status: 'COMPLETED'
          },
          {
            id: 'aeolus_innovation_studies_on_wind_and_aerosol_information_from_lidar_surface_returns_swails_',
            name: 'AEOLUS+ INNOVATION - STUDIES ON WIND AND AEROSOL INFORMATION FROM LIDAR SURFACE RETURNS (SWAILS+)',
            description: 'Aeolus lidar surface returns are used in combination with collocated wind speed observations to retrieve the aerosol optical depth. The retrieval algorithm under development, LARISSA (Lidar Aerosol Retrieval based on Information from Surface Signal of Aeolus), will complement the standard Aeolus (L2) aerosol profile products. ',
            consortium: ['KNMI (NL)'],
            contractOfficerName: 'Anja Straume',
            contractOfficerEmail: 'anja.straume@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2020-11-10T00:00:00.000Z',
            estimatedEndDate: '2021-06-21T00:00:00.000Z',
            website: 'https://www.knmiprojects.nl/projects/swails',
            eoSocietyLink: 'https://eo4society.esa.int/projects/aeolus-innovation-studies-on-wind-and-aerosol-information-from-lidar-surface-returns-swails/',
            shortName: 'AEOLUS+INNOVATION - SWAILS+',
            status: 'COMPLETED'
          },
          {
            id: 'anreo_retrieval_of_total_ozone_using_olci_s_3_over_antarctica',
            name: 'AnREO: Retrieval of Total Ozone using OLCI-S-3 over Antarctica',
            description: 'Develop a total ozone product for Ocean and Land Colour Instrument (OLCI) on board Sentinel 3 A,B.',
            consortium: ['VITROCISET BELGIUM SPRL (BE)'],
            contractOfficerName: 'Christian Retscher',
            contractOfficerEmail: 'christian.retscher@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2020-03-10T00:00:00.000Z',
            estimatedEndDate: '2021-03-31T00:00:00.000Z',
            website: 'https://www.vitrocisetbelgium.com/news/retrieval-total-ozone-over-antarctica-using-ocean-and-land-colour-instrument-board-sentinel',
            eoSocietyLink: 'https://eo4society.esa.int/2021/09/07/retrieval-of-total-ozone-at-300m-resolution-over-antarctica-using-s3-olci/',
            shortName: 'AnREO',
            status: 'COMPLETED'
          },
          {
            id: 'citysatair',
            name: 'CITYSATAIR',
            description: 'Develop and demonstrate a methodology that is capable of exploiting the various available data sources of urban air quality, to combine them in a mathematically objective and scientifically meaningful manner, and to provide value-added maps of urban air quality at high spatial resolution.',
            consortium: [
              'KNMI (NL)',
              'NILU - NORWEGIAN INSTITUTE FOR AIR RESEARCH (NO)'
            ],
            contractOfficerName: 'Christian Retscher',
            contractOfficerEmail: 'christian.retscher@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2020-07-09T00:00:00.000Z',
            estimatedEndDate: '2021-07-15T00:00:00.000Z',
            website: 'https://citysatair.nilu.no/',
            eoSocietyLink: 'https://eo4society.esa.int/projects/citysatair/',
            shortName: 'CITYSATAIR',
            status: 'COMPLETED'
          },
          {
            id: 'climate_data_record_of_stratospheric_aerosols_crest_',
            name: 'CLIMATE DATA RECORD OF STRATOSPHERIC AEROSOLS (CREST)',
            description: 'Elaborate methods to merge aerosol extinction coefficient records from solar/lunar/stellar occultation and limb-scatter instruments and create a merged longterm multi-mission aerosol record. The objective is to increase the reliability of the data set by including multiple instruments measuring similar atmospheric quantities in the post-SAGE II period.',
            consortium: [
              'FINNISH METEOROLOGICAL INSTITUTE (FI)',
              'ENIPOWER SPA (IT)'
            ],
            contractOfficerName: 'Christian Retscher',
            contractOfficerEmail: 'christian.retscher@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2020-05-07T00:00:00.000Z',
            estimatedEndDate: '2021-05-25T00:00:00.000Z',
            website: 'https://eo4society.esa.int/projects/crest/',
            eoSocietyLink: 'https://eo4society.esa.int/projects/crest/',
            shortName: 'CREST',
            status: 'COMPLETED'
          },
          {
            id: 'consistent_retrieval_of_cloud_aerosol_surface',
            name: 'ConsIstent Retrieval of Cloud Aerosol Surface',
            description: 'CIRCAS aims at providing a set of atmospheric (cloud and aerosol) and surface (albedo) products derived from S3A/SLSTR observations retrieved using the same radiative transfer physics and assumptions.The retrieval is based on the CISAR (Combined Inversion of Surface and Atmosphere pRoperties) algorithm. CISAR is an advanced mathematical method developed by Rayference for the joint retrieval of surface reflectance and atmospheric (cloud and aerosols) properties from observations acquired by space-based imagers.The CISAR algorithm relies on the FASTRE radiative transfer model that describes surface reflectance and atmospheric absorption/scattering processes. The lowest level represents the surface. The lower layer hosts the aerosols. Molecular scattering and absorption are also taking place in that layer which is radiatively coupled with the surface for both the single and the multiple scattering. The upper layer is only subject to molecular absorption.The inversion of the FASTRE model within the CISAR algorithm against satellite observations provides accurate estimates of the surface reflectance field, aerosol or cloud optical thickness and single scattering properties in each processed spectral band. An estimate of the retrieval uncertainty is also provided.As the proposed method retrieved both cloud and aerosol properties with the same retrieval algorithm, no cloud mask is needed to perform the retrieval. Additionally, the same algorithm can be applied over any type of surfaces, including dark or bright surfaces or water bodies.',
            consortium: ['RAYFERENCE SPRL (BE)', 'BROCKMANN CONSULT GMBH (DE)'],
            contractOfficerName: 'Simon Pinnock',
            contractOfficerEmail: 'simon.pinnock@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2017-07-17T00:00:00.000Z',
            estimatedEndDate: '2019-10-02T00:00:00.000Z',
            website: 'http://www.circas.eu/',
            eoSocietyLink: 'https://eo4society.esa.int/projects/consistent-retrieval-of-cloud-aerosol-surface/',
            shortName: 'CIRCAS',
            status: 'COMPLETED'
          },
          {
            id: 'daces_detection_of_anthropogenic_co2_emissions_sources',
            name: 'DACES - Detection of Anthropogenic CO2 Emissions Sources',
            description: 'Developing a new methodology for detecting anthropogenic carbon dioxide emission sources using colocated CO2 data from OCO-2 and NO2, SO2 and CO data from Sentinel-5P',
            consortium: ['FINNISH METEOROLOGICAL INSTITUTE (FI)'],
            contractOfficerName: 'Christian Retscher',
            contractOfficerEmail: 'christian.retscher@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2018-10-05T00:00:00.000Z',
            estimatedEndDate: '2022-03-01T00:00:00.000Z',
            website: 'https://eo4society.esa.int/projects/daces-detection-of-anthropogenic-co2-emissions-sources/',
            eoSocietyLink: 'https://eo4society.esa.int/projects/daces-detection-of-anthropogenic-co2-emissions-sources/',
            shortName: 'Anthropogenic CO2 Emissions Sources',
            status: 'ONGOING'
          },
          {
            id: 'impact_study_of_covid_19_lockdown_measures_on_air_quality_and_climate_icovac',
            name: 'Impact study of COVID-19 lockdown measures on air quality and climate ICOVAC',
            description: 'The project investigated whether a COVID-19 footprint can be detected in available satellite and ground-based data sets for a number of pollutants. The project attempted to assess the potential impact of the lockdown measures on air quality and climate by deriving updated NOx and CO emissions but also on climate with the analysis of satellite greenhouse gas data products, such as XCO2 columns and/or via the use of the NOx emissions as a proxy to derive fossil fuel CO2 emissions.',
            consortium: [
              'BELGIAN INSTITUTE OF SPACE AERONOMY (BIRA-IASB) (BE)',
              'KNMI (NL)',
              'Netherlands Institute for Space Research (NWO-I) (NL)',
              'UNIVERSITAET BREMEN (DE)'
            ],
            contractOfficerName: 'Christian Retscher',
            contractOfficerEmail: 'christian.retscher@esa.int',
            projectManagerName: null,
            projectManagerEmail: null,
            programmes: null,
            startDate: '2020-04-01T00:00:00.000Z',
            estimatedEndDate: '2021-06-30T00:00:00.000Z',
            website: 'https://icovac.aeronomie.be/',
            eoSocietyLink: 'https://eo4society.esa.int/projects/icovac/',
            shortName: 'ICOVAC',
            status: 'COMPLETED'
          }
        ],
        totalPages: 3,
        total: 32
      },
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
