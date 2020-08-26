/*!
 * w-text-core v1.4.13
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self)["w-text-core"]=n()}(this,(function(){"use strict";function e(e){return"[object String]"===Object.prototype.toString.call(e)}function n(n){var t=!1;return!function(n){return!(!e(n)||""===n)}(n)?function(e){return"[object Number]"===Object.prototype.toString.call(e)}(n)&&(t=!0):t=!isNaN(Number(n)),t}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&t.path)}},t.exports),t.exports}var a=r((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n}));var f=function(e){var n=a(e);return null!=e&&("object"==n||"function"==n)},i="object"==a(t)&&t&&t.Object===Object&&t,c="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,u=i||c||Function("return this")(),o=u.Symbol,d=Object.prototype,l=d.hasOwnProperty,s=d.toString,h=o?o.toStringTag:void 0;var p=function(e){var n=l.call(e,h),t=e[h];try{e[h]=void 0;var r=!0}catch(e){}var a=s.call(e);return r&&(n?e[h]=t:delete e[h]),a},b=Object.prototype.toString;var v=function(e){return b.call(e)},g=o?o.toStringTag:void 0;var y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":g&&g in Object(e)?p(e):v(e)};var m=function(e){return null!=e&&"object"==a(e)};var k=function(e){return"symbol"==a(e)||m(e)&&"[object Symbol]"==y(e)},_=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,O=/^0o[0-7]+$/i,S=parseInt;var w=function(e){if("number"==typeof e)return e;if(k(e))return NaN;if(f(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=f(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(_,"");var t=j.test(e);return t||O.test(e)?S(e.slice(2),t?2:8):x.test(e)?NaN:+e};var T=function(e){return e?Infinity===(e=w(e))||-Infinity===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};function C(e){return n(e)?T(e):0}var E=function(e){var n=T(e),t=n%1;return n==n?t?n-t:n:0};var A=function(e){return"number"==typeof e&&e==E(e)};function $(e){return!!n(e)&&(e=C(e),A(e))}var R=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},z=Array.isArray,N=o?o.prototype:void 0,I=N?N.toString:void 0;var U=function e(n){if("string"==typeof n)return n;if(z(n))return R(n,e)+"";if(k(n))return I?I.call(n):"";var t=n+"";return"0"==t&&1/n==-Infinity?"-0":t};var F=function(e){return null==e?"":U(e)},L=u.isFinite,P=Math.min;var M=function(e){var n=Math[e];return function(e,t){if(e=w(e),(t=null==t?0:P(E(t),292))&&L(e)){var r=(F(e)+"e").split("e"),a=n(r[0]+"e"+(+r[1]+t));return+((r=(F(a)+"e").split("e"))[0]+"e"+(+r[1]-t))}return n(e)}}("round");function D(e){if(!n(e))return 0;e=C(e);var t=M(e);return"0"===String(t)?0:t}function Z(t,r){var a,f=!1,i="";if("isstr"===r)e(t)||(f=!0,i="需要為字串",t="");else if("isnum"===r)n(t)||(f=!0,i="需要為數字",t=0);else if("isp0num"===r)n(a=t)&&C(a)>=0||(f=!0,i="需要為含0的正浮點數",t=0);else if("isn0num"===r)(function(e){return!!n(e)&&C(e)<=0})(t)||(f=!0,i="需要為含0的負浮點數",t=0);else if("isint"===r)$(t)||(f=!0,i="需要為整數",t=0);else if("ispint"===r)(function(e){return!!$(e)&&D(e)>0})(t)||(f=!0,i="需要為不含0正整數",t=0);else if("isp0int"===r)(function(e){return!!$(e)&&D(e)>=0})(t)||(f=!0,i="需要為含0正整數",t=0);else if("isnint"===r)(function(e){return!!$(e)&&D(e)<0})(t)||(f=!0,i="需要為不含0負整數",t=0);else if("isn0int"===r)(function(e){return!!$(e)&&D(e)<=0})(t)||(f=!0,i="需要為含0負整數",t=0);else if(function(e){var n=Object.prototype.toString.call(e);return"[object Function]"===n||"[object AsyncFunction]"===n}(r)){t=r(t)}else"any"===r?n(t)||e(t)||(f=!0,i="需要為字串或數字",t=""):(f=!0,i="需要指定驗證類型",t=null);return{value:t,err:f,errmsg:i}}var V=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var f=Array(a);++r<a;)f[r]=e[r+n];return f};var B=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:V(e,n,t)},G=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var W=function(e){return G.test(e)};var q=function(e){return e.split("")},H="[\\ud800-\\udfff]",J="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Y="\\ud83c[\\udffb-\\udfff]",X="[^\\ud800-\\udfff]",K="(?:\\ud83c[\\udde6-\\uddff]){2}",Q="[\\ud800-\\udbff][\\udc00-\\udfff]",ee="(?:"+J+"|"+Y+")"+"?",ne="[\\ufe0e\\ufe0f]?"+ee+("(?:\\u200d(?:"+[X,K,Q].join("|")+")[\\ufe0e\\ufe0f]?"+ee+")*"),te="(?:"+[X+J+"?",J,K,Q,H].join("|")+")",re=RegExp(Y+"(?="+Y+")|"+te+ne,"g");var ae=function(e){return e.match(re)||[]};var fe=function(e){return W(e)?ae(e):q(e)};var ie=function(e){return function(n){n=F(n);var t=W(n)?fe(n):void 0,r=t?t[0]:n.charAt(0),a=t?B(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var ce=function(e){return ie(F(e).toLowerCase())};var ue=function(e,n,t,r){var a=-1,f=null==e?0:e.length;for(r&&f&&(t=e[++a]);++a<f;)t=n(t,e[a],a,e);return t};var oe=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),de=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,le=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var se=function(e){return(e=F(e))&&e.replace(de,oe).replace(le,"")},he=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var pe=function(e){return e.match(he)||[]},be=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var ve=function(e){return be.test(e)},ge="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ye="["+ge+"]",me="\\d+",ke="[\\u2700-\\u27bf]",_e="[a-z\\xdf-\\xf6\\xf8-\\xff]",xe="[^\\ud800-\\udfff"+ge+me+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",je="(?:\\ud83c[\\udde6-\\uddff]){2}",Oe="[\\ud800-\\udbff][\\udc00-\\udfff]",Se="[A-Z\\xc0-\\xd6\\xd8-\\xde]",we="(?:"+_e+"|"+xe+")",Te="(?:"+Se+"|"+xe+")",Ce="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",Ee="[\\ufe0e\\ufe0f]?"+Ce+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",je,Oe].join("|")+")[\\ufe0e\\ufe0f]?"+Ce+")*"),Ae="(?:"+[ke,je,Oe].join("|")+")"+Ee,$e=RegExp([Se+"?"+_e+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[ye,Se,"$"].join("|")+")",Te+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[ye,Se+we,"$"].join("|")+")",Se+"?"+we+"+(?:['’](?:d|ll|m|re|s|t|ve))?",Se+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",me,Ae].join("|"),"g");var Re=function(e){return e.match($e)||[]};var ze=function(e,n,t){return e=F(e),void 0===(n=t?void 0:n)?ve(e)?Re(e):pe(e):e.match(n)||[]},Ne=RegExp("['’]","g");var Ie=function(e){return function(n){return ue(ze(se(n).replace(Ne,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?ce(n):n)}));var Ue=function(e,n){return e===n||e!=e&&n!=n};var Fe=function(e){if(!f(e))return!1;var n=y(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var Le=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var Pe=function(e){return null!=e&&Le(e.length)&&!Fe(e)},Me=/^(?:0|[1-9]\d*)$/;var De=function(e,n){var t=a(e);return!!(n=null==n?9007199254740991:n)&&("number"==t||"symbol"!=t&&Me.test(e))&&e>-1&&e%1==0&&e<n};var Ze=function(e,n,t){if(!f(t))return!1;var r=a(n);return!!("number"==r?Pe(t)&&De(n,t.length):"string"==r&&n in t)&&Ue(t[n],e)};var Ve=function(e){return m(e)&&"[object RegExp]"==y(e)};var Be=function(e){return function(n){return e(n)}},Ge=r((function(e,n){var t=n&&!n.nodeType&&n,r=t&&e&&!e.nodeType&&e,a=r&&r.exports===t&&i.process,f=function(){try{var e=r&&r.require&&r.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=f})),We=Ge&&Ge.isRegExp,qe=We?Be(We):Ve;var He=function(e,n,t){return t&&"number"!=typeof t&&Ze(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=F(e))&&("string"==typeof n||null!=n&&!qe(n))&&!(n=U(n))&&W(e)?B(fe(e),0,t):e.split(n,t):[]},Je=Object.prototype;var Ye=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Je)};var Xe=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Ke=Object.prototype.hasOwnProperty;var Qe,en=function(e){if(!Ye(e))return Xe(e);var n=[];for(var t in Object(e))Ke.call(e,t)&&"constructor"!=t&&n.push(t);return n},nn=u["__core-js_shared__"],tn=(Qe=/[^.]+$/.exec(nn&&nn.keys&&nn.keys.IE_PROTO||""))?"Symbol(src)_1."+Qe:"";var rn=function(e){return!!tn&&tn in e},an=Function.prototype.toString;var fn=function(e){if(null!=e){try{return an.call(e)}catch(e){}try{return e+""}catch(e){}}return""},cn=/^\[object .+?Constructor\]$/,un=Function.prototype,on=Object.prototype,dn=un.toString,ln=on.hasOwnProperty,sn=RegExp("^"+dn.call(ln).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var hn=function(e){return!(!f(e)||rn(e))&&(Fe(e)?sn:cn).test(fn(e))};var pn=function(e,n){return null==e?void 0:e[n]};var bn=function(e,n){var t=pn(e,n);return hn(t)?t:void 0},vn=bn(u,"DataView"),gn=bn(u,"Map"),yn=bn(u,"Promise"),mn=bn(u,"Set"),kn=bn(u,"WeakMap"),_n=fn(vn),xn=fn(gn),jn=fn(yn),On=fn(mn),Sn=fn(kn),wn=y;(vn&&"[object DataView]"!=wn(new vn(new ArrayBuffer(1)))||gn&&"[object Map]"!=wn(new gn)||yn&&"[object Promise]"!=wn(yn.resolve())||mn&&"[object Set]"!=wn(new mn)||kn&&"[object WeakMap]"!=wn(new kn))&&(wn=function(e){var n=y(e),t="[object Object]"==n?e.constructor:void 0,r=t?fn(t):"";if(r)switch(r){case _n:return"[object DataView]";case xn:return"[object Map]";case jn:return"[object Promise]";case On:return"[object Set]";case Sn:return"[object WeakMap]"}return n});var Tn=wn;var Cn=function(e){return"string"==typeof e||!z(e)&&m(e)&&"[object String]"==y(e)};var En=function(e){return function(n){return null==n?void 0:n[e]}}("length"),An="[\\ud800-\\udfff]",$n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Rn="\\ud83c[\\udffb-\\udfff]",zn="[^\\ud800-\\udfff]",Nn="(?:\\ud83c[\\udde6-\\uddff]){2}",In="[\\ud800-\\udbff][\\udc00-\\udfff]",Un="(?:"+$n+"|"+Rn+")"+"?",Fn="[\\ufe0e\\ufe0f]?"+Un+("(?:\\u200d(?:"+[zn,Nn,In].join("|")+")[\\ufe0e\\ufe0f]?"+Un+")*"),Ln="(?:"+[zn+$n+"?",$n,Nn,In,An].join("|")+")",Pn=RegExp(Rn+"(?="+Rn+")|"+Ln+Fn,"g");var Mn=function(e){for(var n=Pn.lastIndex=0;Pn.test(e);)++n;return n};var Dn=function(e){return W(e)?Mn(e):En(e)};var Zn=function(e){if(null==e)return 0;if(Pe(e))return Cn(e)?Dn(e):e.length;var n=Tn(e);return"[object Map]"==n||"[object Set]"==n?e.size:en(e).length},Vn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Bn=/^\w*$/;var Gn=function(e,n){if(z(e))return!1;var t=a(e);return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!k(e))||(Bn.test(e)||!Vn.test(e)||null!=n&&e in Object(n))},Wn=bn(Object,"create");var qn=function(){this.__data__=Wn?Wn(null):{},this.size=0};var Hn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Jn=Object.prototype.hasOwnProperty;var Yn=function(e){var n=this.__data__;if(Wn){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return Jn.call(n,e)?n[e]:void 0},Xn=Object.prototype.hasOwnProperty;var Kn=function(e){var n=this.__data__;return Wn?void 0!==n[e]:Xn.call(n,e)};var Qn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Wn&&void 0===n?"__lodash_hash_undefined__":n,this};function et(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}et.prototype.clear=qn,et.prototype.delete=Hn,et.prototype.get=Yn,et.prototype.has=Kn,et.prototype.set=Qn;var nt=et;var tt=function(){this.__data__=[],this.size=0};var rt=function(e,n){for(var t=e.length;t--;)if(Ue(e[t][0],n))return t;return-1},at=Array.prototype.splice;var ft=function(e){var n=this.__data__,t=rt(n,e);return!(t<0)&&(t==n.length-1?n.pop():at.call(n,t,1),--this.size,!0)};var it=function(e){var n=this.__data__,t=rt(n,e);return t<0?void 0:n[t][1]};var ct=function(e){return rt(this.__data__,e)>-1};var ut=function(e,n){var t=this.__data__,r=rt(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function ot(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ot.prototype.clear=tt,ot.prototype.delete=ft,ot.prototype.get=it,ot.prototype.has=ct,ot.prototype.set=ut;var dt=ot;var lt=function(){this.size=0,this.__data__={hash:new nt,map:new(gn||dt),string:new nt}};var st=function(e){var n=a(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var ht=function(e,n){var t=e.__data__;return st(n)?t["string"==typeof n?"string":"hash"]:t.map};var pt=function(e){var n=ht(this,e).delete(e);return this.size-=n?1:0,n};var bt=function(e){return ht(this,e).get(e)};var vt=function(e){return ht(this,e).has(e)};var gt=function(e,n){var t=ht(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function yt(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}yt.prototype.clear=lt,yt.prototype.delete=pt,yt.prototype.get=bt,yt.prototype.has=vt,yt.prototype.set=gt;var mt=yt;function kt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],f=t.cache;if(f.has(a))return f.get(a);var i=e.apply(this,r);return t.cache=f.set(a,i)||f,i};return t.cache=new(kt.Cache||mt),t}kt.Cache=mt;var _t=kt;var xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jt=/\\(\\)?/g,Ot=function(e){var n=_t(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(xt,(function(e,t,r,a){n.push(r?a.replace(jt,"$1"):t||e)})),n}));var St=function(e,n){return z(e)?e:Gn(e,n)?[e]:Ot(F(e))};var wt=function(e){if("string"==typeof e||k(e))return e;var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var Tt=function(e,n){for(var t=0,r=(n=St(n,e)).length;null!=e&&t<r;)e=e[wt(n[t++])];return t&&t==r?e:void 0};var Ct=function(e,n,t){var r=null==e?void 0:Tt(e,n);return void 0===r?t:r},Et={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};var At={props:{type:{type:String,default:"any"},value:{type:[String,Number]},textColor:{type:String,default:"black"},textAlign:{type:String,default:"left"},placeholder:{type:String,default:""},height:{type:Number,default:28},editable:{type:Boolean,default:!0},focused:{type:Boolean,default:!1}},data:function(){return{valueTrans:""}},mounted:function(){},computed:{changeValue:function(){return this.valueTrans=this.value,""},useTextColor:function(){return function(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=He(e," ");if(2!==Zn(n))return e;var t=n[0].trim();t=Ie(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=Ct(Et,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}(this.textColor)}},methods:{changeFocused:function(e){var n=this;n.$nextTick((function(){n.$emit("update:focused",e)}))},changeContent:function(e){var n=this,t=Z(n.valueTrans,n.type),r=t.value,a=t.errmsg;n.$nextTick((function(){n.valueTrans=r,n.$emit("input",r,a),n.$emit(e,r,a)}))}}};function $t(e,n,t,r,a,f,i,c,u,o){"boolean"!=typeof i&&(u=c,c=i,i=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),f?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(f)},l._ssrRegister=d):n&&(d=i?function(e){n.call(this,o(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,d):[d]}return t}var Rt,zt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Nt(e){return function(e,n){return function(e,n){var t=zt?n.media||"default":e,r=It[t]||(It[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===Rt&&(Rt=document.head||document.getElementsByTagName("head")[0]),Rt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var f=r.ids.size-1,i=document.createTextNode(a),c=r.element.childNodes;c[f]&&r.element.removeChild(c[f]),c.length?r.element.insertBefore(i,c[f]):r.element.appendChild(i)}}}(e,n)}}var It={};const Ut=At;var Ft=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{changeValue:e.changeValue}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.valueTrans,expression:"valueTrans"}],ref:"inp",style:"transition:all 0.3s; outline: none; width:100%; color:"+e.useTextColor+"; height:"+e.height+"px; text-align:"+e.textAlign+"; opacity:"+(e.valueTrans||e.focused?1:.6)+";",attrs:{type:"text",readonly:!e.editable,placeholder:e.placeholder},domProps:{value:e.valueTrans},on:{input:[function(n){n.target.composing||(e.valueTrans=n.target.value)},function(n){e.changeFocused(!0),e.changeContent("input")}],focus:function(n){return e.changeFocused(!0)},blur:function(n){e.changeFocused(!1),e.changeContent("blur")},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.changeContent("enter")}}})])};Ft._withStripped=!0;return $t({render:Ft,staticRenderFns:[]},(function(e){e&&e("data-v-1e149b55_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WTextCore.vue"},media:void 0})}),Ut,"data-v-1e149b55",false,undefined,!1,Nt,void 0,void 0)}));
//# sourceMappingURL=w-text-core.umd.js.map
