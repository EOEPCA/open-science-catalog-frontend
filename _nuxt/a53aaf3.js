(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{608:function(t,r,n){"use strict";n(25),n(13),n(26),n(152),n(65),n(415),n(599),n(137),n(163);var e=n(2);var o,d=n(188);r.a=(o="container",e.default.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,r){var n=r.props,data=r.data,e=r.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var d=data.attrs;if(d){data.attrs={};var c=Object.keys(d).filter((function(t){if("slot"===t)return!1;var r=d[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,e)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,r){var n,e=r.props,data=r.data,o=r.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var r=c[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(d.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),o)}})},733:function(t,r,n){var content=n(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("abdb4222",content,!0,{sourceMap:!1})},765:function(t,r,n){"use strict";n(733)},766:function(t,r,n){var e=n(37)(!1);e.push([t.i,"[data-v-19b2bdd8] h3,[data-v-19b2bdd8] h4{padding-top:60px;margin-top:-60px}[data-v-19b2bdd8] ol,[data-v-19b2bdd8] ul{padding-bottom:16px}[data-v-19b2bdd8] thead{background:#d3d3d3}[data-v-19b2bdd8] td,[data-v-19b2bdd8] th{padding:10px}",""]),t.exports=e},788:function(t,r,n){"use strict";n.r(r);var e=n(30),o=(n(153),{data:function(){return{parsedNotice:null}},created:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.$get("./privacy-notice.md");case 2:n=r.sent,t.parsedNotice=t.$markdown(n);case 4:case"end":return r.stop()}}),r)})))()}}),d=(n(765),n(162)),c=n(214),l=n.n(c),f=n(780),v=n(608),m=n(781),component=Object(d.a)(o,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-container",{class:t.$vuetify.breakpoint.lgAndUp?"px-15 pt-8":"pa-4"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("p",{domProps:{innerHTML:t._s(t.parsedNotice)}})])],1)],1)}),[],!1,null,"19b2bdd8",null);r.default=component.exports;l()(component,{VCol:f.a,VContainer:v.a,VRow:m.a})}}]);