(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[7191],{8162:function(r,e,t){"use strict";var n=t(9509).Buffer;function o(r){if(r.length>=255)throw new TypeError("Alphabet too long");for(var e=new Uint8Array(256),t=0;t<e.length;t++)e[t]=255;for(var o=0;o<r.length;o++){var a=r.charAt(o),f=a.charCodeAt(0);if(255!==e[f])throw new TypeError(a+" is ambiguous");e[f]=o}var i=r.length,u=r.charAt(0),l=Math.log(i)/Math.log(256),c=Math.log(256)/Math.log(i);function h(e){if((Array.isArray(e)||e instanceof Uint8Array)&&(e=n.from(e)),!n.isBuffer(e))throw new TypeError("Expected Buffer");if(0===e.length)return"";var t=0,o=0,a=0,f=e.length;while(a!==f&&0===e[a])a++,t++;var l=(f-a)*c+1>>>0,h=new Uint8Array(l);while(a!==f){for(var w=e[a],s=0,p=l-1;(0!==w||s<o)&&-1!==p;p--,s++)w+=256*h[p]>>>0,h[p]=w%i>>>0,w=w/i>>>0;if(0!==w)throw new Error("Non-zero carry");o=s,a++}var y=l-o;while(y!==l&&0===h[y])y++;for(var v=u.repeat(t);y<l;++y)v+=r.charAt(h[y]);return v}function w(r){if("string"!==typeof r)throw new TypeError("Expected String");if(0===r.length)return n.alloc(0);var t=0,o=0,a=0;while(r[t]===u)o++,t++;var f=(r.length-t)*l+1>>>0,c=new Uint8Array(f);while(r[t]){var h=e[r.charCodeAt(t)];if(255===h)return;for(var w=0,s=f-1;(0!==h||w<a)&&-1!==s;s--,w++)h+=i*c[s]>>>0,c[s]=h%256>>>0,h=h/256>>>0;if(0!==h)throw new Error("Non-zero carry");a=w,t++}var p=f-a;while(p!==f&&0===c[p])p++;var y=n.allocUnsafe(o+(f-p));y.fill(0,0,o);var v=o;while(p!==f)y[v++]=c[p++];return y}function s(r){var e=w(r);if(e)return e;throw new Error("Non-base"+i+" character")}return{encode:h,decodeUnsafe:w,decode:s}}r.exports=o},7191:function(r,e,t){var n=t(8162),o="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";r.exports=n(o)},9509:function(r,e,t){
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var n=t(8764),o=n.Buffer;function a(r,e){for(var t in r)e[t]=r[t]}function f(r,e,t){return o(r,e,t)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?r.exports=n:(a(n,e),e.Buffer=f),f.prototype=Object.create(o.prototype),a(o,f),f.from=function(r,e,t){if("number"===typeof r)throw new TypeError("Argument must not be a number");return o(r,e,t)},f.alloc=function(r,e,t){if("number"!==typeof r)throw new TypeError("Argument must be a number");var n=o(r);return void 0!==e?"string"===typeof t?n.fill(e,t):n.fill(e):n.fill(0),n},f.allocUnsafe=function(r){if("number"!==typeof r)throw new TypeError("Argument must be a number");return o(r)},f.allocUnsafeSlow=function(r){if("number"!==typeof r)throw new TypeError("Argument must be a number");return n.SlowBuffer(r)}}}]);
//# sourceMappingURL=7191.482432bc.js.map