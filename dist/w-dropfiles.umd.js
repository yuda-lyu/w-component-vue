/*!
 * w-dropfiles v1.4.36
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self)["w-dropfiles"]=n()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&t.path)}},t.exports),t.exports}var t=n((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),r="object"==t(e)&&e&&e.Object===Object&&e,a="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,o=r||a||Function("return this")(),f=o.Symbol;var c=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},i=Array.isArray,u=Object.prototype,d=u.hasOwnProperty,l=u.toString,s=f?f.toStringTag:void 0;var h=function(e){var n=d.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=l.call(e);return r&&(n?e[s]=t:delete e[s]),a},p=Object.prototype.toString;var b=function(e){return p.call(e)},v=f?f.toStringTag:void 0;var g=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?h(e):b(e)};var y=function(e){return null!=e&&"object"==t(e)};var _=function(e){return"symbol"==t(e)||y(e)&&"[object Symbol]"==g(e)},m=f?f.prototype:void 0,k=m?m.toString:void 0;var j=function e(n){if("string"==typeof n)return n;if(i(n))return c(n,e)+"";if(_(n))return k?k.call(n):"";var t=n+"";return"0"==t&&1/n==-Infinity?"-0":t};var x=function(e){return null==e?"":j(e)};var w=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var o=Array(a);++r<a;)o[r]=e[r+n];return o};var O=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:w(e,n,t)},C=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var A=function(e){return C.test(e)};var S=function(e){return e.split("")},E="[\\ud800-\\udfff]",I="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",T="\\ud83c[\\udffb-\\udfff]",R="[^\\ud800-\\udfff]",L="(?:\\ud83c[\\udde6-\\uddff]){2}",$="[\\ud800-\\udbff][\\udc00-\\udfff]",z="(?:"+I+"|"+T+")"+"?",D="[\\ufe0e\\ufe0f]?",P=D+z+("(?:\\u200d(?:"+[R,L,$].join("|")+")"+D+z+")*"),U="(?:"+[R+I+"?",I,L,$,E].join("|")+")",N=RegExp(T+"(?="+T+")|"+U+P,"g");var F=function(e){return e.match(N)||[]};var M=function(e){return A(e)?F(e):S(e)};var B=function(e){return function(n){n=x(n);var t=A(n)?M(n):void 0,r=t?t[0]:n.charAt(0),a=t?O(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var Z=function(e){return B(x(e).toLowerCase())};var G=function(e,n,t,r){var a=-1,o=null==e?0:e.length;for(r&&o&&(t=e[++a]);++a<o;)t=n(t,e[a],a,e);return t};var H=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),W=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,V=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var q=function(e){return(e=x(e))&&e.replace(W,H).replace(V,"")},J=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var Y=function(e){return e.match(J)||[]},X=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var K=function(e){return X.test(e)},Q="\\u2700-\\u27bf",ee="a-z\\xdf-\\xf6\\xf8-\\xff",ne="A-Z\\xc0-\\xd6\\xd8-\\xde",te="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",re="["+te+"]",ae="\\d+",oe="[\\u2700-\\u27bf]",fe="["+ee+"]",ce="[^\\ud800-\\udfff"+te+ae+Q+ee+ne+"]",ie="(?:\\ud83c[\\udde6-\\uddff]){2}",ue="[\\ud800-\\udbff][\\udc00-\\udfff]",de="["+ne+"]",le="(?:"+fe+"|"+ce+")",se="(?:"+de+"|"+ce+")",he="(?:['’](?:d|ll|m|re|s|t|ve))?",pe="(?:['’](?:D|LL|M|RE|S|T|VE))?",be="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",ve="[\\ufe0e\\ufe0f]?",ge=ve+be+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ie,ue].join("|")+")"+ve+be+")*"),ye="(?:"+[oe,ie,ue].join("|")+")"+ge,_e=RegExp([de+"?"+fe+"+"+he+"(?="+[re,de,"$"].join("|")+")",se+"+"+pe+"(?="+[re,de+le,"$"].join("|")+")",de+"?"+le+"+"+he,de+"+"+pe,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ae,ye].join("|"),"g");var me=function(e){return e.match(_e)||[]};var ke=function(e,n,t){return e=x(e),void 0===(n=t?void 0:n)?K(e)?me(e):Y(e):e.match(n)||[]},je=RegExp("['’]","g");var xe=function(e){return function(n){return G(ke(q(n).replace(je,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?Z(n):n)}));var we=function(e,n){return e===n||e!=e&&n!=n};var Oe=function(e){var n=t(e);return null!=e&&("object"==n||"function"==n)};var Ce=function(e){if(!Oe(e))return!1;var n=g(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var Ae=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var Se=function(e){return null!=e&&Ae(e.length)&&!Ce(e)},Ee=/^(?:0|[1-9]\d*)$/;var Ie=function(e,n){var r=t(e);return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&Ee.test(e))&&e>-1&&e%1==0&&e<n};var Te=function(e,n,r){if(!Oe(r))return!1;var a=t(n);return!!("number"==a?Se(r)&&Ie(n,r.length):"string"==a&&n in r)&&we(r[n],e)};var Re=function(e){return y(e)&&"[object RegExp]"==g(e)};var Le=function(e){return function(n){return e(n)}},$e=n((function(e,n){var t=n&&!n.nodeType&&n,a=t&&e&&!e.nodeType&&e,o=a&&a.exports===t&&r.process,f=function(){try{var e=a&&a.require&&a.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=f})),ze=$e&&$e.isRegExp,De=ze?Le(ze):Re;var Pe=function(e,n,t){return t&&"number"!=typeof t&&Te(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=x(e))&&("string"==typeof n||null!=n&&!De(n))&&!(n=j(n))&&A(e)?O(M(e),0,t):e.split(n,t):[]},Ue=Object.prototype;var Ne=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Ue)};var Fe=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Me=Object.prototype.hasOwnProperty;var Be,Ze=function(e){if(!Ne(e))return Fe(e);var n=[];for(var t in Object(e))Me.call(e,t)&&"constructor"!=t&&n.push(t);return n},Ge=o["__core-js_shared__"],He=(Be=/[^.]+$/.exec(Ge&&Ge.keys&&Ge.keys.IE_PROTO||""))?"Symbol(src)_1."+Be:"";var We=function(e){return!!He&&He in e},Ve=Function.prototype.toString;var qe=function(e){if(null!=e){try{return Ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Je=/^\[object .+?Constructor\]$/,Ye=Function.prototype,Xe=Object.prototype,Ke=Ye.toString,Qe=Xe.hasOwnProperty,en=RegExp("^"+Ke.call(Qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var nn=function(e){return!(!Oe(e)||We(e))&&(Ce(e)?en:Je).test(qe(e))};var tn=function(e,n){return null==e?void 0:e[n]};var rn=function(e,n){var t=tn(e,n);return nn(t)?t:void 0},an=rn(o,"DataView"),on=rn(o,"Map"),fn=rn(o,"Promise"),cn=rn(o,"Set"),un=rn(o,"WeakMap"),dn="[object Map]",ln="[object Promise]",sn="[object Set]",hn="[object WeakMap]",pn="[object DataView]",bn=qe(an),vn=qe(on),gn=qe(fn),yn=qe(cn),_n=qe(un),mn=g;(an&&mn(new an(new ArrayBuffer(1)))!=pn||on&&mn(new on)!=dn||fn&&mn(fn.resolve())!=ln||cn&&mn(new cn)!=sn||un&&mn(new un)!=hn)&&(mn=function(e){var n=g(e),t="[object Object]"==n?e.constructor:void 0,r=t?qe(t):"";if(r)switch(r){case bn:return pn;case vn:return dn;case gn:return ln;case yn:return sn;case _n:return hn}return n});var kn=mn;var jn=function(e){return"string"==typeof e||!i(e)&&y(e)&&"[object String]"==g(e)};var xn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),wn="[\\ud800-\\udfff]",On="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Cn="\\ud83c[\\udffb-\\udfff]",An="[^\\ud800-\\udfff]",Sn="(?:\\ud83c[\\udde6-\\uddff]){2}",En="[\\ud800-\\udbff][\\udc00-\\udfff]",In="(?:"+On+"|"+Cn+")"+"?",Tn="[\\ufe0e\\ufe0f]?",Rn=Tn+In+("(?:\\u200d(?:"+[An,Sn,En].join("|")+")"+Tn+In+")*"),Ln="(?:"+[An+On+"?",On,Sn,En,wn].join("|")+")",$n=RegExp(Cn+"(?="+Cn+")|"+Ln+Rn,"g");var zn=function(e){for(var n=$n.lastIndex=0;$n.test(e);)++n;return n};var Dn=function(e){return A(e)?zn(e):xn(e)};var Pn=function(e){if(null==e)return 0;if(Se(e))return jn(e)?Dn(e):e.length;var n=kn(e);return"[object Map]"==n||"[object Set]"==n?e.size:Ze(e).length},Un=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nn=/^\w*$/;var Fn=function(e,n){if(i(e))return!1;var r=t(e);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_(e))||(Nn.test(e)||!Un.test(e)||null!=n&&e in Object(n))},Mn=rn(Object,"create");var Bn=function(){this.__data__=Mn?Mn(null):{},this.size=0};var Zn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Gn=Object.prototype.hasOwnProperty;var Hn=function(e){var n=this.__data__;if(Mn){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return Gn.call(n,e)?n[e]:void 0},Wn=Object.prototype.hasOwnProperty;var Vn=function(e){var n=this.__data__;return Mn?void 0!==n[e]:Wn.call(n,e)};var qn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Mn&&void 0===n?"__lodash_hash_undefined__":n,this};function Jn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Jn.prototype.clear=Bn,Jn.prototype.delete=Zn,Jn.prototype.get=Hn,Jn.prototype.has=Vn,Jn.prototype.set=qn;var Yn=Jn;var Xn=function(){this.__data__=[],this.size=0};var Kn=function(e,n){for(var t=e.length;t--;)if(we(e[t][0],n))return t;return-1},Qn=Array.prototype.splice;var et=function(e){var n=this.__data__,t=Kn(n,e);return!(t<0)&&(t==n.length-1?n.pop():Qn.call(n,t,1),--this.size,!0)};var nt=function(e){var n=this.__data__,t=Kn(n,e);return t<0?void 0:n[t][1]};var tt=function(e){return Kn(this.__data__,e)>-1};var rt=function(e,n){var t=this.__data__,r=Kn(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function at(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}at.prototype.clear=Xn,at.prototype.delete=et,at.prototype.get=nt,at.prototype.has=tt,at.prototype.set=rt;var ot=at;var ft=function(){this.size=0,this.__data__={hash:new Yn,map:new(on||ot),string:new Yn}};var ct=function(e){var n=t(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var it=function(e,n){var t=e.__data__;return ct(n)?t["string"==typeof n?"string":"hash"]:t.map};var ut=function(e){var n=it(this,e).delete(e);return this.size-=n?1:0,n};var dt=function(e){return it(this,e).get(e)};var lt=function(e){return it(this,e).has(e)};var st=function(e,n){var t=it(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function ht(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ht.prototype.clear=ft,ht.prototype.delete=ut,ht.prototype.get=dt,ht.prototype.has=lt,ht.prototype.set=st;var pt=ht;function bt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],o=t.cache;if(o.has(a))return o.get(a);var f=e.apply(this,r);return t.cache=o.set(a,f)||o,f};return t.cache=new(bt.Cache||pt),t}bt.Cache=pt;var vt=bt;var gt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yt=/\\(\\)?/g,_t=function(e){var n=vt(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(gt,(function(e,t,r,a){n.push(r?a.replace(yt,"$1"):t||e)})),n}));var mt=function(e,n){return i(e)?e:Fn(e,n)?[e]:_t(x(e))};var kt=function(e){if("string"==typeof e||_(e))return e;var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var jt=function(e,n){for(var t=0,r=(n=mt(n,e)).length;null!=e&&t<r;)e=e[kt(n[t++])];return t&&t==r?e:void 0};var xt=function(e,n,t){var r=null==e?void 0:jt(e,n);return void 0===r?t:r},wt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function Ot(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Pe(e," ");if(2!==Pn(n))return e;var t=n[0].trim();t=xe(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=xt(wt,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}var Ct=function(e,n){return c(n,(function(n){return e[n]}))};var At=function(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r};var St=function(e){return y(e)&&"[object Arguments]"==g(e)},Et=Object.prototype,It=Et.hasOwnProperty,Tt=Et.propertyIsEnumerable,Rt=St(function(){return arguments}())?St:function(e){return y(e)&&It.call(e,"callee")&&!Tt.call(e,"callee")};var Lt=function(){return!1},$t=n((function(e,n){var t=n&&!n.nodeType&&n,r=t&&e&&!e.nodeType&&e,a=r&&r.exports===t?o.Buffer:void 0,f=(a?a.isBuffer:void 0)||Lt;e.exports=f})),zt={};zt["[object Float32Array]"]=zt["[object Float64Array]"]=zt["[object Int8Array]"]=zt["[object Int16Array]"]=zt["[object Int32Array]"]=zt["[object Uint8Array]"]=zt["[object Uint8ClampedArray]"]=zt["[object Uint16Array]"]=zt["[object Uint32Array]"]=!0,zt["[object Arguments]"]=zt["[object Array]"]=zt["[object ArrayBuffer]"]=zt["[object Boolean]"]=zt["[object DataView]"]=zt["[object Date]"]=zt["[object Error]"]=zt["[object Function]"]=zt["[object Map]"]=zt["[object Number]"]=zt["[object Object]"]=zt["[object RegExp]"]=zt["[object Set]"]=zt["[object String]"]=zt["[object WeakMap]"]=!1;var Dt=function(e){return y(e)&&Ae(e.length)&&!!zt[g(e)]},Pt=$e&&$e.isTypedArray,Ut=Pt?Le(Pt):Dt,Nt=Object.prototype.hasOwnProperty;var Ft=function(e,n){var t=i(e),r=!t&&Rt(e),a=!t&&!r&&$t(e),o=!t&&!r&&!a&&Ut(e),f=t||r||a||o,c=f?At(e.length,String):[],u=c.length;for(var d in e)!n&&!Nt.call(e,d)||f&&("length"==d||a&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Ie(d,u))||c.push(d);return c};var Mt=function(e){return Se(e)?Ft(e):Ze(e)};var Bt=function(e){return null==e?[]:Ct(e,Mt(e))},Zt=n((function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}function a(e,n,t){this.fn=e,this.context=n,this.once=t||!1}function o(e,n,r,o,f){if("function"!=typeof r)throw new TypeError("The listener must be a function");var c=new a(r,o||e,f),i=t?t+n:n;return e._events[i]?e._events[i].fn?e._events[i]=[e._events[i],c]:e._events[i].push(c):(e._events[i]=c,e._eventsCount++),e}function f(e,n){0==--e._eventsCount?e._events=new r:delete e._events[n]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(t=!1)),c.prototype.eventNames=function(){var e,r,a=[];if(0===this._eventsCount)return a;for(r in e=this._events)n.call(e,r)&&a.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(e)):a},c.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var a=0,o=r.length,f=new Array(o);a<o;a++)f[a]=r[a].fn;return f},c.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},c.prototype.emit=function(e,n,r,a,o,f){var c=t?t+e:e;if(!this._events[c])return!1;var i,u,d=this._events[c],l=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),l){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,n),!0;case 3:return d.fn.call(d.context,n,r),!0;case 4:return d.fn.call(d.context,n,r,a),!0;case 5:return d.fn.call(d.context,n,r,a,o),!0;case 6:return d.fn.call(d.context,n,r,a,o,f),!0}for(u=1,i=new Array(l-1);u<l;u++)i[u-1]=arguments[u];d.fn.apply(d.context,i)}else{var s,h=d.length;for(u=0;u<h;u++)switch(d[u].once&&this.removeListener(e,d[u].fn,void 0,!0),l){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,n);break;case 3:d[u].fn.call(d[u].context,n,r);break;case 4:d[u].fn.call(d[u].context,n,r,a);break;default:if(!i)for(s=1,i=new Array(l-1);s<l;s++)i[s-1]=arguments[s];d[u].fn.apply(d[u].context,i)}}return!0},c.prototype.on=function(e,n,t){return o(this,e,n,t,!1)},c.prototype.once=function(e,n,t){return o(this,e,n,t,!0)},c.prototype.removeListener=function(e,n,r,a){var o=t?t+e:e;if(!this._events[o])return this;if(!n)return f(this,o),this;var c=this._events[o];if(c.fn)c.fn!==n||a&&!c.once||r&&c.context!==r||f(this,o);else{for(var i=0,u=[],d=c.length;i<d;i++)(c[i].fn!==n||a&&!c[i].once||r&&c[i].context!==r)&&u.push(c[i]);u.length?this._events[o]=1===u.length?u[0]:u:f(this,o)}return this},c.prototype.removeAllListeners=function(e){var n;return e?(n=t?t+e:e,this._events[n]&&f(this,n)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=t,c.EventEmitter=c,e.exports=c}));function Gt(e){var n=!1,t=!1,r=new Zt;function a(e){e.stopPropagation(),e.preventDefault(),t=!0,!1===n&&(n=!0,r.emit("dropIn",e))}function o(e){e.stopPropagation(),e.preventDefault(),t=!1,setTimeout((function(){t||(n=!1,r.emit("dropOut",e))}),100)}function f(e){a(e)}function c(e){o(e)}function i(e){a(e);var n=Bt(e.dataTransfer.files);r.emit("getFiles",{files:n,e:e,cb:function(){o(e)}})}return e.addEventListener("dragenter",f,!1),e.addEventListener("dragover",f,!1),e.addEventListener("dragleave",c,!1),e.addEventListener("drop",i,!1),r.off=function(){e.removeEventListener("dragenter",f,!1),e.removeEventListener("dragover",f,!1),e.removeEventListener("dragleave",c,!1),e.removeEventListener("drop",i,!1)},r}var Ht={components:{},props:{backgroundColor:{type:String,default:"transparent"},backgroundColorDropIn:{type:String,default:"grey lighten-4"},backgroundColorHover:{type:String,default:"grey lighten-5"},styleTransition:{type:String,default:"all 0.3s linear"},borderRadius:{type:Number,default:6},borderWidth:{type:Number,default:1},borderColor:{type:String,default:"grey lighten-2"},borderColorDropIn:{type:String,default:"grey lighten-2"},borderColorHover:{type:String,default:"grey lighten-2"}},data:function(){return{ev:null,bMouseIn:!1,bDropIn:!1}},mounted:function(){var e=this;e.ev=Gt(e.$refs.dropPanel),e.ev.on("getFiles",(function(n){var t=n.files,r=n.cb;e.$emit("get-files",t,e.$refs.dropPanel),r()})),e.ev.on("dropIn",(function(){e.bDropIn=!0,e.$emit("drop-in",e.$refs.dropPanel)})),e.ev.on("dropOut",(function(){e.bDropIn=!1,e.$emit("drop-out",e.$refs.dropPanel)}))},beforeDestroy:function(){this.ev.off()},computed:{useBorderColor:function(){var e=this;return e.bDropIn?Ot(e.borderColorDropIn):e.bMouseIn?Ot(e.borderColorHover):Ot(e.borderColor)},useBackgroundColor:function(){var e=this;return e.bDropIn?Ot(e.backgroundColorDropIn):e.bMouseIn?Ot(e.backgroundColorHover):Ot(e.backgroundColor)}},methods:{}};function Wt(e,n,t,r,a,o,f,c,i,u){"boolean"!=typeof f&&(i=c,c=f,f=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,i(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=d):n&&(d=f?function(e){n.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,d):[d]}return t}var Vt,qt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Jt(e){return function(e,n){return function(e,n){var t=qt?n.media||"default":e,r=Yt[t]||(Yt[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===Vt&&(Vt=document.head||document.getElementsByTagName("head")[0]),Vt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var o=r.ids.size-1,f=document.createTextNode(a),c=r.element.childNodes;c[o]&&r.element.removeChild(c[o]),c.length?r.element.insertBefore(f,c[o]):r.element.appendChild(f)}}}(e,n)}}var Yt={};const Xt=Ht;var Kt=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{ref:"dropPanel",style:"border:"+e.borderWidth+"px solid "+e.useBorderColor+"; border-radius:"+e.borderRadius+"px; background:"+e.useBackgroundColor+"; transition:"+e.styleTransition+";",on:{mouseenter:function(n){e.bMouseIn=!0},mouseleave:function(n){e.bMouseIn=!1}}},[e._t("default")],2)};Kt._withStripped=!0;return Wt({render:Kt,staticRenderFns:[]},(function(e){e&&e("data-v-75394a3b_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WDropfiles.vue"},media:void 0})}),Xt,"data-v-75394a3b",false,undefined,!1,Jt,void 0,void 0)}));
//# sourceMappingURL=w-dropfiles.umd.js.map
