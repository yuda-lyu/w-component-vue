!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-shell-material"]=n()}(this,function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t="object"==e(n)&&n&&n.Object===Object&&n,r="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,o=t||r||Function("return this")(),a=o.Symbol;var i=function(e,n){for(var t=-1,r=null==e?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o},c=Array.isArray,f=Object.prototype,l=f.hasOwnProperty,u=f.toString,d=a?a.toStringTag:void 0;var s=function(e){var n=l.call(e,d),t=e[d];try{e[d]=void 0;var r=!0}catch(e){}var o=u.call(e);return r&&(n?e[d]=t:delete e[d]),o},p=Object.prototype.toString;var g=function(e){return p.call(e)},h="[object Null]",v="[object Undefined]",b=a?a.toStringTag:void 0;var y=function(e){return null==e?void 0===e?v:h:b&&b in Object(e)?s(e):g(e)};var m=function(n){return null!=n&&"object"==e(n)},_="[object Symbol]";var x=function(n){return"symbol"==e(n)||m(n)&&y(n)==_},k=1/0,S=a?a.prototype:void 0,I=S?S.toString:void 0;var j=function e(n){if("string"==typeof n)return n;if(c(n))return i(n,e)+"";if(x(n))return I?I.call(n):"";var t=n+"";return"0"==t&&1/n==-k?"-0":t};var A=function(e){return null==e?"":j(e)};var C=function(e,n,t){var r=-1,o=e.length;n<0&&(n=-n>o?0:o+n),(t=t>o?o:t)<0&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+n];return a};var w=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:C(e,n,t)},T=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var O=function(e){return T.test(e)};var z=function(e){return e.split("")},E="[\\ud800-\\udfff]",P="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",R="\\ud83c[\\udffb-\\udfff]",F="[^\\ud800-\\udfff]",$="(?:\\ud83c[\\udde6-\\uddff]){2}",M="[\\ud800-\\udbff][\\udc00-\\udfff]",B="(?:"+P+"|"+R+")"+"?",U="[\\ufe0e\\ufe0f]?"+B+("(?:\\u200d(?:"+[F,$,M].join("|")+")[\\ufe0e\\ufe0f]?"+B+")*"),L="(?:"+[F+P+"?",P,$,M,E].join("|")+")",N=RegExp(R+"(?="+R+")|"+L+U,"g");var D=function(e){return e.match(N)||[]};var W=function(e){return O(e)?D(e):z(e)};var Z=function(e){return function(n){n=A(n);var t=O(n)?W(n):void 0,r=t?t[0]:n.charAt(0),o=t?w(t,1).join(""):n.slice(1);return r[e]()+o}}("toUpperCase");var G=function(e){return Z(A(e).toLowerCase())};var V=function(e,n,t,r){var o=-1,a=null==e?0:e.length;for(r&&a&&(t=e[++o]);++o<a;)t=n(t,e[o],o,e);return t};var Y=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),J=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,H=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var X=function(e){return(e=A(e))&&e.replace(J,Y).replace(H,"")},q=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var K=function(e){return e.match(q)||[]},Q=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var ee=function(e){return Q.test(e)},ne="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",te="["+ne+"]",re="\\d+",oe="[\\u2700-\\u27bf]",ae="[a-z\\xdf-\\xf6\\xf8-\\xff]",ie="[^\\ud800-\\udfff"+ne+re+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ce="(?:\\ud83c[\\udde6-\\uddff]){2}",fe="[\\ud800-\\udbff][\\udc00-\\udfff]",le="[A-Z\\xc0-\\xd6\\xd8-\\xde]",ue="(?:"+ae+"|"+ie+")",de="(?:"+le+"|"+ie+")",se="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",pe="[\\ufe0e\\ufe0f]?"+se+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ce,fe].join("|")+")[\\ufe0e\\ufe0f]?"+se+")*"),ge="(?:"+[oe,ce,fe].join("|")+")"+pe,he=RegExp([le+"?"+ae+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[te,le,"$"].join("|")+")",de+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[te,le+ue,"$"].join("|")+")",le+"?"+ue+"+(?:['’](?:d|ll|m|re|s|t|ve))?",le+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",re,ge].join("|"),"g");var ve=function(e){return e.match(he)||[]};var be=function(e,n,t){return e=A(e),void 0===(n=t?void 0:n)?ee(e)?ve(e):K(e):e.match(n)||[]},ye=RegExp("['’]","g");var me=function(e){return function(n){return V(be(X(n).replace(ye,"")),e,"")}}(function(e,n,t){return n=n.toLowerCase(),e+(t?G(n):n)});var _e=function(e,n){return e===n||e!=e&&n!=n};var xe=function(n){var t=e(n);return null!=n&&("object"==t||"function"==t)},ke="[object AsyncFunction]",Se="[object Function]",Ie="[object GeneratorFunction]",je="[object Proxy]";var Ae=function(e){if(!xe(e))return!1;var n=y(e);return n==Se||n==Ie||n==ke||n==je},Ce=9007199254740991;var we=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Ce};var Te=function(e){return null!=e&&we(e.length)&&!Ae(e)},Oe=9007199254740991,ze=/^(?:0|[1-9]\d*)$/;var Ee=function(n,t){var r=e(n);return!!(t=null==t?Oe:t)&&("number"==r||"symbol"!=r&&ze.test(n))&&n>-1&&n%1==0&&n<t};var Pe=function(n,t,r){if(!xe(r))return!1;var o=e(t);return!!("number"==o?Te(r)&&Ee(t,r.length):"string"==o&&t in r)&&_e(r[t],n)},Re="[object RegExp]";var Fe=function(e){return m(e)&&y(e)==Re};var $e=function(e){return function(n){return e(n)}},Me=function(e,n){return e(n={exports:{}},n.exports),n.exports}(function(e,n){var r=n&&!n.nodeType&&n,o=r&&e&&!e.nodeType&&e,a=o&&o.exports===r&&t.process,i=function(){try{var e=o&&o.require&&o.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=i}),Be=Me&&Me.isRegExp,Ue=Be?$e(Be):Fe,Le=4294967295;var Ne=function(e,n,t){return t&&"number"!=typeof t&&Pe(e,n,t)&&(n=t=void 0),(t=void 0===t?Le:t>>>0)?(e=A(e))&&("string"==typeof n||null!=n&&!Ue(n))&&!(n=j(n))&&O(e)?w(W(e),0,t):e.split(n,t):[]},De=Object.prototype;var We=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||De)};var Ze=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Ge=Object.prototype.hasOwnProperty;var Ve,Ye=function(e){if(!We(e))return Ze(e);var n=[];for(var t in Object(e))Ge.call(e,t)&&"constructor"!=t&&n.push(t);return n},Je=o["__core-js_shared__"],He=(Ve=/[^.]+$/.exec(Je&&Je.keys&&Je.keys.IE_PROTO||""))?"Symbol(src)_1."+Ve:"";var Xe=function(e){return!!He&&He in e},qe=Function.prototype.toString;var Ke=function(e){if(null!=e){try{return qe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Qe=/^\[object .+?Constructor\]$/,en=Function.prototype,nn=Object.prototype,tn=en.toString,rn=nn.hasOwnProperty,on=RegExp("^"+tn.call(rn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var an=function(e){return!(!xe(e)||Xe(e))&&(Ae(e)?on:Qe).test(Ke(e))};var cn=function(e,n){return null==e?void 0:e[n]};var fn=function(e,n){var t=cn(e,n);return an(t)?t:void 0},ln=fn(o,"DataView"),un=fn(o,"Map"),dn=fn(o,"Promise"),sn=fn(o,"Set"),pn=fn(o,"WeakMap"),gn=Ke(ln),hn=Ke(un),vn=Ke(dn),bn=Ke(sn),yn=Ke(pn),mn=y;(ln&&"[object DataView]"!=mn(new ln(new ArrayBuffer(1)))||un&&"[object Map]"!=mn(new un)||dn&&"[object Promise]"!=mn(dn.resolve())||sn&&"[object Set]"!=mn(new sn)||pn&&"[object WeakMap]"!=mn(new pn))&&(mn=function(e){var n=y(e),t="[object Object]"==n?e.constructor:void 0,r=t?Ke(t):"";if(r)switch(r){case gn:return"[object DataView]";case hn:return"[object Map]";case vn:return"[object Promise]";case bn:return"[object Set]";case yn:return"[object WeakMap]"}return n});var _n=mn,xn="[object String]";var kn=function(e){return"string"==typeof e||!c(e)&&m(e)&&y(e)==xn};var Sn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),In="[\\ud800-\\udfff]",jn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",An="\\ud83c[\\udffb-\\udfff]",Cn="[^\\ud800-\\udfff]",wn="(?:\\ud83c[\\udde6-\\uddff]){2}",Tn="[\\ud800-\\udbff][\\udc00-\\udfff]",On="(?:"+jn+"|"+An+")"+"?",zn="[\\ufe0e\\ufe0f]?"+On+("(?:\\u200d(?:"+[Cn,wn,Tn].join("|")+")[\\ufe0e\\ufe0f]?"+On+")*"),En="(?:"+[Cn+jn+"?",jn,wn,Tn,In].join("|")+")",Pn=RegExp(An+"(?="+An+")|"+En+zn,"g");var Rn=function(e){for(var n=Pn.lastIndex=0;Pn.test(e);)++n;return n};var Fn=function(e){return O(e)?Rn(e):Sn(e)},$n="[object Map]",Mn="[object Set]";var Bn=function(e){if(null==e)return 0;if(Te(e))return kn(e)?Fn(e):e.length;var n=_n(e);return n==$n||n==Mn?e.size:Ye(e).length},Un=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ln=/^\w*$/;var Nn=function(n,t){if(c(n))return!1;var r=e(n);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!x(n))||(Ln.test(n)||!Un.test(n)||null!=t&&n in Object(t))},Dn=fn(Object,"create");var Wn=function(){this.__data__=Dn?Dn(null):{},this.size=0};var Zn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Gn="__lodash_hash_undefined__",Vn=Object.prototype.hasOwnProperty;var Yn=function(e){var n=this.__data__;if(Dn){var t=n[e];return t===Gn?void 0:t}return Vn.call(n,e)?n[e]:void 0},Jn=Object.prototype.hasOwnProperty;var Hn=function(e){var n=this.__data__;return Dn?void 0!==n[e]:Jn.call(n,e)},Xn="__lodash_hash_undefined__";var qn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Dn&&void 0===n?Xn:n,this};function Kn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Kn.prototype.clear=Wn,Kn.prototype.delete=Zn,Kn.prototype.get=Yn,Kn.prototype.has=Hn,Kn.prototype.set=qn;var Qn=Kn;var et=function(){this.__data__=[],this.size=0};var nt=function(e,n){for(var t=e.length;t--;)if(_e(e[t][0],n))return t;return-1},tt=Array.prototype.splice;var rt=function(e){var n=this.__data__,t=nt(n,e);return!(t<0)&&(t==n.length-1?n.pop():tt.call(n,t,1),--this.size,!0)};var ot=function(e){var n=this.__data__,t=nt(n,e);return t<0?void 0:n[t][1]};var at=function(e){return nt(this.__data__,e)>-1};var it=function(e,n){var t=this.__data__,r=nt(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function ct(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ct.prototype.clear=et,ct.prototype.delete=rt,ct.prototype.get=ot,ct.prototype.has=at,ct.prototype.set=it;var ft=ct;var lt=function(){this.size=0,this.__data__={hash:new Qn,map:new(un||ft),string:new Qn}};var ut=function(n){var t=e(n);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n};var dt=function(e,n){var t=e.__data__;return ut(n)?t["string"==typeof n?"string":"hash"]:t.map};var st=function(e){var n=dt(this,e).delete(e);return this.size-=n?1:0,n};var pt=function(e){return dt(this,e).get(e)};var gt=function(e){return dt(this,e).has(e)};var ht=function(e,n){var t=dt(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function vt(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}vt.prototype.clear=lt,vt.prototype.delete=st,vt.prototype.get=pt,vt.prototype.has=gt,vt.prototype.set=ht;var bt=vt,yt="Expected a function";function mt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError(yt);var t=function t(){var r=arguments,o=n?n.apply(this,r):r[0],a=t.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return t.cache=a.set(o,i)||a,i};return t.cache=new(mt.Cache||bt),t}mt.Cache=bt;var _t=mt,xt=500;var kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/\\(\\)?/g,It=function(e){var n=_t(e,function(e){return t.size===xt&&t.clear(),e}),t=n.cache;return n}(function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(kt,function(e,t,r,o){n.push(r?o.replace(St,"$1"):t||e)}),n});var jt=function(e,n){return c(e)?e:Nn(e,n)?[e]:It(A(e))},At=1/0;var Ct=function(e){if("string"==typeof e||x(e))return e;var n=e+"";return"0"==n&&1/e==-At?"-0":n};var wt=function(e,n){for(var t=0,r=(n=jt(n,e)).length;null!=e&&t<r;)e=e[Ct(n[t++])];return t&&t==r?e:void 0};var Tt=function(e,n,t){var r=null==e?void 0:wt(e,n);return void 0===r?t:r},Ot={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};var zt={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var e=this.size;return this.icon.indexOf("fa-")>=0?e-4:e},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};var Et=function(e,n,t,r,o,a,i,c,f,l){"boolean"!=typeof i&&(f=c,c=i,i=!1);var u,d="function"==typeof t?t.options:t;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),r&&(d._scopeId=r),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,f(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=u):n&&(u=i?function(){n.call(this,l(this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),u)if(d.functional){var s=d.render;d.render=function(e,n){return u.call(n),s(e,n)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,u):[u]}return t},Pt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var Rt=document.head||document.getElementsByTagName("head")[0],Ft={};var $t=function(e){return function(e,n){return function(e,n){var t=Pt?n.media||"default":e,r=Ft[t]||(Ft[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var o=n.source;if(n.map&&(o+="\n/*# sourceURL="+n.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),Rt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var a=r.ids.size-1,i=document.createTextNode(o),c=r.element.childNodes;c[a]&&r.element.removeChild(c[a]),c.length?r.element.insertBefore(i,c[a]):r.element.appendChild(i)}}}(e,n)}};const Mt=zt;var Bt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return""!==e.icon?t("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[t("v-icon",{style:e.useStyle,attrs:{color:e.color,size:e.useSize}},[e._v("\n        "+e._s(e.useIcon)+"\n    ")])],1):e._e()};Bt._withStripped=!0;const Ut={components:{WIcon:Et({render:Bt,staticRenderFns:[]},function(e){e&&e("data-v-b57e8100_0",{source:"\n.v-icon[data-v-b57e8100] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-3-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})},Mt,"data-v-b57e8100",!1,void 0,$t,void 0)},props:{title:{type:String,default:""},titleColor:{type:String,default:"deep-orange darken-1"},leftIcon:{type:String,default:""},leftIconColor:{type:String,default:"deep-orange lighten-2"},leftIconColorFocus:{type:String,default:"deep-orange lighten-1"},leftIconTooltip:{type:String,default:""},rightIcon:{type:String,default:""},rightIconColor:{type:String,default:"deep-orange lighten-2"},rightIconColorFocus:{type:String,default:"deep-orange lighten-1"},rightIconTooltip:{type:String,default:""},small:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},focused:{type:Boolean,default:!1}},data:function(){return{focusedTrans:!1}},mounted:function(){},computed:{changeParam:function(){return this.focusedTrans=this.focused,""},useTitleColor:function(){var e={};return e.color=function(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Ne(e," ");if(2!==Bn(n))return e;var t=n[0].trim();t=me(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var o=Tt(Ot,"default.".concat(t,".").concat(r),null);return null===o&&(o=e),o}(this.titleColor),e},usePadding:function(){var e={};return this.small?e.padding="0px":e.padding="3px 6px",e},usePaddingSlot:function(){var e={"padding-top":"0px","padding-bottom":"0px","padding-left":"0px","padding-right":"0px"};return""!==this.leftIcon&&(e["padding-left"]="10px"),""!==this.rightIcon&&(e["padding-right"]="10px"),e}},methods:{clickIcon:function(e){var n=this;!1!==n.editable&&setTimeout(function(){n.$emit("click-"+e)},1)}}};var Lt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"group",style:[e.usePadding,{opacity:e.editable?1:.6}],attrs:{changeParam:e.changeParam}},[e.leftIcon?t("div",{staticStyle:{cursor:"pointer"},on:{click:function(n){return e.clickIcon("left")}}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.leftIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t("div",e._g({attrs:{ShellMaterial:"leftIcon"}},Object.assign({},r)),[t("w-icon",{attrs:{icon:e.leftIcon,color:e.focusedTrans?e.leftIconColorFocus:e.leftIconColor}})],1)]}}],null,!1,2950564174)},[e._v(" "),t("span",[e._v(e._s(e.leftIconTooltip))])])],1):e._e(),e._v(" "),t("div",{staticStyle:{width:"100%"}},[t("div",{style:[{position:"relative"},e.usePaddingSlot]},[t("div",{style:[{position:"absolute",top:"0px",transform:"translateY(-120%)","font-size":"0.9rem","white-space":"nowrap",opacity:.7},e.useTitleColor]},[e._v("\n                "+e._s(e.title)+"\n            ")]),e._v(" "),e._t("default")],2)]),e._v(" "),e.rightIcon?t("div",{staticStyle:{cursor:"pointer"},on:{click:function(n){return e.clickIcon("right")}}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.rightIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t("div",e._g({attrs:{ShellMaterial:"rightIcon"}},Object.assign({},r)),[t("w-icon",{attrs:{icon:e.rightIcon,color:e.focusedTrans?e.rightIconColorFocus:e.rightIconColor}})],1)]}}],null,!1,999997262)},[e._v(" "),t("span",[e._v(e._s(e.rightIconTooltip))])])],1):e._e()])};Lt._withStripped=!0;return Et({render:Lt,staticRenderFns:[]},function(e){e&&e("data-v-d7ff2bf0_0",{source:"\n.group[data-v-d7ff2bf0] {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-3-w-component-vue\\w-component-vue\\src\\components\\WShellMaterial.vue"],names:[],mappings:";AAsOA;IACA,oBAAA;IACA,aAAA;IACA,2BAAA;IACA,mBAAA;AACA",file:"WShellMaterial.vue",sourcesContent:["<template>\r\n    <div\r\n        :changeParam=\"changeParam\"\r\n        class=\"group\"\r\n        :style=\"[usePadding,{'opacity':editable?1:0.6}]\"\r\n    >\r\n\r\n        <div style=\"cursor:pointer;\" @click=\"clickIcon('left')\" v-if=\"leftIcon\">\r\n\r\n            <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"leftIconTooltip===''\">\r\n\r\n                <template v-slot:activator=\"{ on: ttShellMaterialLeft }\">\r\n                    <div ShellMaterial=\"leftIcon\" v-on=\"{...ttShellMaterialLeft}\">\r\n                        <w-icon\r\n                            :icon=\"leftIcon\"\r\n                            :color=\"focusedTrans?leftIconColorFocus:leftIconColor\"\r\n                        ></w-icon>\r\n                    </div>\r\n                </template>\r\n\r\n                <span>{{leftIconTooltip}}</span>\r\n\r\n            </v-tooltip>\r\n\r\n        </div>\r\n\r\n        <div style=\"width:100%;\">\r\n\r\n            <div :style=\"[{'position':'relative'},usePaddingSlot]\">\r\n\r\n                <div :style=\"[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]\">\r\n                    {{title}}\r\n                </div>\r\n\r\n                <slot></slot>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div style=\"cursor:pointer;\" @click=\"clickIcon('right')\" v-if=\"rightIcon\">\r\n\r\n            <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"rightIconTooltip===''\">\r\n\r\n                <template v-slot:activator=\"{ on: ttShellMaterialRight }\">\r\n                    <div ShellMaterial=\"rightIcon\" v-on=\"{...ttShellMaterialRight}\">\r\n                        <w-icon\r\n                            :icon=\"rightIcon\"\r\n                            :color=\"focusedTrans?rightIconColorFocus:rightIconColor\"\r\n                        ></w-icon>\r\n                    </div>\r\n                </template>\r\n\r\n                <span>{{rightIconTooltip}}</span>\r\n\r\n            </v-tooltip>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\nimport WIcon from './WIcon.vue'\r\n\r\n/**\r\n * @vue-prop {String} [title=''] 輸入標題字串，預設''\r\n * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'\r\n * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''\r\n * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''\r\n * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon\r\n    },\r\n    props: {\r\n        title: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        titleColor: {\r\n            type: String,\r\n            default: 'deep-orange darken-1',\r\n        },\r\n        leftIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        leftIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        leftIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        leftIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        rightIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        rightIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        small: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        focused: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focusedTrans: false,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //focusedTrans\r\n            vo.focusedTrans = vo.focused\r\n\r\n            return ''\r\n        },\r\n\r\n        useTitleColor: function() {\r\n            //console.log('computed useTitleColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['color'] = color2hex(vo.titleColor)\r\n            return s\r\n        },\r\n\r\n        usePadding: function() {\r\n            //console.log('computed usePadding')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.small) {\r\n                s['padding'] = '0px'\r\n            }\r\n            else {\r\n                s['padding'] = '3px 6px'\r\n            }\r\n            return s\r\n        },\r\n\r\n        usePaddingSlot: function() {\r\n            //console.log('computed usePaddingSlot')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding-top'] = '0px'\r\n            s['padding-bottom'] = '0px'\r\n            s['padding-left'] = '0px'\r\n            s['padding-right'] = '0px'\r\n            if (vo.leftIcon !== '') {\r\n                s['padding-left'] = '10px'\r\n            }\r\n            if (vo.rightIcon !== '') {\r\n                s['padding-right'] = '10px'\r\n            }\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        clickIcon: function (mode) {\r\n            //console.log('methods clickIcon', mode)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(() => {\r\n\r\n                //emit\r\n                vo.$emit('click-' + mode)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.group {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n</style>\r\n"]},media:void 0})},Ut,"data-v-d7ff2bf0",!1,void 0,$t,void 0)});
//# sourceMappingURL=w-shell-material.umd.js.map
