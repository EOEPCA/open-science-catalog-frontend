(window.webpackJsonp=window.webpackJsonp||[]).push([[9,10],{586:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return h}));var o=n(587),r=n(4),c=Object(r.j)("v-card__actions"),l=Object(r.j)("v-card__subtitle"),d=Object(r.j)("v-card__text"),h=Object(r.j)("v-card__title");o.a},587:function(t,e,n){"use strict";n(26),n(21),n(25),n(13),n(31),n(23),n(32);var o=n(7),r=(n(58),n(325),n(326),n(590),n(324)),c=n(596),l=n(154),d=n(29);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r.a.options.computed.classes.call(this))},styles:function(){var style=v({},r.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},588:function(t,e,n){var content=n(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("b7fa5fcc",content,!0,{sourceMap:!1})},590:function(t,e,n){var content=n(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("03030716",content,!0,{sourceMap:!1})},591:function(t,e,n){var o=n(37),r=n(47),c=n(50),l=o(!1),d=r(c);l.push([t.i,'@font-face{font-family:"NotesESABold";src:url('+d+') format("truetype")}.v-application .display-1,.v-application .display-2,.v-application .display-3,.v-application .h1,.v-application .h2,.v-application .h3,.v-application .h4,.v-application .headline,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application h1,.v-application h2,.v-application h3,.v-application h4,.v-btn__content,.v-card__title,.v-chip,.v-tab,.v-toolbar__title{font-family:"NotesESABold",sans-serif}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=l},592:function(t,e,n){"use strict";n.r(e);n(26),n(21),n(31),n(32);var o=n(7);n(25),n(13),n(23),n(127),n(215);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{features:{type:Array,default:null},highlight:{type:Object,default:null},enableDraw:{type:Boolean,default:!1}},data:function(){return{map:null,draw:null,baseLayers:[{layer:"terrain-light"},{layer:"overlay_bright"}],vectorSource:null,defaultStyle:null,highlightStyle:null,defaultPadding:[50,25,50,25],loading:!0,clearButton:null}},watch:{features:{deep:!0,handler:function(t){if(this.vectorSource){var e={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:t?t.filter((function(t){return!!t.geometry})):[]},n=(new this.$ol.GeoJSON).readFeatures(e,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"});this.vectorSource.clear(),this.vectorSource.addFeatures(n)}}},highlight:function(t){var e=this;if(this.vectorSource.getFeatures().forEach((function(t){return t.setStyle(e.defaultStyle)})),this.map&&t&&t.geometry){var n=this.vectorSource.getFeatureById(t.id);n.setStyle(this.highlightStyle),console.log(n.getGeometry().getExtent()),this.map.getView().fit(n.getGeometry().getExtent(),{padding:this.defaultPadding,duration:500})}else this.map.getView().fit([-180,-90,180,90],{padding:this.defaultPadding,duration:500})}},mounted:function(){this.createMap()},methods:{createMap:function(){var t=this,ol=this.$ol,e=new ol.WMTSCapabilities;this.defaultStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(0, 50, 71, 0.5)",width:3}),fill:new ol.Fill({color:"rgba(0, 50, 71, 0.1)"})}),this.highlightStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(20, 100, 91, 1)",width:3}),fill:new ol.Fill({color:"rgba(0, 200, 71, 0.4)"})}),fetch("https://s2maps.eu/WMTSCapabilities.xml").then((function(t){return t.text()})).then((function(text){var n=e.read(text),o=[];t.baseLayers.forEach((function(e){var r=ol.optionsFromCapabilities(n,{layer:e.layer,matrixSet:"WGS84"});o.push(new ol.TileLayer({opacity:1,source:new ol.WMTS(c(c({},r),{},{wrapX:!0,attributions:n.Contents.Layer.find((function(t){return t.Identifier===e.layer})).Abstract+(t.baseLayers.indexOf(e)<t.baseLayers.length-1?",":"")}))}))}));var r={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:t.features?t.features.filter((function(t){return!!t.geometry})):[]};t.vectorSource=new ol.VectorSource({features:(new ol.GeoJSON).readFeatures(r,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})}),t.vectorSource.on("clear",(function(){t.map.removeControl(t.clearButton)}));var l=new ol.VectorLayer({source:t.vectorSource,style:t.defaultStyle});o.push(l),t.clearButton=new ol.ClearMap,t.map=new ol.Map({layers:o,target:t.$refs.mapContainer,view:new ol.View({center:[0,0],zoom:2,multiWorld:!0,projection:"EPSG:4326"})}),t.features&&t.map.getView().fit(t.vectorSource.getExtent(),{padding:t.defaultPadding}),t.map.on("loadstart",(function(){t.loading=!1})),t.enableDraw&&(t.draw=new ol.Draw({source:t.vectorSource,type:"Circle",geometryFunction:ol.createBox()}),t.map.addInteraction(t.draw),t.draw.on("drawstart",(function(){t.vectorSource.clear()})),t.draw.on("drawend",(function(e){t.$emit("drawEnd",e.feature.getGeometry()),t.map.addControl(t.clearButton)})))}))},clearFeatures:function(){this.vectorSource.clear()}}},d=(n(594),n(162)),h=n(214),v=n.n(h),f=n(298),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"d-flex align-center justify-center",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[t.loading?n("v-progress-circular",{attrs:{color:"primary",size:70,indeterminate:""}}):t._e()],1),t._v(" "),n("div",{ref:"mapContainer",style:"height: "+(t.$vuetify.breakpoint.smOnly?"200px":"400px")+"; width: 100%;"})])])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VProgressCircular:f.a})},594:function(t,e,n){"use strict";n(588)},595:function(t,e,n){var o=n(37)(!1);o.push([t.i,".clear-btn{top:15px;right:.5em}.clear-btn button{width:auto!important;padding:0 .5em!important}",""]),t.exports=o},605:function(t,e,n){var content=n(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("0b9a0e92",content,!0,{sourceMap:!1})},606:function(t,e,n){var o=n(37),r=n(47),c=n(50),l=o(!1),d=r(c);l.push([t.i,'@font-face{font-family:"NotesESABold";src:url('+d+') format("truetype")}.v-application .display-1,.v-application .display-2,.v-application .display-3,.v-application .h1,.v-application .h2,.v-application .h3,.v-application .h4,.v-application .headline,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application h1,.v-application h2,.v-application h3,.v-application h4,.v-btn__content,.v-card__title,.v-chip,.v-tab,.v-toolbar__title{font-family:"NotesESABold",sans-serif}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}',""]),t.exports=l},608:function(t,e,n){"use strict";n(25),n(13),n(26),n(152),n(65),n(415),n(599),n(137),n(163);var o=n(2);var r,c=n(188);e.a=(r="container",o.default.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,r=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},614:function(t,e,n){var content=n(615);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("0de92506",content,!0,{sourceMap:!1})},615:function(t,e,n){var o=n(37),r=n(47),c=n(50),l=o(!1),d=r(c);l.push([t.i,'@font-face{font-family:"NotesESABold";src:url('+d+') format("truetype")}.v-application .display-1,.v-application .display-2,.v-application .display-3,.v-application .h1,.v-application .h2,.v-application .h3,.v-application .h4,.v-application .headline,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application h1,.v-application h2,.v-application h3,.v-application h4,.v-btn__content,.v-card__title,.v-chip,.v-tab,.v-toolbar__title{font-family:"NotesESABold",sans-serif}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}',""]),t.exports=l},634:function(t,e,n){"use strict";var o=n(7),r=(n(58),n(13),n(26),n(21),n(25),n(31),n(23),n(32),n(646)),c=n(219),l=n(598),d=n(647),h=n(29),v=n(4);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(h.a)(r.a,Object(c.b)(["top","right","bottom","left","absolute"]),l.a,d.a);e.a=y.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var a=this.dimensions.activator,t=this.dimensions.content,e=(!1!==this.attach?a.offsetLeft:a.left)||0,n=Math.max(a.width,t.width),o=0;if(o+=e,(this.left||this.$vuetify.rtl&&!this.right)&&(o-=n-a.width),this.offsetX){var r=isNaN(Number(this.maxWidth))?a.width:Math.min(a.width,Number(this.maxWidth));o+=this.left?-r:a.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function(){var a=this.dimensions.activator,t=this.dimensions.content,e=0;return this.top&&(e+=a.height-t.height),!1!==this.attach?e+=a.offsetTop:e+=a.top+this.pageYOffset,this.offsetY&&(e+=this.top?-a.height:a.height),this.nudgeTop&&(e-=parseInt(this.nudgeTop)),this.nudgeBottom&&(e+=parseInt(this.nudgeBottom)),e},hasActivator:function(){return!!(this.$slots.activator||this.$scopedSlots.activator||this.activator||this.inputActivator)},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!=typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(v.h)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(v.h)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var n=t+e-this.pageWidth+12;return(t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12))+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),n=this.absoluteYOffset+e,o=this.dimensions.activator,r=this.dimensions.content.height,c=n<t+r;return c&&this.offsetOverflow&&o.top>r?t=this.pageYOffset+(o.top-r):c&&!this.allowOverflow?t=n-r-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){for(var t=this.getActivator();t;){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=l.a.options.methods.genActivatorListeners.call(this),n=e.click;return n&&(e.click=function(e){t.openOnClick&&n&&n(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY}),e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var rect=t.getBoundingClientRect();return{top:Math.round(rect.top),left:Math.round(rect.left),bottom:Math.round(rect.bottom),right:Math.round(rect.right),width:Math.round(rect.width),height:Math.round(rect.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var rect=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var style=window.getComputedStyle(t);rect.left=parseInt(style.marginLeft),rect.top=parseInt(style.marginTop)}return rect},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var n=e.$refs.content;n&&"none"===n.style.display?(n.style.display="inline-block",t(),n.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!=typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:m({},this.dimensions.activator),content:m({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var n=this.getActivator();if(!n)return;e.activator=this.measure(n),e.activator.offsetLeft=n.offsetLeft,!1!==this.attach?e.activator.offsetTop=n.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var n=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+n.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+n.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}})},659:function(t,e,n){"use strict";var o=n(7),r=(n(58),n(605),n(598)),c=n(70),l=n(633),d=n(328),h=n(634),v=n(4),f=n(28),m=n(29);e.a=Object(m.a)(c.a,l.a,d.a,h.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(v.h)(this.maxWidth),minWidth:Object(v.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(v.u)(this,"activator",!0)&&Object(f.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===v.y.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},664:function(t,e,n){"use strict";n.r(e);var o={name:"CoverageDialog",components:{CoverageMap:n(592).default},props:{products:{type:Array,default:null},variable:{type:Object,default:null},disable:{type:Boolean,default:function(){return!1}}},data:function(){return{dialog:!1,showActivatorTooltip:!1,currentHighlight:null}},watch:{dialog:function(t){t&&this.variable&&!this.products&&this.$emit("loadProducts")}}},r=n(162),c=n(214),l=n.n(c),d=n(333),h=n(587),v=n(586),f=n(777),m=n(608),y=n(691),_=n(566),w=n(299),x=n(300),O=n(201),j=n(302),S=n(128),k=n(778),C=n(582),P=n(702),A=n(659),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{scrollable:"",width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){return[n("v-btn",t._g(t._b({attrs:{icon:"",color:t.variable?"primary":"applications",disabled:t.disable},on:{mouseover:function(e){t.showActivatorTooltip=!0},mouseleave:function(e){t.showActivatorTooltip=!1}}},"v-btn",r,!1),o),[n("v-icon",[t._v(t._s(t.variable?"mdi-earth":"mdi-map-marker"))])],1)]}}],null,!0),model:{value:t.showActivatorTooltip,callback:function(e){t.showActivatorTooltip=e},expression:"showActivatorTooltip"}},[t._v(" "),n("span",[t._v("Coverage")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),t.products?n("v-card",[n("v-card-title",{staticClass:"text-h6"},[n("v-icon",{attrs:{color:"applications",left:""}},[t._v("\n        "+t._s(1===t.products.length?"mdi-map-marker":"mdi-earth")+"\n      ")]),t._v(" "),n("span",[t._v(t._s(1===t.products.length?t.products[0].properties.title:t.variable&&t.variable.name)+" Coverage")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"px-0 black--text pb-0 pb-md-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"5"}},[t.variable?n("v-list",{attrs:{dense:"",subheader:""}},[n("v-subheader",{staticClass:"px-0"},[t._v("\n                Products\n              ")]),t._v(" "),n("v-divider"),t._v(" "),t._l(t.products,(function(e){return n("v-list-item",{key:e.id,staticClass:"px-0",staticStyle:{cursor:"pointer"},on:{mouseover:function(n){t.currentHighlight=e},mouseleave:function(e){t.currentHighlight=null}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.properties.title))])],1),t._v(" "),n("v-list-item-action",{staticClass:"flex-row"},[t.variable?n("v-btn",{attrs:{icon:"",color:"primary",disabled:!e.geometry}},[n("v-icon",[t._v("mdi-map-marker")])],1):t._e(),t._v(" "),n("v-btn",{attrs:{icon:"",color:"primary",to:"/products/"+t.$extractSlug(e),target:"_blank"}},[n("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)}))],2):t.products[0]?[n("div",[n("strong",[t._v("Name")])]),t._v(" "),n("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].properties.title)+"\n              ")]),t._v(" "),n("div",[n("strong",[t._v("Region")])]),t._v(" "),n("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].properties["osc:region"])+"\n              ")]),t._v(" "),n("div",[n("strong",[t._v("Satellite missions")])]),t._v(" "),n("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].properties["osc:missions"].join(", "))+"\n              ")]),t._v(" "),n("div",[n("strong",[t._v("BBOX")])]),t._v(" "),n("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].bbox)+"\n              ")])]:t._e()],2),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"7"}},[n("client-only",[t.products?n("CoverageMap",{ref:"map",attrs:{features:t.products,highlight:t.currentHighlight}}):t._e()],1)],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")])],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{CoverageMap:n(592).default}),l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:f.a,VContainer:m.a,VDialog:y.a,VDivider:_.a,VIcon:w.a,VList:x.a,VListItem:O.a,VListItemAction:j.a,VListItemContent:S.a,VListItemTitle:S.b,VRow:k.a,VSpacer:C.a,VSubheader:P.a,VTooltip:A.a})},691:function(t,e,n){"use strict";var o=n(216),r=n(7),c=(n(58),n(137),n(117),n(90),n(118),n(13),n(215),n(26),n(21),n(25),n(31),n(23),n(32),n(614),n(776)),l=n(598),d=n(328),h=n(647),v=n(337),f=n(651),m=n(646),y=n(330),_=n(29),w=n(28),x=n(4);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(_.a)(d.a,h.a,v.a,f.a,m.a,l.a);e.a=S.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===x.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:j({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=j(j({},data.style),{},{maxWidth:Object(x.h)(this.maxWidth),width:Object(x.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},702:function(t,e,n){"use strict";n(26),n(21),n(25),n(13),n(31),n(23),n(32);var o=n(7),r=(n(703),n(69)),c=n(29);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(r.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:d({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},703:function(t,e,n){var content=n(704);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("5b815f9c",content,!0,{sourceMap:!1})},704:function(t,e,n){var o=n(37),r=n(47),c=n(50),l=o(!1),d=r(c);l.push([t.i,'@font-face{font-family:"NotesESABold";src:url('+d+') format("truetype")}.v-application .display-1,.v-application .display-2,.v-application .display-3,.v-application .h1,.v-application .h2,.v-application .h3,.v-application .h4,.v-application .headline,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application h1,.v-application h2,.v-application h3,.v-application h4,.v-btn__content,.v-card__title,.v-chip,.v-tab,.v-toolbar__title{font-family:"NotesESABold",sans-serif}.theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}',""]),t.exports=l}}]);