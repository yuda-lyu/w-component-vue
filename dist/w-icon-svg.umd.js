/*!
 * w-icon-svg v1.4.30
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self)["w-icon-svg"]=n()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&t.path)}},t.exports),t.exports}var t=n((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),r="object"==t(e)&&e&&e.Object===Object&&e,a="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,f=r||a||Function("return this")(),c=f.Symbol;var i=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},o=Array.isArray,u=Object.prototype,d=u.hasOwnProperty,l=u.toString,s=c?c.toStringTag:void 0;var h=function(e){var n=d.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=l.call(e);return r&&(n?e[s]=t:delete e[s]),a},b=Object.prototype.toString;var p=function(e){return b.call(e)},g=c?c.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":g&&g in Object(e)?h(e):p(e)};var y=function(e){return null!=e&&"object"==t(e)};var _=function(e){return"symbol"==t(e)||y(e)&&"[object Symbol]"==v(e)},k=c?c.prototype:void 0,m=k?k.toString:void 0;var x=function e(n){if("string"==typeof n)return n;if(o(n))return i(n,e)+"";if(_(n))return m?m.call(n):"";var t=n+"";return"0"==t&&1/n==-Infinity?"-0":t};var j=function(e){return null==e?"":x(e)};var O=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var f=Array(a);++r<a;)f[r]=e[r+n];return f};var w=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:O(e,n,t)},S=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var E=function(e){return S.test(e)};var z=function(e){return e.split("")},A="[\\ud800-\\udfff]",C="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",T="\\ud83c[\\udffb-\\udfff]",R="[^\\ud800-\\udfff]",I="(?:\\ud83c[\\udde6-\\uddff]){2}",$="[\\ud800-\\udbff][\\udc00-\\udfff]",U="(?:"+C+"|"+T+")"+"?",N="[\\ufe0e\\ufe0f]?",P=N+U+("(?:\\u200d(?:"+[R,I,$].join("|")+")"+N+U+")*"),L="(?:"+[R+C+"?",C,I,$,A].join("|")+")",Z=RegExp(T+"(?="+T+")|"+L+P,"g");var D=function(e){return e.match(Z)||[]};var F=function(e){return E(e)?D(e):z(e)};var G=function(e){return function(n){n=j(n);var t=E(n)?F(n):void 0,r=t?t[0]:n.charAt(0),a=t?w(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var M=function(e){return G(j(e).toLowerCase())};var B=function(e,n,t,r){var a=-1,f=null==e?0:e.length;for(r&&f&&(t=e[++a]);++a<f;)t=n(t,e[a],a,e);return t};var H=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),V=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,q=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var W=function(e){return(e=j(e))&&e.replace(V,H).replace(q,"")},J=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var Y=function(e){return e.match(J)||[]},X=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var K=function(e){return X.test(e)},Q="\\u2700-\\u27bf",ee="a-z\\xdf-\\xf6\\xf8-\\xff",ne="A-Z\\xc0-\\xd6\\xd8-\\xde",te="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",re="["+te+"]",ae="\\d+",fe="[\\u2700-\\u27bf]",ce="["+ee+"]",ie="[^\\ud800-\\udfff"+te+ae+Q+ee+ne+"]",oe="(?:\\ud83c[\\udde6-\\uddff]){2}",ue="[\\ud800-\\udbff][\\udc00-\\udfff]",de="["+ne+"]",le="(?:"+ce+"|"+ie+")",se="(?:"+de+"|"+ie+")",he="(?:['’](?:d|ll|m|re|s|t|ve))?",be="(?:['’](?:D|LL|M|RE|S|T|VE))?",pe="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",ge="[\\ufe0e\\ufe0f]?",ve=ge+pe+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",oe,ue].join("|")+")"+ge+pe+")*"),ye="(?:"+[fe,oe,ue].join("|")+")"+ve,_e=RegExp([de+"?"+ce+"+"+he+"(?="+[re,de,"$"].join("|")+")",se+"+"+be+"(?="+[re,de+le,"$"].join("|")+")",de+"?"+le+"+"+he,de+"+"+be,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ae,ye].join("|"),"g");var ke=function(e){return e.match(_e)||[]};var me=function(e,n,t){return e=j(e),void 0===(n=t?void 0:n)?K(e)?ke(e):Y(e):e.match(n)||[]},xe=RegExp("['’]","g");var je=function(e){return function(n){return B(me(W(n).replace(xe,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?M(n):n)}));var Oe=function(e,n){return e===n||e!=e&&n!=n};var we=function(e){var n=t(e);return null!=e&&("object"==n||"function"==n)};var Se=function(e){if(!we(e))return!1;var n=v(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var Ee=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var ze=function(e){return null!=e&&Ee(e.length)&&!Se(e)},Ae=/^(?:0|[1-9]\d*)$/;var Ce=function(e,n){var r=t(e);return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&Ae.test(e))&&e>-1&&e%1==0&&e<n};var Te=function(e,n,r){if(!we(r))return!1;var a=t(n);return!!("number"==a?ze(r)&&Ce(n,r.length):"string"==a&&n in r)&&Oe(r[n],e)};var Re=function(e){return y(e)&&"[object RegExp]"==v(e)};var Ie=function(e){return function(n){return e(n)}},$e=n((function(e,n){var t=n&&!n.nodeType&&n,a=t&&e&&!e.nodeType&&e,f=a&&a.exports===t&&r.process,c=function(){try{var e=a&&a.require&&a.require("util").types;return e||f&&f.binding&&f.binding("util")}catch(e){}}();e.exports=c})),Ue=$e&&$e.isRegExp,Ne=Ue?Ie(Ue):Re;var Pe=function(e,n,t){return t&&"number"!=typeof t&&Te(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=j(e))&&("string"==typeof n||null!=n&&!Ne(n))&&!(n=x(n))&&E(e)?w(F(e),0,t):e.split(n,t):[]},Le=Object.prototype;var Ze=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Le)};var De=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Fe=Object.prototype.hasOwnProperty;var Ge,Me=function(e){if(!Ze(e))return De(e);var n=[];for(var t in Object(e))Fe.call(e,t)&&"constructor"!=t&&n.push(t);return n},Be=f["__core-js_shared__"],He=(Ge=/[^.]+$/.exec(Be&&Be.keys&&Be.keys.IE_PROTO||""))?"Symbol(src)_1."+Ge:"";var Ve=function(e){return!!He&&He in e},qe=Function.prototype.toString;var We=function(e){if(null!=e){try{return qe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Je=/^\[object .+?Constructor\]$/,Ye=Function.prototype,Xe=Object.prototype,Ke=Ye.toString,Qe=Xe.hasOwnProperty,en=RegExp("^"+Ke.call(Qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var nn=function(e){return!(!we(e)||Ve(e))&&(Se(e)?en:Je).test(We(e))};var tn=function(e,n){return null==e?void 0:e[n]};var rn=function(e,n){var t=tn(e,n);return nn(t)?t:void 0},an=rn(f,"DataView"),fn=rn(f,"Map"),cn=rn(f,"Promise"),on=rn(f,"Set"),un=rn(f,"WeakMap"),dn="[object Map]",ln="[object Promise]",sn="[object Set]",hn="[object WeakMap]",bn="[object DataView]",pn=We(an),gn=We(fn),vn=We(cn),yn=We(on),_n=We(un),kn=v;(an&&kn(new an(new ArrayBuffer(1)))!=bn||fn&&kn(new fn)!=dn||cn&&kn(cn.resolve())!=ln||on&&kn(new on)!=sn||un&&kn(new un)!=hn)&&(kn=function(e){var n=v(e),t="[object Object]"==n?e.constructor:void 0,r=t?We(t):"";if(r)switch(r){case pn:return bn;case gn:return dn;case vn:return ln;case yn:return sn;case _n:return hn}return n});var mn=kn;var xn=function(e){return"string"==typeof e||!o(e)&&y(e)&&"[object String]"==v(e)};var jn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),On="[\\ud800-\\udfff]",wn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Sn="\\ud83c[\\udffb-\\udfff]",En="[^\\ud800-\\udfff]",zn="(?:\\ud83c[\\udde6-\\uddff]){2}",An="[\\ud800-\\udbff][\\udc00-\\udfff]",Cn="(?:"+wn+"|"+Sn+")"+"?",Tn="[\\ufe0e\\ufe0f]?",Rn=Tn+Cn+("(?:\\u200d(?:"+[En,zn,An].join("|")+")"+Tn+Cn+")*"),In="(?:"+[En+wn+"?",wn,zn,An,On].join("|")+")",$n=RegExp(Sn+"(?="+Sn+")|"+In+Rn,"g");var Un=function(e){for(var n=$n.lastIndex=0;$n.test(e);)++n;return n};var Nn=function(e){return E(e)?Un(e):jn(e)};var Pn=function(e){if(null==e)return 0;if(ze(e))return xn(e)?Nn(e):e.length;var n=mn(e);return"[object Map]"==n||"[object Set]"==n?e.size:Me(e).length},Ln=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zn=/^\w*$/;var Dn=function(e,n){if(o(e))return!1;var r=t(e);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_(e))||(Zn.test(e)||!Ln.test(e)||null!=n&&e in Object(n))},Fn=rn(Object,"create");var Gn=function(){this.__data__=Fn?Fn(null):{},this.size=0};var Mn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Bn=Object.prototype.hasOwnProperty;var Hn=function(e){var n=this.__data__;if(Fn){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return Bn.call(n,e)?n[e]:void 0},Vn=Object.prototype.hasOwnProperty;var qn=function(e){var n=this.__data__;return Fn?void 0!==n[e]:Vn.call(n,e)};var Wn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Fn&&void 0===n?"__lodash_hash_undefined__":n,this};function Jn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Jn.prototype.clear=Gn,Jn.prototype.delete=Mn,Jn.prototype.get=Hn,Jn.prototype.has=qn,Jn.prototype.set=Wn;var Yn=Jn;var Xn=function(){this.__data__=[],this.size=0};var Kn=function(e,n){for(var t=e.length;t--;)if(Oe(e[t][0],n))return t;return-1},Qn=Array.prototype.splice;var et=function(e){var n=this.__data__,t=Kn(n,e);return!(t<0)&&(t==n.length-1?n.pop():Qn.call(n,t,1),--this.size,!0)};var nt=function(e){var n=this.__data__,t=Kn(n,e);return t<0?void 0:n[t][1]};var tt=function(e){return Kn(this.__data__,e)>-1};var rt=function(e,n){var t=this.__data__,r=Kn(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function at(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}at.prototype.clear=Xn,at.prototype.delete=et,at.prototype.get=nt,at.prototype.has=tt,at.prototype.set=rt;var ft=at;var ct=function(){this.size=0,this.__data__={hash:new Yn,map:new(fn||ft),string:new Yn}};var it=function(e){var n=t(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var ot=function(e,n){var t=e.__data__;return it(n)?t["string"==typeof n?"string":"hash"]:t.map};var ut=function(e){var n=ot(this,e).delete(e);return this.size-=n?1:0,n};var dt=function(e){return ot(this,e).get(e)};var lt=function(e){return ot(this,e).has(e)};var st=function(e,n){var t=ot(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function ht(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ht.prototype.clear=ct,ht.prototype.delete=ut,ht.prototype.get=dt,ht.prototype.has=lt,ht.prototype.set=st;var bt=ht;function pt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],f=t.cache;if(f.has(a))return f.get(a);var c=e.apply(this,r);return t.cache=f.set(a,c)||f,c};return t.cache=new(pt.Cache||bt),t}pt.Cache=bt;var gt=pt;var vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yt=/\\(\\)?/g,_t=function(e){var n=gt(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(vt,(function(e,t,r,a){n.push(r?a.replace(yt,"$1"):t||e)})),n}));var kt=function(e,n){return o(e)?e:Dn(e,n)?[e]:_t(j(e))};var mt=function(e){if("string"==typeof e||_(e))return e;var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var xt=function(e,n){for(var t=0,r=(n=kt(n,e)).length;null!=e&&t<r;)e=e[mt(n[t++])];return t&&t==r?e:void 0};var jt=function(e,n,t){var r=null==e?void 0:xt(e,n);return void 0===r?t:r},Ot={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function wt(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Pe(e," ");if(2!==Pn(n))return e;var t=n[0].trim();t=je(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=jt(Ot,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}var St={components:{},props:{color:{type:String,default:"grey darken-1"},colorHover:{type:String,default:"grey darken-3"},sizeOriginal:{type:Number,default:24},size:{type:Number,default:24},path:{type:[String,Array],default:""},styleTransition:{type:String,default:"all 0.5s linear"}},data:function(){return{mouseEnter:!1,paths:[]}},computed:{usePaths:function(){var e,n=this,t=n.path;return e=n.path,"[object Array]"!==Object.prototype.toString.call(e)&&(t=[n.path]),t},useIconColor:function(){var e=this;return e.mouseEnter?wt(e.colorHover):wt(e.color)}},methods:{}};function Et(e,n,t,r,a,f,c,i,o,u){"boolean"!=typeof c&&(o=i,i=c,c=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),f?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(f)},l._ssrRegister=d):n&&(d=c?function(e){n.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,i(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,d):[d]}return t}var zt,At="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Ct(e){return function(e,n){return function(e,n){var t=At?n.media||"default":e,r=Tt[t]||(Tt[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===zt&&(zt=document.head||document.getElementsByTagName("head")[0]),zt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var f=r.ids.size-1,c=document.createTextNode(a),i=r.element.childNodes;i[f]&&r.element.removeChild(i[f]),i.length?r.element.insertBefore(c,i[f]):r.element.appendChild(c)}}}(e,n)}}var Tt={};const Rt=St;var It=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{display:"inline-block"}},[t("svg",{style:"fill:"+e.useIconColor+"; transition:"+e.styleTransition+";",attrs:{width:e.size,height:e.size,viewBox:"0 0 "+e.sizeOriginal+" "+e.sizeOriginal},on:{mouseenter:function(n){e.mouseEnter=!0},mouseleave:function(n){e.mouseEnter=!1}}},e._l(e.usePaths,(function(e,n){return t("path",{key:n,attrs:{d:e}})})),0)])};It._withStripped=!0;return Et({render:It,staticRenderFns:[]},(function(e){e&&e("data-v-3134526c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconSvg.vue"},media:void 0})}),Rt,"data-v-3134526c",false,undefined,!1,Ct,void 0,void 0)}));
//# sourceMappingURL=w-icon-svg.umd.js.map
