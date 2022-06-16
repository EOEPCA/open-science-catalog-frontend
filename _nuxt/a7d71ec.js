(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{582:function(e,t,r){var content=r(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("b7fa5fcc",content,!0,{sourceMap:!1})},584:function(e,t,r){var n=r(69);e.exports=function(e){return n(Map.prototype.entries,e)}},585:function(e,t,r){"use strict";r.r(t);r(27),r(22),r(31),r(32);var n=r(7);r(14),r(24),r(127),r(215),r(26);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{features:{type:Array,default:null},highlight:{type:Object,default:null},enableDraw:{type:Boolean,default:!1}},data:function(){return{map:null,draw:null,baseLayers:[{layer:"terrain-light"},{layer:"overlay_bright"}],vectorSource:null,defaultStyle:null,highlightStyle:null,defaultPadding:[50,25,50,25],loading:!0,clearButton:null}},watch:{highlight:function(e){var t=this;if(this.vectorSource.getFeatures().forEach((function(e){return e.setStyle(t.defaultStyle)})),this.map&&e&&e.geometry){var r=this.vectorSource.getFeatureById(e.id);r.setStyle(this.highlightStyle),console.log(r.getGeometry().getExtent()),this.map.getView().fit(r.getGeometry().getExtent(),{padding:this.defaultPadding,duration:500})}else this.map.getView().fit([-180,-90,180,90],{padding:this.defaultPadding,duration:500})}},mounted:function(){this.createMap()},methods:{createMap:function(){var e=this,ol=this.$ol,t=new ol.WMTSCapabilities;this.defaultStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(0, 50, 71, 0.5)",width:3}),fill:new ol.Fill({color:"rgba(0, 50, 71, 0.1)"})}),this.highlightStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(20, 100, 91, 1)",width:3}),fill:new ol.Fill({color:"rgba(0, 200, 71, 0.4)"})}),fetch("https://s2maps.eu/WMTSCapabilities.xml").then((function(e){return e.text()})).then((function(text){var r=t.read(text),n=[];e.baseLayers.forEach((function(t){var o=ol.optionsFromCapabilities(r,{layer:t.layer,matrixSet:"WGS84"});n.push(new ol.TileLayer({opacity:1,source:new ol.WMTS(c(c({},o),{},{wrapX:!0,attributions:r.Contents.Layer.find((function(e){return e.Identifier===t.layer})).Abstract+(e.baseLayers.indexOf(t)<e.baseLayers.length-1?",":"")}))}))}));var o={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:e.features?e.features.filter((function(e){return!!e.geometry})):[]};e.vectorSource=new ol.VectorSource({features:(new ol.GeoJSON).readFeatures(o,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})}),e.vectorSource.on("clear",(function(){e.map.removeControl(e.clearButton)}));var l=new ol.VectorLayer({source:e.vectorSource,style:e.defaultStyle});n.push(l),e.clearButton=new ol.ClearMap,e.map=new ol.Map({layers:n,target:e.$refs.mapContainer,view:new ol.View({center:[0,0],zoom:2,multiWorld:!0,projection:"EPSG:4326"})}),e.features&&e.map.getView().fit(e.vectorSource.getExtent(),{padding:e.defaultPadding}),e.map.on("loadstart",(function(){e.loading=!1})),e.enableDraw&&(e.draw=new ol.Draw({source:e.vectorSource,type:"Circle",geometryFunction:ol.createBox()}),e.map.addInteraction(e.draw),e.draw.on("drawstart",(function(){e.vectorSource.clear()})),e.draw.on("drawend",(function(t){e.$emit("drawEnd",t.feature.getGeometry()),e.map.addControl(e.clearButton)})))}))},clearFeatures:function(){this.vectorSource.clear()}}},d=(r(587),r(162)),f=r(214),m=r.n(f),v=r(297),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("client-only",[r("div",{staticStyle:{position:"relative"}},[r("div",{staticClass:"d-flex align-center justify-center",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[e.loading?r("v-progress-circular",{attrs:{color:"primary",size:70,indeterminate:""}}):e._e()],1),e._v(" "),r("div",{ref:"mapContainer",style:"height: "+(e.$vuetify.breakpoint.smOnly?"200px":"400px")+"; width: 100%;"})])])}),[],!1,null,null,null);t.default=component.exports;m()(component,{VProgressCircular:v.a})},587:function(e,t,r){"use strict";r(582)},588:function(e,t,r){var n=r(37)(!1);n.push([e.i,".clear-btn{top:15px;right:.5em}.clear-btn button{width:auto!important;padding:0 .5em!important}",""]),e.exports=n},642:function(e,t,r){"use strict";r.r(t);r(27),r(26),r(31),r(32);var n=r(30),o=r(7),c=(r(152),r(14),r(24),r(215),r(52),r(22),r(102),r(45),r(93),r(342),r(83),r(119),r(64),r(157));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"ChangeItem",props:{type:{type:String,default:function(){return""}}},data:function(){return{itemTypes:{Theme:["name","description","link","image"],Variable:["name","description","link","theme"],Project:["name","description","theme","status","technical_officer","consortium","start_datetime","end_datetime","datetime","link"],Product:["name","description","theme","status","start_datetime","end_datetime","datetime","link","missions","project","variable","region","geometry"]},selectedItemType:"",name:"",description:"",parentThemes:[],parentVariables:"",parentProject:"",startDate:"",endDate:"",satelliteMissions:"",consortium:"",eo4societyURL:"",link:"",WMSLink:"",image:"",bbox:null,mapFeatures:null,variables:[],valid:!1,loading:!1,success:!1,descriptionToggle:null,deleteDialog:!1,id:null,status:null,technical_officer:null,email:null,datetime:null,region:null,fullName:null}},head:{title:"Add item"},computed:d({},Object(c.d)("staticCatalog",["themes"])),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("staticCatalog/retreiveMetrics");case 2:e.themes.forEach((function(t){t.variables.forEach((function(t){e.variables.push(t)}))})),"theme"in e.$route.query?e.selectedItemType="Theme":"variable"in e.$route.query?e.selectedItemType="Variable":"project"in e.$route.query?e.selectedItemType="Project":"product"in e.$route.query&&(e.selectedItemType="Product"),e.fillForm();case 5:case"end":return t.stop()}}),t)})))()},methods:d(d({},Object(c.b)("staticCatalog",["retreiveVariable","retreiveProjects","retreiveProduct"])),{},{fillForm:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("clear"===e){r.next=24;break}if("Theme"!==t.selectedItemType){r.next=9;break}n=t.themes.find((function(e){return t.slugify(e.name)===t.$route.query.theme})),t.name=n.name,t.description=n.description,t.eo4societyURL=n.website,t.image=n.image,r.next=22;break;case 9:if("Variable"!==t.selectedItemType){r.next=14;break}return r.next=12,t.retreiveVariable(t.$route.query.variable).then((function(e){t.description=e.description,t.name=e.id,t.parentThemes=e["osc:theme"].replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})),t.link=e.links.find((function(link){return"via"===link.rel})).href})).catch((function(e){return console.error(e)}));case 12:r.next=22;break;case 14:if("Project"!==t.selectedItemType){r.next=19;break}return r.next=17,t.retreiveProjects(t.$route.query.project).then((function(e){t.name=e.properties.title,t.id=e.id,t.fullName=e.properties["osc:name"],t.description=e.properties.description,t.parentThemes=e.properties["osc:themes"],t.startDate=new Date(e.properties.start_datetime).toISOString().toString().slice(0,-8),t.endDate=new Date(e.properties.end_datetime).toISOString().toString().slice(0,-8),t.datetime=new Date(e.properties.datetime).toISOString().toString().slice(0,-8),t.consortium=e.properties["osc:consortium"],t.eo4societyURL=e.links[0].href,t.link=e.links[1].href,t.status=e.properties["osc:status"],t.technical_officer=e.properties["osc:technical_officer"].name,t.email=e.properties["osc:technical_officer"]["e-mail"]})).catch((function(e){console.error(e)}));case 17:r.next=22;break;case 19:if("Product"!==t.selectedItemType){r.next=22;break}return r.next=22,t.retreiveProduct(t.$route.query.product).then((function(e){console.log(e),t.name=e.properties.title,t.id=e.id,t.description=e.properties.description,t.parentThemes=e.properties["osc:themes"],t.parentVariables=e.properties["osc:variable"],t.parentProject=e.properties["osc:project"],t.startDate=new Date(e.properties.start_datetime).toISOString().toString().slice(0,-8),t.endDate=new Date(e.properties.end_datetime).toISOString().toString().slice(0,-8),t.datetime=new Date(e.properties.datetime).toISOString().toString().slice(0,-8),t.satelliteMissions=e.properties["osc:missions"],t.eo4societyURL=e.links[0].href,t.link=e.links[1].href,t.status=e.properties["osc:status"],t.region=e.properties["osc:region"],t.bbox=e.bbox,t.mapFeatures=[e]})).catch((function(e){console.error(e)}));case 22:r.next=34;break;case 24:t.name="",t.description="",t.parentThemes=[],t.parentVariables=[],t.parentProject=[],t.startDate="",t.endDate="",t.satelliteMissions=[],t.eo4societyURL="",t.link="";case 34:case"end":return r.stop()}}),r)})))()},submitForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=29;break}e.loading=!0,t.prev=2,t.t0=e.selectedItemType,t.next="Theme"===t.t0?6:"Variable"===t.t0?8:"Project"===t.t0?10:"Product"===t.t0?12:13;break;case 6:return r=new e.$Theme({name:e.name,description:e.description,eo4societyURL:e.eo4societyURL,image:e.image}),t.abrupt("break",13);case 8:return r=new e.$Variable({name:e.name,description:e.description,eo4societyURL:e.eo4societyURL,theme:e.parentThemes}),t.abrupt("break",13);case 10:return r=new e.$Project({id:e.id,title:e.name,description:e.description,name:e.fullName,themes:e.parentThemes,status:e.status,technical_officer:e.technical_officer,email:e.email,consortium:e.consortium,start_datetime:e.startDate,end_datetime:e.endDate,datetime:e.datetime,link:e.eo4societyURL}),t.abrupt("break",13);case 12:r=new e.$Product({id:e.id,title:e.name,description:e.description,themes:e.parentThemes,status:e.status,variable:e.parentVariables,missions:e.satelliteMissions,project:e.parentProject,start_datetime:e.startDate,end_datetime:e.endDate,datetime:e.datetime,link:e.eo4societyURL,region:e.region,geometry:{type:"Polygon",bbox:e.bbox,coordinates:[[[e.bbox[0],e.bbox[1]],[e.bbox[2],e.bbox[1]],[e.bbox[2],e.bbox[3]],[e.bbox[0],e.bbox[3]],[e.bbox[0],e.bbox[1]]]]},bbox:e.bbox});case 13:if("add"!==e.type){t.next=18;break}return t.next=16,e.$metadataBackend.$post("/item-requests/".concat(e.slugify(e.selectedItemType),"s/").concat(e.slugify(e.name),".json"),r);case 16:t.next=20;break;case 18:return t.next=20,e.$metadataBackend.$put("/item-requests/".concat(e.slugify(e.selectedItemType),"s/").concat(e.id||e.slugify(e.name),".json"),r);case 20:e.loading=!1,e.success=!0,t.next=29;break;case 24:t.prev=24,t.t1=t.catch(2),console.error(t.t1),e.loading=!1,e.success=!1;case 29:case"end":return t.stop()}}),t,null,[[2,24]])})))()},deleteItem:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$metadataBackend.$delete("/item-requests/".concat(e.slugify(e.selectedItemType),"s/").concat(e.id||e.slugify(e.name),".json"),{});case 3:e.loading=!1,e.deleteDialog=!1;case 5:case"end":return t.stop()}}),t)})))()},handleBBOXDraw:function(e){this.bbox=e.getExtent()}})},m=r(162),v=r(214),h=r.n(v),y=r(302),T=r(764),x=r(332),_=r(583),S=r(581),k=r(641),w=r(766),I=r(298),E=r(644),O=r(577),R=r(741),P=r(761),j=r(760),D=r(704),M=r(702),C=r(767),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.success?r("v-banner",{attrs:{"two-line":""},scopedSlots:e._u([{key:"actions",fn:function(){return[r("v-btn",{attrs:{text:"",color:"primary",to:"/contribution-status"}},[e._v("\n      Check contribution status\n    ")])]},proxy:!0}],null,!1,2567678747)},[r("v-avatar",{attrs:{slot:"icon",color:"success",size:"40"},slot:"icon"},[r("v-icon",{attrs:{color:"white"}},[e._v("\n      mdi-checkbox-marked-circle-outline\n    ")])],1),e._v("\n  Thank you for your contribution! Your proposed changes will be reviewed shortly.\n  ")],1):r("v-form",{ref:"form",staticClass:"white pa-5 rounded",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-select",{attrs:{items:Object.keys(e.itemTypes),label:"Select an item type",outlined:"",required:"",rules:[function(e){return!!e||"Item type is required"}]},on:{change:function(t){return e.fillForm("clear")}},model:{value:e.selectedItemType,callback:function(t){e.selectedItemType=t},expression:"selectedItemType"}}),e._v(" "),e.selectedItemType?[e.itemTypes[e.selectedItemType].includes("name")?r("v-text-field",{attrs:{label:e.selectedItemType.charAt(0).toUpperCase()+e.selectedItemType.slice(1)+" Name",outlined:"",required:"",rules:[function(t){return!!t||e.selectedItemType.charAt(0).toUpperCase()+e.selectedItemType.slice(1)+" Name required"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("description")?r("v-tabs",{attrs:{tile:"",group:""},model:{value:e.descriptionToggle,callback:function(t){e.descriptionToggle=t},expression:"descriptionToggle"}},[r("v-tab",[e._v("\n        Input\n      ")]),e._v(" "),r("v-tab",[e._v("\n        Preview\n      ")])],1):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("description")?r("v-tabs-items",{model:{value:e.descriptionToggle,callback:function(t){e.descriptionToggle=t},expression:"descriptionToggle"}},[r("v-tab-item",[r("v-textarea",{staticClass:"mt-4",attrs:{name:"Description",label:"Description (markdown supported)",outlined:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),e._v(" "),r("v-tab-item",[r("div",{staticClass:"mt-2 mb-4 mx-2 py-3",staticStyle:{display:"block"},domProps:{innerHTML:e._s(e.description?e.$markdown(e.description):"Write in the input field to see preview here")}})])],1):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("link")?r("v-text-field",{attrs:{label:"EO4Society URL",outlined:"",rules:[function(e){return!e||/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(e)||"EO4Society URL must be valid"}]},model:{value:e.eo4societyURL,callback:function(t){e.eo4societyURL=t},expression:"eo4societyURL"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("image")?r("v-text-field",{attrs:{label:"Image Link",outlined:"",required:"",rules:[function(e){return!!e||"Image link is required"}]},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("theme")?r("v-select",{attrs:{items:e.themes,"item-value":"name","item-text":"name",chips:"",multiple:"",label:"Themes",outlined:"",required:"",rules:[function(e){return!!e||"Parent theme is required"}]},model:{value:e.parentThemes,callback:function(t){e.parentThemes=t},expression:"parentThemes"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("status")?r("v-select",{attrs:{items:["ONGOING","COMPLETED","PLANNED"],outlined:"",required:"",label:"Status"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("technical_officer")?r("v-text-field",{attrs:{label:"Technical officer",outlined:"",required:"",rules:[function(e){return!!e||"Technical officer name is required"}]},model:{value:e.technical_officer,callback:function(t){e.technical_officer=t},expression:"technical_officer"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("technical_officer")?r("v-text-field",{attrs:{label:"Technical officer e-mail",outlined:"",required:"",rules:[function(e){return!!e||"Technical officer e-mail is required"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("Consortium")?r("v-text-field",{attrs:{label:"Consortium",outlined:"",required:"",rules:[function(e){return!!e||"Consortium is required"}]},model:{value:e.consortium,callback:function(t){e.consortium=t},expression:"consortium"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("start_datetime")?r("v-text-field",{attrs:{type:"datetime-local",label:"Start date",outlined:"",required:"",rules:[function(e){return!!e||"Start date is required"}]},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("end_datetime")?r("v-text-field",{attrs:{type:"datetime-local",label:"End date",outlined:"",required:"",rules:[function(e){return!!e||"End date is required"}]},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("datetime")?r("v-text-field",{attrs:{type:"datetime-local",label:"Datetime",outlined:"",required:"",rules:[function(e){return!!e||"Date time is required"}]},model:{value:e.datetime,callback:function(t){e.datetime=t},expression:"datetime"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("variable")?r("v-select",{attrs:{items:e.variables,"item-value":"name","item-text":"name",chips:"",multiple:"",label:"Variables",hint:"Separate multiple variables by comma",outlined:"",required:""},model:{value:e.parentVariables,callback:function(t){e.parentVariables=t},expression:"parentVariables"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("project")?r("v-text-field",{attrs:{label:"Parent Project",outlined:"",required:"",rules:[function(e){return!!e||"Parent Project ID is required"}]},model:{value:e.parentProject,callback:function(t){e.parentProject=t},expression:"parentProject"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("missions")?r("v-text-field",{attrs:{label:"Satellite Missions",hint:"Separate multiple missions by comma",outlined:"",required:"",rules:[function(e){return!!e||"Satellite missions are required"},function(e){return/^[a-zA-Z0-9-]+(,[a-zA-Z0-9-]+)*$/.test(e)||"Satellite missions must be separated by commas"}]},model:{value:e.satelliteMissions,callback:function(t){e.satelliteMissions=t},expression:"satelliteMissions"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("region")?r("v-text-field",{attrs:{label:"Region",outlined:"",required:"",rules:[function(e){return!!e||"Region is required"}]},model:{value:e.region,callback:function(t){e.region=t},expression:"region"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("geometry")?r("v-text-field",{attrs:{label:"Product Extent (draw an area in the map below)",hint:"Draw an area in the map below",readonly:"",disabled:"",outlined:""},model:{value:e.bbox,callback:function(t){e.bbox=t},expression:"bbox"}}):e._e(),e._v(" "),e.itemTypes[e.selectedItemType].includes("geometry")?r("CoverageMap",{staticClass:"mb-4",attrs:{"enable-draw":"",features:e.mapFeatures},on:{drawEnd:e.handleBBOXDraw}}):e._e()]:e._e(),e._v(" "),r("div",{staticClass:"d-flex"},["edit"===e.type?r("v-dialog",{attrs:{"max-width":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({class:e.$vuetify.breakpoint.smAndUp?"mr-2":"mb-2",staticStyle:{cursor:"pointer"},attrs:{dark:"",large:"",color:"red",block:e.$vuetify.breakpoint.xsOnly}},"v-btn",o,!1),n),[r("v-icon",{attrs:{left:""}},[e._v("\n            mdi-delete\n          ")]),e._v("\n          Request deletion\n        ")],1)]}}],null,!1,2187754958),model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[e._v(" "),r("v-card",{staticClass:"pa-3"},[r("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[e._v("\n          Are you sure you want to request this item to be deleted?\n        ")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue",dark:""},on:{click:function(t){e.deleteDialog=!1}}},[r("v-icon",{attrs:{left:""}},[e._v("\n              mdi-cancel\n            ")]),e._v("\n            Cancel\n          ")],1),e._v(" "),r("v-btn",{attrs:{color:"red",dark:"",loading:e.loading},on:{click:e.deleteItem}},[r("v-icon",{attrs:{left:""}},[e._v("\n              mdi-delete\n            ")]),e._v("\n            Request deletion\n          ")],1)],1)],1)],1):e._e(),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{class:e.$vuetify.breakpoint.smAndUp?"mr-2":"mb-2",attrs:{color:"primary",text:"",large:"",block:e.$vuetify.breakpoint.xsOnly,to:"/"}},[r("v-icon",{attrs:{left:""}},[e._v("\n        mdi-cancel\n      ")]),e._v("\n      Cancel\n    ")],1),e._v(" "),e.success?e._e():r("v-btn",{attrs:{color:"primary",disabled:!e.valid,loading:e.loading,large:"",block:e.$vuetify.breakpoint.xsOnly},on:{click:e.submitForm}},[r("v-icon",{attrs:{left:""}},[e._v("\n        mdi-checkbox-marked-circle-outline\n      ")]),e._v("\n      Submit\n    ")],1)],1)],2)}),[],!1,null,null,null);t.default=component.exports;h()(component,{CoverageMap:r(585).default}),h()(component,{VAvatar:y.a,VBanner:T.a,VBtn:x.a,VCard:_.a,VCardActions:S.a,VCardTitle:S.d,VDialog:k.a,VForm:w.a,VIcon:I.a,VSelect:E.a,VSpacer:O.a,VTab:R.a,VTabItem:P.a,VTabs:j.a,VTabsItems:D.a,VTextField:M.a,VTextarea:C.a})},650:function(e,t,r){"use strict";r(651)("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(652))},651:function(e,t,r){"use strict";var n=r(20),o=r(13),c=r(21),l=r(221),d=r(94),f=r(414),m=r(411),v=r(333),h=r(47),y=r(65),T=r(23),x=r(337),_=r(189),S=r(341);e.exports=function(e,t,r){var k=-1!==e.indexOf("Map"),w=-1!==e.indexOf("Weak"),I=k?"set":"add",E=o[e],O=E&&E.prototype,R=E,P={},j=function(e){var t=c(O[e]);d(O,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(w&&!y(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return w&&!y(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(w&&!y(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})};if(l(e,!h(E)||!(w||O.forEach&&!T((function(){(new E).entries().next()})))))R=r.getConstructor(t,e,k,I),f.enable();else if(l(e,!0)){var D=new R,M=D[I](w?{}:-0,1)!=D,C=T((function(){D.has(1)})),V=x((function(e){new E(e)})),A=!w&&T((function(){for(var e=new E,t=5;t--;)e[I](t,t);return!e.has(-0)}));V||((R=t((function(e,t){v(e,O);var r=S(new E,e,R);return null!=t&&m(t,r[I],{that:r,AS_ENTRIES:k}),r}))).prototype=O,O.constructor=R),(C||A)&&(j("delete"),j("has"),k&&j("get")),(A||M)&&j(I),w&&O.clear&&delete O.clear}return P[e]=R,n({global:!0,forced:R!=E},P),_(R,e),w||r.setStrong(R,e,k),R}},652:function(e,t,r){"use strict";var n=r(84).f,o=r(158),c=r(339),l=r(154),d=r(333),f=r(411),m=r(338),v=r(340),h=r(71),y=r(414).fastKey,T=r(137),x=T.set,_=T.getterFor;e.exports={getConstructor:function(e,t,r,m){var v=e((function(e,n){d(e,T),x(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),h||(e.size=0),null!=n&&f(n,e[m],{that:e,AS_ENTRIES:r})})),T=v.prototype,S=_(t),k=function(e,t,r){var n,o,c=S(e),l=w(e,t);return l?l.value=r:(c.last=l={index:o=y(t,!0),key:t,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),h?c.size++:e.size++,"F"!==o&&(c.index[o]=l)),e},w=function(e,t){var r,n=S(e),o=y(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return c(T,{clear:function(){for(var e=S(this),data=e.index,t=e.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=void 0),delete data[t.index],t=t.next;e.first=e.last=void 0,h?e.size=0:this.size=0},delete:function(e){var t=this,r=S(t),n=w(t,e);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),h?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=S(this),n=l(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!w(this,e)}}),c(T,r?{get:function(e){var t=w(this,e);return t&&t.value},set:function(e,t){return k(this,0===e?0:e,t)}}:{add:function(e){return k(this,e=0===e?0:e,e)}}),h&&n(T,"size",{get:function(){return S(this).size}}),v},setStrong:function(e,t,r){var n=t+" Iterator",o=_(t),c=_(n);m(e,t,(function(e,t){x(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=c(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),v(t)}}},653:function(e,t,r){"use strict";r(20)({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:r(654)})},654:function(e,t,r){"use strict";var n=r(69),o=r(156),c=r(54);e.exports=function(){for(var e,t=c(this),r=o(t.delete),l=!0,d=0,f=arguments.length;d<f;d++)e=n(r,t,arguments[d]),l=l&&e;return!!l}},655:function(e,t,r){"use strict";var n=r(20),o=r(54),c=r(154),l=r(584),d=r(411);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(e){var map=o(this),t=l(map),r=c(e,arguments.length>1?arguments[1]:void 0);return!d(t,(function(e,t,n){if(!r(t,e,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},656:function(e,t,r){"use strict";var n=r(20),o=r(111),c=r(154),l=r(69),d=r(156),f=r(54),m=r(275),v=r(584),h=r(411);n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(e){var map=f(this),t=v(map),r=c(e,arguments.length>1?arguments[1]:void 0),n=new(m(map,o("Map"))),y=d(n.set);return h(t,(function(e,t){r(t,e,map)&&l(y,n,e,t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},657:function(e,t,r){"use strict";var n=r(20),o=r(54),c=r(154),l=r(584),d=r(411);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(e){var map=o(this),t=l(map),r=c(e,arguments.length>1?arguments[1]:void 0);return d(t,(function(e,t,n){if(r(t,e,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},658:function(e,t,r){"use strict";var n=r(20),o=r(54),c=r(154),l=r(584),d=r(411);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(e){var map=o(this),t=l(map),r=c(e,arguments.length>1?arguments[1]:void 0);return d(t,(function(e,t,n){if(r(t,e,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},659:function(e,t,r){"use strict";var n=r(20),o=r(54),c=r(584),l=r(660),d=r(411);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(e){return d(c(o(this)),(function(t,r,n){if(l(r,e))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},660:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},661:function(e,t,r){"use strict";var n=r(20),o=r(54),c=r(584),l=r(411);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(e){return l(c(o(this)),(function(t,r,n){if(r===e)return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},662:function(e,t,r){"use strict";var n=r(20),o=r(111),c=r(154),l=r(69),d=r(156),f=r(54),m=r(275),v=r(584),h=r(411);n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(e){var map=f(this),t=v(map),r=c(e,arguments.length>1?arguments[1]:void 0),n=new(m(map,o("Map"))),y=d(n.set);return h(t,(function(e,t){l(y,n,r(t,e,map),t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},663:function(e,t,r){"use strict";var n=r(20),o=r(111),c=r(154),l=r(69),d=r(156),f=r(54),m=r(275),v=r(584),h=r(411);n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(e){var map=f(this),t=v(map),r=c(e,arguments.length>1?arguments[1]:void 0),n=new(m(map,o("Map"))),y=d(n.set);return h(t,(function(e,t){l(y,n,e,r(t,e,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},664:function(e,t,r){"use strict";var n=r(20),o=r(156),c=r(54),l=r(411);n({target:"Map",proto:!0,real:!0,forced:!0},{merge:function(e){for(var map=c(this),t=o(map.set),r=arguments.length,i=0;i<r;)l(arguments[i++],t,{that:map,AS_ENTRIES:!0});return map}})},665:function(e,t,r){"use strict";var n=r(20),o=r(13),c=r(54),l=r(156),d=r(584),f=r(411),m=o.TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(e){var map=c(this),t=d(map),r=arguments.length<2,n=r?void 0:arguments[1];if(l(e),f(t,(function(t,o){r?(r=!1,n=o):n=e(n,o,t,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw m("Reduce of empty map with no initial value");return n}})},666:function(e,t,r){"use strict";var n=r(20),o=r(54),c=r(154),l=r(584),d=r(411);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(e){var map=o(this),t=l(map),r=c(e,arguments.length>1?arguments[1]:void 0);return d(t,(function(e,t,n){if(r(t,e,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},667:function(e,t,r){"use strict";var n=r(20),o=r(13),c=r(69),l=r(54),d=r(156),f=o.TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(e,t){var map=l(this),r=d(map.get),n=d(map.has),o=d(map.set),m=arguments.length;d(t);var v=c(n,map,e);if(!v&&m<3)throw f("Updating absent value");var h=v?c(r,map,e):d(m>2?arguments[2]:void 0)(e,map);return c(o,map,e,t(h,e,map)),map}})}}]);