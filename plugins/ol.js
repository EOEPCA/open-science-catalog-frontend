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
import { Control, defaults as defaultControls } from 'ol/control'

class ClearMap extends Control {
  constructor () {
    const button = document.createElement('button')
    button.innerHTML = 'Clear selection'

    const element = document.createElement('div')
    element.className = 'clear-btn ol-unselectable ol-control'
    element.appendChild(button)

    super({
      element
    })

    button.addEventListener('click', this.clear.bind(this), false)
  }

  clear () {
    const source = this.getMap().getLayers().array_[2].getSource()
    source.clear()
  }
}

export const ol = {
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
  createBox,
  ClearMap,
  defaultControls
}
Vue.prototype.$ol = ol
