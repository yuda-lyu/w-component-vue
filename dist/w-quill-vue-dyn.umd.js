/*!
 * w-quill-vue-dyn v1.4.10
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-quill-vue-dyn"]=e(t.Vue)}(this,(function(t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var e=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t};var n=function(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return e}}();var r=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var a=i((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e})),u="object"==a(o)&&o&&o.Object===Object&&o,c="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),f=s.Symbol,l=Object.prototype,v=l.hasOwnProperty,p=l.toString,d=f?f.toStringTag:void 0;var h=function(t){var e=v.call(t,d),n=t[d];try{t[d]=void 0;var r=!0}catch(t){}var o=p.call(t);return r&&(e?t[d]=n:delete t[d]),o},y=Object.prototype.toString;var b=function(t){return y.call(t)},_=f?f.toStringTag:void 0;var m=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?h(t):b(t)};var g=function(t){return null!=t&&"object"==a(t)};var j=function(t){return g(t)&&"[object Arguments]"==m(t)},w=Object.prototype,O=w.hasOwnProperty,S=w.propertyIsEnumerable,A=j(function(){return arguments}())?j:function(t){return g(t)&&O.call(t,"callee")&&!S.call(t,"callee")},x=Array.isArray;var N=function(){return!1},k=i((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?s.Buffer:void 0,i=(o?o.isBuffer:void 0)||N;t.exports=i})),z=/^(?:0|[1-9]\d*)$/;var T=function(t,e){var n=a(t);return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&z.test(t))&&t>-1&&t%1==0&&t<e};var E=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},$={};$["[object Float32Array]"]=$["[object Float64Array]"]=$["[object Int8Array]"]=$["[object Int16Array]"]=$["[object Int32Array]"]=$["[object Uint8Array]"]=$["[object Uint8ClampedArray]"]=$["[object Uint16Array]"]=$["[object Uint32Array]"]=!0,$["[object Arguments]"]=$["[object Array]"]=$["[object ArrayBuffer]"]=$["[object Boolean]"]=$["[object DataView]"]=$["[object Date]"]=$["[object Error]"]=$["[object Function]"]=$["[object Map]"]=$["[object Number]"]=$["[object Object]"]=$["[object RegExp]"]=$["[object Set]"]=$["[object String]"]=$["[object WeakMap]"]=!1;var C=function(t){return g(t)&&E(t.length)&&!!$[m(t)]};var I=function(t){return function(e){return t(e)}},P=i((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&u.process,i=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),M=P&&P.isTypedArray,F=M?I(M):C,R=Object.prototype.hasOwnProperty;var q=function(t,e){var n=x(t),o=!n&&A(t),i=!n&&!o&&k(t),a=!n&&!o&&!i&&F(t),u=n||o||i||a,c=u?r(t.length,String):[],s=c.length;for(var f in t)!e&&!R.call(t,f)||u&&("length"==f||i&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||T(f,s))||c.push(f);return c},B=Object.prototype;var L=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||B)};var V=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),U=Object.prototype.hasOwnProperty;var D=function(t){if(!L(t))return V(t);var e=[];for(var n in Object(t))U.call(t,n)&&"constructor"!=n&&e.push(n);return e};var W=function(t){var e=a(t);return null!=t&&("object"==e||"function"==e)};var X=function(t){if(!W(t))return!1;var e=m(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var G=function(t){return null!=t&&E(t.length)&&!X(t)};var J=function(t){return G(t)?q(t):D(t)};var Q=function(t,e){return function(n,r){if(null==n)return n;if(!G(n))return t(n,r);for(var o=n.length,i=e?o:-1,a=Object(n);(e?i--:++i<o)&&!1!==r(a[i],i,a););return n}}((function(t,e){return t&&n(t,e,J)}));var Y=function(t){return t};var H=function(t){return"function"==typeof t?t:Y};var K=function(t,n){return(x(t)?e:Q)(t,H(n))};var Z=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var tt=function(){this.__data__=[],this.size=0};var et=function(t,e){return t===e||t!=t&&e!=e};var nt=function(t,e){for(var n=t.length;n--;)if(et(t[n][0],e))return n;return-1},rt=Array.prototype.splice;var ot=function(t){var e=this.__data__,n=nt(e,t);return!(n<0)&&(n==e.length-1?e.pop():rt.call(e,n,1),--this.size,!0)};var it=function(t){var e=this.__data__,n=nt(e,t);return n<0?void 0:e[n][1]};var at=function(t){return nt(this.__data__,t)>-1};var ut=function(t,e){var n=this.__data__,r=nt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ct.prototype.clear=tt,ct.prototype.delete=ot,ct.prototype.get=it,ct.prototype.has=at,ct.prototype.set=ut;var st=ct;var ft=function(){this.__data__=new st,this.size=0};var lt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var vt=function(t){return this.__data__.get(t)};var pt,dt=function(t){return this.__data__.has(t)},ht=s["__core-js_shared__"],yt=(pt=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||""))?"Symbol(src)_1."+pt:"";var bt=function(t){return!!yt&&yt in t},_t=Function.prototype.toString;var mt=function(t){if(null!=t){try{return _t.call(t)}catch(t){}try{return t+""}catch(t){}}return""},gt=/^\[object .+?Constructor\]$/,jt=Function.prototype,wt=Object.prototype,Ot=jt.toString,St=wt.hasOwnProperty,At=RegExp("^"+Ot.call(St).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var xt=function(t){return!(!W(t)||bt(t))&&(X(t)?At:gt).test(mt(t))};var Nt=function(t,e){return null==t?void 0:t[e]};var kt=function(t,e){var n=Nt(t,e);return xt(n)?n:void 0},zt=kt(s,"Map"),Tt=kt(Object,"create");var Et=function(){this.__data__=Tt?Tt(null):{},this.size=0};var $t=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ct=Object.prototype.hasOwnProperty;var It=function(t){var e=this.__data__;if(Tt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Ct.call(e,t)?e[t]:void 0},Pt=Object.prototype.hasOwnProperty;var Mt=function(t){var e=this.__data__;return Tt?void 0!==e[t]:Pt.call(e,t)};var Ft=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Tt&&void 0===e?"__lodash_hash_undefined__":e,this};function Rt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Rt.prototype.clear=Et,Rt.prototype.delete=$t,Rt.prototype.get=It,Rt.prototype.has=Mt,Rt.prototype.set=Ft;var qt=Rt;var Bt=function(){this.size=0,this.__data__={hash:new qt,map:new(zt||st),string:new qt}};var Lt=function(t){var e=a(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return Lt(e)?n["string"==typeof e?"string":"hash"]:n.map};var Ut=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e};var Dt=function(t){return Vt(this,t).get(t)};var Wt=function(t){return Vt(this,t).has(t)};var Xt=function(t,e){var n=Vt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Gt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Gt.prototype.clear=Bt,Gt.prototype.delete=Ut,Gt.prototype.get=Dt,Gt.prototype.has=Wt,Gt.prototype.set=Xt;var Jt=Gt;var Qt=function(t,e){var n=this.__data__;if(n instanceof st){var r=n.__data__;if(!zt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Jt(r)}return n.set(t,e),this.size=n.size,this};function Yt(t){var e=this.__data__=new st(t);this.size=e.size}Yt.prototype.clear=ft,Yt.prototype.delete=lt,Yt.prototype.get=vt,Yt.prototype.has=dt,Yt.prototype.set=Qt;var Ht=Yt;var Kt=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var Zt=function(t){return this.__data__.has(t)};function te(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Jt;++e<n;)this.add(t[e])}te.prototype.add=te.prototype.push=Kt,te.prototype.has=Zt;var ee=te;var ne=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1};var re=function(t,e){return t.has(e)};var oe=function(t,e,n,r,o,i){var a=1&n,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var s=i.get(t),f=i.get(e);if(s&&f)return s==e&&f==t;var l=-1,v=!0,p=2&n?new ee:void 0;for(i.set(t,e),i.set(e,t);++l<u;){var d=t[l],h=e[l];if(r)var y=a?r(h,d,l,e,t,i):r(d,h,l,t,e,i);if(void 0!==y){if(y)continue;v=!1;break}if(p){if(!ne(e,(function(t,e){if(!re(p,e)&&(d===t||o(d,t,n,r,i)))return p.push(e)}))){v=!1;break}}else if(d!==h&&!o(d,h,n,r,i)){v=!1;break}}return i.delete(t),i.delete(e),v},ie=s.Uint8Array;var ae=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};var ue=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},ce=f?f.prototype:void 0,se=ce?ce.valueOf:void 0;var fe=function(t,e,n,r,o,i,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new ie(t),new ie(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return et(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=ae;case"[object Set]":var c=1&r;if(u||(u=ue),t.size!=e.size&&!c)return!1;var s=a.get(t);if(s)return s==e;r|=2,a.set(t,e);var f=oe(u(t),u(e),r,o,i,a);return a.delete(t),f;case"[object Symbol]":if(se)return se.call(t)==se.call(e)}return!1};var le=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};var ve=function(t,e,n){var r=e(t);return x(t)?r:le(r,n(t))};var pe=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i};var de=function(){return[]},he=Object.prototype.propertyIsEnumerable,ye=Object.getOwnPropertySymbols,be=ye?function(t){return null==t?[]:(t=Object(t),pe(ye(t),(function(e){return he.call(t,e)})))}:de;var _e=function(t){return ve(t,J,be)},me=Object.prototype.hasOwnProperty;var ge=function(t,e,n,r,o,i){var a=1&n,u=_e(t),c=u.length;if(c!=_e(e).length&&!a)return!1;for(var s=c;s--;){var f=u[s];if(!(a?f in e:me.call(e,f)))return!1}var l=i.get(t),v=i.get(e);if(l&&v)return l==e&&v==t;var p=!0;i.set(t,e),i.set(e,t);for(var d=a;++s<c;){var h=t[f=u[s]],y=e[f];if(r)var b=a?r(y,h,f,e,t,i):r(h,y,f,t,e,i);if(!(void 0===b?h===y||o(h,y,n,r,i):b)){p=!1;break}d||(d="constructor"==f)}if(p&&!d){var _=t.constructor,m=e.constructor;_==m||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof m&&m instanceof m||(p=!1)}return i.delete(t),i.delete(e),p},je=kt(s,"DataView"),we=kt(s,"Promise"),Oe=kt(s,"Set"),Se=kt(s,"WeakMap"),Ae=mt(je),xe=mt(zt),Ne=mt(we),ke=mt(Oe),ze=mt(Se),Te=m;(je&&"[object DataView]"!=Te(new je(new ArrayBuffer(1)))||zt&&"[object Map]"!=Te(new zt)||we&&"[object Promise]"!=Te(we.resolve())||Oe&&"[object Set]"!=Te(new Oe)||Se&&"[object WeakMap]"!=Te(new Se))&&(Te=function(t){var e=m(t),n="[object Object]"==e?t.constructor:void 0,r=n?mt(n):"";if(r)switch(r){case Ae:return"[object DataView]";case xe:return"[object Map]";case Ne:return"[object Promise]";case ke:return"[object Set]";case ze:return"[object WeakMap]"}return e});var Ee=Te,$e=Object.prototype.hasOwnProperty;var Ce=function(t,e,n,r,o,i){var a=x(t),u=x(e),c=a?"[object Array]":Ee(t),s=u?"[object Array]":Ee(e),f="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),l="[object Object]"==(s="[object Arguments]"==s?"[object Object]":s),v=c==s;if(v&&k(t)){if(!k(e))return!1;a=!0,f=!1}if(v&&!f)return i||(i=new Ht),a||F(t)?oe(t,e,n,r,o,i):fe(t,e,c,n,r,o,i);if(!(1&n)){var p=f&&$e.call(t,"__wrapped__"),d=l&&$e.call(e,"__wrapped__");if(p||d){var h=p?t.value():t,y=d?e.value():e;return i||(i=new Ht),o(h,y,n,r,i)}}return!!v&&(i||(i=new Ht),ge(t,e,n,r,o,i))};var Ie=function t(e,n,r,o,i){return e===n||(null==e||null==n||!g(e)&&!g(n)?e!=e&&n!=n:Ce(e,n,r,o,t,i))};var Pe=function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],s=t[c],f=u[1];if(a&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new Ht;if(r)var v=r(s,f,c,t,e,l);if(!(void 0===v?Ie(f,s,3,r,l):v))return!1}}return!0};var Me=function(t){return t==t&&!W(t)};var Fe=function(t){for(var e=J(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,Me(o)]}return e};var Re=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};var qe=function(t){var e=Fe(t);return 1==e.length&&e[0][2]?Re(e[0][0],e[0][1]):function(n){return n===t||Pe(n,t,e)}};var Be=function(t){return"symbol"==a(t)||g(t)&&"[object Symbol]"==m(t)},Le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ve=/^\w*$/;var Ue=function(t,e){if(x(t))return!1;var n=a(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Be(t))||(Ve.test(t)||!Le.test(t)||null!=e&&t in Object(e))};function De(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(De.Cache||Jt),n}De.Cache=Jt;var We=De;var Xe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ge=/\\(\\)?/g,Je=function(t){var e=We(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Xe,(function(t,n,r,o){e.push(r?o.replace(Ge,"$1"):n||t)})),e})),Qe=f?f.prototype:void 0,Ye=Qe?Qe.toString:void 0;var He=function t(e){if("string"==typeof e)return e;if(x(e))return Z(e,t)+"";if(Be(e))return Ye?Ye.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var Ke=function(t){return null==t?"":He(t)};var Ze=function(t,e){return x(t)?t:Ue(t,e)?[t]:Je(Ke(t))};var tn=function(t){if("string"==typeof t||Be(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var en=function(t,e){for(var n=0,r=(e=Ze(e,t)).length;null!=t&&n<r;)t=t[tn(e[n++])];return n&&n==r?t:void 0};var nn=function(t,e,n){var r=null==t?void 0:en(t,e);return void 0===r?n:r};var rn=function(t,e){return null!=t&&e in Object(t)};var on=function(t,e,n){for(var r=-1,o=(e=Ze(e,t)).length,i=!1;++r<o;){var a=tn(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&E(o)&&T(a,o)&&(x(t)||A(t))};var an=function(t,e){return null!=t&&on(t,e,rn)};var un=function(t,e){return Ue(t)&&Me(e)?Re(tn(t),e):function(n){var r=nn(n,t);return void 0===r&&r===e?an(n,t):Ie(e,r,3)}};var cn=function(t){return function(e){return null==e?void 0:e[t]}};var sn=function(t){return function(e){return en(e,t)}};var fn=function(t){return Ue(t)?cn(tn(t)):sn(t)};var ln=function(t){return"function"==typeof t?t:null==t?Y:"object"==a(t)?x(t)?un(t[0],t[1]):qe(t):fn(t)};var vn=function(t,e){var n=-1,r=G(t)?Array(t.length):[];return Q(t,(function(t,o,i){r[++n]=e(t,o,i)})),r};var pn=function(t,e){return(x(t)?Z:vn)(t,ln(e))},dn=Array.prototype.join;var hn=function(t,e){return null==t?"":dn.call(t,e)};function yn(t){return"[object Array]"===Object.prototype.toString.call(t)}function bn(t){return"[object String]"===Object.prototype.toString.call(t)}function _n(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function mn(){var t,e,n=new Promise((function(){t=arguments[0],e=arguments[1]}));return n.resolve=t,n.reject=e,n}var gn=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i},jn=/^\s+|\s+$/g,wn=/^[-+]0x[0-9a-f]+$/i,On=/^0b[01]+$/i,Sn=/^0o[0-7]+$/i,An=parseInt;var xn=function(t){if("number"==typeof t)return t;if(Be(t))return NaN;if(W(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=W(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(jn,"");var n=On.test(t);return n||Sn.test(t)?An(t.slice(2),n?2:8):wn.test(t)?NaN:+t};var Nn=function(t){return t?Infinity===(t=xn(t))||-Infinity===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var kn=function(t){var e=Nn(t),n=e%1;return e==e?n?e-n:e:0};var zn=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||void 0===e?1:kn(e),gn(t,e<0?0:e,r)):[]};var Tn=function(t){return"number"==typeof t&&t==kn(t)};function En(t){return!(!bn(t)||""===t)}function $n(t){var e=!1;return En(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function Cn(t){return $n(t)?Nn(t):0}var In=s.isFinite,Pn=Math.min;var Mn=function(t){var e=Math[t];return function(t,n){if(t=xn(t),(n=null==n?0:Pn(kn(n),292))&&In(t)){var r=(Ke(t)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+n));return+((r=(Ke(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}("round");function Fn(t){return!!function(t){return!!$n(t)&&(t=Cn(t),Tn(t))}(t)&&function(t){if(!$n(t))return 0;t=Cn(t);var e=Mn(t);return"0"===String(e)?0:e}(t)>0}function Rn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=mn();if(!_n(t))return n.reject("waitfunction需輸入函數f"),n;if(!0===t())return n.resolve(),n;var r=nn(e,"attemptNum",null);Fn(r)||(r=200);var o=nn(e,"timeInterval",null);Fn(o)||(o=1e3);var i=0,a=setInterval((function(){i+=1,!0===t()&&(clearInterval(a),n.resolve()),i>r&&(clearInterval(a),n.resolve())}),o);return n}function qn(t,e){if(!En(t))return"";if(!Fn(e))return"";var n=t.length-e;return n<0&&(n=0),t.substr(n,e)}var Bn={},Ln={};function Vn(t){var e=t.tagName,n=t.path,r=t.attributes,o=void 0===r?{}:r,i=t.func,a=mn();if("done"===Bn[n])return a.resolve("loaded"),a;if("loading"===Bn[n])return Rn((function(){return"done"===Bn[n]})).then((function(){a.resolve("loaded")})),a;Bn[n]="loading";var u=document.createElement(e);return K(o,(function(t,e){u.setAttribute(e,t)})),o.rel&&"stylesheet"===o.rel?(u.setAttribute("href",n),setTimeout((function(){a.resolve(u),Bn[n]="done"}),1)):(u.src=n,u.addEventListener("load",(function(){var t;_n(i)?t=Rn(i):(t=mn()).resolve(),t.then((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;$n(t)||(t=10);var e=mn();return setTimeout((function(){e.resolve()}),t),e}(500)})).then((function(){a.resolve(u),Bn[n]="done"}))})),u.addEventListener("error",(function(){a.reject(u),Bn[n]="done"}))),document.getElementsByTagName("head")[0].appendChild(u),a}function Un(t){var e=mn();yn(t)||(t=[t]),K(t,(function(e,n){bn(e)&&(t[n]={path:e})}));var n=hn(pn(t,"path"),"|");return"done"===Ln[n]?(e.resolve("loaded"),e):"loading"===Ln[n]?(Rn((function(){return"done"===Ln[n]})).then((function(){e.resolve("loaded")})),e):(Ln[n]="loading",K(t,(function(t,e){t.type||(".js"===qn(t.path,3)?t.type="js":".css"===qn(t.path,4)?t.type="css":t.type="unknow")})),function(t,e){var n=mn();if(!yn(t))return n.reject("rs is not array"),n;_n(e)||(e=function(t){return t});var r=-1,o=[];return t.reduce((function(t,n){return t.then((function(t){return o.push(t),r+=1,_n(e)?e(n,r):n}))}),Promise.resolve()).then((function(t){o.push(t),o=zn(o),n.resolve(o)})).catch((function(t){n.reject(t)})),n}(t,(function(t){var e=mn();if("js"===t.type)e=Vn({tagName:"script",path:t.path,attributes:{type:"text/javascript"},func:t.func});else if("css"===t.type)e=Vn({tagName:"link",path:t.path,attributes:{rel:"stylesheet"}});else{var n="invalid pathItem.type: "+t.type;console.log(n),e.reject(n)}return e})).finally((function(){Ln[n]="done"})))}var Dn={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};function Wn(t,e,n,r,o,i,a,u,c,s){"boolean"!=typeof a&&(c=u,u=a,a=!1);var f,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=f):e&&(f=a?function(t){e.call(this,s(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),f)if(l.functional){var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,f):[f]}return n}var Xn,Gn="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Jn(t){return function(t,e){return function(t,e){var n=Gn?e.media||"default":t,r=Qn[n]||(Qn[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===Xn&&(Xn=document.head||document.getElementsByTagName("head")[0]),Xn.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),u=r.element.childNodes;u[i]&&r.element.removeChild(u[i]),u.length?r.element.insertBefore(a,u[i]):r.element.appendChild(a)}}}(t,e)}}var Qn={};const Yn=Dn;var Hn=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"inline-block"}},["cir1"===this.name?[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:this.size,height:this.size}},[e("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),this._v(" "),e("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:this._e()],2)};Hn._withStripped=!0;const Kn=Wn({render:Hn,staticRenderFns:[]},(function(t){t&&t("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),Yn,"data-v-619e545c",false,undefined,!1,Jn,void 0,void 0);function Zn(){return"undefined"!=typeof self?self:"undefined"!=typeof window&&void 0!==window.document?window:"undefined"!=typeof global?global:null}t&&!window.Vue&&(window.Vue=t);const tr={components:{WIconLoading:Kn},props:{pathItems:{type:Array,default:function(){return["https://cdn.jsdelivr.net/npm/quill@1.3.6/dist/quill.min.js","https://cdn.jsdelivr.net/npm/quill@1.3.6/dist/quill.snow.min.css","https://cdn.jsdelivr.net/npm/w-quill-vue@1.0.25/dist/w-quill-vue.umd.js"]}},value:{type:String,default:""},settings:{type:Object,default:function(){}},height:{type:Number,default:250},editable:{type:Boolean,default:!0}},data:function(){return{cmpName:"WIconLoading"}},mounted:function(){var e=this;Un(e.pathItems).then((function(n){if("loaded"!==n){var r=window["w-quill-vue"];r.default&&(r=r.default),(o=Zn(),t||o.Vue).component("w-quill-vue",r)}var o;e.cmpName="w-quill-vue"}))},computed:{},methods:{}};var er=function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.cmpName,{ref:"$self",tag:"component",attrs:{settings:t.settings,height:t.height,editable:t.editable,value:t.value},on:{input:function(e){t.$emit("input",e)}}})};er._withStripped=!0;return Wn({render:er,staticRenderFns:[]},(function(t){t&&t("data-v-4808c9a9_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WQuillVueDyn.vue"},media:void 0})}),tr,"data-v-4808c9a9",false,undefined,!1,Jn,void 0,void 0)}));
//# sourceMappingURL=w-quill-vue-dyn.umd.js.map
