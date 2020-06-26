/*!
 * w-json-view-core v1.3.53
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-json-view-core"]=n()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,n){return e(n={exports:{}},n.exports),n.exports}var t=n((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),r="object"==t(e)&&e&&e.Object===Object&&e,a="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,i=r||a||Function("return this")(),o=i.Symbol;var f=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},c=Array.isArray,l=Object.prototype,u=l.hasOwnProperty,d=l.toString,s=o?o.toStringTag:void 0;var p=function(e){var n=u.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=d.call(e);return r&&(n?e[s]=t:delete e[s]),a},h=Object.prototype.toString;var v=function(e){return h.call(e)},g=o?o.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":g&&g in Object(e)?p(e):v(e)};var y=function(e){return null!=e&&"object"==t(e)};var m=function(e){return"symbol"==t(e)||y(e)&&"[object Symbol]"==b(e)},x=o?o.prototype:void 0,k=x?x.toString:void 0;var _=function e(n){if("string"==typeof n)return n;if(c(n))return f(n,e)+"";if(m(n))return k?k.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t};var C=function(e){return null==e?"":_(e)};var w=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(a);++r<a;)i[r]=e[r+n];return i};var A=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:w(e,n,t)},j=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var S=function(e){return j.test(e)};var N=function(e){return e.split("")},O="[\\ud800-\\udfff]",I="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",$="\\ud83c[\\udffb-\\udfff]",E="[^\\ud800-\\udfff]",z="(?:\\ud83c[\\udde6-\\uddff]){2}",R="[\\ud800-\\udbff][\\udc00-\\udfff]",T="(?:"+I+"|"+$+")"+"?",L="[\\ufe0e\\ufe0f]?"+T+("(?:\\u200d(?:"+[E,z,R].join("|")+")[\\ufe0e\\ufe0f]?"+T+")*"),U="(?:"+[E+I+"?",I,z,R,O].join("|")+")",B=RegExp($+"(?="+$+")|"+U+L,"g");var M=function(e){return e.match(B)||[]};var P=function(e){return S(e)?M(e):N(e)};var D=function(e){return function(n){n=C(n);var t=S(n)?P(n):void 0,r=t?t[0]:n.charAt(0),a=t?A(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var V=function(e){return D(C(e).toLowerCase())};var W=function(e,n,t,r){var a=-1,i=null==e?0:e.length;for(r&&i&&(t=e[++a]);++a<i;)t=n(t,e[a],a,e);return t};var Z=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),F=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,G=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var J=function(e){return(e=C(e))&&e.replace(F,Z).replace(G,"")},Y=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var K=function(e){return e.match(Y)||[]},X=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var q=function(e){return X.test(e)},H="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="["+H+"]",ee="\\d+",ne="[\\u2700-\\u27bf]",te="[a-z\\xdf-\\xf6\\xf8-\\xff]",re="[^\\ud800-\\udfff"+H+ee+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ae="(?:\\ud83c[\\udde6-\\uddff]){2}",ie="[\\ud800-\\udbff][\\udc00-\\udfff]",oe="[A-Z\\xc0-\\xd6\\xd8-\\xde]",fe="(?:"+te+"|"+re+")",ce="(?:"+oe+"|"+re+")",le="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",ue="[\\ufe0e\\ufe0f]?"+le+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ae,ie].join("|")+")[\\ufe0e\\ufe0f]?"+le+")*"),de="(?:"+[ne,ae,ie].join("|")+")"+ue,se=RegExp([oe+"?"+te+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Q,oe,"$"].join("|")+")",ce+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Q,oe+fe,"$"].join("|")+")",oe+"?"+fe+"+(?:['’](?:d|ll|m|re|s|t|ve))?",oe+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ee,de].join("|"),"g");var pe=function(e){return e.match(se)||[]};var he=function(e,n,t){return e=C(e),void 0===(n=t?void 0:n)?q(e)?pe(e):K(e):e.match(n)||[]},ve=RegExp("['’]","g");var ge=function(e){return function(n){return W(he(J(n).replace(ve,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?V(n):n)}));var be=function(e,n){return e===n||e!=e&&n!=n};var ye=function(e){var n=t(e);return null!=e&&("object"==n||"function"==n)};var me=function(e){if(!ye(e))return!1;var n=b(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var xe=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var ke=function(e){return null!=e&&xe(e.length)&&!me(e)},_e=/^(?:0|[1-9]\d*)$/;var Ce=function(e,n){var r=t(e);return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&_e.test(e))&&e>-1&&e%1==0&&e<n};var we=function(e,n,r){if(!ye(r))return!1;var a=t(n);return!!("number"==a?ke(r)&&Ce(n,r.length):"string"==a&&n in r)&&be(r[n],e)};var Ae=function(e){return y(e)&&"[object RegExp]"==b(e)};var je=function(e){return function(n){return e(n)}},Se=n((function(e,n){var t=n&&!n.nodeType&&n,a=t&&e&&!e.nodeType&&e,i=a&&a.exports===t&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o})),Ne=Se&&Se.isRegExp,Oe=Ne?je(Ne):Ae;var Ie=function(e,n,t){return t&&"number"!=typeof t&&we(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=C(e))&&("string"==typeof n||null!=n&&!Oe(n))&&!(n=_(n))&&S(e)?A(P(e),0,t):e.split(n,t):[]},$e=Object.prototype;var Ee=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||$e)};var ze=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Re=Object.prototype.hasOwnProperty;var Te,Le=function(e){if(!Ee(e))return ze(e);var n=[];for(var t in Object(e))Re.call(e,t)&&"constructor"!=t&&n.push(t);return n},Ue=i["__core-js_shared__"],Be=(Te=/[^.]+$/.exec(Ue&&Ue.keys&&Ue.keys.IE_PROTO||""))?"Symbol(src)_1."+Te:"";var Me=function(e){return!!Be&&Be in e},Pe=Function.prototype.toString;var De=function(e){if(null!=e){try{return Pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ve=/^\[object .+?Constructor\]$/,We=Function.prototype,Ze=Object.prototype,Fe=We.toString,Ge=Ze.hasOwnProperty,Je=RegExp("^"+Fe.call(Ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e){return!(!ye(e)||Me(e))&&(me(e)?Je:Ve).test(De(e))};var Ke=function(e,n){return null==e?void 0:e[n]};var Xe=function(e,n){var t=Ke(e,n);return Ye(t)?t:void 0},qe=Xe(i,"DataView"),He=Xe(i,"Map"),Qe=Xe(i,"Promise"),en=Xe(i,"Set"),nn=Xe(i,"WeakMap"),tn=De(qe),rn=De(He),an=De(Qe),on=De(en),fn=De(nn),cn=b;(qe&&"[object DataView]"!=cn(new qe(new ArrayBuffer(1)))||He&&"[object Map]"!=cn(new He)||Qe&&"[object Promise]"!=cn(Qe.resolve())||en&&"[object Set]"!=cn(new en)||nn&&"[object WeakMap]"!=cn(new nn))&&(cn=function(e){var n=b(e),t="[object Object]"==n?e.constructor:void 0,r=t?De(t):"";if(r)switch(r){case tn:return"[object DataView]";case rn:return"[object Map]";case an:return"[object Promise]";case on:return"[object Set]";case fn:return"[object WeakMap]"}return n});var ln=cn;var un=function(e){return"string"==typeof e||!c(e)&&y(e)&&"[object String]"==b(e)};var dn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),sn="[\\ud800-\\udfff]",pn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",hn="\\ud83c[\\udffb-\\udfff]",vn="[^\\ud800-\\udfff]",gn="(?:\\ud83c[\\udde6-\\uddff]){2}",bn="[\\ud800-\\udbff][\\udc00-\\udfff]",yn="(?:"+pn+"|"+hn+")"+"?",mn="[\\ufe0e\\ufe0f]?"+yn+("(?:\\u200d(?:"+[vn,gn,bn].join("|")+")[\\ufe0e\\ufe0f]?"+yn+")*"),xn="(?:"+[vn+pn+"?",pn,gn,bn,sn].join("|")+")",kn=RegExp(hn+"(?="+hn+")|"+xn+mn,"g");var _n=function(e){for(var n=kn.lastIndex=0;kn.test(e);)++n;return n};var Cn=function(e){return S(e)?_n(e):dn(e)};var wn=function(e){if(null==e)return 0;if(ke(e))return un(e)?Cn(e):e.length;var n=ln(e);return"[object Map]"==n||"[object Set]"==n?e.size:Le(e).length},An=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jn=/^\w*$/;var Sn=function(e,n){if(c(e))return!1;var r=t(e);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!m(e))||(jn.test(e)||!An.test(e)||null!=n&&e in Object(n))},Nn=Xe(Object,"create");var On=function(){this.__data__=Nn?Nn(null):{},this.size=0};var In=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},$n=Object.prototype.hasOwnProperty;var En=function(e){var n=this.__data__;if(Nn){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return $n.call(n,e)?n[e]:void 0},zn=Object.prototype.hasOwnProperty;var Rn=function(e){var n=this.__data__;return Nn?void 0!==n[e]:zn.call(n,e)};var Tn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Nn&&void 0===n?"__lodash_hash_undefined__":n,this};function Ln(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Ln.prototype.clear=On,Ln.prototype.delete=In,Ln.prototype.get=En,Ln.prototype.has=Rn,Ln.prototype.set=Tn;var Un=Ln;var Bn=function(){this.__data__=[],this.size=0};var Mn=function(e,n){for(var t=e.length;t--;)if(be(e[t][0],n))return t;return-1},Pn=Array.prototype.splice;var Dn=function(e){var n=this.__data__,t=Mn(n,e);return!(t<0)&&(t==n.length-1?n.pop():Pn.call(n,t,1),--this.size,!0)};var Vn=function(e){var n=this.__data__,t=Mn(n,e);return t<0?void 0:n[t][1]};var Wn=function(e){return Mn(this.__data__,e)>-1};var Zn=function(e,n){var t=this.__data__,r=Mn(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function Fn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Fn.prototype.clear=Bn,Fn.prototype.delete=Dn,Fn.prototype.get=Vn,Fn.prototype.has=Wn,Fn.prototype.set=Zn;var Gn=Fn;var Jn=function(){this.size=0,this.__data__={hash:new Un,map:new(He||Gn),string:new Un}};var Yn=function(e){var n=t(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var Kn=function(e,n){var t=e.__data__;return Yn(n)?t["string"==typeof n?"string":"hash"]:t.map};var Xn=function(e){var n=Kn(this,e).delete(e);return this.size-=n?1:0,n};var qn=function(e){return Kn(this,e).get(e)};var Hn=function(e){return Kn(this,e).has(e)};var Qn=function(e,n){var t=Kn(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function et(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}et.prototype.clear=Jn,et.prototype.delete=Xn,et.prototype.get=qn,et.prototype.has=Hn,et.prototype.set=Qn;var nt=et;function tt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return t.cache=i.set(a,o)||i,o};return t.cache=new(tt.Cache||nt),t}tt.Cache=nt;var rt=tt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,ot=function(e){var n=rt(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(at,(function(e,t,r,a){n.push(r?a.replace(it,"$1"):t||e)})),n}));var ft=function(e,n){return c(e)?e:Sn(e,n)?[e]:ot(C(e))};var ct=function(e){if("string"==typeof e||m(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var lt=function(e,n){for(var t=0,r=(n=ft(n,e)).length;null!=e&&t<r;)e=e[ct(n[t++])];return t&&t==r?e:void 0};var ut=function(e,n,t){var r=null==e?void 0:lt(e,n);return void 0===r?t:r},dt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function st(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Ie(e," ");if(2!==wn(n))return e;var t=n[0].trim();t=ge(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=ut(dt,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}var pt={props:{item:{type:Object,default:function(){}},lineNumberWidth:{type:Number,default:0},iconColor:{type:String,default:"grey"},keyColor:{type:String,default:"grey darken-2"},keyNumbersColor:{type:String,default:"grey lighten-1"}},data:function(){return{styleLineNumber:"padding-right:10px; text-align:right; font-size:0.8rem; line-height:1.5625rem; color:#f26; user-select:none;",styleCell:"display:table-cell; vertical-align:top;"}},mounted:function(){},computed:{useIconColor:function(){return st(this.iconColor)},useKeyColor:function(){return st(this.keyColor)},usekeyNumbersColor:function(){return st(this.keyNumbersColor)}},methods:{toggleItems:function(e){this.$emit("toggleItems",e)}}};function ht(e,n,t,r,a,i,o,f,c,l){"boolean"!=typeof o&&(c=f,f=o,o=!1);var u,d="function"==typeof t?t.options:t;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,a&&(d.functional=!0)),r&&(d._scopeId=r),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=u):n&&(u=o?function(e){n.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,f(e))}),u)if(d.functional){var s=d.render;d.render=function(e,n){return u.call(n),s(e,n)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,u):[u]}return t}var vt,gt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function bt(e){return function(e,n){return function(e,n){var t=gt?n.media||"default":e,r=yt[t]||(yt[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===vt&&(vt=document.head||document.getElementsByTagName("head")[0]),vt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,o=document.createTextNode(a),f=r.element.childNodes;f[i]&&r.element.removeChild(f[i]),f.length?r.element.insertBefore(o,f[i]):r.element.appendChild(o)}}}(e,n)}}var yt={};const mt=pt;var xt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.item.show&&e.item.filterShow?t("div",{style:"position:absolute; top:"+e.item.screenY+"px; width:100%; opacity:"+(e.item.nowShow?1:.001)+";",attrs:{index:e.item.index,nowShow:e.item.nowShow}},[t("div",{style:e.styleCell+"; "+e.styleLineNumber+"; width:"+e.lineNumberWidth+"px;"},[e._v(e._s(e.item.index+1))]),e._v(" "),t("div",{style:e.styleCell+"; padding-left:"+e.item.paddingLeft+"px;"},[t("div",{staticStyle:{position:"relative"}},[t("div",{staticStyle:{position:"absolute",top:"0px",left:"0px",transform:"translateX(-100%)","user-select":"none"}},[1===e.item.stateChildren?t("div",{on:{"!click":function(n){return e.toggleItems(e.item)}}},[t("span",{class:[{caretRight:!0,showChildren:e.item.displayChildren}]},[t("span",{staticClass:"center"},[t("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:e.useIconColor,width:"11px",height:"11px",x:"0px",y:"0px",viewBox:"0 0 415.346 415.346","xml:space":"preserve"}},[t("g",[t("path",{attrs:{d:"M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"}})])])])])]):t("div",{staticStyle:{display:"inline-block",width:"16px"}})]),e._v(" "),t("div",{},[e.item.key?t("div",{style:e.styleCell+"; white-space:pre; color:"+e.useKeyColor+";"},[t("span",[e._v(e._s(e.item.key))]),e._v(" "),e.item.keyNumbers?t("span",{style:"margin:0px 10px; color:"+e.usekeyNumbersColor+";"},["arr"===e.item.keyNumbers.type?t("span",[e._v("["+e._s(e.item.keyNumbers.n)+"]")]):e._e(),e._v(" "),"obj"===e.item.keyNumbers.type?t("span",[t("span",[e._v("{")]),t("span",[e._v(e._s(e.item.keyNumbers.n))]),t("span",[e._v("}")])]):e._e()]):e._e(),e._v(" "),e.item.displayChildren?e._e():t("span",[t("span",{staticStyle:{"margin-right":"10px"}},[e._v("...")]),e._v(e._s(e.item.valueTail))])]):e._e(),e._v(" "),e.item.value?[t("div",{style:e.styleCell+"; color:"+e.item.valueColor},[e._v(e._s(e.item.value))]),e._v(" "),e.item.valueComma?t("div",{style:e.styleCell+"; color:"+e.item.keyColor},[e._v(",")]):e._e()]:e._e()],2)])])]):e._e()};xt._withStripped=!0;return ht({render:xt,staticRenderFns:[]},(function(e){e&&e("data-v-19515d83_0",{source:"\n.caretRight[data-v-19515d83] {\r\n    transform: translateY(-1px);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 5px;\n}\n.center[data-v-19515d83] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\n}\n.showChildren[data-v-19515d83] {\r\n    transform: rotate(90deg);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WJsonViewCore.vue"],names:[],mappings:";AAiJA;IACA,2BAAA;IACA,eAAA;IACA,qBAAA;IACA,sBAAA;IACA,iBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,uBAAA;AACA;AACA;IACA,wBAAA;AACA",file:"WJsonViewCore.vue",sourcesContent:['<template>\r\n    <div\r\n        :style="`position:absolute; top:${item.screenY}px; width:100%; opacity:${item.nowShow?1:0.001};`"\r\n        :index="item.index"\r\n        :nowShow="item.nowShow"\r\n        v-if="item.show && item.filterShow"\r\n    >\r\n\r\n        <div :style="`${styleCell}; ${styleLineNumber}; width:${lineNumberWidth}px;`">{{item.index+1}}</div>\r\n\r\n        <div :style="`${styleCell}; padding-left:${item.paddingLeft}px;`">\r\n\r\n            <div style="position:relative;">\r\n\r\n                <div style="position:absolute; top:0px; left:0px; transform:translateX(-100%); user-select:none;">\r\n                    <div v-if="item.stateChildren===1" @click.capture="toggleItems(item)">\r\n                        <span :class="[{\'caretRight\':true,\'showChildren\':item.displayChildren}]">\r\n                            <span class="center">\r\n                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="useIconColor" width="11px" height="11px" x="0px" y="0px" viewBox="0 0 415.346 415.346" xml:space="preserve"><g><path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/></g></svg>\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <div style="display:inline-block; width:16px;" v-else></div>\r\n                </div>\r\n\r\n                <div style="">\r\n\r\n                    <div :style="`${styleCell}; white-space:pre; color:${useKeyColor};`" v-if="item.key">\r\n\r\n                        <span>{{item.key}}</span>\r\n\r\n                        <span :style="`margin:0px 10px; color:${usekeyNumbersColor};`" v-if="item.keyNumbers">\r\n                            <span v-if="item.keyNumbers.type===\'arr\'">[{{item.keyNumbers.n}}]</span>\r\n                            <span v-if="item.keyNumbers.type===\'obj\'"><span>{</span><span>{{item.keyNumbers.n}}</span><span>}</span></span>\r\n                        </span>\r\n\r\n                        <span v-if="!item.displayChildren"><span style="margin-right:10px;">...</span>{{item.valueTail}}</span>\r\n\r\n                    </div>\r\n\r\n                    <template v-if="item.value">\r\n\r\n                        <div :style="`${styleCell}; color:${item.valueColor}`">{{item.value}}</div>\r\n\r\n                        <div :style="`${styleCell}; color:${item.keyColor}`" v-if="item.valueComma">,</div>\r\n\r\n                    </template>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from \'../js/vuetifyColor.mjs\'\r\n\r\n\r\n/**\r\n * @vue-prop {Object} item 輸入物件\r\n * @vue-prop {Number} [lineNumberWidth=0] 輸入列號區寬度，單位為px，預設0\r\n * @vue-prop {String} [iconColor=\'grey\'] 輸入顯隱icon按鈕顏色字串，預設\'grey\'\r\n * @vue-prop {String} [keyColor=\'grey darken-2\'] 輸入鍵值顏色字串，預設\'grey darken-2\'\r\n * @vue-prop {String} [keyNumbersColor=\'grey lighten-1\'] 輸入鍵值內含子節點數量顏色字串，預設\'grey lighten-1\'\r\n */\r\nexport default {\r\n    props: {\r\n        item: {\r\n            type: Object,\r\n            default: () => {},\r\n        },\r\n        lineNumberWidth: {\r\n            type: Number,\r\n            default: 0,\r\n        },\r\n        iconColor: {\r\n            type: String,\r\n            default: \'grey\',\r\n        },\r\n        keyColor: {\r\n            type: String,\r\n            default: \'grey darken-2\',\r\n        },\r\n        keyNumbersColor: {\r\n            type: String,\r\n            default: \'grey lighten-1\',\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            //line-height = ( 1 / 0.8(font-size) )^2\r\n            styleLineNumber: `padding-right:10px; text-align:right; font-size:0.8rem; line-height:1.5625rem; color:#f26; user-select:none;`,\r\n            styleCell: `display:table-cell; vertical-align:top;`,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIconColor: function() {\r\n            //console.log(\'computed useIconColor\')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.iconColor)\r\n        },\r\n\r\n        useKeyColor: function() {\r\n            //console.log(\'computed useKeyColor\')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.keyColor)\r\n        },\r\n\r\n        usekeyNumbersColor: function() {\r\n            //console.log(\'computed usekeyNumbersColor\')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.keyNumbersColor)\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        toggleItems: function(item) {\r\n            //console.log(\'methods toggleItems\', item)\r\n            //記得click需使用capture, 先處理完自己節點點擊才釋出事件, 適用於窄板裝置\r\n\r\n            let vo = this\r\n\r\n            //emit\r\n            vo.$emit(\'toggleItems\', item)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.caretRight {\r\n    transform: translateY(-1px);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 5px;\r\n}\r\n.center {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.showChildren {\r\n    transform: rotate(90deg);\r\n}\r\n</style>\r\n\r\n']},media:void 0})}),mt,"data-v-19515d83",!1,void 0,!1,bt,void 0,void 0)}));
//# sourceMappingURL=w-json-view-core.umd.js.map
