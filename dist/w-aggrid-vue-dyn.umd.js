/*!
 * w-aggrid-vue-dyn v1.4.27
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define(["vue"],n):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-aggrid-vue-dyn"]=n(t.Vue)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=n(t);var r=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r&&!1!==n(t[e],e,t););return t};var o=function(t){return function(n,e,r){for(var o=-1,i=Object(n),a=r(n),u=a.length;u--;){var c=a[t?u:++o];if(!1===e(i[c],c,i))break}return n}}();var i=function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r},a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}var c=u((function(t){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n})),s="object"==c(a)&&a&&a.Object===Object&&a,f="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,l=s||f||Function("return this")(),v=l.Symbol,p=Object.prototype,d=p.hasOwnProperty,h=p.toString,y=v?v.toStringTag:void 0;var b=function(t){var n=d.call(t,y),e=t[y];try{t[y]=void 0;var r=!0}catch(t){}var o=h.call(t);return r&&(n?t[y]=e:delete t[y]),o},g=Object.prototype.toString;var _=function(t){return g.call(t)},m=v?v.toStringTag:void 0;var j=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?b(t):_(t)};var w=function(t){return null!=t&&"object"==c(t)};var O=function(t){return w(t)&&"[object Arguments]"==j(t)},S=Object.prototype,A=S.hasOwnProperty,x=S.propertyIsEnumerable,N=O(function(){return arguments}())?O:function(t){return w(t)&&A.call(t,"callee")&&!x.call(t,"callee")},k=Array.isArray;var z=function(){return!1},T=u((function(t,n){var e=n&&!n.nodeType&&n,r=e&&t&&!t.nodeType&&t,o=r&&r.exports===e?l.Buffer:void 0,i=(o?o.isBuffer:void 0)||z;t.exports=i})),E=/^(?:0|[1-9]\d*)$/;var C=function(t,n){var e=c(t);return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&E.test(t))&&t>-1&&t%1==0&&t<n};var $=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},I={};I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Arguments]"]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object Boolean]"]=I["[object DataView]"]=I["[object Date]"]=I["[object Error]"]=I["[object Function]"]=I["[object Map]"]=I["[object Number]"]=I["[object Object]"]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object WeakMap]"]=!1;var P=function(t){return w(t)&&$(t.length)&&!!I[j(t)]};var F=function(t){return function(n){return t(n)}},M=u((function(t,n){var e=n&&!n.nodeType&&n,r=e&&t&&!t.nodeType&&t,o=r&&r.exports===e&&s.process,i=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),R=M&&M.isTypedArray,L=R?F(R):P,B=Object.prototype.hasOwnProperty;var U=function(t,n){var e=k(t),r=!e&&N(t),o=!e&&!r&&T(t),a=!e&&!r&&!o&&L(t),u=e||r||o||a,c=u?i(t.length,String):[],s=c.length;for(var f in t)!n&&!B.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||C(f,s))||c.push(f);return c},V=Object.prototype;var D=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||V)};var W=function(t,n){return function(e){return t(n(e))}}(Object.keys,Object),q=Object.prototype.hasOwnProperty;var X=function(t){if(!D(t))return W(t);var n=[];for(var e in Object(t))q.call(t,e)&&"constructor"!=e&&n.push(e);return n};var G=function(t){var n=c(t);return null!=t&&("object"==n||"function"==n)};var J=function(t){if(!G(t))return!1;var n=j(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var Y=function(t){return null!=t&&$(t.length)&&!J(t)};var H=function(t){return Y(t)?U(t):X(t)};var K=function(t,n){return function(e,r){if(null==e)return e;if(!Y(e))return t(e,r);for(var o=e.length,i=n?o:-1,a=Object(e);(n?i--:++i<o)&&!1!==r(a[i],i,a););return e}}((function(t,n){return t&&o(t,n,H)}));var Q=function(t){return t};var Z=function(t){return"function"==typeof t?t:Q};var tt=function(t,n){return(k(t)?r:K)(t,Z(n))};var nt=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o};var et=function(){this.__data__=[],this.size=0};var rt=function(t,n){return t===n||t!=t&&n!=n};var ot=function(t,n){for(var e=t.length;e--;)if(rt(t[e][0],n))return e;return-1},it=Array.prototype.splice;var at=function(t){var n=this.__data__,e=ot(n,t);return!(e<0)&&(e==n.length-1?n.pop():it.call(n,e,1),--this.size,!0)};var ut=function(t){var n=this.__data__,e=ot(n,t);return e<0?void 0:n[e][1]};var ct=function(t){return ot(this.__data__,t)>-1};var st=function(t,n){var e=this.__data__,r=ot(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this};function ft(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}ft.prototype.clear=et,ft.prototype.delete=at,ft.prototype.get=ut,ft.prototype.has=ct,ft.prototype.set=st;var lt=ft;var vt=function(){this.__data__=new lt,this.size=0};var pt=function(t){var n=this.__data__,e=n.delete(t);return this.size=n.size,e};var dt=function(t){return this.__data__.get(t)};var ht,yt=function(t){return this.__data__.has(t)},bt=l["__core-js_shared__"],gt=(ht=/[^.]+$/.exec(bt&&bt.keys&&bt.keys.IE_PROTO||""))?"Symbol(src)_1."+ht:"";var _t=function(t){return!!gt&&gt in t},mt=Function.prototype.toString;var jt=function(t){if(null!=t){try{return mt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},wt=/^\[object .+?Constructor\]$/,Ot=Function.prototype,St=Object.prototype,At=Ot.toString,xt=St.hasOwnProperty,Nt=RegExp("^"+At.call(xt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var kt=function(t){return!(!G(t)||_t(t))&&(J(t)?Nt:wt).test(jt(t))};var zt=function(t,n){return null==t?void 0:t[n]};var Tt=function(t,n){var e=zt(t,n);return kt(e)?e:void 0},Et=Tt(l,"Map"),Ct=Tt(Object,"create");var $t=function(){this.__data__=Ct?Ct(null):{},this.size=0};var It=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},Pt=Object.prototype.hasOwnProperty;var Ft=function(t){var n=this.__data__;if(Ct){var e=n[t];return"__lodash_hash_undefined__"===e?void 0:e}return Pt.call(n,t)?n[t]:void 0},Mt=Object.prototype.hasOwnProperty;var Rt=function(t){var n=this.__data__;return Ct?void 0!==n[t]:Mt.call(n,t)};var Lt=function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=Ct&&void 0===n?"__lodash_hash_undefined__":n,this};function Bt(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}Bt.prototype.clear=$t,Bt.prototype.delete=It,Bt.prototype.get=Ft,Bt.prototype.has=Rt,Bt.prototype.set=Lt;var Ut=Bt;var Vt=function(){this.size=0,this.__data__={hash:new Ut,map:new(Et||lt),string:new Ut}};var Dt=function(t){var n=c(t);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t};var Wt=function(t,n){var e=t.__data__;return Dt(n)?e["string"==typeof n?"string":"hash"]:e.map};var qt=function(t){var n=Wt(this,t).delete(t);return this.size-=n?1:0,n};var Xt=function(t){return Wt(this,t).get(t)};var Gt=function(t){return Wt(this,t).has(t)};var Jt=function(t,n){var e=Wt(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this};function Yt(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}Yt.prototype.clear=Vt,Yt.prototype.delete=qt,Yt.prototype.get=Xt,Yt.prototype.has=Gt,Yt.prototype.set=Jt;var Ht=Yt;var Kt=function(t,n){var e=this.__data__;if(e instanceof lt){var r=e.__data__;if(!Et||r.length<199)return r.push([t,n]),this.size=++e.size,this;e=this.__data__=new Ht(r)}return e.set(t,n),this.size=e.size,this};function Qt(t){var n=this.__data__=new lt(t);this.size=n.size}Qt.prototype.clear=vt,Qt.prototype.delete=pt,Qt.prototype.get=dt,Qt.prototype.has=yt,Qt.prototype.set=Kt;var Zt=Qt;var tn=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var nn=function(t){return this.__data__.has(t)};function en(t){var n=-1,e=null==t?0:t.length;for(this.__data__=new Ht;++n<e;)this.add(t[n])}en.prototype.add=en.prototype.push=tn,en.prototype.has=nn;var rn=en;var on=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r;)if(n(t[e],e,t))return!0;return!1};var an=function(t,n){return t.has(n)};var un=function(t,n,e,r,o,i){var a=1&e,u=t.length,c=n.length;if(u!=c&&!(a&&c>u))return!1;var s=i.get(t),f=i.get(n);if(s&&f)return s==n&&f==t;var l=-1,v=!0,p=2&e?new rn:void 0;for(i.set(t,n),i.set(n,t);++l<u;){var d=t[l],h=n[l];if(r)var y=a?r(h,d,l,n,t,i):r(d,h,l,t,n,i);if(void 0!==y){if(y)continue;v=!1;break}if(p){if(!on(n,(function(t,n){if(!an(p,n)&&(d===t||o(d,t,e,r,i)))return p.push(n)}))){v=!1;break}}else if(d!==h&&!o(d,h,e,r,i)){v=!1;break}}return i.delete(t),i.delete(n),v},cn=l.Uint8Array;var sn=function(t){var n=-1,e=Array(t.size);return t.forEach((function(t,r){e[++n]=[r,t]})),e};var fn=function(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e},ln=v?v.prototype:void 0,vn=ln?ln.valueOf:void 0;var pn=function(t,n,e,r,o,i,a){switch(e){case"[object DataView]":if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=n.byteLength||!i(new cn(t),new cn(n)));case"[object Boolean]":case"[object Date]":case"[object Number]":return rt(+t,+n);case"[object Error]":return t.name==n.name&&t.message==n.message;case"[object RegExp]":case"[object String]":return t==n+"";case"[object Map]":var u=sn;case"[object Set]":var c=1&r;if(u||(u=fn),t.size!=n.size&&!c)return!1;var s=a.get(t);if(s)return s==n;r|=2,a.set(t,n);var f=un(u(t),u(n),r,o,i,a);return a.delete(t),f;case"[object Symbol]":if(vn)return vn.call(t)==vn.call(n)}return!1};var dn=function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t};var hn=function(t,n,e){var r=n(t);return k(t)?r:dn(r,e(t))};var yn=function(t,n){for(var e=-1,r=null==t?0:t.length,o=0,i=[];++e<r;){var a=t[e];n(a,e,t)&&(i[o++]=a)}return i};var bn=function(){return[]},gn=Object.prototype.propertyIsEnumerable,_n=Object.getOwnPropertySymbols,mn=_n?function(t){return null==t?[]:(t=Object(t),yn(_n(t),(function(n){return gn.call(t,n)})))}:bn;var jn=function(t){return hn(t,H,mn)},wn=Object.prototype.hasOwnProperty;var On=function(t,n,e,r,o,i){var a=1&e,u=jn(t),c=u.length;if(c!=jn(n).length&&!a)return!1;for(var s=c;s--;){var f=u[s];if(!(a?f in n:wn.call(n,f)))return!1}var l=i.get(t),v=i.get(n);if(l&&v)return l==n&&v==t;var p=!0;i.set(t,n),i.set(n,t);for(var d=a;++s<c;){var h=t[f=u[s]],y=n[f];if(r)var b=a?r(y,h,f,n,t,i):r(h,y,f,t,n,i);if(!(void 0===b?h===y||o(h,y,e,r,i):b)){p=!1;break}d||(d="constructor"==f)}if(p&&!d){var g=t.constructor,_=n.constructor;g==_||!("constructor"in t)||!("constructor"in n)||"function"==typeof g&&g instanceof g&&"function"==typeof _&&_ instanceof _||(p=!1)}return i.delete(t),i.delete(n),p},Sn=Tt(l,"DataView"),An=Tt(l,"Promise"),xn=Tt(l,"Set"),Nn=Tt(l,"WeakMap"),kn="[object Map]",zn="[object Promise]",Tn="[object Set]",En="[object WeakMap]",Cn="[object DataView]",$n=jt(Sn),In=jt(Et),Pn=jt(An),Fn=jt(xn),Mn=jt(Nn),Rn=j;(Sn&&Rn(new Sn(new ArrayBuffer(1)))!=Cn||Et&&Rn(new Et)!=kn||An&&Rn(An.resolve())!=zn||xn&&Rn(new xn)!=Tn||Nn&&Rn(new Nn)!=En)&&(Rn=function(t){var n=j(t),e="[object Object]"==n?t.constructor:void 0,r=e?jt(e):"";if(r)switch(r){case $n:return Cn;case In:return kn;case Pn:return zn;case Fn:return Tn;case Mn:return En}return n});var Ln=Rn,Bn="[object Arguments]",Un="[object Array]",Vn="[object Object]",Dn=Object.prototype.hasOwnProperty;var Wn=function(t,n,e,r,o,i){var a=k(t),u=k(n),c=a?Un:Ln(t),s=u?Un:Ln(n),f=(c=c==Bn?Vn:c)==Vn,l=(s=s==Bn?Vn:s)==Vn,v=c==s;if(v&&T(t)){if(!T(n))return!1;a=!0,f=!1}if(v&&!f)return i||(i=new Zt),a||L(t)?un(t,n,e,r,o,i):pn(t,n,c,e,r,o,i);if(!(1&e)){var p=f&&Dn.call(t,"__wrapped__"),d=l&&Dn.call(n,"__wrapped__");if(p||d){var h=p?t.value():t,y=d?n.value():n;return i||(i=new Zt),o(h,y,e,r,i)}}return!!v&&(i||(i=new Zt),On(t,n,e,r,o,i))};var qn=function t(n,e,r,o,i){return n===e||(null==n||null==e||!w(n)&&!w(e)?n!=n&&e!=e:Wn(n,e,r,o,t,i))};var Xn=function(t,n,e,r){var o=e.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=e[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=e[o])[0],s=t[c],f=u[1];if(a&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new Zt;if(r)var v=r(s,f,c,t,n,l);if(!(void 0===v?qn(f,s,3,r,l):v))return!1}}return!0};var Gn=function(t){return t==t&&!G(t)};var Jn=function(t){for(var n=H(t),e=n.length;e--;){var r=n[e],o=t[r];n[e]=[r,o,Gn(o)]}return n};var Yn=function(t,n){return function(e){return null!=e&&(e[t]===n&&(void 0!==n||t in Object(e)))}};var Hn=function(t){var n=Jn(t);return 1==n.length&&n[0][2]?Yn(n[0][0],n[0][1]):function(e){return e===t||Xn(e,t,n)}};var Kn=function(t){return"symbol"==c(t)||w(t)&&"[object Symbol]"==j(t)},Qn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zn=/^\w*$/;var te=function(t,n){if(k(t))return!1;var e=c(t);return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!Kn(t))||(Zn.test(t)||!Qn.test(t)||null!=n&&t in Object(n))};function ne(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var e=function e(){var r=arguments,o=n?n.apply(this,r):r[0],i=e.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return e.cache=i.set(o,a)||i,a};return e.cache=new(ne.Cache||Ht),e}ne.Cache=Ht;var ee=ne;var re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oe=/\\(\\)?/g,ie=function(t){var n=ee(t,(function(t){return 500===e.size&&e.clear(),t})),e=n.cache;return n}((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(re,(function(t,e,r,o){n.push(r?o.replace(oe,"$1"):e||t)})),n})),ae=v?v.prototype:void 0,ue=ae?ae.toString:void 0;var ce=function t(n){if("string"==typeof n)return n;if(k(n))return nt(n,t)+"";if(Kn(n))return ue?ue.call(n):"";var e=n+"";return"0"==e&&1/n==-Infinity?"-0":e};var se=function(t){return null==t?"":ce(t)};var fe=function(t,n){return k(t)?t:te(t,n)?[t]:ie(se(t))};var le=function(t){if("string"==typeof t||Kn(t))return t;var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n};var ve=function(t,n){for(var e=0,r=(n=fe(n,t)).length;null!=t&&e<r;)t=t[le(n[e++])];return e&&e==r?t:void 0};var pe=function(t,n,e){var r=null==t?void 0:ve(t,n);return void 0===r?e:r};var de=function(t,n){return null!=t&&n in Object(t)};var he=function(t,n,e){for(var r=-1,o=(n=fe(n,t)).length,i=!1;++r<o;){var a=le(n[r]);if(!(i=null!=t&&e(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&$(o)&&C(a,o)&&(k(t)||N(t))};var ye=function(t,n){return null!=t&&he(t,n,de)};var be=function(t,n){return te(t)&&Gn(n)?Yn(le(t),n):function(e){var r=pe(e,t);return void 0===r&&r===n?ye(e,t):qn(n,r,3)}};var ge=function(t){return function(n){return null==n?void 0:n[t]}};var _e=function(t){return function(n){return ve(n,t)}};var me=function(t){return te(t)?ge(le(t)):_e(t)};var je=function(t){return"function"==typeof t?t:null==t?Q:"object"==c(t)?k(t)?be(t[0],t[1]):Hn(t):me(t)};var we=function(t,n){var e=-1,r=Y(t)?Array(t.length):[];return K(t,(function(t,o,i){r[++e]=n(t,o,i)})),r};var Oe=function(t,n){return(k(t)?nt:we)(t,je(n))},Se=Array.prototype.join;var Ae=function(t,n){return null==t?"":Se.call(t,n)};function xe(t){return"[object Array]"===Object.prototype.toString.call(t)}function Ne(t){return"[object String]"===Object.prototype.toString.call(t)}function ke(t){var n=Object.prototype.toString.call(t);return"[object Function]"===n||"[object AsyncFunction]"===n}function ze(){var t,n,e=new Promise((function(){t=arguments[0],n=arguments[1]}));return e.resolve=t,e.reject=n,e}var Te=function(t,n,e){var r=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(e=e>o?o:e)<0&&(e+=o),o=n>e?0:e-n>>>0,n>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+n];return i},Ee=/^\s+|\s+$/g,Ce=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Ie=/^0o[0-7]+$/i,Pe=parseInt;var Fe=function(t){if("number"==typeof t)return t;if(Kn(t))return NaN;if(G(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=G(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ee,"");var e=$e.test(t);return e||Ie.test(t)?Pe(t.slice(2),e?2:8):Ce.test(t)?NaN:+t},Me=1/0;var Re=function(t){return t?(t=Fe(t))===Me||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Le=function(t){var n=Re(t),e=n%1;return n==n?e?n-e:n:0};var Be=function(t,n,e){var r=null==t?0:t.length;return r?(n=e||void 0===n?1:Le(n),Te(t,n<0?0:n,r)):[]};var Ue=function(t){return"number"==typeof t&&t==Le(t)};function Ve(t){return!(!Ne(t)||""===t)}function De(t){var n=!1;return Ve(t)?n=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(n=!0),n}function We(t){return De(t)?Re(t):0}var qe=l.isFinite,Xe=Math.min;var Ge=function(t){var n=Math[t];return function(t,e){if(t=Fe(t),(e=null==e?0:Xe(Le(e),292))&&qe(t)){var r=(se(t)+"e").split("e"),o=n(r[0]+"e"+(+r[1]+e));return+((r=(se(o)+"e").split("e"))[0]+"e"+(+r[1]-e))}return n(t)}}("round");function Je(t){return!!function(t){return!!De(t)&&(t=We(t),Ue(t))}(t)&&function(t){if(!De(t))return 0;t=We(t);var n=Ge(t);return"0"===String(n)?0:n}(t)>0}function Ye(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=ze();if(!ke(t))return e.reject("waitfunction需輸入函數f"),e;if(!0===t())return e.resolve(),e;var r=pe(n,"attemptNum",null);Je(r)||(r=200);var o=pe(n,"timeInterval",null);Je(o)||(o=1e3);var i=0,a=setInterval((function(){i+=1,!0===t()&&(clearInterval(a),e.resolve()),i>r&&(clearInterval(a),e.resolve())}),o);return e}function He(t,n){if(!Ve(t))return"";if(!Je(n))return"";var e=t.length-n;return e<0&&(e=0),t.substr(e,n)}var Ke={},Qe={};function Ze(t){var n=t.tagName,e=t.path,r=t.attributes,o=void 0===r?{}:r,i=t.func,a=ze();if("done"===Ke[e])return a.resolve("loaded"),a;if("loading"===Ke[e])return Ye((function(){return"done"===Ke[e]})).then((function(){a.resolve("loaded")})),a;Ke[e]="loading";var u=document.createElement(n);return tt(o,(function(t,n){u.setAttribute(n,t)})),o.rel&&"stylesheet"===o.rel?(u.setAttribute("href",e),setTimeout((function(){a.resolve(u),Ke[e]="done"}),1)):(u.src=e,u.addEventListener("load",(function(){var t;ke(i)?t=Ye(i):(t=ze()).resolve(),t.then((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;De(t)||(t=10);var n=ze();return setTimeout((function(){n.resolve()}),t),n}(500)})).then((function(){a.resolve(u),Ke[e]="done"}))})),u.addEventListener("error",(function(){a.reject(u),Ke[e]="done"}))),document.getElementsByTagName("head")[0].appendChild(u),a}function tr(t){var n=ze();xe(t)||(t=[t]),tt(t,(function(n,e){Ne(n)&&(t[e]={path:n})}));var e=Ae(Oe(t,"path"),"|");return"done"===Qe[e]?(n.resolve("loaded"),n):"loading"===Qe[e]?(Ye((function(){return"done"===Qe[e]})).then((function(){n.resolve("loaded")})),n):(Qe[e]="loading",tt(t,(function(t,n){t.type||(".js"===He(t.path,3)?t.type="js":".css"===He(t.path,4)?t.type="css":t.type="unknow")})),function(t,n){var e=ze();if(!xe(t))return e.reject("rs is not array"),e;ke(n)||(n=function(t){return t});var r=-1,o=[];return t.reduce((function(t,e){return t.then((function(t){return o.push(t),r+=1,ke(n)?n(e,r):e}))}),Promise.resolve()).then((function(t){o.push(t),o=Be(o),e.resolve(o)})).catch((function(t){e.reject(t)})),e}(t,(function(t){var n=ze();if("js"===t.type)n=Ze({tagName:"script",path:t.path,attributes:{type:"text/javascript"},func:t.func});else if("css"===t.type)n=Ze({tagName:"link",path:t.path,attributes:{rel:"stylesheet"}});else{var e="invalid pathItem.type: "+t.type;console.log(e),n.reject(e)}return n})).finally((function(){Qe[e]="done"})))}var nr={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};function er(t,n,e,r,o,i,a,u,c,s){"boolean"!=typeof a&&(c=u,u=a,a=!1);var f,l="function"==typeof e?e.options:e;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=f):n&&(f=a?function(t){n.call(this,s(t,this.$root.$options.shadowRoot))}:function(t){n.call(this,u(t))}),f)if(l.functional){var v=l.render;l.render=function(t,n){return f.call(n),v(t,n)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,f):[f]}return e}var rr,or="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function ir(t){return function(t,n){return function(t,n){var e=or?n.media||"default":t,r=ar[e]||(ar[e]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=n.source;if(n.map&&(o+="\n/*# sourceURL="+n.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===rr&&(rr=document.head||document.getElementsByTagName("head")[0]),rr.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),u=r.element.childNodes;u[i]&&r.element.removeChild(u[i]),u.length?r.element.insertBefore(a,u[i]):r.element.appendChild(a)}}}(t,n)}}var ar={};const ur=nr;var cr=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{display:"inline-block"}},["cir1"===t.name?[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:t.size,height:t.size}},[e("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),t._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),t._v(" "),e("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),t._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:t._e()],2)};cr._withStripped=!0;const sr=er({render:cr,staticRenderFns:[]},(function(t){t&&t("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),ur,"data-v-619e545c",false,undefined,!1,ir,void 0,void 0);function fr(){return"undefined"!=typeof self?self:"undefined"!=typeof window&&void 0!==window.document?window:"undefined"!=typeof global?global:null}e.default&&!window.Vue&&(window.Vue=e.default);const lr={components:{WIconLoading:sr},props:{pathItems:{type:Array,default:function(){return["https://cdn.jsdelivr.net/npm/ag-grid-community@23.2.1/dist/ag-grid-community.min.noStyle.js","https://cdn.jsdelivr.net/npm/ag-grid-vue@23.2.1/dist/ag-grid-vue.umd.min.js","https://cdn.jsdelivr.net/npm/w-aggrid-vue@1.0.53/dist/w-aggrid-vue.umd.js"]}},opt:{type:Object,default:function(){}},height:{type:Number,default:300},filterall:{type:String,default:""}},data:function(){return{cmpName:"WIconLoading"}},mounted:function(){var t=this;tr(t.pathItems).then((function(n){if("loaded"!==n){var r=window["w-aggrid-vue"];r.default&&(r=r.default),(o=fr(),e.default||o.Vue).component("w-aggrid-vue",r)}var o;t.cmpName="w-aggrid-vue"}))},computed:{},methods:{}};var vr=function(){var t=this,n=t.$createElement;return(t._self._c||n)(t.cmpName,{ref:"$self",tag:"component",attrs:{opt:t.opt,height:t.height,filterall:t.filterall}})};vr._withStripped=!0;return er({render:vr,staticRenderFns:[]},(function(t){t&&t("data-v-1769b5d8_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WAggridVueDyn.vue"},media:void 0})}),lr,"data-v-1769b5d8",false,undefined,!1,ir,void 0,void 0)}));
//# sourceMappingURL=w-aggrid-vue-dyn.umd.js.map
