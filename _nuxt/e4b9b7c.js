(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{549:function(e,t,r){var content=r(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("287d8c70",content,!0,{sourceMap:!1})},551:function(e,t,r){var content=r(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("7e234354",content,!0,{sourceMap:!1})},556:function(e,t,r){"use strict";r(549)},557:function(e,t,r){var n=r(35)(!1);n.push([e.i,".customOutline[data-v-26e1ebb4]  fieldset{border:none!important}",""]),e.exports=n},559:function(e,t,r){"use strict";r.r(t);r(25),r(21),r(30),r(31);var n=r(28),o=r(194),l=r(7),c=(r(139),r(50),r(116),r(46),r(246),r(16),r(24),r(290),r(56),r(23),r(107),r(247),r(93),r(118),r(142));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"SearchCombobox",props:{embeddedMode:{type:Boolean,default:!1},currentPage:{type:Number,default:1},sortBy:{type:String,default:"title"},sortOrder:{type:String,default:"Ascending"},preSelectedItems:{type:Array,default:function(){return[]}},itemType:{type:String,default:"product"}},data:function(){return{filterModel:null,filterItems:[],mainInputValue:null,inputComplete:!1,searchText:null,loading:!1,variables:[],inProgressItem:null,textInputModel:null}},computed:f(f({},Object(c.d)("staticCatalog",["missions","themes"])),{},{availableItems:function(){return[{field_name:"theme",filter:"exact",available_values:this.themes?this.themes.map((function(e){return e.name})):[]},{field_name:"variable",filter:"exact",available_values:this.variables},{field_name:"project",filter:"like"},{field_name:"product",filter:"like"},{field_name:"mission",filter:"exact",available_values:this.missions?this.missions.map((function(e){return e.name})):[]},{field_name:"type",filter:"exact",available_values:["project","product"]}]},currentlyFreeText:function(){return this.filterItems&&this.filterItems.find((function(i){return!i.value&&i.operator}))},isNumberField:function(){var e=this.filterItems.find((function(e){return null===e.value}));return void 0!==this.availableItems.find((function(t){return t.field_name===e.key})).digits},filterFields:function(){var e,t=this,r=this.availableItems.filter((function(e){return e.filter&&(!t.filterItems.find((function(i){return i.key===e.field_name}))||"range"===e.filter&&t.filterItems.filter((function(i){return i.key===e.field_name})).length<2)}));if(this.inProgressItem=this.filterItems.find((function(e){return null===e.value})),this.inProgressItem||this.currentlyFreeText){var n=this.inProgressItem&&this.availableItems.find((function(e){return e.field_name===t.inProgressItem.key}));if(this.inProgressItem.operator)e=[];else if("boolean"===n.filter)e=[{filter_value:!0,field_name:"true",original_field_name:this.inProgressItem.key},{filter_value:!1,field_name:"false",original_field_name:this.inProgressItem.key}];else if("exact"===n.filter)n.available_values?Array.isArray(n.available_values)&&(e=n.available_values.map((function(i){return{filter_value:i,field_name:i,original_field_name:n.field_name}})).filter((function(e){var r=t.filterItems?t.filterItems.filter((function(i){return i.value})):[];return"variable"!==e.original_field_name||function(n,o){var l=r.find((function(e){return e.key===n}));if(l){var c="".concat(n,"s"),d=t[c].find((function(e){return e.name===l.value}));if(d)return d[o].find((function(t){return t.name===e.field_name}))}return!0}("theme","variables")})).sort((function(a,b){return a.field_name<b.field_name?-1:1}))):e=[{filter_value:null,field_name:"is exactly",operator:"=",original_field_name:this.inProgressItem.key}];else if("like"===n.filter)e=n.available_values?n.available_values.map((function(i){return{filter_value:i,field_name:i,original_field_name:n.field_name}})):[{filter_value:null,field_name:"includes",operator:"includes",original_field_name:this.inProgressItem.key}];else if("range"===n.filter){var l=this.filterItems.find((function(i){return i.key===t.inProgressItem.key&&!!i.operator}));e=[].concat(Object(o.a)(l&&"≤"===l.operator?[]:[{filter_value:null,field_name:"≤ lower than or equal}",operator:"≤",original_field_name:this.inProgressItem.key}]),Object(o.a)(l&&"≥"===l.operator?[]:[{filter_value:null,field_name:"≥ higher than or equal",operator:"≥",original_field_name:this.inProgressItem.key}]))}else e=r}else e=r;return e}}),created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preSelectedItems.length>0&&(e.filterItems=e.preSelectedItems),t.next=3,e.retreiveMetrics();case 3:e.themes.forEach((function(t){t.variables.forEach((function(t){e.variables.push(t.name)}))}));case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){this.$refs.headless.focus(),this.embeddedMode||this.$refs.headless.activateMenu()},methods:f(f(f({},Object(c.b)("dynamicCatalog",["fetchCustomQuery"])),Object(c.b)("staticCatalog",["retreiveMetrics"])),{},{select:function(e){var t=this;e&&(this.currentlyFreeText?this.filterItems=this.filterItems.map((function(i){return!i.value&&i.operator&&(i.value=e),i})):e.operator?this.filterItems=this.filterItems.map((function(i){return i.value||(i.operator=e.operator),i})):e.filter_value?this.filterItems=this.filterItems.map((function(i){return i.value||(i.value=e.filter_value),i})):this.filterItems.push({key:e.field_name,value:null}),this.inputComplete=!1,setTimeout((function(){t.inputComplete=!0}),300),this.$nextTick((function(){t.$refs.headless.focus(),t.currentlyFreeText||t.$refs.headless.activateMenu()}))),this.textInputModel=null},remove:function(e){this.filterItems.splice(this.filterItems.indexOf(e),1),this.onEnter()},onEnter:function(){var e=this;!this.inProgressItem&&this.textInputModel&&(this.filterItems.push({key:"record",operator:"includes",value:this.textInputModel}),this.inputComplete=!1,setTimeout((function(){e.inputComplete=!0}),300)),this.inputComplete&&this.filterItems.every((function(i){return!!i.value}))&&this.submit(),this.textInputModel=null},onDelete:function(){this.filterItems.length<1||this.searchText||this.preSelectedItems.map((function(i){return i.key})).includes(this.filterItems[this.filterItems.length-1].key)||(null===this.textInputModel?(this.filterItems.pop(),this.filterModel=null):""===this.textInputModel&&(this.textInputModel=null))},submit:function(){this.filterProducts()},filterProducts:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!0,r.prev=1,n=t.filterItems.reduce((function(e,t){return"type"===t.key?"".concat(e,"&type=").concat("project"===t.value?"datasetcollection":"dataset"):"".concat(e,"&q=").concat(t.value)}),""),o="/collections/metadata:main/items?sortby=".concat("Descending"===t.sortOrder?"-".concat(t.sortBy):"".concat(t.sortBy),"&offset=").concat(10*(t.currentPage-1)).concat(n),r.next=6,t.fetchCustomQuery(o);case 6:l=r.sent,t.$emit("searchQuery",{items:l.features,numberOfPages:Math.round(l.numberMatched/10)}),e||t.$refs.headless.blur(),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),console.error(r.t0);case 14:t.loading=!1;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()}})},v=(r(556),r(149)),h=r(193),_=r.n(h),y=r(572),x=r(295),j=r(588),O=r(618),k=r(273),I=r(184),w=r(117),C=r(591),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex align-center"},[r("div",{staticClass:"\n        d-flex\n        lightgrey\n        align-center",staticStyle:{width:"100%",position:"relative"}},[r("div",{staticStyle:{position:"absolute",width:"100%"}},[r("v-text-field",{staticStyle:{"pointer-events":"none"},attrs:{label:(e.embeddedMode?"Filter":"Search")+" items",outlined:e.embeddedMode,dense:e.embeddedMode,"hide-details":e.embeddedMode,value:e.mainInputValue,height:"42"}})],1),e._v(" "),e._l(e.filterItems,(function(t,n){return r("v-chip",{key:n,class:e.embeddedMode?"mx-1":"mr-1",attrs:{small:"",close:!!t.value&&!e.preSelectedItems.map((function(i){return i.key})).includes(t.key)},on:{"click:close":function(r){return e.remove(t)}}},[r("span",{staticClass:"text-capitalize"},[e._v("\n        "+e._s(t.key)+"\n      ")]),e._v(" "),t.value||t.operator?r("span",{staticClass:"px-1"},[e._v("\n        "+e._s(t.operator||":"))]):e._e(),e._v(" "),r("strong",[e._v(e._s(t.value?" "+t.value:""))])])})),e._v(" "),e.currentlyFreeText?r("v-combobox",{ref:"headless",staticClass:"headless-input",class:e.embeddedMode?"customOutline":"",attrs:{placeholder:"...",label:" ",items:[],chips:"","search-input":e.searchText,outlined:e.embeddedMode,dense:e.embeddedMode,"hide-details":e.embeddedMode,type:e.isNumberField?"number":"text"},on:{"update:searchInput":function(t){e.searchText=t},"update:search-input":function(t){e.searchText=t},change:e.select,focus:function(t){e.mainInputValue=" "},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDelete.apply(null,arguments)}},scopedSlots:e._u([{key:"no-data",fn:function(){return[r("v-list-item",{on:{click:function(t){return e.select(e.searchText)}}},[r("v-list-item-content",[r("v-list-item-title",[e._v("\n              "+e._s(e.searchText)+"\n            ")])],1)],1)]},proxy:!0}],null,!1,3084499102)}):r("v-autocomplete",{ref:"headless",staticClass:"headless-input",class:e.embeddedMode?"customOutline":"",attrs:{items:e.filterFields,chips:"","item-text":"field_name","return-object":"",label:" ","auto-select-first":"",outlined:e.embeddedMode,dense:e.embeddedMode,"hide-details":e.embeddedMode,"search-input":e.textInputModel},on:{"update:searchInput":function(t){e.textInputModel=t},"update:search-input":function(t){e.textInputModel=t},input:e.select,focus:function(t){e.mainInputValue=" "},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDelete.apply(null,arguments)}]},scopedSlots:e._u([{key:"no-data",fn:function(){return[r("v-list-item",[r("v-list-item-title",[e._v("\n            Search for in all records (freetext)\n          ")])],1)]},proxy:!0},{key:"item",fn:function(data){return[r("span",{class:data.item.operator?"":"text-capitalize"},[e._v("\n          "+e._s(data.item.field_name)+"\n        ")])]}}]),model:{value:e.filterModel,callback:function(t){e.filterModel=t},expression:"filterModel"}})],2),e._v(" "),r("v-btn",{staticClass:"ml-3",attrs:{color:"primary",disabled:e.filterItems.length<1||!!e.filterItems.find((function(e){return null===e.value})),loading:e.loading},on:{click:e.submit}},[r("v-icon",[e._v("\n      mdi-magnify\n    ")])],1)],1)}),[],!1,null,"26e1ebb4",null);t.default=component.exports;_()(component,{VAutocomplete:y.a,VBtn:x.a,VChip:j.a,VCombobox:O.a,VIcon:k.a,VListItem:I.a,VListItemContent:w.a,VListItemTitle:w.b,VTextField:C.a})},560:function(e,t,r){"use strict";r.r(t);var n=r(194),o=(r(56),{props:{theme:{type:String,default:null},variable:{type:String,default:null},project:{type:String,default:null},product:{type:String,default:null}},computed:{navigationBreadcrumb:function(){return[{text:"ESA EO Catalogue",href:"/"}].concat(Object(n.a)(this.theme?[{text:this.theme,href:"/themes/".concat(this.slugify(this.theme)),type:"theme"}]:[]),Object(n.a)(this.project?[{text:this.project,href:"/projects/".concat(this.slugify(this.project)),type:"project"}]:[]),Object(n.a)(this.variable?[{text:this.variable,href:"/variables/".concat(this.slugify(this.variable)),type:"variable"}]:[]),Object(n.a)(this.product?[{text:this.product,href:"/products/".concat(this.slugify(this.product)),type:"product"}]:[]))}}}),l=(r(565),r(149)),c=r(193),d=r.n(c),f=r(608),m=r(569),v=r(588),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-breadcrumbs",{staticClass:"navigationBreadcrumb",attrs:{items:e.navigationBreadcrumb},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[r("v-breadcrumbs-item",{attrs:{to:n.href,nuxt:"",disabled:n.disabled}},[n===e.navigationBreadcrumb[e.navigationBreadcrumb.length-1]?r("v-chip",{staticClass:"mr-2 text-uppercase",attrs:{color:e.$typeColor(n.type),dark:"",small:"",label:""}},[e._v("\n        "+e._s(n.type)+"\n      ")]):e._e(),e._v(" "),r("span",{staticClass:"text-capitalize"},[e._v(e._s(n.text))])],1)]}}])})}),[],!1,null,"bb6a8866",null);t.default=component.exports;d()(component,{VBreadcrumbs:f.a,VBreadcrumbsItem:m.a,VChip:v.a})},561:function(e,t,r){"use strict";r.r(t);r(24),r(16);var n={props:{items:{type:Array,default:function(){return[]}},showEmptyItems:{type:Boolean,default:function(){return!1}}},computed:{nonEmptyItems:function(){var e=this;return this.items.filter((function(t){if(!e.showEmptyItems){if("variable"===e.getType(t))return t.summary.numberOfProducts>0;if("project"===e.getType(t))return t.links.filter((function(link){return"item"===link.rel})).length>0}return t}))}},methods:{getType:function(e){var t,r;return null!==(t=e.properties)&&void 0!==t&&t["osc:type"]?e.properties["osc:type"].toLowerCase():null!==(r=e.properties)&&void 0!==r&&r.type?"dataset"===e.properties.type?"product":"project":"variable"}}},o=r(149),l=r(193),c=r.n(l),d=r(550),f=r(546),m=r(588),v=r(703),h=r(273),_=r(704),y=r(542),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"pa-8"},e._l(e.nonEmptyItems,(function(t){return r("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{attrs:{to:"/"+e.getType(t)+"s/"+("variable"===e.getType(t)?e.slugify(t.name):t.id),outlined:""}},[r("v-card-title",[r("v-chip",{staticClass:"text-uppercase",attrs:{small:"",label:"",color:e.$typeColor(e.getType(t)),dark:""}},[e._v("\n          "+e._s(e.getType(t))+"\n        ")]),e._v(" "),r("v-spacer"),e._v(" "),"project"===e.getType(t)?r("div",[r("v-icon",{attrs:{small:""}},[e._v("\n            mdi-calendar-today\n          ")]),e._v(" "),r("small",[e._v(e._s(t.properties.start_datetime))]),e._v("\n          -\n          "),r("v-icon",{attrs:{small:""}},[e._v("\n            mdi-calendar\n          ")]),e._v(" "),r("small",[e._v(e._s(t.properties.end_datetime))])],1):e._e()],1),e._v(" "),r("v-card-title",{staticClass:"text-subtitle-2 text-uppercase"},[e._v("\n        "+e._s("variable"===e.getType(t)?t.name:t.properties.title)+"\n      ")]),e._v(" "),"project"===e.getType(t)?r("v-card-subtitle",e._l(t.properties["osc:consortium"],(function(t){return r("span",{key:t},[e._v("\n          "+e._s(t)+"\n        ")])})),0):e._e(),e._v(" "),r("v-card-text",["project"===e.getType(t)||"product"===e.getType(t)?r("p",[e._v("\n          "+e._s(t.properties.description.substring(0,100)+"...")+"\n        ")]):e._e(),e._v(" "),"variable"===e.getType(t)||"project"===e.getType(t)?r("p",["variable"===e.getType(t)?[e._v("\n            "+e._s(t.summary.numberOfProducts)+" Products\n          ")]:[e._v("\n            "+e._s(t.links.filter((function(link){return"item"===link.rel})).length)+" Products\n          ")]],2):e._e(),e._v(" "),"product"===e.getType(t)&&"osc:themes"in t.properties?r("div",{staticClass:"mt-2"},[e._v("\n          - "+e._s(t.properties["osc:themes"].join(", "))+"\n        ")]):e._e()])],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VChip:m.a,VCol:v.a,VIcon:h.a,VRow:_.a,VSpacer:y.a})},565:function(e,t,r){"use strict";r(551)},566:function(e,t,r){var n=r(35)(!1);n.push([e.i,".navigationBreadcrumb[data-v-bb6a8866]{background:hsla(0,0%,100%,.667);padding:10px}.navigationBreadcrumb li[data-v-bb6a8866]{font-size:17px!important}",""]),e.exports=n},567:function(e,t,r){var content=r(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("727afb02",content,!0,{sourceMap:!1})},568:function(e,t,r){var n=r(35)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},569:function(e,t,r){"use strict";r(25),r(21),r(24),r(16),r(30),r(23),r(31);var n=r(7),o=r(141),l=r(27);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}})},608:function(e,t,r){"use strict";r(25),r(21),r(24),r(16),r(30),r(23),r(31);var n=r(7),o=(r(150),r(567),r(569)),l=r(4),c=Object(l.j)("v-breadcrumbs__divider","li"),d=r(61),f=r(27);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(f.a)(d.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(o.a,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},652:function(e,t,r){var content=r(693);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("5b85d372",content,!0,{sourceMap:!1})},692:function(e,t,r){"use strict";r(652)},693:function(e,t,r){var n=r(35)(!1);n.push([e.i,".variableHeaderContainer[data-v-ec7653b6]{border-bottom:.25em solid #335e6f}.projectLink[data-v-ec7653b6]{text-decoration:none}",""]),e.exports=n},713:function(e,t,r){"use strict";r.r(t);var n=r(28),o=r(7),l=(r(139),r(41),r(94),r(25),r(21),r(24),r(16),r(30),r(23),r(31),r(142));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"ProjectSingle",components:{BreadCrumbNav:r(560).default},data:function(){return{project:null,products:[],productsSearch:"",productsFilterSortBy:"Name",productsFilterOrder:"Ascending",showDescription:!1,page:1,numberOfPages:1}},head:function(){return{title:this.$route.params.project.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}))}},computed:d({},Object(l.d)("staticCatalog",["projects"])),created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.retreiveProjects(e.$route.params.project);case 2:return e.project=t.sent,t.next=5,e.fetchProducts({projectID:e.project.id,page:10*(e.page-1)});case 5:r=t.sent,e.products=r.features,e.numberOfPages=Math.round(r.numberMatched/10);case 8:case"end":return t.stop()}}),t)})))()},methods:d(d({},Object(l.b)("dynamicCatalog",["fetchProducts"])),Object(l.b)("staticCatalog",["retreiveProjects"]))},m=(r(692),r(149)),v=r(193),h=r.n(v),_=r(295),y=r(588),x=r(703),j=r(576),O=r(273),k=r(707),I=r(704),w=r(291),C=r(554),P=r(542),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.project?r("div",[r("bread-crumb-nav",{attrs:{theme:e.project.collection,project:e.project.properties.title}}),e._v(" "),r("div",{staticClass:"pb-4 variableHeaderContainer"},[r("v-container",[r("v-row",[r("v-col",[r("div",{class:e.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6"},[e._v("\n            "+e._s(e.project.properties["osc:name"])+"\n            "),r("v-chip",{attrs:{color:"green",dark:"",label:""}},[e._v("\n              "+e._s(e.project.properties["osc:status"])+"\n            ")])],1)])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-row",[r("v-col",e._l(e.project.properties["osc:themes"],(function(t){return r("v-chip",{key:t,staticClass:"mr-1",attrs:{color:"rgb(124, 69, 86)",dark:"",label:""}},[e._v("\n                "+e._s(t)+"\n              ")])})),1)],1),e._v(" "),r("v-row",[r("v-col",[r("v-icon",[e._v("\n                mdi-calendar-today\n              ")]),e._v("\n              Start date - "+e._s(e.project.properties.start_datetime)+"\n            ")],1),e._v(" "),r("v-col",[r("v-icon",[e._v("\n                mdi-calendar\n              ")]),e._v("\n              Estimated end date - "+e._s(e.project.properties.end_datetime)+"\n            ")],1)],1),e._v(" "),r("v-row",[r("v-col",[r("v-icon",[e._v("\n                mdi-account-multiple\n              ")]),e._v("\n              Consortium\n            ")],1)],1),e._v(" "),r("v-row",[r("v-col",e._l(e.project.properties["osc:consortium"],(function(t){return r("span",{key:t},[e._v("\n                "+e._s(t)+"\n              ")])})),0)],1),e._v(" "),r("v-row",[r("v-col",e._l(e.project.links.filter((function(e){return"via"===e.rel})),(function(link){return r("a",{key:link.href,staticClass:"mr-1 projectLink",attrs:{href:link.href,target:"_blank"}},[r("v-icon",[e._v("\n                  mdi-link\n                ")]),e._v(" "),r("span",[e._v("\n                  "+e._s(link.title)+"\n                ")])],1)})),0)],1)],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-container",[r("v-row",[r("v-col",[e.$vuetify.breakpoint.smAndDown?[r("v-scale-transition",[r("small",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}]},[e._v(e._s(e.project.properties.description))])]),e._v(" "),r("v-btn",{attrs:{text:"","x-small":"",block:""},on:{click:function(t){e.showDescription=!e.showDescription}}},[r("v-icon",{attrs:{left:""}},[e._v("\n                      "+e._s(e.showDescription?"mdi-arrow-collapse-vertical":"mdi-arrow-expand-vertical")+"\n                    ")]),e._v("\n                    Description\n                  ")],1)]:[r("v-container",[r("v-row",{staticClass:"text-h6"},[r("v-col",[r("v-icon",[e._v("\n                          mdi-file-document\n                        ")]),e._v("\n                        Description\n                      ")],1)],1),e._v(" "),r("v-row",[r("v-col",[r("small",[e._v("\n                          "+e._s(e.project.properties.description)+"\n                        ")])])],1)],1)]],2)],1)],1)],1)],1)],1)],1),e._v(" "),r("v-container",{staticClass:"white",class:e.$vuetify.breakpoint.lgAndUp?"px-15":"pa-2"},[r("search-combobox",{staticClass:"ma-8 mb-0",attrs:{"embedded-mode":"","pre-selected-items":[{key:"project",value:e.project.id},{key:"type",value:"product"}]}}),e._v(" "),r("v-row",{staticClass:"pa-6"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("span",{staticClass:"text-h2"},[e._v("\n          Products\n        ")])]),e._v(" "),r("v-col",{class:e.$vuetify.breakpoint.lgAndUp?"d-flex":"",attrs:{cols:"12",md:"8"}},[r("v-spacer"),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"mr-4":"mb-4",attrs:{dense:"","hide-details":"",items:["Name"],label:"Sort by",outlined:""},model:{value:e.productsFilterSortBy,callback:function(t){e.productsFilterSortBy=t},expression:"productsFilterSortBy"}}),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"mr-4":"mb-4",attrs:{dense:"","hide-details":"",items:["Ascending","Descending"],label:"Order",outlined:""},model:{value:e.productsFilterOrder,callback:function(t){e.productsFilterOrder=t},expression:"productsFilterOrder"}})],1)],1),e._v(" "),r("item-grid",{attrs:{items:e.products}}),e._v(" "),r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-pagination",{attrs:{length:e.numberOfPages},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1)],1)],1):e._e()}),[],!1,null,"ec7653b6",null);t.default=component.exports;h()(component,{BreadCrumbNav:r(560).default,SearchCombobox:r(559).default,ItemGrid:r(561).default}),h()(component,{VBtn:_.a,VChip:y.a,VCol:x.a,VContainer:j.a,VIcon:O.a,VPagination:k.a,VRow:I.a,VScaleTransition:w.d,VSelect:C.a,VSpacer:P.a})}}]);