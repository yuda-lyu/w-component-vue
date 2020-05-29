/*!
 * w-echarts-vue-dyn v1.3.32
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t=t||self)["w-echarts-vue-dyn"]=e(t.Vue)}(this,(function(t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var e=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t};var n=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),u=i.length;u--;){var c=i[t?u:++o];if(!1===n(a[c],c,a))break}return e}}();var r=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t,e){return t(e={exports:{}},e.exports),e.exports}var i=a((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e})),u="object"==i(o)&&o&&o.Object===Object&&o,c="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),f=s.Symbol,l=Object.prototype,v=l.hasOwnProperty,p=l.toString,d=f?f.toStringTag:void 0;var h=function(t){var e=v.call(t,d),n=t[d];try{t[d]=void 0;var r=!0}catch(t){}var o=p.call(t);return r&&(e?t[d]=n:delete t[d]),o},y=Object.prototype.toString;var b=function(t){return y.call(t)},_=f?f.toStringTag:void 0;var m=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?h(t):b(t)};var g=function(t){return null!=t&&"object"==i(t)};var j=function(t){return g(t)&&"[object Arguments]"==m(t)},w=Object.prototype,O=w.hasOwnProperty,S=w.propertyIsEnumerable,A=j(function(){return arguments}())?j:function(t){return g(t)&&O.call(t,"callee")&&!S.call(t,"callee")},x=Array.isArray;var k=function(){return!1},z=a((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?s.Buffer:void 0,a=(o?o.isBuffer:void 0)||k;t.exports=a})),N=/^(?:0|[1-9]\d*)$/;var E=function(t,e){var n=i(t);return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&N.test(t))&&t>-1&&t%1==0&&t<e};var T=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},C={};C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C["[object Arguments]"]=C["[object Array]"]=C["[object ArrayBuffer]"]=C["[object Boolean]"]=C["[object DataView]"]=C["[object Date]"]=C["[object Error]"]=C["[object Function]"]=C["[object Map]"]=C["[object Number]"]=C["[object Object]"]=C["[object RegExp]"]=C["[object Set]"]=C["[object String]"]=C["[object WeakMap]"]=!1;var $=function(t){return g(t)&&T(t.length)&&!!C[m(t)]};var P=function(t){return function(e){return t(e)}},I=a((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&u.process,a=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),M=I&&I.isTypedArray,F=M?P(M):$,R=Object.prototype.hasOwnProperty;var L=function(t,e){var n=x(t),o=!n&&A(t),a=!n&&!o&&z(t),i=!n&&!o&&!a&&F(t),u=n||o||a||i,c=u?r(t.length,String):[],s=c.length;for(var f in t)!e&&!R.call(t,f)||u&&("length"==f||a&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||E(f,s))||c.push(f);return c},V=Object.prototype;var B=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||V)};var U=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),D=Object.prototype.hasOwnProperty;var W=function(t){if(!B(t))return U(t);var e=[];for(var n in Object(t))D.call(t,n)&&"constructor"!=n&&e.push(n);return e};var q=function(t){var e=i(t);return null!=t&&("object"==e||"function"==e)};var X=function(t){if(!q(t))return!1;var e=m(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var G=function(t){return null!=t&&T(t.length)&&!X(t)};var J=function(t){return G(t)?L(t):W(t)};var Y=function(t,e){return function(n,r){if(null==n)return n;if(!G(n))return t(n,r);for(var o=n.length,a=e?o:-1,i=Object(n);(e?a--:++a<o)&&!1!==r(i[a],a,i););return n}}((function(t,e){return t&&n(t,e,J)}));var H=function(t){return t};var K=function(t){return"function"==typeof t?t:H};var Q=function(t,n){return(x(t)?e:Y)(t,K(n))};var Z=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var tt=function(){this.__data__=[],this.size=0};var et=function(t,e){return t===e||t!=t&&e!=e};var nt=function(t,e){for(var n=t.length;n--;)if(et(t[n][0],e))return n;return-1},rt=Array.prototype.splice;var ot=function(t){var e=this.__data__,n=nt(e,t);return!(n<0)&&(n==e.length-1?e.pop():rt.call(e,n,1),--this.size,!0)};var at=function(t){var e=this.__data__,n=nt(e,t);return n<0?void 0:e[n][1]};var it=function(t){return nt(this.__data__,t)>-1};var ut=function(t,e){var n=this.__data__,r=nt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ct.prototype.clear=tt,ct.prototype.delete=ot,ct.prototype.get=at,ct.prototype.has=it,ct.prototype.set=ut;var st=ct;var ft=function(){this.__data__=new st,this.size=0};var lt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var vt=function(t){return this.__data__.get(t)};var pt,dt=function(t){return this.__data__.has(t)},ht=s["__core-js_shared__"],yt=(pt=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||""))?"Symbol(src)_1."+pt:"";var bt=function(t){return!!yt&&yt in t},_t=Function.prototype.toString;var mt=function(t){if(null!=t){try{return _t.call(t)}catch(t){}try{return t+""}catch(t){}}return""},gt=/^\[object .+?Constructor\]$/,jt=Function.prototype,wt=Object.prototype,Ot=jt.toString,St=wt.hasOwnProperty,At=RegExp("^"+Ot.call(St).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var xt=function(t){return!(!q(t)||bt(t))&&(X(t)?At:gt).test(mt(t))};var kt=function(t,e){return null==t?void 0:t[e]};var zt=function(t,e){var n=kt(t,e);return xt(n)?n:void 0},Nt=zt(s,"Map"),Et=zt(Object,"create");var Tt=function(){this.__data__=Et?Et(null):{},this.size=0};var Ct=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},$t=Object.prototype.hasOwnProperty;var Pt=function(t){var e=this.__data__;if(Et){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return $t.call(e,t)?e[t]:void 0},It=Object.prototype.hasOwnProperty;var Mt=function(t){var e=this.__data__;return Et?void 0!==e[t]:It.call(e,t)};var Ft=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Et&&void 0===e?"__lodash_hash_undefined__":e,this};function Rt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Rt.prototype.clear=Tt,Rt.prototype.delete=Ct,Rt.prototype.get=Pt,Rt.prototype.has=Mt,Rt.prototype.set=Ft;var Lt=Rt;var Vt=function(){this.size=0,this.__data__={hash:new Lt,map:new(Nt||st),string:new Lt}};var Bt=function(t){var e=i(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ut=function(t,e){var n=t.__data__;return Bt(e)?n["string"==typeof e?"string":"hash"]:n.map};var Dt=function(t){var e=Ut(this,t).delete(t);return this.size-=e?1:0,e};var Wt=function(t){return Ut(this,t).get(t)};var qt=function(t){return Ut(this,t).has(t)};var Xt=function(t,e){var n=Ut(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Gt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Gt.prototype.clear=Vt,Gt.prototype.delete=Dt,Gt.prototype.get=Wt,Gt.prototype.has=qt,Gt.prototype.set=Xt;var Jt=Gt;var Yt=function(t,e){var n=this.__data__;if(n instanceof st){var r=n.__data__;if(!Nt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Jt(r)}return n.set(t,e),this.size=n.size,this};function Ht(t){var e=this.__data__=new st(t);this.size=e.size}Ht.prototype.clear=ft,Ht.prototype.delete=lt,Ht.prototype.get=vt,Ht.prototype.has=dt,Ht.prototype.set=Yt;var Kt=Ht;var Qt=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var Zt=function(t){return this.__data__.has(t)};function te(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Jt;++e<n;)this.add(t[e])}te.prototype.add=te.prototype.push=Qt,te.prototype.has=Zt;var ee=te;var ne=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1};var re=function(t,e){return t.has(e)};var oe=function(t,e,n,r,o,a){var i=1&n,u=t.length,c=e.length;if(u!=c&&!(i&&c>u))return!1;var s=a.get(t);if(s&&a.get(e))return s==e;var f=-1,l=!0,v=2&n?new ee:void 0;for(a.set(t,e),a.set(e,t);++f<u;){var p=t[f],d=e[f];if(r)var h=i?r(d,p,f,e,t,a):r(p,d,f,t,e,a);if(void 0!==h){if(h)continue;l=!1;break}if(v){if(!ne(e,(function(t,e){if(!re(v,e)&&(p===t||o(p,t,n,r,a)))return v.push(e)}))){l=!1;break}}else if(p!==d&&!o(p,d,n,r,a)){l=!1;break}}return a.delete(t),a.delete(e),l},ae=s.Uint8Array;var ie=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};var ue=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},ce=f?f.prototype:void 0,se=ce?ce.valueOf:void 0;var fe=function(t,e,n,r,o,a,i){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new ae(t),new ae(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return et(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=ie;case"[object Set]":var c=1&r;if(u||(u=ue),t.size!=e.size&&!c)return!1;var s=i.get(t);if(s)return s==e;r|=2,i.set(t,e);var f=oe(u(t),u(e),r,o,a,i);return i.delete(t),f;case"[object Symbol]":if(se)return se.call(t)==se.call(e)}return!1};var le=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};var ve=function(t,e,n){var r=e(t);return x(t)?r:le(r,n(t))};var pe=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a};var de=function(){return[]},he=Object.prototype.propertyIsEnumerable,ye=Object.getOwnPropertySymbols,be=ye?function(t){return null==t?[]:(t=Object(t),pe(ye(t),(function(e){return he.call(t,e)})))}:de;var _e=function(t){return ve(t,J,be)},me=Object.prototype.hasOwnProperty;var ge=function(t,e,n,r,o,a){var i=1&n,u=_e(t),c=u.length;if(c!=_e(e).length&&!i)return!1;for(var s=c;s--;){var f=u[s];if(!(i?f in e:me.call(e,f)))return!1}var l=a.get(t);if(l&&a.get(e))return l==e;var v=!0;a.set(t,e),a.set(e,t);for(var p=i;++s<c;){var d=t[f=u[s]],h=e[f];if(r)var y=i?r(h,d,f,e,t,a):r(d,h,f,t,e,a);if(!(void 0===y?d===h||o(d,h,n,r,a):y)){v=!1;break}p||(p="constructor"==f)}if(v&&!p){var b=t.constructor,_=e.constructor;b==_||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _||(v=!1)}return a.delete(t),a.delete(e),v},je=zt(s,"DataView"),we=zt(s,"Promise"),Oe=zt(s,"Set"),Se=zt(s,"WeakMap"),Ae=mt(je),xe=mt(Nt),ke=mt(we),ze=mt(Oe),Ne=mt(Se),Ee=m;(je&&"[object DataView]"!=Ee(new je(new ArrayBuffer(1)))||Nt&&"[object Map]"!=Ee(new Nt)||we&&"[object Promise]"!=Ee(we.resolve())||Oe&&"[object Set]"!=Ee(new Oe)||Se&&"[object WeakMap]"!=Ee(new Se))&&(Ee=function(t){var e=m(t),n="[object Object]"==e?t.constructor:void 0,r=n?mt(n):"";if(r)switch(r){case Ae:return"[object DataView]";case xe:return"[object Map]";case ke:return"[object Promise]";case ze:return"[object Set]";case Ne:return"[object WeakMap]"}return e});var Te=Ee,Ce=Object.prototype.hasOwnProperty;var $e=function(t,e,n,r,o,a){var i=x(t),u=x(e),c=i?"[object Array]":Te(t),s=u?"[object Array]":Te(e),f="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),l="[object Object]"==(s="[object Arguments]"==s?"[object Object]":s),v=c==s;if(v&&z(t)){if(!z(e))return!1;i=!0,f=!1}if(v&&!f)return a||(a=new Kt),i||F(t)?oe(t,e,n,r,o,a):fe(t,e,c,n,r,o,a);if(!(1&n)){var p=f&&Ce.call(t,"__wrapped__"),d=l&&Ce.call(e,"__wrapped__");if(p||d){var h=p?t.value():t,y=d?e.value():e;return a||(a=new Kt),o(h,y,n,r,a)}}return!!v&&(a||(a=new Kt),ge(t,e,n,r,o,a))};var Pe=function t(e,n,r,o,a){return e===n||(null==e||null==n||!g(e)&&!g(n)?e!=e&&n!=n:$e(e,n,r,o,t,a))};var Ie=function(t,e,n,r){var o=n.length,a=o,i=!r;if(null==t)return!a;for(t=Object(t);o--;){var u=n[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=n[o])[0],s=t[c],f=u[1];if(i&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new Kt;if(r)var v=r(s,f,c,t,e,l);if(!(void 0===v?Pe(f,s,3,r,l):v))return!1}}return!0};var Me=function(t){return t==t&&!q(t)};var Fe=function(t){for(var e=J(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,Me(o)]}return e};var Re=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};var Le=function(t){var e=Fe(t);return 1==e.length&&e[0][2]?Re(e[0][0],e[0][1]):function(n){return n===t||Ie(n,t,e)}};var Ve=function(t){return"symbol"==i(t)||g(t)&&"[object Symbol]"==m(t)},Be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ue=/^\w*$/;var De=function(t,e){if(x(t))return!1;var n=i(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Ve(t))||(Ue.test(t)||!Be.test(t)||null!=e&&t in Object(e))};function We(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(We.Cache||Jt),n}We.Cache=Jt;var qe=We;var Xe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ge=/\\(\\)?/g,Je=function(t){var e=qe(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Xe,(function(t,n,r,o){e.push(r?o.replace(Ge,"$1"):n||t)})),e})),Ye=f?f.prototype:void 0,He=Ye?Ye.toString:void 0;var Ke=function t(e){if("string"==typeof e)return e;if(x(e))return Z(e,t)+"";if(Ve(e))return He?He.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var Qe=function(t){return null==t?"":Ke(t)};var Ze=function(t,e){return x(t)?t:De(t,e)?[t]:Je(Qe(t))};var tn=function(t){if("string"==typeof t||Ve(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var en=function(t,e){for(var n=0,r=(e=Ze(e,t)).length;null!=t&&n<r;)t=t[tn(e[n++])];return n&&n==r?t:void 0};var nn=function(t,e,n){var r=null==t?void 0:en(t,e);return void 0===r?n:r};var rn=function(t,e){return null!=t&&e in Object(t)};var on=function(t,e,n){for(var r=-1,o=(e=Ze(e,t)).length,a=!1;++r<o;){var i=tn(e[r]);if(!(a=null!=t&&n(t,i)))break;t=t[i]}return a||++r!=o?a:!!(o=null==t?0:t.length)&&T(o)&&E(i,o)&&(x(t)||A(t))};var an=function(t,e){return null!=t&&on(t,e,rn)};var un=function(t,e){return De(t)&&Me(e)?Re(tn(t),e):function(n){var r=nn(n,t);return void 0===r&&r===e?an(n,t):Pe(e,r,3)}};var cn=function(t){return function(e){return null==e?void 0:e[t]}};var sn=function(t){return function(e){return en(e,t)}};var fn=function(t){return De(t)?cn(tn(t)):sn(t)};var ln=function(t){return"function"==typeof t?t:null==t?H:"object"==i(t)?x(t)?un(t[0],t[1]):Le(t):fn(t)};var vn=function(t,e){var n=-1,r=G(t)?Array(t.length):[];return Y(t,(function(t,o,a){r[++n]=e(t,o,a)})),r};var pn=function(t,e){return(x(t)?Z:vn)(t,ln(e))},dn=Array.prototype.join;var hn=function(t,e){return null==t?"":dn.call(t,e)};function yn(t){return"[object Array]"===Object.prototype.toString.call(t)}function bn(t){return"[object String]"===Object.prototype.toString.call(t)}function _n(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function mn(){var t,e,n=new Promise((function(){t=arguments[0],e=arguments[1]}));return n.resolve=t,n.reject=e,n}var gn=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++r<o;)a[r]=t[r+e];return a},jn=/^\s+|\s+$/g,wn=/^[-+]0x[0-9a-f]+$/i,On=/^0b[01]+$/i,Sn=/^0o[0-7]+$/i,An=parseInt;var xn=function(t){if("number"==typeof t)return t;if(Ve(t))return NaN;if(q(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=q(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(jn,"");var n=On.test(t);return n||Sn.test(t)?An(t.slice(2),n?2:8):wn.test(t)?NaN:+t};var kn=function(t){return t?(t=xn(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var zn=function(t){var e=kn(t),n=e%1;return e==e?n?e-n:e:0};var Nn=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||void 0===e?1:zn(e),gn(t,e<0?0:e,r)):[]};var En=function(t){return"number"==typeof t&&t==zn(t)};function Tn(t){return!(!bn(t)||""===t)}function Cn(t){var e=!1;return Tn(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function $n(t){return Cn(t)?kn(t):0}var Pn=s.isFinite,In=Math.min;var Mn=function(t){var e=Math[t];return function(t,n){if(t=xn(t),(n=null==n?0:In(zn(n),292))&&Pn(t)){var r=(Qe(t)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+n));return+((r=(Qe(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}("round");function Fn(t){return!!function(t){return!!Cn(t)&&(t=$n(t),En(t))}(t)&&function(t){if(!Cn(t))return 0;t=$n(t);var e=Mn(t);return"0"===String(e)?0:e}(t)>0}function Rn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180,n=mn();if(!_n(t))return n.reject("waitfunction需輸入函數f"),n;if(!0===t())return n.resolve(),n;Fn(e)||(e=180);var r=0,o=setInterval((function(){r+=1,!0===t()&&(clearInterval(o),n.resolve()),r>=e&&(clearInterval(o),n.resolve())}),1e3);return n}function Ln(t,e){if(!Tn(t))return"";if(!Fn(e))return"";var n=t.length-e;return n<0&&(n=0),t.substr(n,e)}var Vn={},Bn={};function Un(t){var e=t.tagName,n=t.path,r=t.attributes,o=void 0===r?{}:r,a=t.func,i=mn();if("done"===Vn[n])return i.resolve("loaded"),i;if("loading"===Vn[n])return Rn((function(){return"done"===Vn[n]})).then((function(){i.resolve("loaded")})),i;Vn[n]="loading";var u=document.createElement(e);return Q(o,(function(t,e){u.setAttribute(e,t)})),o.rel&&"stylesheet"===o.rel?(u.setAttribute("href",n),setTimeout((function(){i.resolve(u),Vn[n]="done"}),1)):(u.src=n,u.addEventListener("load",(function(){var t;_n(a)?t=Rn(a):(t=mn()).resolve(),t.then((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;Cn(t)||(t=10);var e=mn();return setTimeout((function(){e.resolve()}),t),e}(500)})).then((function(){i.resolve(u),Vn[n]="done"}))})),u.addEventListener("error",(function(){i.reject(u),Vn[n]="done"}))),document.getElementsByTagName("head")[0].appendChild(u),i}function Dn(t){var e=mn();yn(t)||(t=[t]),Q(t,(function(e,n){bn(e)&&(t[n]={path:e})}));var n=hn(pn(t,"path"),"|");return"done"===Bn[n]?(e.resolve("loaded"),e):"loading"===Bn[n]?(Rn((function(){return"done"===Bn[n]})).then((function(){e.resolve("loaded")})),e):(Bn[n]="loading",Q(t,(function(t,e){t.type||(".js"===Ln(t.path,3)?t.type="js":".css"===Ln(t.path,4)?t.type="css":t.type="unknow")})),function(t,e){var n=mn();if(!yn(t))return n.reject("rs is not array"),n;_n(e)||(e=function(t){return t});var r=-1,o=[];return t.reduce((function(t,n){return t.then((function(t){return o.push(t),r+=1,_n(e)?e(n,r):n}))}),Promise.resolve()).then((function(t){o.push(t),o=Nn(o),n.resolve(o)})).catch((function(t){n.reject(t)})),n}(t,(function(t){var e=mn();if("js"===t.type)e=Un({tagName:"script",path:t.path,attributes:{type:"text/javascript"},func:t.func});else if("css"===t.type)e=Un({tagName:"link",path:t.path,attributes:{rel:"stylesheet"}});else{var n="invalid pathItem.type: "+t.type;console.log(n),e.reject(n)}return e})).finally((function(){Bn[n]="done"})))}var Wn={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};function qn(t,e,n,r,o,a,i,u,c,s){"boolean"!=typeof i&&(c=u,u=i,i=!1);var f,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):e&&(f=i?function(t){e.call(this,s(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),f)if(l.functional){var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,f):[f]}return n}var Xn,Gn="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Jn(t){return function(t,e){return function(t,e){var n=Gn?e.media||"default":t,r=Yn[n]||(Yn[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===Xn&&(Xn=document.head||document.getElementsByTagName("head")[0]),Xn.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var a=r.ids.size-1,i=document.createTextNode(o),u=r.element.childNodes;u[a]&&r.element.removeChild(u[a]),u.length?r.element.insertBefore(i,u[a]):r.element.appendChild(i)}}}(t,e)}}var Yn={};const Hn=Wn;var Kn=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"inline-block"}},["cir1"===this.name?[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:this.size,height:this.size}},[e("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),this._v(" "),e("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:this._e()],2)};Kn._withStripped=!0;const Qn=qn({render:Kn,staticRenderFns:[]},(function(t){t&&t("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),Hn,"data-v-619e545c",!1,void 0,!1,Jn,void 0,void 0);function Zn(){return"undefined"!=typeof self?self:"undefined"!=typeof window&&void 0!==window.document?window:"undefined"!=typeof global?global:null}t&&!window.Vue&&(window.Vue=t);const tr={components:{WIconLoading:Qn},props:{pathItems:{type:Array,default:function(){return["https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts-en.min.js","https://cdn.jsdelivr.net/npm/echarts-gl@1.1.1/dist/echarts-gl.min.js","https://cdn.jsdelivr.net/npm/vue-echarts@4.0.1/dist/vue-echarts.min.js"]}},options:{type:Object,default:function(){}}},data:function(){return{cmpName:"WIconLoading"}},mounted:function(){var e=this;Dn(e.pathItems).then((function(n){if("loaded"!==n){var r=window.VueECharts;r.default&&(r=r.default),(o=Zn(),t||o.Vue).component("vueechart",r)}var o;e.cmpName="vueechart"}))},computed:{},methods:{}};var er=function(){var t=this.$createElement;return(this._self._c||t)(this.cmpName,{ref:"$self",tag:"component",attrs:{options:this.options}})};er._withStripped=!0;return qn({render:er,staticRenderFns:[]},(function(t){t&&t("data-v-ab047578_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WEchartsVueDyn.vue"},media:void 0})}),tr,"data-v-ab047578",!1,void 0,!1,Jn,void 0,void 0)}));
//# sourceMappingURL=w-echarts-vue-dyn.umd.js.map
