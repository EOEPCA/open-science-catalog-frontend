import Vue from 'vue'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import { Fill, Stroke, Style } from 'ol/style'
import GeoJSON from 'ol/format/GeoJSON'
import { Vector as VectorSource } from 'ol/source'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS'
import WMTSCapabilities from 'ol/format/WMTSCapabilities'
import Draw, { createBox } from 'ol/interaction/Draw'

const ol = {
  Map,
  View,
  Fill,
  Stroke,
  Style,
  GeoJSON,
  VectorSource,
  TileLayer,
  VectorLayer,
  WMTS,
  WMTSCapabilities,
  optionsFromCapabilities,
  Draw,
  createBox
}
Vue.prototype.$ol = ol
