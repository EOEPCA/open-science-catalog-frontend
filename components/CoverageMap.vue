<template>
  <no-ssr>
    <div
      id="mapContainer"
      style="height: 400px; width: 100%;"
    />
  </no-ssr>
</template>

<script>
export default {
  components: {},
  data () {
    return {
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
  created () {
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
      })
  }
}
</script>
