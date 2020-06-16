/*!
 * w-button-prog v1.3.47
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-button-prog"]=e()}(this,(function(){"use strict";var n=Array.isArray,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(n,e){return n(e={exports:{}},e.exports),e.exports}var r=t((function(n){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(t)}n.exports=e})),a="object"==r(e)&&e&&e.Object===Object&&e,i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,o=a||i||Function("return this")(),f=o.Symbol,c=Object.prototype,u=c.hasOwnProperty,d=c.toString,l=f?f.toStringTag:void 0;var s=function(n){var e=u.call(n,l),t=n[l];try{n[l]=void 0;var r=!0}catch(n){}var a=d.call(n);return r&&(e?n[l]=t:delete n[l]),a},h=Object.prototype.toString;var p=function(n){return h.call(n)},g=f?f.toStringTag:void 0;var v=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":g&&g in Object(n)?s(n):p(n)};var b=function(n){return null!=n&&"object"==r(n)};var y=function(n){return"symbol"==r(n)||b(n)&&"[object Symbol]"==v(n)},m=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var x=function(e,t){if(n(e))return!1;var a=r(e);return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=e&&!y(e))||(_.test(e)||!m.test(e)||null!=t&&e in Object(t))};var k=function(n){var e=r(n);return null!=n&&("object"==e||"function"==e)};var S,j=function(n){if(!k(n))return!1;var e=v(n);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},O=o["__core-js_shared__"],T=(S=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"";var w=function(n){return!!T&&T in n},z=Function.prototype.toString;var A=function(n){if(null!=n){try{return z.call(n)}catch(n){}try{return n+""}catch(n){}}return""},C=/^\[object .+?Constructor\]$/,E=Function.prototype,P=Object.prototype,R=E.toString,I=P.hasOwnProperty,$=RegExp("^"+R.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var L=function(n){return!(!k(n)||w(n))&&(j(n)?$:C).test(A(n))};var N=function(n,e){return null==n?void 0:n[e]};var U=function(n,e){var t=N(n,e);return L(t)?t:void 0},B=U(Object,"create");var D=function(){this.__data__=B?B(null):{},this.size=0};var F=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},Z=Object.prototype.hasOwnProperty;var M=function(n){var e=this.__data__;if(B){var t=e[n];return"__lodash_hash_undefined__"===t?void 0:t}return Z.call(e,n)?e[n]:void 0},W=Object.prototype.hasOwnProperty;var G=function(n){var e=this.__data__;return B?void 0!==e[n]:W.call(e,n)};var V=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=B&&void 0===e?"__lodash_hash_undefined__":e,this};function H(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}H.prototype.clear=D,H.prototype.delete=F,H.prototype.get=M,H.prototype.has=G,H.prototype.set=V;var J=H;var Y=function(){this.__data__=[],this.size=0};var K=function(n,e){return n===e||n!=n&&e!=e};var X=function(n,e){for(var t=n.length;t--;)if(K(n[t][0],e))return t;return-1},q=Array.prototype.splice;var Q=function(n){var e=this.__data__,t=X(e,n);return!(t<0)&&(t==e.length-1?e.pop():q.call(e,t,1),--this.size,!0)};var nn=function(n){var e=this.__data__,t=X(e,n);return t<0?void 0:e[t][1]};var en=function(n){return X(this.__data__,n)>-1};var tn=function(n,e){var t=this.__data__,r=X(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this};function rn(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}rn.prototype.clear=Y,rn.prototype.delete=Q,rn.prototype.get=nn,rn.prototype.has=en,rn.prototype.set=tn;var an=rn,on=U(o,"Map");var fn=function(){this.size=0,this.__data__={hash:new J,map:new(on||an),string:new J}};var cn=function(n){var e=r(n);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n};var un=function(n,e){var t=n.__data__;return cn(e)?t["string"==typeof e?"string":"hash"]:t.map};var dn=function(n){var e=un(this,n).delete(n);return this.size-=e?1:0,e};var ln=function(n){return un(this,n).get(n)};var sn=function(n){return un(this,n).has(n)};var hn=function(n,e){var t=un(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this};function pn(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}pn.prototype.clear=fn,pn.prototype.delete=dn,pn.prototype.get=ln,pn.prototype.has=sn,pn.prototype.set=hn;var gn=pn;function vn(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=e?e.apply(this,r):r[0],i=t.cache;if(i.has(a))return i.get(a);var o=n.apply(this,r);return t.cache=i.set(a,o)||i,o};return t.cache=new(vn.Cache||gn),t}vn.Cache=gn;var bn=vn;var yn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mn=/\\(\\)?/g,_n=function(n){var e=bn(n,(function(n){return 500===t.size&&t.clear(),n})),t=e.cache;return e}((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(yn,(function(n,t,r,a){e.push(r?a.replace(mn,"$1"):t||n)})),e}));var xn=function(n,e){for(var t=-1,r=null==n?0:n.length,a=Array(r);++t<r;)a[t]=e(n[t],t,n);return a},kn=f?f.prototype:void 0,Sn=kn?kn.toString:void 0;var jn=function e(t){if("string"==typeof t)return t;if(n(t))return xn(t,e)+"";if(y(t))return Sn?Sn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var On=function(n){return null==n?"":jn(n)};var Tn=function(e,t){return n(e)?e:x(e,t)?[e]:_n(On(e))};var wn=function(n){if("string"==typeof n||y(n))return n;var e=n+"";return"0"==e&&1/n==-1/0?"-0":e};var zn=function(n,e){for(var t=0,r=(e=Tn(e,n)).length;null!=n&&t<r;)n=n[wn(e[t++])];return t&&t==r?n:void 0};var An=function(n,e,t){var r=null==n?void 0:zn(n,e);return void 0===r?t:r};var Cn=function(n,e,t){var r=-1,a=n.length;e<0&&(e=-e>a?0:a+e),(t=t>a?a:t)<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var i=Array(a);++r<a;)i[r]=n[r+e];return i};var En=function(n,e,t){var r=n.length;return t=void 0===t?r:t,!e&&t>=r?n:Cn(n,e,t)},Pn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Rn=function(n){return Pn.test(n)};var In=function(n){return n.split("")},$n="[\\ud800-\\udfff]",Ln="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Nn="\\ud83c[\\udffb-\\udfff]",Un="[^\\ud800-\\udfff]",Bn="(?:\\ud83c[\\udde6-\\uddff]){2}",Dn="[\\ud800-\\udbff][\\udc00-\\udfff]",Fn="(?:"+Ln+"|"+Nn+")"+"?",Zn="[\\ufe0e\\ufe0f]?"+Fn+("(?:\\u200d(?:"+[Un,Bn,Dn].join("|")+")[\\ufe0e\\ufe0f]?"+Fn+")*"),Mn="(?:"+[Un+Ln+"?",Ln,Bn,Dn,$n].join("|")+")",Wn=RegExp(Nn+"(?="+Nn+")|"+Mn+Zn,"g");var Gn=function(n){return n.match(Wn)||[]};var Vn=function(n){return Rn(n)?Gn(n):In(n)};var Hn=function(n){return function(e){e=On(e);var t=Rn(e)?Vn(e):void 0,r=t?t[0]:e.charAt(0),a=t?En(t,1).join(""):e.slice(1);return r[n]()+a}}("toUpperCase");var Jn=function(n){return Hn(On(n).toLowerCase())};var Yn=function(n,e,t,r){var a=-1,i=null==n?0:n.length;for(r&&i&&(t=n[++a]);++a<i;)t=e(t,n[a],a,n);return t};var Kn=function(n){return function(e){return null==n?void 0:n[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,qn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var Qn=function(n){return(n=On(n))&&n.replace(Xn,Kn).replace(qn,"")},ne=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var ee=function(n){return n.match(ne)||[]},te=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var re=function(n){return te.test(n)},ae="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ie="["+ae+"]",oe="\\d+",fe="[\\u2700-\\u27bf]",ce="[a-z\\xdf-\\xf6\\xf8-\\xff]",ue="[^\\ud800-\\udfff"+ae+oe+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",de="(?:\\ud83c[\\udde6-\\uddff]){2}",le="[\\ud800-\\udbff][\\udc00-\\udfff]",se="[A-Z\\xc0-\\xd6\\xd8-\\xde]",he="(?:"+ce+"|"+ue+")",pe="(?:"+se+"|"+ue+")",ge="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",ve="[\\ufe0e\\ufe0f]?"+ge+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",de,le].join("|")+")[\\ufe0e\\ufe0f]?"+ge+")*"),be="(?:"+[fe,de,le].join("|")+")"+ve,ye=RegExp([se+"?"+ce+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[ie,se,"$"].join("|")+")",pe+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[ie,se+he,"$"].join("|")+")",se+"?"+he+"+(?:['’](?:d|ll|m|re|s|t|ve))?",se+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",oe,be].join("|"),"g");var me=function(n){return n.match(ye)||[]};var _e=function(n,e,t){return n=On(n),void 0===(e=t?void 0:e)?re(n)?me(n):ee(n):n.match(e)||[]},xe=RegExp("['’]","g");var ke=function(n){return function(e){return Yn(_e(Qn(e).replace(xe,"")),n,"")}}((function(n,e,t){return e=e.toLowerCase(),n+(t?Jn(e):e)}));var Se=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991};var je=function(n){return null!=n&&Se(n.length)&&!j(n)},Oe=/^(?:0|[1-9]\d*)$/;var Te=function(n,e){var t=r(n);return!!(e=null==e?9007199254740991:e)&&("number"==t||"symbol"!=t&&Oe.test(n))&&n>-1&&n%1==0&&n<e};var we=function(n,e,t){if(!k(t))return!1;var a=r(e);return!!("number"==a?je(t)&&Te(e,t.length):"string"==a&&e in t)&&K(t[e],n)};var ze=function(n){return b(n)&&"[object RegExp]"==v(n)};var Ae=function(n){return function(e){return n(e)}},Ce=t((function(n,e){var t=e&&!e.nodeType&&e,r=t&&n&&!n.nodeType&&n,i=r&&r.exports===t&&a.process,o=function(){try{var n=r&&r.require&&r.require("util").types;return n||i&&i.binding&&i.binding("util")}catch(n){}}();n.exports=o})),Ee=Ce&&Ce.isRegExp,Pe=Ee?Ae(Ee):ze;var Re=function(n,e,t){return t&&"number"!=typeof t&&we(n,e,t)&&(e=t=void 0),(t=void 0===t?4294967295:t>>>0)?(n=On(n))&&("string"==typeof e||null!=e&&!Pe(e))&&!(e=jn(e))&&Rn(n)?En(Vn(n),0,t):n.split(e,t):[]},Ie=Object.prototype;var $e=function(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||Ie)};var Le=function(n,e){return function(t){return n(e(t))}}(Object.keys,Object),Ne=Object.prototype.hasOwnProperty;var Ue=function(n){if(!$e(n))return Le(n);var e=[];for(var t in Object(n))Ne.call(n,t)&&"constructor"!=t&&e.push(t);return e},Be=U(o,"DataView"),De=U(o,"Promise"),Fe=U(o,"Set"),Ze=U(o,"WeakMap"),Me=A(Be),We=A(on),Ge=A(De),Ve=A(Fe),He=A(Ze),Je=v;(Be&&"[object DataView]"!=Je(new Be(new ArrayBuffer(1)))||on&&"[object Map]"!=Je(new on)||De&&"[object Promise]"!=Je(De.resolve())||Fe&&"[object Set]"!=Je(new Fe)||Ze&&"[object WeakMap]"!=Je(new Ze))&&(Je=function(n){var e=v(n),t="[object Object]"==e?n.constructor:void 0,r=t?A(t):"";if(r)switch(r){case Me:return"[object DataView]";case We:return"[object Map]";case Ge:return"[object Promise]";case Ve:return"[object Set]";case He:return"[object WeakMap]"}return e});var Ye=Je;var Ke=function(e){return"string"==typeof e||!n(e)&&b(e)&&"[object String]"==v(e)};var Xe=function(n){return function(e){return null==e?void 0:e[n]}}("length"),qe="[\\ud800-\\udfff]",Qe="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",nt="\\ud83c[\\udffb-\\udfff]",et="[^\\ud800-\\udfff]",tt="(?:\\ud83c[\\udde6-\\uddff]){2}",rt="[\\ud800-\\udbff][\\udc00-\\udfff]",at="(?:"+Qe+"|"+nt+")"+"?",it="[\\ufe0e\\ufe0f]?"+at+("(?:\\u200d(?:"+[et,tt,rt].join("|")+")[\\ufe0e\\ufe0f]?"+at+")*"),ot="(?:"+[et+Qe+"?",Qe,tt,rt,qe].join("|")+")",ft=RegExp(nt+"(?="+nt+")|"+ot+it,"g");var ct=function(n){for(var e=ft.lastIndex=0;ft.test(n);)++e;return e};var ut=function(n){return Rn(n)?ct(n):Xe(n)};var dt=function(n){if(null==n)return 0;if(je(n))return Ke(n)?ut(n):n.length;var e=Ye(n);return"[object Map]"==e||"[object Set]"==e?n.size:Ue(n).length},lt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};var st={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var n=this.size;return this.icon.indexOf("fa-")>=0?n-4:n},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};function ht(n,e,t,r,a,i,o,f,c,u){"boolean"!=typeof o&&(c=f,f=o,o=!1);var d,l="function"==typeof t?t.options:t;if(n&&n.render&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),i?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,c(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},l._ssrRegister=d):e&&(d=o?function(n){e.call(this,u(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,f(n))}),d)if(l.functional){var s=l.render;l.render=function(n,e){return d.call(e),s(n,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,d):[d]}return t}var pt,gt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function vt(n){return function(n,e){return function(n,e){var t=gt?e.media||"default":n,r=bt[t]||(bt[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var a=e.source;if(e.map&&(a+="\n/*# sourceURL="+e.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===pt&&(pt=document.head||document.getElementsByTagName("head")[0]),pt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,o=document.createTextNode(a),f=r.element.childNodes;f[i]&&r.element.removeChild(f[i]),f.length?r.element.insertBefore(o,f[i]):r.element.appendChild(o)}}}(n,e)}}var bt={};const yt=st;var mt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return""!==n.icon?t("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[t("v-icon",{style:n.useStyle,attrs:{color:n.color,size:n.useSize}},[n._v("\n        "+n._s(n.useIcon)+"\n    ")])],1):n._e()};mt._withStripped=!0;const _t={components:{WIcon:ht({render:mt,staticRenderFns:[]},(function(n){n&&n("data-v-39a33360_0",{source:"\n.v-icon[data-v-39a33360] {\r\n    transition: all 0.3s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.3s;\r\n}\r\n</style>\r\n"]},media:void 0})}),yt,"data-v-39a33360",!1,void 0,!1,vt,void 0,void 0)},props:{item:{type:Object,default:function(){}},textKey:{type:String,default:"name"},tooltip:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:""},iconShiftLeft:{type:Number,default:0},textColor:{type:String,default:"black"},backgroundColor:{type:String,default:"grey lighten-4"},progColor:{type:String,default:"grey"},small:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingProg:{type:Number,default:0},editable:{type:Boolean,default:!0}},data:function(){return{loadingTrans:!1,loadingProgTrans:0}},computed:{changeParam:function(){return this.loadingTrans=this.loading,this.loadingProgTrans=this.loadingProg,""},useText:function(){return An(this.item,this.textKey,"")},useIconShiftLeft:function(){return this.iconShiftLeft-9},useTextColor:function(){return function(n){if("white"===n)return"#fff";if("black"===n)return"#000";if("transparent"===n)return"rgba(0,0,0,0)";var e=Re(n," ");if(2!==dt(e))return n;var t=e[0].trim();t=ke(t);var r=e[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=An(lt,"default.".concat(t,".").concat(r),null);return null===a&&(a=n),a}(this.textColor)},useHeight:function(){return this.small?28:36}},methods:{clickBtn:function(n){var e=this;e.loadingTrans||(e.loadingTrans=!0,e.loadingProgTrans=0,setTimeout((function(){e.$emit("update:loading",e.loadingTrans),e.$emit("update:loadingProg",e.loadingProgTrans)}),1),e.$emit("click",n,(function(n){e.loadingProgTrans=n,setTimeout((function(){e.$emit("update:loadingProg",e.loadingProgTrans)}),1),n>=100&&setTimeout((function(){e.loadingTrans=!1,e.$emit("update:loading",e.loadingTrans)}),1)})))}}};var xt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{display:"inline-block"},attrs:{changeParam:n.changeParam,role:"button"}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.tooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var r=e.on;return[t("div",{staticStyle:{position:"relative"}},[n.loadingTrans?t("div",{staticStyle:{position:"absolute",left:"0",right:"0",top:"0",bottom:"0"}},[t("v-progress-linear",{style:"border-radius:"+n.useHeight/2+"px;",attrs:{rounded:"",color:n.progColor,height:n.useHeight,value:n.loadingProgTrans}})],1):n._e(),n._v(" "),t("v-btn",n._g({style:"opacity:"+(n.loadingTrans?n.editable?.5:.3:1),attrs:{rounded:"",small:n.small,color:n.backgroundColor,disabled:!n.editable},on:{click:function(e){return n.clickBtn(n.item)}}},r),[t("w-icon",{style:"margin:0px 5px 0px "+n.useIconShiftLeft+"px;",attrs:{icon:n.icon,color:n.iconColor,size:22}}),n._v(" "),t("span",{style:"font-size:0.875rem; text-transform:none; color:"+n.useTextColor},[n._v("\n                        "+n._s(n.useText)+"\n                    ")])],1)],1)]}}])},[n._v(" "),t("span",[n._v(n._s(n.tooltip))])])],1)};xt._withStripped=!0;return ht({render:xt,staticRenderFns:[]},(function(n){n&&n("data-v-66edc64b_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WButtonProg.vue"},media:void 0})}),_t,"data-v-66edc64b",!1,void 0,!1,vt,void 0,void 0)}));
//# sourceMappingURL=w-button-prog.umd.js.map
