(window.webpackJsonp=window.webpackJsonp||[]).push([[17,10],{588:function(e,t,r){var content=r(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("b7fa5fcc",content,!0,{sourceMap:!1})},589:function(e,t,r){var n=r(71);e.exports=function(e){return n(Map.prototype.entries,e)}},592:function(e,t,r){"use strict";r.r(t);r(26),r(21),r(31),r(32);var n=r(7);r(25),r(13),r(23),r(127),r(215);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={props:{features:{type:Array,default:null},highlight:{type:Object,default:null},enableDraw:{type:Boolean,default:!1}},data:function(){return{map:null,draw:null,baseLayers:[{layer:"terrain-light"},{layer:"overlay_bright"}],vectorSource:null,defaultStyle:null,highlightStyle:null,defaultPadding:[50,25,50,25],loading:!0,clearButton:null}},watch:{features:{deep:!0,handler:function(e){if(this.vectorSource){var t={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:e?e.filter((function(e){return!!e.geometry})):[]},r=(new this.$ol.GeoJSON).readFeatures(t,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"});this.vectorSource.clear(),this.vectorSource.addFeatures(r)}}},highlight:function(e){var t=this;if(this.vectorSource.getFeatures().forEach((function(e){return e.setStyle(t.defaultStyle)})),this.map&&e&&e.geometry){var r=this.vectorSource.getFeatureById(e.id);r.setStyle(this.highlightStyle),console.log(r.getGeometry().getExtent()),this.map.getView().fit(r.getGeometry().getExtent(),{padding:this.defaultPadding,duration:500})}else this.map.getView().fit([-180,-90,180,90],{padding:this.defaultPadding,duration:500})}},mounted:function(){this.createMap()},methods:{createMap:function(){var e=this,ol=this.$ol,t=new ol.WMTSCapabilities;this.defaultStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(0, 50, 71, 0.5)",width:3}),fill:new ol.Fill({color:"rgba(0, 50, 71, 0.1)"})}),this.highlightStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(20, 100, 91, 1)",width:3}),fill:new ol.Fill({color:"rgba(0, 200, 71, 0.4)"})}),fetch("https://s2maps.eu/WMTSCapabilities.xml").then((function(e){return e.text()})).then((function(text){var r=t.read(text),n=[];e.baseLayers.forEach((function(t){var o=ol.optionsFromCapabilities(r,{layer:t.layer,matrixSet:"WGS84"});n.push(new ol.TileLayer({opacity:1,source:new ol.WMTS(l(l({},o),{},{wrapX:!0,attributions:r.Contents.Layer.find((function(e){return e.Identifier===t.layer})).Abstract+(e.baseLayers.indexOf(t)<e.baseLayers.length-1?",":"")}))}))}));var o={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:e.features?e.features.filter((function(e){return!!e.geometry})):[]};e.vectorSource=new ol.VectorSource({features:(new ol.GeoJSON).readFeatures(o,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})}),e.vectorSource.on("clear",(function(){e.map.removeControl(e.clearButton)}));var c=new ol.VectorLayer({source:e.vectorSource,style:e.defaultStyle});n.push(c),e.clearButton=new ol.ClearMap,e.map=new ol.Map({layers:n,target:e.$refs.mapContainer,view:new ol.View({center:[0,0],zoom:2,multiWorld:!0,projection:"EPSG:4326"})}),e.features&&e.map.getView().fit(e.vectorSource.getExtent(),{padding:e.defaultPadding}),e.map.on("loadstart",(function(){e.loading=!1})),e.enableDraw&&(e.draw=new ol.Draw({source:e.vectorSource,type:"Circle",geometryFunction:ol.createBox()}),e.map.addInteraction(e.draw),e.draw.on("drawstart",(function(){e.vectorSource.clear()})),e.draw.on("drawend",(function(t){e.$emit("drawEnd",t.feature.getGeometry()),e.map.addControl(e.clearButton)})))}))},clearFeatures:function(){this.vectorSource.clear()}}},f=(r(594),r(162)),d=r(214),h=r.n(d),m=r(298),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("client-only",[r("div",{staticStyle:{position:"relative"}},[r("div",{staticClass:"d-flex align-center justify-center",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[e.loading?r("v-progress-circular",{attrs:{color:"primary",size:70,indeterminate:""}}):e._e()],1),e._v(" "),r("div",{ref:"mapContainer",style:"height: "+(e.$vuetify.breakpoint.smOnly?"200px":"400px")+"; width: 100%;"})])])}),[],!1,null,null,null);t.default=component.exports;h()(component,{VProgressCircular:m.a})},594:function(e,t,r){"use strict";r(588)},595:function(e,t,r){var n=r(37)(!1);n.push([e.i,".clear-btn{top:15px;right:.5em}.clear-btn button{width:auto!important;padding:0 .5em!important}",""]),e.exports=n},600:function(e,t,r){var content=r(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("ee26dd4c",content,!0,{sourceMap:!1})},616:function(e,t,r){"use strict";r(600)},617:function(e,t,r){var n=r(37)(!1);n.push([e.i,".customOutline[data-v-3e16b5dc]  fieldset{border:none!important}",""]),e.exports=n},629:function(e,t,r){"use strict";r.r(t);r(26),r(21),r(31),r(32);var n=r(30),o=r(216),l=r(7),c=(r(153),r(58),r(127),r(51),r(215),r(13),r(25),r(329),r(65),r(23),r(117),r(275),r(90),r(118),r(163),r(322),r(416),r(157));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"SearchCombobox",props:{embeddedMode:{type:Boolean,default:!1},currentPage:{type:Number,default:1},sortBy:{type:String,default:"title"},sortOrder:{type:String,default:"Ascending"},preSelectedItems:{type:Array,default:function(){return[]}},itemType:{type:String,default:"product"},paginationLoop:{type:Boolean,default:!1},sortOnCreated:{type:Boolean,default:!1}},data:function(){return{filterModel:null,filterItems:[],mainInputValue:null,inputComplete:!1,searchText:null,loading:!1,variables:[],inProgressItem:null,textInputModel:null,showMap:!1,mapFeatures:{geometry:{type:"Polygon",bbox:[0,0,0,0],coordinates:[[[-180,-90],[180,-90],[180,90],[-180,90],[-180,-90]]]},type:"Feature"},bbox:null}},computed:d(d({},Object(c.d)("staticCatalog",["missions","themes"])),{},{availableItems:function(){return[{field_name:"theme",filter:"exact",available_values:this.themes?this.themes.map((function(e){return e.name})):[]},{field_name:"variable",filter:"exact",available_values:this.variables},{field_name:"project",filter:"like"},{field_name:"product",filter:"like"},{field_name:"mission",filter:"exact",available_values:this.missions?this.missions.map((function(e){return e.name})):[]},{field_name:"type",filter:"exact",available_values:["project","product"]},{field_name:"bbox",filter:"bbox"}]},currentlyFreeText:function(){return this.filterItems&&this.filterItems.find((function(i){return!i.value&&i.operator}))},isNumberField:function(){var e=this.filterItems.find((function(e){return null===e.value}));return void 0!==this.availableItems.find((function(t){return t.field_name===e.key})).digits},filterFields:function(){var e,t=this,r=this.availableItems.filter((function(e){return e.filter&&(!t.filterItems.find((function(i){return i.key===e.field_name}))||"range"===e.filter&&t.filterItems.filter((function(i){return i.key===e.field_name})).length<2)}));if(this.inProgressItem=this.filterItems.find((function(e){return null===e.value})),this.inProgressItem||this.currentlyFreeText){var n=this.inProgressItem&&this.availableItems.find((function(e){return e.field_name===t.inProgressItem.key}));if(this.inProgressItem.operator)e=[];else if("boolean"===n.filter)e=[{filter_value:!0,field_name:"true",original_field_name:this.inProgressItem.key},{filter_value:!1,field_name:"false",original_field_name:this.inProgressItem.key}];else if("exact"===n.filter)n.available_values?Array.isArray(n.available_values)&&(e=n.available_values.map((function(i){return{filter_value:i,field_name:i,original_field_name:n.field_name}})).filter((function(e){var r=t.filterItems?t.filterItems.filter((function(i){return i.value})):[];return"variable"!==e.original_field_name||function(n,o){var l=r.find((function(e){return e.key===n}));if(l){var c="".concat(n,"s"),f=t[c].find((function(e){return e.name===l.value}));if(f)return f[o].find((function(t){return t.name===e.field_name}))}return!0}("theme","variables")})).sort((function(a,b){return a.field_name.localeCompare(b.field_name,"en",{sensitivity:"base"})}))):e=[{filter_value:null,field_name:"is exactly",operator:"=",original_field_name:this.inProgressItem.key}];else if("like"===n.filter)e=n.available_values?n.available_values.map((function(i){return{filter_value:i,field_name:i,original_field_name:n.field_name}})):[{filter_value:null,field_name:"includes",operator:"includes",original_field_name:this.inProgressItem.key}];else if("range"===n.filter){var l=this.filterItems.find((function(i){return i.key===t.inProgressItem.key&&!!i.operator}));e=[].concat(Object(o.a)(l&&"≤"===l.operator?[]:[{filter_value:null,field_name:"≤ lower than or equal}",operator:"≤",original_field_name:this.inProgressItem.key}]),Object(o.a)(l&&"≥"===l.operator?[]:[{filter_value:null,field_name:"≥ higher than or equal",operator:"≥",original_field_name:this.inProgressItem.key}]))}else e=r}else e=r;return e}}),watch:{filterItems:function(e){!e.find((function(i){return"bbox"===i.key}))&&this.bbox&&this.$refs.map.clearFeatures()},showMap:function(e){e||this.bbox||this.onDelete()}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preSelectedItems.length>0&&(e.filterItems=e.preSelectedItems),t.next=3,e.retreiveMetrics();case 3:e.themes.forEach((function(t){t.variables.forEach((function(t){e.variables.push(t.name)}))})),e.variables=e.variables.sort((function(a,b){return a.localeCompare(b,"en",{sensitivity:"base"})})),e.sortOnCreated&&e.filterProducts();case 6:case"end":return t.stop()}}),t)})))()},mounted:function(){this.embeddedMode||this.$refs.headless.focus()},methods:d(d(d({},Object(c.b)("dynamicCatalog",["fetchCustomQuery"])),Object(c.b)("staticCatalog",["retreiveMetrics"])),{},{select:function(e){var t=this;e&&("bbox"===e.filter&&(this.showMap=!0),this.currentlyFreeText?this.filterItems=this.filterItems.map((function(i){return!i.value&&i.operator&&(i.value=e),i})):e.operator?this.filterItems=this.filterItems.map((function(i){return i.value||(i.operator=e.operator),i})):e.filter_value?(this.filterItems=this.filterItems.map((function(i){return i.value||(i.value=e.filter_value),i})),this.filterModel=null):this.filterItems.push({key:e.field_name,value:null}),this.inputComplete=!1,setTimeout((function(){t.inputComplete=!0}),300),this.$nextTick((function(){t.$refs.headless.focus(),t.currentlyFreeText||t.$refs.headless.activateMenu()}))),this.textInputModel=null},remove:function(e){"bbox"===e.key&&(this.bbox=null),this.filterItems.splice(this.filterItems.indexOf(e),1),this.filterModel=null,this.onEnter()},onEnter:function(){var e=this;!this.inProgressItem&&this.textInputModel&&(this.filterItems.push({key:"record",operator:"includes",value:this.textInputModel}),this.inputComplete=!1,setTimeout((function(){e.inputComplete=!0}),300)),this.inputComplete&&this.filterItems.every((function(i){return!!i.value}))&&this.submit(),this.textInputModel=null},onDelete:function(){this.filterItems.length<1||this.searchText||this.preSelectedItems.map((function(i){return i.key})).includes(this.filterItems[this.filterItems.length-1].key)||("bbox"===this.filterItems[this.filterItems.length-1].key&&(this.bbox=null),null===this.textInputModel?(this.filterItems.pop(),this.filterModel=null):""===this.textInputModel&&(this.textInputModel=null))},submit:function(){this.filterProducts()},filterProducts:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var l,c,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!0,r.prev=1,l="",c=t.filterItems.reduce((function(e,t){var r=["theme","variable"];return r.includes(t.key)&&(l+="".concat(l.length>0?" AND ":"","keywords ILIKE '%").concat(t.key,":").concat(t.value,"%'")),"type"===t.key?"".concat(e,"&type=").concat("project"===t.value.toLowerCase()?"datasetcollection":"dataset"):r.includes(t.key)?e:"bbox"!==t.key?"".concat(e,"&q=").concat(t.value):e}),""),f="/collections/metadata:main/items?limit=12&sortby=".concat("Descending"===t.sortOrder?"-".concat(t.sortBy):"".concat(t.sortBy),"&offset=").concat(12*(t.currentPage-1)).concat(c).concat(l?"&filter=".concat(l):"").concat(t.bbox?"&bbox=".concat(t.bbox.join(",")):""),r.next=7,t.fetchCustomQuery(f).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.paginationLoop){e.next=11;break}n=r.numberMatched/r.numberReturned,f=t.currentPage,d=1;case 4:if(!(d<n)){e.next=11;break}return f++,e.next=8,t.fetchCustomQuery("/collections/metadata:main/items?limit=12&sortby=".concat("Descending"===t.sortOrder?"-".concat(t.sortBy):"".concat(t.sortBy),"&offset=").concat(12*(f-1)).concat(c).concat(l?"&filter=".concat(l):"").concat(t.bbox?"&bbox=".concat(t.bbox.join(",")):"")).then((function(e){r.features=[].concat(Object(o.a)(r.features),Object(o.a)(e.features))})).catch((function(e){return console.error(e)}));case 8:d++,e.next=4;break;case 11:t.$emit("searchQuery",{items:r.features,numberOfPages:Math.ceil(r.numberMatched/12),numberOfItems:r.numberMatched});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}));case 7:0===t.filterItems.length&&t.$emit("clearEvent"),e||t.$refs.headless.blur(),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),console.error(r.t0);case 14:t.loading=!1;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},handleDraw:function(e){this.bbox=e.getExtent(),this.mapFeatures.geometry.bbox=this.bbox;var t=this.filterItems.findIndex((function(i){return"bbox"===i.key}));t>-1&&this.filterItems.splice(t,1),this.filterItems.push({key:"bbox",value:this.bbox.map((function(e){return e.toFixed(3)})).join(",")})}})},m=h,v=(r(616),r(162)),y=r(214),x=r.n(y),I=r(741),_=r(333),S=r(645),w=r(775),k=r(691),E=r(299),O=r(201),T=r(128),M=r(696),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex align-center"},[r("div",{staticClass:"\n        d-flex\n        lightgrey\n        align-center",staticStyle:{width:"100%",position:"relative"}},[r("div",{staticStyle:{position:"absolute",width:"100%"}},[r("v-text-field",{staticStyle:{"pointer-events":"none"},attrs:{label:(e.embeddedMode?"Filter":"Search")+" items",outlined:"",dense:"","hide-details":"",value:e.mainInputValue,height:"42"}})],1),e._v(" "),e._l(e.filterItems,(function(t,n){return r("v-chip",{key:n,staticClass:"ml-1",class:e.embeddedMode?"mx-1":"mr-1",attrs:{small:"",close:!!t.value&&!e.preSelectedItems.map((function(i){return i.key})).includes(t.key)},on:{"click:close":function(r){return e.remove(t)}}},[r("span",{staticClass:"text-capitalize"},[e._v("\n        "+e._s(t.key)+"\n      ")]),e._v(" "),t.value||t.operator?r("span",{staticClass:"px-1"},[e._v("\n        "+e._s(t.operator||":"))]):e._e(),e._v(" "),r("strong",[e._v(e._s(t.value?" "+t.value:""))])])})),e._v(" "),e.currentlyFreeText?r("v-combobox",{ref:"headless",staticClass:"headless-input customOutline",staticStyle:{width:"0"},attrs:{placeholder:"...",label:" ",items:[],chips:"","search-input":e.searchText,outlined:"",dense:"",autofocus:"","hide-details":"",type:e.isNumberField?"number":"text"},on:{"update:searchInput":function(t){e.searchText=t},"update:search-input":function(t){e.searchText=t},change:e.select,focus:function(t){e.mainInputValue=" "},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDelete.apply(null,arguments)}},scopedSlots:e._u([{key:"no-data",fn:function(){return[r("v-list-item",{on:{click:function(t){return e.select(e.searchText)}}},[r("v-list-item-content",[r("v-list-item-title",[e._v("\n              "+e._s(e.searchText)+"\n            ")])],1)],1)]},proxy:!0}],null,!1,3084499102)}):r("v-autocomplete",{ref:"headless",staticClass:"headless-input customOutline",staticStyle:{width:"0"},attrs:{items:e.filterFields,chips:"","item-text":"field_name","return-object":"",label:" ",outlined:"",dense:"","hide-details":"","search-input":e.textInputModel},on:{"update:searchInput":function(t){e.textInputModel=t},"update:search-input":function(t){e.textInputModel=t},input:e.select,focus:function(t){e.mainInputValue=" "},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDelete.apply(null,arguments)}]},scopedSlots:e._u([{key:"no-data",fn:function(){return[r("v-list-item",[r("v-list-item-title",[e._v("\n            Search for in all records (freetext)\n          ")])],1)]},proxy:!0},{key:"item",fn:function(data){return[r("span",{class:data.item.filter?"text-capitalize":""},[e._v("\n          "+e._s(data.item.field_name)+"\n        ")])]}}]),model:{value:e.filterModel,callback:function(t){e.filterModel=t},expression:"filterModel"}})],2),e._v(" "),r("v-btn",{staticClass:"ml-3",attrs:{color:"primary",disabled:e.filterItems.length<1||!!e.filterItems.find((function(e){return null===e.value})),loading:e.loading},on:{click:e.submit}},[r("v-icon",[e._v("\n      mdi-magnify\n    ")])],1),e._v(" "),r("v-dialog",{attrs:{width:"1000"},model:{value:e.showMap,callback:function(t){e.showMap=t},expression:"showMap"}},[r("div",{staticClass:"white"},[r("client-only",[r("CoverageMap",{ref:"map",attrs:{"enable-draw":""},on:{drawEnd:function(t){e.handleDraw(t),e.showMap=!1}}})],1)],1)])],1)}),[],!1,null,"3e16b5dc",null);t.default=component.exports;x()(component,{CoverageMap:r(592).default}),x()(component,{VAutocomplete:I.a,VBtn:_.a,VChip:S.a,VCombobox:w.a,VDialog:k.a,VIcon:E.a,VListItem:O.a,VListItemContent:T.a,VListItemTitle:T.b,VTextField:M.a})},672:function(e,t,r){"use strict";r(673)("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(674))},673:function(e,t,r){"use strict";var n=r(20),o=r(14),l=r(22),c=r(223),f=r(94),d=r(417),h=r(414),m=r(336),v=r(48),y=r(66),x=r(24),I=r(339),_=r(189),S=r(343);e.exports=function(e,t,r){var w=-1!==e.indexOf("Map"),k=-1!==e.indexOf("Weak"),E=w?"set":"add",O=o[e],T=O&&O.prototype,M=O,P={},R=function(e){var t=l(T[e]);f(T,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(k&&!y(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return k&&!y(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(k&&!y(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})};if(c(e,!v(O)||!(k||T.forEach&&!x((function(){(new O).entries().next()})))))M=r.getConstructor(t,e,w,E),d.enable();else if(c(e,!0)){var C=new M,j=C[E](k?{}:-0,1)!=C,A=x((function(){C.has(1)})),D=I((function(e){new O(e)})),F=!k&&x((function(){for(var e=new O,t=5;t--;)e[E](t,t);return!e.has(-0)}));D||((M=t((function(e,t){m(e,T);var r=S(new O,e,M);return null!=t&&h(t,r[E],{that:r,AS_ENTRIES:w}),r}))).prototype=T,T.constructor=M),(A||F)&&(R("delete"),R("has"),w&&R("get")),(F||j)&&R(E),k&&T.clear&&delete T.clear}return P[e]=M,n({global:!0,forced:M!=O},P),_(M,e),k||r.setStrong(M,e,w),M}},674:function(e,t,r){"use strict";var n=r(84).f,o=r(158),l=r(341),c=r(155),f=r(336),d=r(414),h=r(340),m=r(342),v=r(72),y=r(417).fastKey,x=r(138),I=x.set,_=x.getterFor;e.exports={getConstructor:function(e,t,r,h){var m=e((function(e,n){f(e,x),I(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),v||(e.size=0),null!=n&&d(n,e[h],{that:e,AS_ENTRIES:r})})),x=m.prototype,S=_(t),w=function(e,t,r){var n,o,l=S(e),c=k(e,t);return c?c.value=r:(l.last=c={index:o=y(t,!0),key:t,value:r,previous:n=l.last,next:void 0,removed:!1},l.first||(l.first=c),n&&(n.next=c),v?l.size++:e.size++,"F"!==o&&(l.index[o]=c)),e},k=function(e,t){var r,n=S(e),o=y(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return l(x,{clear:function(){for(var e=S(this),data=e.index,t=e.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=void 0),delete data[t.index],t=t.next;e.first=e.last=void 0,v?e.size=0:this.size=0},delete:function(e){var t=this,r=S(t),n=k(t,e);if(n){var o=n.next,l=n.previous;delete r.index[n.index],n.removed=!0,l&&(l.next=o),o&&(o.previous=l),r.first==n&&(r.first=o),r.last==n&&(r.last=l),v?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=S(this),n=c(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!k(this,e)}}),l(x,r?{get:function(e){var t=k(this,e);return t&&t.value},set:function(e,t){return w(this,0===e?0:e,t)}}:{add:function(e){return w(this,e=0===e?0:e,e)}}),v&&n(x,"size",{get:function(){return S(this).size}}),m},setStrong:function(e,t,r){var n=t+" Iterator",o=_(t),l=_(n);h(e,t,(function(e,t){I(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=l(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),m(t)}}},675:function(e,t,r){"use strict";r(20)({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:r(676)})},676:function(e,t,r){"use strict";var n=r(71),o=r(156),l=r(54);e.exports=function(){for(var e,t=l(this),r=o(t.delete),c=!0,f=0,d=arguments.length;f<d;f++)e=n(r,t,arguments[f]),c=c&&e;return!!c}},677:function(e,t,r){"use strict";var n=r(20),o=r(54),l=r(155),c=r(589),f=r(414);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(e){var map=o(this),t=c(map),r=l(e,arguments.length>1?arguments[1]:void 0);return!f(t,(function(e,t,n){if(!r(t,e,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},678:function(e,t,r){"use strict";var n=r(20),o=r(112),l=r(155),c=r(71),f=r(156),d=r(54),h=r(276),m=r(589),v=r(414);n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(e){var map=d(this),t=m(map),r=l(e,arguments.length>1?arguments[1]:void 0),n=new(h(map,o("Map"))),y=f(n.set);return v(t,(function(e,t){r(t,e,map)&&c(y,n,e,t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},679:function(e,t,r){"use strict";var n=r(20),o=r(54),l=r(155),c=r(589),f=r(414);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(e){var map=o(this),t=c(map),r=l(e,arguments.length>1?arguments[1]:void 0);return f(t,(function(e,t,n){if(r(t,e,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},680:function(e,t,r){"use strict";var n=r(20),o=r(54),l=r(155),c=r(589),f=r(414);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(e){var map=o(this),t=c(map),r=l(e,arguments.length>1?arguments[1]:void 0);return f(t,(function(e,t,n){if(r(t,e,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},681:function(e,t,r){"use strict";var n=r(20),o=r(54),l=r(589),c=r(682),f=r(414);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(e){return f(l(o(this)),(function(t,r,n){if(c(r,e))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},682:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},683:function(e,t,r){"use strict";var n=r(20),o=r(54),l=r(589),c=r(414);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(e){return c(l(o(this)),(function(t,r,n){if(r===e)return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},684:function(e,t,r){"use strict";var n=r(20),o=r(112),l=r(155),c=r(71),f=r(156),d=r(54),h=r(276),m=r(589),v=r(414);n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(e){var map=d(this),t=m(map),r=l(e,arguments.length>1?arguments[1]:void 0),n=new(h(map,o("Map"))),y=f(n.set);return v(t,(function(e,t){c(y,n,r(t,e,map),t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},685:function(e,t,r){"use strict";var n=r(20),o=r(112),l=r(155),c=r(71),f=r(156),d=r(54),h=r(276),m=r(589),v=r(414);n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(e){var map=d(this),t=m(map),r=l(e,arguments.length>1?arguments[1]:void 0),n=new(h(map,o("Map"))),y=f(n.set);return v(t,(function(e,t){c(y,n,e,r(t,e,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},686:function(e,t,r){"use strict";var n=r(20),o=r(156),l=r(54),c=r(414);n({target:"Map",proto:!0,real:!0,forced:!0},{merge:function(e){for(var map=l(this),t=o(map.set),r=arguments.length,i=0;i<r;)c(arguments[i++],t,{that:map,AS_ENTRIES:!0});return map}})},687:function(e,t,r){"use strict";var n=r(20),o=r(14),l=r(54),c=r(156),f=r(589),d=r(414),h=o.TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(e){var map=l(this),t=f(map),r=arguments.length<2,n=r?void 0:arguments[1];if(c(e),d(t,(function(t,o){r?(r=!1,n=o):n=e(n,o,t,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw h("Reduce of empty map with no initial value");return n}})},688:function(e,t,r){"use strict";var n=r(20),o=r(54),l=r(155),c=r(589),f=r(414);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(e){var map=o(this),t=c(map),r=l(e,arguments.length>1?arguments[1]:void 0);return f(t,(function(e,t,n){if(r(t,e,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},689:function(e,t,r){"use strict";var n=r(20),o=r(14),l=r(71),c=r(54),f=r(156),d=o.TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(e,t){var map=c(this),r=f(map.get),n=f(map.has),o=f(map.set),h=arguments.length;f(t);var m=l(n,map,e);if(!m&&h<3)throw d("Updating absent value");var v=m?l(r,map,e):f(h>2?arguments[2]:void 0)(e,map);return l(o,map,e,t(v,e,map)),map}})}}]);