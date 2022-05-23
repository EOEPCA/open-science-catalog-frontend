(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{623:function(e,t,n){"use strict";n(26),n(14),n(27),n(154),n(65),n(415),n(601),n(138),n(163);var r=n(2);var o,l=n(189);t.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,t){var n=t.props,data=t.data,r=t.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(e){if("slot"===e)return!1;var t=l[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,r=t.props,data=t.data,o=t.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(e){if("slot"===e)return!1;var t=c[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},642:function(e,t,n){"use strict";n.r(t);n(27),n(26),n(31),n(32);var r=n(30),o=n(7),l=(n(153),n(14),n(24),n(215),n(50),n(22),n(113),n(41),n(94),n(418),n(83),n(110),n(65),n(157));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"ChangeItem",props:{type:{type:String,default:function(){return""}}},data:function(){return{itemTypes:["Theme","Variable","Project","Product"],selectedItemType:"",name:"",description:"",parentThemes:[],parentVariables:"",parentProject:"",startDate:"",endDate:"",satelliteMissions:"",consortium:"",eo4societyURL:"",link:"",WMSLink:"",imageLink:"",variables:[],valid:!1,loading:!1,success:!1,descriptionToggle:null,deleteDialog:!1,id:null}},head:{title:"Add item"},computed:d({},Object(l.d)("staticCatalog",["themes"])),mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("staticCatalog/retreiveMetrics");case 2:e.themes.forEach((function(t){t.variables.forEach((function(t){e.variables.push(t)}))})),"theme"in e.$route.query?e.selectedItemType="Theme":"variable"in e.$route.query?e.selectedItemType="Variable":"project"in e.$route.query?e.selectedItemType="Project":"product"in e.$route.query&&(e.selectedItemType="Product"),e.fillForm();case 5:case"end":return t.stop()}}),t)})))()},methods:d(d({},Object(l.b)("staticCatalog",["retreiveVariable","retreiveProjects","retreiveProduct"])),{},{fillForm:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("clear"===e){n.next=24;break}if("Theme"!==t.selectedItemType){n.next=9;break}r=t.themes.find((function(e){return t.slugify(e.name)===t.$route.query.theme})),t.name=r.name,t.description=r.description,t.eo4societyURL=r.website,t.imageLink=r.image,n.next=22;break;case 9:if("Variable"!==t.selectedItemType){n.next=14;break}return n.next=12,t.retreiveVariable(t.$route.query.variable).then((function(e){t.description=e.description,t.name=e.id,t.parentThemes=e["osc:theme"].replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})),t.link=e.links.find((function(link){return"via"===link.rel})).href})).catch((function(e){return console.error(e)}));case 12:n.next=22;break;case 14:if("Project"!==t.selectedItemType){n.next=19;break}return n.next=17,t.retreiveProjects(t.$route.query.project).then((function(e){t.name=e.properties.title,t.id=e.id,t.description=e.properties.description,t.parentThemes=e.properties["osc:themes"],t.startDate=new Date(e.properties.start_datetime).toISOString().toString().slice(0,-8),t.endDate=new Date(e.properties.end_datetime).toISOString().toString().slice(0,-8),t.consortium=e.properties["osc:consortium"],t.eo4societyURL=e.links[0].href,t.link=e.links[1].href})).catch((function(e){console.error(e)}));case 17:n.next=22;break;case 19:if("Product"!==t.selectedItemType){n.next=22;break}return n.next=22,t.retreiveProduct(t.$route.query.product).then((function(e){t.name=e.properties.title,t.id=e.id,t.description=e.properties.description,t.parentThemes=e.properties["osc:themes"],t.parentVariables=e.properties["osc:variable"],t.parentProject=e.properties["osc:project"],t.startDate=new Date(e.properties.start_datetime).toISOString().toString().slice(0,-8),t.endDate=new Date(e.properties.end_datetime).toISOString().toString().slice(0,-8),t.satelliteMissions=e.properties["osc:missions"],t.eo4societyURL=e.links[0].href,t.link=e.links[1].href})).catch((function(e){console.error(e)}));case 22:n.next=34;break;case 24:t.name="",t.description="",t.parentThemes=[],t.parentVariables=[],t.parentProject=[],t.startDate="",t.endDate="",t.satelliteMissions=[],t.eo4societyURL="",t.link="";case 34:case"end":return n.stop()}}),n)})))()},submitForm:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=19;break}if(e.loading=!0,t.prev=2,"add"!==e.type){t.next=8;break}return t.next=6,e.$metadataBackend.$post("/items/".concat(e.slugify(e.selectedItemType),"s/").concat(e.slugify(e.name),".json"),{name:e.name,description:e.description,theme:e.parentThemes,parentVariables:e.parentVariables,parentProject:e.parentProject,startDate:e.startDate,endDate:e.endDate,satelliteMissions:e.satelliteMissions,eo4societyURL:e.eo4societyURL,link:e.link});case 6:t.next=10;break;case 8:return t.next=10,e.$metadataBackend.$put("/items/".concat(e.slugify(e.selectedItemType),"s/").concat(e.slugify(e.name),".json"),{name:e.name,description:e.description,theme:e.parentThemes,parentVariables:e.parentVariables,parentProject:e.parentProject,startDate:e.startDate,endDate:e.endDate,satelliteMissions:e.satelliteMissions,eo4societyURL:e.eo4societyURL,link:e.link});case 10:e.loading=!1,e.success=!0,t.next=19;break;case 14:t.prev=14,t.t0=t.catch(2),console.error(t.t0),e.loading=!1,e.success=!1;case 19:case"end":return t.stop()}}),t,null,[[2,14]])})))()},deleteItem:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$metadataBackend.$delete("/items/".concat(e.slugify(e.selectedItemType),"s/").concat(e.id||e.slugify(e.name),".json"),{});case 3:e.loading=!1,e.deleteDialog=!1;case 5:case"end":return t.stop()}}),t)})))()}})},f=n(162),x=n(214),m=n.n(x),h=n(308),_=(n(647),n(331)),y=n(222),k=n(188),w=n(327),j=n(279),O=n(120),P=n(29),T=n(4);function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $=Object(P.a)(_.a,j.a,O.a).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,singleLine:Boolean,sticky:Boolean,value:{type:Boolean,default:!0}},computed:{classes:function(){return S(S({},_.a.options.computed.classes.call(this)),{},{"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky})},hasIcon:function(){return Boolean(this.icon||this.$slots.icon)},isSticky:function(){return this.sticky||this.app},styles:function(){var e=S({},_.a.options.computed.styles.call(this));if(this.isSticky){var t=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;e.top=Object(T.h)(t),e.position="sticky",e.zIndex=1}return e}},methods:{toggle:function(){this.isActive=!this.isActive},iconClick:function(e){this.$emit("click:icon",e)},genIcon:function(){var content;if(this.hasIcon)return content=this.icon?this.$createElement(k.a,{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(y.a,{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[content])},genText:function(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions:function(){var e=this,t=Object(T.t)(this,"actions",{dismiss:function(){return e.isActive=!1}});if(t)return this.$createElement("div",{staticClass:"v-banner__actions"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper:function(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render:function(e){var data={staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};return e(w.a,[e("div",this.outlined?data:this.setBackgroundColor(this.color,data),[this.genWrapper()])])}}),D=n(336),V=n(586),C=n(583),E=n(762),B=(n(93),n(118),n(329),n(119),n(167)),L=n(224);function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function z(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var A=Object(P.a)(B.a,Object(L.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:z({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}}),M=n(303),N=n(602),U=n(579),F=n(764),H=n(782),W=n(780),G=n(759),Z=n(634);n(58),n(670);function J(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var K=Object(P.a)(Z.a).extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?J(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):J(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},Z.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=Z.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){Z.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",staticClass:"white pa-5 rounded",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-select",{attrs:{items:e.itemTypes,label:"Select an item type",outlined:"",required:"",rules:[function(e){return!!e||"Item type is required"}]},on:{change:function(t){return e.fillForm("clear")}},model:{value:e.selectedItemType,callback:function(t){e.selectedItemType=t},expression:"selectedItemType"}}),e._v(" "),"add"===e.type&&e.selectedItemType?n("v-text-field",{attrs:{label:"Name",outlined:"",required:"",rules:[function(e){return!!e||"Name is required"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):"Theme"===e.selectedItemType?n("v-text-field",{attrs:{label:"Theme name",outlined:"",required:"",rules:[function(e){return!!e||"Theme Name required"}]},on:{change:e.fillForm},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):"Variable"===e.selectedItemType?n("v-text-field",{attrs:{label:"Variable Name",outlined:"",required:"",rules:[function(e){return!!e||"Variable Name required"}]},on:{change:e.fillForm},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):"Project"===e.selectedItemType?n("v-text-field",{attrs:{label:"Project Name",outlined:"",required:"",rules:[function(e){return!!e||"Project Name is required"}]},on:{change:e.fillForm},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):"Product"===e.selectedItemType?n("v-text-field",{attrs:{label:"Product Name",outlined:"",required:"",rules:[function(e){return!!e||"Product Name is required"}]},on:{change:e.fillForm},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):e._e(),e._v(" "),e.selectedItemType?n("v-tabs",{attrs:{tile:"",group:""},model:{value:e.descriptionToggle,callback:function(t){e.descriptionToggle=t},expression:"descriptionToggle"}},[n("v-tab",[e._v("\n      Input\n    ")]),e._v(" "),n("v-tab",[e._v("\n      Preview\n    ")])],1):e._e(),e._v(" "),e.selectedItemType?n("v-tabs-items",{model:{value:e.descriptionToggle,callback:function(t){e.descriptionToggle=t},expression:"descriptionToggle"}},[n("v-tab-item",[n("v-textarea",{staticClass:"mt-4",attrs:{name:"Description",label:"Description (markdown supported)",outlined:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),e._v(" "),n("v-tab-item",[n("div",{staticClass:"mt-2 mb-4 mx-2 py-3",staticStyle:{display:"block"},domProps:{innerHTML:e._s(e.description?e.$markdown(e.description):"Write in the input field to see preview here")}})])],1):e._e(),e._v(" "),"Variable"===e.selectedItemType||"Project"===e.selectedItemType||"Product"===e.selectedItemType?n("v-select",{attrs:{items:e.themes,"item-value":"name","item-text":"name",chips:"",multiple:"",label:"Themes",outlined:"",required:"",rules:[function(e){return!!e||"Parent theme is required"}]},model:{value:e.parentThemes,callback:function(t){e.parentThemes=t},expression:"parentThemes"}}):e._e(),e._v(" "),"Product"===e.selectedItemType&&"add"===e.type?n("v-select",{attrs:{items:e.variables,"item-value":"name","item-text":"name",chips:"",multiple:"",label:"Variables",hint:"Separate multiple variables by comma",outlined:"",required:""},model:{value:e.parentVariables,callback:function(t){e.parentVariables=t},expression:"parentVariables"}}):e._e(),e._v(" "),"Product"===e.selectedItemType?n("v-text-field",{attrs:{label:"Parent Project",outlined:"",required:"",rules:[function(e){return!!e||"Parent Project ID is required"}]},model:{value:e.parentProject,callback:function(t){e.parentProject=t},expression:"parentProject"}}):e._e(),e._v(" "),"Project"===e.selectedItemType||"Product"===e.selectedItemType?n("v-text-field",{attrs:{type:"datetime-local",label:"Start date",outlined:"",required:"",rules:[function(e){return!!e||"Start date is required"}]},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}}):e._e(),e._v(" "),"Project"===e.selectedItemType||"Product"===e.selectedItemType?n("v-text-field",{attrs:{type:"datetime-local",label:"End date",outlined:"",required:"",rules:[function(e){return!!e||"End date is required"}]},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}}):e._e(),e._v(" "),"Project"===e.selectedItemType?n("v-text-field",{attrs:{label:"Consortium",outlined:"",required:"",rules:[function(e){return!!e||"Consortium is required"}]},model:{value:e.consortium,callback:function(t){e.consortium=t},expression:"consortium"}}):e._e(),e._v(" "),"Product"===e.selectedItemType?n("v-text-field",{attrs:{label:"Satellite Missions",hint:"Separate multiple missions by comma",outlined:"",required:"",rules:[function(e){return!!e||"Satellite missions are required"},function(e){return/^[a-zA-Z0-9-]+(,[a-zA-Z0-9-]+)*$/.test(e)||"Satellite missions must be separated by commas"}]},model:{value:e.satelliteMissions,callback:function(t){e.satelliteMissions=t},expression:"satelliteMissions"}}):e._e(),e._v(" "),"Theme"===e.selectedItemType||"Project"===e.selectedItemType||"Product"===e.selectedItemType?n("v-text-field",{attrs:{label:"EO4Society URL",outlined:"",required:"",rules:[function(e){return!!e||"EO4Society URL is required"},function(e){return/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(e)||"EO4Society URL must be valid"}]},model:{value:e.eo4societyURL,callback:function(t){e.eo4societyURL=t},expression:"eo4societyURL"}}):e._e(),e._v(" "),"Variable"===e.selectedItemType||"Project"===e.selectedItemType||"Product"===e.selectedItemType?n("v-text-field",{attrs:{label:"Link",outlined:"",required:"",rules:[function(e){return!!e||"Link is required"}]},model:{value:e.link,callback:function(t){e.link=t},expression:"link"}}):e._e(),e._v(" "),"Product"===e.selectedItemType?n("v-text-field",{attrs:{label:"WMS Link",outlined:"",rules:[function(e){return!e||/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(e)||"WMS link must be valid"}]},model:{value:e.WMSLink,callback:function(t){e.WMSLink=t},expression:"WMSLink"}}):e._e(),e._v(" "),"Theme"===e.selectedItemType?n("v-text-field",{attrs:{label:"Image Link",outlined:"",required:"",rules:[function(e){return!!e||"Image link is required"}]},model:{value:e.imageLink,callback:function(t){e.imageLink=t},expression:"imageLink"}}):e._e(),e._v(" "),n("div",{staticClass:"d-flex"},[n("v-dialog",{attrs:{"max-width":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({class:e.$vuetify.breakpoint.smAndUp?"mr-2":"mb-2",staticStyle:{cursor:"pointer"},attrs:{dark:"",large:"",color:"red",block:e.$vuetify.breakpoint.xsOnly}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[e._v("\n            mdi-delete\n          ")]),e._v("\n          Request deletion\n        ")],1)]}}]),model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[e._v(" "),n("v-card",{staticClass:"pa-3"},[n("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[e._v("\n          Are you sure you want to request this item to be deleted?\n        ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue",dark:""},on:{click:function(t){e.deleteDialog=!1}}},[n("v-icon",{attrs:{left:""}},[e._v("\n              mdi-cancel\n            ")]),e._v("\n            Cancel\n          ")],1),e._v(" "),n("v-btn",{attrs:{color:"red",dark:"",loading:e.loading},on:{click:e.deleteItem}},[n("v-icon",{attrs:{left:""}},[e._v("\n              mdi-delete\n            ")]),e._v("\n            Request deletion\n          ")],1)],1)],1)],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{class:e.$vuetify.breakpoint.smAndUp?"mr-2":"mb-2",attrs:{color:"primary",text:"",large:"",block:e.$vuetify.breakpoint.xsOnly,to:"/"}},[n("v-icon",{attrs:{left:""}},[e._v("\n        mdi-cancel\n      ")]),e._v("\n      Cancel\n    ")],1),e._v(" "),e.success?e._e():n("v-btn",{attrs:{color:"primary",disabled:!e.valid,loading:e.loading,large:"",block:e.$vuetify.breakpoint.xsOnly},on:{click:e.submitForm}},[n("v-icon",{attrs:{left:""}},[e._v("\n        mdi-checkbox-marked-circle-outline\n      ")]),e._v("\n      Submit\n    ")],1)],1),e._v(" "),e.success?n("v-banner",{attrs:{"two-line":""},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-btn",{attrs:{text:"",color:"primary",to:"/contribution-status"}},[e._v("\n        Check contribution status\n      ")])]},proxy:!0}],null,!1,1695148443)},[n("v-avatar",{attrs:{slot:"icon",color:"success",size:"40"},slot:"icon"},[n("v-icon",{attrs:{color:"white"}},[e._v("\n        mdi-checkbox-marked-circle-outline\n      ")])],1),e._v("\n    Thank you for your contribution! Your proposed changes will be reviewed shortly.\n    ")],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VAvatar:h.a,VBanner:$,VBtn:D.a,VCard:V.a,VCardActions:C.a,VCardTitle:C.d,VDialog:E.a,VForm:A,VIcon:M.a,VSelect:N.a,VSpacer:U.a,VTab:F.a,VTabItem:H.a,VTabs:W.a,VTabsItems:G.a,VTextField:Z.a,VTextarea:K})},647:function(e,t,n){var content=n(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(38).default)("079b7ace",content,!0,{sourceMap:!1})},648:function(e,t,n){var r=n(37),o=n(44),l=n(47),c=r(!1),d=o(l);c.push([e.i,'@font-face{font-family:"NotesESABold";src:url('+d+') format("truetype")}.v-application .display-1,.v-application .display-2,.v-application .display-3,.v-application .h1,.v-application .h2,.v-application .h3,.v-application .h4,.v-application .headline,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application h1,.v-application h2,.v-application h3,.v-application h4,.v-btn__content,.v-card__title,.v-chip,.v-tab,.v-toolbar__title{font-family:"NotesESABold",sans-serif}.theme--light.v-banner.v-sheet{background-color:transparent}.theme--light.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped) .v-banner__wrapper{border-bottom:thin solid rgba(0,0,0,.12)}.theme--dark.v-banner.v-sheet{background-color:transparent}.theme--dark.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped) .v-banner__wrapper{border-bottom:thin solid hsla(0,0%,100%,.12)}.v-sheet.v-banner{border-radius:0}.v-sheet.v-banner:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-banner.v-sheet--shaped{border-radius:24px 0}.v-banner{position:relative;transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.v-banner__actions{align-items:center;align-self:flex-end;display:flex;flex:1 0 auto;justify-content:flex-end;margin-bottom:-8px}.v-application--is-ltr .v-banner__actions{margin-left:90px}.v-application--is-rtl .v-banner__actions{margin-right:90px}.v-application--is-ltr .v-banner__actions>*{margin-left:8px}.v-application--is-rtl .v-banner__actions>*{margin-right:8px}.v-banner__content{align-items:center;display:flex;flex:1 1 auto;overflow:hidden}.v-banner__text{flex:1 1 auto;line-height:20px;max-width:100%}.v-banner__icon{display:inline-flex;flex:0 0 auto}.v-application--is-ltr .v-banner__icon{margin-right:24px}.v-application--is-rtl .v-banner__icon{margin-left:24px}.v-banner__wrapper{align-items:center;display:flex;flex:1 1 auto}.v-application--is-ltr .v-banner__wrapper{padding:16px 8px 16px 24px}.v-application--is-rtl .v-banner__wrapper{padding:16px 24px 16px 8px}.v-banner--single-line .v-banner__actions{margin-bottom:0;align-self:center}.v-banner--single-line .v-banner__text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v-banner--single-line .v-banner__wrapper{padding-top:8px;padding-bottom:8px}.v-application--is-ltr .v-banner--has-icon .v-banner__wrapper{padding-left:16px}.v-application--is-rtl .v-banner--has-icon .v-banner__wrapper{padding-right:16px}.v-banner--is-mobile .v-banner__actions{flex:1 0 100%;margin-left:0;margin-right:0;padding-top:12px}.v-banner--is-mobile .v-banner__wrapper{flex-wrap:wrap;padding-top:16px}.v-application--is-ltr .v-banner--is-mobile .v-banner__wrapper{padding-left:16px}.v-application--is-rtl .v-banner--is-mobile .v-banner__wrapper{padding-right:16px}.v-banner--is-mobile.v-banner--has-icon .v-banner__wrapper{padding-top:24px}.v-banner--is-mobile.v-banner--single-line .v-banner__actions{flex:initial;padding-top:0}.v-application--is-ltr .v-banner--is-mobile.v-banner--single-line .v-banner__actions{margin-left:36px}.v-application--is-rtl .v-banner--is-mobile.v-banner--single-line .v-banner__actions{margin-right:36px}.v-banner--is-mobile.v-banner--single-line .v-banner__wrapper{flex-wrap:nowrap;padding-top:10px}.v-application--is-ltr .v-banner--is-mobile .v-banner__icon{margin-right:16px}.v-application--is-rtl .v-banner--is-mobile .v-banner__icon{margin-left:16px}.v-application--is-ltr .v-banner--is-mobile .v-banner__content{padding-right:8px}.v-application--is-rtl .v-banner--is-mobile .v-banner__content{padding-left:8px}.v-banner--is-mobile .v-banner__content .v-banner__wrapper{flex-wrap:nowrap;padding-top:10px}',""]),e.exports=c},670:function(e,t,n){var content=n(671);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(38).default)("26e91dcb",content,!0,{sourceMap:!1})},671:function(e,t,n){var r=n(37),o=n(44),l=n(47),c=r(!1),d=o(l);c.push([e.i,'@font-face{font-family:"NotesESABold";src:url('+d+') format("truetype")}.v-application .display-1,.v-application .display-2,.v-application .display-3,.v-application .h1,.v-application .h2,.v-application .h3,.v-application .h4,.v-application .headline,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application h1,.v-application h2,.v-application h3,.v-application h4,.v-btn__content,.v-card__title,.v-chip,.v-tab,.v-toolbar__title{font-family:"NotesESABold",sans-serif}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}',""]),e.exports=c},771:function(e,t,n){"use strict";n.r(t);var r={name:"EditItem",components:{ChangeItem:n(642).default},middleware:"auth",head:{title:"Edit Item"}},o=n(162),l=n(214),c=n.n(l),d=n(765),v=n(623),f=n(766),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{class:e.$vuetify.breakpoint.lgAndUp?"px-15 pt-8":"pa-4"},[n("h2",{staticClass:"text-h2 mt-3 mb-5"},[e._v("\n    Edit item\n  ")]),e._v(" "),n("v-row",{staticClass:"d-flex justify-center"},[n("v-col",{attrs:{cols:"12"}},[e.$route.query.theme||e.$route.query.variable||e.$route.query.project||e.$route.query.product?n("change-item"):n("p",[e._v('\n        To edit an existing item, please navigate to the corresponding page and click the "suggest changes" button in the lower right corner.\n      ')])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{ChangeItem:n(642).default}),c()(component,{VCol:d.a,VContainer:v.a,VRow:f.a})}}]);