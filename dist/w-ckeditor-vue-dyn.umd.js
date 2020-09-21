/*!
 * w-ckeditor-vue-dyn v1.4.36
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-ckeditor-vue-dyn"]=e(t.Vue)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);var r=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t};var o=function(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return e}}();var i=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var c=u((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e})),s="object"==c(a)&&a&&a.Object===Object&&a,f="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,l=s||f||Function("return this")(),v=l.Symbol,p=Object.prototype,d=p.hasOwnProperty,h=p.toString,y=v?v.toStringTag:void 0;var b=function(t){var e=d.call(t,y),n=t[y];try{t[y]=void 0;var r=!0}catch(t){}var o=h.call(t);return r&&(e?t[y]=n:delete t[y]),o},_=Object.prototype.toString;var g=function(t){return _.call(t)},m=v?v.toStringTag:void 0;var j=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?b(t):g(t)};var w=function(t){return null!=t&&"object"==c(t)};var O=function(t){return w(t)&&"[object Arguments]"==j(t)},S=Object.prototype,k=S.hasOwnProperty,A=S.propertyIsEnumerable,x=O(function(){return arguments}())?O:function(t){return w(t)&&k.call(t,"callee")&&!A.call(t,"callee")},N=Array.isArray;var z=function(){return!1},T=u((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?l.Buffer:void 0,i=(o?o.isBuffer:void 0)||z;t.exports=i})),E=/^(?:0|[1-9]\d*)$/;var C=function(t,e){var n=c(t);return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&E.test(t))&&t>-1&&t%1==0&&t<e};var $=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},I={};I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Arguments]"]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object Boolean]"]=I["[object DataView]"]=I["[object Date]"]=I["[object Error]"]=I["[object Function]"]=I["[object Map]"]=I["[object Number]"]=I["[object Object]"]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object WeakMap]"]=!1;var P=function(t){return w(t)&&$(t.length)&&!!I[j(t)]};var F=function(t){return function(e){return t(e)}},M=u((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&s.process,i=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),R=M&&M.isTypedArray,B=R?F(R):P,L=Object.prototype.hasOwnProperty;var U=function(t,e){var n=N(t),r=!n&&x(t),o=!n&&!r&&T(t),a=!n&&!r&&!o&&B(t),u=n||r||o||a,c=u?i(t.length,String):[],s=c.length;for(var f in t)!e&&!L.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||C(f,s))||c.push(f);return c},V=Object.prototype;var D=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||V)};var W=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),q=Object.prototype.hasOwnProperty;var X=function(t){if(!D(t))return W(t);var e=[];for(var n in Object(t))q.call(t,n)&&"constructor"!=n&&e.push(n);return e};var G=function(t){var e=c(t);return null!=t&&("object"==e||"function"==e)};var J=function(t){if(!G(t))return!1;var e=j(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var Y=function(t){return null!=t&&$(t.length)&&!J(t)};var H=function(t){return Y(t)?U(t):X(t)};var K=function(t,e){return function(n,r){if(null==n)return n;if(!Y(n))return t(n,r);for(var o=n.length,i=e?o:-1,a=Object(n);(e?i--:++i<o)&&!1!==r(a[i],i,a););return n}}((function(t,e){return t&&o(t,e,H)}));var Q=function(t){return t};var Z=function(t){return"function"==typeof t?t:Q};var tt=function(t,e){return(N(t)?r:K)(t,Z(e))};var et=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var nt=function(){this.__data__=[],this.size=0};var rt=function(t,e){return t===e||t!=t&&e!=e};var ot=function(t,e){for(var n=t.length;n--;)if(rt(t[n][0],e))return n;return-1},it=Array.prototype.splice;var at=function(t){var e=this.__data__,n=ot(e,t);return!(n<0)&&(n==e.length-1?e.pop():it.call(e,n,1),--this.size,!0)};var ut=function(t){var e=this.__data__,n=ot(e,t);return n<0?void 0:e[n][1]};var ct=function(t){return ot(this.__data__,t)>-1};var st=function(t,e){var n=this.__data__,r=ot(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ft.prototype.clear=nt,ft.prototype.delete=at,ft.prototype.get=ut,ft.prototype.has=ct,ft.prototype.set=st;var lt=ft;var vt=function(){this.__data__=new lt,this.size=0};var pt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var dt=function(t){return this.__data__.get(t)};var ht,yt=function(t){return this.__data__.has(t)},bt=l["__core-js_shared__"],_t=(ht=/[^.]+$/.exec(bt&&bt.keys&&bt.keys.IE_PROTO||""))?"Symbol(src)_1."+ht:"";var gt=function(t){return!!_t&&_t in t},mt=Function.prototype.toString;var jt=function(t){if(null!=t){try{return mt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},wt=/^\[object .+?Constructor\]$/,Ot=Function.prototype,St=Object.prototype,kt=Ot.toString,At=St.hasOwnProperty,xt=RegExp("^"+kt.call(At).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Nt=function(t){return!(!G(t)||gt(t))&&(J(t)?xt:wt).test(jt(t))};var zt=function(t,e){return null==t?void 0:t[e]};var Tt=function(t,e){var n=zt(t,e);return Nt(n)?n:void 0},Et=Tt(l,"Map"),Ct=Tt(Object,"create");var $t=function(){this.__data__=Ct?Ct(null):{},this.size=0};var It=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Pt=Object.prototype.hasOwnProperty;var Ft=function(t){var e=this.__data__;if(Ct){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Pt.call(e,t)?e[t]:void 0},Mt=Object.prototype.hasOwnProperty;var Rt=function(t){var e=this.__data__;return Ct?void 0!==e[t]:Mt.call(e,t)};var Bt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ct&&void 0===e?"__lodash_hash_undefined__":e,this};function Lt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Lt.prototype.clear=$t,Lt.prototype.delete=It,Lt.prototype.get=Ft,Lt.prototype.has=Rt,Lt.prototype.set=Bt;var Ut=Lt;var Vt=function(){this.size=0,this.__data__={hash:new Ut,map:new(Et||lt),string:new Ut}};var Dt=function(t){var e=c(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Wt=function(t,e){var n=t.__data__;return Dt(e)?n["string"==typeof e?"string":"hash"]:n.map};var qt=function(t){var e=Wt(this,t).delete(t);return this.size-=e?1:0,e};var Xt=function(t){return Wt(this,t).get(t)};var Gt=function(t){return Wt(this,t).has(t)};var Jt=function(t,e){var n=Wt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Yt.prototype.clear=Vt,Yt.prototype.delete=qt,Yt.prototype.get=Xt,Yt.prototype.has=Gt,Yt.prototype.set=Jt;var Ht=Yt;var Kt=function(t,e){var n=this.__data__;if(n instanceof lt){var r=n.__data__;if(!Et||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Ht(r)}return n.set(t,e),this.size=n.size,this};function Qt(t){var e=this.__data__=new lt(t);this.size=e.size}Qt.prototype.clear=vt,Qt.prototype.delete=pt,Qt.prototype.get=dt,Qt.prototype.has=yt,Qt.prototype.set=Kt;var Zt=Qt;var te=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var ee=function(t){return this.__data__.has(t)};function ne(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Ht;++e<n;)this.add(t[e])}ne.prototype.add=ne.prototype.push=te,ne.prototype.has=ee;var re=ne;var oe=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1};var ie=function(t,e){return t.has(e)};var ae=function(t,e,n,r,o,i){var a=1&n,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var s=i.get(t),f=i.get(e);if(s&&f)return s==e&&f==t;var l=-1,v=!0,p=2&n?new re:void 0;for(i.set(t,e),i.set(e,t);++l<u;){var d=t[l],h=e[l];if(r)var y=a?r(h,d,l,e,t,i):r(d,h,l,t,e,i);if(void 0!==y){if(y)continue;v=!1;break}if(p){if(!oe(e,(function(t,e){if(!ie(p,e)&&(d===t||o(d,t,n,r,i)))return p.push(e)}))){v=!1;break}}else if(d!==h&&!o(d,h,n,r,i)){v=!1;break}}return i.delete(t),i.delete(e),v},ue=l.Uint8Array;var ce=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};var se=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},fe=v?v.prototype:void 0,le=fe?fe.valueOf:void 0;var ve=function(t,e,n,r,o,i,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new ue(t),new ue(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return rt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=ce;case"[object Set]":var c=1&r;if(u||(u=se),t.size!=e.size&&!c)return!1;var s=a.get(t);if(s)return s==e;r|=2,a.set(t,e);var f=ae(u(t),u(e),r,o,i,a);return a.delete(t),f;case"[object Symbol]":if(le)return le.call(t)==le.call(e)}return!1};var pe=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};var de=function(t,e,n){var r=e(t);return N(t)?r:pe(r,n(t))};var he=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i};var ye=function(){return[]},be=Object.prototype.propertyIsEnumerable,_e=Object.getOwnPropertySymbols,ge=_e?function(t){return null==t?[]:(t=Object(t),he(_e(t),(function(e){return be.call(t,e)})))}:ye;var me=function(t){return de(t,H,ge)},je=Object.prototype.hasOwnProperty;var we=function(t,e,n,r,o,i){var a=1&n,u=me(t),c=u.length;if(c!=me(e).length&&!a)return!1;for(var s=c;s--;){var f=u[s];if(!(a?f in e:je.call(e,f)))return!1}var l=i.get(t),v=i.get(e);if(l&&v)return l==e&&v==t;var p=!0;i.set(t,e),i.set(e,t);for(var d=a;++s<c;){var h=t[f=u[s]],y=e[f];if(r)var b=a?r(y,h,f,e,t,i):r(h,y,f,t,e,i);if(!(void 0===b?h===y||o(h,y,n,r,i):b)){p=!1;break}d||(d="constructor"==f)}if(p&&!d){var _=t.constructor,g=e.constructor;_==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof g&&g instanceof g||(p=!1)}return i.delete(t),i.delete(e),p},Oe=Tt(l,"DataView"),Se=Tt(l,"Promise"),ke=Tt(l,"Set"),Ae=Tt(l,"WeakMap"),xe="[object Map]",Ne="[object Promise]",ze="[object Set]",Te="[object WeakMap]",Ee="[object DataView]",Ce=jt(Oe),$e=jt(Et),Ie=jt(Se),Pe=jt(ke),Fe=jt(Ae),Me=j;(Oe&&Me(new Oe(new ArrayBuffer(1)))!=Ee||Et&&Me(new Et)!=xe||Se&&Me(Se.resolve())!=Ne||ke&&Me(new ke)!=ze||Ae&&Me(new Ae)!=Te)&&(Me=function(t){var e=j(t),n="[object Object]"==e?t.constructor:void 0,r=n?jt(n):"";if(r)switch(r){case Ce:return Ee;case $e:return xe;case Ie:return Ne;case Pe:return ze;case Fe:return Te}return e});var Re=Me,Be="[object Arguments]",Le="[object Array]",Ue="[object Object]",Ve=Object.prototype.hasOwnProperty;var De=function(t,e,n,r,o,i){var a=N(t),u=N(e),c=a?Le:Re(t),s=u?Le:Re(e),f=(c=c==Be?Ue:c)==Ue,l=(s=s==Be?Ue:s)==Ue,v=c==s;if(v&&T(t)){if(!T(e))return!1;a=!0,f=!1}if(v&&!f)return i||(i=new Zt),a||B(t)?ae(t,e,n,r,o,i):ve(t,e,c,n,r,o,i);if(!(1&n)){var p=f&&Ve.call(t,"__wrapped__"),d=l&&Ve.call(e,"__wrapped__");if(p||d){var h=p?t.value():t,y=d?e.value():e;return i||(i=new Zt),o(h,y,n,r,i)}}return!!v&&(i||(i=new Zt),we(t,e,n,r,o,i))};var We=function t(e,n,r,o,i){return e===n||(null==e||null==n||!w(e)&&!w(n)?e!=e&&n!=n:De(e,n,r,o,t,i))};var qe=function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],s=t[c],f=u[1];if(a&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new Zt;if(r)var v=r(s,f,c,t,e,l);if(!(void 0===v?We(f,s,3,r,l):v))return!1}}return!0};var Xe=function(t){return t==t&&!G(t)};var Ge=function(t){for(var e=H(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,Xe(o)]}return e};var Je=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};var Ye=function(t){var e=Ge(t);return 1==e.length&&e[0][2]?Je(e[0][0],e[0][1]):function(n){return n===t||qe(n,t,e)}};var He=function(t){return"symbol"==c(t)||w(t)&&"[object Symbol]"==j(t)},Ke=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qe=/^\w*$/;var Ze=function(t,e){if(N(t))return!1;var n=c(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!He(t))||(Qe.test(t)||!Ke.test(t)||null!=e&&t in Object(e))};function tn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(tn.Cache||Ht),n}tn.Cache=Ht;var en=tn;var nn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/\\(\\)?/g,on=function(t){var e=en(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(nn,(function(t,n,r,o){e.push(r?o.replace(rn,"$1"):n||t)})),e})),an=v?v.prototype:void 0,un=an?an.toString:void 0;var cn=function t(e){if("string"==typeof e)return e;if(N(e))return et(e,t)+"";if(He(e))return un?un.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var sn=function(t){return null==t?"":cn(t)};var fn=function(t,e){return N(t)?t:Ze(t,e)?[t]:on(sn(t))};var ln=function(t){if("string"==typeof t||He(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var vn=function(t,e){for(var n=0,r=(e=fn(e,t)).length;null!=t&&n<r;)t=t[ln(e[n++])];return n&&n==r?t:void 0};var pn=function(t,e,n){var r=null==t?void 0:vn(t,e);return void 0===r?n:r};var dn=function(t,e){return null!=t&&e in Object(t)};var hn=function(t,e,n){for(var r=-1,o=(e=fn(e,t)).length,i=!1;++r<o;){var a=ln(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&$(o)&&C(a,o)&&(N(t)||x(t))};var yn=function(t,e){return null!=t&&hn(t,e,dn)};var bn=function(t,e){return Ze(t)&&Xe(e)?Je(ln(t),e):function(n){var r=pn(n,t);return void 0===r&&r===e?yn(n,t):We(e,r,3)}};var _n=function(t){return function(e){return null==e?void 0:e[t]}};var gn=function(t){return function(e){return vn(e,t)}};var mn=function(t){return Ze(t)?_n(ln(t)):gn(t)};var jn=function(t){return"function"==typeof t?t:null==t?Q:"object"==c(t)?N(t)?bn(t[0],t[1]):Ye(t):mn(t)};var wn=function(t,e){var n=-1,r=Y(t)?Array(t.length):[];return K(t,(function(t,o,i){r[++n]=e(t,o,i)})),r};var On=function(t,e){return(N(t)?et:wn)(t,jn(e))},Sn=Array.prototype.join;var kn=function(t,e){return null==t?"":Sn.call(t,e)};function An(t){return"[object Array]"===Object.prototype.toString.call(t)}function xn(t){return"[object String]"===Object.prototype.toString.call(t)}function Nn(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function zn(){var t,e,n=new Promise((function(){t=arguments[0],e=arguments[1]}));return n.resolve=t,n.reject=e,n}var Tn=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i},En=/^\s+|\s+$/g,Cn=/^[-+]0x[0-9a-f]+$/i,$n=/^0b[01]+$/i,In=/^0o[0-7]+$/i,Pn=parseInt;var Fn=function(t){if("number"==typeof t)return t;if(He(t))return NaN;if(G(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=G(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(En,"");var n=$n.test(t);return n||In.test(t)?Pn(t.slice(2),n?2:8):Cn.test(t)?NaN:+t},Mn=1/0;var Rn=function(t){return t?(t=Fn(t))===Mn||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Bn=function(t){var e=Rn(t),n=e%1;return e==e?n?e-n:e:0};var Ln=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||void 0===e?1:Bn(e),Tn(t,e<0?0:e,r)):[]};var Un=function(t){return"number"==typeof t&&t==Bn(t)};function Vn(t){return!(!xn(t)||""===t)}function Dn(t){var e=!1;return Vn(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function Wn(t){return Dn(t)?Rn(t):0}var qn=l.isFinite,Xn=Math.min;var Gn=function(t){var e=Math[t];return function(t,n){if(t=Fn(t),(n=null==n?0:Xn(Bn(n),292))&&qn(t)){var r=(sn(t)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+n));return+((r=(sn(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}("round");function Jn(t){return!!function(t){return!!Dn(t)&&(t=Wn(t),Un(t))}(t)&&function(t){if(!Dn(t))return 0;t=Wn(t);var e=Gn(t);return"0"===String(e)?0:e}(t)>0}function Yn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=zn();if(!Nn(t))return n.reject("waitfunction需輸入函數f"),n;if(!0===t())return n.resolve(),n;var r=pn(e,"attemptNum",null);Jn(r)||(r=200);var o=pn(e,"timeInterval",null);Jn(o)||(o=1e3);var i=0,a=setInterval((function(){i+=1,!0===t()&&(clearInterval(a),n.resolve()),i>r&&(clearInterval(a),n.resolve())}),o);return n}function Hn(t,e){if(!Vn(t))return"";if(!Jn(e))return"";var n=t.length-e;return n<0&&(n=0),t.substr(n,e)}var Kn={},Qn={};function Zn(t){var e=t.tagName,n=t.path,r=t.attributes,o=void 0===r?{}:r,i=t.func,a=zn();if("done"===Kn[n])return a.resolve("loaded"),a;if("loading"===Kn[n])return Yn((function(){return"done"===Kn[n]})).then((function(){a.resolve("loaded")})),a;Kn[n]="loading";var u=document.createElement(e);return tt(o,(function(t,e){u.setAttribute(e,t)})),o.rel&&"stylesheet"===o.rel?(u.setAttribute("href",n),setTimeout((function(){a.resolve(u),Kn[n]="done"}),1)):(u.src=n,u.addEventListener("load",(function(){var t;Nn(i)?t=Yn(i):(t=zn()).resolve(),t.then((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;Dn(t)||(t=10);var e=zn();return setTimeout((function(){e.resolve()}),t),e}(500)})).then((function(){a.resolve(u),Kn[n]="done"}))})),u.addEventListener("error",(function(){a.reject(u),Kn[n]="done"}))),document.getElementsByTagName("head")[0].appendChild(u),a}function tr(t){var e=zn();An(t)||(t=[t]),tt(t,(function(e,n){xn(e)&&(t[n]={path:e})}));var n=kn(On(t,"path"),"|");return"done"===Qn[n]?(e.resolve("loaded"),e):"loading"===Qn[n]?(Yn((function(){return"done"===Qn[n]})).then((function(){e.resolve("loaded")})),e):(Qn[n]="loading",tt(t,(function(t,e){t.type||(".js"===Hn(t.path,3)?t.type="js":".css"===Hn(t.path,4)?t.type="css":t.type="unknow")})),function(t,e){var n=zn();if(!An(t))return n.reject("rs is not array"),n;Nn(e)||(e=function(t){return t});var r=-1,o=[];return t.reduce((function(t,n){return t.then((function(t){return o.push(t),r+=1,Nn(e)?e(n,r):n}))}),Promise.resolve()).then((function(t){o.push(t),o=Ln(o),n.resolve(o)})).catch((function(t){n.reject(t)})),n}(t,(function(t){var e=zn();if("js"===t.type)e=Zn({tagName:"script",path:t.path,attributes:{type:"text/javascript"},func:t.func});else if("css"===t.type)e=Zn({tagName:"link",path:t.path,attributes:{rel:"stylesheet"}});else{var n="invalid pathItem.type: "+t.type;console.log(n),e.reject(n)}return e})).finally((function(){Qn[n]="done"})))}var er={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};function nr(t,e,n,r,o,i,a,u,c,s){"boolean"!=typeof a&&(c=u,u=a,a=!1);var f,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=f):e&&(f=a?function(t){e.call(this,s(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),f)if(l.functional){var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,f):[f]}return n}var rr,or="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function ir(t){return function(t,e){return function(t,e){var n=or?e.media||"default":t,r=ar[n]||(ar[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===rr&&(rr=document.head||document.getElementsByTagName("head")[0]),rr.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),u=r.element.childNodes;u[i]&&r.element.removeChild(u[i]),u.length?r.element.insertBefore(a,u[i]):r.element.appendChild(a)}}}(t,e)}}var ar={};const ur=er;var cr=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},["cir1"===t.name?[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:t.size,height:t.size}},[n("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[n("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),t._v(" "),n("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),t._v(" "),n("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[n("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),t._v(" "),n("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:t._e()],2)};cr._withStripped=!0;const sr=nr({render:cr,staticRenderFns:[]},(function(t){t&&t("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),ur,"data-v-619e545c",false,undefined,!1,ir,void 0,void 0);function fr(){return"undefined"!=typeof self?self:"undefined"!=typeof window&&void 0!==window.document?window:"undefined"!=typeof global?global:null}n.default&&!window.Vue&&(window.Vue=n.default);const lr={components:{WIconLoading:sr},props:{pathItems:{type:Array,default:function(){return["https://cdn.jsdelivr.net/npm/@ckeditor/ckeditor5-build-classic@21.0.0/build/ckeditor.js","https://cdn.jsdelivr.net/npm/w-ckeditor-vue@1.0.21/dist/w-ckeditor-vue.umd.js"]}},value:{type:String,default:""},settings:{type:Object,default:function(){}},height:{type:Number,default:250},editable:{type:Boolean,default:!0}},data:function(){return{cmpName:"WIconLoading"}},mounted:function(){var t=this;tr(t.pathItems).then((function(e){if("loaded"!==e){var r=window["w-ckeditor-vue"];r.default&&(r=r.default),(o=fr(),n.default||o.Vue).component("w-ckeditor-vue",r)}var o;t.cmpName="w-ckeditor-vue"}))},computed:{},methods:{}};var vr=function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.cmpName,{ref:"$self",tag:"component",attrs:{settings:t.settings,height:t.height,editable:t.editable,value:t.value},on:{input:function(e){t.$emit("input",e)}}})};vr._withStripped=!0;return nr({render:vr,staticRenderFns:[]},(function(t){t&&t("data-v-3b043b8b_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WCkeditorVueDyn.vue"},media:void 0})}),lr,"data-v-3b043b8b",false,undefined,!1,ir,void 0,void 0)}));
//# sourceMappingURL=w-ckeditor-vue-dyn.umd.js.map
