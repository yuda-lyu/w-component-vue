/*!
 * w-button-chip v1.3.43
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-button-chip"]=n()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,n){return e(n={exports:{}},n.exports),n.exports}var t=n((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),r="object"==t(e)&&e&&e.Object===Object&&e,a="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,f=r||a||Function("return this")(),i=f.Symbol;var o=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},c=Array.isArray,u=Object.prototype,d=u.hasOwnProperty,l=u.toString,s=i?i.toStringTag:void 0;var h=function(e){var n=d.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=l.call(e);return r&&(n?e[s]=t:delete e[s]),a},p=Object.prototype.toString;var v=function(e){return p.call(e)},b=i?i.toStringTag:void 0;var g=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?h(e):v(e)};var y=function(e){return null!=e&&"object"==t(e)};var m=function(e){return"symbol"==t(e)||y(e)&&"[object Symbol]"==g(e)},_=i?i.prototype:void 0,k=_?_.toString:void 0;var x=function e(n){if("string"==typeof n)return n;if(c(n))return o(n,e)+"";if(m(n))return k?k.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t};var S=function(e){return null==e?"":x(e)};var j=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var f=Array(a);++r<a;)f[r]=e[r+n];return f};var O=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:j(e,n,t)},w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var z=function(e){return w.test(e)};var A=function(e){return e.split("")},C="[\\ud800-\\udfff]",E="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",R="\\ud83c[\\udffb-\\udfff]",T="[^\\ud800-\\udfff]",I="(?:\\ud83c[\\udde6-\\uddff]){2}",$="[\\ud800-\\udbff][\\udc00-\\udfff]",L="(?:"+E+"|"+R+")"+"?",N="[\\ufe0e\\ufe0f]?"+L+("(?:\\u200d(?:"+[T,I,$].join("|")+")[\\ufe0e\\ufe0f]?"+L+")*"),U="(?:"+[T+E+"?",E,I,$,C].join("|")+")",B=RegExp(R+"(?="+R+")|"+U+N,"g");var P=function(e){return e.match(B)||[]};var D=function(e){return z(e)?P(e):A(e)};var F=function(e){return function(n){n=S(n);var t=z(n)?D(n):void 0,r=t?t[0]:n.charAt(0),a=t?O(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var Z=function(e){return F(S(e).toLowerCase())};var M=function(e,n,t,r){var a=-1,f=null==e?0:e.length;for(r&&f&&(t=e[++a]);++a<f;)t=n(t,e[a],a,e);return t};var W=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),G=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,V=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var J=function(e){return(e=S(e))&&e.replace(G,W).replace(V,"")},Y=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var H=function(e){return e.match(Y)||[]},X=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var q=function(e){return X.test(e)},K="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="["+K+"]",ee="\\d+",ne="[\\u2700-\\u27bf]",te="[a-z\\xdf-\\xf6\\xf8-\\xff]",re="[^\\ud800-\\udfff"+K+ee+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ae="(?:\\ud83c[\\udde6-\\uddff]){2}",fe="[\\ud800-\\udbff][\\udc00-\\udfff]",ie="[A-Z\\xc0-\\xd6\\xd8-\\xde]",oe="(?:"+te+"|"+re+")",ce="(?:"+ie+"|"+re+")",ue="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",de="[\\ufe0e\\ufe0f]?"+ue+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ae,fe].join("|")+")[\\ufe0e\\ufe0f]?"+ue+")*"),le="(?:"+[ne,ae,fe].join("|")+")"+de,se=RegExp([ie+"?"+te+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Q,ie,"$"].join("|")+")",ce+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Q,ie+oe,"$"].join("|")+")",ie+"?"+oe+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ie+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ee,le].join("|"),"g");var he=function(e){return e.match(se)||[]};var pe=function(e,n,t){return e=S(e),void 0===(n=t?void 0:n)?q(e)?he(e):H(e):e.match(n)||[]},ve=RegExp("['’]","g");var be=function(e){return function(n){return M(pe(J(n).replace(ve,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?Z(n):n)}));var ge=function(e,n){return e===n||e!=e&&n!=n};var ye=function(e){var n=t(e);return null!=e&&("object"==n||"function"==n)};var me=function(e){if(!ye(e))return!1;var n=g(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var _e=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var ke=function(e){return null!=e&&_e(e.length)&&!me(e)},xe=/^(?:0|[1-9]\d*)$/;var Se=function(e,n){var r=t(e);return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&xe.test(e))&&e>-1&&e%1==0&&e<n};var je=function(e,n,r){if(!ye(r))return!1;var a=t(n);return!!("number"==a?ke(r)&&Se(n,r.length):"string"==a&&n in r)&&ge(r[n],e)};var Oe=function(e){return y(e)&&"[object RegExp]"==g(e)};var we=function(e){return function(n){return e(n)}},ze=n((function(e,n){var t=n&&!n.nodeType&&n,a=t&&e&&!e.nodeType&&e,f=a&&a.exports===t&&r.process,i=function(){try{var e=a&&a.require&&a.require("util").types;return e||f&&f.binding&&f.binding("util")}catch(e){}}();e.exports=i})),Ae=ze&&ze.isRegExp,Ce=Ae?we(Ae):Oe;var Ee=function(e,n,t){return t&&"number"!=typeof t&&je(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=S(e))&&("string"==typeof n||null!=n&&!Ce(n))&&!(n=x(n))&&z(e)?O(D(e),0,t):e.split(n,t):[]},Re=Object.prototype;var Te=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Re)};var Ie=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),$e=Object.prototype.hasOwnProperty;var Le,Ne=function(e){if(!Te(e))return Ie(e);var n=[];for(var t in Object(e))$e.call(e,t)&&"constructor"!=t&&n.push(t);return n},Ue=f["__core-js_shared__"],Be=(Le=/[^.]+$/.exec(Ue&&Ue.keys&&Ue.keys.IE_PROTO||""))?"Symbol(src)_1."+Le:"";var Pe=function(e){return!!Be&&Be in e},De=Function.prototype.toString;var Fe=function(e){if(null!=e){try{return De.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ze=/^\[object .+?Constructor\]$/,Me=Function.prototype,We=Object.prototype,Ge=Me.toString,Ve=We.hasOwnProperty,Je=RegExp("^"+Ge.call(Ve).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e){return!(!ye(e)||Pe(e))&&(me(e)?Je:Ze).test(Fe(e))};var He=function(e,n){return null==e?void 0:e[n]};var Xe=function(e,n){var t=He(e,n);return Ye(t)?t:void 0},qe=Xe(f,"DataView"),Ke=Xe(f,"Map"),Qe=Xe(f,"Promise"),en=Xe(f,"Set"),nn=Xe(f,"WeakMap"),tn=Fe(qe),rn=Fe(Ke),an=Fe(Qe),fn=Fe(en),on=Fe(nn),cn=g;(qe&&"[object DataView]"!=cn(new qe(new ArrayBuffer(1)))||Ke&&"[object Map]"!=cn(new Ke)||Qe&&"[object Promise]"!=cn(Qe.resolve())||en&&"[object Set]"!=cn(new en)||nn&&"[object WeakMap]"!=cn(new nn))&&(cn=function(e){var n=g(e),t="[object Object]"==n?e.constructor:void 0,r=t?Fe(t):"";if(r)switch(r){case tn:return"[object DataView]";case rn:return"[object Map]";case an:return"[object Promise]";case fn:return"[object Set]";case on:return"[object WeakMap]"}return n});var un=cn;var dn=function(e){return"string"==typeof e||!c(e)&&y(e)&&"[object String]"==g(e)};var ln=function(e){return function(n){return null==n?void 0:n[e]}}("length"),sn="[\\ud800-\\udfff]",hn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",pn="\\ud83c[\\udffb-\\udfff]",vn="[^\\ud800-\\udfff]",bn="(?:\\ud83c[\\udde6-\\uddff]){2}",gn="[\\ud800-\\udbff][\\udc00-\\udfff]",yn="(?:"+hn+"|"+pn+")"+"?",mn="[\\ufe0e\\ufe0f]?"+yn+("(?:\\u200d(?:"+[vn,bn,gn].join("|")+")[\\ufe0e\\ufe0f]?"+yn+")*"),_n="(?:"+[vn+hn+"?",hn,bn,gn,sn].join("|")+")",kn=RegExp(pn+"(?="+pn+")|"+_n+mn,"g");var xn=function(e){for(var n=kn.lastIndex=0;kn.test(e);)++n;return n};var Sn=function(e){return z(e)?xn(e):ln(e)};var jn=function(e){if(null==e)return 0;if(ke(e))return dn(e)?Sn(e):e.length;var n=un(e);return"[object Map]"==n||"[object Set]"==n?e.size:Ne(e).length},On=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wn=/^\w*$/;var zn=function(e,n){if(c(e))return!1;var r=t(e);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!m(e))||(wn.test(e)||!On.test(e)||null!=n&&e in Object(n))},An=Xe(Object,"create");var Cn=function(){this.__data__=An?An(null):{},this.size=0};var En=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Rn=Object.prototype.hasOwnProperty;var Tn=function(e){var n=this.__data__;if(An){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return Rn.call(n,e)?n[e]:void 0},In=Object.prototype.hasOwnProperty;var $n=function(e){var n=this.__data__;return An?void 0!==n[e]:In.call(n,e)};var Ln=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=An&&void 0===n?"__lodash_hash_undefined__":n,this};function Nn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Nn.prototype.clear=Cn,Nn.prototype.delete=En,Nn.prototype.get=Tn,Nn.prototype.has=$n,Nn.prototype.set=Ln;var Un=Nn;var Bn=function(){this.__data__=[],this.size=0};var Pn=function(e,n){for(var t=e.length;t--;)if(ge(e[t][0],n))return t;return-1},Dn=Array.prototype.splice;var Fn=function(e){var n=this.__data__,t=Pn(n,e);return!(t<0)&&(t==n.length-1?n.pop():Dn.call(n,t,1),--this.size,!0)};var Zn=function(e){var n=this.__data__,t=Pn(n,e);return t<0?void 0:n[t][1]};var Mn=function(e){return Pn(this.__data__,e)>-1};var Wn=function(e,n){var t=this.__data__,r=Pn(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function Gn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Gn.prototype.clear=Bn,Gn.prototype.delete=Fn,Gn.prototype.get=Zn,Gn.prototype.has=Mn,Gn.prototype.set=Wn;var Vn=Gn;var Jn=function(){this.size=0,this.__data__={hash:new Un,map:new(Ke||Vn),string:new Un}};var Yn=function(e){var n=t(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var Hn=function(e,n){var t=e.__data__;return Yn(n)?t["string"==typeof n?"string":"hash"]:t.map};var Xn=function(e){var n=Hn(this,e).delete(e);return this.size-=n?1:0,n};var qn=function(e){return Hn(this,e).get(e)};var Kn=function(e){return Hn(this,e).has(e)};var Qn=function(e,n){var t=Hn(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function et(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}et.prototype.clear=Jn,et.prototype.delete=Xn,et.prototype.get=qn,et.prototype.has=Kn,et.prototype.set=Qn;var nt=et;function tt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],f=t.cache;if(f.has(a))return f.get(a);var i=e.apply(this,r);return t.cache=f.set(a,i)||f,i};return t.cache=new(tt.Cache||nt),t}tt.Cache=nt;var rt=tt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ft=/\\(\\)?/g,it=function(e){var n=rt(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(at,(function(e,t,r,a){n.push(r?a.replace(ft,"$1"):t||e)})),n}));var ot=function(e,n){return c(e)?e:zn(e,n)?[e]:it(S(e))};var ct=function(e){if("string"==typeof e||m(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var ut=function(e,n){for(var t=0,r=(n=ot(n,e)).length;null!=e&&t<r;)e=e[ct(n[t++])];return t&&t==r?e:void 0};var dt=function(e,n,t){var r=null==e?void 0:ut(e,n);return void 0===r?t:r},lt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};var st={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var e=this.size;return this.icon.indexOf("fa-")>=0?e-4:e},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};function ht(e,n,t,r,a,f,i,o,c,u){"boolean"!=typeof i&&(c=o,o=i,i=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),f?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(f)},l._ssrRegister=d):n&&(d=i?function(e){n.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,o(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,d):[d]}return t}var pt,vt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function bt(e){return function(e,n){return function(e,n){var t=vt?n.media||"default":e,r=gt[t]||(gt[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===pt&&(pt=document.head||document.getElementsByTagName("head")[0]),pt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var f=r.ids.size-1,i=document.createTextNode(a),o=r.element.childNodes;o[f]&&r.element.removeChild(o[f]),o.length?r.element.insertBefore(i,o[f]):r.element.appendChild(i)}}}(e,n)}}var gt={};const yt=st;var mt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return""!==e.icon?t("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[t("v-icon",{style:e.useStyle,attrs:{color:e.color,size:e.useSize}},[e._v("\n        "+e._s(e.useIcon)+"\n    ")])],1):e._e()};mt._withStripped=!0;const _t={components:{WIcon:ht({render:mt,staticRenderFns:[]},(function(e){e&&e("data-v-39a33360_0",{source:"\n.v-icon[data-v-39a33360] {\r\n    transition: all 0.3s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.3s;\r\n}\r\n</style>\r\n"]},media:void 0})}),yt,"data-v-39a33360",!1,void 0,!1,bt,void 0,void 0)},props:{text:{type:String,default:""},tooltip:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:""},iconShiftLeft:{type:Number,default:0},textColor:{type:String,default:"black"},backgroundColor:{type:String,default:"grey lighten-4"},small:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{useIconShiftLeft:function(){return this.iconShiftLeft-9},useTextColor:function(){return function(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Ee(e," ");if(2!==jn(n))return e;var t=n[0].trim();t=be(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=dt(lt,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}(this.textColor)}},methods:{clickBtn:function(){var e=this;setTimeout((function(){e.$emit("click")}),1)}}};var kt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{display:"inline-block"},attrs:{role:"button"}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.tooltip},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t("v-btn",e._g({attrs:{rounded:"",small:e.small,color:e.backgroundColor,loading:e.loading,disabled:!e.editable},on:{click:e.clickBtn}},r),[t("w-icon",{style:"margin:0px 5px 0px "+e.useIconShiftLeft+"px;",attrs:{icon:e.icon,color:e.iconColor,size:22}}),e._v(" "),t("span",{style:"font-size:0.875rem; text-transform:none; color:"+e.useTextColor},[e._v("\n                    "+e._s(e.text)+"\n                ")])],1)]}}])},[e._v(" "),t("span",[e._v(e._s(e.tooltip))])])],1)};kt._withStripped=!0;return ht({render:kt,staticRenderFns:[]},(function(e){e&&e("data-v-0a5b4c12_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WButtonChip.vue"},media:void 0})}),_t,"data-v-0a5b4c12",!1,void 0,!1,bt,void 0,void 0)}));
//# sourceMappingURL=w-button-chip.umd.js.map
