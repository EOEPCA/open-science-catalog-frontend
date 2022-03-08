<template>
  <no-ssr>
    <div
      ref="mapContainer"
      :style="`height: ${$vuetify.breakpoint.smOnly ? '200px' : '400px'}; width: 100%;`"
    />
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
    }
  },
  data () {
    return {
      map: null,
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
      defaultPadding: [50, 25, 50, 25]
    }
  },
  watch: {
    highlight (feature) {
      if (feature && feature.geometry) {
        this.vectorSource.getFeatures().forEach(f => f.setStyle(this.defaultStyle))
        const highlightFeature = this.vectorSource.getFeatureById(feature.id)
        highlightFeature.setStyle(this.highlightStyle)
        this.map.getView().fit(highlightFeature.getGeometry().getExtent(), {
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
          color: 'rgba(0, 50, 71, 0.2)'
        })
      })

      this.highlightStyle = new ol.Style({
        stroke: new ol.Stroke({
          color: 'rgba(20, 100, 91, 1)',
          width: 3
        }),
        fill: new ol.Fill({
          color: 'rgba(0, 100, 71, 0.4)'
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
              matrixSet: 'EPSG:4326'
            })
            options.wrapX = true
            layers.push(new ol.TileLayer({
              opacity: 1,
              source: new ol.WMTS(options)
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
            features: this.features.filter(f => !!f.geometry)
          }
          this.vectorSource = new ol.VectorSource({
            features: new ol.GeoJSON().readFeatures(geojsonObject)
          })

          const vectorLayer = new ol.VectorLayer({
            source: this.vectorSource,
            style: this.defaultStyle
          })

          layers.push(vectorLayer)

          this.map = new ol.Map({
            layers,
            target: this.$refs.mapContainer,
            view: new ol.View({
              center: [0, 0],
              zoom: 0,
              multiWorld: true,
              projection: 'EPSG:4326'
            })
          })

          this.map.getView().fit(this.vectorSource.getExtent(), {
            padding: this.defaultPadding
          })
        })
    },
    unmount () {
      this.map = null
    }
  }
}
</script>
