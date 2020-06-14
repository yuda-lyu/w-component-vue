/*!
 * w-highstock-vue-dyn v1.3.44
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t=t||self)["w-highstock-vue-dyn"]=e(t.Vue)}(this,(function(t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var e=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t};var n=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),u=i.length;u--;){var c=i[t?u:++o];if(!1===n(a[c],c,a))break}return e}}();var r=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t,e){return t(e={exports:{}},e.exports),e.exports}var i=a((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e})),u="object"==i(o)&&o&&o.Object===Object&&o,c="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),f=s.Symbol,l=Object.prototype,v=l.hasOwnProperty,d=l.toString,p=f?f.toStringTag:void 0;var h=function(t){var e=v.call(t,p),n=t[p];try{t[p]=void 0;var r=!0}catch(t){}var o=d.call(t);return r&&(e?t[p]=n:delete t[p]),o},y=Object.prototype.toString;var b=function(t){return y.call(t)},m=f?f.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?h(t):b(t)};var g=function(t){return null!=t&&"object"==i(t)};var j=function(t){return g(t)&&"[object Arguments]"==_(t)},w=Object.prototype,O=w.hasOwnProperty,S=w.propertyIsEnumerable,A=j(function(){return arguments}())?j:function(t){return g(t)&&O.call(t,"callee")&&!S.call(t,"callee")},k=Array.isArray;var x=function(){return!1},M=a((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?s.Buffer:void 0,a=(o?o.isBuffer:void 0)||x;t.exports=a})),T=/^(?:0|[1-9]\d*)$/;var Y=function(t,e){var n=i(t);return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&T.test(t))&&t>-1&&t%1==0&&t<e};var z=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},N={};N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N["[object Arguments]"]=N["[object Array]"]=N["[object ArrayBuffer]"]=N["[object Boolean]"]=N["[object DataView]"]=N["[object Date]"]=N["[object Error]"]=N["[object Function]"]=N["[object Map]"]=N["[object Number]"]=N["[object Object]"]=N["[object RegExp]"]=N["[object Set]"]=N["[object String]"]=N["[object WeakMap]"]=!1;var C=function(t){return g(t)&&z(t.length)&&!!N[_(t)]};var E=function(t){return function(e){return t(e)}},P=a((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&u.process,a=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),$=P&&P.isTypedArray,F=$?E($):C,L=Object.prototype.hasOwnProperty;var H=function(t,e){var n=k(t),o=!n&&A(t),a=!n&&!o&&M(t),i=!n&&!o&&!a&&F(t),u=n||o||a||i,c=u?r(t.length,String):[],s=c.length;for(var f in t)!e&&!L.call(t,f)||u&&("length"==f||a&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Y(f,s))||c.push(f);return c},I=Object.prototype;var R=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||I)};var V=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),B=Object.prototype.hasOwnProperty;var D=function(t){if(!R(t))return V(t);var e=[];for(var n in Object(t))B.call(t,n)&&"constructor"!=n&&e.push(n);return e};var U=function(t){var e=i(t);return null!=t&&("object"==e||"function"==e)};var G=function(t){if(!U(t))return!1;var e=_(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var W=function(t){return null!=t&&z(t.length)&&!G(t)};var X=function(t){return W(t)?H(t):D(t)};var q=function(t,e){return function(n,r){if(null==n)return n;if(!W(n))return t(n,r);for(var o=n.length,a=e?o:-1,i=Object(n);(e?a--:++a<o)&&!1!==r(i[a],a,i););return n}}((function(t,e){return t&&n(t,e,X)}));var J=function(t){return t};var Z=function(t){return"function"==typeof t?t:J};var K=function(t,n){return(k(t)?e:q)(t,Z(n))};var Q=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var tt=function(){this.__data__=[],this.size=0};var et=function(t,e){return t===e||t!=t&&e!=e};var nt=function(t,e){for(var n=t.length;n--;)if(et(t[n][0],e))return n;return-1},rt=Array.prototype.splice;var ot=function(t){var e=this.__data__,n=nt(e,t);return!(n<0)&&(n==e.length-1?e.pop():rt.call(e,n,1),--this.size,!0)};var at=function(t){var e=this.__data__,n=nt(e,t);return n<0?void 0:e[n][1]};var it=function(t){return nt(this.__data__,t)>-1};var ut=function(t,e){var n=this.__data__,r=nt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ct.prototype.clear=tt,ct.prototype.delete=ot,ct.prototype.get=at,ct.prototype.has=it,ct.prototype.set=ut;var st=ct;var ft=function(){this.__data__=new st,this.size=0};var lt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var vt=function(t){return this.__data__.get(t)};var dt,pt=function(t){return this.__data__.has(t)},ht=s["__core-js_shared__"],yt=(dt=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||""))?"Symbol(src)_1."+dt:"";var bt=function(t){return!!yt&&yt in t},mt=Function.prototype.toString;var _t=function(t){if(null!=t){try{return mt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},gt=/^\[object .+?Constructor\]$/,jt=Function.prototype,wt=Object.prototype,Ot=jt.toString,St=wt.hasOwnProperty,At=RegExp("^"+Ot.call(St).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var kt=function(t){return!(!U(t)||bt(t))&&(G(t)?At:gt).test(_t(t))};var xt=function(t,e){return null==t?void 0:t[e]};var Mt=function(t,e){var n=xt(t,e);return kt(n)?n:void 0},Tt=Mt(s,"Map"),Yt=Mt(Object,"create");var zt=function(){this.__data__=Yt?Yt(null):{},this.size=0};var Nt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ct=Object.prototype.hasOwnProperty;var Et=function(t){var e=this.__data__;if(Yt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Ct.call(e,t)?e[t]:void 0},Pt=Object.prototype.hasOwnProperty;var $t=function(t){var e=this.__data__;return Yt?void 0!==e[t]:Pt.call(e,t)};var Ft=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Yt&&void 0===e?"__lodash_hash_undefined__":e,this};function Lt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Lt.prototype.clear=zt,Lt.prototype.delete=Nt,Lt.prototype.get=Et,Lt.prototype.has=$t,Lt.prototype.set=Ft;var Ht=Lt;var It=function(){this.size=0,this.__data__={hash:new Ht,map:new(Tt||st),string:new Ht}};var Rt=function(t){var e=i(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return Rt(e)?n["string"==typeof e?"string":"hash"]:n.map};var Bt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e};var Dt=function(t){return Vt(this,t).get(t)};var Ut=function(t){return Vt(this,t).has(t)};var Gt=function(t,e){var n=Vt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Wt.prototype.clear=It,Wt.prototype.delete=Bt,Wt.prototype.get=Dt,Wt.prototype.has=Ut,Wt.prototype.set=Gt;var Xt=Wt;var qt=function(t,e){var n=this.__data__;if(n instanceof st){var r=n.__data__;if(!Tt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Xt(r)}return n.set(t,e),this.size=n.size,this};function Jt(t){var e=this.__data__=new st(t);this.size=e.size}Jt.prototype.clear=ft,Jt.prototype.delete=lt,Jt.prototype.get=vt,Jt.prototype.has=pt,Jt.prototype.set=qt;var Zt=Jt;var Kt=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var Qt=function(t){return this.__data__.has(t)};function te(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Xt;++e<n;)this.add(t[e])}te.prototype.add=te.prototype.push=Kt,te.prototype.has=Qt;var ee=te;var ne=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1};var re=function(t,e){return t.has(e)};var oe=function(t,e,n,r,o,a){var i=1&n,u=t.length,c=e.length;if(u!=c&&!(i&&c>u))return!1;var s=a.get(t);if(s&&a.get(e))return s==e;var f=-1,l=!0,v=2&n?new ee:void 0;for(a.set(t,e),a.set(e,t);++f<u;){var d=t[f],p=e[f];if(r)var h=i?r(p,d,f,e,t,a):r(d,p,f,t,e,a);if(void 0!==h){if(h)continue;l=!1;break}if(v){if(!ne(e,(function(t,e){if(!re(v,e)&&(d===t||o(d,t,n,r,a)))return v.push(e)}))){l=!1;break}}else if(d!==p&&!o(d,p,n,r,a)){l=!1;break}}return a.delete(t),a.delete(e),l},ae=s.Uint8Array;var ie=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};var ue=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},ce=f?f.prototype:void 0,se=ce?ce.valueOf:void 0;var fe=function(t,e,n,r,o,a,i){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new ae(t),new ae(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return et(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=ie;case"[object Set]":var c=1&r;if(u||(u=ue),t.size!=e.size&&!c)return!1;var s=i.get(t);if(s)return s==e;r|=2,i.set(t,e);var f=oe(u(t),u(e),r,o,a,i);return i.delete(t),f;case"[object Symbol]":if(se)return se.call(t)==se.call(e)}return!1};var le=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};var ve=function(t,e,n){var r=e(t);return k(t)?r:le(r,n(t))};var de=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a};var pe=function(){return[]},he=Object.prototype.propertyIsEnumerable,ye=Object.getOwnPropertySymbols,be=ye?function(t){return null==t?[]:(t=Object(t),de(ye(t),(function(e){return he.call(t,e)})))}:pe;var me=function(t){return ve(t,X,be)},_e=Object.prototype.hasOwnProperty;var ge=function(t,e,n,r,o,a){var i=1&n,u=me(t),c=u.length;if(c!=me(e).length&&!i)return!1;for(var s=c;s--;){var f=u[s];if(!(i?f in e:_e.call(e,f)))return!1}var l=a.get(t);if(l&&a.get(e))return l==e;var v=!0;a.set(t,e),a.set(e,t);for(var d=i;++s<c;){var p=t[f=u[s]],h=e[f];if(r)var y=i?r(h,p,f,e,t,a):r(p,h,f,t,e,a);if(!(void 0===y?p===h||o(p,h,n,r,a):y)){v=!1;break}d||(d="constructor"==f)}if(v&&!d){var b=t.constructor,m=e.constructor;b==m||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof m&&m instanceof m||(v=!1)}return a.delete(t),a.delete(e),v},je=Mt(s,"DataView"),we=Mt(s,"Promise"),Oe=Mt(s,"Set"),Se=Mt(s,"WeakMap"),Ae=_t(je),ke=_t(Tt),xe=_t(we),Me=_t(Oe),Te=_t(Se),Ye=_;(je&&"[object DataView]"!=Ye(new je(new ArrayBuffer(1)))||Tt&&"[object Map]"!=Ye(new Tt)||we&&"[object Promise]"!=Ye(we.resolve())||Oe&&"[object Set]"!=Ye(new Oe)||Se&&"[object WeakMap]"!=Ye(new Se))&&(Ye=function(t){var e=_(t),n="[object Object]"==e?t.constructor:void 0,r=n?_t(n):"";if(r)switch(r){case Ae:return"[object DataView]";case ke:return"[object Map]";case xe:return"[object Promise]";case Me:return"[object Set]";case Te:return"[object WeakMap]"}return e});var ze=Ye,Ne=Object.prototype.hasOwnProperty;var Ce=function(t,e,n,r,o,a){var i=k(t),u=k(e),c=i?"[object Array]":ze(t),s=u?"[object Array]":ze(e),f="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),l="[object Object]"==(s="[object Arguments]"==s?"[object Object]":s),v=c==s;if(v&&M(t)){if(!M(e))return!1;i=!0,f=!1}if(v&&!f)return a||(a=new Zt),i||F(t)?oe(t,e,n,r,o,a):fe(t,e,c,n,r,o,a);if(!(1&n)){var d=f&&Ne.call(t,"__wrapped__"),p=l&&Ne.call(e,"__wrapped__");if(d||p){var h=d?t.value():t,y=p?e.value():e;return a||(a=new Zt),o(h,y,n,r,a)}}return!!v&&(a||(a=new Zt),ge(t,e,n,r,o,a))};var Ee=function t(e,n,r,o,a){return e===n||(null==e||null==n||!g(e)&&!g(n)?e!=e&&n!=n:Ce(e,n,r,o,t,a))};var Pe=function(t,e,n,r){var o=n.length,a=o,i=!r;if(null==t)return!a;for(t=Object(t);o--;){var u=n[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=n[o])[0],s=t[c],f=u[1];if(i&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new Zt;if(r)var v=r(s,f,c,t,e,l);if(!(void 0===v?Ee(f,s,3,r,l):v))return!1}}return!0};var $e=function(t){return t==t&&!U(t)};var Fe=function(t){for(var e=X(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,$e(o)]}return e};var Le=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};var He=function(t){var e=Fe(t);return 1==e.length&&e[0][2]?Le(e[0][0],e[0][1]):function(n){return n===t||Pe(n,t,e)}};var Ie=function(t){return"symbol"==i(t)||g(t)&&"[object Symbol]"==_(t)},Re=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ve=/^\w*$/;var Be=function(t,e){if(k(t))return!1;var n=i(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Ie(t))||(Ve.test(t)||!Re.test(t)||null!=e&&t in Object(e))};function De(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(De.Cache||Xt),n}De.Cache=Xt;var Ue=De;var Ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,We=/\\(\\)?/g,Xe=function(t){var e=Ue(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Ge,(function(t,n,r,o){e.push(r?o.replace(We,"$1"):n||t)})),e})),qe=f?f.prototype:void 0,Je=qe?qe.toString:void 0;var Ze=function t(e){if("string"==typeof e)return e;if(k(e))return Q(e,t)+"";if(Ie(e))return Je?Je.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var Ke=function(t){return null==t?"":Ze(t)};var Qe=function(t,e){return k(t)?t:Be(t,e)?[t]:Xe(Ke(t))};var tn=function(t){if("string"==typeof t||Ie(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var en=function(t,e){for(var n=0,r=(e=Qe(e,t)).length;null!=t&&n<r;)t=t[tn(e[n++])];return n&&n==r?t:void 0};var nn=function(t,e,n){var r=null==t?void 0:en(t,e);return void 0===r?n:r};var rn=function(t,e){return null!=t&&e in Object(t)};var on=function(t,e,n){for(var r=-1,o=(e=Qe(e,t)).length,a=!1;++r<o;){var i=tn(e[r]);if(!(a=null!=t&&n(t,i)))break;t=t[i]}return a||++r!=o?a:!!(o=null==t?0:t.length)&&z(o)&&Y(i,o)&&(k(t)||A(t))};var an=function(t,e){return null!=t&&on(t,e,rn)};var un=function(t,e){return Be(t)&&$e(e)?Le(tn(t),e):function(n){var r=nn(n,t);return void 0===r&&r===e?an(n,t):Ee(e,r,3)}};var cn=function(t){return function(e){return null==e?void 0:e[t]}};var sn=function(t){return function(e){return en(e,t)}};var fn=function(t){return Be(t)?cn(tn(t)):sn(t)};var ln=function(t){return"function"==typeof t?t:null==t?J:"object"==i(t)?k(t)?un(t[0],t[1]):He(t):fn(t)};var vn=function(t,e){var n=-1,r=W(t)?Array(t.length):[];return q(t,(function(t,o,a){r[++n]=e(t,o,a)})),r};var dn=function(t,e){return(k(t)?Q:vn)(t,ln(e))},pn=Array.prototype.join;var hn=function(t,e){return null==t?"":pn.call(t,e)};function yn(t){return"[object Array]"===Object.prototype.toString.call(t)}function bn(t){return"[object String]"===Object.prototype.toString.call(t)}function mn(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function _n(){var t,e,n=new Promise((function(){t=arguments[0],e=arguments[1]}));return n.resolve=t,n.reject=e,n}var gn=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++r<o;)a[r]=t[r+e];return a},jn=/^\s+|\s+$/g,wn=/^[-+]0x[0-9a-f]+$/i,On=/^0b[01]+$/i,Sn=/^0o[0-7]+$/i,An=parseInt;var kn=function(t){if("number"==typeof t)return t;if(Ie(t))return NaN;if(U(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=U(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(jn,"");var n=On.test(t);return n||Sn.test(t)?An(t.slice(2),n?2:8):wn.test(t)?NaN:+t};var xn=function(t){return t?(t=kn(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Mn=function(t){var e=xn(t),n=e%1;return e==e?n?e-n:e:0};var Tn=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||void 0===e?1:Mn(e),gn(t,e<0?0:e,r)):[]};var Yn=function(t){return"number"==typeof t&&t==Mn(t)};function zn(t){return!(!bn(t)||""===t)}function Nn(t){var e=!1;return zn(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function Cn(t){return Nn(t)?xn(t):0}var En=s.isFinite,Pn=Math.min;var $n=function(t){var e=Math[t];return function(t,n){if(t=kn(t),(n=null==n?0:Pn(Mn(n),292))&&En(t)){var r=(Ke(t)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+n));return+((r=(Ke(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}("round");function Fn(t){return!!function(t){return!!Nn(t)&&(t=Cn(t),Yn(t))}(t)&&function(t){if(!Nn(t))return 0;t=Cn(t);var e=$n(t);return"0"===String(e)?0:e}(t)>0}function Ln(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180,n=_n();if(!mn(t))return n.reject("waitfunction需輸入函數f"),n;if(!0===t())return n.resolve(),n;Fn(e)||(e=180);var r=0,o=setInterval((function(){r+=1,!0===t()&&(clearInterval(o),n.resolve()),r>=e&&(clearInterval(o),n.resolve())}),1e3);return n}function Hn(t,e){if(!zn(t))return"";if(!Fn(e))return"";var n=t.length-e;return n<0&&(n=0),t.substr(n,e)}var In={},Rn={};function Vn(t){var e=t.tagName,n=t.path,r=t.attributes,o=void 0===r?{}:r,a=t.func,i=_n();if("done"===In[n])return i.resolve("loaded"),i;if("loading"===In[n])return Ln((function(){return"done"===In[n]})).then((function(){i.resolve("loaded")})),i;In[n]="loading";var u=document.createElement(e);return K(o,(function(t,e){u.setAttribute(e,t)})),o.rel&&"stylesheet"===o.rel?(u.setAttribute("href",n),setTimeout((function(){i.resolve(u),In[n]="done"}),1)):(u.src=n,u.addEventListener("load",(function(){var t;mn(a)?t=Ln(a):(t=_n()).resolve(),t.then((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;Nn(t)||(t=10);var e=_n();return setTimeout((function(){e.resolve()}),t),e}(500)})).then((function(){i.resolve(u),In[n]="done"}))})),u.addEventListener("error",(function(){i.reject(u),In[n]="done"}))),document.getElementsByTagName("head")[0].appendChild(u),i}function Bn(t){var e=_n();yn(t)||(t=[t]),K(t,(function(e,n){bn(e)&&(t[n]={path:e})}));var n=hn(dn(t,"path"),"|");return"done"===Rn[n]?(e.resolve("loaded"),e):"loading"===Rn[n]?(Ln((function(){return"done"===Rn[n]})).then((function(){e.resolve("loaded")})),e):(Rn[n]="loading",K(t,(function(t,e){t.type||(".js"===Hn(t.path,3)?t.type="js":".css"===Hn(t.path,4)?t.type="css":t.type="unknow")})),function(t,e){var n=_n();if(!yn(t))return n.reject("rs is not array"),n;mn(e)||(e=function(t){return t});var r=-1,o=[];return t.reduce((function(t,n){return t.then((function(t){return o.push(t),r+=1,mn(e)?e(n,r):n}))}),Promise.resolve()).then((function(t){o.push(t),o=Tn(o),n.resolve(o)})).catch((function(t){n.reject(t)})),n}(t,(function(t){var e=_n();if("js"===t.type)e=Vn({tagName:"script",path:t.path,attributes:{type:"text/javascript"},func:t.func});else if("css"===t.type)e=Vn({tagName:"link",path:t.path,attributes:{rel:"stylesheet"}});else{var n="invalid pathItem.type: "+t.type;console.log(n),e.reject(n)}return e})).finally((function(){Rn[n]="done"})))}var Dn={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};function Un(t,e,n,r,o,a,i,u,c,s){"boolean"!=typeof i&&(c=u,u=i,i=!1);var f,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):e&&(f=i?function(t){e.call(this,s(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),f)if(l.functional){var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,f):[f]}return n}var Gn,Wn="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Xn(t){return function(t,e){return function(t,e){var n=Wn?e.media||"default":t,r=qn[n]||(qn[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===Gn&&(Gn=document.head||document.getElementsByTagName("head")[0]),Gn.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var a=r.ids.size-1,i=document.createTextNode(o),u=r.element.childNodes;u[a]&&r.element.removeChild(u[a]),u.length?r.element.insertBefore(i,u[a]):r.element.appendChild(i)}}}(t,e)}}var qn={};const Jn=Dn;var Zn=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"inline-block"}},["cir1"===this.name?[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:this.size,height:this.size}},[e("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),this._v(" "),e("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:this._e()],2)};Zn._withStripped=!0;const Kn=Un({render:Zn,staticRenderFns:[]},(function(t){t&&t("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),Jn,"data-v-619e545c",!1,void 0,!1,Xn,void 0,void 0);function Qn(){return"undefined"!=typeof self?self:"undefined"!=typeof window&&void 0!==window.document?window:"undefined"!=typeof global?global:null}t&&!window.Vue&&(window.Vue=t);const tr={components:{WIconLoading:Kn},props:{pathItems:{type:Array,default:function(){return["https://cdn.jsdelivr.net/npm/highcharts@8.0.0/highcharts.js","https://cdn.jsdelivr.net/npm/highcharts@8.0.0/modules/stock.js","https://cdn.jsdelivr.net/npm/vue-highcharts@0.1.0/dist/vue-highcharts.min.js"]}},options:{type:Object,default:function(){}}},data:function(){return{cmpName:"WIconLoading"}},mounted:function(){var e=this;Bn(e.pathItems).then((function(n){if("loaded"!==n){window.Highcharts.setOptions({credits:{enabled:!1},global:{useUTC:!1},lang:{decimalPoint:".",thousandsSep:",",contextButtonTitle:"圖表匯出功能表",downloadJPEG:"下載 JPEG 圖片",downloadPDF:"下載 PDF 文件",downloadPNG:"下載 PNG 文件",downloadSVG:"下載 SVG 文件",downloadXLS:"下載 XLS 文件",openInCloud:"在 Highcharts Cloud 中打開",drillUpText:"返回 {series.name}",invalidDate:"無效的時間",loading:"載入中...",months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],noData:"沒有資料",printChart:"列印圖表",resetZoom:"重置縮放比例",resetZoomTitle:"重置為原始大小",shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],weekdays:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],viewData:"查看資料",rangeSelectorFrom:"開始時間",rangeSelectorTo:"結束時間",rangeSelectorZoom:"範圍",zoomIn:"縮小",zoomOut:"放大"},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y/%m/%d",week:"%Y/%m/%d",month:"%Y/%m",year:"%Y"}},xAxis:{dateTimeLabelFormats:{second:"%Y<br/>%m/%d",minute:"%Y<br/>%m/%d",hour:"%Y<br/>%m/%d",day:"%Y<br/>%m/%d",week:"%Y<br/>%m/%d",month:"%Y<br/>%m/%d",year:"%Y<br/>%m/%d"}},rangeSelector:{enabled:!1},plotOptions:{series:{dataGrouping:{dateTimeLabelFormats:{millisecond:["%Y/%m/%d %H:%M:%S.%L","%Y/%m/%d %H:%M:%S.%L"," ~ %H:%M:%S.%L"],second:["%Y/%m/%d %H:%M:%S","%Y/%m/%d %H:%M:%S"," ~ %H:%M:%S"],minute:["%Y/%m/%d %H:%M","%Y/%m/%d %H:%M"," ~ %H:%M"],hour:["%Y/%m/%d %H:%M","%Y/%m/%d %H:%M"," ~ %H:%M"],day:["%Y/%m/%d","%Y/%m/%d"," ~ %Y/%m/%d"],week:["%Y/%m/%d","%Y/%m/%d"," ~ %Y/%m/%d"],month:["%Y/%m","%Y/%m"," ~ %Y/%m"],year:["%Y","%Y"," ~ %Y"]}}}}});var r=window.VueHighcharts;r.default&&(r=r.default),(o=Qn(),t||o.Vue).use(r)}var o;e.cmpName="Highstock"}))},computed:{},methods:{}};var er=function(){var t=this.$createElement;return(this._self._c||t)(this.cmpName,{ref:"$self",tag:"component",attrs:{options:this.options}})};er._withStripped=!0;return Un({render:er,staticRenderFns:[]},(function(t){t&&t("data-v-fd3f11ca_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WHighstockVueDyn.vue"},media:void 0})}),tr,"data-v-fd3f11ca",!1,void 0,!1,Xn,void 0,void 0)}));
//# sourceMappingURL=w-highstock-vue-dyn.umd.js.map
