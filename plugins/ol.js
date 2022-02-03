import Vue from 'vue'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS'
import WMTSCapabilities from 'ol/format/WMTSCapabilities'

const ol = {
  Map,
  View,
  TileLayer,
  WMTS,
  WMTSCapabilities,
  optionsFromCapabilities
}
Vue.prototype.$ol = ol
