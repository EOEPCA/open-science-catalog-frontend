(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{572:function(e,t,r){var content=r(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("f691be40",content,!0,{sourceMap:!1})},573:function(e,t,r){var content=r(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("f5c4da9a",content,!0,{sourceMap:!1})},575:function(e,t,r){"use strict";r.r(t);var n=r(156),l=(r(52),{props:{theme:{type:String,default:null},variable:{type:String,default:null},project:{type:String,default:null},product:{type:String,default:null}},computed:{navigationBreadcrumb:function(){return[{text:"ESA EO Catalogue",href:"/"}].concat(Object(n.a)(this.theme?[{text:this.theme,href:"/themes/".concat(this.slugify(this.theme)),type:"theme"}]:[]),Object(n.a)(this.project?[{text:this.project,href:"/projects/".concat(this.slugify(this.project)),type:"project"}]:[]),Object(n.a)(this.variable?[{text:this.variable,href:"/variables/".concat(this.slugify(this.variable)),type:"variable"}]:[]),Object(n.a)(this.product?[{text:this.product,href:"/products/".concat(this.slugify(this.product)),type:"product"}]:[]))}},methods:{getColor:function(e){switch(e){case"theme":return"grey";case"project":return"primary";case"variable":return"green"}}}}),o=(r(585),r(155)),c=r(201),d=r.n(c),v=r(645),m=r(589),f=r(590),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-breadcrumbs",{staticClass:"navigationBreadcrumb",attrs:{items:e.navigationBreadcrumb},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[r("v-breadcrumbs-item",{attrs:{to:n.href,nuxt:"",disabled:n.disabled}},[n===e.navigationBreadcrumb[e.navigationBreadcrumb.length-1]?r("v-chip",{staticClass:"mr-2 text-uppercase",attrs:{color:e.getColor(n.type),dark:"",small:"",label:""}},[e._v("\n        "+e._s(n.type)+"\n      ")]):e._e(),e._v(" "),r("span",{staticClass:"text-capitalize"},[e._v(e._s(n.text))])],1)]}}])})}),[],!1,null,"a0b262a4",null);t.default=component.exports;d()(component,{VBreadcrumbs:v.a,VBreadcrumbsItem:m.a,VChip:f.a})},578:function(e,t,r){"use strict";r.r(t);var n={props:{items:{type:Array,default:function(){return[]}},type:{type:String,default:function(){return""}}}},l=(r(583),r(155)),o=r(201),c=r.n(o),d=r(570),v=r(567),m=r(590),f=r(694),h=r(282),_=r(695),x=r(563),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"pa-8"},e._l(e.items,(function(t){return r("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{attrs:{to:"/"+e.type+"/"+("variables"===e.type?e.slugify(t.name):t.id),outlined:""}},[r("v-card-title",[r("v-chip",{staticClass:"text-uppercase",attrs:{small:"",label:"",color:"variables"===e.type?"green":"primary",dark:""}},[e._v("\n          "+e._s(e.type.toUpperCase().slice(0,-1))+"\n        ")]),e._v(" "),r("v-spacer"),e._v(" "),"projects"===e.type?r("div",{staticClass:"projectDates"},[r("v-icon",{attrs:{small:""}},[e._v("\n            mdi-calendar-today\n          ")]),e._v("\n          "+e._s(t.properties.start_datetime)+"\n          -\n          "),r("v-icon",{attrs:{small:""}},[e._v("\n            mdi-calendar\n          ")]),e._v("\n          "+e._s(t.properties.end_datetime)+"\n        ")],1):e._e()],1),e._v(" "),r("v-card-title",{staticClass:"text-subtitle-2 text-uppercase"},[e._v("\n        "+e._s("variables"===e.type?t.name:t.properties.title)+"\n      ")]),e._v(" "),"projects"===e.type?r("v-card-subtitle",e._l(t.properties["osc:consortium"],(function(t){return r("span",{key:t},[e._v("\n          "+e._s(t)+"\n        ")])})),0):e._e(),e._v(" "),r("v-card-text",["variables"===e.type?r("span",[e._v("\n          "+e._s(t.productsNumber)+" Products\n        ")]):r("span",[e._v("\n          "+e._s(t.properties.description.substring(0,100)+"...")+"\n        ")]),e._v(" "),"products"===e.type&&"osc:themes"in t.properties?r("div",{staticClass:"mt-2"},[e._v("\n          - "+e._s(t.properties["osc:themes"].join(", "))+"\n        ")]):e._e()])],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VChip:m.a,VCol:f.a,VIcon:h.a,VRow:_.a,VSpacer:x.a})},583:function(e,t,r){"use strict";r(572)},584:function(e,t,r){var n=r(30)(!1);n.push([e.i,".projectDates{font-size:15px}",""]),e.exports=n},585:function(e,t,r){"use strict";r(573)},586:function(e,t,r){var n=r(30)(!1);n.push([e.i,".navigationBreadcrumb[data-v-a0b262a4]{background:hsla(0,0%,100%,.667);padding:10px}.navigationBreadcrumb li[data-v-a0b262a4]{font-size:17px!important}",""]),e.exports=n},654:function(e,t,r){var content=r(685);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("81149f9e",content,!0,{sourceMap:!1})},684:function(e,t,r){"use strict";r(654)},685:function(e,t,r){var n=r(30)(!1);n.push([e.i,".themeTitle[data-v-86628628]{background:#003247;color:#fff;padding:1px 10px;position:relative;text-transform:uppercase!important;font-weight:700!important;font-size:30px;width:auto!important}.themeDescription[data-v-86628628]{position:relative;background:rgba(0,49,72,.733);padding:10px;color:#fff;overflow-y:auto}.themeDescription a[data-v-86628628]{color:#fff}",""]),e.exports=n},704:function(e,t,r){"use strict";r.r(t);var n=r(53),l=(r(179),r(42),r(101),r(14),r(23),r(58),r(78),r(86),r(99),r(382),r(25),r(26),r(93),r(117),r(575)),o=r(578),c={name:"ThemeSingle",components:{BreadCrumbNav:l.default,ItemGrid:o.default},data:function(){return{theme:null,tab:0,projectDetails:null,projectDetailsRaw:[],projectsSearch:"",projectDetailsItems:[{text:"Name",value:"title"},{text:"Consortium",value:"osc:consortium"},{text:"Start Date",value:"start_datetime"},{text:"End date",value:"end_datetime"}],projectsDetailsFilter:"title",projectsDetailsOrder:"Ascending",variablesDetails:null,variablesDetailsRaw:[],variablesSearch:"",variablesDetailsOrder:"Ascending",showDescription:!1}},head:function(){return{title:this.$route.params.theme.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}))}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$staticCatalog.$get("/themes/".concat(e.$route.params.theme));case 2:return e.theme=t.sent,t.next=5,e.$staticCatalog.$get("/metrics");case 5:return t.sent.themes.forEach((function(element){element.name===e.theme.id&&element.variables.forEach((function(t){e.variablesDetailsRaw.push(t)}))})),t.next=9,Promise.all(e.theme.links.map(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(link){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("item"!==link.rel){t.next=5;break}return t.next=3,e.$axios.$get(link.href);case 3:r=t.sent,e.projectDetailsRaw.push(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 9:e.variablesDetails=e.variablesDetailsRaw,e.projectDetails=e.projectDetailsRaw,e.orderData("projects",e.projectsDetailsFilter,e.projectsDetailsOrder,e.projectsSearch,!0),e.orderData("variables","name",e.variablesDetailsOrder,e.variablesSearch);case 13:case"end":return t.stop()}}),t)})))()},methods:{orderData:function(source,e,t,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;function l(a,b){if(n){if(a.properties[e]<b.properties[e])return"Ascending"===t?-1:1;if(a.properties[e]>b.properties[e])return"Ascending"===t?1:-1}else{if(a[e]<b[e])return"Ascending"===t?-1:1;if(a[e]>b[e])return"Ascending"===t?1:-1}return 0}if("variables"===source){var o=this.variablesDetailsRaw.sort(l);this.variablesDetails=r?this.filterByValue(o,r):o}else{var c=this.projectDetailsRaw.sort(l);this.projectDetails=r?this.filterByValue(c,r,"properties"):c}},filterByValue:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e.filter((function(e){return Object.keys(r?e[r]:e).some((function(n){return"string"==typeof(r?e[r][n]:e[n])?(r?e[r][n]:e[n]).toLowerCase().includes(t.toLowerCase()):null}))}))}}},d=c,v=(r(684),r(155)),m=r(201),f=r.n(m),h=r(301),_=r(694),x=r(592),j=r(282),D=r(695),y=r(180),w=r(608),k=r(563),C=r(679),S=r(707),O=r(691),V=r(644),$=r(549),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.theme?r("div",[r("bread-crumb-nav",{attrs:{theme:e.theme.id}}),e._v(" "),r("div",{ref:"themeBanner",style:"backgroundImage: url('"+e.$staticCatalog.defaults.baseURL+"/themes/"+e.theme.assets.image.href+"');\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center center;"},[r("v-container",{class:e.$vuetify.breakpoint.mdAndUp?"px-15":""},[r("v-row",[r("v-col",{staticClass:"d-flex align-center",class:e.$vuetify.breakpoint.smAndDown?"justify-center":"",attrs:{cols:"12",md:"6"}},[r("span",{staticClass:"themeTitle"},[e._v("\n            "+e._s(e.theme.id)+"\n          ")])]),e._v(" "),r("v-col",{staticClass:"d-flex flex-column justify-center",attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"themeDescription"},[e.$vuetify.breakpoint.smAndDown?[r("v-scale-transition",[r("small",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}]},[e._v(e._s(e.theme.description))])]),e._v(" "),r("v-btn",{attrs:{text:"","x-small":"",dark:"",block:""},on:{click:function(t){e.showDescription=!e.showDescription}}},[r("v-icon",{attrs:{left:""}},[e._v("\n                  "+e._s(e.showDescription?"mdi-arrow-collapse-vertical":"mdi-arrow-expand-vertical")+"\n                ")]),e._v("\n                Description\n              ")],1)]:r("small",[e._v(e._s(e.theme.description))])],2),e._v(" "),r("v-btn",{staticClass:"mt-3",attrs:{color:"rgba(0, 49, 72, 0.733)",dark:"",href:e.theme.links[1].href,target:"_blank"}},[r("v-icon",{attrs:{left:""}},[e._v("\n              mdi-link\n            ")]),e._v("\n            EO4SOCIETY\n          ")],1)],1)],1)],1)],1),e._v(" "),r("v-tabs",{attrs:{"background-color":"#003247",dark:"",grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab",[e._v("\n      Projects\n    ")]),e._v(" "),r("v-tab",[e._v("\n      Variables\n    ")])],1),e._v(" "),r("v-container",{class:e.$vuetify.breakpoint.lgAndUp?"px-15":"pa-0"},[r("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab-item",[r("v-row",{staticClass:"px-8 pt-8 d-flex align-center"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("span",{staticClass:"text-h2"},[e._v("\n              Projects\n            ")])]),e._v(" "),r("v-col",{class:e.$vuetify.breakpoint.lgAndUp?"d-flex":"",attrs:{cols:"12",md:"8"}},[r("v-spacer"),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"mr-4":"mb-4",attrs:{dense:"","hide-details":"",items:e.projectDetailsItems,label:"Order by",outlined:""},on:{change:function(t){e.orderData("projects",e.projectsDetailsFilter.toLowerCase(),e.projectsDetailsOrder,e.projectsSearch,!0)}},model:{value:e.projectsDetailsFilter,callback:function(t){e.projectsDetailsFilter=t},expression:"projectsDetailsFilter"}}),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"mr-4":"mb-4",attrs:{dense:"","hide-details":"",items:["Ascending","Descending"],label:"Order direction",outlined:""},on:{change:function(t){e.orderData("projects",e.projectsDetailsFilter.toLowerCase(),e.projectsDetailsOrder,e.projectsSearch,!0)}},model:{value:e.projectsDetailsOrder,callback:function(t){e.projectsDetailsOrder=t},expression:"projectsDetailsOrder"}}),e._v(" "),r("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"","single-line":"",label:"Search projects","prepend-inner-icon":"mdi-magnify"},on:{input:function(t){e.orderData("projects",e.projectsDetailsFilter.toLowerCase(),e.projectsDetailsOrder,e.projectsSearch,!0)}},model:{value:e.projectsSearch,callback:function(t){e.projectsSearch=t},expression:"projectsSearch"}})],1)],1),e._v(" "),r("item-grid",{attrs:{type:"projects",items:e.projectDetails}})],1),e._v(" "),r("v-tab-item",[r("v-row",{staticClass:"px-8 pt-8 d-flex align-center"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("span",{staticClass:"text-h2"},[e._v("\n              Variables\n            ")])]),e._v(" "),r("v-col",{class:e.$vuetify.breakpoint.lgAndUp?"d-flex":"",attrs:{cols:"12",md:"8"}},[r("v-spacer"),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"mr-4":"mb-4",attrs:{dense:"","hide-details":"",items:["Ascending","Descending"],label:"Order direction",outlined:""},on:{change:function(t){return e.orderData("variables","name",e.variablesDetailsOrder,e.variablesSearch)}},model:{value:e.variablesDetailsOrder,callback:function(t){e.variablesDetailsOrder=t},expression:"variablesDetailsOrder"}}),e._v(" "),r("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"","single-line":"",label:"Search variables","prepend-inner-icon":"mdi-magnify"},on:{input:function(t){return e.orderData("variables","name",e.variablesDetailsOrder,e.variablesSearch)}},model:{value:e.variablesSearch,callback:function(t){e.variablesSearch=t},expression:"variablesSearch"}})],1)],1),e._v(" "),r("item-grid",{attrs:{type:"variables",items:e.variablesDetails}})],1)],1)],1)],1):e._e()}),[],!1,null,"86628628",null);t.default=component.exports;f()(component,{BreadCrumbNav:r(575).default,ItemGrid:r(578).default}),f()(component,{VBtn:h.a,VCol:_.a,VContainer:x.a,VIcon:j.a,VRow:D.a,VScaleTransition:y.d,VSelect:w.a,VSpacer:k.a,VTab:C.a,VTabItem:S.a,VTabs:O.a,VTabsItems:V.a,VTextField:$.a})}}]);