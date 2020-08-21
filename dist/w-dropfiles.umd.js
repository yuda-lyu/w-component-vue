/*!
 * w-dropfiles v1.4.11
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self)["w-dropfiles"]=n()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&t.path)}},t.exports),t.exports}var t=n((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),r="object"==t(e)&&e&&e.Object===Object&&e,a="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,f=r||a||Function("return this")(),o=f.Symbol;var c=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},i=Array.isArray,u=Object.prototype,d=u.hasOwnProperty,l=u.toString,s=o?o.toStringTag:void 0;var p=function(e){var n=d.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=l.call(e);return r&&(n?e[s]=t:delete e[s]),a},h=Object.prototype.toString;var b=function(e){return h.call(e)},v=o?o.toStringTag:void 0;var g=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?p(e):b(e)};var y=function(e){return null!=e&&"object"==t(e)};var _=function(e){return"symbol"==t(e)||y(e)&&"[object Symbol]"==g(e)},m=o?o.prototype:void 0,k=m?m.toString:void 0;var j=function e(n){if("string"==typeof n)return n;if(i(n))return c(n,e)+"";if(_(n))return k?k.call(n):"";var t=n+"";return"0"==t&&1/n==-Infinity?"-0":t};var x=function(e){return null==e?"":j(e)};var w=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var f=Array(a);++r<a;)f[r]=e[r+n];return f};var O=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:w(e,n,t)},A=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var C=function(e){return A.test(e)};var S=function(e){return e.split("")},E="[\\ud800-\\udfff]",I="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",T="\\ud83c[\\udffb-\\udfff]",L="[^\\ud800-\\udfff]",R="(?:\\ud83c[\\udde6-\\uddff]){2}",D="[\\ud800-\\udbff][\\udc00-\\udfff]",$="(?:"+I+"|"+T+")"+"?",z="[\\ufe0e\\ufe0f]?"+$+("(?:\\u200d(?:"+[L,R,D].join("|")+")[\\ufe0e\\ufe0f]?"+$+")*"),P="(?:"+[L+I+"?",I,R,D,E].join("|")+")",U=RegExp(T+"(?="+T+")|"+P+z,"g");var M=function(e){return e.match(U)||[]};var N=function(e){return C(e)?M(e):S(e)};var F=function(e){return function(n){n=x(n);var t=C(n)?N(n):void 0,r=t?t[0]:n.charAt(0),a=t?O(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var B=function(e){return F(x(e).toLowerCase())};var Z=function(e,n,t,r){var a=-1,f=null==e?0:e.length;for(r&&f&&(t=e[++a]);++a<f;)t=n(t,e[a],a,e);return t};var V=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),W=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,G=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var H=function(e){return(e=x(e))&&e.replace(W,V).replace(G,"")},q=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var J=function(e){return e.match(q)||[]},Y=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var X=function(e){return Y.test(e)},K="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="["+K+"]",ee="\\d+",ne="[\\u2700-\\u27bf]",te="[a-z\\xdf-\\xf6\\xf8-\\xff]",re="[^\\ud800-\\udfff"+K+ee+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ae="(?:\\ud83c[\\udde6-\\uddff]){2}",fe="[\\ud800-\\udbff][\\udc00-\\udfff]",oe="[A-Z\\xc0-\\xd6\\xd8-\\xde]",ce="(?:"+te+"|"+re+")",ie="(?:"+oe+"|"+re+")",ue="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",de="[\\ufe0e\\ufe0f]?"+ue+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ae,fe].join("|")+")[\\ufe0e\\ufe0f]?"+ue+")*"),le="(?:"+[ne,ae,fe].join("|")+")"+de,se=RegExp([oe+"?"+te+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Q,oe,"$"].join("|")+")",ie+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Q,oe+ce,"$"].join("|")+")",oe+"?"+ce+"+(?:['’](?:d|ll|m|re|s|t|ve))?",oe+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ee,le].join("|"),"g");var pe=function(e){return e.match(se)||[]};var he=function(e,n,t){return e=x(e),void 0===(n=t?void 0:n)?X(e)?pe(e):J(e):e.match(n)||[]},be=RegExp("['’]","g");var ve=function(e){return function(n){return Z(he(H(n).replace(be,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?B(n):n)}));var ge=function(e,n){return e===n||e!=e&&n!=n};var ye=function(e){var n=t(e);return null!=e&&("object"==n||"function"==n)};var _e=function(e){if(!ye(e))return!1;var n=g(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var me=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var ke=function(e){return null!=e&&me(e.length)&&!_e(e)},je=/^(?:0|[1-9]\d*)$/;var xe=function(e,n){var r=t(e);return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&je.test(e))&&e>-1&&e%1==0&&e<n};var we=function(e,n,r){if(!ye(r))return!1;var a=t(n);return!!("number"==a?ke(r)&&xe(n,r.length):"string"==a&&n in r)&&ge(r[n],e)};var Oe=function(e){return y(e)&&"[object RegExp]"==g(e)};var Ae=function(e){return function(n){return e(n)}},Ce=n((function(e,n){var t=n&&!n.nodeType&&n,a=t&&e&&!e.nodeType&&e,f=a&&a.exports===t&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||f&&f.binding&&f.binding("util")}catch(e){}}();e.exports=o})),Se=Ce&&Ce.isRegExp,Ee=Se?Ae(Se):Oe;var Ie=function(e,n,t){return t&&"number"!=typeof t&&we(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=x(e))&&("string"==typeof n||null!=n&&!Ee(n))&&!(n=j(n))&&C(e)?O(N(e),0,t):e.split(n,t):[]},Te=Object.prototype;var Le=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Te)};var Re=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),De=Object.prototype.hasOwnProperty;var $e,ze=function(e){if(!Le(e))return Re(e);var n=[];for(var t in Object(e))De.call(e,t)&&"constructor"!=t&&n.push(t);return n},Pe=f["__core-js_shared__"],Ue=($e=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||""))?"Symbol(src)_1."+$e:"";var Me=function(e){return!!Ue&&Ue in e},Ne=Function.prototype.toString;var Fe=function(e){if(null!=e){try{return Ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Be=/^\[object .+?Constructor\]$/,Ze=Function.prototype,Ve=Object.prototype,We=Ze.toString,Ge=Ve.hasOwnProperty,He=RegExp("^"+We.call(Ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var qe=function(e){return!(!ye(e)||Me(e))&&(_e(e)?He:Be).test(Fe(e))};var Je=function(e,n){return null==e?void 0:e[n]};var Ye=function(e,n){var t=Je(e,n);return qe(t)?t:void 0},Xe=Ye(f,"DataView"),Ke=Ye(f,"Map"),Qe=Ye(f,"Promise"),en=Ye(f,"Set"),nn=Ye(f,"WeakMap"),tn=Fe(Xe),rn=Fe(Ke),an=Fe(Qe),fn=Fe(en),on=Fe(nn),cn=g;(Xe&&"[object DataView]"!=cn(new Xe(new ArrayBuffer(1)))||Ke&&"[object Map]"!=cn(new Ke)||Qe&&"[object Promise]"!=cn(Qe.resolve())||en&&"[object Set]"!=cn(new en)||nn&&"[object WeakMap]"!=cn(new nn))&&(cn=function(e){var n=g(e),t="[object Object]"==n?e.constructor:void 0,r=t?Fe(t):"";if(r)switch(r){case tn:return"[object DataView]";case rn:return"[object Map]";case an:return"[object Promise]";case fn:return"[object Set]";case on:return"[object WeakMap]"}return n});var un=cn;var dn=function(e){return"string"==typeof e||!i(e)&&y(e)&&"[object String]"==g(e)};var ln=function(e){return function(n){return null==n?void 0:n[e]}}("length"),sn="[\\ud800-\\udfff]",pn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",hn="\\ud83c[\\udffb-\\udfff]",bn="[^\\ud800-\\udfff]",vn="(?:\\ud83c[\\udde6-\\uddff]){2}",gn="[\\ud800-\\udbff][\\udc00-\\udfff]",yn="(?:"+pn+"|"+hn+")"+"?",_n="[\\ufe0e\\ufe0f]?"+yn+("(?:\\u200d(?:"+[bn,vn,gn].join("|")+")[\\ufe0e\\ufe0f]?"+yn+")*"),mn="(?:"+[bn+pn+"?",pn,vn,gn,sn].join("|")+")",kn=RegExp(hn+"(?="+hn+")|"+mn+_n,"g");var jn=function(e){for(var n=kn.lastIndex=0;kn.test(e);)++n;return n};var xn=function(e){return C(e)?jn(e):ln(e)};var wn=function(e){if(null==e)return 0;if(ke(e))return dn(e)?xn(e):e.length;var n=un(e);return"[object Map]"==n||"[object Set]"==n?e.size:ze(e).length},On=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,An=/^\w*$/;var Cn=function(e,n){if(i(e))return!1;var r=t(e);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_(e))||(An.test(e)||!On.test(e)||null!=n&&e in Object(n))},Sn=Ye(Object,"create");var En=function(){this.__data__=Sn?Sn(null):{},this.size=0};var In=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Tn=Object.prototype.hasOwnProperty;var Ln=function(e){var n=this.__data__;if(Sn){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return Tn.call(n,e)?n[e]:void 0},Rn=Object.prototype.hasOwnProperty;var Dn=function(e){var n=this.__data__;return Sn?void 0!==n[e]:Rn.call(n,e)};var $n=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Sn&&void 0===n?"__lodash_hash_undefined__":n,this};function zn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}zn.prototype.clear=En,zn.prototype.delete=In,zn.prototype.get=Ln,zn.prototype.has=Dn,zn.prototype.set=$n;var Pn=zn;var Un=function(){this.__data__=[],this.size=0};var Mn=function(e,n){for(var t=e.length;t--;)if(ge(e[t][0],n))return t;return-1},Nn=Array.prototype.splice;var Fn=function(e){var n=this.__data__,t=Mn(n,e);return!(t<0)&&(t==n.length-1?n.pop():Nn.call(n,t,1),--this.size,!0)};var Bn=function(e){var n=this.__data__,t=Mn(n,e);return t<0?void 0:n[t][1]};var Zn=function(e){return Mn(this.__data__,e)>-1};var Vn=function(e,n){var t=this.__data__,r=Mn(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function Wn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Wn.prototype.clear=Un,Wn.prototype.delete=Fn,Wn.prototype.get=Bn,Wn.prototype.has=Zn,Wn.prototype.set=Vn;var Gn=Wn;var Hn=function(){this.size=0,this.__data__={hash:new Pn,map:new(Ke||Gn),string:new Pn}};var qn=function(e){var n=t(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var Jn=function(e,n){var t=e.__data__;return qn(n)?t["string"==typeof n?"string":"hash"]:t.map};var Yn=function(e){var n=Jn(this,e).delete(e);return this.size-=n?1:0,n};var Xn=function(e){return Jn(this,e).get(e)};var Kn=function(e){return Jn(this,e).has(e)};var Qn=function(e,n){var t=Jn(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function et(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}et.prototype.clear=Hn,et.prototype.delete=Yn,et.prototype.get=Xn,et.prototype.has=Kn,et.prototype.set=Qn;var nt=et;function tt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],f=t.cache;if(f.has(a))return f.get(a);var o=e.apply(this,r);return t.cache=f.set(a,o)||f,o};return t.cache=new(tt.Cache||nt),t}tt.Cache=nt;var rt=tt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ft=/\\(\\)?/g,ot=function(e){var n=rt(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(at,(function(e,t,r,a){n.push(r?a.replace(ft,"$1"):t||e)})),n}));var ct=function(e,n){return i(e)?e:Cn(e,n)?[e]:ot(x(e))};var it=function(e){if("string"==typeof e||_(e))return e;var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var ut=function(e,n){for(var t=0,r=(n=ct(n,e)).length;null!=e&&t<r;)e=e[it(n[t++])];return t&&t==r?e:void 0};var dt=function(e,n,t){var r=null==e?void 0:ut(e,n);return void 0===r?t:r},lt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function st(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Ie(e," ");if(2!==wn(n))return e;var t=n[0].trim();t=ve(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=dt(lt,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}var pt=function(e,n){return c(n,(function(n){return e[n]}))};var ht=function(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r};var bt=function(e){return y(e)&&"[object Arguments]"==g(e)},vt=Object.prototype,gt=vt.hasOwnProperty,yt=vt.propertyIsEnumerable,_t=bt(function(){return arguments}())?bt:function(e){return y(e)&&gt.call(e,"callee")&&!yt.call(e,"callee")};var mt=function(){return!1},kt=n((function(e,n){var t=n&&!n.nodeType&&n,r=t&&e&&!e.nodeType&&e,a=r&&r.exports===t?f.Buffer:void 0,o=(a?a.isBuffer:void 0)||mt;e.exports=o})),jt={};jt["[object Float32Array]"]=jt["[object Float64Array]"]=jt["[object Int8Array]"]=jt["[object Int16Array]"]=jt["[object Int32Array]"]=jt["[object Uint8Array]"]=jt["[object Uint8ClampedArray]"]=jt["[object Uint16Array]"]=jt["[object Uint32Array]"]=!0,jt["[object Arguments]"]=jt["[object Array]"]=jt["[object ArrayBuffer]"]=jt["[object Boolean]"]=jt["[object DataView]"]=jt["[object Date]"]=jt["[object Error]"]=jt["[object Function]"]=jt["[object Map]"]=jt["[object Number]"]=jt["[object Object]"]=jt["[object RegExp]"]=jt["[object Set]"]=jt["[object String]"]=jt["[object WeakMap]"]=!1;var xt=function(e){return y(e)&&me(e.length)&&!!jt[g(e)]},wt=Ce&&Ce.isTypedArray,Ot=wt?Ae(wt):xt,At=Object.prototype.hasOwnProperty;var Ct=function(e,n){var t=i(e),r=!t&&_t(e),a=!t&&!r&&kt(e),f=!t&&!r&&!a&&Ot(e),o=t||r||a||f,c=o?ht(e.length,String):[],u=c.length;for(var d in e)!n&&!At.call(e,d)||o&&("length"==d||a&&("offset"==d||"parent"==d)||f&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||xe(d,u))||c.push(d);return c};var St=function(e){return ke(e)?Ct(e):ze(e)};var Et=function(e){return null==e?[]:pt(e,St(e))},It=n((function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}function a(e,n,t){this.fn=e,this.context=n,this.once=t||!1}function f(e,n,r,f,o){if("function"!=typeof r)throw new TypeError("The listener must be a function");var c=new a(r,f||e,o),i=t?t+n:n;return e._events[i]?e._events[i].fn?e._events[i]=[e._events[i],c]:e._events[i].push(c):(e._events[i]=c,e._eventsCount++),e}function o(e,n){0==--e._eventsCount?e._events=new r:delete e._events[n]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(t=!1)),c.prototype.eventNames=function(){var e,r,a=[];if(0===this._eventsCount)return a;for(r in e=this._events)n.call(e,r)&&a.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(e)):a},c.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var a=0,f=r.length,o=new Array(f);a<f;a++)o[a]=r[a].fn;return o},c.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},c.prototype.emit=function(e,n,r,a,f,o){var c=t?t+e:e;if(!this._events[c])return!1;var i,u,d=this._events[c],l=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),l){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,n),!0;case 3:return d.fn.call(d.context,n,r),!0;case 4:return d.fn.call(d.context,n,r,a),!0;case 5:return d.fn.call(d.context,n,r,a,f),!0;case 6:return d.fn.call(d.context,n,r,a,f,o),!0}for(u=1,i=new Array(l-1);u<l;u++)i[u-1]=arguments[u];d.fn.apply(d.context,i)}else{var s,p=d.length;for(u=0;u<p;u++)switch(d[u].once&&this.removeListener(e,d[u].fn,void 0,!0),l){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,n);break;case 3:d[u].fn.call(d[u].context,n,r);break;case 4:d[u].fn.call(d[u].context,n,r,a);break;default:if(!i)for(s=1,i=new Array(l-1);s<l;s++)i[s-1]=arguments[s];d[u].fn.apply(d[u].context,i)}}return!0},c.prototype.on=function(e,n,t){return f(this,e,n,t,!1)},c.prototype.once=function(e,n,t){return f(this,e,n,t,!0)},c.prototype.removeListener=function(e,n,r,a){var f=t?t+e:e;if(!this._events[f])return this;if(!n)return o(this,f),this;var c=this._events[f];if(c.fn)c.fn!==n||a&&!c.once||r&&c.context!==r||o(this,f);else{for(var i=0,u=[],d=c.length;i<d;i++)(c[i].fn!==n||a&&!c[i].once||r&&c[i].context!==r)&&u.push(c[i]);u.length?this._events[f]=1===u.length?u[0]:u:o(this,f)}return this},c.prototype.removeAllListeners=function(e){var n;return e?(n=t?t+e:e,this._events[n]&&o(this,n)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=t,c.EventEmitter=c,e.exports=c}));function Tt(e){var n=!1,t=!1,r=new It;function a(e){e.stopPropagation(),e.preventDefault(),t=!0,!1===n&&(n=!0,r.emit("dropIn",e))}function f(e){e.stopPropagation(),e.preventDefault(),t=!1,setTimeout((function(){t||(n=!1,r.emit("dropOut",e))}),100)}function o(e){a(e)}function c(e){f(e)}function i(e){a(e);var n=Et(e.dataTransfer.files);r.emit("getFiles",{files:n,e:e,cb:function(){f(e)}})}return e.addEventListener("dragenter",o,!1),e.addEventListener("dragover",o,!1),e.addEventListener("dragleave",c,!1),e.addEventListener("drop",i,!1),r.off=function(){e.removeEventListener("dragenter",o,!1),e.removeEventListener("dragover",o,!1),e.removeEventListener("dragleave",c,!1),e.removeEventListener("drop",i,!1)},r}var Lt={components:{},props:{backgroundColor:{type:String,default:"transparent"},backgroundColorDropIn:{type:String,default:"grey lighten-4"},backgroundColorHover:{type:String,default:"grey lighten-5"},styleTransition:{type:String,default:"all 0.3s linear"},borderRadius:{type:Number,default:6},borderWidth:{type:Number,default:1},borderColor:{type:String,default:"grey lighten-2"},borderColorDropIn:{type:String,default:"grey lighten-2"},borderColorHover:{type:String,default:"grey lighten-2"}},data:function(){return{ev:null,bMouseIn:!1,bDropIn:!1}},mounted:function(){var e=this;e.ev=Tt(e.$refs.dropPanel),e.ev.on("getFiles",(function(n){var t=n.files,r=n.cb;e.$emit("get-files",t,e.$refs.dropPanel),r()})),e.ev.on("dropIn",(function(){e.bDropIn=!0,e.$emit("drop-in",e.$refs.dropPanel)})),e.ev.on("dropOut",(function(){e.bDropIn=!1,e.$emit("drop-out",e.$refs.dropPanel)}))},beforeDestroy:function(){this.ev.off()},computed:{useBorderColor:function(){var e=this;return e.bDropIn?st(e.borderColorDropIn):e.bMouseIn?st(e.borderColorHover):st(e.borderColor)},useBackgroundColor:function(){var e=this;return e.bDropIn?st(e.backgroundColorDropIn):e.bMouseIn?st(e.backgroundColorHover):st(e.backgroundColor)}},methods:{}};function Rt(e,n,t,r,a,f,o,c,i,u){"boolean"!=typeof o&&(i=c,c=o,o=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),f?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,i(e)),e&&e._registeredComponents&&e._registeredComponents.add(f)},l._ssrRegister=d):n&&(d=o?function(e){n.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,d):[d]}return t}var Dt,$t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function zt(e){return function(e,n){return function(e,n){var t=$t?n.media||"default":e,r=Pt[t]||(Pt[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===Dt&&(Dt=document.head||document.getElementsByTagName("head")[0]),Dt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var f=r.ids.size-1,o=document.createTextNode(a),c=r.element.childNodes;c[f]&&r.element.removeChild(c[f]),c.length?r.element.insertBefore(o,c[f]):r.element.appendChild(o)}}}(e,n)}}var Pt={};const Ut=Lt;var Mt=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{ref:"dropPanel",style:"border:"+e.borderWidth+"px solid "+e.useBorderColor+"; border-radius:"+e.borderRadius+"px; background:"+e.useBackgroundColor+"; transition:"+e.styleTransition+";",on:{mouseenter:function(n){e.bMouseIn=!0},mouseleave:function(n){e.bMouseIn=!1}}},[e._t("default")],2)};Mt._withStripped=!0;return Rt({render:Mt,staticRenderFns:[]},(function(e){e&&e("data-v-75394a3b_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WDropfiles.vue"},media:void 0})}),Ut,"data-v-75394a3b",false,undefined,!1,zt,void 0,void 0)}));
//# sourceMappingURL=w-dropfiles.umd.js.map
