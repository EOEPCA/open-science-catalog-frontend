(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{576:function(t,e,r){"use strict";r(24),r(16),r(25),r(138),r(56),r(375),r(552),r(124),r(150);var n=r(2);var o,c=r(172);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},653:function(t,e,r){var content=r(698);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("1b7833da",content,!0,{sourceMap:!1})},697:function(t,e,r){"use strict";r(653)},698:function(t,e,r){var n=r(35)(!1);n.push([t.i,".imageLabel{background:#003247;color:#fff;position:absolute;text-transform:uppercase;padding:1px 10px;top:37%;left:15%;font-size:21px;font-weight:700}",""]),t.exports=n},716:function(t,e,r){"use strict";r.r(e);r(25),r(21),r(24),r(16),r(30),r(23),r(31);var n=r(7),o=r(28),c=(r(139),r(142));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"IndexPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("staticCatalog/retreiveMetrics");case 3:case"end":return e.stop()}}),e)})))()},head:{titleTemplate:"ESA Open Science Catalog"},computed:d({},Object(c.c)("staticCatalog",["themes"])),methods:d({},Object(c.b)("staticCatalog",["retreiveMetrics"]))},v=(r(697),r(149)),f=r(193),h=r.n(f),_=r(295),y=r(702),C=r(576),O=r(273),j=r(241),w=r(703),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{staticClass:"mb-2",attrs:{fluid:""}},[r("v-row",{staticClass:"pa-5 pb-0"},[r("v-col",[r("h1",{class:t.$vuetify.breakpoint.mdAndUp?"text-h2 mt-5":"text-h4 mt-5"},[t._v("\n          Welcome to the Open Science Catalog\n        ")])])],1),t._v(" "),r("v-row",{staticClass:"pa-5 pt-0"},[r("v-col",[r("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non sollicitudin ex. Sed at orci at erat maximus molestie fermentum ac nulla.")]),t._v(" "),r("p",[r("strong",[t._v("What products can I find here?")])]),t._v(" "),r("p",[t._v("Mauris sagittis vulputate sollicitudin. Donec consectetur aliquet massa vel scelerisque. Sed venenatis tempus justo, scelerisque aliquet lacus mollis pulvinar. Suspendisse vitae iaculis velit. Curabitur tempor ultrices purus sit amet feugiat. Suspendisse in elit commodo, blandit ante ac, molestie nunc. Aliquam consequat eget justo tempor feugiat.")]),t._v(" "),r("p",[r("v-btn",{staticClass:"mb-2 mb-sm-0",attrs:{dark:"",small:"",color:t.$typeColor("theme")}},[t._v("\n            Themes\n          ")]),t._v(" "),r("v-btn",{staticClass:"mb-2 mb-sm-0",attrs:{dark:"",small:"",color:t.$typeColor("project"),to:"/projects"}},[t._v("\n            Projects\n          ")]),t._v(" "),r("v-btn",{staticClass:"mb-2 mb-sm-0",attrs:{dark:"",small:"",color:t.$typeColor("variable"),to:"/variables"}},[t._v("\n            Variables\n          ")]),t._v(" "),r("v-btn",{staticClass:"mb-2 mb-sm-0",attrs:{dark:"",small:"",color:t.$typeColor("product"),to:"/products"}},[t._v("\n            Products\n          ")])],1),t._v(" "),r("p",[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit:\n        ")]),t._v(" "),r("p",[r("v-btn",{attrs:{dark:"",small:"",color:"primary",to:"/metrics"}},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-poll\n            ")]),t._v("\n            Metrics\n          ")],1),t._v(" "),r("v-btn",{attrs:{dark:"",small:"",color:"primary",to:"/search"}},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-magnify\n            ")]),t._v("\n            Search\n          ")],1)],1),t._v(" "),r("p",[t._v("Choose a theme below to get started or access the "),r("a",{attrs:{href:"https://opensciencedata.esa.int/api/docs/",target:"_blank"}},[t._v("API Documentation")]),t._v("!")])])],1)],1),t._v(" "),r("v-container",{staticClass:"pa-0",staticStyle:{height:"100%"},attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},t._l(t.themes,(function(e){return r("v-col",{key:e.name,staticClass:"pa-1",attrs:{cols:"12",md:"4"}},[r("nuxt-link",{attrs:{to:"/themes/"+t.slugify(e.name)}},[r("div",{staticClass:"d-flex align-center elevation-2 rounded",staticStyle:{position:"relative",height:"300px",overflow:"hidden","border-bottom":"0.25em solid rgb(51, 94, 111)"}},[r("v-img",{attrs:{src:t.$staticCatalog.defaults.baseURL+"/themes/"+e.image,width:"100%",height:"100%"}},[r("span",{staticClass:"h1 imageLabel elevation-2"},[t._v("\n                "+t._s(e.name.replace("_"," "))+"\n              ")])])],1)])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:_.a,VCol:y.a,VContainer:C.a,VIcon:O.a,VImg:j.a,VRow:w.a})}}]);