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
            :items="variablesDetails.variables"
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
    return {
      theme
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
      variablesDetails: {
        variables: [
          {
            id: 'aerosols',
            name: 'Aerosols',
            description:
              'Atmospheric aerosols are minor constituents of the atmosphere by mass, but a critical component in terms of impacts on the climate and especially climate changes. Aerosols influence the global radiation balance by directly scattering solar radiation and indirectly through influencing cloud reflectivity, cloud cover and cloud lifetime. https://gcos.wmo.int/en/essential-climate-variables/aerosols',
            recordsNumber: '15'
          },
          {
            id: 'anthropogenic_greenhouse_gas_fluxes',
            name: 'Anthropogenic Greenhouse gas fluxes',
            description:
              'Global anthropogenic emissions of Greenhouse gases (CO2, CH4, N2O and F-gases) continue to be emitted at an annual rate that is not yet significantly decreasing. The global warming potential of each of the greenhouse gases and their long residence time in the atmosphere are causing increased surface temperature and climate change. The scientific community illustrated with inverse models and data assimilation how consistent the reported inventories and the atmospheric observations are, which is taken up also in few national inventory reports (e.g. UK, Switzerland, Australia). https://gcos.wmo.int/en/essential-climate-variables/ghg-fluxes',
            recordsNumber: '0'
          },
          {
            id: 'carbon_dioxide,_methane_and_other_greenhouse_gases',
            name: 'Carbon dioxide, methane and other greenhouse gases',
            description:
              'The atmospheric abundance of carbon dioxide (CO2), the dominant human-produced greenhouse gas, has increased by about 50% since pre-industrial times due to the proliferation of fossil fuel combustion. Methane (CH4) is also a strong greenhouse gas; its atmospheric abundance has more than doubled since the pre-industrial era because of human activities. Other significant greenhouse gases include nitrous oxide (N2O), chlorofluorocarbons (CFCs), hydrochlorofluorocarbons (HCFCs), hydrofluorocarbons (HFCs), perfluorocarbons (PFCs) and sulphur hexafluoride (SF6). https://gcos.wmo.int/en/essential-climate-variables/ghg',
            recordsNumber: '0'
          },
          {
            id: 'clouds',
            name: 'Clouds',
            description:
              'The variable properties of clouds determines the clouds profound effects on radiation and precipitation. They are influenced by and in turn influence the motion of the atmosphere on many scales. They are affected by the presence of aerosols, and modify atmospheric composition in several ways, including the depletion of ozone when they form in the polar stratosphere. https://gcos.wmo.int/en/essential-climate-variables/clouds',
            recordsNumber: '6'
          },
          {
            id: 'earth_radiation_budget',
            name: 'Earth radiation budget',
            description:
              'The Earth Radiation Budget (at the top of the atmosphere) describes the overall balance between the incoming energy from the sun and the outgoing thermal (longwave) and reflected (shortwave) energy from the earth. It can only be measured from space. The radiation balance at the top of the atmosphere is the basic radiative forcing of the climate system. Measuring its variability in space and time over the globe provides insight into the overall response of the system to this forcing. https://gcos.wmo.int/en/essential-climate-variables/earth-radiation',
            recordsNumber: '0'
          },
          {
            id: 'geomagnetic_field',
            name: 'Geomagnetic Field',
            description:
              'Magnitude and direction of the 3D magnetic field on the surface of the Earth and within the magnetosphere (i.e. in low-Earth orbit and in geosynchronous orbit). https://space.oscar.wmo.int/variables/view/geomagnetic_field',
            recordsNumber: '15'
          },
          {
            id: 'ionospheric_plasma_density',
            name: 'Ionospheric plasma density',
            description:
              'Total number of ionized particles in a volume unit of ionospheric plasma. https://space.oscar.wmo.int/variables/view/ionospheric_plasma_density',
            recordsNumber: '1'
          },
          {
            id: 'lightning',
            name: 'Lightning',
            description:
              'Lightning is one of the most dramatic weather phenomena, causing many fatalities as well as substantial loss and damage for example by forest fires, damage to electrical infrastructure and other sectors every year all over the world. On top, even more damage is caused by the storms which generate lightning. This direct link to convection makes lightning also a potentially valuable indicator to track and understand trends in storminess, particularly under climate variability and change. In addition, lightning itself impacts the global climate by producing nitrogen oxides (NOX), a strong greenhouse gas. https://gcos.wmo.int/en/essential-climate-variables/lightning',
            recordsNumber: '1'
          },
          {
            id: 'ozone',
            name: 'Ozone',
            description:
              'Ozone (O3) is a naturally occurring trace gas in the stratosphere that inhibits harmful UV radiation from reaching Earth’s surface. Ozone in the troposphere is a pollutant, harmful to all living things. Ozone is strongly linked to climate by its influence on Earth’s radiation budget. The amount of ozone in the global stratosphere began to decrease in 1980 due to catalytic reactions with chlorine and bromine from man-made CFCs and other halocarbons. Severe, seasonal depletions over Antarctica (“ozone hole”) have occurred annually since 1985. Thanks to the Montreal Protocol, an international treaty enacted to curtail the production and consumption of ozone-depleting substances, stratospheric ozone levels are expected to return to pre-depletion values. https://gcos.wmo.int/en/essential-climate-variables/ozone',
            recordsNumber: '8'
          },
          {
            id: 'precipitation',
            name: 'Precipitation',
            description:
              'Precipitation, either liquid or solid, is the most important climate variable directly affecting humans. Through either its duration, intensity and frequency or its lack of occurrence, it influences the supply of water, causes risks to life and livelihoods when associated with floods, landslides and droughts, and affects infrastructure planning, leisure activities and more. Precipitation is closely related to cloud properties, a number of terrestrial ECVs and to ocean-surface salinity. It is indicative of the release of latent heat within the energy cycle, as well as being at the heart of the hydrological cycle. https://gcos.wmo.int/en/essential-climate-variables/precipitation',
            recordsNumber: '2'
          },
          {
            id: 'precursors_for_aerosols_and_ozone',
            name: 'Precursors for aerosols and ozone',
            description:
              'Precursor species lead to the production of aerosols and ozone. Precursors include nitrogen dioxide (NO2), sulphur dioxide (SO2), carbon monoxide (CO) and formaldehyde (HCHO). Aerosols and ozone in the near-surface atmosphere can directly harm human health and produce detrimental environmental impacts (e.g., crop damage, acid rain). Reductions in near-surface aerosols and ozone have been observed in specific regions where the emissions of some precursors are regulated. https://gcos.wmo.int/en/essential-climate-variables/precursors',
            recordsNumber: '0'
          },
          {
            id: 'pressure',
            name: 'Pressure',
            description:
              "Surface pressure is a fundamental meteorological variable controlling weather systems and providing information on the intensity of weather systems, including tropical cyclones. Pressure observations are required for the long-term simulations of past weather and climate known as 'reanalyses'. Patterns of large-scale pressure variation are used to construct circulation indices that are closely linked to known variations in global and regional climate. https://gcos.wmo.int/en/essential-climate-variables/pressure",
            recordsNumber: '0'
          }
        ],
        totalPages: 2,
        total: 17
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
