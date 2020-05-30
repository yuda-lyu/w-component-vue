/*!
 * w-badge v1.3.35
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-badge"]=n()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,n){return e(n={exports:{}},n.exports),n.exports}var t=n((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),r="object"==t(e)&&e&&e.Object===Object&&e,a="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,f=r||a||Function("return this")(),c=f.Symbol;var i=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},o=Array.isArray,u=Object.prototype,d=u.hasOwnProperty,l=u.toString,s=c?c.toStringTag:void 0;var h=function(e){var n=d.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=l.call(e);return r&&(n?e[s]=t:delete e[s]),a},b=Object.prototype.toString;var p=function(e){return b.call(e)},g=c?c.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":g&&g in Object(e)?h(e):p(e)};var y=function(e){return null!=e&&"object"==t(e)};var _=function(e){return"symbol"==t(e)||y(e)&&"[object Symbol]"==v(e)},k=c?c.prototype:void 0,x=k?k.toString:void 0;var m=function e(n){if("string"==typeof n)return n;if(o(n))return i(n,e)+"";if(_(n))return x?x.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t};var j=function(e){return null==e?"":m(e)};var S=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var f=Array(a);++r<a;)f[r]=e[r+n];return f};var w=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:S(e,n,t)},O=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var E=function(e){return O.test(e)};var A=function(e){return e.split("")},C="[\\ud800-\\udfff]",z="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",R="\\ud83c[\\udffb-\\udfff]",T="[^\\ud800-\\udfff]",$="(?:\\ud83c[\\udde6-\\uddff]){2}",U="[\\ud800-\\udbff][\\udc00-\\udfff]",I="(?:"+z+"|"+R+")"+"?",L="[\\ufe0e\\ufe0f]?"+I+("(?:\\u200d(?:"+[T,$,U].join("|")+")[\\ufe0e\\ufe0f]?"+I+")*"),N="(?:"+[T+z+"?",z,$,U,C].join("|")+")",P=RegExp(R+"(?="+R+")|"+N+L,"g");var Z=function(e){return e.match(P)||[]};var D=function(e){return E(e)?Z(e):A(e)};var M=function(e){return function(n){n=j(n);var t=E(n)?D(n):void 0,r=t?t[0]:n.charAt(0),a=t?w(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var F=function(e){return M(j(e).toLowerCase())};var G=function(e,n,t,r){var a=-1,f=null==e?0:e.length;for(r&&f&&(t=e[++a]);++a<f;)t=n(t,e[a],a,e);return t};var V=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),B=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,W=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var Y=function(e){return(e=j(e))&&e.replace(B,V).replace(W,"")},H=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var J=function(e){return e.match(H)||[]},X=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var q=function(e){return X.test(e)},K="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="["+K+"]",ee="\\d+",ne="[\\u2700-\\u27bf]",te="[a-z\\xdf-\\xf6\\xf8-\\xff]",re="[^\\ud800-\\udfff"+K+ee+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ae="(?:\\ud83c[\\udde6-\\uddff]){2}",fe="[\\ud800-\\udbff][\\udc00-\\udfff]",ce="[A-Z\\xc0-\\xd6\\xd8-\\xde]",ie="(?:"+te+"|"+re+")",oe="(?:"+ce+"|"+re+")",ue="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",de="[\\ufe0e\\ufe0f]?"+ue+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ae,fe].join("|")+")[\\ufe0e\\ufe0f]?"+ue+")*"),le="(?:"+[ne,ae,fe].join("|")+")"+de,se=RegExp([ce+"?"+te+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Q,ce,"$"].join("|")+")",oe+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Q,ce+ie,"$"].join("|")+")",ce+"?"+ie+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ce+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ee,le].join("|"),"g");var he=function(e){return e.match(se)||[]};var be=function(e,n,t){return e=j(e),void 0===(n=t?void 0:n)?q(e)?he(e):J(e):e.match(n)||[]},pe=RegExp("['’]","g");var ge=function(e){return function(n){return G(be(Y(n).replace(pe,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?F(n):n)}));var ve=function(e,n){return e===n||e!=e&&n!=n};var ye=function(e){var n=t(e);return null!=e&&("object"==n||"function"==n)};var _e=function(e){if(!ye(e))return!1;var n=v(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var ke=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var xe=function(e){return null!=e&&ke(e.length)&&!_e(e)},me=/^(?:0|[1-9]\d*)$/;var je=function(e,n){var r=t(e);return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<n};var Se=function(e,n,r){if(!ye(r))return!1;var a=t(n);return!!("number"==a?xe(r)&&je(n,r.length):"string"==a&&n in r)&&ve(r[n],e)};var we=function(e){return y(e)&&"[object RegExp]"==v(e)};var Oe=function(e){return function(n){return e(n)}},Ee=n((function(e,n){var t=n&&!n.nodeType&&n,a=t&&e&&!e.nodeType&&e,f=a&&a.exports===t&&r.process,c=function(){try{var e=a&&a.require&&a.require("util").types;return e||f&&f.binding&&f.binding("util")}catch(e){}}();e.exports=c})),Ae=Ee&&Ee.isRegExp,Ce=Ae?Oe(Ae):we;var ze=function(e,n,t){return t&&"number"!=typeof t&&Se(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=j(e))&&("string"==typeof n||null!=n&&!Ce(n))&&!(n=m(n))&&E(e)?w(D(e),0,t):e.split(n,t):[]},Re=Object.prototype;var Te=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Re)};var $e=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Ue=Object.prototype.hasOwnProperty;var Ie,Le=function(e){if(!Te(e))return $e(e);var n=[];for(var t in Object(e))Ue.call(e,t)&&"constructor"!=t&&n.push(t);return n},Ne=f["__core-js_shared__"],Pe=(Ie=/[^.]+$/.exec(Ne&&Ne.keys&&Ne.keys.IE_PROTO||""))?"Symbol(src)_1."+Ie:"";var Ze=function(e){return!!Pe&&Pe in e},De=Function.prototype.toString;var Me=function(e){if(null!=e){try{return De.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fe=/^\[object .+?Constructor\]$/,Ge=Function.prototype,Ve=Object.prototype,Be=Ge.toString,We=Ve.hasOwnProperty,Ye=RegExp("^"+Be.call(We).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var He=function(e){return!(!ye(e)||Ze(e))&&(_e(e)?Ye:Fe).test(Me(e))};var Je=function(e,n){return null==e?void 0:e[n]};var Xe=function(e,n){var t=Je(e,n);return He(t)?t:void 0},qe=Xe(f,"DataView"),Ke=Xe(f,"Map"),Qe=Xe(f,"Promise"),en=Xe(f,"Set"),nn=Xe(f,"WeakMap"),tn=Me(qe),rn=Me(Ke),an=Me(Qe),fn=Me(en),cn=Me(nn),on=v;(qe&&"[object DataView]"!=on(new qe(new ArrayBuffer(1)))||Ke&&"[object Map]"!=on(new Ke)||Qe&&"[object Promise]"!=on(Qe.resolve())||en&&"[object Set]"!=on(new en)||nn&&"[object WeakMap]"!=on(new nn))&&(on=function(e){var n=v(e),t="[object Object]"==n?e.constructor:void 0,r=t?Me(t):"";if(r)switch(r){case tn:return"[object DataView]";case rn:return"[object Map]";case an:return"[object Promise]";case fn:return"[object Set]";case cn:return"[object WeakMap]"}return n});var un=on;var dn=function(e){return"string"==typeof e||!o(e)&&y(e)&&"[object String]"==v(e)};var ln=function(e){return function(n){return null==n?void 0:n[e]}}("length"),sn="[\\ud800-\\udfff]",hn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",bn="\\ud83c[\\udffb-\\udfff]",pn="[^\\ud800-\\udfff]",gn="(?:\\ud83c[\\udde6-\\uddff]){2}",vn="[\\ud800-\\udbff][\\udc00-\\udfff]",yn="(?:"+hn+"|"+bn+")"+"?",_n="[\\ufe0e\\ufe0f]?"+yn+("(?:\\u200d(?:"+[pn,gn,vn].join("|")+")[\\ufe0e\\ufe0f]?"+yn+")*"),kn="(?:"+[pn+hn+"?",hn,gn,vn,sn].join("|")+")",xn=RegExp(bn+"(?="+bn+")|"+kn+_n,"g");var mn=function(e){for(var n=xn.lastIndex=0;xn.test(e);)++n;return n};var jn=function(e){return E(e)?mn(e):ln(e)};var Sn=function(e){if(null==e)return 0;if(xe(e))return dn(e)?jn(e):e.length;var n=un(e);return"[object Map]"==n||"[object Set]"==n?e.size:Le(e).length},wn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,On=/^\w*$/;var En=function(e,n){if(o(e))return!1;var r=t(e);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_(e))||(On.test(e)||!wn.test(e)||null!=n&&e in Object(n))},An=Xe(Object,"create");var Cn=function(){this.__data__=An?An(null):{},this.size=0};var zn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Rn=Object.prototype.hasOwnProperty;var Tn=function(e){var n=this.__data__;if(An){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return Rn.call(n,e)?n[e]:void 0},$n=Object.prototype.hasOwnProperty;var Un=function(e){var n=this.__data__;return An?void 0!==n[e]:$n.call(n,e)};var In=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=An&&void 0===n?"__lodash_hash_undefined__":n,this};function Ln(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Ln.prototype.clear=Cn,Ln.prototype.delete=zn,Ln.prototype.get=Tn,Ln.prototype.has=Un,Ln.prototype.set=In;var Nn=Ln;var Pn=function(){this.__data__=[],this.size=0};var Zn=function(e,n){for(var t=e.length;t--;)if(ve(e[t][0],n))return t;return-1},Dn=Array.prototype.splice;var Mn=function(e){var n=this.__data__,t=Zn(n,e);return!(t<0)&&(t==n.length-1?n.pop():Dn.call(n,t,1),--this.size,!0)};var Fn=function(e){var n=this.__data__,t=Zn(n,e);return t<0?void 0:n[t][1]};var Gn=function(e){return Zn(this.__data__,e)>-1};var Vn=function(e,n){var t=this.__data__,r=Zn(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function Bn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Bn.prototype.clear=Pn,Bn.prototype.delete=Mn,Bn.prototype.get=Fn,Bn.prototype.has=Gn,Bn.prototype.set=Vn;var Wn=Bn;var Yn=function(){this.size=0,this.__data__={hash:new Nn,map:new(Ke||Wn),string:new Nn}};var Hn=function(e){var n=t(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var Jn=function(e,n){var t=e.__data__;return Hn(n)?t["string"==typeof n?"string":"hash"]:t.map};var Xn=function(e){var n=Jn(this,e).delete(e);return this.size-=n?1:0,n};var qn=function(e){return Jn(this,e).get(e)};var Kn=function(e){return Jn(this,e).has(e)};var Qn=function(e,n){var t=Jn(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function et(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}et.prototype.clear=Yn,et.prototype.delete=Xn,et.prototype.get=qn,et.prototype.has=Kn,et.prototype.set=Qn;var nt=et;function tt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],f=t.cache;if(f.has(a))return f.get(a);var c=e.apply(this,r);return t.cache=f.set(a,c)||f,c};return t.cache=new(tt.Cache||nt),t}tt.Cache=nt;var rt=tt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ft=/\\(\\)?/g,ct=function(e){var n=rt(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(at,(function(e,t,r,a){n.push(r?a.replace(ft,"$1"):t||e)})),n}));var it=function(e,n){return o(e)?e:En(e,n)?[e]:ct(j(e))};var ot=function(e){if("string"==typeof e||_(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var ut=function(e,n){for(var t=0,r=(n=it(n,e)).length;null!=e&&t<r;)e=e[ot(n[t++])];return t&&t==r?e:void 0};var dt=function(e,n,t){var r=null==e?void 0:ut(e,n);return void 0===r?t:r},lt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function st(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=ze(e," ");if(2!==Sn(n))return e;var t=n[0].trim();t=ge(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=dt(lt,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}var ht={props:{text:{type:String,default:""},textColor:{type:String,default:"white"},backgroundColor:{type:String,default:"red"}},data:function(){return{}},mounted:function(){},computed:{useStyle:function(){return{padding:"2px 8px 3px","font-size":"0.8rem","border-radius":"10px","white-space":"nowrap",color:st(this.textColor),"background-color":st(this.backgroundColor)}}},methods:{}};function bt(e,n,t,r,a,f,c,i,o,u){"boolean"!=typeof c&&(o=i,i=c,c=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),f?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(f)},l._ssrRegister=d):n&&(d=c?function(e){n.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,i(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,d):[d]}return t}var pt,gt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function vt(e){return function(e,n){return function(e,n){var t=gt?n.media||"default":e,r=yt[t]||(yt[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===pt&&(pt=document.head||document.getElementsByTagName("head")[0]),pt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var f=r.ids.size-1,c=document.createTextNode(a),i=r.element.childNodes;i[f]&&r.element.removeChild(i[f]),i.length?r.element.insertBefore(c,i[f]):r.element.appendChild(c)}}}(e,n)}}var yt={};const _t=ht;var kt=function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticStyle:{display:"inline-block",margin:"5px 20px 5px 0px",position:"relative"}},[this._t("default"),this._v(" "),n("div",{staticStyle:{position:"absolute",top:"0px",right:"10px",transform:"translateX(100%) translateY(-50%)"}},[n("span",{style:this.useStyle},[this._v(this._s(this.text))])])],2)};kt._withStripped=!0;return bt({render:kt,staticRenderFns:[]},(function(e){e&&e("data-v-0febf5df_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WBadge.vue"},media:void 0})}),_t,"data-v-0febf5df",!1,void 0,!1,vt,void 0,void 0)}));
//# sourceMappingURL=w-badge.umd.js.map
