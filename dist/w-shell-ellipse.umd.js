/*!
 * w-shell-ellipse v1.3.6
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-shell-ellipse"]=n()}(this,(function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r="object"==e(n)&&n&&n.Object===Object&&n,t="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,o=r||t||Function("return this")(),a=o.Symbol;var i=function(e,n){for(var r=-1,t=null==e?0:e.length,o=Array(t);++r<t;)o[r]=n(e[r],r,e);return o},c=Array.isArray,f=Object.prototype,l=f.hasOwnProperty,u=f.toString,d=a?a.toStringTag:void 0;var s=function(e){var n=l.call(e,d),r=e[d];try{e[d]=void 0;var t=!0}catch(e){}var o=u.call(e);return t&&(n?e[d]=r:delete e[d]),o},p=Object.prototype.toString;var g=function(e){return p.call(e)},h=a?a.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":h&&h in Object(e)?s(e):g(e)};var b=function(n){return null!=n&&"object"==e(n)};var y=function(n){return"symbol"==e(n)||b(n)&&"[object Symbol]"==v(n)},m=a?a.prototype:void 0,x=m?m.toString:void 0;var k=function e(n){if("string"==typeof n)return n;if(c(n))return i(n,e)+"";if(y(n))return x?x.call(n):"";var r=n+"";return"0"==r&&1/n==-1/0?"-0":r};var S=function(e){return null==e?"":k(e)};var _=function(e,n,r){var t=-1,o=e.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var a=Array(o);++t<o;)a[t]=e[t+n];return a};var C=function(e,n,r){var t=e.length;return r=void 0===r?t:r,!n&&r>=t?e:_(e,n,r)},I=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var w=function(e){return I.test(e)};var A=function(e){return e.split("")},j="[\\ud800-\\udfff]",T="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",O="\\ud83c[\\udffb-\\udfff]",z="[^\\ud800-\\udfff]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",F="[\\ud800-\\udbff][\\udc00-\\udfff]",R="(?:"+T+"|"+O+")"+"?",B="[\\ufe0e\\ufe0f]?"+R+("(?:\\u200d(?:"+[z,E,F].join("|")+")[\\ufe0e\\ufe0f]?"+R+")*"),P="(?:"+[z+T+"?",T,E,F,j].join("|")+")",$=RegExp(O+"(?="+O+")|"+P+B,"g");var N=function(e){return e.match($)||[]};var U=function(e){return w(e)?N(e):A(e)};var L=function(e){return function(n){n=S(n);var r=w(n)?U(n):void 0,t=r?r[0]:n.charAt(0),o=r?C(r,1).join(""):n.slice(1);return t[e]()+o}}("toUpperCase");var D=function(e){return L(S(e).toLowerCase())};var W=function(e,n,r,t){var o=-1,a=null==e?0:e.length;for(t&&a&&(r=e[++o]);++o<a;)r=n(r,e[o],o,e);return r};var Z=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),M=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,G=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var V=function(e){return(e=S(e))&&e.replace(M,Z).replace(G,"")},Y=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var J=function(e){return e.match(Y)||[]},q=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var H=function(e){return q.test(e)},X="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",K="["+X+"]",Q="\\d+",ee="[\\u2700-\\u27bf]",ne="[a-z\\xdf-\\xf6\\xf8-\\xff]",re="[^\\ud800-\\udfff"+X+Q+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",te="(?:\\ud83c[\\udde6-\\uddff]){2}",oe="[\\ud800-\\udbff][\\udc00-\\udfff]",ae="[A-Z\\xc0-\\xd6\\xd8-\\xde]",ie="(?:"+ne+"|"+re+")",ce="(?:"+ae+"|"+re+")",fe="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",le="[\\ufe0e\\ufe0f]?"+fe+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",te,oe].join("|")+")[\\ufe0e\\ufe0f]?"+fe+")*"),ue="(?:"+[ee,te,oe].join("|")+")"+le,de=RegExp([ae+"?"+ne+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[K,ae,"$"].join("|")+")",ce+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[K,ae+ie,"$"].join("|")+")",ae+"?"+ie+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ae+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Q,ue].join("|"),"g");var se=function(e){return e.match(de)||[]};var pe=function(e,n,r){return e=S(e),void 0===(n=r?void 0:n)?H(e)?se(e):J(e):e.match(n)||[]},ge=RegExp("['’]","g");var he=function(e){return function(n){return W(pe(V(n).replace(ge,"")),e,"")}}((function(e,n,r){return n=n.toLowerCase(),e+(r?D(n):n)}));var ve=function(e,n){return e===n||e!=e&&n!=n};var be=function(n){var r=e(n);return null!=n&&("object"==r||"function"==r)};var ye=function(e){if(!be(e))return!1;var n=v(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var me=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var xe=function(e){return null!=e&&me(e.length)&&!ye(e)},ke=/^(?:0|[1-9]\d*)$/;var Se=function(n,r){var t=e(n);return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&ke.test(n))&&n>-1&&n%1==0&&n<r};var _e=function(n,r,t){if(!be(t))return!1;var o=e(r);return!!("number"==o?xe(t)&&Se(r,t.length):"string"==o&&r in t)&&ve(t[r],n)};var Ce=function(e){return b(e)&&"[object RegExp]"==v(e)};var Ie=function(e){return function(n){return e(n)}},we=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){var t=n&&!n.nodeType&&n,o=t&&e&&!e.nodeType&&e,a=o&&o.exports===t&&r.process,i=function(){try{var e=o&&o.require&&o.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=i})),Ae=we&&we.isRegExp,je=Ae?Ie(Ae):Ce;var Te=function(e,n,r){return r&&"number"!=typeof r&&_e(e,n,r)&&(n=r=void 0),(r=void 0===r?4294967295:r>>>0)?(e=S(e))&&("string"==typeof n||null!=n&&!je(n))&&!(n=k(n))&&w(e)?C(U(e),0,r):e.split(n,r):[]},Oe=Object.prototype;var ze=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Oe)};var Ee=function(e,n){return function(r){return e(n(r))}}(Object.keys,Object),Fe=Object.prototype.hasOwnProperty;var Re,Be=function(e){if(!ze(e))return Ee(e);var n=[];for(var r in Object(e))Fe.call(e,r)&&"constructor"!=r&&n.push(r);return n},Pe=o["__core-js_shared__"],$e=(Re=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||""))?"Symbol(src)_1."+Re:"";var Ne=function(e){return!!$e&&$e in e},Ue=Function.prototype.toString;var Le=function(e){if(null!=e){try{return Ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""},De=/^\[object .+?Constructor\]$/,We=Function.prototype,Ze=Object.prototype,Me=We.toString,Ge=Ze.hasOwnProperty,Ve=RegExp("^"+Me.call(Ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e){return!(!be(e)||Ne(e))&&(ye(e)?Ve:De).test(Le(e))};var Je=function(e,n){return null==e?void 0:e[n]};var qe=function(e,n){var r=Je(e,n);return Ye(r)?r:void 0},He=qe(o,"DataView"),Xe=qe(o,"Map"),Ke=qe(o,"Promise"),Qe=qe(o,"Set"),en=qe(o,"WeakMap"),nn=Le(He),rn=Le(Xe),tn=Le(Ke),on=Le(Qe),an=Le(en),cn=v;(He&&"[object DataView]"!=cn(new He(new ArrayBuffer(1)))||Xe&&"[object Map]"!=cn(new Xe)||Ke&&"[object Promise]"!=cn(Ke.resolve())||Qe&&"[object Set]"!=cn(new Qe)||en&&"[object WeakMap]"!=cn(new en))&&(cn=function(e){var n=v(e),r="[object Object]"==n?e.constructor:void 0,t=r?Le(r):"";if(t)switch(t){case nn:return"[object DataView]";case rn:return"[object Map]";case tn:return"[object Promise]";case on:return"[object Set]";case an:return"[object WeakMap]"}return n});var fn=cn;var ln=function(e){return"string"==typeof e||!c(e)&&b(e)&&"[object String]"==v(e)};var un=function(e){return function(n){return null==n?void 0:n[e]}}("length"),dn="[\\ud800-\\udfff]",sn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",pn="\\ud83c[\\udffb-\\udfff]",gn="[^\\ud800-\\udfff]",hn="(?:\\ud83c[\\udde6-\\uddff]){2}",vn="[\\ud800-\\udbff][\\udc00-\\udfff]",bn="(?:"+sn+"|"+pn+")"+"?",yn="[\\ufe0e\\ufe0f]?"+bn+("(?:\\u200d(?:"+[gn,hn,vn].join("|")+")[\\ufe0e\\ufe0f]?"+bn+")*"),mn="(?:"+[gn+sn+"?",sn,hn,vn,dn].join("|")+")",xn=RegExp(pn+"(?="+pn+")|"+mn+yn,"g");var kn=function(e){for(var n=xn.lastIndex=0;xn.test(e);)++n;return n};var Sn=function(e){return w(e)?kn(e):un(e)};var _n=function(e){if(null==e)return 0;if(xe(e))return ln(e)?Sn(e):e.length;var n=fn(e);return"[object Map]"==n||"[object Set]"==n?e.size:Be(e).length},Cn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,In=/^\w*$/;var wn=function(n,r){if(c(n))return!1;var t=e(n);return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=n&&!y(n))||(In.test(n)||!Cn.test(n)||null!=r&&n in Object(r))},An=qe(Object,"create");var jn=function(){this.__data__=An?An(null):{},this.size=0};var Tn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},On=Object.prototype.hasOwnProperty;var zn=function(e){var n=this.__data__;if(An){var r=n[e];return"__lodash_hash_undefined__"===r?void 0:r}return On.call(n,e)?n[e]:void 0},En=Object.prototype.hasOwnProperty;var Fn=function(e){var n=this.__data__;return An?void 0!==n[e]:En.call(n,e)};var Rn=function(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=An&&void 0===n?"__lodash_hash_undefined__":n,this};function Bn(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}Bn.prototype.clear=jn,Bn.prototype.delete=Tn,Bn.prototype.get=zn,Bn.prototype.has=Fn,Bn.prototype.set=Rn;var Pn=Bn;var $n=function(){this.__data__=[],this.size=0};var Nn=function(e,n){for(var r=e.length;r--;)if(ve(e[r][0],n))return r;return-1},Un=Array.prototype.splice;var Ln=function(e){var n=this.__data__,r=Nn(n,e);return!(r<0)&&(r==n.length-1?n.pop():Un.call(n,r,1),--this.size,!0)};var Dn=function(e){var n=this.__data__,r=Nn(n,e);return r<0?void 0:n[r][1]};var Wn=function(e){return Nn(this.__data__,e)>-1};var Zn=function(e,n){var r=this.__data__,t=Nn(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this};function Mn(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}Mn.prototype.clear=$n,Mn.prototype.delete=Ln,Mn.prototype.get=Dn,Mn.prototype.has=Wn,Mn.prototype.set=Zn;var Gn=Mn;var Vn=function(){this.size=0,this.__data__={hash:new Pn,map:new(Xe||Gn),string:new Pn}};var Yn=function(n){var r=e(n);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n};var Jn=function(e,n){var r=e.__data__;return Yn(n)?r["string"==typeof n?"string":"hash"]:r.map};var qn=function(e){var n=Jn(this,e).delete(e);return this.size-=n?1:0,n};var Hn=function(e){return Jn(this,e).get(e)};var Xn=function(e){return Jn(this,e).has(e)};var Kn=function(e,n){var r=Jn(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this};function Qn(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}Qn.prototype.clear=Vn,Qn.prototype.delete=qn,Qn.prototype.get=Hn,Qn.prototype.has=Xn,Qn.prototype.set=Kn;var er=Qn;function nr(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function r(){var t=arguments,o=n?n.apply(this,t):t[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,t);return r.cache=a.set(o,i)||a,i};return r.cache=new(nr.Cache||er),r}nr.Cache=er;var rr=nr;var tr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,or=/\\(\\)?/g,ar=function(e){var n=rr(e,(function(e){return 500===r.size&&r.clear(),e})),r=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(tr,(function(e,r,t,o){n.push(t?o.replace(or,"$1"):r||e)})),n}));var ir=function(e,n){return c(e)?e:wn(e,n)?[e]:ar(S(e))};var cr=function(e){if("string"==typeof e||y(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var fr=function(e,n){for(var r=0,t=(n=ir(n,e)).length;null!=e&&r<t;)e=e[cr(n[r++])];return r&&r==t?e:void 0};var lr=function(e,n,r){var t=null==e?void 0:fr(e,n);return void 0===t?r:t},ur={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function dr(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Te(e," ");if(2!==_n(n))return e;var r=n[0].trim();r=he(r);var t=n[1];void 0===t&&(t="base"),t=t.replace("-","").trim();var o=lr(ur,"default.".concat(r,".").concat(t),null);return null===o&&(o=e),o}var sr={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var e=this.size;return this.icon.indexOf("fa-")>=0?e-4:e},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};var pr=function(e,n,r,t,o,a,i,c,f,l){"boolean"!=typeof i&&(f=c,c=i,i=!1);var u,d="function"==typeof r?r.options:r;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),t&&(d._scopeId=t),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,f(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=u):n&&(u=i?function(){n.call(this,l(this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),u)if(d.functional){var s=d.render;d.render=function(e,n){return u.call(n),s(e,n)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,u):[u]}return r},gr="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var hr=document.head||document.getElementsByTagName("head")[0],vr={};var br=function(e){return function(e,n){return function(e,n){var r=gr?n.media||"default":e,t=vr[r]||(vr[r]={ids:new Set,styles:[]});if(!t.ids.has(e)){t.ids.add(e);var o=n.source;if(n.map&&(o+="\n/*# sourceURL="+n.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",n.media&&t.element.setAttribute("media",n.media),hr.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(o),t.element.styleSheet.cssText=t.styles.filter(Boolean).join("\n");else{var a=t.ids.size-1,i=document.createTextNode(o),c=t.element.childNodes;c[a]&&t.element.removeChild(c[a]),c.length?t.element.insertBefore(i,c[a]):t.element.appendChild(i)}}}(e,n)}};const yr=sr;var mr=function(){var e=this,n=e.$createElement,r=e._self._c||n;return""!==e.icon?r("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[r("v-icon",{style:e.useStyle,attrs:{color:e.color,size:e.useSize}},[e._v("\n        "+e._s(e.useIcon)+"\n    ")])],1):e._e()};mr._withStripped=!0;const xr={components:{WIcon:pr({render:mr,staticRenderFns:[]},(function(e){e&&e("data-v-5ea7e17f_0",{source:"\n.v-icon[data-v-5ea7e17f] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})}),yr,"data-v-5ea7e17f",!1,void 0,br,void 0)},props:{title:{type:String,default:""},titleColor:{type:String,default:"deep-orange darken-1"},backgroundColor:{type:String,default:"white"},backgroundColorFocus:{type:String,default:"white"},borderRadius:{type:Number,default:30},borderColor:{type:String,default:"white"},borderColorFocus:{type:String,default:"white"},borderShadow:{type:Boolean,default:!0},leftIcon:{type:String,default:""},leftIconColor:{type:String,default:"deep-orange lighten-2"},leftIconColorFocus:{type:String,default:"deep-orange lighten-1"},leftIconTooltip:{type:String,default:""},rightIcon:{type:String,default:""},rightIconColor:{type:String,default:"deep-orange lighten-2"},rightIconColorFocus:{type:String,default:"deep-orange lighten-1"},rightIconTooltip:{type:String,default:""},small:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},focused:{type:Boolean,default:!1}},data:function(){return{focusedTrans:!1}},mounted:function(){},computed:{changeParam:function(){return this.focusedTrans=this.focused,""},useBackgroundColor:function(){var e={};return this.focusedTrans?e["background-color"]=dr(this.backgroundColorFocus):e["background-color"]=dr(this.backgroundColor),e},useBorder:function(){var e={};return this.focusedTrans?e.border="1px solid "+dr(this.borderColorFocus):e.border="1px solid "+dr(this.borderColor),e},useTitleColor:function(){var e={};return e.color=dr(this.titleColor),e},usePadding:function(){var e={};return this.small?e.padding="0px":e.padding="3px 6px",e},usePaddingSlot:function(){var e={"padding-top":"0px","padding-bottom":"0px","padding-left":"15px","padding-right":"15px"};return""!==this.leftIcon&&(e["padding-left"]="10px"),""!==this.rightIcon&&(e["padding-right"]="10px"),e}},methods:{clickIcon:function(e){var n=this;!1!==n.editable&&setTimeout((function(){n.$emit("click-"+e)}),1)}}};var kr=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{changeParam:e.changeParam}},[r("div",{staticStyle:{position:"relative"}},[r("div",{style:[{position:"absolute",top:"0px",transform:"translateY(-120%)","font-size":"0.9rem","white-space":"nowrap",opacity:.7},e.useTitleColor]},[e._v("\n            "+e._s(e.title)+"\n        ")])]),e._v(" "),r("div",{class:{group:!0,shadow:e.borderShadow},style:[e.useBackgroundColor,e.useBorder,e.usePadding,{"border-radius":e.borderRadius+"px"},{opacity:e.editable?1:.6}]},[e.leftIcon?r("div",{staticStyle:{"margin-left":"5px",cursor:"pointer"},on:{click:function(n){return e.clickIcon("left")}}},[r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.leftIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(n){var t=n.on;return[r("div",e._g({attrs:{ShellEllipse:"leftIcon"}},Object.assign({},t)),[r("w-icon",{attrs:{icon:e.leftIcon,color:e.focusedTrans?e.leftIconColorFocus:e.leftIconColor}})],1)]}}],null,!1,4098432623)},[e._v(" "),r("span",[e._v(e._s(e.leftIconTooltip))])])],1):e._e(),e._v(" "),r("div",{style:[{width:"100%"},e.usePaddingSlot]},[e._t("default")],2),e._v(" "),e.rightIcon?r("div",{staticStyle:{"margin-right":"5px",cursor:"pointer"},on:{click:function(n){return e.clickIcon("right")}}},[r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.rightIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(n){var t=n.on;return[r("div",e._g({attrs:{ShellEllipse:"rightIcon"}},Object.assign({},t)),[r("w-icon",{attrs:{icon:e.rightIcon,color:e.focusedTrans?e.rightIconColorFocus:e.rightIconColor}})],1)]}}],null,!1,264035119)},[e._v(" "),r("span",[e._v(e._s(e.rightIconTooltip))])])],1):e._e()])])};kr._withStripped=!0;return pr({render:kr,staticRenderFns:[]},(function(e){e&&e("data-v-7c729620_0",{source:"\n.group[data-v-7c729620] {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\n}\n.shadow[data-v-7c729620] {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n.shadow[data-v-7c729620]:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WShellEllipse.vue"],names:[],mappings:";AAqSA;IACA,oBAAA;IACA,aAAA;IACA,2BAAA;IACA,mBAAA;AACA;AACA;IACA,mGAAA;AACA;AACA;IACA,mGAAA;AACA",file:"WShellEllipse.vue",sourcesContent:["<template>\r\n    <div :changeParam=\"changeParam\">\r\n\r\n        <div style=\"position:relative;\">\r\n\r\n            <div :style=\"[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]\">\r\n                {{title}}\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div\r\n            :class=\"{'group':true,'shadow':borderShadow}\"\r\n            :style=\"[useBackgroundColor,useBorder,usePadding,{'border-radius':borderRadius+'px'},{'opacity':editable?1:0.6}]\"\r\n        >\r\n\r\n            <div style=\"margin-left:5px; cursor:pointer;\" @click=\"clickIcon('left')\" v-if=\"leftIcon\">\r\n\r\n                <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"leftIconTooltip===''\">\r\n\r\n                    <template v-slot:activator=\"{ on: ttShellEllipseLeft }\">\r\n                        <div ShellEllipse=\"leftIcon\" v-on=\"{...ttShellEllipseLeft}\">\r\n                            <w-icon\r\n                                :icon=\"leftIcon\"\r\n                                :color=\"focusedTrans?leftIconColorFocus:leftIconColor\"\r\n                            ></w-icon>\r\n                        </div>\r\n                    </template>\r\n\r\n                    <span>{{leftIconTooltip}}</span>\r\n\r\n                </v-tooltip>\r\n\r\n            </div>\r\n\r\n            <div :style=\"[{'width':'100%'},usePaddingSlot]\">\r\n\r\n                <slot></slot>\r\n\r\n            </div>\r\n\r\n            <div style=\"margin-right:5px; cursor:pointer;\" @click=\"clickIcon('right')\" v-if=\"rightIcon\">\r\n\r\n                <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"rightIconTooltip===''\">\r\n\r\n                    <template v-slot:activator=\"{ on: ttShellEllipseRight }\">\r\n                        <div ShellEllipse=\"rightIcon\" v-on=\"{...ttShellEllipseRight}\">\r\n                            <w-icon\r\n                                :icon=\"rightIcon\"\r\n                                :color=\"focusedTrans?rightIconColorFocus:rightIconColor\"\r\n                            ></w-icon>\r\n                        </div>\r\n                    </template>\r\n\r\n                    <span>{{rightIconTooltip}}</span>\r\n\r\n                </v-tooltip>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\nimport WIcon from './WIcon.vue'\r\n\r\n/**\r\n * @vue-prop {String} [title=''] 輸入標題字串，預設''\r\n * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'\r\n * @vue-prop {Number} [borderRadius=30] 輸入圓角寬度，單位為px，預設30\r\n * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'\r\n * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'\r\n * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'\r\n * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'\r\n * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true\r\n * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''\r\n * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''\r\n * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon\r\n    },\r\n    props: {\r\n        title: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        titleColor: {\r\n            type: String,\r\n            default: 'deep-orange darken-1',\r\n        },\r\n        backgroundColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        backgroundColorFocus: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderRadius: {\r\n            type: Number,\r\n            default: 30,\r\n        },\r\n        borderColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderColorFocus: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderShadow: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        leftIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        leftIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        leftIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        leftIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        rightIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        rightIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        small: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        focused: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focusedTrans: false,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //focusedTrans\r\n            vo.focusedTrans = vo.focused\r\n\r\n            return ''\r\n        },\r\n\r\n        useBackgroundColor: function() {\r\n            //console.log('computed useBackgroundColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.focusedTrans) {\r\n                s['background-color'] = color2hex(vo.backgroundColorFocus)\r\n            }\r\n            else {\r\n                s['background-color'] = color2hex(vo.backgroundColor)\r\n            }\r\n            return s\r\n        },\r\n\r\n        useBorder: function() {\r\n            //console.log('computed useBorder')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.focusedTrans) {\r\n                s['border'] = '1px solid ' + color2hex(vo.borderColorFocus)\r\n            }\r\n            else {\r\n                s['border'] = '1px solid ' + color2hex(vo.borderColor)\r\n            }\r\n            return s\r\n        },\r\n\r\n        useTitleColor: function() {\r\n            //console.log('computed useTitleColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['color'] = color2hex(vo.titleColor)\r\n            return s\r\n        },\r\n\r\n        usePadding: function() {\r\n            //console.log('computed usePadding')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.small) {\r\n                s['padding'] = '0px'\r\n            }\r\n            else {\r\n                s['padding'] = '3px 6px'\r\n            }\r\n            return s\r\n        },\r\n\r\n        usePaddingSlot: function() {\r\n            //console.log('computed usePaddingSlot')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding-top'] = '0px'\r\n            s['padding-bottom'] = '0px'\r\n            s['padding-left'] = '15px'\r\n            s['padding-right'] = '15px'\r\n            if (vo.leftIcon !== '') {\r\n                s['padding-left'] = '10px'\r\n            }\r\n            if (vo.rightIcon !== '') {\r\n                s['padding-right'] = '10px'\r\n            }\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        clickIcon: function (mode) {\r\n            //console.log('methods clickIcon', mode)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(() => {\r\n\r\n                //emit\r\n                vo.$emit('click-' + mode)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.group {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n.shadow {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.shadow:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]},media:void 0})}),xr,"data-v-7c729620",!1,void 0,br,void 0)}));
//# sourceMappingURL=w-shell-ellipse.umd.js.map
