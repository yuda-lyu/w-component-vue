/*!
 * w-shell-ellipse v1.4.27
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self)["w-shell-ellipse"]=e()}(this,(function(){"use strict";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(n,e,r){return n(r={path:e,exports:{},require:function(n,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var r=e((function(n){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(r)}n.exports=e})),t="object"==r(n)&&n&&n.Object===Object&&n,o="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=t||o||Function("return this")(),i=a.Symbol;var c=function(n,e){for(var r=-1,t=null==n?0:n.length,o=Array(t);++r<t;)o[r]=e(n[r],r,n);return o},f=Array.isArray,l=Object.prototype,u=l.hasOwnProperty,d=l.toString,s=i?i.toStringTag:void 0;var p=function(n){var e=u.call(n,s),r=n[s];try{n[s]=void 0;var t=!0}catch(n){}var o=d.call(n);return t&&(e?n[s]=r:delete n[s]),o},g=Object.prototype.toString;var h=function(n){return g.call(n)},v=i?i.toStringTag:void 0;var b=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":v&&v in Object(n)?p(n):h(n)};var y=function(n){return null!=n&&"object"==r(n)};var m=function(n){return"symbol"==r(n)||y(n)&&"[object Symbol]"==b(n)},x=i?i.prototype:void 0,k=x?x.toString:void 0;var S=function n(e){if("string"==typeof e)return e;if(f(e))return c(e,n)+"";if(m(e))return k?k.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r};var _=function(n){return null==n?"":S(n)};var I=function(n,e,r){var t=-1,o=n.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var a=Array(o);++t<o;)a[t]=n[t+e];return a};var C=function(n,e,r){var t=n.length;return r=void 0===r?t:r,!e&&r>=t?n:I(n,e,r)},w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var A=function(n){return w.test(n)};var j=function(n){return n.split("")},T="[\\ud800-\\udfff]",O="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",z="\\ud83c[\\udffb-\\udfff]",E="[^\\ud800-\\udfff]",F="(?:\\ud83c[\\udde6-\\uddff]){2}",R="[\\ud800-\\udbff][\\udc00-\\udfff]",B="(?:"+O+"|"+z+")"+"?",P="[\\ufe0e\\ufe0f]?",$=P+B+("(?:\\u200d(?:"+[E,F,R].join("|")+")"+P+B+")*"),N="(?:"+[E+O+"?",O,F,R,T].join("|")+")",U=RegExp(z+"(?="+z+")|"+N+$,"g");var L=function(n){return n.match(U)||[]};var D=function(n){return A(n)?L(n):j(n)};var W=function(n){return function(e){e=_(e);var r=A(e)?D(e):void 0,t=r?r[0]:e.charAt(0),o=r?C(r,1).join(""):e.slice(1);return t[n]()+o}}("toUpperCase");var G=function(n){return W(_(n).toLowerCase())};var Z=function(n,e,r,t){var o=-1,a=null==n?0:n.length;for(t&&a&&(r=n[++o]);++o<a;)r=e(r,n[o],o,n);return r};var M=function(n){return function(e){return null==n?void 0:n[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Y=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,J=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var V=function(n){return(n=_(n))&&n.replace(Y,M).replace(J,"")},q=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var H=function(n){return n.match(q)||[]},X=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var K=function(n){return X.test(n)},Q="\\u2700-\\u27bf",nn="a-z\\xdf-\\xf6\\xf8-\\xff",en="A-Z\\xc0-\\xd6\\xd8-\\xde",rn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tn="["+rn+"]",on="\\d+",an="[\\u2700-\\u27bf]",cn="["+nn+"]",fn="[^\\ud800-\\udfff"+rn+on+Q+nn+en+"]",ln="(?:\\ud83c[\\udde6-\\uddff]){2}",un="[\\ud800-\\udbff][\\udc00-\\udfff]",dn="["+en+"]",sn="(?:"+cn+"|"+fn+")",pn="(?:"+dn+"|"+fn+")",gn="(?:['’](?:d|ll|m|re|s|t|ve))?",hn="(?:['’](?:D|LL|M|RE|S|T|VE))?",vn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",bn="[\\ufe0e\\ufe0f]?",yn=bn+vn+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ln,un].join("|")+")"+bn+vn+")*"),mn="(?:"+[an,ln,un].join("|")+")"+yn,xn=RegExp([dn+"?"+cn+"+"+gn+"(?="+[tn,dn,"$"].join("|")+")",pn+"+"+hn+"(?="+[tn,dn+sn,"$"].join("|")+")",dn+"?"+sn+"+"+gn,dn+"+"+hn,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",on,mn].join("|"),"g");var kn=function(n){return n.match(xn)||[]};var Sn=function(n,e,r){return n=_(n),void 0===(e=r?void 0:e)?K(n)?kn(n):H(n):n.match(e)||[]},_n=RegExp("['’]","g");var In=function(n){return function(e){return Z(Sn(V(e).replace(_n,"")),n,"")}}((function(n,e,r){return e=e.toLowerCase(),n+(r?G(e):e)}));var Cn=function(n,e){return n===e||n!=n&&e!=e};var wn=function(n){var e=r(n);return null!=n&&("object"==e||"function"==e)};var An=function(n){if(!wn(n))return!1;var e=b(n);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var jn=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991};var Tn=function(n){return null!=n&&jn(n.length)&&!An(n)},On=/^(?:0|[1-9]\d*)$/;var zn=function(n,e){var t=r(n);return!!(e=null==e?9007199254740991:e)&&("number"==t||"symbol"!=t&&On.test(n))&&n>-1&&n%1==0&&n<e};var En=function(n,e,t){if(!wn(t))return!1;var o=r(e);return!!("number"==o?Tn(t)&&zn(e,t.length):"string"==o&&e in t)&&Cn(t[e],n)};var Fn=function(n){return y(n)&&"[object RegExp]"==b(n)};var Rn=function(n){return function(e){return n(e)}},Bn=e((function(n,e){var r=e&&!e.nodeType&&e,o=r&&n&&!n.nodeType&&n,a=o&&o.exports===r&&t.process,i=function(){try{var n=o&&o.require&&o.require("util").types;return n||a&&a.binding&&a.binding("util")}catch(n){}}();n.exports=i})),Pn=Bn&&Bn.isRegExp,$n=Pn?Rn(Pn):Fn;var Nn=function(n,e,r){return r&&"number"!=typeof r&&En(n,e,r)&&(e=r=void 0),(r=void 0===r?4294967295:r>>>0)?(n=_(n))&&("string"==typeof e||null!=e&&!$n(e))&&!(e=S(e))&&A(n)?C(D(n),0,r):n.split(e,r):[]},Un=Object.prototype;var Ln=function(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||Un)};var Dn=function(n,e){return function(r){return n(e(r))}}(Object.keys,Object),Wn=Object.prototype.hasOwnProperty;var Gn,Zn=function(n){if(!Ln(n))return Dn(n);var e=[];for(var r in Object(n))Wn.call(n,r)&&"constructor"!=r&&e.push(r);return e},Mn=a["__core-js_shared__"],Yn=(Gn=/[^.]+$/.exec(Mn&&Mn.keys&&Mn.keys.IE_PROTO||""))?"Symbol(src)_1."+Gn:"";var Jn=function(n){return!!Yn&&Yn in n},Vn=Function.prototype.toString;var qn=function(n){if(null!=n){try{return Vn.call(n)}catch(n){}try{return n+""}catch(n){}}return""},Hn=/^\[object .+?Constructor\]$/,Xn=Function.prototype,Kn=Object.prototype,Qn=Xn.toString,ne=Kn.hasOwnProperty,ee=RegExp("^"+Qn.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(n){return!(!wn(n)||Jn(n))&&(An(n)?ee:Hn).test(qn(n))};var te=function(n,e){return null==n?void 0:n[e]};var oe=function(n,e){var r=te(n,e);return re(r)?r:void 0},ae=oe(a,"DataView"),ie=oe(a,"Map"),ce=oe(a,"Promise"),fe=oe(a,"Set"),le=oe(a,"WeakMap"),ue="[object Map]",de="[object Promise]",se="[object Set]",pe="[object WeakMap]",ge="[object DataView]",he=qn(ae),ve=qn(ie),be=qn(ce),ye=qn(fe),me=qn(le),xe=b;(ae&&xe(new ae(new ArrayBuffer(1)))!=ge||ie&&xe(new ie)!=ue||ce&&xe(ce.resolve())!=de||fe&&xe(new fe)!=se||le&&xe(new le)!=pe)&&(xe=function(n){var e=b(n),r="[object Object]"==e?n.constructor:void 0,t=r?qn(r):"";if(t)switch(t){case he:return ge;case ve:return ue;case be:return de;case ye:return se;case me:return pe}return e});var ke=xe;var Se=function(n){return"string"==typeof n||!f(n)&&y(n)&&"[object String]"==b(n)};var _e=function(n){return function(e){return null==e?void 0:e[n]}}("length"),Ie="[\\ud800-\\udfff]",Ce="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",we="\\ud83c[\\udffb-\\udfff]",Ae="[^\\ud800-\\udfff]",je="(?:\\ud83c[\\udde6-\\uddff]){2}",Te="[\\ud800-\\udbff][\\udc00-\\udfff]",Oe="(?:"+Ce+"|"+we+")"+"?",ze="[\\ufe0e\\ufe0f]?",Ee=ze+Oe+("(?:\\u200d(?:"+[Ae,je,Te].join("|")+")"+ze+Oe+")*"),Fe="(?:"+[Ae+Ce+"?",Ce,je,Te,Ie].join("|")+")",Re=RegExp(we+"(?="+we+")|"+Fe+Ee,"g");var Be=function(n){for(var e=Re.lastIndex=0;Re.test(n);)++e;return e};var Pe=function(n){return A(n)?Be(n):_e(n)};var $e=function(n){if(null==n)return 0;if(Tn(n))return Se(n)?Pe(n):n.length;var e=ke(n);return"[object Map]"==e||"[object Set]"==e?n.size:Zn(n).length},Ne=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ue=/^\w*$/;var Le=function(n,e){if(f(n))return!1;var t=r(n);return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=n&&!m(n))||(Ue.test(n)||!Ne.test(n)||null!=e&&n in Object(e))},De=oe(Object,"create");var We=function(){this.__data__=De?De(null):{},this.size=0};var Ge=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},Ze=Object.prototype.hasOwnProperty;var Me=function(n){var e=this.__data__;if(De){var r=e[n];return"__lodash_hash_undefined__"===r?void 0:r}return Ze.call(e,n)?e[n]:void 0},Ye=Object.prototype.hasOwnProperty;var Je=function(n){var e=this.__data__;return De?void 0!==e[n]:Ye.call(e,n)};var Ve=function(n,e){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=De&&void 0===e?"__lodash_hash_undefined__":e,this};function qe(n){var e=-1,r=null==n?0:n.length;for(this.clear();++e<r;){var t=n[e];this.set(t[0],t[1])}}qe.prototype.clear=We,qe.prototype.delete=Ge,qe.prototype.get=Me,qe.prototype.has=Je,qe.prototype.set=Ve;var He=qe;var Xe=function(){this.__data__=[],this.size=0};var Ke=function(n,e){for(var r=n.length;r--;)if(Cn(n[r][0],e))return r;return-1},Qe=Array.prototype.splice;var nr=function(n){var e=this.__data__,r=Ke(e,n);return!(r<0)&&(r==e.length-1?e.pop():Qe.call(e,r,1),--this.size,!0)};var er=function(n){var e=this.__data__,r=Ke(e,n);return r<0?void 0:e[r][1]};var rr=function(n){return Ke(this.__data__,n)>-1};var tr=function(n,e){var r=this.__data__,t=Ke(r,n);return t<0?(++this.size,r.push([n,e])):r[t][1]=e,this};function or(n){var e=-1,r=null==n?0:n.length;for(this.clear();++e<r;){var t=n[e];this.set(t[0],t[1])}}or.prototype.clear=Xe,or.prototype.delete=nr,or.prototype.get=er,or.prototype.has=rr,or.prototype.set=tr;var ar=or;var ir=function(){this.size=0,this.__data__={hash:new He,map:new(ie||ar),string:new He}};var cr=function(n){var e=r(n);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n};var fr=function(n,e){var r=n.__data__;return cr(e)?r["string"==typeof e?"string":"hash"]:r.map};var lr=function(n){var e=fr(this,n).delete(n);return this.size-=e?1:0,e};var ur=function(n){return fr(this,n).get(n)};var dr=function(n){return fr(this,n).has(n)};var sr=function(n,e){var r=fr(this,n),t=r.size;return r.set(n,e),this.size+=r.size==t?0:1,this};function pr(n){var e=-1,r=null==n?0:n.length;for(this.clear();++e<r;){var t=n[e];this.set(t[0],t[1])}}pr.prototype.clear=ir,pr.prototype.delete=lr,pr.prototype.get=ur,pr.prototype.has=dr,pr.prototype.set=sr;var gr=pr;function hr(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var t=arguments,o=e?e.apply(this,t):t[0],a=r.cache;if(a.has(o))return a.get(o);var i=n.apply(this,t);return r.cache=a.set(o,i)||a,i};return r.cache=new(hr.Cache||gr),r}hr.Cache=gr;var vr=hr;var br=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yr=/\\(\\)?/g,mr=function(n){var e=vr(n,(function(n){return 500===r.size&&r.clear(),n})),r=e.cache;return e}((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(br,(function(n,r,t,o){e.push(t?o.replace(yr,"$1"):r||n)})),e}));var xr=function(n,e){return f(n)?n:Le(n,e)?[n]:mr(_(n))};var kr=function(n){if("string"==typeof n||m(n))return n;var e=n+"";return"0"==e&&1/n==-Infinity?"-0":e};var Sr=function(n,e){for(var r=0,t=(e=xr(e,n)).length;null!=n&&r<t;)n=n[kr(e[r++])];return r&&r==t?n:void 0};var _r=function(n,e,r){var t=null==n?void 0:Sr(n,e);return void 0===t?r:t},Ir={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function Cr(n){if("white"===n)return"#fff";if("black"===n)return"#000";if("transparent"===n)return"rgba(0,0,0,0)";var e=Nn(n," ");if(2!==$e(e))return n;var r=e[0].trim();r=In(r);var t=e[1];void 0===t&&(t="base"),t=t.replace("-","").trim();var o=_r(Ir,"default.".concat(r,".").concat(t),null);return null===o&&(o=n),o}var wr={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){var n=this;return n.icon.indexOf("fa-")>=0?n.icon+" fa-fw":n.icon},useSize:function(){var n=this.size;return this.icon.indexOf("fa-")>=0?n-4:n},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};function Ar(n,e,r,t,o,a,i,c,f,l){"boolean"!=typeof i&&(f=c,c=i,i=!1);var u,d="function"==typeof r?r.options:r;if(n&&n.render&&(d.render=n.render,d.staticRenderFns=n.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),t&&(d._scopeId=t),a?(u=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,f(n)),n&&n._registeredComponents&&n._registeredComponents.add(a)},d._ssrRegister=u):e&&(u=i?function(n){e.call(this,l(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,c(n))}),u)if(d.functional){var s=d.render;d.render=function(n,e){return u.call(e),s(n,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,u):[u]}return r}var jr,Tr="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Or(n){return function(n,e){return function(n,e){var r=Tr?e.media||"default":n,t=zr[r]||(zr[r]={ids:new Set,styles:[]});if(!t.ids.has(n)){t.ids.add(n);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",e.media&&t.element.setAttribute("media",e.media),void 0===jr&&(jr=document.head||document.getElementsByTagName("head")[0]),jr.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(o),t.element.styleSheet.cssText=t.styles.filter(Boolean).join("\n");else{var a=t.ids.size-1,i=document.createTextNode(o),c=t.element.childNodes;c[a]&&t.element.removeChild(c[a]),c.length?t.element.insertBefore(i,c[a]):t.element.appendChild(i)}}}(n,e)}}var zr={};const Er=wr;var Fr=function(){var n=this,e=n.$createElement,r=n._self._c||e;return""!==n.icon?r("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"},on:{click:function(e){n.$emit("click",e)}}},[r("v-icon",{style:n.useStyle,attrs:{color:n.color,size:n.useSize}},[n._v("\n        "+n._s(n.useIcon)+"\n    ")])],1):n._e()};Fr._withStripped=!0;const Rr={components:{WIcon:Ar({render:Fr,staticRenderFns:[]},(function(n){n&&n("data-v-52f46ecf_0",{source:"\n.v-icon[data-v-52f46ecf] {\r\n    transition: all 0.3s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AAiGA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div \r\n        style=\"display:flex; align-items:center; user-select:none;\" \r\n        @click=\"(v)=>{$emit('click',v)}\"\r\n        v-if=\"icon!==''\"\r\n    >\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.3s;\r\n}\r\n</style>\r\n"]},media:void 0})}),Er,"data-v-52f46ecf",false,undefined,!1,Or,void 0,void 0)},props:{title:{type:String,default:""},titleColor:{type:String,default:"deep-orange darken-1"},backgroundColor:{type:String,default:"white"},backgroundColorFocus:{type:String,default:"white"},borderRadius:{type:Number,default:30},borderColor:{type:String,default:"white"},borderColorFocus:{type:String,default:"white"},borderShadow:{type:Boolean,default:!0},leftIcon:{type:String,default:""},leftIconColor:{type:String,default:"deep-orange lighten-2"},leftIconColorFocus:{type:String,default:"deep-orange lighten-1"},leftIconTooltip:{type:String,default:""},rightIcon:{type:String,default:""},rightIconColor:{type:String,default:"deep-orange lighten-2"},rightIconColorFocus:{type:String,default:"deep-orange lighten-1"},rightIconTooltip:{type:String,default:""},small:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},focused:{type:Boolean,default:!1}},data:function(){return{focusedTrans:!1}},mounted:function(){},computed:{changeParam:function(){return this.focusedTrans=this.focused,""},useBackgroundColor:function(){var n=this,e={};return n.focusedTrans?e["background-color"]=Cr(n.backgroundColorFocus):e["background-color"]=Cr(n.backgroundColor),e},useBorder:function(){var n=this,e={};return n.focusedTrans?e.border="1px solid "+Cr(n.borderColorFocus):e.border="1px solid "+Cr(n.borderColor),e},useTitleColor:function(){var n={};return n.color=Cr(this.titleColor),n},usePadding:function(){var n={};return this.small?n.padding="0px":n.padding="3px 6px",n},usePaddingSlot:function(){var n={"padding-top":"0px","padding-bottom":"0px","padding-left":"15px","padding-right":"15px"};return""!==this.leftIcon&&(n["padding-left"]="10px"),""!==this.rightIcon&&(n["padding-right"]="10px"),n}},methods:{clickIcon:function(n){var e=this;!1!==e.editable&&e.$nextTick((function(){e.$emit("click-"+n)}))}}};var Br=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{attrs:{changeParam:n.changeParam}},[r("div",{staticStyle:{position:"relative"}},[r("div",{style:[{position:"absolute",top:"0px",transform:"translateY(-120%)","font-size":"0.9rem","white-space":"nowrap",opacity:.7},n.useTitleColor]},[n._v("\n            "+n._s(n.title)+"\n        ")])]),n._v(" "),r("div",{class:{group:!0,shadow:n.borderShadow},style:[n.useBackgroundColor,n.useBorder,n.usePadding,{"border-radius":n.borderRadius+"px"},{opacity:n.editable?1:.6}]},[n.leftIcon?r("div",{staticStyle:{"margin-left":"5px",cursor:"pointer"},on:{click:function(e){return n.clickIcon("left")}}},[r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.leftIconTooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var t=e.on;return[r("div",n._g({attrs:{ShellEllipse:"leftIcon"}},Object.assign({},t)),[r("w-icon",{attrs:{icon:n.leftIcon,color:n.focusedTrans?n.leftIconColorFocus:n.leftIconColor}})],1)]}}],null,!1,4098432623)},[n._v(" "),r("span",[n._v(n._s(n.leftIconTooltip))])])],1):n._e(),n._v(" "),r("div",{style:[{width:"100%"},n.usePaddingSlot]},[n._t("default")],2),n._v(" "),n.rightIcon?r("div",{staticStyle:{"margin-right":"5px",cursor:"pointer"},on:{click:function(e){return n.clickIcon("right")}}},[r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.rightIconTooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var t=e.on;return[r("div",n._g({attrs:{ShellEllipse:"rightIcon"}},Object.assign({},t)),[r("w-icon",{attrs:{icon:n.rightIcon,color:n.focusedTrans?n.rightIconColorFocus:n.rightIconColor}})],1)]}}],null,!1,264035119)},[n._v(" "),r("span",[n._v(n._s(n.rightIconTooltip))])])],1):n._e()])])};Br._withStripped=!0;return Ar({render:Br,staticRenderFns:[]},(function(n){n&&n("data-v-81e004aa_0",{source:"\n.group[data-v-81e004aa] {\r\n    transition: all 0.3s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\n}\n.shadow[data-v-81e004aa] {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n.shadow[data-v-81e004aa]:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WShellEllipse.vue"],names:[],mappings:";AAsSA;IACA,oBAAA;IACA,aAAA;IACA,2BAAA;IACA,mBAAA;AACA;AACA;IACA,mGAAA;AACA;AACA;IACA,mGAAA;AACA",file:"WShellEllipse.vue",sourcesContent:["<template>\r\n    <div :changeParam=\"changeParam\">\r\n\r\n        <div style=\"position:relative;\">\r\n\r\n            <div :style=\"[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]\">\r\n                {{title}}\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div\r\n            :class=\"{'group':true,'shadow':borderShadow}\"\r\n            :style=\"[useBackgroundColor,useBorder,usePadding,{'border-radius':borderRadius+'px'},{'opacity':editable?1:0.6}]\"\r\n        >\r\n\r\n            <div style=\"margin-left:5px; cursor:pointer;\" @click=\"clickIcon('left')\" v-if=\"leftIcon\">\r\n\r\n                <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"leftIconTooltip===''\">\r\n\r\n                    <template v-slot:activator=\"{ on: ttShellEllipseLeft }\">\r\n                        <div ShellEllipse=\"leftIcon\" v-on=\"{...ttShellEllipseLeft}\">\r\n                            <w-icon\r\n                                :icon=\"leftIcon\"\r\n                                :color=\"focusedTrans?leftIconColorFocus:leftIconColor\"\r\n                            ></w-icon>\r\n                        </div>\r\n                    </template>\r\n\r\n                    <span>{{leftIconTooltip}}</span>\r\n\r\n                </v-tooltip>\r\n\r\n            </div>\r\n\r\n            <div :style=\"[{'width':'100%'},usePaddingSlot]\">\r\n\r\n                <slot></slot>\r\n\r\n            </div>\r\n\r\n            <div style=\"margin-right:5px; cursor:pointer;\" @click=\"clickIcon('right')\" v-if=\"rightIcon\">\r\n\r\n                <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"rightIconTooltip===''\">\r\n\r\n                    <template v-slot:activator=\"{ on: ttShellEllipseRight }\">\r\n                        <div ShellEllipse=\"rightIcon\" v-on=\"{...ttShellEllipseRight}\">\r\n                            <w-icon\r\n                                :icon=\"rightIcon\"\r\n                                :color=\"focusedTrans?rightIconColorFocus:rightIconColor\"\r\n                            ></w-icon>\r\n                        </div>\r\n                    </template>\r\n\r\n                    <span>{{rightIconTooltip}}</span>\r\n\r\n                </v-tooltip>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\nimport WIcon from './WIcon.vue'\r\n\r\n\r\n/**\r\n * @vue-prop {String} [title=''] 輸入標題字串，預設''\r\n * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'\r\n * @vue-prop {Number} [borderRadius=30] 輸入圓角寬度，單位為px，預設30\r\n * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'\r\n * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'\r\n * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'\r\n * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'\r\n * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true\r\n * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''\r\n * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''\r\n * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon,\r\n    },\r\n    props: {\r\n        title: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        titleColor: {\r\n            type: String,\r\n            default: 'deep-orange darken-1',\r\n        },\r\n        backgroundColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        backgroundColorFocus: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderRadius: {\r\n            type: Number,\r\n            default: 30,\r\n        },\r\n        borderColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderColorFocus: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderShadow: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        leftIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        leftIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        leftIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        leftIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        rightIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        rightIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        small: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        focused: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focusedTrans: false,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //focusedTrans\r\n            vo.focusedTrans = vo.focused\r\n\r\n            return ''\r\n        },\r\n\r\n        useBackgroundColor: function() {\r\n            //console.log('computed useBackgroundColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.focusedTrans) {\r\n                s['background-color'] = color2hex(vo.backgroundColorFocus)\r\n            }\r\n            else {\r\n                s['background-color'] = color2hex(vo.backgroundColor)\r\n            }\r\n            return s\r\n        },\r\n\r\n        useBorder: function() {\r\n            //console.log('computed useBorder')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.focusedTrans) {\r\n                s['border'] = '1px solid ' + color2hex(vo.borderColorFocus)\r\n            }\r\n            else {\r\n                s['border'] = '1px solid ' + color2hex(vo.borderColor)\r\n            }\r\n            return s\r\n        },\r\n\r\n        useTitleColor: function() {\r\n            //console.log('computed useTitleColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['color'] = color2hex(vo.titleColor)\r\n            return s\r\n        },\r\n\r\n        usePadding: function() {\r\n            //console.log('computed usePadding')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.small) {\r\n                s['padding'] = '0px'\r\n            }\r\n            else {\r\n                s['padding'] = '3px 6px'\r\n            }\r\n            return s\r\n        },\r\n\r\n        usePaddingSlot: function() {\r\n            //console.log('computed usePaddingSlot')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding-top'] = '0px'\r\n            s['padding-bottom'] = '0px'\r\n            s['padding-left'] = '15px'\r\n            s['padding-right'] = '15px'\r\n            if (vo.leftIcon !== '') {\r\n                s['padding-left'] = '10px'\r\n            }\r\n            if (vo.rightIcon !== '') {\r\n                s['padding-right'] = '10px'\r\n            }\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        clickIcon: function (mode) {\r\n            //console.log('methods clickIcon', mode)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            //$nextTick\r\n            vo.$nextTick(() => {\r\n\r\n                //emit\r\n                vo.$emit('click-' + mode)\r\n\r\n            })\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.group {\r\n    transition: all 0.3s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n.shadow {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.shadow:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]},media:void 0})}),Rr,"data-v-81e004aa",false,undefined,!1,Or,void 0,void 0)}));
//# sourceMappingURL=w-shell-ellipse.umd.js.map
