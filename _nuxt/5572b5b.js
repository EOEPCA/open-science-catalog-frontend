(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{528:function(t,e,n){"use strict";n(20),n(8),n(21),n(121),n(45),n(337),n(516),n(108),n(135);var r=n(2);var o,c=n(124);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},557:function(t,e,n){var content=n(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("1b7833da",content,!0,{sourceMap:!1})},598:function(t,e,n){"use strict";n(557)},599:function(t,e,n){var r=n(26)(!1);r.push([t.i,".imageLabel{background:#003247;color:#fff;position:absolute;text-transform:uppercase;padding:1px 10px;top:37%;left:15%;font-size:21px;font-weight:700}",""]),t.exports=r},615:function(t,e,n){"use strict";n.r(e);var r=n(48),o=(n(154),{name:"IndexPage",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("/themes");case 3:return r=e.sent,e.abrupt("return",{themes:r});case 5:case"end":return e.stop()}}),e)})))()},head:{titleTemplate:"ESA Open Science Data"}}),c=(n(598),n(134)),l=n(176),d=n.n(l),f=n(602),m=n(528),v=n(605),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0",staticStyle:{height:"100%"},attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},t._l(t.themes,(function(e){return n("v-col",{key:e.name,staticClass:"pa-1",attrs:{cols:"12",md:"6"}},[n("nuxt-link",{attrs:{to:"/themes/"+e.name.toLowerCase()}},[n("div",{staticClass:"d-flex align-center elevation-2 rounded",staticStyle:{position:"relative",height:"300px",overflow:"hidden","border-bottom":"0.25em solid rgb(51, 94, 111)"}},[n("img",{attrs:{src:t.withBase(e.image.replace("/static/","/")),width:"100%"}}),t._v(" "),n("span",{staticClass:"h1 imageLabel elevation-2"},[t._v("\n            "+t._s(e.name)+"\n          ")])])])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:f.a,VContainer:m.a,VRow:v.a})}}]);