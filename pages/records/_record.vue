<template>
  <div v-if="record">
    <bread-crumb-nav
      :theme="record['osc:theme']"
      :record="record.id"
    />
    <v-container class="ml-2">
      <v-row>
        <v-col>
          <div :class="$vuetify.breakpoint.mdAndUp ? 'text-h4' : 'text-h6'">
            {{ record.properties.title }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-chip
          v-for="theme in record.properties['osc:themes']"
          :key="theme"
          class="mx-1"
          color="rgb(124, 69, 86)"
          dark
          label
        >
          {{ theme }}
        </v-chip>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-icon>
                  mdi-calendar-today
                </v-icon>
                Start date {{ record.properties.start_datetime }}
              </v-col>
              <v-col cols="12">
                <v-icon>
                  mdi-calendar
                </v-icon>
                End date {{ record.properties.end_datetime }}
              </v-col>
              <v-col cols="12">
                <v-icon>
                  mdi-calendar-check
                </v-icon>
                Release date {{ record.properties.datetime.slice(0, -10) }}
              </v-col>
              <v-col cols="12">
                <v-icon>
                  mdi-format-list-bulleted
                </v-icon>
                Project - {{ record.properties['osc:project'] }}
              </v-col>
              <v-col cols="12">
                <v-icon>
                  mdi-image-outline
                </v-icon>
                Satellite missions - {{ record.properties['osc:missions'].join(',') }}
              </v-col>
              <v-col cols="12">
                <v-dialog
                  v-model="productsDialog"
                  width="500"
                >
                  <template #activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Products
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      Product links
                      <v-spacer />
                      <v-icon @click="productsDialog = false">
                        mdi-close
                      </v-icon>
                    </v-card-title>
                    <v-divider />
                    <v-card-text>
                      <v-row>
                        <v-col
                          v-for="link in record.links.filter(el => el.rel === 'via')"
                          :key="link.href"
                          cols="6"
                        >
                          <v-card class="pa-4" outlined>
                            <v-chip
                              color="green"
                              small
                              label
                              dark
                            >
                              Link
                            </v-chip>
                            <div>
                              Website
                            </div>
                            <v-icon>
                              mdi-web
                            </v-icon>
                            Type URL
                            <v-btn
                              color="primary"
                              :href="link.href"
                              target="_blank"
                            >
                              Open Link
                            </v-btn>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" md="6">
          <v-container>
            <v-row>
              <v-col>
                <template v-if="$vuetify.breakpoint.smAndDown">
                  <v-scale-transition>
                    <small v-show="showDescription">{{ record.properties.description }}</small>
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
                          {{ record.properties.description }}
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
    <v-container>
      <v-row>
        <v-col>
          <no-ssr>
            <div
              id="mapContainer"
              style="height: 700px; width: 100%;"
            />
          </no-ssr>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import Draw from 'ol/interaction/Draw'

export default {
  name: 'RecordSingle',
  data () {
    return {
      record: null,
      productsDialog: false,
      showDescription: false,
      map: null,
      baseLayers: [
        {
          layer: 'terrain-light_3857'
        },
        {
          layer: 'overlay_bright_3857'
        }
      ]
    }
  },
  head () {
    return {
      title: this.$route.params.record.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    }
  },
  async created () {
    await this.$staticCatalog.$get(`products/${this.$route.params.record}`).then((res) => {
      this.record = res
    })
    const ol = this.$ol
    const parser = new ol.WMTSCapabilities()

    fetch('https://s2maps.eu/WMTSCapabilities.xml')
      .then((response) => {
        return response.text()
      })
      .then((text) => {
        const result = parser.read(text)

        const layers = []
        this.baseLayers.forEach((baselayer) => {
          const options = ol.optionsFromCapabilities(result, {
            layer: baselayer.layer,
            matrixSet: 'EPSG:3857'
          })
          layers.push(new ol.TileLayer({
            opacity: 1,
            source: new ol.WMTS(options)
          }))
        })

        this.map = new ol.Map({
          layers,
          target: 'mapContainer',
          view: new ol.View({
            center: [0, 0],
            zoom: 0
          })
        })

        // this.map.addInteraction(
        //   new Draw({
        //     type: 'Feature',
        //     source: this.record.geometry
        //   })
        // )
      })
  }
}
</script>
