<template>
  <no-ssr>
    <div
      style="position: relative"
    >
      <div
        class="d-flex align-center justify-center"
        style="position: absolute; width: 100%; height: 100%"
      >
        <v-progress-circular
          v-if="loading"
          color="primary"
          :size="70"
          indeterminate
        />
      </div>
      <div
        ref="mapContainer"
        :style="`height: ${$vuetify.breakpoint.smOnly ? '200px' : '400px'}; width: 100%;`"
      />
    </div>
  </no-ssr>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      default: null
    },
    highlight: {
      type: Object,
      default: null
    },
    enableDraw: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      map: null,
      draw: null,
      baseLayers: [
        {
          layer: 'terrain-light'
        },
        {
          layer: 'overlay_bright'
        }
      ],
      vectorSource: null,
      defaultStyle: null,
      highlightStyle: null,
      defaultPadding: [50, 25, 50, 25],
      loading: true,
      clearButton: null
    }
  },
  watch: {
    highlight (feature) {
      this.vectorSource.getFeatures().forEach(f => f.setStyle(this.defaultStyle))
      if (this.map && feature && feature.geometry) {
        const highlightFeature = this.vectorSource.getFeatureById(feature.id)
        highlightFeature.setStyle(this.highlightStyle)
        console.log(highlightFeature.getGeometry().getExtent())
        this.map.getView().fit(highlightFeature.getGeometry().getExtent(), {
          padding: this.defaultPadding,
          duration: 500
        })
      } else {
        this.map.getView().fit([-180, -90, 180, 90], {
          padding: this.defaultPadding,
          duration: 500
        })
      }
    }
  },
  mounted () {
    this.createMap()
  },
  methods: {
    createMap () {
      const ol = this.$ol
      const parser = new ol.WMTSCapabilities()
      this.defaultStyle = new ol.Style({
        stroke: new ol.Stroke({
          color: 'rgba(0, 50, 71, 0.5)',
          width: 3
        }),
        fill: new ol.Fill({
          color: 'rgba(0, 50, 71, 0.1)'
        })
      })

      this.highlightStyle = new ol.Style({
        stroke: new ol.Stroke({
          color: 'rgba(20, 100, 91, 1)',
          width: 3
        }),
        fill: new ol.Fill({
          color: 'rgba(0, 200, 71, 0.4)'
        })
      })

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
              matrixSet: 'WGS84'
            })
            // TEMP - until the options from capabilities actually work
            options.tileGrid.max_zoom = 13
            options.tileGrid.fullTileRanges_['2'] = new ol.TileRange()
            options.tileGrid.fullTileRanges_['2'].minX = 0
            options.tileGrid.fullTileRanges_['2'].maxX = 7
            options.tileGrid.fullTileRanges_['2'].minY = 0
            options.tileGrid.fullTileRanges_['2'].maxY = 3
            options.tileGrid.fullTileRanges_['1'] = new ol.TileRange()
            options.tileGrid.fullTileRanges_['1'].minX = 0
            options.tileGrid.fullTileRanges_['1'].maxX = 3
            options.tileGrid.fullTileRanges_['1'].minY = 0
            options.tileGrid.fullTileRanges_['1'].maxY = 1

            layers.push(new ol.TileLayer({
              opacity: 1,
              source: new ol.WMTS({
                ...options,
                wrapX: true,
                attributions: result.Contents.Layer
                  .find(l => l.Identifier === baselayer.layer).Abstract +
                  (this.baseLayers.indexOf(baselayer) < this.baseLayers.length - 1 ? ',' : '')
              })
            }))
          })
          const geojsonObject = {
            type: 'FeatureCollection',
            crs: {
              type: 'name',
              properties: {
                name: 'EPSG:4326'
              }
            },
            features: this.features ? this.features.filter(f => !!f.geometry) : []
          }
          this.vectorSource = new ol.VectorSource({
            features: new ol.GeoJSON().readFeatures(geojsonObject, {
              dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'
            })
          })
          this.vectorSource.on('clear', () => {
            this.map.removeControl(this.clearButton)
          })
          const vectorLayer = new ol.VectorLayer({
            source: this.vectorSource,
            style: this.defaultStyle
          })

          layers.push(vectorLayer)
          this.clearButton = new ol.ClearMap()
          this.map = new ol.Map({
            // controls: ol.defaultControls().extend([new ol.ClearMap()]),
            layers,
            target: this.$refs.mapContainer,
            view: new ol.View({
              center: [0, 0],
              zoom: 2,
              multiWorld: true,
              projection: 'EPSG:4326'
            })
          })

          if (this.features) {
            this.map.getView().fit(this.vectorSource.getExtent(), {
              padding: this.defaultPadding
            })
          }

          this.map.on('loadstart', () => {
            this.loading = false
          })

          if (this.enableDraw) {
            this.draw = new ol.Draw({
              source: this.vectorSource,
              type: 'Circle',
              geometryFunction: ol.createBox()
            })
            this.map.addInteraction(this.draw)

            this.draw.on('drawstart', () => {
              this.vectorSource.clear()
            })
            this.draw.on('drawend', (e) => {
              this.$emit('drawEnd', e.feature.getGeometry())
              this.map.addControl(this.clearButton)
            })
          }
        })
    },
    clearFeatures () {
      this.vectorSource.clear()
    }
  }
}
</script>

<style>
.clear-btn {
  top: 15px;
  right: 0.5em;
}
.clear-btn button {
  width: auto !important;
  padding: 0 0.5em !important;
}
</style>
