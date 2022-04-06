(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{580:function(t,e,r){"use strict";r(24),r(16),r(25),r(139),r(57),r(379),r(556),r(125),r(151);var o=r(2);var n,c=r(173);e.a=(n="container",o.a.extend({name:"v-".concat(n),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,o=e.children;data.staticClass="".concat(n," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,o=e.props,data=e.data,n=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(r||[])}),n)}})},659:function(t,e,r){var content=r(703);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("1b7833da",content,!0,{sourceMap:!1})},702:function(t,e,r){"use strict";r(659)},703:function(t,e,r){var o=r(35)(!1);o.push([t.i,".imageLabel{background:#003247;color:#fff;position:absolute;text-transform:uppercase;padding:1px 10px;top:37%;left:15%;font-size:21px;font-weight:700}",""]),t.exports=o},720:function(t,e,r){"use strict";r.r(e);r(25),r(21),r(24),r(16),r(30),r(23),r(31);var o=r(7),n=r(28),c=(r(140),r(143));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"IndexPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("staticCatalog/retreiveMetrics");case 3:case"end":return e.stop()}}),e)})))()},head:{titleTemplate:"ESA Open Science Catalog"},computed:d({},Object(c.d)("staticCatalog",["themes"])),methods:d({},Object(c.b)("staticCatalog",["retreiveMetrics"]))},f=(r(702),r(150)),m=r(194),h=r.n(m),y=r(299),_=r(707),O=r(580),j=r(277),C=r(244),w=r(708),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{staticClass:"mb-2",attrs:{fluid:""}},[r("v-row",{staticClass:"pa-5 pb-0"},[r("v-col",[r("h1",{class:t.$vuetify.breakpoint.mdAndUp?"text-h2 mt-5":"text-h4 mt-5"},[t._v("\n          Welcome to the Open Science Catalog\n        ")])])],1),t._v(" "),r("v-row",{staticClass:"pa-5 pt-0"},[r("v-col",[r("p",[t._v("A catalog of publicly available geoscience products, datasets and resources developed in the frame of scientific research Projects funded by ESA EO (Earth Observation). Products vary in geographical and temporal extent, production methodology, validation and quality. Please refer to the documentation of each product for details.")]),t._v(" "),r("p",[r("strong",[t._v("What products can I find here?")])]),t._v(" "),r("p",[t._v("The majority of pages on opensciencedata.esa.int  only hold metadata for each product and project. The actual data and its documentation are maintained and accessible at the data providers, outside of esa.int, for the majority of cases. This catalog provides the metadata and links to the data as it exists in those many other locations.")]),t._v(" "),r("p",[r("v-btn",{staticClass:"mb-2 mb-sm-0",attrs:{dark:"",small:"",color:t.$typeColor("theme")}},[t._v("\n            Themes\n          ")]),t._v(" "),r("v-btn",{staticClass:"mb-2 mb-sm-0",attrs:{dark:"",small:"",color:t.$typeColor("project"),to:"/projects"}},[t._v("\n            Projects\n          ")]),t._v(" "),r("v-btn",{staticClass:"mb-2 mb-sm-0",attrs:{dark:"",small:"",color:t.$typeColor("variable"),to:"/variables"}},[t._v("\n            Variables\n          ")]),t._v(" "),r("v-btn",{staticClass:"mb-2 mb-sm-0",attrs:{dark:"",small:"",color:t.$typeColor("product"),to:"/products"}},[t._v("\n            Products\n          ")])],1),t._v(" "),r("p",[t._v("\n          Explore the catalog:\n        ")]),t._v(" "),r("p",[r("v-btn",{attrs:{dark:"",small:"",color:"primary",to:"/metrics"}},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-poll\n            ")]),t._v("\n            Metrics\n          ")],1),t._v(" "),r("v-btn",{attrs:{dark:"",small:"",color:"primary",to:"/search"}},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-magnify\n            ")]),t._v("\n            Search\n          ")],1)],1),t._v(" "),r("p",[t._v("Choose a theme below to get started or access the "),r("a",{attrs:{href:"https://opensciencedata.esa.int/api/docs/",target:"_blank"}},[t._v("API Documentation")]),t._v("!")])])],1)],1),t._v(" "),r("v-container",{staticClass:"pa-0",staticStyle:{height:"100%"},attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},t._l(t.themes,(function(e){return r("v-col",{key:e.name,staticClass:"pa-1",attrs:{cols:"12",md:"4"}},[r("nuxt-link",{attrs:{to:"/themes/"+t.slugify(e.name)}},[r("div",{staticClass:"d-flex align-center elevation-2 rounded",staticStyle:{position:"relative",height:"300px",overflow:"hidden","border-bottom":"0.25em solid rgb(51, 94, 111)"}},[r("v-img",{attrs:{src:t.$staticCatalog.defaults.baseURL+"/themes/"+e.image,width:"100%",height:"100%"}},[r("span",{staticClass:"h1 imageLabel elevation-2"},[t._v("\n                "+t._s(e.name.replace("_"," "))+"\n              ")])])],1)])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:y.a,VCol:_.a,VContainer:O.a,VIcon:j.a,VImg:C.a,VRow:w.a})}}]);