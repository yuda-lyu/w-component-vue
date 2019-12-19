/*!
 * w-highstock-vue-dyn v1.2.48
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self)["w-highstock-vue-dyn"]=e()}(this,(function(){"use strict";var t=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t};var e=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),u=i.length;u--;){var c=i[t?u:++o];if(!1===n(a[c],c,a))break}return e}}();var n=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r};function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t,e){return t(e={exports:{}},e.exports),e.exports}var i="object"==r(o)&&o&&o.Object===Object&&o,u="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,c=i||u||Function("return this")(),s=c.Symbol,f=Object.prototype,l=f.hasOwnProperty,v=f.toString,d=s?s.toStringTag:void 0;var p=function(t){var e=l.call(t,d),n=t[d];try{t[d]=void 0;var r=!0}catch(t){}var o=v.call(t);return r&&(e?t[d]=n:delete t[d]),o},h=Object.prototype.toString;var y=function(t){return h.call(t)},b="[object Null]",m="[object Undefined]",_=s?s.toStringTag:void 0;var g=function(t){return null==t?void 0===t?m:b:_&&_ in Object(t)?p(t):y(t)};var j=function(t){return null!=t&&"object"==r(t)},w="[object Arguments]";var S=function(t){return j(t)&&g(t)==w},O=Object.prototype,A=O.hasOwnProperty,k=O.propertyIsEnumerable,M=S(function(){return arguments}())?S:function(t){return j(t)&&A.call(t,"callee")&&!k.call(t,"callee")},x=Array.isArray;var T=function(){return!1},Y=a((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?c.Buffer:void 0,a=(o?o.isBuffer:void 0)||T;t.exports=a})),z=9007199254740991,N=/^(?:0|[1-9]\d*)$/;var C=function(t,e){var n=r(t);return!!(e=null==e?z:e)&&("number"==n||"symbol"!=n&&N.test(t))&&t>-1&&t%1==0&&t<e},E=9007199254740991;var P=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=E},$={};$["[object Float32Array]"]=$["[object Float64Array]"]=$["[object Int8Array]"]=$["[object Int16Array]"]=$["[object Int32Array]"]=$["[object Uint8Array]"]=$["[object Uint8ClampedArray]"]=$["[object Uint16Array]"]=$["[object Uint32Array]"]=!0,$["[object Arguments]"]=$["[object Array]"]=$["[object ArrayBuffer]"]=$["[object Boolean]"]=$["[object DataView]"]=$["[object Date]"]=$["[object Error]"]=$["[object Function]"]=$["[object Map]"]=$["[object Number]"]=$["[object Object]"]=$["[object RegExp]"]=$["[object Set]"]=$["[object String]"]=$["[object WeakMap]"]=!1;var F=function(t){return j(t)&&P(t.length)&&!!$[g(t)]};var L=function(t){return function(e){return t(e)}},H=a((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&i.process,a=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),I=H&&H.isTypedArray,R=I?L(I):F,B=Object.prototype.hasOwnProperty;var D=function(t,e){var r=x(t),o=!r&&M(t),a=!r&&!o&&Y(t),i=!r&&!o&&!a&&R(t),u=r||o||a||i,c=u?n(t.length,String):[],s=c.length;for(var f in t)!e&&!B.call(t,f)||u&&("length"==f||a&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||C(f,s))||c.push(f);return c},U=Object.prototype;var V=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||U)};var G=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),W=Object.prototype.hasOwnProperty;var X=function(t){if(!V(t))return G(t);var e=[];for(var n in Object(t))W.call(t,n)&&"constructor"!=n&&e.push(n);return e};var J=function(t){var e=r(t);return null!=t&&("object"==e||"function"==e)},Z="[object AsyncFunction]",q="[object Function]",K="[object GeneratorFunction]",Q="[object Proxy]";var tt=function(t){if(!J(t))return!1;var e=g(t);return e==q||e==K||e==Z||e==Q};var et=function(t){return null!=t&&P(t.length)&&!tt(t)};var nt=function(t){return et(t)?D(t):X(t)};var rt=function(t,e){return function(n,r){if(null==n)return n;if(!et(n))return t(n,r);for(var o=n.length,a=e?o:-1,i=Object(n);(e?a--:++a<o)&&!1!==r(i[a],a,i););return n}}((function(t,n){return t&&e(t,n,nt)}));var ot=function(t){return t};var at=function(t){return"function"==typeof t?t:ot};var it=function(e,n){return(x(e)?t:rt)(e,at(n))};var ut=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var ct=function(){this.__data__=[],this.size=0};var st=function(t,e){return t===e||t!=t&&e!=e};var ft=function(t,e){for(var n=t.length;n--;)if(st(t[n][0],e))return n;return-1},lt=Array.prototype.splice;var vt=function(t){var e=this.__data__,n=ft(e,t);return!(n<0)&&(n==e.length-1?e.pop():lt.call(e,n,1),--this.size,!0)};var dt=function(t){var e=this.__data__,n=ft(e,t);return n<0?void 0:e[n][1]};var pt=function(t){return ft(this.__data__,t)>-1};var ht=function(t,e){var n=this.__data__,r=ft(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yt.prototype.clear=ct,yt.prototype.delete=vt,yt.prototype.get=dt,yt.prototype.has=pt,yt.prototype.set=ht;var bt=yt;var mt=function(){this.__data__=new bt,this.size=0};var _t=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var gt=function(t){return this.__data__.get(t)};var jt,wt=function(t){return this.__data__.has(t)},St=c["__core-js_shared__"],Ot=(jt=/[^.]+$/.exec(St&&St.keys&&St.keys.IE_PROTO||""))?"Symbol(src)_1."+jt:"";var At=function(t){return!!Ot&&Ot in t},kt=Function.prototype.toString;var Mt=function(t){if(null!=t){try{return kt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},xt=/^\[object .+?Constructor\]$/,Tt=Function.prototype,Yt=Object.prototype,zt=Tt.toString,Nt=Yt.hasOwnProperty,Ct=RegExp("^"+zt.call(Nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Et=function(t){return!(!J(t)||At(t))&&(tt(t)?Ct:xt).test(Mt(t))};var Pt=function(t,e){return null==t?void 0:t[e]};var $t=function(t,e){var n=Pt(t,e);return Et(n)?n:void 0},Ft=$t(c,"Map"),Lt=$t(Object,"create");var Ht=function(){this.__data__=Lt?Lt(null):{},this.size=0};var It=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Rt="__lodash_hash_undefined__",Bt=Object.prototype.hasOwnProperty;var Dt=function(t){var e=this.__data__;if(Lt){var n=e[t];return n===Rt?void 0:n}return Bt.call(e,t)?e[t]:void 0},Ut=Object.prototype.hasOwnProperty;var Vt=function(t){var e=this.__data__;return Lt?void 0!==e[t]:Ut.call(e,t)},Gt="__lodash_hash_undefined__";var Wt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Lt&&void 0===e?Gt:e,this};function Xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Xt.prototype.clear=Ht,Xt.prototype.delete=It,Xt.prototype.get=Dt,Xt.prototype.has=Vt,Xt.prototype.set=Wt;var Jt=Xt;var Zt=function(){this.size=0,this.__data__={hash:new Jt,map:new(Ft||bt),string:new Jt}};var qt=function(t){var e=r(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Kt=function(t,e){var n=t.__data__;return qt(e)?n["string"==typeof e?"string":"hash"]:n.map};var Qt=function(t){var e=Kt(this,t).delete(t);return this.size-=e?1:0,e};var te=function(t){return Kt(this,t).get(t)};var ee=function(t){return Kt(this,t).has(t)};var ne=function(t,e){var n=Kt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function re(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}re.prototype.clear=Zt,re.prototype.delete=Qt,re.prototype.get=te,re.prototype.has=ee,re.prototype.set=ne;var oe=re,ae=200;var ie=function(t,e){var n=this.__data__;if(n instanceof bt){var r=n.__data__;if(!Ft||r.length<ae-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new oe(r)}return n.set(t,e),this.size=n.size,this};function ue(t){var e=this.__data__=new bt(t);this.size=e.size}ue.prototype.clear=mt,ue.prototype.delete=_t,ue.prototype.get=gt,ue.prototype.has=wt,ue.prototype.set=ie;var ce=ue,se="__lodash_hash_undefined__";var fe=function(t){return this.__data__.set(t,se),this};var le=function(t){return this.__data__.has(t)};function ve(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new oe;++e<n;)this.add(t[e])}ve.prototype.add=ve.prototype.push=fe,ve.prototype.has=le;var de=ve;var pe=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1};var he=function(t,e){return t.has(e)},ye=1,be=2;var me=function(t,e,n,r,o,a){var i=n&ye,u=t.length,c=e.length;if(u!=c&&!(i&&c>u))return!1;var s=a.get(t);if(s&&a.get(e))return s==e;var f=-1,l=!0,v=n&be?new de:void 0;for(a.set(t,e),a.set(e,t);++f<u;){var d=t[f],p=e[f];if(r)var h=i?r(p,d,f,e,t,a):r(d,p,f,t,e,a);if(void 0!==h){if(h)continue;l=!1;break}if(v){if(!pe(e,(function(t,e){if(!he(v,e)&&(d===t||o(d,t,n,r,a)))return v.push(e)}))){l=!1;break}}else if(d!==p&&!o(d,p,n,r,a)){l=!1;break}}return a.delete(t),a.delete(e),l},_e=c.Uint8Array;var ge=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};var je=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},we=1,Se=2,Oe="[object Boolean]",Ae="[object Date]",ke="[object Error]",Me="[object Map]",xe="[object Number]",Te="[object RegExp]",Ye="[object Set]",ze="[object String]",Ne="[object Symbol]",Ce="[object ArrayBuffer]",Ee="[object DataView]",Pe=s?s.prototype:void 0,$e=Pe?Pe.valueOf:void 0;var Fe=function(t,e,n,r,o,a,i){switch(n){case Ee:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Ce:return!(t.byteLength!=e.byteLength||!a(new _e(t),new _e(e)));case Oe:case Ae:case xe:return st(+t,+e);case ke:return t.name==e.name&&t.message==e.message;case Te:case ze:return t==e+"";case Me:var u=ge;case Ye:var c=r&we;if(u||(u=je),t.size!=e.size&&!c)return!1;var s=i.get(t);if(s)return s==e;r|=Se,i.set(t,e);var f=me(u(t),u(e),r,o,a,i);return i.delete(t),f;case Ne:if($e)return $e.call(t)==$e.call(e)}return!1};var Le=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};var He=function(t,e,n){var r=e(t);return x(t)?r:Le(r,n(t))};var Ie=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a};var Re=function(){return[]},Be=Object.prototype.propertyIsEnumerable,De=Object.getOwnPropertySymbols,Ue=De?function(t){return null==t?[]:(t=Object(t),Ie(De(t),(function(e){return Be.call(t,e)})))}:Re;var Ve=function(t){return He(t,nt,Ue)},Ge=1,We=Object.prototype.hasOwnProperty;var Xe=function(t,e,n,r,o,a){var i=n&Ge,u=Ve(t),c=u.length;if(c!=Ve(e).length&&!i)return!1;for(var s=c;s--;){var f=u[s];if(!(i?f in e:We.call(e,f)))return!1}var l=a.get(t);if(l&&a.get(e))return l==e;var v=!0;a.set(t,e),a.set(e,t);for(var d=i;++s<c;){var p=t[f=u[s]],h=e[f];if(r)var y=i?r(h,p,f,e,t,a):r(p,h,f,t,e,a);if(!(void 0===y?p===h||o(p,h,n,r,a):y)){v=!1;break}d||(d="constructor"==f)}if(v&&!d){var b=t.constructor,m=e.constructor;b!=m&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof m&&m instanceof m)&&(v=!1)}return a.delete(t),a.delete(e),v},Je=$t(c,"DataView"),Ze=$t(c,"Promise"),qe=$t(c,"Set"),Ke=$t(c,"WeakMap"),Qe=Mt(Je),tn=Mt(Ft),en=Mt(Ze),nn=Mt(qe),rn=Mt(Ke),on=g;(Je&&"[object DataView]"!=on(new Je(new ArrayBuffer(1)))||Ft&&"[object Map]"!=on(new Ft)||Ze&&"[object Promise]"!=on(Ze.resolve())||qe&&"[object Set]"!=on(new qe)||Ke&&"[object WeakMap]"!=on(new Ke))&&(on=function(t){var e=g(t),n="[object Object]"==e?t.constructor:void 0,r=n?Mt(n):"";if(r)switch(r){case Qe:return"[object DataView]";case tn:return"[object Map]";case en:return"[object Promise]";case nn:return"[object Set]";case rn:return"[object WeakMap]"}return e});var an=on,un=1,cn="[object Arguments]",sn="[object Array]",fn="[object Object]",ln=Object.prototype.hasOwnProperty;var vn=function(t,e,n,r,o,a){var i=x(t),u=x(e),c=i?sn:an(t),s=u?sn:an(e),f=(c=c==cn?fn:c)==fn,l=(s=s==cn?fn:s)==fn,v=c==s;if(v&&Y(t)){if(!Y(e))return!1;i=!0,f=!1}if(v&&!f)return a||(a=new ce),i||R(t)?me(t,e,n,r,o,a):Fe(t,e,c,n,r,o,a);if(!(n&un)){var d=f&&ln.call(t,"__wrapped__"),p=l&&ln.call(e,"__wrapped__");if(d||p){var h=d?t.value():t,y=p?e.value():e;return a||(a=new ce),o(h,y,n,r,a)}}return!!v&&(a||(a=new ce),Xe(t,e,n,r,o,a))};var dn=function t(e,n,r,o,a){return e===n||(null==e||null==n||!j(e)&&!j(n)?e!=e&&n!=n:vn(e,n,r,o,t,a))},pn=1,hn=2;var yn=function(t,e,n,r){var o=n.length,a=o,i=!r;if(null==t)return!a;for(t=Object(t);o--;){var u=n[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=n[o])[0],s=t[c],f=u[1];if(i&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new ce;if(r)var v=r(s,f,c,t,e,l);if(!(void 0===v?dn(f,s,pn|hn,r,l):v))return!1}}return!0};var bn=function(t){return t==t&&!J(t)};var mn=function(t){for(var e=nt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,bn(o)]}return e};var _n=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};var gn=function(t){var e=mn(t);return 1==e.length&&e[0][2]?_n(e[0][0],e[0][1]):function(n){return n===t||yn(n,t,e)}},jn="[object Symbol]";var wn=function(t){return"symbol"==r(t)||j(t)&&g(t)==jn},Sn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,On=/^\w*$/;var An=function(t,e){if(x(t))return!1;var n=r(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!wn(t))||(On.test(t)||!Sn.test(t)||null!=e&&t in Object(e))},kn="Expected a function";function Mn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(kn);var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(Mn.Cache||oe),n}Mn.Cache=oe;var xn=Mn,Tn=500;var Yn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zn=/\\(\\)?/g,Nn=function(t){var e=xn(t,(function(t){return n.size===Tn&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Yn,(function(t,n,r,o){e.push(r?o.replace(zn,"$1"):n||t)})),e})),Cn=1/0,En=s?s.prototype:void 0,Pn=En?En.toString:void 0;var $n=function t(e){if("string"==typeof e)return e;if(x(e))return ut(e,t)+"";if(wn(e))return Pn?Pn.call(e):"";var n=e+"";return"0"==n&&1/e==-Cn?"-0":n};var Fn=function(t){return null==t?"":$n(t)};var Ln=function(t,e){return x(t)?t:An(t,e)?[t]:Nn(Fn(t))},Hn=1/0;var In=function(t){if("string"==typeof t||wn(t))return t;var e=t+"";return"0"==e&&1/t==-Hn?"-0":e};var Rn=function(t,e){for(var n=0,r=(e=Ln(e,t)).length;null!=t&&n<r;)t=t[In(e[n++])];return n&&n==r?t:void 0};var Bn=function(t,e,n){var r=null==t?void 0:Rn(t,e);return void 0===r?n:r};var Dn=function(t,e){return null!=t&&e in Object(t)};var Un=function(t,e,n){for(var r=-1,o=(e=Ln(e,t)).length,a=!1;++r<o;){var i=In(e[r]);if(!(a=null!=t&&n(t,i)))break;t=t[i]}return a||++r!=o?a:!!(o=null==t?0:t.length)&&P(o)&&C(i,o)&&(x(t)||M(t))};var Vn=function(t,e){return null!=t&&Un(t,e,Dn)},Gn=1,Wn=2;var Xn=function(t,e){return An(t)&&bn(e)?_n(In(t),e):function(n){var r=Bn(n,t);return void 0===r&&r===e?Vn(n,t):dn(e,r,Gn|Wn)}};var Jn=function(t){return function(e){return null==e?void 0:e[t]}};var Zn=function(t){return function(e){return Rn(e,t)}};var qn=function(t){return An(t)?Jn(In(t)):Zn(t)};var Kn=function(t){return"function"==typeof t?t:null==t?ot:"object"==r(t)?x(t)?Xn(t[0],t[1]):gn(t):qn(t)};var Qn=function(t,e){var n=-1,r=et(t)?Array(t.length):[];return rt(t,(function(t,o,a){r[++n]=e(t,o,a)})),r};var tr=function(t,e){return(x(t)?ut:Qn)(t,Kn(e))},er=Array.prototype.join;var nr=function(t,e){return null==t?"":er.call(t,e)};function rr(t){return"[object Array]"===Object.prototype.toString.call(t)}function or(t){return"[object String]"===Object.prototype.toString.call(t)}function ar(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function ir(){var t,e,n=new Promise((function(){t=arguments[0],e=arguments[1]}));return n.resolve=t,n.reject=e,n}var ur=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++r<o;)a[r]=t[r+e];return a},cr=NaN,sr=/^\s+|\s+$/g,fr=/^[-+]0x[0-9a-f]+$/i,lr=/^0b[01]+$/i,vr=/^0o[0-7]+$/i,dr=parseInt;var pr=function(t){if("number"==typeof t)return t;if(wn(t))return cr;if(J(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=J(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(sr,"");var n=lr.test(t);return n||vr.test(t)?dr(t.slice(2),n?2:8):fr.test(t)?cr:+t},hr=1/0,yr=17976931348623157e292;var br=function(t){return t?(t=pr(t))===hr||t===-hr?(t<0?-1:1)*yr:t==t?t:0:0===t?t:0};var mr=function(t){var e=br(t),n=e%1;return e==e?n?e-n:e:0};var _r=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||void 0===e?1:mr(e),ur(t,e<0?0:e,r)):[]};var gr=function(t){return"number"==typeof t&&t==mr(t)};function jr(t){return!(!or(t)||""===t)}function wr(t){var e=!1;return jr(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function Sr(t){return wr(t)?br(t):0}var Or=c.isFinite,Ar=Math.min;var kr=function(t){var e=Math[t];return function(t,n){if(t=pr(t),(n=null==n?0:Ar(mr(n),292))&&Or(t)){var r=(Fn(t)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+n));return+((r=(Fn(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}("round");function Mr(t){return!!function(t){return!!wr(t)&&(t=Sr(t),gr(t))}(t)&&function(t){if(!wr(t))return 0;t=Sr(t);var e=kr(t);return"0"===String(e)?0:e}(t)>0}function xr(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180,n=ir();if(!ar(t))return n.reject("waitfunction需輸入函數f"),n;Mr(e)||(e=180);var r=0,o=setInterval((function(){r+=1,!0===t()&&(clearInterval(o),n.resolve()),r>=e&&(clearInterval(o),n.resolve())}),1e3);return n}function Tr(t,e){if(!jr(t))return"";if(!Mr(e))return"";var n=t.length-e;return n<0&&(n=0),t.substr(n,e)}var Yr={},zr={};function Nr(t){var e=t.tagName,n=t.path,r=t.attributes,o=void 0===r?{}:r,a=t.func,i=ir();if("done"===Yr[n])return i.resolve("loaded"),i;if("loading"===Yr[n])return xr((function(){return"done"===Yr[n]})).then((function(){i.resolve("loaded")})),i;Yr[n]="loading";var u=document.createElement(e);return it(o,(function(t,e){u.setAttribute(e,t)})),o.rel&&"stylesheet"===o.rel?(u.setAttribute("href",n),setTimeout((function(){i.resolve(u),Yr[n]="done"}),1)):(u.src=n,u.addEventListener("load",(function(){var t;ar(a)?t=xr(a):(t=ir()).resolve(),t.then((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;wr(t)||(t=10);var e=ir();return setTimeout((function(){e.resolve()}),t),e}(500)})).then((function(){i.resolve(u),Yr[n]="done"}))})),u.addEventListener("error",(function(){i.reject(u),Yr[n]="done"}))),document.getElementsByTagName("head")[0].appendChild(u),i}function Cr(t){var e=ir();rr(t)||(t=[t]),it(t,(function(e,n){or(e)&&(t[n]={path:e})}));var n=nr(tr(t,"path"),"|");return"done"===zr[n]?(e.resolve("loaded"),e):"loading"===zr[n]?(xr((function(){return"done"===zr[n]})).then((function(){e.resolve("loaded")})),e):(zr[n]="loading",it(t,(function(t,e){t.type||(".js"===Tr(t.path,3)?t.type="js":".css"===Tr(t.path,4)?t.type="css":t.type="unknow")})),function(t,e){var n=ir();if(!rr(t))return n.reject("rs is not array"),n;ar(e)||(e=function(t){return t});var r=-1,o=[];return t.reduce((function(t,n){return t.then((function(t){return o.push(t),e(n,r+=1)}))}),Promise.resolve()).then((function(t){o.push(t),o=_r(o),n.resolve(o)})).catch((function(t){n.reject(t)})),n}(t,(function(t){var e=ir();if("js"===t.type)e=Nr({tagName:"script",path:t.path,attributes:{type:"text/javascript"},func:t.func});else if("css"===t.type)e=Nr({tagName:"link",path:t.path,attributes:{rel:"stylesheet"}});else{var n="invalid pathItem.type: "+t.type;console.log(n),e.reject(n)}return e})).finally((function(){zr[n]="done"})))}var Er={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};var Pr=function(t,e,n,r,o,a,i,u,c,s){"boolean"!=typeof i&&(c=u,u=i,i=!1);var f,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):e&&(f=i?function(){e.call(this,s(this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),f)if(l.functional){var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,f):[f]}return n},$r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var Fr=document.head||document.getElementsByTagName("head")[0],Lr={};var Hr=function(t){return function(t,e){return function(t,e){var n=$r?e.media||"default":t,r=Lr[n]||(Lr[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),Fr.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var a=r.ids.size-1,i=document.createTextNode(o),u=r.element.childNodes;u[a]&&r.element.removeChild(u[a]),u.length?r.element.insertBefore(i,u[a]):r.element.appendChild(i)}}}(t,e)}};const Ir=Er;var Rr=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"inline-block"}},["cir1"===this.name?[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:this.size,height:this.size}},[e("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),this._v(" "),e("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:this._e()],2)};Rr._withStripped=!0;const Br={components:{WIconLoading:Pr({render:Rr,staticRenderFns:[]},(function(t){t&&t("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),Ir,"data-v-619e545c",!1,void 0,Hr,void 0)},props:{pathItems:{type:Array,default:function(){return["https://cdn.jsdelivr.net/npm/highcharts@8.0.0/highcharts.js","https://cdn.jsdelivr.net/npm/highcharts@8.0.0/modules/stock.js","https://cdn.jsdelivr.net/npm/vue-highcharts@0.1.0/dist/vue-highcharts.min.js"]}},options:{type:Object,default:function(){}}},data:function(){return{cmpName:"WIconLoading"}},mounted:function(){var t=this,e=window.Vue;Cr(t.pathItems).then((function(n){if("loaded"!==n){window.Highcharts.setOptions({credits:{enabled:!1},lang:{decimalPoint:".",thousandsSep:",",contextButtonTitle:"圖表匯出功能表",downloadJPEG:"下載 JPEG 圖片",downloadPDF:"下載 PDF 文件",downloadPNG:"下載 PNG 文件",downloadSVG:"下載 SVG 文件",downloadXLS:"下載 XLS 文件",openInCloud:"在 Highcharts Cloud 中打開",drillUpText:"返回 {series.name}",invalidDate:"無效的時間",loading:"載入中...",months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],noData:"沒有資料",printChart:"列印圖表",resetZoom:"重置縮放比例",resetZoomTitle:"重置為原始大小",shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],weekdays:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],viewData:"查看資料",rangeSelectorFrom:"開始時間",rangeSelectorTo:"結束時間",rangeSelectorZoom:"範圍",zoomIn:"縮小",zoomOut:"放大"},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y/%m/%d",week:"%Y/%m/%d",month:"%Y/%m",year:"%Y"}},xAxis:{dateTimeLabelFormats:{second:"%Y<br/>%m/%d",minute:"%Y<br/>%m/%d",hour:"%Y<br/>%m/%d",day:"%Y<br/>%m/%d",week:"%Y<br/>%m/%d",month:"%Y<br/>%m/%d",year:"%Y<br/>%m/%d"}},rangeSelector:{enabled:!1},plotOptions:{series:{dataGrouping:{dateTimeLabelFormats:{millisecond:["%Y/%m/%d %H:%M:%S.%L","%Y/%m/%d %H:%M:%S.%L"," ~ %H:%M:%S.%L"],second:["%Y/%m/%d %H:%M:%S","%Y/%m/%d %H:%M:%S"," ~ %H:%M:%S"],minute:["%Y/%m/%d %H:%M","%Y/%m/%d %H:%M"," ~ %H:%M"],hour:["%Y/%m/%d %H:%M","%Y/%m/%d %H:%M"," ~ %H:%M"],day:["%Y/%m/%d","%Y/%m/%d"," ~ %Y/%m/%d"],week:["%Y/%m/%d","%Y/%m/%d"," ~ %Y/%m/%d"],month:["%Y/%m","%Y/%m"," ~ %Y/%m"],year:["%Y","%Y"," ~ %Y"]}}}}});var r=window.VueHighcharts;r.default&&(r=r.default),e.use(r)}t.cmpName="Highstock"}))},computed:{},methods:{}};var Dr=function(){var t=this.$createElement;return(this._self._c||t)(this.cmpName,{ref:"$self",tag:"component",attrs:{options:this.options}})};Dr._withStripped=!0;return Pr({render:Dr,staticRenderFns:[]},(function(t){t&&t("data-v-2512e010_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WHighstockVueDyn.vue"},media:void 0})}),Br,"data-v-2512e010",!1,void 0,Hr,void 0)}));
//# sourceMappingURL=w-highstock-vue-dyn.umd.js.map
