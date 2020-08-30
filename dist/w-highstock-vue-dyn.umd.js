/*!
 * w-highstock-vue-dyn v1.4.16
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-highstock-vue-dyn"]=e(t.Vue)}(this,(function(t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var e=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t};var n=function(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return e}}();var r=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var a=i((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e})),u="object"==a(o)&&o&&o.Object===Object&&o,c="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),f=s.Symbol,l=Object.prototype,v=l.hasOwnProperty,d=l.toString,p=f?f.toStringTag:void 0;var h=function(t){var e=v.call(t,p),n=t[p];try{t[p]=void 0;var r=!0}catch(t){}var o=d.call(t);return r&&(e?t[p]=n:delete t[p]),o},y=Object.prototype.toString;var b=function(t){return y.call(t)},m=f?f.toStringTag:void 0;var g=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?h(t):b(t)};var _=function(t){return null!=t&&"object"==a(t)};var j=function(t){return _(t)&&"[object Arguments]"==g(t)},w=Object.prototype,O=w.hasOwnProperty,S=w.propertyIsEnumerable,A=j(function(){return arguments}())?j:function(t){return _(t)&&O.call(t,"callee")&&!S.call(t,"callee")},k=Array.isArray;var x=function(){return!1},M=i((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?s.Buffer:void 0,i=(o?o.isBuffer:void 0)||x;t.exports=i})),T=/^(?:0|[1-9]\d*)$/;var N=function(t,e){var n=a(t);return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&T.test(t))&&t>-1&&t%1==0&&t<e};var Y=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},z={};z["[object Float32Array]"]=z["[object Float64Array]"]=z["[object Int8Array]"]=z["[object Int16Array]"]=z["[object Int32Array]"]=z["[object Uint8Array]"]=z["[object Uint8ClampedArray]"]=z["[object Uint16Array]"]=z["[object Uint32Array]"]=!0,z["[object Arguments]"]=z["[object Array]"]=z["[object ArrayBuffer]"]=z["[object Boolean]"]=z["[object DataView]"]=z["[object Date]"]=z["[object Error]"]=z["[object Function]"]=z["[object Map]"]=z["[object Number]"]=z["[object Object]"]=z["[object RegExp]"]=z["[object Set]"]=z["[object String]"]=z["[object WeakMap]"]=!1;var C=function(t){return _(t)&&Y(t.length)&&!!z[g(t)]};var E=function(t){return function(e){return t(e)}},P=i((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&u.process,i=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),I=P&&P.isTypedArray,$=I?E(I):C,F=Object.prototype.hasOwnProperty;var L=function(t,e){var n=k(t),o=!n&&A(t),i=!n&&!o&&M(t),a=!n&&!o&&!i&&$(t),u=n||o||i||a,c=u?r(t.length,String):[],s=c.length;for(var f in t)!e&&!F.call(t,f)||u&&("length"==f||i&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||N(f,s))||c.push(f);return c},H=Object.prototype;var R=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||H)};var V=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),D=Object.prototype.hasOwnProperty;var B=function(t){if(!R(t))return V(t);var e=[];for(var n in Object(t))D.call(t,n)&&"constructor"!=n&&e.push(n);return e};var U=function(t){var e=a(t);return null!=t&&("object"==e||"function"==e)};var G=function(t){if(!U(t))return!1;var e=g(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var W=function(t){return null!=t&&Y(t.length)&&!G(t)};var q=function(t){return W(t)?L(t):B(t)};var X=function(t,e){return function(n,r){if(null==n)return n;if(!W(n))return t(n,r);for(var o=n.length,i=e?o:-1,a=Object(n);(e?i--:++i<o)&&!1!==r(a[i],i,a););return n}}((function(t,e){return t&&n(t,e,q)}));var J=function(t){return t};var Z=function(t){return"function"==typeof t?t:J};var K=function(t,n){return(k(t)?e:X)(t,Z(n))};var Q=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var tt=function(){this.__data__=[],this.size=0};var et=function(t,e){return t===e||t!=t&&e!=e};var nt=function(t,e){for(var n=t.length;n--;)if(et(t[n][0],e))return n;return-1},rt=Array.prototype.splice;var ot=function(t){var e=this.__data__,n=nt(e,t);return!(n<0)&&(n==e.length-1?e.pop():rt.call(e,n,1),--this.size,!0)};var it=function(t){var e=this.__data__,n=nt(e,t);return n<0?void 0:e[n][1]};var at=function(t){return nt(this.__data__,t)>-1};var ut=function(t,e){var n=this.__data__,r=nt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ct.prototype.clear=tt,ct.prototype.delete=ot,ct.prototype.get=it,ct.prototype.has=at,ct.prototype.set=ut;var st=ct;var ft=function(){this.__data__=new st,this.size=0};var lt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var vt=function(t){return this.__data__.get(t)};var dt,pt=function(t){return this.__data__.has(t)},ht=s["__core-js_shared__"],yt=(dt=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||""))?"Symbol(src)_1."+dt:"";var bt=function(t){return!!yt&&yt in t},mt=Function.prototype.toString;var gt=function(t){if(null!=t){try{return mt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},_t=/^\[object .+?Constructor\]$/,jt=Function.prototype,wt=Object.prototype,Ot=jt.toString,St=wt.hasOwnProperty,At=RegExp("^"+Ot.call(St).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var kt=function(t){return!(!U(t)||bt(t))&&(G(t)?At:_t).test(gt(t))};var xt=function(t,e){return null==t?void 0:t[e]};var Mt=function(t,e){var n=xt(t,e);return kt(n)?n:void 0},Tt=Mt(s,"Map"),Nt=Mt(Object,"create");var Yt=function(){this.__data__=Nt?Nt(null):{},this.size=0};var zt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ct=Object.prototype.hasOwnProperty;var Et=function(t){var e=this.__data__;if(Nt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Ct.call(e,t)?e[t]:void 0},Pt=Object.prototype.hasOwnProperty;var It=function(t){var e=this.__data__;return Nt?void 0!==e[t]:Pt.call(e,t)};var $t=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Nt&&void 0===e?"__lodash_hash_undefined__":e,this};function Ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ft.prototype.clear=Yt,Ft.prototype.delete=zt,Ft.prototype.get=Et,Ft.prototype.has=It,Ft.prototype.set=$t;var Lt=Ft;var Ht=function(){this.size=0,this.__data__={hash:new Lt,map:new(Tt||st),string:new Lt}};var Rt=function(t){var e=a(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return Rt(e)?n["string"==typeof e?"string":"hash"]:n.map};var Dt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e};var Bt=function(t){return Vt(this,t).get(t)};var Ut=function(t){return Vt(this,t).has(t)};var Gt=function(t,e){var n=Vt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Wt.prototype.clear=Ht,Wt.prototype.delete=Dt,Wt.prototype.get=Bt,Wt.prototype.has=Ut,Wt.prototype.set=Gt;var qt=Wt;var Xt=function(t,e){var n=this.__data__;if(n instanceof st){var r=n.__data__;if(!Tt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new qt(r)}return n.set(t,e),this.size=n.size,this};function Jt(t){var e=this.__data__=new st(t);this.size=e.size}Jt.prototype.clear=ft,Jt.prototype.delete=lt,Jt.prototype.get=vt,Jt.prototype.has=pt,Jt.prototype.set=Xt;var Zt=Jt;var Kt=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var Qt=function(t){return this.__data__.has(t)};function te(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new qt;++e<n;)this.add(t[e])}te.prototype.add=te.prototype.push=Kt,te.prototype.has=Qt;var ee=te;var ne=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1};var re=function(t,e){return t.has(e)};var oe=function(t,e,n,r,o,i){var a=1&n,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var s=i.get(t),f=i.get(e);if(s&&f)return s==e&&f==t;var l=-1,v=!0,d=2&n?new ee:void 0;for(i.set(t,e),i.set(e,t);++l<u;){var p=t[l],h=e[l];if(r)var y=a?r(h,p,l,e,t,i):r(p,h,l,t,e,i);if(void 0!==y){if(y)continue;v=!1;break}if(d){if(!ne(e,(function(t,e){if(!re(d,e)&&(p===t||o(p,t,n,r,i)))return d.push(e)}))){v=!1;break}}else if(p!==h&&!o(p,h,n,r,i)){v=!1;break}}return i.delete(t),i.delete(e),v},ie=s.Uint8Array;var ae=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};var ue=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},ce=f?f.prototype:void 0,se=ce?ce.valueOf:void 0;var fe=function(t,e,n,r,o,i,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new ie(t),new ie(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return et(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=ae;case"[object Set]":var c=1&r;if(u||(u=ue),t.size!=e.size&&!c)return!1;var s=a.get(t);if(s)return s==e;r|=2,a.set(t,e);var f=oe(u(t),u(e),r,o,i,a);return a.delete(t),f;case"[object Symbol]":if(se)return se.call(t)==se.call(e)}return!1};var le=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};var ve=function(t,e,n){var r=e(t);return k(t)?r:le(r,n(t))};var de=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i};var pe=function(){return[]},he=Object.prototype.propertyIsEnumerable,ye=Object.getOwnPropertySymbols,be=ye?function(t){return null==t?[]:(t=Object(t),de(ye(t),(function(e){return he.call(t,e)})))}:pe;var me=function(t){return ve(t,q,be)},ge=Object.prototype.hasOwnProperty;var _e=function(t,e,n,r,o,i){var a=1&n,u=me(t),c=u.length;if(c!=me(e).length&&!a)return!1;for(var s=c;s--;){var f=u[s];if(!(a?f in e:ge.call(e,f)))return!1}var l=i.get(t),v=i.get(e);if(l&&v)return l==e&&v==t;var d=!0;i.set(t,e),i.set(e,t);for(var p=a;++s<c;){var h=t[f=u[s]],y=e[f];if(r)var b=a?r(y,h,f,e,t,i):r(h,y,f,t,e,i);if(!(void 0===b?h===y||o(h,y,n,r,i):b)){d=!1;break}p||(p="constructor"==f)}if(d&&!p){var m=t.constructor,g=e.constructor;m==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof m&&m instanceof m&&"function"==typeof g&&g instanceof g||(d=!1)}return i.delete(t),i.delete(e),d},je=Mt(s,"DataView"),we=Mt(s,"Promise"),Oe=Mt(s,"Set"),Se=Mt(s,"WeakMap"),Ae=gt(je),ke=gt(Tt),xe=gt(we),Me=gt(Oe),Te=gt(Se),Ne=g;(je&&"[object DataView]"!=Ne(new je(new ArrayBuffer(1)))||Tt&&"[object Map]"!=Ne(new Tt)||we&&"[object Promise]"!=Ne(we.resolve())||Oe&&"[object Set]"!=Ne(new Oe)||Se&&"[object WeakMap]"!=Ne(new Se))&&(Ne=function(t){var e=g(t),n="[object Object]"==e?t.constructor:void 0,r=n?gt(n):"";if(r)switch(r){case Ae:return"[object DataView]";case ke:return"[object Map]";case xe:return"[object Promise]";case Me:return"[object Set]";case Te:return"[object WeakMap]"}return e});var Ye=Ne,ze=Object.prototype.hasOwnProperty;var Ce=function(t,e,n,r,o,i){var a=k(t),u=k(e),c=a?"[object Array]":Ye(t),s=u?"[object Array]":Ye(e),f="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),l="[object Object]"==(s="[object Arguments]"==s?"[object Object]":s),v=c==s;if(v&&M(t)){if(!M(e))return!1;a=!0,f=!1}if(v&&!f)return i||(i=new Zt),a||$(t)?oe(t,e,n,r,o,i):fe(t,e,c,n,r,o,i);if(!(1&n)){var d=f&&ze.call(t,"__wrapped__"),p=l&&ze.call(e,"__wrapped__");if(d||p){var h=d?t.value():t,y=p?e.value():e;return i||(i=new Zt),o(h,y,n,r,i)}}return!!v&&(i||(i=new Zt),_e(t,e,n,r,o,i))};var Ee=function t(e,n,r,o,i){return e===n||(null==e||null==n||!_(e)&&!_(n)?e!=e&&n!=n:Ce(e,n,r,o,t,i))};var Pe=function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],s=t[c],f=u[1];if(a&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new Zt;if(r)var v=r(s,f,c,t,e,l);if(!(void 0===v?Ee(f,s,3,r,l):v))return!1}}return!0};var Ie=function(t){return t==t&&!U(t)};var $e=function(t){for(var e=q(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,Ie(o)]}return e};var Fe=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};var Le=function(t){var e=$e(t);return 1==e.length&&e[0][2]?Fe(e[0][0],e[0][1]):function(n){return n===t||Pe(n,t,e)}};var He=function(t){return"symbol"==a(t)||_(t)&&"[object Symbol]"==g(t)},Re=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ve=/^\w*$/;var De=function(t,e){if(k(t))return!1;var n=a(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!He(t))||(Ve.test(t)||!Re.test(t)||null!=e&&t in Object(e))};function Be(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Be.Cache||qt),n}Be.Cache=qt;var Ue=Be;var Ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,We=/\\(\\)?/g,qe=function(t){var e=Ue(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Ge,(function(t,n,r,o){e.push(r?o.replace(We,"$1"):n||t)})),e})),Xe=f?f.prototype:void 0,Je=Xe?Xe.toString:void 0;var Ze=function t(e){if("string"==typeof e)return e;if(k(e))return Q(e,t)+"";if(He(e))return Je?Je.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var Ke=function(t){return null==t?"":Ze(t)};var Qe=function(t,e){return k(t)?t:De(t,e)?[t]:qe(Ke(t))};var tn=function(t){if("string"==typeof t||He(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var en=function(t,e){for(var n=0,r=(e=Qe(e,t)).length;null!=t&&n<r;)t=t[tn(e[n++])];return n&&n==r?t:void 0};var nn=function(t,e,n){var r=null==t?void 0:en(t,e);return void 0===r?n:r};var rn=function(t,e){return null!=t&&e in Object(t)};var on=function(t,e,n){for(var r=-1,o=(e=Qe(e,t)).length,i=!1;++r<o;){var a=tn(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Y(o)&&N(a,o)&&(k(t)||A(t))};var an=function(t,e){return null!=t&&on(t,e,rn)};var un=function(t,e){return De(t)&&Ie(e)?Fe(tn(t),e):function(n){var r=nn(n,t);return void 0===r&&r===e?an(n,t):Ee(e,r,3)}};var cn=function(t){return function(e){return null==e?void 0:e[t]}};var sn=function(t){return function(e){return en(e,t)}};var fn=function(t){return De(t)?cn(tn(t)):sn(t)};var ln=function(t){return"function"==typeof t?t:null==t?J:"object"==a(t)?k(t)?un(t[0],t[1]):Le(t):fn(t)};var vn=function(t,e){var n=-1,r=W(t)?Array(t.length):[];return X(t,(function(t,o,i){r[++n]=e(t,o,i)})),r};var dn=function(t,e){return(k(t)?Q:vn)(t,ln(e))},pn=Array.prototype.join;var hn=function(t,e){return null==t?"":pn.call(t,e)};function yn(t){return"[object Array]"===Object.prototype.toString.call(t)}function bn(t){return"[object String]"===Object.prototype.toString.call(t)}function mn(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function gn(){var t,e,n=new Promise((function(){t=arguments[0],e=arguments[1]}));return n.resolve=t,n.reject=e,n}var _n=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i},jn=/^\s+|\s+$/g,wn=/^[-+]0x[0-9a-f]+$/i,On=/^0b[01]+$/i,Sn=/^0o[0-7]+$/i,An=parseInt;var kn=function(t){if("number"==typeof t)return t;if(He(t))return NaN;if(U(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=U(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(jn,"");var n=On.test(t);return n||Sn.test(t)?An(t.slice(2),n?2:8):wn.test(t)?NaN:+t};var xn=function(t){return t?Infinity===(t=kn(t))||-Infinity===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Mn=function(t){var e=xn(t),n=e%1;return e==e?n?e-n:e:0};var Tn=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||void 0===e?1:Mn(e),_n(t,e<0?0:e,r)):[]};var Nn=function(t){return"number"==typeof t&&t==Mn(t)};function Yn(t){return!(!bn(t)||""===t)}function zn(t){var e=!1;return Yn(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function Cn(t){return zn(t)?xn(t):0}var En=s.isFinite,Pn=Math.min;var In=function(t){var e=Math[t];return function(t,n){if(t=kn(t),(n=null==n?0:Pn(Mn(n),292))&&En(t)){var r=(Ke(t)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+n));return+((r=(Ke(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}("round");function $n(t){return!!function(t){return!!zn(t)&&(t=Cn(t),Nn(t))}(t)&&function(t){if(!zn(t))return 0;t=Cn(t);var e=In(t);return"0"===String(e)?0:e}(t)>0}function Fn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=gn();if(!mn(t))return n.reject("waitfunction需輸入函數f"),n;if(!0===t())return n.resolve(),n;var r=nn(e,"attemptNum",null);$n(r)||(r=200);var o=nn(e,"timeInterval",null);$n(o)||(o=1e3);var i=0,a=setInterval((function(){i+=1,!0===t()&&(clearInterval(a),n.resolve()),i>r&&(clearInterval(a),n.resolve())}),o);return n}function Ln(t,e){if(!Yn(t))return"";if(!$n(e))return"";var n=t.length-e;return n<0&&(n=0),t.substr(n,e)}var Hn={},Rn={};function Vn(t){var e=t.tagName,n=t.path,r=t.attributes,o=void 0===r?{}:r,i=t.func,a=gn();if("done"===Hn[n])return a.resolve("loaded"),a;if("loading"===Hn[n])return Fn((function(){return"done"===Hn[n]})).then((function(){a.resolve("loaded")})),a;Hn[n]="loading";var u=document.createElement(e);return K(o,(function(t,e){u.setAttribute(e,t)})),o.rel&&"stylesheet"===o.rel?(u.setAttribute("href",n),setTimeout((function(){a.resolve(u),Hn[n]="done"}),1)):(u.src=n,u.addEventListener("load",(function(){var t;mn(i)?t=Fn(i):(t=gn()).resolve(),t.then((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;zn(t)||(t=10);var e=gn();return setTimeout((function(){e.resolve()}),t),e}(500)})).then((function(){a.resolve(u),Hn[n]="done"}))})),u.addEventListener("error",(function(){a.reject(u),Hn[n]="done"}))),document.getElementsByTagName("head")[0].appendChild(u),a}function Dn(t){var e=gn();yn(t)||(t=[t]),K(t,(function(e,n){bn(e)&&(t[n]={path:e})}));var n=hn(dn(t,"path"),"|");return"done"===Rn[n]?(e.resolve("loaded"),e):"loading"===Rn[n]?(Fn((function(){return"done"===Rn[n]})).then((function(){e.resolve("loaded")})),e):(Rn[n]="loading",K(t,(function(t,e){t.type||(".js"===Ln(t.path,3)?t.type="js":".css"===Ln(t.path,4)?t.type="css":t.type="unknow")})),function(t,e){var n=gn();if(!yn(t))return n.reject("rs is not array"),n;mn(e)||(e=function(t){return t});var r=-1,o=[];return t.reduce((function(t,n){return t.then((function(t){return o.push(t),r+=1,mn(e)?e(n,r):n}))}),Promise.resolve()).then((function(t){o.push(t),o=Tn(o),n.resolve(o)})).catch((function(t){n.reject(t)})),n}(t,(function(t){var e=gn();if("js"===t.type)e=Vn({tagName:"script",path:t.path,attributes:{type:"text/javascript"},func:t.func});else if("css"===t.type)e=Vn({tagName:"link",path:t.path,attributes:{rel:"stylesheet"}});else{var n="invalid pathItem.type: "+t.type;console.log(n),e.reject(n)}return e})).finally((function(){Rn[n]="done"})))}var Bn={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};function Un(t,e,n,r,o,i,a,u,c,s){"boolean"!=typeof a&&(c=u,u=a,a=!1);var f,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=f):e&&(f=a?function(t){e.call(this,s(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),f)if(l.functional){var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,f):[f]}return n}var Gn,Wn="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function qn(t){return function(t,e){return function(t,e){var n=Wn?e.media||"default":t,r=Xn[n]||(Xn[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===Gn&&(Gn=document.head||document.getElementsByTagName("head")[0]),Gn.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),u=r.element.childNodes;u[i]&&r.element.removeChild(u[i]),u.length?r.element.insertBefore(a,u[i]):r.element.appendChild(a)}}}(t,e)}}var Xn={};const Jn=Bn;var Zn=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"inline-block"}},["cir1"===this.name?[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:this.size,height:this.size}},[e("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),this._v(" "),e("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:this._e()],2)};Zn._withStripped=!0;const Kn=Un({render:Zn,staticRenderFns:[]},(function(t){t&&t("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),Jn,"data-v-619e545c",false,undefined,!1,qn,void 0,void 0);function Qn(){return"undefined"!=typeof self?self:"undefined"!=typeof window&&void 0!==window.document?window:"undefined"!=typeof global?global:null}t&&!window.Vue&&(window.Vue=t);const tr={components:{WIconLoading:Kn},props:{pathItems:{type:Array,default:function(){return["https://cdn.jsdelivr.net/npm/highcharts@8.0.0/highcharts.js","https://cdn.jsdelivr.net/npm/highcharts@8.0.0/modules/stock.js","https://cdn.jsdelivr.net/npm/vue-highcharts@0.1.0/dist/vue-highcharts.min.js"]}},options:{type:Object,default:function(){}}},data:function(){return{cmpName:"WIconLoading"}},mounted:function(){var e=this;Dn(e.pathItems).then((function(n){if("loaded"!==n){window.Highcharts.setOptions({credits:{enabled:!1},global:{useUTC:!1},lang:{decimalPoint:".",thousandsSep:",",contextButtonTitle:"圖表匯出功能表",downloadJPEG:"下載 JPEG 圖片",downloadPDF:"下載 PDF 文件",downloadPNG:"下載 PNG 文件",downloadSVG:"下載 SVG 文件",downloadXLS:"下載 XLS 文件",openInCloud:"在 Highcharts Cloud 中打開",drillUpText:"返回 {series.name}",invalidDate:"無效的時間",loading:"載入中...",months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],noData:"沒有資料",printChart:"列印圖表",resetZoom:"重置縮放比例",resetZoomTitle:"重置為原始大小",shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],weekdays:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],viewData:"查看資料",rangeSelectorFrom:"開始時間",rangeSelectorTo:"結束時間",rangeSelectorZoom:"範圍",zoomIn:"縮小",zoomOut:"放大"},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y/%m/%d",week:"%Y/%m/%d",month:"%Y/%m",year:"%Y"}},xAxis:{dateTimeLabelFormats:{second:"%Y<br/>%m/%d",minute:"%Y<br/>%m/%d",hour:"%Y<br/>%m/%d",day:"%Y<br/>%m/%d",week:"%Y<br/>%m/%d",month:"%Y<br/>%m/%d",year:"%Y<br/>%m/%d"}},rangeSelector:{enabled:!1},plotOptions:{series:{dataGrouping:{dateTimeLabelFormats:{millisecond:["%Y/%m/%d %H:%M:%S.%L","%Y/%m/%d %H:%M:%S.%L"," ~ %H:%M:%S.%L"],second:["%Y/%m/%d %H:%M:%S","%Y/%m/%d %H:%M:%S"," ~ %H:%M:%S"],minute:["%Y/%m/%d %H:%M","%Y/%m/%d %H:%M"," ~ %H:%M"],hour:["%Y/%m/%d %H:%M","%Y/%m/%d %H:%M"," ~ %H:%M"],day:["%Y/%m/%d","%Y/%m/%d"," ~ %Y/%m/%d"],week:["%Y/%m/%d","%Y/%m/%d"," ~ %Y/%m/%d"],month:["%Y/%m","%Y/%m"," ~ %Y/%m"],year:["%Y","%Y"," ~ %Y"]}}}}});var r=window.VueHighcharts;r.default&&(r=r.default),(o=Qn(),t||o.Vue).use(r)}var o;e.cmpName="Highstock"}))},computed:{},methods:{}};var er=function(){var t=this.$createElement;return(this._self._c||t)(this.cmpName,{ref:"$self",tag:"component",attrs:{options:this.options}})};er._withStripped=!0;return Un({render:er,staticRenderFns:[]},(function(t){t&&t("data-v-61c337be_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WHighstockVueDyn.vue"},media:void 0})}),tr,"data-v-61c337be",false,undefined,!1,qn,void 0,void 0)}));
//# sourceMappingURL=w-highstock-vue-dyn.umd.js.map
