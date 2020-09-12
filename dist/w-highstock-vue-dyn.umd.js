/*!
 * w-highstock-vue-dyn v1.4.27
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-highstock-vue-dyn"]=e(t.Vue)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);var r=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t};var o=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),u=i.length;u--;){var c=i[t?u:++o];if(!1===n(a[c],c,a))break}return e}}();var a=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var c=u((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e})),s="object"==c(i)&&i&&i.Object===Object&&i,f="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,l=s||f||Function("return this")(),v=l.Symbol,d=Object.prototype,p=d.hasOwnProperty,h=d.toString,y=v?v.toStringTag:void 0;var b=function(t){var e=p.call(t,y),n=t[y];try{t[y]=void 0;var r=!0}catch(t){}var o=h.call(t);return r&&(e?t[y]=n:delete t[y]),o},m=Object.prototype.toString;var _=function(t){return m.call(t)},g=v?v.toStringTag:void 0;var j=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?b(t):_(t)};var w=function(t){return null!=t&&"object"==c(t)};var S=function(t){return w(t)&&"[object Arguments]"==j(t)},O=Object.prototype,A=O.hasOwnProperty,k=O.propertyIsEnumerable,x=S(function(){return arguments}())?S:function(t){return w(t)&&A.call(t,"callee")&&!k.call(t,"callee")},T=Array.isArray;var M=function(){return!1},N=u((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?l.Buffer:void 0,a=(o?o.isBuffer:void 0)||M;t.exports=a})),Y=/^(?:0|[1-9]\d*)$/;var z=function(t,e){var n=c(t);return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Y.test(t))&&t>-1&&t%1==0&&t<e};var C=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},E={};E["[object Float32Array]"]=E["[object Float64Array]"]=E["[object Int8Array]"]=E["[object Int16Array]"]=E["[object Int32Array]"]=E["[object Uint8Array]"]=E["[object Uint8ClampedArray]"]=E["[object Uint16Array]"]=E["[object Uint32Array]"]=!0,E["[object Arguments]"]=E["[object Array]"]=E["[object ArrayBuffer]"]=E["[object Boolean]"]=E["[object DataView]"]=E["[object Date]"]=E["[object Error]"]=E["[object Function]"]=E["[object Map]"]=E["[object Number]"]=E["[object Object]"]=E["[object RegExp]"]=E["[object Set]"]=E["[object String]"]=E["[object WeakMap]"]=!1;var P=function(t){return w(t)&&C(t.length)&&!!E[j(t)]};var I=function(t){return function(e){return t(e)}},$=u((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&s.process,a=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),F=$&&$.isTypedArray,L=F?I(F):P,H=Object.prototype.hasOwnProperty;var R=function(t,e){var n=T(t),r=!n&&x(t),o=!n&&!r&&N(t),i=!n&&!r&&!o&&L(t),u=n||r||o||i,c=u?a(t.length,String):[],s=c.length;for(var f in t)!e&&!H.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||z(f,s))||c.push(f);return c},V=Object.prototype;var B=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||V)};var D=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),U=Object.prototype.hasOwnProperty;var G=function(t){if(!B(t))return D(t);var e=[];for(var n in Object(t))U.call(t,n)&&"constructor"!=n&&e.push(n);return e};var W=function(t){var e=c(t);return null!=t&&("object"==e||"function"==e)};var q=function(t){if(!W(t))return!1;var e=j(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var X=function(t){return null!=t&&C(t.length)&&!q(t)};var J=function(t){return X(t)?R(t):G(t)};var Z=function(t,e){return function(n,r){if(null==n)return n;if(!X(n))return t(n,r);for(var o=n.length,a=e?o:-1,i=Object(n);(e?a--:++a<o)&&!1!==r(i[a],a,i););return n}}((function(t,e){return t&&o(t,e,J)}));var K=function(t){return t};var Q=function(t){return"function"==typeof t?t:K};var tt=function(t,e){return(T(t)?r:Z)(t,Q(e))};var et=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var nt=function(){this.__data__=[],this.size=0};var rt=function(t,e){return t===e||t!=t&&e!=e};var ot=function(t,e){for(var n=t.length;n--;)if(rt(t[n][0],e))return n;return-1},at=Array.prototype.splice;var it=function(t){var e=this.__data__,n=ot(e,t);return!(n<0)&&(n==e.length-1?e.pop():at.call(e,n,1),--this.size,!0)};var ut=function(t){var e=this.__data__,n=ot(e,t);return n<0?void 0:e[n][1]};var ct=function(t){return ot(this.__data__,t)>-1};var st=function(t,e){var n=this.__data__,r=ot(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ft.prototype.clear=nt,ft.prototype.delete=it,ft.prototype.get=ut,ft.prototype.has=ct,ft.prototype.set=st;var lt=ft;var vt=function(){this.__data__=new lt,this.size=0};var dt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var pt=function(t){return this.__data__.get(t)};var ht,yt=function(t){return this.__data__.has(t)},bt=l["__core-js_shared__"],mt=(ht=/[^.]+$/.exec(bt&&bt.keys&&bt.keys.IE_PROTO||""))?"Symbol(src)_1."+ht:"";var _t=function(t){return!!mt&&mt in t},gt=Function.prototype.toString;var jt=function(t){if(null!=t){try{return gt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},wt=/^\[object .+?Constructor\]$/,St=Function.prototype,Ot=Object.prototype,At=St.toString,kt=Ot.hasOwnProperty,xt=RegExp("^"+At.call(kt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Tt=function(t){return!(!W(t)||_t(t))&&(q(t)?xt:wt).test(jt(t))};var Mt=function(t,e){return null==t?void 0:t[e]};var Nt=function(t,e){var n=Mt(t,e);return Tt(n)?n:void 0},Yt=Nt(l,"Map"),zt=Nt(Object,"create");var Ct=function(){this.__data__=zt?zt(null):{},this.size=0};var Et=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Pt=Object.prototype.hasOwnProperty;var It=function(t){var e=this.__data__;if(zt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Pt.call(e,t)?e[t]:void 0},$t=Object.prototype.hasOwnProperty;var Ft=function(t){var e=this.__data__;return zt?void 0!==e[t]:$t.call(e,t)};var Lt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=zt&&void 0===e?"__lodash_hash_undefined__":e,this};function Ht(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ht.prototype.clear=Ct,Ht.prototype.delete=Et,Ht.prototype.get=It,Ht.prototype.has=Ft,Ht.prototype.set=Lt;var Rt=Ht;var Vt=function(){this.size=0,this.__data__={hash:new Rt,map:new(Yt||lt),string:new Rt}};var Bt=function(t){var e=c(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Dt=function(t,e){var n=t.__data__;return Bt(e)?n["string"==typeof e?"string":"hash"]:n.map};var Ut=function(t){var e=Dt(this,t).delete(t);return this.size-=e?1:0,e};var Gt=function(t){return Dt(this,t).get(t)};var Wt=function(t){return Dt(this,t).has(t)};var qt=function(t,e){var n=Dt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Xt.prototype.clear=Vt,Xt.prototype.delete=Ut,Xt.prototype.get=Gt,Xt.prototype.has=Wt,Xt.prototype.set=qt;var Jt=Xt;var Zt=function(t,e){var n=this.__data__;if(n instanceof lt){var r=n.__data__;if(!Yt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Jt(r)}return n.set(t,e),this.size=n.size,this};function Kt(t){var e=this.__data__=new lt(t);this.size=e.size}Kt.prototype.clear=vt,Kt.prototype.delete=dt,Kt.prototype.get=pt,Kt.prototype.has=yt,Kt.prototype.set=Zt;var Qt=Kt;var te=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var ee=function(t){return this.__data__.has(t)};function ne(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Jt;++e<n;)this.add(t[e])}ne.prototype.add=ne.prototype.push=te,ne.prototype.has=ee;var re=ne;var oe=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1};var ae=function(t,e){return t.has(e)};var ie=function(t,e,n,r,o,a){var i=1&n,u=t.length,c=e.length;if(u!=c&&!(i&&c>u))return!1;var s=a.get(t),f=a.get(e);if(s&&f)return s==e&&f==t;var l=-1,v=!0,d=2&n?new re:void 0;for(a.set(t,e),a.set(e,t);++l<u;){var p=t[l],h=e[l];if(r)var y=i?r(h,p,l,e,t,a):r(p,h,l,t,e,a);if(void 0!==y){if(y)continue;v=!1;break}if(d){if(!oe(e,(function(t,e){if(!ae(d,e)&&(p===t||o(p,t,n,r,a)))return d.push(e)}))){v=!1;break}}else if(p!==h&&!o(p,h,n,r,a)){v=!1;break}}return a.delete(t),a.delete(e),v},ue=l.Uint8Array;var ce=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};var se=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},fe=v?v.prototype:void 0,le=fe?fe.valueOf:void 0;var ve=function(t,e,n,r,o,a,i){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new ue(t),new ue(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return rt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=ce;case"[object Set]":var c=1&r;if(u||(u=se),t.size!=e.size&&!c)return!1;var s=i.get(t);if(s)return s==e;r|=2,i.set(t,e);var f=ie(u(t),u(e),r,o,a,i);return i.delete(t),f;case"[object Symbol]":if(le)return le.call(t)==le.call(e)}return!1};var de=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};var pe=function(t,e,n){var r=e(t);return T(t)?r:de(r,n(t))};var he=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a};var ye=function(){return[]},be=Object.prototype.propertyIsEnumerable,me=Object.getOwnPropertySymbols,_e=me?function(t){return null==t?[]:(t=Object(t),he(me(t),(function(e){return be.call(t,e)})))}:ye;var ge=function(t){return pe(t,J,_e)},je=Object.prototype.hasOwnProperty;var we=function(t,e,n,r,o,a){var i=1&n,u=ge(t),c=u.length;if(c!=ge(e).length&&!i)return!1;for(var s=c;s--;){var f=u[s];if(!(i?f in e:je.call(e,f)))return!1}var l=a.get(t),v=a.get(e);if(l&&v)return l==e&&v==t;var d=!0;a.set(t,e),a.set(e,t);for(var p=i;++s<c;){var h=t[f=u[s]],y=e[f];if(r)var b=i?r(y,h,f,e,t,a):r(h,y,f,t,e,a);if(!(void 0===b?h===y||o(h,y,n,r,a):b)){d=!1;break}p||(p="constructor"==f)}if(d&&!p){var m=t.constructor,_=e.constructor;m==_||!("constructor"in t)||!("constructor"in e)||"function"==typeof m&&m instanceof m&&"function"==typeof _&&_ instanceof _||(d=!1)}return a.delete(t),a.delete(e),d},Se=Nt(l,"DataView"),Oe=Nt(l,"Promise"),Ae=Nt(l,"Set"),ke=Nt(l,"WeakMap"),xe="[object Map]",Te="[object Promise]",Me="[object Set]",Ne="[object WeakMap]",Ye="[object DataView]",ze=jt(Se),Ce=jt(Yt),Ee=jt(Oe),Pe=jt(Ae),Ie=jt(ke),$e=j;(Se&&$e(new Se(new ArrayBuffer(1)))!=Ye||Yt&&$e(new Yt)!=xe||Oe&&$e(Oe.resolve())!=Te||Ae&&$e(new Ae)!=Me||ke&&$e(new ke)!=Ne)&&($e=function(t){var e=j(t),n="[object Object]"==e?t.constructor:void 0,r=n?jt(n):"";if(r)switch(r){case ze:return Ye;case Ce:return xe;case Ee:return Te;case Pe:return Me;case Ie:return Ne}return e});var Fe=$e,Le="[object Arguments]",He="[object Array]",Re="[object Object]",Ve=Object.prototype.hasOwnProperty;var Be=function(t,e,n,r,o,a){var i=T(t),u=T(e),c=i?He:Fe(t),s=u?He:Fe(e),f=(c=c==Le?Re:c)==Re,l=(s=s==Le?Re:s)==Re,v=c==s;if(v&&N(t)){if(!N(e))return!1;i=!0,f=!1}if(v&&!f)return a||(a=new Qt),i||L(t)?ie(t,e,n,r,o,a):ve(t,e,c,n,r,o,a);if(!(1&n)){var d=f&&Ve.call(t,"__wrapped__"),p=l&&Ve.call(e,"__wrapped__");if(d||p){var h=d?t.value():t,y=p?e.value():e;return a||(a=new Qt),o(h,y,n,r,a)}}return!!v&&(a||(a=new Qt),we(t,e,n,r,o,a))};var De=function t(e,n,r,o,a){return e===n||(null==e||null==n||!w(e)&&!w(n)?e!=e&&n!=n:Be(e,n,r,o,t,a))};var Ue=function(t,e,n,r){var o=n.length,a=o,i=!r;if(null==t)return!a;for(t=Object(t);o--;){var u=n[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=n[o])[0],s=t[c],f=u[1];if(i&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new Qt;if(r)var v=r(s,f,c,t,e,l);if(!(void 0===v?De(f,s,3,r,l):v))return!1}}return!0};var Ge=function(t){return t==t&&!W(t)};var We=function(t){for(var e=J(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,Ge(o)]}return e};var qe=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};var Xe=function(t){var e=We(t);return 1==e.length&&e[0][2]?qe(e[0][0],e[0][1]):function(n){return n===t||Ue(n,t,e)}};var Je=function(t){return"symbol"==c(t)||w(t)&&"[object Symbol]"==j(t)},Ze=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ke=/^\w*$/;var Qe=function(t,e){if(T(t))return!1;var n=c(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Je(t))||(Ke.test(t)||!Ze.test(t)||null!=e&&t in Object(e))};function tn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(tn.Cache||Jt),n}tn.Cache=Jt;var en=tn;var nn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/\\(\\)?/g,on=function(t){var e=en(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(nn,(function(t,n,r,o){e.push(r?o.replace(rn,"$1"):n||t)})),e})),an=v?v.prototype:void 0,un=an?an.toString:void 0;var cn=function t(e){if("string"==typeof e)return e;if(T(e))return et(e,t)+"";if(Je(e))return un?un.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var sn=function(t){return null==t?"":cn(t)};var fn=function(t,e){return T(t)?t:Qe(t,e)?[t]:on(sn(t))};var ln=function(t){if("string"==typeof t||Je(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var vn=function(t,e){for(var n=0,r=(e=fn(e,t)).length;null!=t&&n<r;)t=t[ln(e[n++])];return n&&n==r?t:void 0};var dn=function(t,e,n){var r=null==t?void 0:vn(t,e);return void 0===r?n:r};var pn=function(t,e){return null!=t&&e in Object(t)};var hn=function(t,e,n){for(var r=-1,o=(e=fn(e,t)).length,a=!1;++r<o;){var i=ln(e[r]);if(!(a=null!=t&&n(t,i)))break;t=t[i]}return a||++r!=o?a:!!(o=null==t?0:t.length)&&C(o)&&z(i,o)&&(T(t)||x(t))};var yn=function(t,e){return null!=t&&hn(t,e,pn)};var bn=function(t,e){return Qe(t)&&Ge(e)?qe(ln(t),e):function(n){var r=dn(n,t);return void 0===r&&r===e?yn(n,t):De(e,r,3)}};var mn=function(t){return function(e){return null==e?void 0:e[t]}};var _n=function(t){return function(e){return vn(e,t)}};var gn=function(t){return Qe(t)?mn(ln(t)):_n(t)};var jn=function(t){return"function"==typeof t?t:null==t?K:"object"==c(t)?T(t)?bn(t[0],t[1]):Xe(t):gn(t)};var wn=function(t,e){var n=-1,r=X(t)?Array(t.length):[];return Z(t,(function(t,o,a){r[++n]=e(t,o,a)})),r};var Sn=function(t,e){return(T(t)?et:wn)(t,jn(e))},On=Array.prototype.join;var An=function(t,e){return null==t?"":On.call(t,e)};function kn(t){return"[object Array]"===Object.prototype.toString.call(t)}function xn(t){return"[object String]"===Object.prototype.toString.call(t)}function Tn(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function Mn(){var t,e,n=new Promise((function(){t=arguments[0],e=arguments[1]}));return n.resolve=t,n.reject=e,n}var Nn=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++r<o;)a[r]=t[r+e];return a},Yn=/^\s+|\s+$/g,zn=/^[-+]0x[0-9a-f]+$/i,Cn=/^0b[01]+$/i,En=/^0o[0-7]+$/i,Pn=parseInt;var In=function(t){if("number"==typeof t)return t;if(Je(t))return NaN;if(W(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=W(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Yn,"");var n=Cn.test(t);return n||En.test(t)?Pn(t.slice(2),n?2:8):zn.test(t)?NaN:+t},$n=1/0;var Fn=function(t){return t?(t=In(t))===$n||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Ln=function(t){var e=Fn(t),n=e%1;return e==e?n?e-n:e:0};var Hn=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||void 0===e?1:Ln(e),Nn(t,e<0?0:e,r)):[]};var Rn=function(t){return"number"==typeof t&&t==Ln(t)};function Vn(t){return!(!xn(t)||""===t)}function Bn(t){var e=!1;return Vn(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function Dn(t){return Bn(t)?Fn(t):0}var Un=l.isFinite,Gn=Math.min;var Wn=function(t){var e=Math[t];return function(t,n){if(t=In(t),(n=null==n?0:Gn(Ln(n),292))&&Un(t)){var r=(sn(t)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+n));return+((r=(sn(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}("round");function qn(t){return!!function(t){return!!Bn(t)&&(t=Dn(t),Rn(t))}(t)&&function(t){if(!Bn(t))return 0;t=Dn(t);var e=Wn(t);return"0"===String(e)?0:e}(t)>0}function Xn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Mn();if(!Tn(t))return n.reject("waitfunction需輸入函數f"),n;if(!0===t())return n.resolve(),n;var r=dn(e,"attemptNum",null);qn(r)||(r=200);var o=dn(e,"timeInterval",null);qn(o)||(o=1e3);var a=0,i=setInterval((function(){a+=1,!0===t()&&(clearInterval(i),n.resolve()),a>r&&(clearInterval(i),n.resolve())}),o);return n}function Jn(t,e){if(!Vn(t))return"";if(!qn(e))return"";var n=t.length-e;return n<0&&(n=0),t.substr(n,e)}var Zn={},Kn={};function Qn(t){var e=t.tagName,n=t.path,r=t.attributes,o=void 0===r?{}:r,a=t.func,i=Mn();if("done"===Zn[n])return i.resolve("loaded"),i;if("loading"===Zn[n])return Xn((function(){return"done"===Zn[n]})).then((function(){i.resolve("loaded")})),i;Zn[n]="loading";var u=document.createElement(e);return tt(o,(function(t,e){u.setAttribute(e,t)})),o.rel&&"stylesheet"===o.rel?(u.setAttribute("href",n),setTimeout((function(){i.resolve(u),Zn[n]="done"}),1)):(u.src=n,u.addEventListener("load",(function(){var t;Tn(a)?t=Xn(a):(t=Mn()).resolve(),t.then((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;Bn(t)||(t=10);var e=Mn();return setTimeout((function(){e.resolve()}),t),e}(500)})).then((function(){i.resolve(u),Zn[n]="done"}))})),u.addEventListener("error",(function(){i.reject(u),Zn[n]="done"}))),document.getElementsByTagName("head")[0].appendChild(u),i}function tr(t){var e=Mn();kn(t)||(t=[t]),tt(t,(function(e,n){xn(e)&&(t[n]={path:e})}));var n=An(Sn(t,"path"),"|");return"done"===Kn[n]?(e.resolve("loaded"),e):"loading"===Kn[n]?(Xn((function(){return"done"===Kn[n]})).then((function(){e.resolve("loaded")})),e):(Kn[n]="loading",tt(t,(function(t,e){t.type||(".js"===Jn(t.path,3)?t.type="js":".css"===Jn(t.path,4)?t.type="css":t.type="unknow")})),function(t,e){var n=Mn();if(!kn(t))return n.reject("rs is not array"),n;Tn(e)||(e=function(t){return t});var r=-1,o=[];return t.reduce((function(t,n){return t.then((function(t){return o.push(t),r+=1,Tn(e)?e(n,r):n}))}),Promise.resolve()).then((function(t){o.push(t),o=Hn(o),n.resolve(o)})).catch((function(t){n.reject(t)})),n}(t,(function(t){var e=Mn();if("js"===t.type)e=Qn({tagName:"script",path:t.path,attributes:{type:"text/javascript"},func:t.func});else if("css"===t.type)e=Qn({tagName:"link",path:t.path,attributes:{rel:"stylesheet"}});else{var n="invalid pathItem.type: "+t.type;console.log(n),e.reject(n)}return e})).finally((function(){Kn[n]="done"})))}var er={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};function nr(t,e,n,r,o,a,i,u,c,s){"boolean"!=typeof i&&(c=u,u=i,i=!1);var f,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):e&&(f=i?function(t){e.call(this,s(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),f)if(l.functional){var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,f):[f]}return n}var rr,or="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function ar(t){return function(t,e){return function(t,e){var n=or?e.media||"default":t,r=ir[n]||(ir[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===rr&&(rr=document.head||document.getElementsByTagName("head")[0]),rr.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var a=r.ids.size-1,i=document.createTextNode(o),u=r.element.childNodes;u[a]&&r.element.removeChild(u[a]),u.length?r.element.insertBefore(i,u[a]):r.element.appendChild(i)}}}(t,e)}}var ir={};const ur=er;var cr=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},["cir1"===t.name?[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:t.size,height:t.size}},[n("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[n("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),t._v(" "),n("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),t._v(" "),n("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[n("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),t._v(" "),n("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:t._e()],2)};cr._withStripped=!0;const sr=nr({render:cr,staticRenderFns:[]},(function(t){t&&t("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),ur,"data-v-619e545c",false,undefined,!1,ar,void 0,void 0);function fr(){return"undefined"!=typeof self?self:"undefined"!=typeof window&&void 0!==window.document?window:"undefined"!=typeof global?global:null}n.default&&!window.Vue&&(window.Vue=n.default);const lr={components:{WIconLoading:sr},props:{pathItems:{type:Array,default:function(){return["https://cdn.jsdelivr.net/npm/highcharts@8.2.0/highcharts.js","https://cdn.jsdelivr.net/npm/highcharts@8.2.0/modules/stock.js","https://cdn.jsdelivr.net/npm/vue-highcharts@0.1.0/dist/vue-highcharts.min.js"]}},options:{type:Object,default:function(){}}},data:function(){return{cmpName:"WIconLoading"}},mounted:function(){var t=this;tr(t.pathItems).then((function(e){if("loaded"!==e){window.Highcharts.setOptions({credits:{enabled:!1},global:{useUTC:!1},lang:{decimalPoint:".",thousandsSep:",",contextButtonTitle:"圖表匯出功能表",downloadJPEG:"下載 JPEG 圖片",downloadPDF:"下載 PDF 文件",downloadPNG:"下載 PNG 文件",downloadSVG:"下載 SVG 文件",downloadXLS:"下載 XLS 文件",openInCloud:"在 Highcharts Cloud 中打開",drillUpText:"返回 {series.name}",invalidDate:"無效的時間",loading:"載入中...",months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],noData:"沒有資料",printChart:"列印圖表",resetZoom:"重置縮放比例",resetZoomTitle:"重置為原始大小",shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],weekdays:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],viewData:"查看資料",rangeSelectorFrom:"開始時間",rangeSelectorTo:"結束時間",rangeSelectorZoom:"範圍",zoomIn:"縮小",zoomOut:"放大"},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y/%m/%d",week:"%Y/%m/%d",month:"%Y/%m",year:"%Y"}},xAxis:{dateTimeLabelFormats:{second:"%Y<br/>%m/%d",minute:"%Y<br/>%m/%d",hour:"%Y<br/>%m/%d",day:"%Y<br/>%m/%d",week:"%Y<br/>%m/%d",month:"%Y<br/>%m/%d",year:"%Y<br/>%m/%d"}},rangeSelector:{enabled:!1},plotOptions:{series:{dataGrouping:{dateTimeLabelFormats:{millisecond:["%Y/%m/%d %H:%M:%S.%L","%Y/%m/%d %H:%M:%S.%L"," ~ %H:%M:%S.%L"],second:["%Y/%m/%d %H:%M:%S","%Y/%m/%d %H:%M:%S"," ~ %H:%M:%S"],minute:["%Y/%m/%d %H:%M","%Y/%m/%d %H:%M"," ~ %H:%M"],hour:["%Y/%m/%d %H:%M","%Y/%m/%d %H:%M"," ~ %H:%M"],day:["%Y/%m/%d","%Y/%m/%d"," ~ %Y/%m/%d"],week:["%Y/%m/%d","%Y/%m/%d"," ~ %Y/%m/%d"],month:["%Y/%m","%Y/%m"," ~ %Y/%m"],year:["%Y","%Y"," ~ %Y"]}}}}});var r=window.VueHighcharts;r.default&&(r=r.default),(o=fr(),n.default||o.Vue).use(r)}var o;t.cmpName="Highstock"}))},computed:{},methods:{}};var vr=function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.cmpName,{ref:"$self",tag:"component",attrs:{options:t.options}})};vr._withStripped=!0;return nr({render:vr,staticRenderFns:[]},(function(t){t&&t("data-v-25c6e49d_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WHighstockVueDyn.vue"},media:void 0})}),lr,"data-v-25c6e49d",false,undefined,!1,ar,void 0,void 0)}));
//# sourceMappingURL=w-highstock-vue-dyn.umd.js.map
