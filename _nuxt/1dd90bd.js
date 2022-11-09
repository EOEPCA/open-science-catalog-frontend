(window.webpackJsonp=window.webpackJsonp||[]).push([[20,12],{624:function(e,t,r){var content=r(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("b7fa5fcc",content,!0,{sourceMap:!1})},625:function(e,t,r){var n=r(48);e.exports=function(e){return n(Map.prototype.entries,e)}},627:function(e,t,r){"use strict";r.r(t);r(23),r(18),r(28),r(29);var n=r(6);r(22),r(11),r(19),r(113),r(189);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={props:{features:{type:Array,default:null},highlight:{type:Object,default:null},enableDraw:{type:Boolean,default:!1}},data:function(){return{map:null,draw:null,baseLayers:[{layer:"terrain-light"},{layer:"overlay_bright"}],vectorSource:null,defaultStyle:null,highlightStyle:null,defaultPadding:[50,25,50,25],loading:!0,clearButton:null}},watch:{features:{deep:!0,handler:function(e){if(this.vectorSource){var t={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:e?e.filter((function(e){return!!e.geometry})):[]},r=(new this.$ol.GeoJSON).readFeatures(t,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"});this.vectorSource.clear(),this.vectorSource.addFeatures(r)}}},highlight:function(e){var t=this;if(this.vectorSource.getFeatures().forEach((function(e){return e.setStyle(t.defaultStyle)})),this.map&&e&&e.geometry){var r=this.vectorSource.getFeatureById(e.id);r.setStyle(this.highlightStyle),console.log(r.getGeometry().getExtent()),this.map.getView().fit(r.getGeometry().getExtent(),{padding:this.defaultPadding,duration:500})}else this.map.getView().fit([-180,-90,180,90],{padding:this.defaultPadding,duration:500})}},mounted:function(){this.createMap()},methods:{createMap:function(){var e=this,ol=this.$ol,t=new ol.WMTSCapabilities;this.defaultStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(0, 50, 71, 0.5)",width:3}),fill:new ol.Fill({color:"rgba(0, 50, 71, 0.1)"})}),this.highlightStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(20, 100, 91, 1)",width:3}),fill:new ol.Fill({color:"rgba(0, 200, 71, 0.4)"})}),fetch("https://s2maps.eu/WMTSCapabilities.xml").then((function(e){return e.text()})).then((function(text){var r=t.read(text),n=[];e.baseLayers.forEach((function(t){var o=ol.optionsFromCapabilities(r,{layer:t.layer,matrixSet:"WGS84"});n.push(new ol.TileLayer({opacity:1,source:new ol.WMTS(l(l({},o),{},{wrapX:!0,attributions:r.Contents.Layer.find((function(e){return e.Identifier===t.layer})).Abstract+(e.baseLayers.indexOf(t)<e.baseLayers.length-1?",":"")}))}))}));var o={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:e.features?e.features.filter((function(e){return!!e.geometry})):[]};e.vectorSource=new ol.VectorSource({features:(new ol.GeoJSON).readFeatures(o,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})}),e.vectorSource.on("clear",(function(){e.map.removeControl(e.clearButton)}));var c=new ol.VectorLayer({source:e.vectorSource,style:e.defaultStyle});n.push(c),e.clearButton=new ol.ClearMap,e.map=new ol.Map({layers:n,target:e.$refs.mapContainer,view:new ol.View({center:[0,0],zoom:2,multiWorld:!0,projection:"EPSG:4326"})}),e.features&&e.map.getView().fit(e.vectorSource.getExtent(),{padding:e.defaultPadding}),e.map.on("loadstart",(function(){e.loading=!1})),e.enableDraw&&(e.draw=new ol.Draw({source:e.vectorSource,type:"Circle",geometryFunction:ol.createBox()}),e.map.addInteraction(e.draw),e.draw.on("drawstart",(function(){e.vectorSource.clear()})),e.draw.on("drawend",(function(t){e.$emit("drawEnd",t.feature.getGeometry()),e.map.addControl(e.clearButton)})))}))},clearFeatures:function(){this.vectorSource.clear()}}},f=(r(630),r(160)),d=r(220),h=r.n(d),m=r(298),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("client-only",[r("div",{staticStyle:{position:"relative"}},[r("div",{staticClass:"d-flex align-center justify-center",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[e.loading?r("v-progress-circular",{attrs:{color:"primary",size:70,indeterminate:""}}):e._e()],1),e._v(" "),r("div",{ref:"mapContainer",style:"height: "+(e.$vuetify.breakpoint.smOnly?"200px":"400px")+"; width: 100%;"})])])}),[],!1,null,null,null);t.default=component.exports;h()(component,{VProgressCircular:m.a})},630:function(e,t,r){"use strict";r(624)},631:function(e,t,r){var n=r(35)(!1);n.push([e.i,".clear-btn{top:15px;right:.5em}.clear-btn button{width:auto!important;padding:0 .5em!important}",""]),e.exports=n},642:function(e,t,r){var content=r(663);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("ee26dd4c",content,!0,{sourceMap:!1})},662:function(e,t,r){"use strict";r(642)},663:function(e,t,r){var n=r(35)(!1);n.push([e.i,".customOutline[data-v-3e16b5dc]  fieldset{border:none!important}",""]),e.exports=n},667:function(e,t,r){"use strict";r.r(t);r(23),r(18),r(28),r(29);var n=r(24),o=r(136),l=r(6),c=(r(137),r(57),r(113),r(45),r(189),r(11),r(22),r(330),r(58),r(19),r(115),r(275),r(86),r(114),r(151),r(324),r(438),r(154));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"SearchCombobox",props:{embeddedMode:{type:Boolean,default:!1},currentPage:{type:Number,default:1},sortBy:{type:String,default:"title"},sortOrder:{type:String,default:"Ascending"},preSelectedItems:{type:Array,default:function(){return[]}},itemType:{type:String,default:"product"},paginationLoop:{type:Boolean,default:!1},sortOnCreated:{type:Boolean,default:!1}},data:function(){return{filterModel:null,filterItems:[],mainInputValue:null,inputComplete:!1,searchText:null,loading:!1,variables:[],inProgressItem:null,textInputModel:null,showMap:!1,mapFeatures:{geometry:{type:"Polygon",bbox:[0,0,0,0],coordinates:[[[-180,-90],[180,-90],[180,90],[-180,90],[-180,-90]]]},type:"Feature"},bbox:null}},computed:d(d({},Object(c.d)("staticCatalog",["missions","themes"])),{},{availableItems:function(){return[{field_name:"theme",filter:"exact",available_values:this.themes?this.themes.map((function(e){return e.name})):[]},{field_name:"variable",filter:"exact",available_values:this.variables},{field_name:"project",filter:"like"},{field_name:"product",filter:"like"},{field_name:"mission",filter:"exact",available_values:this.missions?this.missions.map((function(e){return e.name})):[]},{field_name:"type",filter:"exact",available_values:["project","product"]},{field_name:"bbox",filter:"bbox"}]},currentlyFreeText:function(){return this.filterItems&&this.filterItems.find((function(i){return!i.value&&i.operator}))},isNumberField:function(){var e=this.filterItems.find((function(e){return null===e.value}));return void 0!==this.availableItems.find((function(t){return t.field_name===e.key})).digits},filterFields:function(){var e,t=this,r=this.availableItems.filter((function(e){return e.filter&&(!t.filterItems.find((function(i){return i.key===e.field_name}))||"range"===e.filter&&t.filterItems.filter((function(i){return i.key===e.field_name})).length<2)}));if(this.inProgressItem=this.filterItems.find((function(e){return null===e.value})),this.inProgressItem||this.currentlyFreeText){var n=this.inProgressItem&&this.availableItems.find((function(e){return e.field_name===t.inProgressItem.key}));if(this.inProgressItem.operator)e=[];else if("boolean"===n.filter)e=[{filter_value:!0,field_name:"true",original_field_name:this.inProgressItem.key},{filter_value:!1,field_name:"false",original_field_name:this.inProgressItem.key}];else if("exact"===n.filter)n.available_values?Array.isArray(n.available_values)&&(e=n.available_values.map((function(i){return{filter_value:i,field_name:i,original_field_name:n.field_name}})).filter((function(e){var r=t.filterItems?t.filterItems.filter((function(i){return i.value})):[];return"variable"!==e.original_field_name||function(n,o){var l=r.find((function(e){return e.key===n}));if(l){var c="".concat(n,"s"),f=t[c].find((function(e){return e.name===l.value}));if(f)return f[o].find((function(t){return t.name===e.field_name}))}return!0}("theme","variables")})).sort((function(a,b){return a.field_name.localeCompare(b.field_name,"en",{sensitivity:"base"})}))):e=[{filter_value:null,field_name:"is exactly",operator:"=",original_field_name:this.inProgressItem.key}];else if("like"===n.filter)e=n.available_values?n.available_values.map((function(i){return{filter_value:i,field_name:i,original_field_name:n.field_name}})):[{filter_value:null,field_name:"includes",operator:"includes",original_field_name:this.inProgressItem.key}];else if("range"===n.filter){var l=this.filterItems.find((function(i){return i.key===t.inProgressItem.key&&!!i.operator}));e=[].concat(Object(o.a)(l&&"≤"===l.operator?[]:[{filter_value:null,field_name:"≤ lower than or equal}",operator:"≤",original_field_name:this.inProgressItem.key}]),Object(o.a)(l&&"≥"===l.operator?[]:[{filter_value:null,field_name:"≥ higher than or equal",operator:"≥",original_field_name:this.inProgressItem.key}]))}else e=r}else e=r;return e}}),watch:{filterItems:function(e){!e.find((function(i){return"bbox"===i.key}))&&this.bbox&&this.$refs.map.clearFeatures()},showMap:function(e){e||this.bbox||this.onDelete()}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preSelectedItems.length>0&&(e.filterItems=e.preSelectedItems),t.next=3,e.retreiveMetrics();case 3:e.themes.forEach((function(t){t.variables.forEach((function(t){e.variables.push(t.name)}))})),e.variables=e.variables.sort((function(a,b){return a.localeCompare(b,"en",{sensitivity:"base"})})),e.sortOnCreated&&e.filterProducts();case 6:case"end":return t.stop()}}),t)})))()},mounted:function(){this.embeddedMode||this.$refs.headless.focus()},methods:d(d(d({},Object(c.b)("dynamicCatalog",["fetchCustomQuery"])),Object(c.b)("staticCatalog",["retreiveMetrics"])),{},{select:function(e){var t=this;e&&("bbox"===e.filter&&(this.showMap=!0),this.currentlyFreeText?this.filterItems=this.filterItems.map((function(i){return!i.value&&i.operator&&(i.value=e),i})):e.operator?this.filterItems=this.filterItems.map((function(i){return i.value||(i.operator=e.operator),i})):e.filter_value?(this.filterItems=this.filterItems.map((function(i){return i.value||(i.value=e.filter_value),i})),this.filterModel=null):this.filterItems.push({key:e.field_name,value:null}),this.inputComplete=!1,setTimeout((function(){t.inputComplete=!0}),300),this.$nextTick((function(){t.$refs.headless.focus(),t.currentlyFreeText||t.$refs.headless.activateMenu()}))),this.textInputModel=null},remove:function(e){"bbox"===e.key&&(this.bbox=null),this.filterItems.splice(this.filterItems.indexOf(e),1),this.filterModel=null,this.onEnter()},onEnter:function(){var e=this;!this.inProgressItem&&this.textInputModel&&(this.filterItems.push({key:"record",operator:"includes",value:this.textInputModel}),this.inputComplete=!1,setTimeout((function(){e.inputComplete=!0}),300)),this.inputComplete&&this.filterItems.every((function(i){return!!i.value}))&&this.submit(),this.textInputModel=null},onDelete:function(){this.filterItems.length<1||this.searchText||this.preSelectedItems.map((function(i){return i.key})).includes(this.filterItems[this.filterItems.length-1].key)||("bbox"===this.filterItems[this.filterItems.length-1].key&&(this.bbox=null),null===this.textInputModel?(this.filterItems.pop(),this.filterModel=null):""===this.textInputModel&&(this.textInputModel=null))},submit:function(){this.filterProducts()},filterProducts:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var l,c,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!0,r.prev=1,l="",c=t.filterItems.reduce((function(e,t){var r=["theme","variable"];return r.includes(t.key)&&(l+="".concat(l.length>0?" AND ":"","keywords ILIKE '%").concat(t.key,":").concat(t.value,"%'")),"type"===t.key?"".concat(e,"&type=").concat("project"===t.value.toLowerCase()?"datasetcollection":"dataset"):r.includes(t.key)?e:"bbox"!==t.key?"".concat(e,"&q=").concat(t.value):e}),""),f="/collections/metadata:main/items?limit=12&sortby=".concat("Descending"===t.sortOrder?"-".concat(t.sortBy):"".concat(t.sortBy),"&offset=").concat(12*(t.currentPage-1)).concat(c).concat(l?"&filter=".concat(l):"").concat(t.bbox?"&bbox=".concat(t.bbox.join(",")):""),r.next=7,t.fetchCustomQuery(f).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.paginationLoop){e.next=11;break}n=r.numberMatched/r.numberReturned,f=t.currentPage,d=1;case 4:if(!(d<n)){e.next=11;break}return f++,e.next=8,t.fetchCustomQuery("/collections/metadata:main/items?limit=12&sortby=".concat("Descending"===t.sortOrder?"-".concat(t.sortBy):"".concat(t.sortBy),"&offset=").concat(12*(f-1)).concat(c).concat(l?"&filter=".concat(l):"").concat(t.bbox?"&bbox=".concat(t.bbox.join(",")):"")).then((function(e){r.features=[].concat(Object(o.a)(r.features),Object(o.a)(e.features))})).catch((function(e){return console.error(e)}));case 8:d++,e.next=4;break;case 11:t.$emit("searchQuery",{items:r.features,numberOfPages:Math.ceil(r.numberMatched/12),numberOfItems:r.numberMatched});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}));case 7:0===t.filterItems.length&&t.$emit("clearEvent"),e||t.$refs.headless.blur(),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),console.error(r.t0);case 14:t.loading=!1;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},handleDraw:function(e){this.bbox=e.getExtent(),this.mapFeatures.geometry.bbox=this.bbox;var t=this.filterItems.findIndex((function(i){return"bbox"===i.key}));t>-1&&this.filterItems.splice(t,1),this.filterItems.push({key:"bbox",value:this.bbox.map((function(e){return e.toFixed(3)})).join(",")})}})},m=h,v=(r(662),r(160)),y=r(220),x=r.n(y),I=r(648),_=r(333),S=r(688),w=r(696),k=r(671),E=r(299),O=r(205),T=r(127),M=r(639),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex align-center"},[r("div",{staticClass:"\n        d-flex\n        lightgrey\n        align-center",staticStyle:{width:"100%",position:"relative"}},[r("div",{staticStyle:{position:"absolute",width:"100%"}},[r("v-text-field",{staticStyle:{"pointer-events":"none"},attrs:{label:(e.embeddedMode?"Filter":"Search")+" items",outlined:"",dense:"","hide-details":"",value:e.mainInputValue,height:"42"}})],1),e._v(" "),e._l(e.filterItems,(function(t,n){return r("v-chip",{key:n,staticClass:"ml-1",class:e.embeddedMode?"mx-1":"mr-1",attrs:{small:"",close:!!t.value&&!e.preSelectedItems.map((function(i){return i.key})).includes(t.key)},on:{"click:close":function(r){return e.remove(t)}}},[r("span",{staticClass:"text-capitalize"},[e._v("\n        "+e._s(t.key)+"\n      ")]),e._v(" "),t.value||t.operator?r("span",{staticClass:"px-1"},[e._v("\n        "+e._s(t.operator||":"))]):e._e(),e._v(" "),r("strong",[e._v(e._s(t.value?" "+t.value:""))])])})),e._v(" "),e.currentlyFreeText?r("v-combobox",{ref:"headless",staticClass:"headless-input customOutline",staticStyle:{width:"0"},attrs:{placeholder:"...",label:" ",items:[],chips:"","search-input":e.searchText,outlined:"",dense:"",autofocus:"","hide-details":"",type:e.isNumberField?"number":"text"},on:{"update:searchInput":function(t){e.searchText=t},"update:search-input":function(t){e.searchText=t},change:e.select,focus:function(t){e.mainInputValue=" "},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDelete.apply(null,arguments)}},scopedSlots:e._u([{key:"no-data",fn:function(){return[r("v-list-item",{on:{click:function(t){return e.select(e.searchText)}}},[r("v-list-item-content",[r("v-list-item-title",[e._v("\n              "+e._s(e.searchText)+"\n            ")])],1)],1)]},proxy:!0}],null,!1,3084499102)}):r("v-autocomplete",{ref:"headless",staticClass:"headless-input customOutline",staticStyle:{width:"0"},attrs:{items:e.filterFields,chips:"","item-text":"field_name","return-object":"",label:" ",outlined:"",dense:"","hide-details":"","search-input":e.textInputModel},on:{"update:searchInput":function(t){e.textInputModel=t},"update:search-input":function(t){e.textInputModel=t},input:e.select,focus:function(t){e.mainInputValue=" "},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDelete.apply(null,arguments)}]},scopedSlots:e._u([{key:"no-data",fn:function(){return[r("v-list-item",[r("v-list-item-title",[e._v("\n            Search for in all records (freetext)\n          ")])],1)]},proxy:!0},{key:"item",fn:function(data){return[r("span",{class:data.item.filter?"text-capitalize":""},[e._v("\n          "+e._s(data.item.field_name)+"\n        ")])]}}]),model:{value:e.filterModel,callback:function(t){e.filterModel=t},expression:"filterModel"}})],2),e._v(" "),r("v-btn",{staticClass:"ml-3",attrs:{color:"primary",disabled:e.filterItems.length<1||!!e.filterItems.find((function(e){return null===e.value})),loading:e.loading},on:{click:e.submit}},[r("v-icon",[e._v("\n      mdi-magnify\n    ")])],1),e._v(" "),r("v-dialog",{attrs:{width:"1000"},model:{value:e.showMap,callback:function(t){e.showMap=t},expression:"showMap"}},[r("div",{staticClass:"white"},[r("client-only",[r("CoverageMap",{ref:"map",attrs:{"enable-draw":""},on:{drawEnd:function(t){e.handleDraw(t),e.showMap=!1}}})],1)],1)])],1)}),[],!1,null,"3e16b5dc",null);t.default=component.exports;x()(component,{CoverageMap:r(627).default}),x()(component,{VAutocomplete:I.a,VBtn:_.a,VChip:S.a,VCombobox:w.a,VDialog:k.a,VIcon:E.a,VListItem:O.a,VListItemContent:T.a,VListItemTitle:T.b,VTextField:M.a})},721:function(e,t,r){r(722)},722:function(e,t,r){"use strict";r(723)("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(724))},723:function(e,t,r){"use strict";var n=r(15),o=r(32),l=r(21),c=r(227),f=r(82),d=r(439),h=r(325),m=r(341),v=r(40),y=r(139),x=r(59),I=r(17),_=r(343),S=r(191),w=r(348);e.exports=function(e,t,r){var k=-1!==e.indexOf("Map"),E=-1!==e.indexOf("Weak"),O=k?"set":"add",T=o[e],M=T&&T.prototype,P=T,R={},C=function(e){var t=l(M[e]);f(M,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(E&&!x(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return E&&!x(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(E&&!x(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})};if(c(e,!v(T)||!(E||M.forEach&&!I((function(){(new T).entries().next()})))))P=r.getConstructor(t,e,k,O),d.enable();else if(c(e,!0)){var j=new P,A=j[O](E?{}:-0,1)!=j,D=I((function(){j.has(1)})),F=_((function(e){new T(e)})),N=!E&&I((function(){for(var e=new T,t=5;t--;)e[O](t,t);return!e.has(-0)}));F||((P=t((function(e,t){m(e,M);var r=w(new T,e,P);return y(t)||h(t,r[O],{that:r,AS_ENTRIES:k}),r}))).prototype=M,M.constructor=P),(D||N)&&(C("delete"),C("has"),k&&C("get")),(N||A)&&C(O),E&&M.clear&&delete M.clear}return R[e]=P,n({global:!0,constructor:!0,forced:P!=T},R),S(P,e),E||r.setStrong(P,e,k),P}},724:function(e,t,r){"use strict";var n=r(74).f,o=r(155),l=r(441),c=r(153),f=r(341),d=r(139),h=r(325),m=r(344),v=r(345),y=r(346),x=r(53),I=r(439).fastKey,_=r(140),S=_.set,w=_.getterFor;e.exports={getConstructor:function(e,t,r,m){var v=e((function(e,n){f(e,y),S(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),x||(e.size=0),d(n)||h(n,e[m],{that:e,AS_ENTRIES:r})})),y=v.prototype,_=w(t),k=function(e,t,r){var n,o,l=_(e),c=E(e,t);return c?c.value=r:(l.last=c={index:o=I(t,!0),key:t,value:r,previous:n=l.last,next:void 0,removed:!1},l.first||(l.first=c),n&&(n.next=c),x?l.size++:e.size++,"F"!==o&&(l.index[o]=c)),e},E=function(e,t){var r,n=_(e),o=I(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return l(y,{clear:function(){for(var e=_(this),data=e.index,t=e.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=void 0),delete data[t.index],t=t.next;e.first=e.last=void 0,x?e.size=0:this.size=0},delete:function(e){var t=this,r=_(t),n=E(t,e);if(n){var o=n.next,l=n.previous;delete r.index[n.index],n.removed=!0,l&&(l.next=o),o&&(o.previous=l),r.first==n&&(r.first=o),r.last==n&&(r.last=l),x?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=_(this),n=c(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!E(this,e)}}),l(y,r?{get:function(e){var t=E(this,e);return t&&t.value},set:function(e,t){return k(this,0===e?0:e,t)}}:{add:function(e){return k(this,e=0===e?0:e,e)}}),x&&n(y,"size",{get:function(){return _(this).size}}),v},setStrong:function(e,t,r){var n=t+" Iterator",o=w(t),l=w(n);m(e,t,(function(e,t){S(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=l(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?v("keys"==t?r.key:"values"==t?r.value:[r.key,r.value],!1):(e.target=void 0,v(void 0,!0))}),r?"entries":"values",!r,!0),y(t)}}},725:function(e,t,r){"use strict";r(15)({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:r(726)})},726:function(e,t,r){"use strict";var n=r(48),o=r(128),l=r(52);e.exports=function(){for(var e,t=l(this),r=o(t.delete),c=!0,f=0,d=arguments.length;f<d;f++)e=n(r,t,arguments[f]),c=c&&e;return!!c}},727:function(e,t,r){"use strict";var n=r(15),o=r(52),l=r(153),c=r(625),f=r(325);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(e){var map=o(this),t=c(map),r=l(e,arguments.length>1?arguments[1]:void 0);return!f(t,(function(e,t,n){if(!r(t,e,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},728:function(e,t,r){"use strict";var n=r(15),o=r(92),l=r(153),c=r(48),f=r(128),d=r(52),h=r(276),m=r(625),v=r(325);n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(e){var map=d(this),t=m(map),r=l(e,arguments.length>1?arguments[1]:void 0),n=new(h(map,o("Map"))),y=f(n.set);return v(t,(function(e,t){r(t,e,map)&&c(y,n,e,t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},729:function(e,t,r){"use strict";var n=r(15),o=r(52),l=r(153),c=r(625),f=r(325);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(e){var map=o(this),t=c(map),r=l(e,arguments.length>1?arguments[1]:void 0);return f(t,(function(e,t,n){if(r(t,e,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},730:function(e,t,r){"use strict";var n=r(15),o=r(52),l=r(153),c=r(625),f=r(325);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(e){var map=o(this),t=c(map),r=l(e,arguments.length>1?arguments[1]:void 0);return f(t,(function(e,t,n){if(r(t,e,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},731:function(e,t,r){"use strict";var n=r(15),o=r(52),l=r(625),c=r(732),f=r(325);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(e){return f(l(o(this)),(function(t,r,n){if(c(r,e))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},732:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},733:function(e,t,r){"use strict";var n=r(15),o=r(52),l=r(625),c=r(325);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(e){return c(l(o(this)),(function(t,r,n){if(r===e)return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},734:function(e,t,r){"use strict";var n=r(15),o=r(92),l=r(153),c=r(48),f=r(128),d=r(52),h=r(276),m=r(625),v=r(325);n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(e){var map=d(this),t=m(map),r=l(e,arguments.length>1?arguments[1]:void 0),n=new(h(map,o("Map"))),y=f(n.set);return v(t,(function(e,t){c(y,n,r(t,e,map),t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},735:function(e,t,r){"use strict";var n=r(15),o=r(92),l=r(153),c=r(48),f=r(128),d=r(52),h=r(276),m=r(625),v=r(325);n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(e){var map=d(this),t=m(map),r=l(e,arguments.length>1?arguments[1]:void 0),n=new(h(map,o("Map"))),y=f(n.set);return v(t,(function(e,t){c(y,n,e,r(t,e,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},736:function(e,t,r){"use strict";var n=r(15),o=r(128),l=r(52),c=r(325);n({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(e){for(var map=l(this),t=o(map.set),r=arguments.length,i=0;i<r;)c(arguments[i++],t,{that:map,AS_ENTRIES:!0});return map}})},737:function(e,t,r){"use strict";var n=r(15),o=r(52),l=r(128),c=r(625),f=r(325),d=TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(e){var map=o(this),t=c(map),r=arguments.length<2,n=r?void 0:arguments[1];if(l(e),f(t,(function(t,o){r?(r=!1,n=o):n=e(n,o,t,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw d("Reduce of empty map with no initial value");return n}})},738:function(e,t,r){"use strict";var n=r(15),o=r(52),l=r(153),c=r(625),f=r(325);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(e){var map=o(this),t=c(map),r=l(e,arguments.length>1?arguments[1]:void 0);return f(t,(function(e,t,n){if(r(t,e,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},739:function(e,t,r){"use strict";var n=r(15),o=r(48),l=r(52),c=r(128),f=TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(e,t){var map=l(this),r=c(map.get),n=c(map.has),d=c(map.set),h=arguments.length;c(t);var m=o(n,map,e);if(!m&&h<3)throw f("Updating absent value");var v=m?o(r,map,e):c(h>2?arguments[2]:void 0)(e,map);return o(d,map,e,t(v,e,map)),map}})}}]);