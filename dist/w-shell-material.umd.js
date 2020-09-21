/*!
 * w-shell-material v1.4.36
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self)["w-shell-material"]=e()}(this,(function(){"use strict";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(n,e,t){return n(t={path:e,exports:{},require:function(n,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&t.path)}},t.exports),t.exports}var t=e((function(n){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(t)}n.exports=e})),r="object"==t(n)&&n&&n.Object===Object&&n,o="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,a=r||o||Function("return this")(),i=a.Symbol;var c=function(n,e){for(var t=-1,r=null==n?0:n.length,o=Array(r);++t<r;)o[t]=e(n[t],t,n);return o},f=Array.isArray,l=Object.prototype,u=l.hasOwnProperty,d=l.toString,s=i?i.toStringTag:void 0;var p=function(n){var e=u.call(n,s),t=n[s];try{n[s]=void 0;var r=!0}catch(n){}var o=d.call(n);return r&&(e?n[s]=t:delete n[s]),o},g=Object.prototype.toString;var h=function(n){return g.call(n)},v=i?i.toStringTag:void 0;var b=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":v&&v in Object(n)?p(n):h(n)};var y=function(n){return null!=n&&"object"==t(n)};var m=function(n){return"symbol"==t(n)||y(n)&&"[object Symbol]"==b(n)},_=i?i.prototype:void 0,k=_?_.toString:void 0;var x=function n(e){if("string"==typeof e)return e;if(f(e))return c(e,n)+"";if(m(e))return k?k.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var S=function(n){return null==n?"":x(n)};var I=function(n,e,t){var r=-1,o=n.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(o);++r<o;)a[r]=n[r+e];return a};var j=function(n,e,t){var r=n.length;return t=void 0===t?r:t,!e&&t>=r?n:I(n,e,t)},C=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var A=function(n){return C.test(n)};var w=function(n){return n.split("")},T="[\\ud800-\\udfff]",O="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",z="\\ud83c[\\udffb-\\udfff]",E="[^\\ud800-\\udfff]",P="(?:\\ud83c[\\udde6-\\uddff]){2}",R="[\\ud800-\\udbff][\\udc00-\\udfff]",$="(?:"+O+"|"+z+")"+"?",F="[\\ufe0e\\ufe0f]?",B=F+$+("(?:\\u200d(?:"+[E,P,R].join("|")+")"+F+$+")*"),M="(?:"+[E+O+"?",O,P,R,T].join("|")+")",U=RegExp(z+"(?="+z+")|"+M+B,"g");var N=function(n){return n.match(U)||[]};var L=function(n){return A(n)?N(n):w(n)};var D=function(n){return function(e){e=S(e);var t=A(e)?L(e):void 0,r=t?t[0]:e.charAt(0),o=t?j(t,1).join(""):e.slice(1);return r[n]()+o}}("toUpperCase");var W=function(n){return D(S(n).toLowerCase())};var Z=function(n,e,t,r){var o=-1,a=null==n?0:n.length;for(r&&a&&(t=n[++o]);++o<a;)t=e(t,n[o],o,n);return t};var G=function(n){return function(e){return null==n?void 0:n[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Y=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,J=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var V=function(n){return(n=S(n))&&n.replace(Y,G).replace(J,"")},q=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var H=function(n){return n.match(q)||[]},X=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var K=function(n){return X.test(n)},Q="\\u2700-\\u27bf",nn="a-z\\xdf-\\xf6\\xf8-\\xff",en="A-Z\\xc0-\\xd6\\xd8-\\xde",tn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rn="["+tn+"]",on="\\d+",an="[\\u2700-\\u27bf]",cn="["+nn+"]",fn="[^\\ud800-\\udfff"+tn+on+Q+nn+en+"]",ln="(?:\\ud83c[\\udde6-\\uddff]){2}",un="[\\ud800-\\udbff][\\udc00-\\udfff]",dn="["+en+"]",sn="(?:"+cn+"|"+fn+")",pn="(?:"+dn+"|"+fn+")",gn="(?:['’](?:d|ll|m|re|s|t|ve))?",hn="(?:['’](?:D|LL|M|RE|S|T|VE))?",vn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",bn="[\\ufe0e\\ufe0f]?",yn=bn+vn+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ln,un].join("|")+")"+bn+vn+")*"),mn="(?:"+[an,ln,un].join("|")+")"+yn,_n=RegExp([dn+"?"+cn+"+"+gn+"(?="+[rn,dn,"$"].join("|")+")",pn+"+"+hn+"(?="+[rn,dn+sn,"$"].join("|")+")",dn+"?"+sn+"+"+gn,dn+"+"+hn,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",on,mn].join("|"),"g");var kn=function(n){return n.match(_n)||[]};var xn=function(n,e,t){return n=S(n),void 0===(e=t?void 0:e)?K(n)?kn(n):H(n):n.match(e)||[]},Sn=RegExp("['’]","g");var In=function(n){return function(e){return Z(xn(V(e).replace(Sn,"")),n,"")}}((function(n,e,t){return e=e.toLowerCase(),n+(t?W(e):e)}));var jn=function(n,e){return n===e||n!=n&&e!=e};var Cn=function(n){var e=t(n);return null!=n&&("object"==e||"function"==e)};var An=function(n){if(!Cn(n))return!1;var e=b(n);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var wn=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991};var Tn=function(n){return null!=n&&wn(n.length)&&!An(n)},On=/^(?:0|[1-9]\d*)$/;var zn=function(n,e){var r=t(n);return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&On.test(n))&&n>-1&&n%1==0&&n<e};var En=function(n,e,r){if(!Cn(r))return!1;var o=t(e);return!!("number"==o?Tn(r)&&zn(e,r.length):"string"==o&&e in r)&&jn(r[e],n)};var Pn=function(n){return y(n)&&"[object RegExp]"==b(n)};var Rn=function(n){return function(e){return n(e)}},$n=e((function(n,e){var t=e&&!e.nodeType&&e,o=t&&n&&!n.nodeType&&n,a=o&&o.exports===t&&r.process,i=function(){try{var n=o&&o.require&&o.require("util").types;return n||a&&a.binding&&a.binding("util")}catch(n){}}();n.exports=i})),Fn=$n&&$n.isRegExp,Bn=Fn?Rn(Fn):Pn;var Mn=function(n,e,t){return t&&"number"!=typeof t&&En(n,e,t)&&(e=t=void 0),(t=void 0===t?4294967295:t>>>0)?(n=S(n))&&("string"==typeof e||null!=e&&!Bn(e))&&!(e=x(e))&&A(n)?j(L(n),0,t):n.split(e,t):[]},Un=Object.prototype;var Nn=function(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||Un)};var Ln=function(n,e){return function(t){return n(e(t))}}(Object.keys,Object),Dn=Object.prototype.hasOwnProperty;var Wn,Zn=function(n){if(!Nn(n))return Ln(n);var e=[];for(var t in Object(n))Dn.call(n,t)&&"constructor"!=t&&e.push(t);return e},Gn=a["__core-js_shared__"],Yn=(Wn=/[^.]+$/.exec(Gn&&Gn.keys&&Gn.keys.IE_PROTO||""))?"Symbol(src)_1."+Wn:"";var Jn=function(n){return!!Yn&&Yn in n},Vn=Function.prototype.toString;var qn=function(n){if(null!=n){try{return Vn.call(n)}catch(n){}try{return n+""}catch(n){}}return""},Hn=/^\[object .+?Constructor\]$/,Xn=Function.prototype,Kn=Object.prototype,Qn=Xn.toString,ne=Kn.hasOwnProperty,ee=RegExp("^"+Qn.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(n){return!(!Cn(n)||Jn(n))&&(An(n)?ee:Hn).test(qn(n))};var re=function(n,e){return null==n?void 0:n[e]};var oe=function(n,e){var t=re(n,e);return te(t)?t:void 0},ae=oe(a,"DataView"),ie=oe(a,"Map"),ce=oe(a,"Promise"),fe=oe(a,"Set"),le=oe(a,"WeakMap"),ue="[object Map]",de="[object Promise]",se="[object Set]",pe="[object WeakMap]",ge="[object DataView]",he=qn(ae),ve=qn(ie),be=qn(ce),ye=qn(fe),me=qn(le),_e=b;(ae&&_e(new ae(new ArrayBuffer(1)))!=ge||ie&&_e(new ie)!=ue||ce&&_e(ce.resolve())!=de||fe&&_e(new fe)!=se||le&&_e(new le)!=pe)&&(_e=function(n){var e=b(n),t="[object Object]"==e?n.constructor:void 0,r=t?qn(t):"";if(r)switch(r){case he:return ge;case ve:return ue;case be:return de;case ye:return se;case me:return pe}return e});var ke=_e;var xe=function(n){return"string"==typeof n||!f(n)&&y(n)&&"[object String]"==b(n)};var Se=function(n){return function(e){return null==e?void 0:e[n]}}("length"),Ie="[\\ud800-\\udfff]",je="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Ce="\\ud83c[\\udffb-\\udfff]",Ae="[^\\ud800-\\udfff]",we="(?:\\ud83c[\\udde6-\\uddff]){2}",Te="[\\ud800-\\udbff][\\udc00-\\udfff]",Oe="(?:"+je+"|"+Ce+")"+"?",ze="[\\ufe0e\\ufe0f]?",Ee=ze+Oe+("(?:\\u200d(?:"+[Ae,we,Te].join("|")+")"+ze+Oe+")*"),Pe="(?:"+[Ae+je+"?",je,we,Te,Ie].join("|")+")",Re=RegExp(Ce+"(?="+Ce+")|"+Pe+Ee,"g");var $e=function(n){for(var e=Re.lastIndex=0;Re.test(n);)++e;return e};var Fe=function(n){return A(n)?$e(n):Se(n)};var Be=function(n){if(null==n)return 0;if(Tn(n))return xe(n)?Fe(n):n.length;var e=ke(n);return"[object Map]"==e||"[object Set]"==e?n.size:Zn(n).length},Me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ue=/^\w*$/;var Ne=function(n,e){if(f(n))return!1;var r=t(n);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!m(n))||(Ue.test(n)||!Me.test(n)||null!=e&&n in Object(e))},Le=oe(Object,"create");var De=function(){this.__data__=Le?Le(null):{},this.size=0};var We=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},Ze=Object.prototype.hasOwnProperty;var Ge=function(n){var e=this.__data__;if(Le){var t=e[n];return"__lodash_hash_undefined__"===t?void 0:t}return Ze.call(e,n)?e[n]:void 0},Ye=Object.prototype.hasOwnProperty;var Je=function(n){var e=this.__data__;return Le?void 0!==e[n]:Ye.call(e,n)};var Ve=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Le&&void 0===e?"__lodash_hash_undefined__":e,this};function qe(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}qe.prototype.clear=De,qe.prototype.delete=We,qe.prototype.get=Ge,qe.prototype.has=Je,qe.prototype.set=Ve;var He=qe;var Xe=function(){this.__data__=[],this.size=0};var Ke=function(n,e){for(var t=n.length;t--;)if(jn(n[t][0],e))return t;return-1},Qe=Array.prototype.splice;var nt=function(n){var e=this.__data__,t=Ke(e,n);return!(t<0)&&(t==e.length-1?e.pop():Qe.call(e,t,1),--this.size,!0)};var et=function(n){var e=this.__data__,t=Ke(e,n);return t<0?void 0:e[t][1]};var tt=function(n){return Ke(this.__data__,n)>-1};var rt=function(n,e){var t=this.__data__,r=Ke(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this};function ot(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}ot.prototype.clear=Xe,ot.prototype.delete=nt,ot.prototype.get=et,ot.prototype.has=tt,ot.prototype.set=rt;var at=ot;var it=function(){this.size=0,this.__data__={hash:new He,map:new(ie||at),string:new He}};var ct=function(n){var e=t(n);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n};var ft=function(n,e){var t=n.__data__;return ct(e)?t["string"==typeof e?"string":"hash"]:t.map};var lt=function(n){var e=ft(this,n).delete(n);return this.size-=e?1:0,e};var ut=function(n){return ft(this,n).get(n)};var dt=function(n){return ft(this,n).has(n)};var st=function(n,e){var t=ft(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this};function pt(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}pt.prototype.clear=it,pt.prototype.delete=lt,pt.prototype.get=ut,pt.prototype.has=dt,pt.prototype.set=st;var gt=pt;function ht(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function t(){var r=arguments,o=e?e.apply(this,r):r[0],a=t.cache;if(a.has(o))return a.get(o);var i=n.apply(this,r);return t.cache=a.set(o,i)||a,i};return t.cache=new(ht.Cache||gt),t}ht.Cache=gt;var vt=ht;var bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yt=/\\(\\)?/g,mt=function(n){var e=vt(n,(function(n){return 500===t.size&&t.clear(),n})),t=e.cache;return e}((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(bt,(function(n,t,r,o){e.push(r?o.replace(yt,"$1"):t||n)})),e}));var _t=function(n,e){return f(n)?n:Ne(n,e)?[n]:mt(S(n))};var kt=function(n){if("string"==typeof n||m(n))return n;var e=n+"";return"0"==e&&1/n==-Infinity?"-0":e};var xt=function(n,e){for(var t=0,r=(e=_t(e,n)).length;null!=n&&t<r;)n=n[kt(e[t++])];return t&&t==r?n:void 0};var St=function(n,e,t){var r=null==n?void 0:xt(n,e);return void 0===r?t:r},It={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};var jt={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){var n=this;return n.icon.indexOf("fa-")>=0?n.icon+" fa-fw":n.icon},useSize:function(){var n=this.size;return this.icon.indexOf("fa-")>=0?n-4:n},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};function Ct(n,e,t,r,o,a,i,c,f,l){"boolean"!=typeof i&&(f=c,c=i,i=!1);var u,d="function"==typeof t?t.options:t;if(n&&n.render&&(d.render=n.render,d.staticRenderFns=n.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),r&&(d._scopeId=r),a?(u=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,f(n)),n&&n._registeredComponents&&n._registeredComponents.add(a)},d._ssrRegister=u):e&&(u=i?function(n){e.call(this,l(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,c(n))}),u)if(d.functional){var s=d.render;d.render=function(n,e){return u.call(e),s(n,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,u):[u]}return t}var At,wt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Tt(n){return function(n,e){return function(n,e){var t=wt?e.media||"default":n,r=Ot[t]||(Ot[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===At&&(At=document.head||document.getElementsByTagName("head")[0]),At.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var a=r.ids.size-1,i=document.createTextNode(o),c=r.element.childNodes;c[a]&&r.element.removeChild(c[a]),c.length?r.element.insertBefore(i,c[a]):r.element.appendChild(i)}}}(n,e)}}var Ot={};const zt=jt;var Et=function(){var n=this,e=n.$createElement,t=n._self._c||e;return""!==n.icon?t("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"},on:{click:function(e){n.$emit("click",e)}}},[t("v-icon",{style:n.useStyle,attrs:{color:n.color,size:n.useSize}},[n._v("\n        "+n._s(n.useIcon)+"\n    ")])],1):n._e()};Et._withStripped=!0;const Pt={components:{WIcon:Ct({render:Et,staticRenderFns:[]},(function(n){n&&n("data-v-52f46ecf_0",{source:"\n.v-icon[data-v-52f46ecf] {\r\n    transition: all 0.3s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AAiGA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div \r\n        style=\"display:flex; align-items:center; user-select:none;\" \r\n        @click=\"(v)=>{$emit('click',v)}\"\r\n        v-if=\"icon!==''\"\r\n    >\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.3s;\r\n}\r\n</style>\r\n"]},media:void 0})}),zt,"data-v-52f46ecf",false,undefined,!1,Tt,void 0,void 0)},props:{title:{type:String,default:""},titleColor:{type:String,default:"deep-orange darken-1"},leftIcon:{type:String,default:""},leftIconColor:{type:String,default:"deep-orange lighten-2"},leftIconColorFocus:{type:String,default:"deep-orange lighten-1"},leftIconTooltip:{type:String,default:""},rightIcon:{type:String,default:""},rightIconColor:{type:String,default:"deep-orange lighten-2"},rightIconColorFocus:{type:String,default:"deep-orange lighten-1"},rightIconTooltip:{type:String,default:""},small:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},focused:{type:Boolean,default:!1}},data:function(){return{focusedTrans:!1}},mounted:function(){},computed:{changeParam:function(){return this.focusedTrans=this.focused,""},useTitleColor:function(){var n={};return n.color=function(n){if("white"===n)return"#fff";if("black"===n)return"#000";if("transparent"===n)return"rgba(0,0,0,0)";var e=Mn(n," ");if(2!==Be(e))return n;var t=e[0].trim();t=In(t);var r=e[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var o=St(It,"default.".concat(t,".").concat(r),null);return null===o&&(o=n),o}(this.titleColor),n},usePadding:function(){var n={};return this.small?n.padding="0px":n.padding="3px 6px",n},usePaddingSlot:function(){var n={"padding-top":"0px","padding-bottom":"0px","padding-left":"0px","padding-right":"0px"};return""!==this.leftIcon&&(n["padding-left"]="10px"),""!==this.rightIcon&&(n["padding-right"]="10px"),n}},methods:{clickIcon:function(n){var e=this;!1!==e.editable&&e.$nextTick((function(){e.$emit("click-"+n)}))}}};var Rt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"group",style:[n.usePadding,{opacity:n.editable?1:.6}],attrs:{changeParam:n.changeParam}},[n.leftIcon?t("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){return n.clickIcon("left")}}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.leftIconTooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var r=e.on;return[t("div",n._g({attrs:{ShellMaterial:"leftIcon"}},Object.assign({},r)),[t("w-icon",{attrs:{icon:n.leftIcon,color:n.focusedTrans?n.leftIconColorFocus:n.leftIconColor}})],1)]}}],null,!1,2950564174)},[n._v(" "),t("span",[n._v(n._s(n.leftIconTooltip))])])],1):n._e(),n._v(" "),t("div",{staticStyle:{width:"100%"}},[t("div",{style:[{position:"relative"},n.usePaddingSlot]},[t("div",{style:[{position:"absolute",top:"0px",transform:"translateY(-120%)","font-size":"0.9rem","white-space":"nowrap",opacity:.7},n.useTitleColor]},[n._v("\n                "+n._s(n.title)+"\n            ")]),n._v(" "),n._t("default")],2)]),n._v(" "),n.rightIcon?t("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){return n.clickIcon("right")}}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.rightIconTooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var r=e.on;return[t("div",n._g({attrs:{ShellMaterial:"rightIcon"}},Object.assign({},r)),[t("w-icon",{attrs:{icon:n.rightIcon,color:n.focusedTrans?n.rightIconColorFocus:n.rightIconColor}})],1)]}}],null,!1,999997262)},[n._v(" "),t("span",[n._v(n._s(n.rightIconTooltip))])])],1):n._e()])};Rt._withStripped=!0;return Ct({render:Rt,staticRenderFns:[]},(function(n){n&&n("data-v-7cac3446_0",{source:"\n.group[data-v-7cac3446] {\r\n    transition: all 0.3s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WShellMaterial.vue"],names:[],mappings:";AAuOA;IACA,oBAAA;IACA,aAAA;IACA,2BAAA;IACA,mBAAA;AACA",file:"WShellMaterial.vue",sourcesContent:["<template>\r\n    <div\r\n        :changeParam=\"changeParam\"\r\n        class=\"group\"\r\n        :style=\"[usePadding,{'opacity':editable?1:0.6}]\"\r\n    >\r\n\r\n        <div style=\"cursor:pointer;\" @click=\"clickIcon('left')\" v-if=\"leftIcon\">\r\n\r\n            <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"leftIconTooltip===''\">\r\n\r\n                <template v-slot:activator=\"{ on: ttShellMaterialLeft }\">\r\n                    <div ShellMaterial=\"leftIcon\" v-on=\"{...ttShellMaterialLeft}\">\r\n                        <w-icon\r\n                            :icon=\"leftIcon\"\r\n                            :color=\"focusedTrans?leftIconColorFocus:leftIconColor\"\r\n                        ></w-icon>\r\n                    </div>\r\n                </template>\r\n\r\n                <span>{{leftIconTooltip}}</span>\r\n\r\n            </v-tooltip>\r\n\r\n        </div>\r\n\r\n        <div style=\"width:100%;\">\r\n\r\n            <div :style=\"[{'position':'relative'},usePaddingSlot]\">\r\n\r\n                <div :style=\"[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]\">\r\n                    {{title}}\r\n                </div>\r\n\r\n                <slot></slot>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div style=\"cursor:pointer;\" @click=\"clickIcon('right')\" v-if=\"rightIcon\">\r\n\r\n            <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"rightIconTooltip===''\">\r\n\r\n                <template v-slot:activator=\"{ on: ttShellMaterialRight }\">\r\n                    <div ShellMaterial=\"rightIcon\" v-on=\"{...ttShellMaterialRight}\">\r\n                        <w-icon\r\n                            :icon=\"rightIcon\"\r\n                            :color=\"focusedTrans?rightIconColorFocus:rightIconColor\"\r\n                        ></w-icon>\r\n                    </div>\r\n                </template>\r\n\r\n                <span>{{rightIconTooltip}}</span>\r\n\r\n            </v-tooltip>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\nimport WIcon from './WIcon.vue'\r\n\r\n\r\n/**\r\n * @vue-prop {String} [title=''] 輸入標題字串，預設''\r\n * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'\r\n * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''\r\n * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''\r\n * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon,\r\n    },\r\n    props: {\r\n        title: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        titleColor: {\r\n            type: String,\r\n            default: 'deep-orange darken-1',\r\n        },\r\n        leftIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        leftIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        leftIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        leftIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        rightIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        rightIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        small: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        focused: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focusedTrans: false,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //focusedTrans\r\n            vo.focusedTrans = vo.focused\r\n\r\n            return ''\r\n        },\r\n\r\n        useTitleColor: function() {\r\n            //console.log('computed useTitleColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['color'] = color2hex(vo.titleColor)\r\n            return s\r\n        },\r\n\r\n        usePadding: function() {\r\n            //console.log('computed usePadding')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.small) {\r\n                s['padding'] = '0px'\r\n            }\r\n            else {\r\n                s['padding'] = '3px 6px'\r\n            }\r\n            return s\r\n        },\r\n\r\n        usePaddingSlot: function() {\r\n            //console.log('computed usePaddingSlot')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding-top'] = '0px'\r\n            s['padding-bottom'] = '0px'\r\n            s['padding-left'] = '0px'\r\n            s['padding-right'] = '0px'\r\n            if (vo.leftIcon !== '') {\r\n                s['padding-left'] = '10px'\r\n            }\r\n            if (vo.rightIcon !== '') {\r\n                s['padding-right'] = '10px'\r\n            }\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        clickIcon: function (mode) {\r\n            //console.log('methods clickIcon', mode)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            //$nextTick\r\n            vo.$nextTick(() => {\r\n\r\n                //emit\r\n                vo.$emit('click-' + mode)\r\n\r\n            })\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.group {\r\n    transition: all 0.3s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n</style>\r\n"]},media:void 0})}),Pt,"data-v-7cac3446",false,undefined,!1,Tt,void 0,void 0)}));
//# sourceMappingURL=w-shell-material.umd.js.map
