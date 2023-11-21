(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[5101],{7651:function(t,e,n){const r=n(65571),i=n(19263),s=n(28713),a=n(71048),o=n(35834);function l(t,e,n,l,u){let c={};for(let s in e){let p;try{let f=s.split(/:(.*)/);1===f.length&&f.unshift(u);let m=f[0];if("function"===typeof l&&!l(s,[s]))continue;p=e[s];let d=r.getSpecification(s,n);d.ext&&(m=d.ext);let h=!1;"summaries"===n&&d.listWithKeys&&Array.isArray(p)&&p.length>0&&(p=p[0],h=!0);let x,O=null,j=[];if(i.isObject(d.items)){let t=p;d.listWithKeys&&(t=Object.values(t));let e=[];Array.isArray(t)?e=i.keysFromListOfObjects(t):i.isObject(t)&&(e=Object.keys(t)),O={},j=d.itemOrder.filter((t=>e.includes(t))),e.forEach((t=>{"undefined"===typeof d.items[t]?(O[t]={label:i.formatKey(t),explain:t},j.push(t)):(O[t]=Object.assign({},d.items[t]),O[t].label=y(t,d.items[t]))}))}if("summaries"===n)if(!h&&i.isObject(p))x="undefined"!==typeof p.minimum&&"undefined"!==typeof p.minimum?o.formatExtent([p.minimum,p.maximum],s,d):a.object(p);else if(r.externalRenderer&&O){let n=h?Object.assign({},p):p.slice(0);for(let r in n){let s=i.isObject(n[r])?{}:[];for(let i in O)s[i]=b(n[r][i],i,t,e,O[i]);n[r]=s}}else Array.isArray(p)?x=i.toList(p,!d.custom&&!d.items,(n=>b(n,s,t,e,d))):console.warn(`Invalid summary value: ${p}`);"undefined"===typeof x&&(x=b(p,s,t,e,d,l,[s])),i.isObject(c[m])||(c[m]={extension:m,label:g(m),properties:{}}),c[m].properties[s]={label:y(s,d),value:p,formatted:x,items:O,itemOrder:j,spec:d}}catch(f){console.error(`Field '${s}' with value '${p}' resulted in an error`,f)}}return Object.values(c).sort(((t,e)=>t.extension.localeCompare(e.extension,s.locales)))}function u(t,e,n=null,r=""){return l(e,t,"assets",n,r)}function c(t,e,n=null,r=""){return l(e,t,"links",n,r)}function f(t,e,n=null,r=""){return l(e,t,"providers",n,r)}function p(t,e=null,n=""){return l(t,t.summaries,"summaries",e,n)}function m(t,e=null,n=""){return l(t,t,"collection",e,n)}function d(t,e=null,n=""){return l(t,t,"catalog",e,n)}function h(t,e=null,n=""){return l(t,t.properties,"metadata",e,n)}function b(t,e,n=null,s=null,l=null,u=null,c=[]){if(i.isObject(l)||(l=r.getSpecification(e)),"string"===typeof l.format){let r=o[`format${l.format}`];return r||console.warn(`Formatter '${l.format}' not available.`),r(t,e,l,n,s)}if("function"===typeof l.formatter)return l.formatter(t,e,l,n,s);if(i.isObject(l.mapping)){let e=String(t);return"undefined"!==typeof l.mapping[e]?t=l.mapping[e]:"undefined"!==typeof l.mapping[e.toLowerCase()]?t=l.mapping[e.toLowerCase()]:"undefined"!==typeof l.mapping[e.toUpperCase()]&&(t=l.mapping[e.toUpperCase()]),a.format(i.t(t),l.unit)}if(null===t&&l.null)return a.null(l.null);if(Array.isArray(t)){let a=(t,r)=>b(t,e,n,s,l,u,c.concat([r]));return"function"===typeof u&&c.length>0&&(t=t.filter(((t,e)=>u(c[0],c.concat([e]))))),r.externalRenderer&&(l.custom||l.items)?t.map(a):i.toList(t,!1,a)}if(i.isObject(t)){let e=t=>i.isObject(l.items)?l.listWithKeys?{items:l.items}:l.items[t]:i.isObject(l.properties)?l.properties[t]:{},s=(t,r,i)=>b(t,r,n,i,e(r),u,c.concat([r]));if(r.externalRenderer&&(l.custom||l.items||l.properties)){let e={};for(let n in t)"function"===typeof u&&c.length>0&&!u(c[0],c.concat([k]))||(e[n]=s(t[n],n,t));return e}{let n=t=>y(t,e(t));return i.toObject(t,s,n,l.itemOrder,u,c)}}return a.format(t,l.unit)}function y(t,e=null){if(i.isObject(e)||(e=r.getSpecification(t)),i.isObject(e)&&"string"===typeof e.label){if("string"===typeof e.explain)return e.explain.match(/^https?:\/\//i)?i.toLink(e.explain,i.t(e.label),"about"):i.abbrev(i.t(e.label),i.t(e.explain));if("string"===typeof e.label)return i.t(e.label)}return i.formatKey(t)}function g(t){return y(t,r.getExtension(t))}t.exports={format:b,label:y,extension:g,formatCatalog:d,formatCollection:m,formatSummaries:p,formatItemProperties:h,formatAsset:u,formatLink:c,formatProvider:f,formatGrouped:l}},35101:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"chart mb-4"},[e(t.component,{tag:"component",attrs:{data:t.chartData,options:t.allOptions}})],1)},i=[],s=(n(70560),n(19263)),a=n(7651),o=n(35834),l=n(79879),u=n(32005),c=n(65750);c.kL.register(c.Dx,c.u,c.wL,c.qi,c.ZL,c.uw,c.f$);var f={name:"StatsChart",components:{Bar:u.$Q,Pie:u.by},props:{data:{type:Object,required:!0},type:{type:String,required:!0},count:{type:Number,required:!0},options:{type:Object,default:()=>({})}},computed:{component(){switch(this.type){case"versions":return"Pie";default:return"Bar"}},title(){switch(this.type){case"versions":return this.$t("source.stacVersion");case"extensions":return this.$t("source.stacExtension");case"assets":return this.$t("source.fileFormat");default:return""}},allOptions(){let t={responsive:!0,plugins:{title:{display:!0,text:this.title}},scales:{y:{min:0,max:this.count,title:{display:!1}}}};return Object.assign(t,this.options)},chartData(){let t=[],e=[];for(let n in this.data){let r,i=this.data[n];switch(e.push(i),this.type){case"extensions":{let t=this.parseExtension(n);r=`${t.title}`,t.version&&(r+=` (${t.version})`);break}case"assets":r=(0,o.formatMediaType)(n);break;default:r=n}t.push(r)}return{labels:t,datasets:[{data:e}]}}},methods:{parseExtension(t){let e=null,n=t,r=t.match(/^https?:\/\/stac-extensions\.github\.io\/([^/]+)\/v?([^/]+)(?:\/([^/.]+))?\/schema/);return r?(e=r[2],n=(0,a.extension)(r[1]),r[3]&&(n+=" - "+(0,s.formatKey)(r[3]))):(n=t.replace(/^https?:\/\/(www.)?/,"").replace(/\/schema(\.json)?$/,""),n=l.ZP.shortenTitle(n,30)),{title:n,version:e}}}},p=f,m=n(1001),d=(0,m.Z)(p,r,i,!1,null,null,null),h=d.exports}}]);
//# sourceMappingURL=5101.0100dee1.js.map