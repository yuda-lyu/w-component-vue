/*!
 * w-dropfiles v1.2.51
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-dropfiles"]=n()}(this,(function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t="object"==e(n)&&n&&n.Object===Object&&n,r="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,a=t||r||Function("return this")(),f=a.Symbol;var o=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},c=Array.isArray,i=Object.prototype,u=i.hasOwnProperty,d=i.toString,l=f?f.toStringTag:void 0;var s=function(e){var n=u.call(e,l),t=e[l];try{e[l]=void 0;var r=!0}catch(e){}var a=d.call(e);return r&&(n?e[l]=t:delete e[l]),a},b=Object.prototype.toString;var h=function(e){return b.call(e)},p="[object Null]",v="[object Undefined]",g=f?f.toStringTag:void 0;var y=function(e){return null==e?void 0===e?v:p:g&&g in Object(e)?s(e):h(e)};var k=function(n){return null!=n&&"object"==e(n)},m="[object Symbol]";var _=function(n){return"symbol"==e(n)||k(n)&&y(n)==m},x=1/0,j=f?f.prototype:void 0,O=j?j.toString:void 0;var S=function e(n){if("string"==typeof n)return n;if(c(n))return o(n,e)+"";if(_(n))return O?O.call(n):"";var t=n+"";return"0"==t&&1/n==-x?"-0":t};var C=function(e){return null==e?"":S(e)};var E=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var f=Array(a);++r<a;)f[r]=e[r+n];return f};var w=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:E(e,n,t)},I=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var A=function(e){return I.test(e)};var R=function(e){return e.split("")},T="[\\ud800-\\udfff]",$="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",z="\\ud83c[\\udffb-\\udfff]",D="[^\\ud800-\\udfff]",L="(?:\\ud83c[\\udde6-\\uddff]){2}",P="[\\ud800-\\udbff][\\udc00-\\udfff]",U="(?:"+$+"|"+z+")"+"?",M="[\\ufe0e\\ufe0f]?"+U+("(?:\\u200d(?:"+[D,L,P].join("|")+")[\\ufe0e\\ufe0f]?"+U+")*"),N="(?:"+[D+$+"?",$,L,P,T].join("|")+")",F=RegExp(z+"(?="+z+")|"+N+M,"g");var Z=function(e){return e.match(F)||[]};var B=function(e){return A(e)?Z(e):R(e)};var G=function(e){return function(n){n=C(n);var t=A(n)?B(n):void 0,r=t?t[0]:n.charAt(0),a=t?w(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var H=function(e){return G(C(e).toLowerCase())};var V=function(e,n,t,r){var a=-1,f=null==e?0:e.length;for(r&&f&&(t=e[++a]);++a<f;)t=n(t,e[a],a,e);return t};var W=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),J=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Y=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var q=function(e){return(e=C(e))&&e.replace(J,W).replace(Y,"")},X=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var K=function(e){return e.match(X)||[]},Q=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var ee=function(e){return Q.test(e)},ne="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",te="["+ne+"]",re="\\d+",ae="[\\u2700-\\u27bf]",fe="[a-z\\xdf-\\xf6\\xf8-\\xff]",oe="[^\\ud800-\\udfff"+ne+re+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ce="(?:\\ud83c[\\udde6-\\uddff]){2}",ie="[\\ud800-\\udbff][\\udc00-\\udfff]",ue="[A-Z\\xc0-\\xd6\\xd8-\\xde]",de="(?:"+fe+"|"+oe+")",le="(?:"+ue+"|"+oe+")",se="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",be="[\\ufe0e\\ufe0f]?"+se+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ce,ie].join("|")+")[\\ufe0e\\ufe0f]?"+se+")*"),he="(?:"+[ae,ce,ie].join("|")+")"+be,pe=RegExp([ue+"?"+fe+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[te,ue,"$"].join("|")+")",le+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[te,ue+de,"$"].join("|")+")",ue+"?"+de+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ue+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",re,he].join("|"),"g");var ve=function(e){return e.match(pe)||[]};var ge=function(e,n,t){return e=C(e),void 0===(n=t?void 0:n)?ee(e)?ve(e):K(e):e.match(n)||[]},ye=RegExp("['’]","g");var ke=function(e){return function(n){return V(ge(q(n).replace(ye,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?H(n):n)}));var me=function(e,n){return e===n||e!=e&&n!=n};var _e=function(n){var t=e(n);return null!=n&&("object"==t||"function"==t)},xe="[object AsyncFunction]",je="[object Function]",Oe="[object GeneratorFunction]",Se="[object Proxy]";var Ce=function(e){if(!_e(e))return!1;var n=y(e);return n==je||n==Oe||n==xe||n==Se},Ee=9007199254740991;var we=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Ee};var Ie=function(e){return null!=e&&we(e.length)&&!Ce(e)},Ae=9007199254740991,Re=/^(?:0|[1-9]\d*)$/;var Te=function(n,t){var r=e(n);return!!(t=null==t?Ae:t)&&("number"==r||"symbol"!=r&&Re.test(n))&&n>-1&&n%1==0&&n<t};var $e=function(n,t,r){if(!_e(r))return!1;var a=e(t);return!!("number"==a?Ie(r)&&Te(t,r.length):"string"==a&&t in r)&&me(r[t],n)},ze="[object RegExp]";var De=function(e){return k(e)&&y(e)==ze};var Le=function(e){return function(n){return e(n)}},Pe=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){var r=n&&!n.nodeType&&n,a=r&&e&&!e.nodeType&&e,f=a&&a.exports===r&&t.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||f&&f.binding&&f.binding("util")}catch(e){}}();e.exports=o})),Ue=Pe&&Pe.isRegExp,Me=Ue?Le(Ue):De,Ne=4294967295;var Fe=function(e,n,t){return t&&"number"!=typeof t&&$e(e,n,t)&&(n=t=void 0),(t=void 0===t?Ne:t>>>0)?(e=C(e))&&("string"==typeof n||null!=n&&!Me(n))&&!(n=S(n))&&A(e)?w(B(e),0,t):e.split(n,t):[]},Ze=Object.prototype;var Be=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Ze)};var Ge=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),He=Object.prototype.hasOwnProperty;var Ve,We=function(e){if(!Be(e))return Ge(e);var n=[];for(var t in Object(e))He.call(e,t)&&"constructor"!=t&&n.push(t);return n},Je=a["__core-js_shared__"],Ye=(Ve=/[^.]+$/.exec(Je&&Je.keys&&Je.keys.IE_PROTO||""))?"Symbol(src)_1."+Ve:"";var qe=function(e){return!!Ye&&Ye in e},Xe=Function.prototype.toString;var Ke=function(e){if(null!=e){try{return Xe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Qe=/^\[object .+?Constructor\]$/,en=Function.prototype,nn=Object.prototype,tn=en.toString,rn=nn.hasOwnProperty,an=RegExp("^"+tn.call(rn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var fn=function(e){return!(!_e(e)||qe(e))&&(Ce(e)?an:Qe).test(Ke(e))};var on=function(e,n){return null==e?void 0:e[n]};var cn=function(e,n){var t=on(e,n);return fn(t)?t:void 0},un=cn(a,"DataView"),dn=cn(a,"Map"),ln=cn(a,"Promise"),sn=cn(a,"Set"),bn=cn(a,"WeakMap"),hn=Ke(un),pn=Ke(dn),vn=Ke(ln),gn=Ke(sn),yn=Ke(bn),kn=y;(un&&"[object DataView]"!=kn(new un(new ArrayBuffer(1)))||dn&&"[object Map]"!=kn(new dn)||ln&&"[object Promise]"!=kn(ln.resolve())||sn&&"[object Set]"!=kn(new sn)||bn&&"[object WeakMap]"!=kn(new bn))&&(kn=function(e){var n=y(e),t="[object Object]"==n?e.constructor:void 0,r=t?Ke(t):"";if(r)switch(r){case hn:return"[object DataView]";case pn:return"[object Map]";case vn:return"[object Promise]";case gn:return"[object Set]";case yn:return"[object WeakMap]"}return n});var mn=kn,_n="[object String]";var xn=function(e){return"string"==typeof e||!c(e)&&k(e)&&y(e)==_n};var jn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),On="[\\ud800-\\udfff]",Sn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Cn="\\ud83c[\\udffb-\\udfff]",En="[^\\ud800-\\udfff]",wn="(?:\\ud83c[\\udde6-\\uddff]){2}",In="[\\ud800-\\udbff][\\udc00-\\udfff]",An="(?:"+Sn+"|"+Cn+")"+"?",Rn="[\\ufe0e\\ufe0f]?"+An+("(?:\\u200d(?:"+[En,wn,In].join("|")+")[\\ufe0e\\ufe0f]?"+An+")*"),Tn="(?:"+[En+Sn+"?",Sn,wn,In,On].join("|")+")",$n=RegExp(Cn+"(?="+Cn+")|"+Tn+Rn,"g");var zn=function(e){for(var n=$n.lastIndex=0;$n.test(e);)++n;return n};var Dn=function(e){return A(e)?zn(e):jn(e)},Ln="[object Map]",Pn="[object Set]";var Un=function(e){if(null==e)return 0;if(Ie(e))return xn(e)?Dn(e):e.length;var n=mn(e);return n==Ln||n==Pn?e.size:We(e).length},Mn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nn=/^\w*$/;var Fn=function(n,t){if(c(n))return!1;var r=e(n);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!_(n))||(Nn.test(n)||!Mn.test(n)||null!=t&&n in Object(t))},Zn=cn(Object,"create");var Bn=function(){this.__data__=Zn?Zn(null):{},this.size=0};var Gn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Hn="__lodash_hash_undefined__",Vn=Object.prototype.hasOwnProperty;var Wn=function(e){var n=this.__data__;if(Zn){var t=n[e];return t===Hn?void 0:t}return Vn.call(n,e)?n[e]:void 0},Jn=Object.prototype.hasOwnProperty;var Yn=function(e){var n=this.__data__;return Zn?void 0!==n[e]:Jn.call(n,e)},qn="__lodash_hash_undefined__";var Xn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Zn&&void 0===n?qn:n,this};function Kn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Kn.prototype.clear=Bn,Kn.prototype.delete=Gn,Kn.prototype.get=Wn,Kn.prototype.has=Yn,Kn.prototype.set=Xn;var Qn=Kn;var et=function(){this.__data__=[],this.size=0};var nt=function(e,n){for(var t=e.length;t--;)if(me(e[t][0],n))return t;return-1},tt=Array.prototype.splice;var rt=function(e){var n=this.__data__,t=nt(n,e);return!(t<0)&&(t==n.length-1?n.pop():tt.call(n,t,1),--this.size,!0)};var at=function(e){var n=this.__data__,t=nt(n,e);return t<0?void 0:n[t][1]};var ft=function(e){return nt(this.__data__,e)>-1};var ot=function(e,n){var t=this.__data__,r=nt(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function ct(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ct.prototype.clear=et,ct.prototype.delete=rt,ct.prototype.get=at,ct.prototype.has=ft,ct.prototype.set=ot;var it=ct;var ut=function(){this.size=0,this.__data__={hash:new Qn,map:new(dn||it),string:new Qn}};var dt=function(n){var t=e(n);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n};var lt=function(e,n){var t=e.__data__;return dt(n)?t["string"==typeof n?"string":"hash"]:t.map};var st=function(e){var n=lt(this,e).delete(e);return this.size-=n?1:0,n};var bt=function(e){return lt(this,e).get(e)};var ht=function(e){return lt(this,e).has(e)};var pt=function(e,n){var t=lt(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function vt(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}vt.prototype.clear=ut,vt.prototype.delete=st,vt.prototype.get=bt,vt.prototype.has=ht,vt.prototype.set=pt;var gt=vt,yt="Expected a function";function kt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError(yt);var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],f=t.cache;if(f.has(a))return f.get(a);var o=e.apply(this,r);return t.cache=f.set(a,o)||f,o};return t.cache=new(kt.Cache||gt),t}kt.Cache=gt;var mt=kt,_t=500;var xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jt=/\\(\\)?/g,Ot=function(e){var n=mt(e,(function(e){return t.size===_t&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(xt,(function(e,t,r,a){n.push(r?a.replace(jt,"$1"):t||e)})),n}));var St=function(e,n){return c(e)?e:Fn(e,n)?[e]:Ot(C(e))},Ct=1/0;var Et=function(e){if("string"==typeof e||_(e))return e;var n=e+"";return"0"==n&&1/e==-Ct?"-0":n};var wt=function(e,n){for(var t=0,r=(n=St(n,e)).length;null!=e&&t<r;)e=e[Et(n[t++])];return t&&t==r?e:void 0};var It=function(e,n,t){var r=null==e?void 0:wt(e,n);return void 0===r?t:r},At={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function Rt(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Fe(e," ");if(2!==Un(n))return e;var t=n[0].trim();t=ke(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=It(At,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}function Tt(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map((function(e){e(t)})),(e["*"]||[]).slice().map((function(e){e(n,t)}))}}}var $t={components:{},props:{backgroundColor:{type:String,default:"transparent"},backgroundColorDropIn:{type:String,default:"grey lighten-4"},backgroundColorHover:{type:String,default:"grey lighten-5"},styleTransition:{type:String,default:"all 0.3s linear"},borderRadius:{type:Number,default:6},borderWidth:{type:Number,default:1},borderColor:{type:String,default:"grey lighten-2"},borderColorDropIn:{type:String,default:"grey lighten-2"},borderColorHover:{type:String,default:"grey lighten-2"}},data:function(){return{ev:null,bMouseIn:!1,bDropIn:!1}},mounted:function(){var e=this;e.ev=function(e){var n=!1,t=!1,r=new Tt;function a(e){e.stopPropagation(),e.preventDefault(),t=!0,!1===n&&(n=!0,r.emit("dropIn",e))}function f(e){e.stopPropagation(),e.preventDefault(),t=!1,setTimeout((function(){t||(n=!1,r.emit("dropOut",e))}),100)}function o(e){a(e)}function c(e){f(e)}function i(e){a(e);var n=e.dataTransfer.files;r.emit("getFiles",{files:n,e:e,cb:function(){f(e)}})}return e.addEventListener("dragenter",o,!1),e.addEventListener("dragover",o,!1),e.addEventListener("dragleave",c,!1),e.addEventListener("drop",i,!1),r.off=function(){e.removeEventListener("dragenter",o,!1),e.removeEventListener("dragover",o,!1),e.removeEventListener("dragleave",c,!1),e.removeEventListener("drop",i,!1)},r}(e.$refs.dropPanel),e.ev.on("getFiles",(function(n){var t=n.files,r=n.cb;e.$emit("get-files",t,e.$refs.dropPanel),r()})),e.ev.on("dropIn",(function(){e.bDropIn=!0,e.$emit("drop-in",e.$refs.dropPanel)})),e.ev.on("dropOut",(function(){e.bDropIn=!1,e.$emit("drop-out",e.$refs.dropPanel)}))},beforeDestroy:function(){this.ev.off()},computed:{useBorderColor:function(){var e=this;return e.bDropIn?Rt(e.borderColorDropIn):e.bMouseIn?Rt(e.borderColorHover):Rt(e.borderColor)},useBackgroundColor:function(){var e=this;return e.bDropIn?Rt(e.backgroundColorDropIn):e.bMouseIn?Rt(e.backgroundColorHover):Rt(e.backgroundColor)}},methods:{}};var zt=function(e,n,t,r,a,f,o,c,i,u){"boolean"!=typeof o&&(i=c,c=o,o=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),f?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,i(e)),e&&e._registeredComponents&&e._registeredComponents.add(f)},l._ssrRegister=d):n&&(d=o?function(){n.call(this,u(this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var b=l.beforeCreate;l.beforeCreate=b?[].concat(b,d):[d]}return t},Dt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var Lt=document.head||document.getElementsByTagName("head")[0],Pt={};var Ut=function(e){return function(e,n){return function(e,n){var t=Dt?n.media||"default":e,r=Pt[t]||(Pt[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),Lt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var f=r.ids.size-1,o=document.createTextNode(a),c=r.element.childNodes;c[f]&&r.element.removeChild(c[f]),c.length?r.element.insertBefore(o,c[f]):r.element.appendChild(o)}}}(e,n)}};const Mt=$t;var Nt=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{ref:"dropPanel",style:"border:"+e.borderWidth+"px solid "+e.useBorderColor+"; border-radius:"+e.borderRadius+"px; background-color:"+e.useBackgroundColor+"; transition:"+e.styleTransition+";",on:{mouseenter:function(n){e.bMouseIn=!0},mouseleave:function(n){e.bMouseIn=!1}}},[e._t("default")],2)};Nt._withStripped=!0;return zt({render:Nt,staticRenderFns:[]},(function(e){e&&e("data-v-41f83a88_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WDropfiles.vue"},media:void 0})}),Mt,"data-v-41f83a88",!1,void 0,Ut,void 0)}));
//# sourceMappingURL=w-dropfiles.umd.js.map
