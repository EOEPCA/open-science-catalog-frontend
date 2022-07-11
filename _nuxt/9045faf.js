(window.webpackJsonp=window.webpackJsonp||[]).push([[26,10],{583:function(t,e,r){var content=r(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("b7fa5fcc",content,!0,{sourceMap:!1})},587:function(t,e,r){"use strict";r.r(e);r(27),r(22),r(31),r(32);var n=r(7);r(14),r(24),r(127),r(215),r(26);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{features:{type:Array,default:null},highlight:{type:Object,default:null},enableDraw:{type:Boolean,default:!1}},data:function(){return{map:null,draw:null,baseLayers:[{layer:"terrain-light"},{layer:"overlay_bright"}],vectorSource:null,defaultStyle:null,highlightStyle:null,defaultPadding:[50,25,50,25],loading:!0,clearButton:null}},watch:{highlight:function(t){var e=this;if(this.vectorSource.getFeatures().forEach((function(t){return t.setStyle(e.defaultStyle)})),this.map&&t&&t.geometry){var r=this.vectorSource.getFeatureById(t.id);r.setStyle(this.highlightStyle),console.log(r.getGeometry().getExtent()),this.map.getView().fit(r.getGeometry().getExtent(),{padding:this.defaultPadding,duration:500})}else this.map.getView().fit([-180,-90,180,90],{padding:this.defaultPadding,duration:500})}},mounted:function(){this.createMap()},methods:{createMap:function(){var t=this,ol=this.$ol,e=new ol.WMTSCapabilities;this.defaultStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(0, 50, 71, 0.5)",width:3}),fill:new ol.Fill({color:"rgba(0, 50, 71, 0.1)"})}),this.highlightStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(20, 100, 91, 1)",width:3}),fill:new ol.Fill({color:"rgba(0, 200, 71, 0.4)"})}),fetch("https://s2maps.eu/WMTSCapabilities.xml").then((function(t){return t.text()})).then((function(text){var r=e.read(text),n=[];t.baseLayers.forEach((function(e){var o=ol.optionsFromCapabilities(r,{layer:e.layer,matrixSet:"WGS84"});n.push(new ol.TileLayer({opacity:1,source:new ol.WMTS(c(c({},o),{},{wrapX:!0,attributions:r.Contents.Layer.find((function(t){return t.Identifier===e.layer})).Abstract+(t.baseLayers.indexOf(e)<t.baseLayers.length-1?",":"")}))}))}));var o={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:t.features?t.features.filter((function(t){return!!t.geometry})):[]};t.vectorSource=new ol.VectorSource({features:(new ol.GeoJSON).readFeatures(o,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})}),t.vectorSource.on("clear",(function(){t.map.removeControl(t.clearButton)}));var l=new ol.VectorLayer({source:t.vectorSource,style:t.defaultStyle});n.push(l),t.clearButton=new ol.ClearMap,t.map=new ol.Map({layers:n,target:t.$refs.mapContainer,view:new ol.View({center:[0,0],zoom:2,multiWorld:!0,projection:"EPSG:4326"})}),t.features&&t.map.getView().fit(t.vectorSource.getExtent(),{padding:t.defaultPadding}),t.map.on("loadstart",(function(){t.loading=!1})),t.enableDraw&&(t.draw=new ol.Draw({source:t.vectorSource,type:"Circle",geometryFunction:ol.createBox()}),t.map.addInteraction(t.draw),t.draw.on("drawstart",(function(){t.vectorSource.clear()})),t.draw.on("drawend",(function(e){t.$emit("drawEnd",e.feature.getGeometry()),t.map.addControl(t.clearButton)})))}))},clearFeatures:function(){this.vectorSource.clear()}}},d=(r(589),r(162)),v=r(214),f=r.n(v),m=r(297),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("div",{staticStyle:{position:"relative"}},[r("div",{staticClass:"d-flex align-center justify-center",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[t.loading?r("v-progress-circular",{attrs:{color:"primary",size:70,indeterminate:""}}):t._e()],1),t._v(" "),r("div",{ref:"mapContainer",style:"height: "+(t.$vuetify.breakpoint.smOnly?"200px":"400px")+"; width: 100%;"})])])}),[],!1,null,null,null);e.default=component.exports;f()(component,{VProgressCircular:m.a})},589:function(t,e,r){"use strict";r(583)},590:function(t,e,r){var n=r(37)(!1);n.push([t.i,".clear-btn{top:15px;right:.5em}.clear-btn button{width:auto!important;padding:0 .5em!important}",""]),t.exports=n},595:function(t,e,r){var content=r(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("b4c70a1e",content,!0,{sourceMap:!1})},596:function(t,e,r){var content=r(619);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("8da8fffa",content,!0,{sourceMap:!1})},600:function(t,e,r){var content=r(633);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("6422aec0",content,!0,{sourceMap:!1})},613:function(t,e,r){"use strict";r(595)},614:function(t,e,r){var n=r(37)(!1);n.push([t.i,".navigationBreadcrumb[data-v-fc69d510]{background:hsla(0,0%,100%,.667);padding:10px}.navigationBreadcrumb li[data-v-fc69d510]{font-size:17px!important}[data-v-fc69d510] .v-breadcrumbs__item{display:inline}",""]),t.exports=n},618:function(t,e,r){"use strict";r(596)},619:function(t,e,r){var n=r(37)(!1);n.push([t.i,"[data-v-576fd3e6] .v-speed-dial__list{align-items:flex-end}",""]),t.exports=n},623:function(t,e,r){"use strict";r.r(e);var n={name:"Item",props:{id:{type:String,default:null},title:{type:String,default:""},subtitle:{type:String,default:""},chips:{type:Object,default:function(){return{}}},description:{type:String,default:""},details:{type:Object,default:function(){return{}}},nav:{type:Object,default:function(){return{}}}},data:function(){return{showDescription:!1}}},o=(r(632),r(162)),c=r(214),l=r.n(c),d=r(332),v=r(636),f=r(769),m=r(604),h=r(298),_=r(770),y=r(322),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("client-only",[t.nav?r("bread-crumb-nav",{attrs:{theme:t.nav.theme,project:t.nav.project,variable:t.nav.variable,product:t.nav.product}}):t._e()],1),t._v(" "),r("div",{staticClass:"itemHeaderContainer"},[r("v-container",{class:t.$vuetify.breakpoint.lgAndUp?"px-15":"pa-2"},[r("v-row",[r("v-col",[r("h1",{staticClass:"primary--text",class:t.$vuetify.breakpoint.smAndDown&&t.$vuetify.breakpoint.width>t.$vuetify.breakpoint.height?"mt-0":"mt-5",style:"font-size: "+(t.$vuetify.breakpoint.mdAndUp?3:2.3)+"em; word-break: break-word; line-height: normal"},[t._v("\n            "+t._s(t.title)+"\n          ")]),t._v(" "),t.subtitle?r("h4",{staticClass:"mt-2"},[t._v("\n            "+t._s(t.subtitle)+"\n          ")]):t._e()])],1),t._v(" "),t.chips.themes?r("v-row",[r("v-col",[t._l(t.chips.themes,(function(e){return r("v-chip",{key:e,staticClass:"mr-2 mb-2 text-uppercase",attrs:{color:"grey",dark:"",label:"",to:"/themes/"+t.slugify(e)}},[t._v("\n            "+t._s(e)+"\n          ")])})),t._v(" "),t.chips.variable?r("v-chip",{staticClass:"mr-2 mb-2 text-uppercase",attrs:{color:"green",dark:"",label:"",to:"/variables/"+t.slugify(t.chips.variable)}},[t._v("\n            "+t._s(t.chips.variable)+"\n          ")]):t._e(),t._v(" "),t.chips.project&&null!==t.chips.project.url?r("v-chip",{staticClass:"mr-2 mb-2 text-uppercase",attrs:{color:"primary",dark:"",label:"",to:"/projects/"+t.chips.project.url}},[t._v("\n            "+t._s(t.chips.project.name)+"\n          ")]):t._e(),t._v(" "),t.chips.status?r("v-chip",{staticClass:"mr-2 mb-2 text-uppercase",attrs:{color:"ONGOING"===t.chips.status?"green":"primary",outlined:"",dark:"",label:""}},[t._v("\n            "+t._s(t.chips.status)+"\n          ")]):t._e()],2)],1):t._e(),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[t.$vuetify.breakpoint.smAndDown?[r("v-scale-transition",[r("small",{directives:[{name:"show",rawName:"v-show",value:t.showDescription,expression:"showDescription"}],domProps:{innerHTML:t._s(t.description)}})]),t._v(" "),r("v-btn",{attrs:{text:"","x-small":"",block:""},on:{click:function(e){t.showDescription=!t.showDescription}}},[r("v-icon",{attrs:{left:""}},[t._v("\n                "+t._s(t.showDescription?"mdi-arrow-collapse-vertical":"mdi-arrow-expand-vertical")+"\n              ")]),t._v("\n              Description\n            ")],1)]:[r("h6",{staticClass:"text-h6 mb-2 d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n                mdi-text-long\n              ")]),t._v("\n              Description\n            ")],1),t._v(" "),r("p",[r("small",{domProps:{innerHTML:t._s(t.description)}})])]],2),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("h6",{staticClass:"text-h6 mb-2 d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-information-outline\n            ")]),t._v("\n            Details\n          ")],1),t._v(" "),t.details.start_datetime?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-calendar-today\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Start Date")]),t._v(" "+t._s(t.details.start_datetime.split("T")[0])+"\n          ")],1):t._e(),t._v(" "),t.details.end_datetime?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-calendar\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("End Date")]),t._v(" "+t._s(t.details.end_datetime.split("T")[0])+"\n          ")],1):t._e(),t._v(" "),t.details.datetime?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-calendar-check\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Release Date")]),t._v(" "+t._s(t.details.datetime&&t.details.datetime.slice(0,-10))+"\n          ")],1):t._e(),t._v(" "),t.details.consortium?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-account-multiple\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Consortium")]),t._v(" "+t._s(t.details.consortium.join(", "))+"\n          ")],1):t._e(),t._v(" "),t.details&&t.details["osc:project"]?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-calendar-text\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Project")]),t._v(" "),t.chips.project?r("a",{attrs:{href:"/projects/"+t.chips.project.url}},[t._v("\n              "+t._s(t.details["osc:project"])+"\n            ")]):r("span",[t._v("\n              "+t._s(t.details["osc:project"])+"\n            ")])],1):t._e(),t._v(" "),t.details["osc:missions"]?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-satellite\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Satellite missions")]),t._v(" "+t._s(t.details["osc:missions"].join(", "))+"\n          ")],1):t._e(),t._v(" "),t._l(t.details.links.filter((function(t){return"via"===t.rel&&t.href})).sort((function(a,b){return a.title<b.title||!b.title?-1:1})),(function(link,e){return r("v-btn",{key:e,staticClass:"mb-2 mr-3",attrs:{color:"primary",outlined:"Access"!==link.title,block:t.$vuetify.breakpoint.xsOnly,href:link.href,target:"_blank"}},["Access"===link.title?r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-location-enter\n            ")]):"Documentation"===link.title?r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-file-document-outline\n            ")]):r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-web\n            ")]),t._v("\n            "+t._s(link.title||"Website")+"\n          ")],1)}))],2)],1)],1)],1),t._v(" "),t._t("default"),t._v(" "),r("edit-button",{attrs:{"item-id":t.id}})],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{BreadCrumbNav:r(626).default,EditButton:r(627).default}),l()(component,{VBtn:d.a,VChip:v.a,VCol:f.a,VContainer:m.a,VIcon:h.a,VRow:_.a,VScaleTransition:y.d})},626:function(t,e,r){"use strict";r.r(e);var n=r(216),o=(r(64),r(52),{props:{theme:{type:String,default:null},variable:{type:String,default:null},project:{type:Object,default:function(){return null}},product:{type:String,default:null}},computed:{navigationBreadcrumb:function(){return[{text:"Catalog",href:"/"}].concat(Object(n.a)(this.theme?[{text:this.theme,href:"/themes/".concat(this.slugify(this.theme)),type:"theme"}]:[]),Object(n.a)(this.project?[{text:this.project.name,href:"/projects/".concat(this.project.url),type:"project"}]:[]),Object(n.a)(this.variable?[{text:this.variable,href:"/variables/".concat(this.slugify(this.variable)),type:"variable"}]:[]),Object(n.a)(this.product?[{text:this.product,href:"/products/".concat(this.slugify(this.product)),type:"product"}]:[]))}}}),c=(r(613),r(162)),l=r(214),d=r.n(l),v=r(688),f=r(617),m=r(636),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-breadcrumbs",{staticClass:"navigationBreadcrumb",attrs:{items:t.navigationBreadcrumb},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("v-breadcrumbs-item",{attrs:{to:n.href,nuxt:"",disabled:n.disabled}},[n===t.navigationBreadcrumb[t.navigationBreadcrumb.length-1]?r("v-chip",{staticClass:"mr-2 text-uppercase",attrs:{color:t.$typeColor(n.type),dark:"",small:"",label:""}},[t._v("\n        "+t._s(n.type)+"\n      ")]):t._e(),t._v(" "),r("span",[t._v(t._s(n.text))])],1)]}}])})}),[],!1,null,"fc69d510",null);e.default=component.exports;d()(component,{VBreadcrumbs:v.a,VBreadcrumbsItem:f.a,VChip:m.a})},627:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(152),r(64),r(27),r(330),{props:{itemId:{type:String,default:null}},data:function(){return{fab:!1,deleteDialog:!1,loading:!1}},methods:{deleteItem:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$metadataBackend.$delete("/item-requests/".concat(t.slugify(Object.keys(t.$route.params)[0]),"s/").concat(t.itemId||t.slugify(Object.values(t.$route.params)[0]),".json"),{});case 3:t.loading=!1,t.deleteDialog=!1;case 5:case"end":return e.stop()}}),e)})))()}}}),c=(r(618),r(162)),l=r(214),d=r.n(l),v=r(332),f=r(582),m=r(581),h=r(682),_=r(298),y=r(577),j=r(689),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-speed-dial",{style:"bottom: "+(t.$vuetify.application.footer+16)+"px",attrs:{fixed:"",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-btn",{attrs:{color:"info",dark:"",rounded:"","x-large":""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?r("v-icon",{attrs:{left:""}},[t._v("\n          mdi-close\n        ")]):r("v-icon",{attrs:{left:""}},[t._v("\n          mdi-pencil\n        ")]),t._v("\n        Suggest changes\n      ")],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" "),r("v-btn",{staticStyle:{cursor:"pointer"},attrs:{dark:"",rounded:"",color:"green",to:"/edit-item?"+Object.keys(t.$route.params)[0]+"="+Object.values(t.$route.params)[0]}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-pencil\n      ")]),t._v("\n      Edit metadata\n    ")],1),t._v(" "),r("v-btn",{staticStyle:{cursor:"pointer"},attrs:{dark:"",rounded:"",color:"red"},on:{click:function(e){t.$auth.loggedIn?t.deleteDialog=!0:t.$router.push("/edit-item?"+Object.keys(t.$route.params)[0]+"="+Object.values(t.$route.params)[0])}}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-delete\n      ")]),t._v("\n      Request deletion\n    ")],1),t._v(" "),r("v-btn",{attrs:{dark:"",rounded:"",color:"black",href:"https://github.com/EOEPCA/open-science-catalog-metadata/tree/main/data/"+Object.keys(t.$route.params)[0]+"s/"+(t.itemId||Object.values(t.$route.params)[0])+".json",target:"_blank"}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-github\n      ")]),t._v("\n      View file on GitHub\n    ")],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[r("v-card",{staticClass:"pa-3"},[r("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[t._v("\n        Are you sure you want to request this item to be deleted?\n      ")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue",dark:""},on:{click:function(e){t.deleteDialog=!1}}},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-cancel\n          ")]),t._v("\n          Cancel\n        ")],1),t._v(" "),r("v-btn",{attrs:{color:"red",dark:"",loading:t.loading},on:{click:t.deleteItem}},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-delete\n          ")]),t._v("\n          Request deletion\n        ")],1)],1)],1)],1)],1)}),[],!1,null,"576fd3e6",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardTitle:m.d,VDialog:h.a,VIcon:_.a,VSpacer:y.a,VSpeedDial:j.a})},632:function(t,e,r){"use strict";r(600)},633:function(t,e,r){var n=r(37)(!1);n.push([t.i,".itemHeaderContainer{border-bottom:.25em solid #335e6f;padding-bottom:40px}",""]),t.exports=n},778:function(t,e,r){"use strict";r.r(e);r(27),r(22),r(26),r(31),r(24),r(32);var n=r(7),o=r(30),c=(r(152),r(45),r(93),r(215),r(14),r(90),r(118),r(226),r(157)),l=r(623);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"ProductSingle",components:{CoverageMap:r(587).default,Item:l.default},data:function(){return{product:null,project:null,productsDialog:!1,showDescription:!1}},head:function(){return{title:this.$route.params.product.replace(/(^\w{1})|(\s+\w{1})/g,(function(t){return t.toUpperCase()}))}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.retreiveProduct(t.$route.params.product).then((function(e){t.product=e})).catch((function(t){return console.error(t)}));case 2:if(!t.getProductLink()){e.next=5;break}return e.next=5,t.retreiveProjects(t.getProductLink()).then((function(e){t.project=e})).catch((function(t){return console.error(t)}));case 5:case"end":return e.stop()}}),e)})))()},methods:v(v({},Object(c.b)("staticCatalog",["retreiveProduct","retreiveProjects"])),{},{getProductLink:function(){var t=this.product.links.find((function(link){return"collection"===link.rel&&link.href.includes("/projects")}));return t?t.href.match(/projects\/([\s\S]*?)\.json/)[1]:null}})},m=r(162),h=r(214),_=r.n(h),y=r(604),j=r(298),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",[r("Item",{attrs:{id:t.product.id,title:t.product.properties.title,description:t.product.properties.description,chips:{themes:t.product.properties["osc:themes"],variable:t.product.properties["osc:variable"],project:null!==t.project?{url:t.getProductLink(),name:t.project.properties.title}:null},details:{start_datetime:t.product.properties.start_datetime,end_datetime:t.product.properties.end_datetime,datetime:t.product.properties.datetime,"osc:project":t.product.properties["osc:project"],"osc:missions":t.product.properties["osc:missions"],links:t.product.links},nav:{theme:t.product["osc:theme"],project:null!==t.project?{url:t.$extractSlug(t.project),name:t.project.properties.title}:null,product:t.product.properties.title}}},[r("v-container",{staticClass:"white",class:t.$vuetify.breakpoint.lgAndUp?"px-15":"pa-2"},[r("h6",{staticClass:"text-h6 mt-8 mb-2 d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n          mdi-image-size-select-large\n        ")]),t._v("\n        Product Extent\n      ")],1),t._v(" "),r("client-only",[r("CoverageMap",{ref:"map",attrs:{features:[t.product]}})],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;_()(component,{CoverageMap:r(587).default,Item:r(623).default}),_()(component,{VContainer:y.a,VIcon:j.a})}}]);