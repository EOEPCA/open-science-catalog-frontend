(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{653:function(t,e,r){var content=r(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("c57bd45c",content,!0,{sourceMap:!1})},681:function(t,e,r){"use strict";r(653)},682:function(t,e,r){var n=r(30)(!1);n.push([t.i,".variableHeaderContainer{border-bottom:.25em solid #335e6f}.projectLink{text-decoration:none}",""]),t.exports=n},703:function(t,e,r){"use strict";r.r(e);var n=r(53),o=(r(179),r(42),r(101),r(52),{name:"ProjectSingle",components:{BreadCrumbNav:r(576).default},data:function(){return{project:null,products:[],productsSearch:"",productsFilterSortBy:"Name",productsFilterOrder:"Ascending",showDescription:!1,page:1,numberOfPages:1}},head:function(){return{title:this.$route.params.project.replace(/(^\w{1})|(\s+\w{1})/g,(function(t){return t.toUpperCase()}))}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$staticCatalog.$get("projects/".concat(t.$route.params.project)).then((function(e){t.project=e})).catch((function(t){console.log(t)}));case 2:return e.next=4,t.$dynamicCatalog.$get("/collections/".concat(t.project.id,"/items&startindex=").concat(10*(t.page-1)));case 4:r=e.sent,t.products=r.features,t.numberOfPages=Math.round(r.numberMatched/10);case 7:case"end":return e.stop()}}),e)})))()}}),c=(r(681),r(155)),l=r(201),d=r.n(l),v=r(301),m=r(596),_=r(695),f=r(598),h=r(282),w=r(697),x=r(696),k=r(180),C=r(610),j=r(563),y=r(549),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.project?r("div",[r("bread-crumb-nav",{attrs:{theme:t.project.collection,project:t.project.properties.title}}),t._v(" "),r("div",{staticClass:"pb-4 variableHeaderContainer"},[r("v-container",[r("v-row",[r("v-col",[r("div",{class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6"},[t._v("\n            "+t._s(t.project.properties["osc:name"])+"\n            "),r("v-chip",{attrs:{color:"green",dark:"",label:""}},[t._v("\n              "+t._s(t.project.properties["osc:status"])+"\n            ")])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-row",{staticClass:"ml-2 pt-0 mt-0 mb-4"},t._l(t.project.properties["osc:themes"],(function(e){return r("v-chip",{key:e,staticClass:"mx-1",attrs:{color:"rgb(124, 69, 86)",dark:"",label:""}},[t._v("\n              "+t._s(e)+"\n            ")])})),1),t._v(" "),r("v-row",{staticClass:"ml-2 pt-0 mt-0 mb-4"},[r("v-col",[r("v-icon",[t._v("\n                mdi-calendar-today\n              ")]),t._v("\n              Start date - "+t._s(t.project.properties.start_datetime)+"\n            ")],1),t._v(" "),r("v-col",[r("v-icon",[t._v("\n                mdi-calendar\n              ")]),t._v("\n              Estimated end date - "+t._s(t.project.properties.end_datetime)+"\n            ")],1)],1),t._v(" "),r("v-row",{staticClass:"ml-2 pt-0 mt-0 mb-4 text-h6"},[r("v-icon",[t._v("\n              mdi-account-multiple\n            ")]),t._v("\n            Consortium\n          ")],1),t._v(" "),r("v-row",{staticClass:"ml-2 pt-0 mt-0 mb-4"},t._l(t.project.properties["osc:consortium"],(function(e){return r("span",{key:e},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),r("v-row",{staticClass:"ml-2 pt-0 mt-0 mb-4"},t._l(t.project.links.filter((function(t){return"via"===t.rel})),(function(link){return r("a",{key:link.href,staticClass:"mx-1 projectLink",attrs:{href:link.href,target:"_blank"}},[r("v-icon",[t._v("\n                mdi-link\n              ")]),t._v(" "),r("span",[t._v("\n                "+t._s(link.href.includes("eo4society.esa.int")?"EO4SOCIETY LINK":"WEBSITE")+"\n              ")])],1)})),0)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-container",[r("v-row",[r("v-col",[t.$vuetify.breakpoint.smAndDown?[r("v-scale-transition",[r("small",{directives:[{name:"show",rawName:"v-show",value:t.showDescription,expression:"showDescription"}]},[t._v(t._s(t.project.properties.description))])]),t._v(" "),r("v-btn",{attrs:{text:"","x-small":"",block:""},on:{click:function(e){t.showDescription=!t.showDescription}}},[r("v-icon",{attrs:{left:""}},[t._v("\n                      "+t._s(t.showDescription?"mdi-arrow-collapse-vertical":"mdi-arrow-expand-vertical")+"\n                    ")]),t._v("\n                    Description\n                  ")],1)]:[r("v-container",[r("v-row",{staticClass:"text-h6"},[r("v-col",[r("v-icon",[t._v("\n                          mdi-file-document\n                        ")]),t._v("\n                        Description\n                      ")],1)],1),t._v(" "),r("v-row",[r("v-col",[r("small",[t._v("\n                          "+t._s(t.project.properties.description)+"\n                        ")])])],1)],1)]],2)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-container",{staticClass:"white",class:t.$vuetify.breakpoint.lgAndUp?"px-15":"pa-0"},[r("v-row",{staticClass:"mt-2"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("span",{staticClass:"text-h2"},[t._v("\n          Products\n        ")])]),t._v(" "),r("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"d-flex":"",attrs:{cols:"12",md:"8"}},[r("v-spacer"),t._v(" "),r("v-select",{class:t.$vuetify.breakpoint.mdAndUp?"mr-4":"mb-4",attrs:{dense:"","hide-details":"",items:["Name"],label:"Sort by",outlined:""},model:{value:t.productsFilterSortBy,callback:function(e){t.productsFilterSortBy=e},expression:"productsFilterSortBy"}}),t._v(" "),r("v-select",{class:t.$vuetify.breakpoint.mdAndUp?"mr-4":"mb-4",attrs:{dense:"","hide-details":"",items:["Ascending","Descending"],label:"Order",outlined:""},model:{value:t.productsFilterOrder,callback:function(e){t.productsFilterOrder=e},expression:"productsFilterOrder"}}),t._v(" "),r("v-text-field",{attrs:{dense:"","hide-details":"",outlined:"","single-line":"",label:"Search products","prepend-inner-icon":"mdi-magnify"},model:{value:t.productsSearch,callback:function(e){t.productsSearch=e},expression:"productsSearch"}})],1)],1),t._v(" "),r("item-grid",{attrs:{type:"products",items:t.products}}),t._v(" "),r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-pagination",{attrs:{length:t.numberOfPages},on:{input:t.filterProducts,next:t.filterProducts,previous:t.filterProducts},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;d()(component,{BreadCrumbNav:r(576).default,ItemGrid:r(581).default}),d()(component,{VBtn:v.a,VChip:m.a,VCol:_.a,VContainer:f.a,VIcon:h.a,VPagination:w.a,VRow:x.a,VScaleTransition:k.d,VSelect:C.a,VSpacer:j.a,VTextField:y.a})}}]);