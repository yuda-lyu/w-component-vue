!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self)["w-dynamic-scroll"]=n()}(this,function(){"use strict";var t=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r&&!1!==n(t[e],e,t););return t};var n=function(t){return function(n,e,r){for(var o=-1,i=Object(n),a=r(n),u=a.length;u--;){var c=a[t?u:++o];if(!1===e(i[c],c,i))break}return n}}();var e=function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r};function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,n){return t(n={exports:{}},n.exports),n.exports}var a="object"==r(o)&&o&&o.Object===Object&&o,u="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),f=c.Symbol,s=Object.prototype,l=s.hasOwnProperty,v=s.toString,p=f?f.toStringTag:void 0;var h=function(t){var n=l.call(t,p),e=t[p];try{t[p]=void 0;var r=!0}catch(t){}var o=v.call(t);return r&&(n?t[p]=e:delete t[p]),o},d=Object.prototype.toString;var y=function(t){return d.call(t)},b="[object Null]",_="[object Undefined]",g=f?f.toStringTag:void 0;var m=function(t){return null==t?void 0===t?_:b:g&&g in Object(t)?h(t):y(t)};var j=function(t){return null!=t&&"object"==r(t)},w="[object Arguments]";var O=function(t){return j(t)&&m(t)==w},x=Object.prototype,S=x.hasOwnProperty,A=x.propertyIsEnumerable,T=O(function(){return arguments}())?O:function(t){return j(t)&&S.call(t,"callee")&&!A.call(t,"callee")},z=Array.isArray;var I=function(){return!1},E=i(function(t,n){var e=n&&!n.nodeType&&n,r=e&&t&&!t.nodeType&&t,o=r&&r.exports===e?c.Buffer:void 0,i=(o?o.isBuffer:void 0)||I;t.exports=i}),M=9007199254740991,$=/^(?:0|[1-9]\d*)$/;var P=function(t,n){var e=r(t);return!!(n=null==n?M:n)&&("number"==e||"symbol"!=e&&$.test(t))&&t>-1&&t%1==0&&t<n},C=9007199254740991;var N=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=C},H={};H["[object Float32Array]"]=H["[object Float64Array]"]=H["[object Int8Array]"]=H["[object Int16Array]"]=H["[object Int32Array]"]=H["[object Uint8Array]"]=H["[object Uint8ClampedArray]"]=H["[object Uint16Array]"]=H["[object Uint32Array]"]=!0,H["[object Arguments]"]=H["[object Array]"]=H["[object ArrayBuffer]"]=H["[object Boolean]"]=H["[object DataView]"]=H["[object Date]"]=H["[object Error]"]=H["[object Function]"]=H["[object Map]"]=H["[object Number]"]=H["[object Object]"]=H["[object RegExp]"]=H["[object Set]"]=H["[object String]"]=H["[object WeakMap]"]=!1;var R=function(t){return j(t)&&N(t.length)&&!!H[m(t)]};var k=function(t){return function(n){return t(n)}},F=i(function(t,n){var e=n&&!n.nodeType&&n,r=e&&t&&!t.nodeType&&t,o=r&&r.exports===e&&a.process,i=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),U=F&&F.isTypedArray,D=U?k(U):R,B=Object.prototype.hasOwnProperty;var L=function(t,n){var r=z(t),o=!r&&T(t),i=!r&&!o&&E(t),a=!r&&!o&&!i&&D(t),u=r||o||i||a,c=u?e(t.length,String):[],f=c.length;for(var s in t)!n&&!B.call(t,s)||u&&("length"==s||i&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||P(s,f))||c.push(s);return c},V=Object.prototype;var W=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||V)};var q=function(t,n){return function(e){return t(n(e))}}(Object.keys,Object),X=Object.prototype.hasOwnProperty;var G=function(t){if(!W(t))return q(t);var n=[];for(var e in Object(t))X.call(t,e)&&"constructor"!=e&&n.push(e);return n};var J=function(t){var n=r(t);return null!=t&&("object"==n||"function"==n)},K="[object AsyncFunction]",Q="[object Function]",Y="[object GeneratorFunction]",Z="[object Proxy]";var tt=function(t){if(!J(t))return!1;var n=m(t);return n==Q||n==Y||n==K||n==Z};var nt=function(t){return null!=t&&N(t.length)&&!tt(t)};var et=function(t){return nt(t)?L(t):G(t)};var rt=function(t,n){return function(e,r){if(null==e)return e;if(!nt(e))return t(e,r);for(var o=e.length,i=n?o:-1,a=Object(e);(n?i--:++i<o)&&!1!==r(a[i],i,a););return e}}(function(t,e){return t&&n(t,e,et)});var ot=function(t){return t};var it=function(t){return"function"==typeof t?t:ot};var at=function(n,e){return(z(n)?t:rt)(n,it(e))};var ut=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o};var ct=function(){this.__data__=[],this.size=0};var ft=function(t,n){return t===n||t!=t&&n!=n};var st=function(t,n){for(var e=t.length;e--;)if(ft(t[e][0],n))return e;return-1},lt=Array.prototype.splice;var vt=function(t){var n=this.__data__,e=st(n,t);return!(e<0)&&(e==n.length-1?n.pop():lt.call(n,e,1),--this.size,!0)};var pt=function(t){var n=this.__data__,e=st(n,t);return e<0?void 0:n[e][1]};var ht=function(t){return st(this.__data__,t)>-1};var dt=function(t,n){var e=this.__data__,r=st(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this};function yt(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}yt.prototype.clear=ct,yt.prototype.delete=vt,yt.prototype.get=pt,yt.prototype.has=ht,yt.prototype.set=dt;var bt=yt;var _t=function(){this.__data__=new bt,this.size=0};var gt=function(t){var n=this.__data__,e=n.delete(t);return this.size=n.size,e};var mt=function(t){return this.__data__.get(t)};var jt,wt=function(t){return this.__data__.has(t)},Ot=c["__core-js_shared__"],xt=(jt=/[^.]+$/.exec(Ot&&Ot.keys&&Ot.keys.IE_PROTO||""))?"Symbol(src)_1."+jt:"";var St=function(t){return!!xt&&xt in t},At=Function.prototype.toString;var Tt=function(t){if(null!=t){try{return At.call(t)}catch(t){}try{return t+""}catch(t){}}return""},zt=/^\[object .+?Constructor\]$/,It=Function.prototype,Et=Object.prototype,Mt=It.toString,$t=Et.hasOwnProperty,Pt=RegExp("^"+Mt.call($t).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ct=function(t){return!(!J(t)||St(t))&&(tt(t)?Pt:zt).test(Tt(t))};var Nt=function(t,n){return null==t?void 0:t[n]};var Ht=function(t,n){var e=Nt(t,n);return Ct(e)?e:void 0},Rt=Ht(c,"Map"),kt=Ht(Object,"create");var Ft=function(){this.__data__=kt?kt(null):{},this.size=0};var Ut=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},Dt="__lodash_hash_undefined__",Bt=Object.prototype.hasOwnProperty;var Lt=function(t){var n=this.__data__;if(kt){var e=n[t];return e===Dt?void 0:e}return Bt.call(n,t)?n[t]:void 0},Vt=Object.prototype.hasOwnProperty;var Wt=function(t){var n=this.__data__;return kt?void 0!==n[t]:Vt.call(n,t)},qt="__lodash_hash_undefined__";var Xt=function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=kt&&void 0===n?qt:n,this};function Gt(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}Gt.prototype.clear=Ft,Gt.prototype.delete=Ut,Gt.prototype.get=Lt,Gt.prototype.has=Wt,Gt.prototype.set=Xt;var Jt=Gt;var Kt=function(){this.size=0,this.__data__={hash:new Jt,map:new(Rt||bt),string:new Jt}};var Qt=function(t){var n=r(t);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t};var Yt=function(t,n){var e=t.__data__;return Qt(n)?e["string"==typeof n?"string":"hash"]:e.map};var Zt=function(t){var n=Yt(this,t).delete(t);return this.size-=n?1:0,n};var tn=function(t){return Yt(this,t).get(t)};var nn=function(t){return Yt(this,t).has(t)};var en=function(t,n){var e=Yt(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this};function rn(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}rn.prototype.clear=Kt,rn.prototype.delete=Zt,rn.prototype.get=tn,rn.prototype.has=nn,rn.prototype.set=en;var on=rn,an=200;var un=function(t,n){var e=this.__data__;if(e instanceof bt){var r=e.__data__;if(!Rt||r.length<an-1)return r.push([t,n]),this.size=++e.size,this;e=this.__data__=new on(r)}return e.set(t,n),this.size=e.size,this};function cn(t){var n=this.__data__=new bt(t);this.size=n.size}cn.prototype.clear=_t,cn.prototype.delete=gt,cn.prototype.get=mt,cn.prototype.has=wt,cn.prototype.set=un;var fn=cn,sn="__lodash_hash_undefined__";var ln=function(t){return this.__data__.set(t,sn),this};var vn=function(t){return this.__data__.has(t)};function pn(t){var n=-1,e=null==t?0:t.length;for(this.__data__=new on;++n<e;)this.add(t[n])}pn.prototype.add=pn.prototype.push=ln,pn.prototype.has=vn;var hn=pn;var dn=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r;)if(n(t[e],e,t))return!0;return!1};var yn=function(t,n){return t.has(n)},bn=1,_n=2;var gn=function(t,n,e,r,o,i){var a=e&bn,u=t.length,c=n.length;if(u!=c&&!(a&&c>u))return!1;var f=i.get(t);if(f&&i.get(n))return f==n;var s=-1,l=!0,v=e&_n?new hn:void 0;for(i.set(t,n),i.set(n,t);++s<u;){var p=t[s],h=n[s];if(r)var d=a?r(h,p,s,n,t,i):r(p,h,s,t,n,i);if(void 0!==d){if(d)continue;l=!1;break}if(v){if(!dn(n,function(t,n){if(!yn(v,n)&&(p===t||o(p,t,e,r,i)))return v.push(n)})){l=!1;break}}else if(p!==h&&!o(p,h,e,r,i)){l=!1;break}}return i.delete(t),i.delete(n),l},mn=c.Uint8Array;var jn=function(t){var n=-1,e=Array(t.size);return t.forEach(function(t,r){e[++n]=[r,t]}),e};var wn=function(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e},On=1,xn=2,Sn="[object Boolean]",An="[object Date]",Tn="[object Error]",zn="[object Map]",In="[object Number]",En="[object RegExp]",Mn="[object Set]",$n="[object String]",Pn="[object Symbol]",Cn="[object ArrayBuffer]",Nn="[object DataView]",Hn=f?f.prototype:void 0,Rn=Hn?Hn.valueOf:void 0;var kn=function(t,n,e,r,o,i,a){switch(e){case Nn:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case Cn:return!(t.byteLength!=n.byteLength||!i(new mn(t),new mn(n)));case Sn:case An:case In:return ft(+t,+n);case Tn:return t.name==n.name&&t.message==n.message;case En:case $n:return t==n+"";case zn:var u=jn;case Mn:var c=r&On;if(u||(u=wn),t.size!=n.size&&!c)return!1;var f=a.get(t);if(f)return f==n;r|=xn,a.set(t,n);var s=gn(u(t),u(n),r,o,i,a);return a.delete(t),s;case Pn:if(Rn)return Rn.call(t)==Rn.call(n)}return!1};var Fn=function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t};var Un=function(t,n,e){var r=n(t);return z(t)?r:Fn(r,e(t))};var Dn=function(t,n){for(var e=-1,r=null==t?0:t.length,o=0,i=[];++e<r;){var a=t[e];n(a,e,t)&&(i[o++]=a)}return i};var Bn=function(){return[]},Ln=Object.prototype.propertyIsEnumerable,Vn=Object.getOwnPropertySymbols,Wn=Vn?function(t){return null==t?[]:(t=Object(t),Dn(Vn(t),function(n){return Ln.call(t,n)}))}:Bn;var qn=function(t){return Un(t,et,Wn)},Xn=1,Gn=Object.prototype.hasOwnProperty;var Jn=function(t,n,e,r,o,i){var a=e&Xn,u=qn(t),c=u.length;if(c!=qn(n).length&&!a)return!1;for(var f=c;f--;){var s=u[f];if(!(a?s in n:Gn.call(n,s)))return!1}var l=i.get(t);if(l&&i.get(n))return l==n;var v=!0;i.set(t,n),i.set(n,t);for(var p=a;++f<c;){var h=t[s=u[f]],d=n[s];if(r)var y=a?r(d,h,s,n,t,i):r(h,d,s,t,n,i);if(!(void 0===y?h===d||o(h,d,e,r,i):y)){v=!1;break}p||(p="constructor"==s)}if(v&&!p){var b=t.constructor,_=n.constructor;b!=_&&"constructor"in t&&"constructor"in n&&!("function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _)&&(v=!1)}return i.delete(t),i.delete(n),v},Kn=Ht(c,"DataView"),Qn=Ht(c,"Promise"),Yn=Ht(c,"Set"),Zn=Ht(c,"WeakMap"),te=Tt(Kn),ne=Tt(Rt),ee=Tt(Qn),re=Tt(Yn),oe=Tt(Zn),ie=m;(Kn&&"[object DataView]"!=ie(new Kn(new ArrayBuffer(1)))||Rt&&"[object Map]"!=ie(new Rt)||Qn&&"[object Promise]"!=ie(Qn.resolve())||Yn&&"[object Set]"!=ie(new Yn)||Zn&&"[object WeakMap]"!=ie(new Zn))&&(ie=function(t){var n=m(t),e="[object Object]"==n?t.constructor:void 0,r=e?Tt(e):"";if(r)switch(r){case te:return"[object DataView]";case ne:return"[object Map]";case ee:return"[object Promise]";case re:return"[object Set]";case oe:return"[object WeakMap]"}return n});var ae=ie,ue=1,ce="[object Arguments]",fe="[object Array]",se="[object Object]",le=Object.prototype.hasOwnProperty;var ve=function(t,n,e,r,o,i){var a=z(t),u=z(n),c=a?fe:ae(t),f=u?fe:ae(n),s=(c=c==ce?se:c)==se,l=(f=f==ce?se:f)==se,v=c==f;if(v&&E(t)){if(!E(n))return!1;a=!0,s=!1}if(v&&!s)return i||(i=new fn),a||D(t)?gn(t,n,e,r,o,i):kn(t,n,c,e,r,o,i);if(!(e&ue)){var p=s&&le.call(t,"__wrapped__"),h=l&&le.call(n,"__wrapped__");if(p||h){var d=p?t.value():t,y=h?n.value():n;return i||(i=new fn),o(d,y,e,r,i)}}return!!v&&(i||(i=new fn),Jn(t,n,e,r,o,i))};var pe=function t(n,e,r,o,i){return n===e||(null==n||null==e||!j(n)&&!j(e)?n!=n&&e!=e:ve(n,e,r,o,t,i))},he=1,de=2;var ye=function(t,n,e,r){var o=e.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=e[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=e[o])[0],f=t[c],s=u[1];if(a&&u[2]){if(void 0===f&&!(c in t))return!1}else{var l=new fn;if(r)var v=r(f,s,c,t,n,l);if(!(void 0===v?pe(s,f,he|de,r,l):v))return!1}}return!0};var be=function(t){return t==t&&!J(t)};var _e=function(t){for(var n=et(t),e=n.length;e--;){var r=n[e],o=t[r];n[e]=[r,o,be(o)]}return n};var ge=function(t,n){return function(e){return null!=e&&(e[t]===n&&(void 0!==n||t in Object(e)))}};var me=function(t){var n=_e(t);return 1==n.length&&n[0][2]?ge(n[0][0],n[0][1]):function(e){return e===t||ye(e,t,n)}},je="[object Symbol]";var we=function(t){return"symbol"==r(t)||j(t)&&m(t)==je},Oe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xe=/^\w*$/;var Se=function(t,n){if(z(t))return!1;var e=r(t);return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!we(t))||(xe.test(t)||!Oe.test(t)||null!=n&&t in Object(n))},Ae="Expected a function";function Te(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError(Ae);var e=function e(){var r=arguments,o=n?n.apply(this,r):r[0],i=e.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return e.cache=i.set(o,a)||i,a};return e.cache=new(Te.Cache||on),e}Te.Cache=on;var ze=Te,Ie=500;var Ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Me=/\\(\\)?/g,$e=function(t){var n=ze(t,function(t){return e.size===Ie&&e.clear(),t}),e=n.cache;return n}(function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(Ee,function(t,e,r,o){n.push(r?o.replace(Me,"$1"):e||t)}),n}),Pe=1/0,Ce=f?f.prototype:void 0,Ne=Ce?Ce.toString:void 0;var He=function t(n){if("string"==typeof n)return n;if(z(n))return ut(n,t)+"";if(we(n))return Ne?Ne.call(n):"";var e=n+"";return"0"==e&&1/n==-Pe?"-0":e};var Re=function(t){return null==t?"":He(t)};var ke=function(t,n){return z(t)?t:Se(t,n)?[t]:$e(Re(t))},Fe=1/0;var Ue=function(t){if("string"==typeof t||we(t))return t;var n=t+"";return"0"==n&&1/t==-Fe?"-0":n};var De=function(t,n){for(var e=0,r=(n=ke(n,t)).length;null!=t&&e<r;)t=t[Ue(n[e++])];return e&&e==r?t:void 0};var Be=function(t,n,e){var r=null==t?void 0:De(t,n);return void 0===r?e:r};var Le=function(t,n){return null!=t&&n in Object(t)};var Ve=function(t,n,e){for(var r=-1,o=(n=ke(n,t)).length,i=!1;++r<o;){var a=Ue(n[r]);if(!(i=null!=t&&e(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&N(o)&&P(a,o)&&(z(t)||T(t))};var We=function(t,n){return null!=t&&Ve(t,n,Le)},qe=1,Xe=2;var Ge=function(t,n){return Se(t)&&be(n)?ge(Ue(t),n):function(e){var r=Be(e,t);return void 0===r&&r===n?We(e,t):pe(n,r,qe|Xe)}};var Je=function(t){return function(n){return null==n?void 0:n[t]}};var Ke=function(t){return function(n){return De(n,t)}};var Qe=function(t){return Se(t)?Je(Ue(t)):Ke(t)};var Ye=function(t){return"function"==typeof t?t:null==t?ot:"object"==r(t)?z(t)?Ge(t[0],t[1]):me(t):Qe(t)};var Ze=function(t,n){var e=-1,r=nt(t)?Array(t.length):[];return rt(t,function(t,o,i){r[++e]=n(t,o,i)}),r};var tr=function(t,n){return(z(t)?ut:Ze)(t,Ye(n))},nr="[object String]";var er=function(t){return"string"==typeof t||!z(t)&&j(t)&&m(t)==nr},rr=Je("length"),or=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var ir=function(t){return or.test(t)},ar="[\\ud800-\\udfff]",ur="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",cr="\\ud83c[\\udffb-\\udfff]",fr="[^\\ud800-\\udfff]",sr="(?:\\ud83c[\\udde6-\\uddff]){2}",lr="[\\ud800-\\udbff][\\udc00-\\udfff]",vr="(?:"+ur+"|"+cr+")"+"?",pr="[\\ufe0e\\ufe0f]?"+vr+("(?:\\u200d(?:"+[fr,sr,lr].join("|")+")[\\ufe0e\\ufe0f]?"+vr+")*"),hr="(?:"+[fr+ur+"?",ur,sr,lr,ar].join("|")+")",dr=RegExp(cr+"(?="+cr+")|"+hr+pr,"g");var yr=function(t){for(var n=dr.lastIndex=0;dr.test(t);)++n;return n};var br=function(t){return ir(t)?yr(t):rr(t)},_r="[object Map]",gr="[object Set]";var mr=function(t){if(null==t)return 0;if(nt(t))return er(t)?br(t):t.length;var n=ae(t);return n==_r||n==gr?t.size:G(t).length};var jr=function(t){return function(n,e,r){var o=Object(n);if(!nt(n)){var i=Ye(e);n=et(n),e=function(t){return i(o[t],t,o)}}var a=t(n,e,r);return a>-1?o[i?n[a]:a]:void 0}};var wr=function(t,n,e,r){for(var o=t.length,i=e+(r?1:-1);r?i--:++i<o;)if(n(t[i],i,t))return i;return-1},Or=NaN,xr=/^\s+|\s+$/g,Sr=/^[-+]0x[0-9a-f]+$/i,Ar=/^0b[01]+$/i,Tr=/^0o[0-7]+$/i,zr=parseInt;var Ir=function(t){if("number"==typeof t)return t;if(we(t))return Or;if(J(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=J(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(xr,"");var e=Ar.test(t);return e||Tr.test(t)?zr(t.slice(2),e?2:8):Sr.test(t)?Or:+t},Er=1/0,Mr=17976931348623157e292;var $r=function(t){return t?(t=Ir(t))===Er||t===-Er?(t<0?-1:1)*Mr:t==t?t:0:0===t?t:0};var Pr=function(t){var n=$r(t),e=n%1;return n==n?e?n-e:n:0},Cr=Math.max;var Nr=jr(function(t,n,e){var r=null==t?0:t.length;if(!r)return-1;var o=null==e?0:Pr(e);return o<0&&(o=Cr(r+o,0)),wr(t,Ye(n),o)}),Hr=Math.max,Rr=Math.min;var kr=jr(function(t,n,e){var r=null==t?0:t.length;if(!r)return-1;var o=r-1;return void 0!==e&&(o=Pr(e),o=e<0?Hr(r+o,0):Rr(o,r-1)),wr(t,Ye(n),o,!0)}),Fr=function(){return c.Date.now()},Ur="Expected a function",Dr=Math.max,Br=Math.min;var Lr=function(t,n,e){var r,o,i,a,u,c,f=0,s=!1,l=!1,v=!0;if("function"!=typeof t)throw new TypeError(Ur);function p(n){var e=r,i=o;return r=o=void 0,f=n,a=t.apply(i,e)}function h(t){var e=t-c;return void 0===c||e>=n||e<0||l&&t-f>=i}function d(){var t=Fr();if(h(t))return y(t);u=setTimeout(d,function(t){var e=n-(t-c);return l?Br(e,i-(t-f)):e}(t))}function y(t){return u=void 0,v&&r?p(t):(r=o=void 0,a)}function b(){var t=Fr(),e=h(t);if(r=arguments,o=this,c=t,e){if(void 0===u)return function(t){return f=t,u=setTimeout(d,n),s?p(t):a}(c);if(l)return clearTimeout(u),u=setTimeout(d,n),p(c)}return void 0===u&&(u=setTimeout(d,n)),a}return n=Ir(n)||0,J(e)&&(s=!!e.leading,i=(l="maxWait"in e)?Dr(Ir(e.maxWait)||0,n):i,v="trailing"in e?!!e.trailing:v),b.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=c=o=u=void 0},b.flush=function(){return void 0===u?a:y(Fr())},b},Vr=c.isFinite,Wr=Math.min;var qr=function(t){var n=Math[t];return function(t,e){if(t=Ir(t),(e=null==e?0:Wr(Pr(e),292))&&Vr(t)){var r=(Re(t)+"e").split("e"),o=n(r[0]+"e"+(+r[1]+e));return+((r=(Re(o)+"e").split("e"))[0]+"e"+(+r[1]-e))}return n(t)}}("round");function Xr(t){return!(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)||""===t)}function Gr(t){var n=!1;return Xr(t)?n=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(n=!0),n}function Jr(t){if(!Gr(t))return 0;t=function(t){return Gr(t)?$r(t):0}(t);var n=qr(t);return"0"===String(n)?0:n}var Kr={props:{rows:{type:Array,default:function(){return[]}},listHeight:{type:Number,default:400},itemMinHeight:{type:Number,default:24},itemsPreload:{type:Number,default:40}},data:function(){return{preItemsHeight:0,aftItemsHeight:0,scrollTop:0,itemsHeight:0,items:[],useItems:[]}},watch:{rows:{immediate:!0,deep:!0,handler:function(t){var n=this,e=tr(n.rows,function(t,e){return{index:e,height:n.itemMinHeight,y:e*n.itemMinHeight,row:t}});n.items=e,n.change()}}},computed:{},methods:{change:function(){this.getUseItems(),this.updateItems(),this.getUseItems()},getUseItems:function(){var t,n=this,e=n.items,r=n.scrollTop,o=r+n.listHeight,i=mr(e);t=kr(e,function(t,n){return t.y+t.height<r});var a=Be(t,"index",0);a=Math.max(a-n.itemsPreload,0),t=Nr(e,function(t,n){return t.y>o});var u=Be(t,"index",i);u=Math.min(u+n.itemsPreload,i-1);var c=[],f=0,s=0;at(e,function(t,n){n<a?f+=t.height:n>u?s+=t.height:c.push(t)}),n.useItems=c,n.preItemsHeight=f,n.aftItemsHeight=s},updateItems:function(){var t=this.items;at(this.$refs.itemDiv,function(n){var e=Jr(n.getAttribute("index"));if(e>=0&&e<=mr(t)-1){var r=n.clientHeight;t[e].height!==r&&(t[e].height=r)}});var n=0;at(t,function(t){t.y!==n&&(t.y=n),n+=t.height}),this.itemsHeight!==n&&(this.itemsHeight=n)},scrollItems:Lr(function(t){var n=this;setTimeout(function(){var e=t.target.scrollTop;n.scrollTop=e,n.change()},10)},100)}};var Qr,Yr=function(t,n,e,r,o,i,a,u,c,f){"boolean"!=typeof a&&(c=u,u=a,a=!1);var s,l="function"==typeof e?e.options:e;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=s):n&&(s=a?function(){n.call(this,f(this.$root.$options.shadowRoot))}:function(t){n.call(this,u(t))}),s)if(l.functional){var v=l.render;l.render=function(t,n){return s.call(n),v(t,n)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,s):[s]}return e},Zr="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var to={};var no=function(t){return function(t,n){return function(t,n){var e=Zr?n.media||"default":t,r=to[e]||(to[e]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=n.source;if(n.map&&(o+="\n/*# sourceURL="+n.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===Qr&&(Qr=document.head||document.getElementsByTagName("head")[0]),Qr.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),u=r.element.childNodes;u[i]&&r.element.removeChild(u[i]),u.length?r.element.insertBefore(a,u[i]):r.element.appendChild(a)}}}(t,n)}};const eo=Kr;var ro=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{style:[{position:"relative","overflow-y":"auto",height:t.listHeight+"px"}],on:{scroll:t.scrollItems}},[e("div",{style:[{height:t.itemsHeight+"px"}]}),t._v(" "),e("div",{style:[{position:"absolute",top:"0px"}]},[e("div",{style:[{height:t.preItemsHeight+"px"}]}),t._v(" "),t._l(t.useItems,function(n,r){return[e("div",{key:r,ref:"itemDiv",refInFor:!0,attrs:{index:n.index}},[t._t("block",null,{row:n.row,irow:n.index})],2)]}),t._v(" "),e("div",{style:[{height:t.aftItemsHeight+"px"}]})],2)])};ro._withStripped=!0;return Yr({render:ro,staticRenderFns:[]},function(t){t&&t("data-v-c6c21b8a_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WDynamicScroll.vue"},media:void 0})},eo,"data-v-c6c21b8a",!1,void 0,no,void 0)});
//# sourceMappingURL=w-dynamic-scroll.umd.js.map
