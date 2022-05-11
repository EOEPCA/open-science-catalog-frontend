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
          layer: 'terrain-light_3857'
        },
        {
          layer: 'overlay_bright_3857'
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
      if (this.map && feature && feature.geometry) {
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
          color: 'rgba(0, 200, 71, 0.4)'
        })
      })

      fetch('https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml')
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
            features: this.features.filter(f => !!f.geometry)
          }
          this.vectorSource = new ol.VectorSource({
            features: new ol.GeoJSON().readFeatures(geojsonObject, {
              dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'
            })
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

          if (this.enableDraw) {
            this.draw = new ol.Draw({
              source: this.vectorSource,
              type: 'Polygon'
            })
            this.map.addInteraction(this.draw)

            this.draw.on('drawend', (e) => {
              this.$emit('drawEnd', e.feature.getGeometry())
            })
          }
        })
    },
    undo () {
      this.draw.removeLastPoint()
    },
    clear () {
      const features = this.vectorSource.getFeatures()
      this.vectorSource.removeFeature(features[features.length - 1])
    }
  }
}
</script>
