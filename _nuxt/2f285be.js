(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{524:function(e,t,r){var content=r(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("bae612a6",content,!0,{sourceMap:!1})},530:function(e,t,r){"use strict";r.r(t);var n=r(135),l=(r(45),{props:{theme:{type:String,default:null},variable:{type:String,default:null},project:{type:String,default:null}},computed:{navigationBreadcrumb:function(){return[{text:"ESA EO Catalogue",href:"/"}].concat(Object(n.a)(this.theme?[{text:this.theme,href:"/themes/".concat(this.slugify(this.theme)),type:"theme"}]:[]),Object(n.a)(this.project?[{text:this.project,href:"/projects/".concat(this.slugify(this.project)),type:"project"}]:[]),Object(n.a)(this.variable?[{text:this.variable,href:"/variables/".concat(this.slugify(this.variable)),type:"variable"}]:[]))}},methods:{getColor:function(e){switch(e){case"theme":return"grey";case"project":return"primary";case"variable":return"green"}}}}),o=(r(535),r(134)),c=r(176),d=r.n(c),v=r(593),m=r(539),f=r(547),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-breadcrumbs",{staticClass:"navigationBreadcrumb",attrs:{items:e.navigationBreadcrumb},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[r("v-breadcrumbs-item",{attrs:{to:n.href,nuxt:"",disabled:n.disabled}},[n===e.navigationBreadcrumb[e.navigationBreadcrumb.length-1]?r("v-chip",{staticClass:"mr-2 text-uppercase",attrs:{color:e.getColor(n.type),dark:"",small:"",label:""}},[e._v("\n        "+e._s(n.type)+"\n      ")]):e._e(),e._v(" "),r("span",{staticClass:"text-capitalize"},[e._v(e._s(n.text))])],1)]}}])})}),[],!1,null,"432a39aa",null);t.default=component.exports;d()(component,{VBreadcrumbs:v.a,VBreadcrumbsItem:m.a,VChip:f.a})},531:function(e,t,r){var content=r(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("f691be40",content,!0,{sourceMap:!1})},535:function(e,t,r){"use strict";r(524)},536:function(e,t,r){var n=r(26)(!1);n.push([e.i,".navigationBreadcrumb[data-v-432a39aa]{background:hsla(0,0%,100%,.667);padding:10px}.navigationBreadcrumb li[data-v-432a39aa]{font-size:17px!important}",""]),e.exports=n},541:function(e,t,r){"use strict";r.r(t);var n={props:{items:{type:Array,default:function(){return[]}},type:{type:String,default:function(){return""}}}},l=(r(548),r(134)),o=r(176),c=r.n(o),d=r(522),v=r(521),m=r(547),f=r(642),h=r(242),_=r(643),x=r(518),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"pa-8"},e._l(e.items,(function(t){return r("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{attrs:{to:"/"+e.type+"/"+("variables"===e.type?e.slugify(t.name):t.id),outlined:""}},[r("v-card-title",[r("v-chip",{staticClass:"text-uppercase",attrs:{small:"",label:"",color:"variables"===e.type?"green":"primary",dark:""}},[e._v("\n          "+e._s(e.type.toUpperCase().slice(0,-1))+"\n        ")]),e._v(" "),r("v-spacer"),e._v(" "),"projects"===e.type?r("div",{staticClass:"projectDates"},[r("v-icon",{attrs:{small:""}},[e._v("\n            mdi-calendar-today\n          ")]),e._v("\n          "+e._s(t.properties.start_datetime)+"\n          -\n          "),r("v-icon",{attrs:{small:""}},[e._v("\n            mdi-calendar\n          ")]),e._v("\n          "+e._s(t.properties.end_datetime)+"\n        ")],1):e._e()],1),e._v(" "),r("v-card-title",{staticClass:"text-subtitle-2 text-uppercase"},[e._v("\n        "+e._s("variables"===e.type?t.name:t.properties.title)+"\n      ")]),e._v(" "),"projects"===e.type?r("v-card-subtitle",e._l(t.properties["osc:consortium"],(function(t){return r("span",{key:t},[e._v("\n          "+e._s(t)+"\n        ")])})),0):e._e(),e._v(" "),r("v-card-text",["variables"===e.type?r("span",[e._v("\n          "+e._s(t.recordsNumber)+" Records\n        ")]):r("span",[e._v("\n          "+e._s(t.properties.description.substring(0,100)+"...")+"\n        ")])])],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VChip:m.a,VCol:f.a,VIcon:h.a,VRow:_.a,VSpacer:x.a})},548:function(e,t,r){"use strict";r(531)},549:function(e,t,r){var n=r(26)(!1);n.push([e.i,".projectDates{font-size:15px}",""]),e.exports=n},602:function(e,t,r){var content=r(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("6773849c",content,!0,{sourceMap:!1})},633:function(e,t,r){"use strict";r(602)},634:function(e,t,r){var n=r(26)(!1);n.push([e.i,".themeTitle[data-v-4c7070ec]{background:#003247;color:#fff;padding:1px 10px;position:relative;text-transform:uppercase!important;font-weight:700!important;font-size:30px;width:auto!important}.themeDescription[data-v-4c7070ec]{position:relative;background:rgba(0,49,72,.733);padding:10px;color:#fff;overflow-y:auto}.themeDescription a[data-v-4c7070ec]{color:#fff}",""]),e.exports=n},652:function(e,t,r){"use strict";r.r(t);var n=r(47),l=(r(154),r(40),r(84),r(9),r(18),r(52),r(77),r(78),r(82),r(63),r(341),r(21),r(22),r(76),r(99),r(530)),o=r(541),c={name:"ThemeSingle",components:{BreadCrumbNav:l.default,ItemGrid:o.default},data:function(){return{theme:null,tab:0,projectDetails:null,projectDetailsRaw:[],projectsSearch:"",projectDetailsItems:[{text:"Name",value:"title"},{text:"Consortium",value:"osc:consortium"},{text:"Start Date",value:"start_datetime"},{text:"End date",value:"end_datetime"}],projectsDetailsFilter:"title",projectsDetailsOrder:"Ascending",variablesDetails:null,variablesDetailsRaw:[],variablesSearch:"",variablesDetailsOrder:"Ascending",showDescription:!1}},head:function(){return{title:this.$route.params.theme.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}))}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/themes/".concat(e.$route.params.theme));case 2:return e.theme=t.sent,t.next=5,e.$axios.$get("/metrics");case 5:return t.sent.themes.forEach((function(element){element.name===e.theme.id&&element.variables.forEach((function(t){e.variablesDetailsRaw.push(t)}))})),t.next=9,Promise.all(e.theme.links.map(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(link){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("item"!==link.rel){t.next=5;break}return t.next=3,e.$axios.$get("/themes/".concat(link.href.slice(0,-5)));case 3:r=t.sent,e.projectDetailsRaw.push(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 9:e.variablesDetails=e.variablesDetailsRaw,e.projectDetails=e.projectDetailsRaw,e.orderData("projects",e.projectsDetailsFilter,e.projectsDetailsOrder,e.projectsSearch,!0),e.orderData("variables","name",e.variablesDetailsOrder,e.variablesSearch);case 13:case"end":return t.stop()}}),t)})))()},methods:{orderData:function(source,e,t,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;function l(a,b){if(n){if(a.properties[e]<b.properties[e])return"Ascending"===t?-1:1;if(a.properties[e]>b.properties[e])return"Ascending"===t?1:-1}else{if(a[e]<b[e])return"Ascending"===t?-1:1;if(a[e]>b[e])return"Ascending"===t?1:-1}return 0}if("variables"===source){var o=this.variablesDetailsRaw.sort(l);this.variablesDetails=r?this.filterByValue(o,r):o}else{var c=this.projectDetailsRaw.sort(l);this.projectDetails=r?this.filterByValue(c,r,"properties"):c}},filterByValue:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e.filter((function(e){return Object.keys(r?e[r]:e).some((function(n){return"string"==typeof(r?e[r][n]:e[n])?(r?e[r][n]:e[n]).toLowerCase().includes(t.toLowerCase()):null}))}))}}},d=c,v=(r(633),r(134)),m=r(176),f=r.n(m),h=r(258),_=r(642),x=r(550),D=r(242),j=r(643),y=r(155),w=r(554),k=r(518),C=r(630),S=r(655),O=r(639),V=r(592),$=r(505),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.theme?r("div",[r("bread-crumb-nav",{attrs:{theme:e.theme.id}}),e._v(" "),r("div",{ref:"themeBanner",style:"backgroundImage: url('"+e.$axios.defaults.baseURL+"/themes/"+e.theme.assets.image.href+"');\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center center;"},[r("v-container",{class:e.$vuetify.breakpoint.mdAndUp?"px-15":""},[r("v-row",[r("v-col",{staticClass:"d-flex align-center",class:e.$vuetify.breakpoint.smAndDown?"justify-center":"",attrs:{cols:"12",md:"6"}},[r("span",{staticClass:"themeTitle"},[e._v("\n            "+e._s(e.theme.id)+"\n          ")])]),e._v(" "),r("v-col",{staticClass:"d-flex flex-column justify-center",attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"themeDescription"},[e.$vuetify.breakpoint.smAndDown?[r("v-scale-transition",[r("small",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}]},[e._v(e._s(e.theme.description))])]),e._v(" "),r("v-btn",{attrs:{text:"","x-small":"",dark:"",block:""},on:{click:function(t){e.showDescription=!e.showDescription}}},[r("v-icon",{attrs:{left:""}},[e._v("\n                  "+e._s(e.showDescription?"mdi-arrow-collapse-vertical":"mdi-arrow-expand-vertical")+"\n                ")]),e._v("\n                Description\n              ")],1)]:r("small",[e._v(e._s(e.theme.description))])],2),e._v(" "),r("v-btn",{staticClass:"mt-3",attrs:{color:"rgba(0, 49, 72, 0.733)",dark:"",href:e.theme.links[1].href,target:"_blank"}},[r("v-icon",{attrs:{left:""}},[e._v("\n              mdi-link\n            ")]),e._v("\n            EO4SOCIETY\n          ")],1)],1)],1)],1)],1),e._v(" "),r("v-tabs",{attrs:{"background-color":"#003247",dark:"",grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab",[e._v("\n      Projects\n    ")]),e._v(" "),r("v-tab",[e._v("\n      Variables\n    ")])],1),e._v(" "),r("v-container",{class:e.$vuetify.breakpoint.lgAndUp?"px-15":"pa-0"},[r("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab-item",[r("v-row",{staticClass:"px-8 pt-8 d-flex align-center"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("span",{staticClass:"text-h2"},[e._v("\n              Projects\n            ")])]),e._v(" "),r("v-col",{class:e.$vuetify.breakpoint.lgAndUp?"d-flex":"",attrs:{cols:"12",md:"8"}},[r("v-spacer"),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"mr-4":"mb-4",attrs:{dense:"","hide-details":"",items:e.projectDetailsItems,label:"Order by",outlined:""},on:{change:function(t){e.orderData("projects",e.projectsDetailsFilter.toLowerCase(),e.projectsDetailsOrder,e.projectsSearch,!0)}},model:{value:e.projectsDetailsFilter,callback:function(t){e.projectsDetailsFilter=t},expression:"projectsDetailsFilter"}}),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"mr-4":"mb-4",attrs:{dense:"","hide-details":"",items:["Ascending","Descending"],label:"Order direction",outlined:""},on:{change:function(t){e.orderData("projects",e.projectsDetailsFilter.toLowerCase(),e.projectsDetailsOrder,e.projectsSearch,!0)}},model:{value:e.projectsDetailsOrder,callback:function(t){e.projectsDetailsOrder=t},expression:"projectsDetailsOrder"}}),e._v(" "),r("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"","single-line":"",label:"Search projects","prepend-inner-icon":"mdi-magnify"},on:{input:function(t){e.orderData("projects",e.projectsDetailsFilter.toLowerCase(),e.projectsDetailsOrder,e.projectsSearch,!0)}},model:{value:e.projectsSearch,callback:function(t){e.projectsSearch=t},expression:"projectsSearch"}})],1)],1),e._v(" "),r("item-grid",{attrs:{type:"projects",items:e.projectDetails}})],1),e._v(" "),r("v-tab-item",[r("v-row",{staticClass:"px-8 pt-8 d-flex align-center"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("span",{staticClass:"text-h2"},[e._v("\n              Variables\n            ")])]),e._v(" "),r("v-col",{class:e.$vuetify.breakpoint.lgAndUp?"d-flex":"",attrs:{cols:"12",md:"8"}},[r("v-spacer"),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"mr-4":"mb-4",attrs:{dense:"","hide-details":"",items:["Ascending","Descending"],label:"Order direction",outlined:""},on:{change:function(t){return e.orderData("variables","name",e.variablesDetailsOrder,e.variablesSearch)}},model:{value:e.variablesDetailsOrder,callback:function(t){e.variablesDetailsOrder=t},expression:"variablesDetailsOrder"}}),e._v(" "),r("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"","single-line":"",label:"Search variables","prepend-inner-icon":"mdi-magnify"},on:{input:function(t){return e.orderData("variables","name",e.variablesDetailsOrder,e.variablesSearch)}},model:{value:e.variablesSearch,callback:function(t){e.variablesSearch=t},expression:"variablesSearch"}})],1)],1),e._v(" "),r("item-grid",{attrs:{type:"variables",items:e.variablesDetails}})],1)],1)],1)],1):e._e()}),[],!1,null,"4c7070ec",null);t.default=component.exports;f()(component,{BreadCrumbNav:r(530).default,ItemGrid:r(541).default}),f()(component,{VBtn:h.a,VCol:_.a,VContainer:x.a,VIcon:D.a,VRow:j.a,VScaleTransition:y.d,VSelect:w.a,VSpacer:k.a,VTab:C.a,VTabItem:S.a,VTabs:O.a,VTabsItems:V.a,VTextField:$.a})}}]);