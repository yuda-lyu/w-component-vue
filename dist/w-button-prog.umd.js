/*!
 * w-button-prog v1.3.31
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-button-prog"]=e()}(this,(function(){"use strict";var n=Array.isArray,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(n,e){return n(e={exports:{}},e.exports),e.exports}var t=r((function(n){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(r)}n.exports=e})),o="object"==t(e)&&e&&e.Object===Object&&e,a="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,i=o||a||Function("return this")(),f=i.Symbol,c=Object.prototype,u=c.hasOwnProperty,l=c.toString,d=f?f.toStringTag:void 0;var s=function(n){var e=u.call(n,d),r=n[d];try{n[d]=void 0;var t=!0}catch(n){}var o=l.call(n);return t&&(e?n[d]=r:delete n[d]),o},p=Object.prototype.toString;var g=function(n){return p.call(n)},v=f?f.toStringTag:void 0;var h=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":v&&v in Object(n)?s(n):g(n)};var b=function(n){return null!=n&&"object"==t(n)};var m=function(n){return"symbol"==t(n)||b(n)&&"[object Symbol]"==h(n)},y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var k=function(e,r){if(n(e))return!1;var o=t(e);return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=e&&!m(e))||(x.test(e)||!y.test(e)||null!=r&&e in Object(r))};var _=function(n){var e=t(n);return null!=n&&("object"==e||"function"==e)};var S,T=function(n){if(!_(n))return!1;var e=h(n);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=i["__core-js_shared__"],C=(S=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"";var w=function(n){return!!C&&C in n},A=Function.prototype.toString;var O=function(n){if(null!=n){try{return A.call(n)}catch(n){}try{return n+""}catch(n){}}return""},z=/^\[object .+?Constructor\]$/,P=Function.prototype,$=Object.prototype,E=P.toString,I=$.hasOwnProperty,R=RegExp("^"+E.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var L=function(n){return!(!_(n)||w(n))&&(T(n)?R:z).test(O(n))};var B=function(n,e){return null==n?void 0:n[e]};var N=function(n,e){var r=B(n,e);return L(r)?r:void 0},U=N(Object,"create");var D=function(){this.__data__=U?U(null):{},this.size=0};var W=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},F=Object.prototype.hasOwnProperty;var Z=function(n){var e=this.__data__;if(U){var r=e[n];return"__lodash_hash_undefined__"===r?void 0:r}return F.call(e,n)?e[n]:void 0},M=Object.prototype.hasOwnProperty;var H=function(n){var e=this.__data__;return U?void 0!==e[n]:M.call(e,n)};var G=function(n,e){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=U&&void 0===e?"__lodash_hash_undefined__":e,this};function V(n){var e=-1,r=null==n?0:n.length;for(this.clear();++e<r;){var t=n[e];this.set(t[0],t[1])}}V.prototype.clear=D,V.prototype.delete=W,V.prototype.get=Z,V.prototype.has=H,V.prototype.set=G;var K=V;var J=function(){this.__data__=[],this.size=0};var Y=function(n,e){return n===e||n!=n&&e!=e};var X=function(n,e){for(var r=n.length;r--;)if(Y(n[r][0],e))return r;return-1},q=Array.prototype.splice;var Q=function(n){var e=this.__data__,r=X(e,n);return!(r<0)&&(r==e.length-1?e.pop():q.call(e,r,1),--this.size,!0)};var nn=function(n){var e=this.__data__,r=X(e,n);return r<0?void 0:e[r][1]};var en=function(n){return X(this.__data__,n)>-1};var rn=function(n,e){var r=this.__data__,t=X(r,n);return t<0?(++this.size,r.push([n,e])):r[t][1]=e,this};function tn(n){var e=-1,r=null==n?0:n.length;for(this.clear();++e<r;){var t=n[e];this.set(t[0],t[1])}}tn.prototype.clear=J,tn.prototype.delete=Q,tn.prototype.get=nn,tn.prototype.has=en,tn.prototype.set=rn;var on=tn,an=N(i,"Map");var fn=function(){this.size=0,this.__data__={hash:new K,map:new(an||on),string:new K}};var cn=function(n){var e=t(n);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n};var un=function(n,e){var r=n.__data__;return cn(e)?r["string"==typeof e?"string":"hash"]:r.map};var ln=function(n){var e=un(this,n).delete(n);return this.size-=e?1:0,e};var dn=function(n){return un(this,n).get(n)};var sn=function(n){return un(this,n).has(n)};var pn=function(n,e){var r=un(this,n),t=r.size;return r.set(n,e),this.size+=r.size==t?0:1,this};function gn(n){var e=-1,r=null==n?0:n.length;for(this.clear();++e<r;){var t=n[e];this.set(t[0],t[1])}}gn.prototype.clear=fn,gn.prototype.delete=ln,gn.prototype.get=dn,gn.prototype.has=sn,gn.prototype.set=pn;var vn=gn;function hn(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var t=arguments,o=e?e.apply(this,t):t[0],a=r.cache;if(a.has(o))return a.get(o);var i=n.apply(this,t);return r.cache=a.set(o,i)||a,i};return r.cache=new(hn.Cache||vn),r}hn.Cache=vn;var bn=hn;var mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yn=/\\(\\)?/g,xn=function(n){var e=bn(n,(function(n){return 500===r.size&&r.clear(),n})),r=e.cache;return e}((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(mn,(function(n,r,t,o){e.push(t?o.replace(yn,"$1"):r||n)})),e}));var kn=function(n,e){for(var r=-1,t=null==n?0:n.length,o=Array(t);++r<t;)o[r]=e(n[r],r,n);return o},_n=f?f.prototype:void 0,Sn=_n?_n.toString:void 0;var Tn=function e(r){if("string"==typeof r)return r;if(n(r))return kn(r,e)+"";if(m(r))return Sn?Sn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t};var jn=function(n){return null==n?"":Tn(n)};var Cn=function(e,r){return n(e)?e:k(e,r)?[e]:xn(jn(e))};var wn=function(n){if("string"==typeof n||m(n))return n;var e=n+"";return"0"==e&&1/n==-1/0?"-0":e};var An=function(n,e){for(var r=0,t=(e=Cn(e,n)).length;null!=n&&r<t;)n=n[wn(e[r++])];return r&&r==t?n:void 0};var On=function(n,e,r){var t=null==n?void 0:An(n,e);return void 0===t?r:t};var zn=function(n,e,r){var t=-1,o=n.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var a=Array(o);++t<o;)a[t]=n[t+e];return a};var Pn=function(n,e,r){var t=n.length;return r=void 0===r?t:r,!e&&r>=t?n:zn(n,e,r)},$n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var En=function(n){return $n.test(n)};var In=function(n){return n.split("")},Rn="[\\ud800-\\udfff]",Ln="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Bn="\\ud83c[\\udffb-\\udfff]",Nn="[^\\ud800-\\udfff]",Un="(?:\\ud83c[\\udde6-\\uddff]){2}",Dn="[\\ud800-\\udbff][\\udc00-\\udfff]",Wn="(?:"+Ln+"|"+Bn+")"+"?",Fn="[\\ufe0e\\ufe0f]?"+Wn+("(?:\\u200d(?:"+[Nn,Un,Dn].join("|")+")[\\ufe0e\\ufe0f]?"+Wn+")*"),Zn="(?:"+[Nn+Ln+"?",Ln,Un,Dn,Rn].join("|")+")",Mn=RegExp(Bn+"(?="+Bn+")|"+Zn+Fn,"g");var Hn=function(n){return n.match(Mn)||[]};var Gn=function(n){return En(n)?Hn(n):In(n)};var Vn=function(n){return function(e){e=jn(e);var r=En(e)?Gn(e):void 0,t=r?r[0]:e.charAt(0),o=r?Pn(r,1).join(""):e.slice(1);return t[n]()+o}}("toUpperCase");var Kn=function(n){return Vn(jn(n).toLowerCase())};var Jn=function(n,e,r,t){var o=-1,a=null==n?0:n.length;for(t&&a&&(r=n[++o]);++o<a;)r=e(r,n[o],o,n);return r};var Yn=function(n){return function(e){return null==n?void 0:n[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,qn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var Qn=function(n){return(n=jn(n))&&n.replace(Xn,Yn).replace(qn,"")},ne=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var ee=function(n){return n.match(ne)||[]},re=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var te=function(n){return re.test(n)},oe="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ae="["+oe+"]",ie="\\d+",fe="[\\u2700-\\u27bf]",ce="[a-z\\xdf-\\xf6\\xf8-\\xff]",ue="[^\\ud800-\\udfff"+oe+ie+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",le="(?:\\ud83c[\\udde6-\\uddff]){2}",de="[\\ud800-\\udbff][\\udc00-\\udfff]",se="[A-Z\\xc0-\\xd6\\xd8-\\xde]",pe="(?:"+ce+"|"+ue+")",ge="(?:"+se+"|"+ue+")",ve="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",he="[\\ufe0e\\ufe0f]?"+ve+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",le,de].join("|")+")[\\ufe0e\\ufe0f]?"+ve+")*"),be="(?:"+[fe,le,de].join("|")+")"+he,me=RegExp([se+"?"+ce+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[ae,se,"$"].join("|")+")",ge+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[ae,se+pe,"$"].join("|")+")",se+"?"+pe+"+(?:['’](?:d|ll|m|re|s|t|ve))?",se+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ie,be].join("|"),"g");var ye=function(n){return n.match(me)||[]};var xe=function(n,e,r){return n=jn(n),void 0===(e=r?void 0:e)?te(n)?ye(n):ee(n):n.match(e)||[]},ke=RegExp("['’]","g");var _e=function(n){return function(e){return Jn(xe(Qn(e).replace(ke,"")),n,"")}}((function(n,e,r){return e=e.toLowerCase(),n+(r?Kn(e):e)}));var Se=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991};var Te=function(n){return null!=n&&Se(n.length)&&!T(n)},je=/^(?:0|[1-9]\d*)$/;var Ce=function(n,e){var r=t(n);return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&je.test(n))&&n>-1&&n%1==0&&n<e};var we=function(n,e,r){if(!_(r))return!1;var o=t(e);return!!("number"==o?Te(r)&&Ce(e,r.length):"string"==o&&e in r)&&Y(r[e],n)};var Ae=function(n){return b(n)&&"[object RegExp]"==h(n)};var Oe=function(n){return function(e){return n(e)}},ze=r((function(n,e){var r=e&&!e.nodeType&&e,t=r&&n&&!n.nodeType&&n,a=t&&t.exports===r&&o.process,i=function(){try{var n=t&&t.require&&t.require("util").types;return n||a&&a.binding&&a.binding("util")}catch(n){}}();n.exports=i})),Pe=ze&&ze.isRegExp,$e=Pe?Oe(Pe):Ae;var Ee=function(n,e,r){return r&&"number"!=typeof r&&we(n,e,r)&&(e=r=void 0),(r=void 0===r?4294967295:r>>>0)?(n=jn(n))&&("string"==typeof e||null!=e&&!$e(e))&&!(e=Tn(e))&&En(n)?Pn(Gn(n),0,r):n.split(e,r):[]},Ie=Object.prototype;var Re=function(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||Ie)};var Le=function(n,e){return function(r){return n(e(r))}}(Object.keys,Object),Be=Object.prototype.hasOwnProperty;var Ne=function(n){if(!Re(n))return Le(n);var e=[];for(var r in Object(n))Be.call(n,r)&&"constructor"!=r&&e.push(r);return e},Ue=N(i,"DataView"),De=N(i,"Promise"),We=N(i,"Set"),Fe=N(i,"WeakMap"),Ze=O(Ue),Me=O(an),He=O(De),Ge=O(We),Ve=O(Fe),Ke=h;(Ue&&"[object DataView]"!=Ke(new Ue(new ArrayBuffer(1)))||an&&"[object Map]"!=Ke(new an)||De&&"[object Promise]"!=Ke(De.resolve())||We&&"[object Set]"!=Ke(new We)||Fe&&"[object WeakMap]"!=Ke(new Fe))&&(Ke=function(n){var e=h(n),r="[object Object]"==e?n.constructor:void 0,t=r?O(r):"";if(t)switch(t){case Ze:return"[object DataView]";case Me:return"[object Map]";case He:return"[object Promise]";case Ge:return"[object Set]";case Ve:return"[object WeakMap]"}return e});var Je=Ke;var Ye=function(e){return"string"==typeof e||!n(e)&&b(e)&&"[object String]"==h(e)};var Xe=function(n){return function(e){return null==e?void 0:e[n]}}("length"),qe="[\\ud800-\\udfff]",Qe="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",nr="\\ud83c[\\udffb-\\udfff]",er="[^\\ud800-\\udfff]",rr="(?:\\ud83c[\\udde6-\\uddff]){2}",tr="[\\ud800-\\udbff][\\udc00-\\udfff]",or="(?:"+Qe+"|"+nr+")"+"?",ar="[\\ufe0e\\ufe0f]?"+or+("(?:\\u200d(?:"+[er,rr,tr].join("|")+")[\\ufe0e\\ufe0f]?"+or+")*"),ir="(?:"+[er+Qe+"?",Qe,rr,tr,qe].join("|")+")",fr=RegExp(nr+"(?="+nr+")|"+ir+ar,"g");var cr=function(n){for(var e=fr.lastIndex=0;fr.test(n);)++e;return e};var ur=function(n){return En(n)?cr(n):Xe(n)};var lr=function(n){if(null==n)return 0;if(Te(n))return Ye(n)?ur(n):n.length;var e=Je(n);return"[object Map]"==e||"[object Set]"==e?n.size:Ne(n).length},dr={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};var sr={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var n=this.size;return this.icon.indexOf("fa-")>=0?n-4:n},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};function pr(n,e,r,t,o,a,i,f,c,u){"boolean"!=typeof i&&(c=f,f=i,i=!1);var l,d="function"==typeof r?r.options:r;if(n&&n.render&&(d.render=n.render,d.staticRenderFns=n.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),t&&(d._scopeId=t),a?(l=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,c(n)),n&&n._registeredComponents&&n._registeredComponents.add(a)},d._ssrRegister=l):e&&(l=i?function(n){e.call(this,u(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,f(n))}),l)if(d.functional){var s=d.render;d.render=function(n,e){return l.call(e),s(n,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,l):[l]}return r}var gr,vr="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function hr(n){return function(n,e){return function(n,e){var r=vr?e.media||"default":n,t=br[r]||(br[r]={ids:new Set,styles:[]});if(!t.ids.has(n)){t.ids.add(n);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",e.media&&t.element.setAttribute("media",e.media),void 0===gr&&(gr=document.head||document.getElementsByTagName("head")[0]),gr.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(o),t.element.styleSheet.cssText=t.styles.filter(Boolean).join("\n");else{var a=t.ids.size-1,i=document.createTextNode(o),f=t.element.childNodes;f[a]&&t.element.removeChild(f[a]),f.length?t.element.insertBefore(i,f[a]):t.element.appendChild(i)}}}(n,e)}}var br={};const mr=sr;var yr=function(){var n=this,e=n.$createElement,r=n._self._c||e;return""!==n.icon?r("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[r("v-icon",{style:n.useStyle,attrs:{color:n.color,size:n.useSize}},[n._v("\n        "+n._s(n.useIcon)+"\n    ")])],1):n._e()};yr._withStripped=!0;const xr={components:{WIcon:pr({render:yr,staticRenderFns:[]},(function(n){n&&n("data-v-5ea7e17f_0",{source:"\n.v-icon[data-v-5ea7e17f] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})}),mr,"data-v-5ea7e17f",!1,void 0,!1,hr,void 0,void 0)},props:{item:{type:Object,default:function(){}},textKey:{type:String,default:"name"},tooltip:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:""},iconShiftLeft:{type:Number,default:0},textColor:{type:String,default:"black"},backgroundColor:{type:String,default:"grey lighten-4"},progColor:{type:String,default:"grey"},small:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingProg:{type:Number,default:0},editable:{type:Boolean,default:!0}},data:function(){return{loadingTrans:!1,loadingProgTrans:0}},computed:{changeParam:function(){return this.loadingTrans=this.loading,this.loadingProgTrans=this.loadingProg,""},useText:function(){return On(this.item,this.textKey,"")},useIconShiftLeft:function(){return this.iconShiftLeft-9},useTextColor:function(){return function(n){if("white"===n)return"#fff";if("black"===n)return"#000";if("transparent"===n)return"rgba(0,0,0,0)";var e=Ee(n," ");if(2!==lr(e))return n;var r=e[0].trim();r=_e(r);var t=e[1];void 0===t&&(t="base"),t=t.replace("-","").trim();var o=On(dr,"default.".concat(r,".").concat(t),null);return null===o&&(o=n),o}(this.textColor)},useHeight:function(){return this.small?28:36}},methods:{clickBtn:function(n){var e=this;e.loadingTrans||(e.loadingTrans=!0,e.loadingProgTrans=0,setTimeout((function(){e.$emit("update:loading",e.loadingTrans),e.$emit("update:loadingProg",e.loadingProgTrans)}),1),e.$emit("click",n,(function(n){e.loadingProgTrans=n,setTimeout((function(){e.$emit("update:loadingProg",e.loadingProgTrans)}),1),n>=100&&setTimeout((function(){e.loadingTrans=!1,e.$emit("update:loading",e.loadingTrans)}),1)})))}}};var kr=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticStyle:{display:"inline-block"},attrs:{changeParam:n.changeParam}},[r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.tooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var t=e.on;return[r("div",{staticStyle:{position:"relative"}},[n.loadingTrans?r("div",{staticStyle:{position:"absolute",left:"0",right:"0",top:"0",bottom:"0"}},[r("v-progress-linear",{style:"border-radius:"+n.useHeight/2+"px;",attrs:{rounded:"",color:n.progColor,height:n.useHeight,value:n.loadingProgTrans}})],1):n._e(),n._v(" "),r("v-btn",n._g({style:"opacity:"+(n.loadingTrans?n.editable?.5:.3:1),attrs:{rounded:"",small:n.small,color:n.backgroundColor,disabled:!n.editable},on:{click:function(e){return n.clickBtn(n.item)}}},t),[r("w-icon",{style:"margin:0px 5px 0px "+n.useIconShiftLeft+"px;",attrs:{icon:n.icon,color:n.iconColor,size:22}}),n._v(" "),r("span",{style:"font-size:0.875rem; text-transform:none; color:"+n.useTextColor},[n._v("\n                        "+n._s(n.useText)+"\n                    ")])],1)],1)]}}])},[n._v(" "),r("span",[n._v(n._s(n.tooltip))])])],1)};kr._withStripped=!0;return pr({render:kr,staticRenderFns:[]},(function(n){n&&n("data-v-7848913b_0",{source:"\n.v-chpi-shadow[data-v-7848913b] {\r\n    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WButtonProg.vue"],names:[],mappings:";AA+OA;IACA,kGAAA;AACA",file:"WButtonProg.vue",sourcesContent:["<template>\r\n    <div style=\"display:inline-block;\" :changeParam=\"changeParam\">\r\n\r\n        <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"tooltip===''\">\r\n\r\n            <template v-slot:activator=\"{ on }\">\r\n\r\n                <div style=\"position:relative;\">\r\n\r\n                    <div\r\n                        style=\"position:absolute; left:0; right:0; top:0; bottom:0;\"\r\n                        v-if=\"loadingTrans\"\r\n                    >\r\n                        <v-progress-linear\r\n                            :style=\"`border-radius:${useHeight/2}px;`\"\r\n                            rounded\r\n                            :color=\"progColor\"\r\n                            :height=\"useHeight\"\r\n                            :value=\"loadingProgTrans\"\r\n                        ></v-progress-linear>\r\n                    </div>\r\n\r\n                    <v-btn\r\n                        v-on=\"on\"\r\n                        rounded\r\n                        :style=\"`opacity:${loadingTrans?(editable?0.5:0.3):1}`\"\r\n                        :small=\"small\"\r\n                        :color=\"backgroundColor\"\r\n                        :disabled=\"!editable\"\r\n                        @click=\"clickBtn(item)\"\r\n                    >\r\n\r\n                        <w-icon\r\n                            :style=\"`margin:0px 5px 0px ${useIconShiftLeft}px;`\"\r\n                            :icon=\"icon\"\r\n                            :color=\"iconColor\"\r\n                            :size=\"22\"\r\n                        ></w-icon>\r\n\r\n                        <span\r\n                            :style=\"`font-size:0.875rem; text-transform:none; color:${useTextColor}`\"\r\n                        >\r\n                            {{useText}}\r\n                        </span>\r\n\r\n                    </v-btn>\r\n\r\n                </div>\r\n\r\n            </template>\r\n\r\n            <span>{{tooltip}}</span>\r\n\r\n        </v-tooltip>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport get from 'lodash/get'\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\nimport WIcon from './WIcon.vue'\r\n\r\n\r\n/**\r\n * @vue-prop {Object} [item={}] 輸入數據物件，預設{}\r\n * @vue-prop {String} [textKey='name'] 輸入由數據物件取欄位為顯示文字用字串，預設'name'\r\n * @vue-prop {String} [tooltip=''] 輸入提示文字字串，預設''\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [iconColor=''] 輸入圖標背景顏色字串，預設''，即透明\r\n * @vue-prop {Number} [iconShiftLeft=0] 輸入圖標左側平移距離數字，單位px，預設0\r\n * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'\r\n * @vue-prop {String} [backgroundColor='grey lighten-4'] 輸入按鈕背景顏色字串，預設'grey lighten-4'\r\n * @vue-prop {String} [progColor='grey'] 輸入按鈕背景顏色字串，預設'grey'\r\n * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true\r\n * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon,\r\n    },\r\n    props: {\r\n        item: {\r\n            type: Object,\r\n            default: () => {},\r\n        },\r\n        textKey: {\r\n            type: String,\r\n            default: 'name',\r\n        },\r\n        tooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        iconColor: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        iconShiftLeft: {\r\n            type: Number,\r\n            default: 0,\r\n        },\r\n        textColor: {\r\n            type: String,\r\n            default: 'black',\r\n        },\r\n        backgroundColor: {\r\n            type: String,\r\n            default: 'grey lighten-4', //'amber lighten-2',\r\n        },\r\n        progColor: {\r\n            type: String,\r\n            default: 'grey', //'yellow darken-4',\r\n        },\r\n        small: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        loading: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n        loadingProg: {\r\n            type: Number,\r\n            default: 0,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            loadingTrans: false, //開始下載不代表就會觸發prog事件或提供有效值(>0), 故狀態與prog得分開處理\r\n            loadingProgTrans: 0,\r\n        }\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //loadingTrans, loadingProgTrans\r\n            vo.loadingTrans = vo.loading\r\n            vo.loadingProgTrans = vo.loadingProg\r\n\r\n            return ''\r\n        },\r\n\r\n        useText: function() {\r\n            let vo = this\r\n            return get(vo.item, vo.textKey, '')\r\n        },\r\n\r\n        useIconShiftLeft: function() {\r\n            let vo = this\r\n            return vo.iconShiftLeft - 9 //初始值-9, 使圓圈類icon能貼合chip左側\r\n        },\r\n\r\n        useTextColor: function() {\r\n            let vo = this\r\n            return color2hex(vo.textColor)\r\n        },\r\n\r\n        useHeight: function() {\r\n            let vo = this\r\n            return vo.small ? 28 : 36\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        clickBtn: function(item) {\r\n            //console.log('methods clickBtn', item)\r\n\r\n            let vo = this\r\n\r\n            //check\r\n            if (vo.loadingTrans) {\r\n                return\r\n            }\r\n\r\n            //default\r\n            vo.loadingTrans = true\r\n            vo.loadingProgTrans = 0\r\n\r\n            //setTimeout\r\n            setTimeout(() => {\r\n\r\n                //emit\r\n                vo.$emit('update:loading', vo.loadingTrans)\r\n                vo.$emit('update:loadingProg', vo.loadingProgTrans)\r\n\r\n            }, 1)\r\n\r\n            //emit\r\n            vo.$emit('click', item, (prog) => {\r\n\r\n                //update loadingProgTrans\r\n                vo.loadingProgTrans = prog\r\n\r\n                //setTimeout\r\n                setTimeout(() => {\r\n\r\n                    //emit\r\n                    vo.$emit('update:loadingProg', vo.loadingProgTrans)\r\n\r\n                }, 1)\r\n\r\n                if (prog >= 100) {\r\n\r\n                    //setTimeout\r\n                    setTimeout(() => {\r\n\r\n                        //update loadingTrans, 因可能外部為多組件同步loading, 於timer之前修改有可能又會被外部覆寫, 故得於timer內修改\r\n                        vo.loadingTrans = false\r\n\r\n                        //emit\r\n                        vo.$emit('update:loading', vo.loadingTrans)\r\n\r\n                    }, 1)\r\n\r\n                }\r\n            })\r\n\r\n        },\r\n\r\n    }\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-chpi-shadow {\r\n    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]},media:void 0})}),xr,"data-v-7848913b",!1,void 0,!1,hr,void 0,void 0)}));
//# sourceMappingURL=w-button-prog.umd.js.map
