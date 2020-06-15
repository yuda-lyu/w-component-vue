/*!
 * w-popup v1.3.46
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-popup"]=n()}(this,(function(){"use strict";var e=Array.isArray,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,n){return e(n={exports:{}},n.exports),n.exports}var r=t((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),o="object"==r(n)&&n&&n.Object===Object&&n,a="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,i=o||a||Function("return this")(),u=i.Symbol,f=Object.prototype,c=f.hasOwnProperty,d=f.toString,l=u?u.toStringTag:void 0;var s=function(e){var n=c.call(e,l),t=e[l];try{e[l]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(n?e[l]=t:delete e[l]),o},v=Object.prototype.toString;var p=function(e){return v.call(e)},h=u?u.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":h&&h in Object(e)?s(e):p(e)};var g=function(e){return null!=e&&"object"==r(e)};var m=function(e){return"symbol"==r(e)||g(e)&&"[object Symbol]"==b(e)},y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w=/^\w*$/;var k=function(n,t){if(e(n))return!1;var o=r(n);return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=n&&!m(n))||(w.test(n)||!y.test(n)||null!=t&&n in Object(t))};var _=function(e){var n=r(e);return null!=e&&("object"==n||"function"==n)};var x,j=function(e){if(!_(e))return!1;var n=b(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},C=i["__core-js_shared__"],E=(x=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"";var S=function(e){return!!E&&E in e},O=Function.prototype.toString;var A=function(e){if(null!=e){try{return O.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,T=Function.prototype,$=Object.prototype,N=T.toString,L=$.hasOwnProperty,I=RegExp("^"+N.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var R=function(e){return!(!_(e)||S(e))&&(j(e)?I:M).test(A(e))};var z=function(e,n){return null==e?void 0:e[n]};var B=function(e,n){var t=z(e,n);return R(t)?t:void 0},U=B(Object,"create");var F=function(){this.__data__=U?U(null):{},this.size=0};var P=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},W=Object.prototype.hasOwnProperty;var D=function(e){var n=this.__data__;if(U){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return W.call(n,e)?n[e]:void 0},V=Object.prototype.hasOwnProperty;var Z=function(e){var n=this.__data__;return U?void 0!==n[e]:V.call(n,e)};var Y=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=U&&void 0===n?"__lodash_hash_undefined__":n,this};function G(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}G.prototype.clear=F,G.prototype.delete=P,G.prototype.get=D,G.prototype.has=Z,G.prototype.set=Y;var J=G;var H=function(){this.__data__=[],this.size=0};var q=function(e,n){return e===n||e!=e&&n!=n};var X=function(e,n){for(var t=e.length;t--;)if(q(e[t][0],n))return t;return-1},K=Array.prototype.splice;var Q=function(e){var n=this.__data__,t=X(n,e);return!(t<0)&&(t==n.length-1?n.pop():K.call(n,t,1),--this.size,!0)};var ee=function(e){var n=this.__data__,t=X(n,e);return t<0?void 0:n[t][1]};var ne=function(e){return X(this.__data__,e)>-1};var te=function(e,n){var t=this.__data__,r=X(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function re(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}re.prototype.clear=H,re.prototype.delete=Q,re.prototype.get=ee,re.prototype.has=ne,re.prototype.set=te;var oe=re,ae=B(i,"Map");var ie=function(){this.size=0,this.__data__={hash:new J,map:new(ae||oe),string:new J}};var ue=function(e){var n=r(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var fe=function(e,n){var t=e.__data__;return ue(n)?t["string"==typeof n?"string":"hash"]:t.map};var ce=function(e){var n=fe(this,e).delete(e);return this.size-=n?1:0,n};var de=function(e){return fe(this,e).get(e)};var le=function(e){return fe(this,e).has(e)};var se=function(e,n){var t=fe(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function ve(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ve.prototype.clear=ie,ve.prototype.delete=ce,ve.prototype.get=de,ve.prototype.has=le,ve.prototype.set=se;var pe=ve;function he(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,o=n?n.apply(this,r):r[0],a=t.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return t.cache=a.set(o,i)||a,i};return t.cache=new(he.Cache||pe),t}he.Cache=pe;var be=he;var ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,me=/\\(\\)?/g,ye=function(e){var n=be(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(ge,(function(e,t,r,o){n.push(r?o.replace(me,"$1"):t||e)})),n}));var we=function(e,n){for(var t=-1,r=null==e?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o},ke=u?u.prototype:void 0,_e=ke?ke.toString:void 0;var xe=function n(t){if("string"==typeof t)return t;if(e(t))return we(t,n)+"";if(m(t))return _e?_e.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var je=function(e){return null==e?"":xe(e)};var Ce=function(n,t){return e(n)?n:k(n,t)?[n]:ye(je(n))};var Ee=function(e){if("string"==typeof e||m(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var Se=function(e,n){for(var t=0,r=(n=Ce(n,e)).length;null!=e&&t<r;)e=e[Ee(n[t++])];return t&&t==r?e:void 0};var Oe=function(e,n,t){var r=null==e?void 0:Se(e,n);return void 0===r?t:r};function Ae(){var e,n,t=new Promise((function(){e=arguments[0],n=arguments[1]}));return t.resolve=e,t.reject=n,t}function Me(e){var n=Object.prototype.toString.call(e);return"[object Function]"===n||"[object AsyncFunction]"===n}var Te=/^\s+|\s+$/g,$e=/^[-+]0x[0-9a-f]+$/i,Ne=/^0b[01]+$/i,Le=/^0o[0-7]+$/i,Ie=parseInt;var Re=function(e){if("number"==typeof e)return e;if(m(e))return NaN;if(_(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=_(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Te,"");var t=Ne.test(e);return t||Le.test(e)?Ie(e.slice(2),t?2:8):$e.test(e)?NaN:+e};var ze=function(e){return e?(e=Re(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Be=function(e){var n=ze(e),t=n%1;return n==n?t?n-t:n:0};var Ue=function(e){return"number"==typeof e&&e==Be(e)};function Fe(e){return!(!function(e){return"[object String]"===Object.prototype.toString.call(e)}(e)||""===e)}function Pe(e){var n=!1;return Fe(e)?n=!isNaN(Number(e)):function(e){return"[object Number]"===Object.prototype.toString.call(e)}(e)&&(n=!0),n}function We(e){return Pe(e)?ze(e):0}var De=i.isFinite,Ve=Math.min;var Ze=function(e){var n=Math[e];return function(e,t){if(e=Re(e),(t=null==t?0:Ve(Be(t),292))&&De(e)){var r=(je(e)+"e").split("e"),o=n(r[0]+"e"+(+r[1]+t));return+((r=(je(o)+"e").split("e"))[0]+"e"+(+r[1]-t))}return n(e)}}("round");function Ye(e){return!!function(e){return!!Pe(e)&&(e=We(e),Ue(e))}(e)&&function(e){if(!Pe(e))return 0;e=We(e);var n=Ze(e);return"0"===String(n)?0:n}(e)>0}var Ge=function(e,n,t){var r=-1,o=e.length;n<0&&(n=-n>o?0:o+n),(t=t>o?o:t)<0&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+n];return a};var Je=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:Ge(e,n,t)},He=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var qe=function(e){return He.test(e)};var Xe=function(e){return e.split("")},Ke="[\\ud800-\\udfff]",Qe="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",en="\\ud83c[\\udffb-\\udfff]",nn="[^\\ud800-\\udfff]",tn="(?:\\ud83c[\\udde6-\\uddff]){2}",rn="[\\ud800-\\udbff][\\udc00-\\udfff]",on="(?:"+Qe+"|"+en+")"+"?",an="[\\ufe0e\\ufe0f]?"+on+("(?:\\u200d(?:"+[nn,tn,rn].join("|")+")[\\ufe0e\\ufe0f]?"+on+")*"),un="(?:"+[nn+Qe+"?",Qe,tn,rn,Ke].join("|")+")",fn=RegExp(en+"(?="+en+")|"+un+an,"g");var cn=function(e){return e.match(fn)||[]};var dn=function(e){return qe(e)?cn(e):Xe(e)};var ln=function(e){return function(n){n=je(n);var t=qe(n)?dn(n):void 0,r=t?t[0]:n.charAt(0),o=t?Je(t,1).join(""):n.slice(1);return r[e]()+o}}("toUpperCase");var sn=function(e){return ln(je(e).toLowerCase())};var vn=function(e,n,t,r){var o=-1,a=null==e?0:e.length;for(r&&a&&(t=e[++o]);++o<a;)t=n(t,e[o],o,e);return t};var pn=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),hn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,bn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var gn=function(e){return(e=je(e))&&e.replace(hn,pn).replace(bn,"")},mn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var yn=function(e){return e.match(mn)||[]},wn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var kn=function(e){return wn.test(e)},_n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xn="["+_n+"]",jn="\\d+",Cn="[\\u2700-\\u27bf]",En="[a-z\\xdf-\\xf6\\xf8-\\xff]",Sn="[^\\ud800-\\udfff"+_n+jn+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",On="(?:\\ud83c[\\udde6-\\uddff]){2}",An="[\\ud800-\\udbff][\\udc00-\\udfff]",Mn="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Tn="(?:"+En+"|"+Sn+")",$n="(?:"+Mn+"|"+Sn+")",Nn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",Ln="[\\ufe0e\\ufe0f]?"+Nn+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",On,An].join("|")+")[\\ufe0e\\ufe0f]?"+Nn+")*"),In="(?:"+[Cn,On,An].join("|")+")"+Ln,Rn=RegExp([Mn+"?"+En+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[xn,Mn,"$"].join("|")+")",$n+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[xn,Mn+Tn,"$"].join("|")+")",Mn+"?"+Tn+"+(?:['’](?:d|ll|m|re|s|t|ve))?",Mn+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",jn,In].join("|"),"g");var zn=function(e){return e.match(Rn)||[]};var Bn=function(e,n,t){return e=je(e),void 0===(n=t?void 0:n)?kn(e)?zn(e):yn(e):e.match(n)||[]},Un=RegExp("['’]","g");var Fn=function(e){return function(n){return vn(Bn(gn(n).replace(Un,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?sn(n):n)}));var Pn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var Wn=function(e){return null!=e&&Pn(e.length)&&!j(e)},Dn=/^(?:0|[1-9]\d*)$/;var Vn=function(e,n){var t=r(e);return!!(n=null==n?9007199254740991:n)&&("number"==t||"symbol"!=t&&Dn.test(e))&&e>-1&&e%1==0&&e<n};var Zn=function(e,n,t){if(!_(t))return!1;var o=r(n);return!!("number"==o?Wn(t)&&Vn(n,t.length):"string"==o&&n in t)&&q(t[n],e)};var Yn=function(e){return g(e)&&"[object RegExp]"==b(e)};var Gn=function(e){return function(n){return e(n)}},Jn=t((function(e,n){var t=n&&!n.nodeType&&n,r=t&&e&&!e.nodeType&&e,a=r&&r.exports===t&&o.process,i=function(){try{var e=r&&r.require&&r.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=i})),Hn=Jn&&Jn.isRegExp,qn=Hn?Gn(Hn):Yn;var Xn=function(e,n,t){return t&&"number"!=typeof t&&Zn(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=je(e))&&("string"==typeof n||null!=n&&!qn(n))&&!(n=xe(n))&&qe(e)?Je(dn(e),0,t):e.split(n,t):[]},Kn=Object.prototype;var Qn=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Kn)};var et=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),nt=Object.prototype.hasOwnProperty;var tt=function(e){if(!Qn(e))return et(e);var n=[];for(var t in Object(e))nt.call(e,t)&&"constructor"!=t&&n.push(t);return n},rt=B(i,"DataView"),ot=B(i,"Promise"),at=B(i,"Set"),it=B(i,"WeakMap"),ut=A(rt),ft=A(ae),ct=A(ot),dt=A(at),lt=A(it),st=b;(rt&&"[object DataView]"!=st(new rt(new ArrayBuffer(1)))||ae&&"[object Map]"!=st(new ae)||ot&&"[object Promise]"!=st(ot.resolve())||at&&"[object Set]"!=st(new at)||it&&"[object WeakMap]"!=st(new it))&&(st=function(e){var n=b(e),t="[object Object]"==n?e.constructor:void 0,r=t?A(t):"";if(r)switch(r){case ut:return"[object DataView]";case ft:return"[object Map]";case ct:return"[object Promise]";case dt:return"[object Set]";case lt:return"[object WeakMap]"}return n});var vt=st;var pt=function(n){return"string"==typeof n||!e(n)&&g(n)&&"[object String]"==b(n)};var ht=function(e){return function(n){return null==n?void 0:n[e]}}("length"),bt="[\\ud800-\\udfff]",gt="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",mt="\\ud83c[\\udffb-\\udfff]",yt="[^\\ud800-\\udfff]",wt="(?:\\ud83c[\\udde6-\\uddff]){2}",kt="[\\ud800-\\udbff][\\udc00-\\udfff]",_t="(?:"+gt+"|"+mt+")"+"?",xt="[\\ufe0e\\ufe0f]?"+_t+("(?:\\u200d(?:"+[yt,wt,kt].join("|")+")[\\ufe0e\\ufe0f]?"+_t+")*"),jt="(?:"+[yt+gt+"?",gt,wt,kt,bt].join("|")+")",Ct=RegExp(mt+"(?="+mt+")|"+jt+xt,"g");var Et=function(e){for(var n=Ct.lastIndex=0;Ct.test(e);)++n;return n};var St=function(e){return qe(e)?Et(e):ht(e)};var Ot=function(e){if(null==e)return 0;if(Wn(e))return pt(e)?St(e):e.length;var n=vt(e);return"[object Map]"==n||"[object Set]"==n?e.size:tt(e).length},At={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};var Mt={props:{value:{type:Boolean,default:!1},minWidth:{type:Number,default:void 0},maxWidth:{type:Number,default:void 0},distY:{type:Number,default:5},backgroundColor:{type:String,default:"white"},editable:{type:Boolean,default:!0}},data:function(){return{clickInner:!1,eleMousedown:null,windowMousedown:null,windowMouseup:null}},mounted:function(){var e=this;e.eleMousedown=function(n){e.clickInner=!0,function(e){e&&(e.cancelable&&(window.event?e.cancelBubble=!0:e.stopPropagation(),e.preventDefault()))}(n)},function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180,t=Ae();if(!Me(e))return t.reject("waitfunction需輸入函數f"),t;if(!0===e())return t.resolve(),t;Ye(n)||(n=180);var r=0,o=setInterval((function(){r+=1,!0===e()&&(clearInterval(o),t.resolve()),r>=n&&(clearInterval(o),t.resolve())}),1e3);return t}((function(){return null!==Oe(e,"$refs.divContent.addEventListener",null)})).then((function(){var n=e.$refs.divContent;n&&n.addEventListener("mousedown",e.eleMousedown)})),e.windowMousedown=function(n){e.clickInner=!1},window.addEventListener("mousedown",e.windowMousedown),e.windowMouseup=function(n){!e.clickInner&&e.value&&e.changeValue(!1)},window.addEventListener("mouseup",e.windowMouseup)},beforeDestroy:function(){var e=Oe(this,"$refs.divContent",null);e&&e.removeEventListener("mousedown",this.eleMousedown),window.removeEventListener("mousedown",this.windowMousedown),window.removeEventListener("mouseup",this.windowMouseup)},computed:{useBackgroundColor:function(){return function(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Xn(e," ");if(2!==Ot(n))return e;var t=n[0].trim();t=Fn(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var o=Oe(At,"default.".concat(t,".").concat(r),null);return null===o&&(o=e),o}(this.backgroundColor)}},methods:{changeValue:function(e){var n=this;try{n.$refs.divContent.parentNode.style.background=n.useBackgroundColor}catch(e){}setTimeout((function(){n.$emit("input",e)}),1)},clickTrigger:function(e){var n=this;n.editable?n.value&&setTimeout((function(){n.$emit("input",!0)}),10):setTimeout((function(){n.$emit("input",!1)}),10)}}};function Tt(e,n,t,r,o,a,i,u,f,c){"boolean"!=typeof i&&(f=u,u=i,i=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,f(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=d):n&&(d=i?function(e){n.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,u(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,d):[d]}return t}var $t,Nt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Lt(e){return function(e,n){return function(e,n){var t=Nt?n.media||"default":e,r=It[t]||(It[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var o=n.source;if(n.map&&(o+="\n/*# sourceURL="+n.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===$t&&($t=document.head||document.getElementsByTagName("head")[0]),$t.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var a=r.ids.size-1,i=document.createTextNode(o),u=r.element.childNodes;u[a]&&r.element.removeChild(u[a]),u.length?r.element.insertBefore(i,u[a]):r.element.appendChild(i)}}}(e,n)}}var It={};const Rt=Mt;var zt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-menu",{attrs:{"offset-y":"","min-width":e.minWidth,"max-width":e.maxWidth,"nudge-top":-e.distY,"close-on-click":!1,"close-on-content-click":!1,value:e.value,disabled:!e.editable},on:{input:e.changeValue},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t("div",e._g({staticStyle:{display:"inline-block"},on:{click:e.clickTrigger}},r),[e._t("trigger")],2)]}}],null,!0)},[e._v(" "),t("div",{ref:"divContent",style:"background:"+e.useBackgroundColor+";"},[e._t("content")],2)])};zt._withStripped=!0;return Tt({render:zt,staticRenderFns:[]},(function(e){e&&e("data-v-aad39982_0",{source:"\n[data-v-aad39982] .v-menu__content {\r\n    background: #62f;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WPopup.vue"],names:[],mappings:";AAyNA;IACA,gBAAA;AACA",file:"WPopup.vue",sourcesContent:["<template >\r\n    <v-menu\r\n        offset-y\r\n        :min-width=\"minWidth\"\r\n        :max-width=\"maxWidth\"\r\n        :nudge-top=\"-distY\"\r\n        :close-on-click=\"false\"\r\n        :close-on-content-click=\"false\"\r\n        :value=\"value\"\r\n        :disabled=\"!editable\"\r\n        @input=\"changeValue\"\r\n    >\r\n\r\n        <template v-slot:activator=\"{ on }\">\r\n            <div\r\n                style=\"display:inline-block;\"\r\n                v-on=\"on\"\r\n                @click=\"clickTrigger\"\r\n            >\r\n                <slot name=\"trigger\"></slot>\r\n            </div>\r\n        </template>\r\n\r\n        <div\r\n            ref=\"divContent\"\r\n            :style=\"`background:${useBackgroundColor};`\"\r\n        >\r\n            <slot name=\"content\"></slot>\r\n        </div>\r\n\r\n    </v-menu>\r\n</template>\r\n\r\n<script>\r\nimport get from 'lodash/get'\r\nimport waitFun from 'wsemi/src/waitFun.mjs'\r\nimport domCancelEvent from 'wsemi/src/domCancelEvent.mjs'\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\n\r\n\r\n/**\r\n * @vue-prop {Number} [value=false] 輸入是否顯示，預設false\r\n * @vue-prop {Number} [minWidth=undefined] 輸入最小寬度，單位為px，預設undefined\r\n * @vue-prop {Number} [maxWidth=undefined] 輸入最大寬度，單位為px，預設undefined\r\n * @vue-prop {Number} [distY=5] 輸入彈窗距離觸發元素底部的距離，單位為px，預設5\r\n * @vue-prop {String} [backgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n */\r\nexport default {\r\n    props: {\r\n        value: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n        minWidth: {\r\n            type: Number,\r\n            default: undefined,\r\n        },\r\n        maxWidth: {\r\n            type: Number,\r\n            default: undefined,\r\n        },\r\n        distY: {\r\n            type: Number,\r\n            default: 5,\r\n        },\r\n        backgroundColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            clickInner: false,\r\n            eleMousedown: null,\r\n            windowMousedown: null,\r\n            windowMouseup: null,\r\n        }\r\n    },\r\n    mounted: function() {\r\n        //console.log('mounted')\r\n\r\n        let vo = this\r\n\r\n        //eleMousedown\r\n        vo.eleMousedown = (e) => {\r\n            vo.clickInner = true\r\n            domCancelEvent(e)\r\n        }\r\n        waitFun(() => {\r\n            return get(vo, '$refs.divContent.addEventListener', null) !== null //不能保證slot已載入有元素可addEventListener, 故需等待\r\n        })\r\n            .then(() => {\r\n\r\n                //ele\r\n                let ele = vo.$refs.divContent\r\n\r\n                //check, 因為hotreload會導致重新載入, 而若剛好waitFun剛通過觸發then就會再失去該元素, 故需再次檢核\r\n                if (ele) {\r\n                    ele.addEventListener('mousedown', vo.eleMousedown)\r\n                }\r\n\r\n            })\r\n\r\n        //windowMousedown\r\n        vo.windowMousedown = (e) => {\r\n            vo.clickInner = false //因為eleMousedown會cancelEvent, 所以點擊ele時不會觸發window mousedown\r\n            //domCancelEvent(e)\r\n        }\r\n        window.addEventListener('mousedown', vo.windowMousedown)\r\n\r\n        //windowMouseup\r\n        vo.windowMouseup = (e) => {\r\n            if (!vo.clickInner && vo.value) {\r\n                vo.changeValue(false)\r\n                //domCancelEvent(e)\r\n            }\r\n        }\r\n        window.addEventListener('mouseup', vo.windowMouseup)\r\n\r\n    },\r\n    beforeDestroy: function() {\r\n        //console.log('beforeDestroy')\r\n\r\n        let vo = this\r\n\r\n        //ele\r\n        let ele = get(vo, '$refs.divContent', null)\r\n\r\n        //ele remove mousedown\r\n        if (ele) {\r\n            ele.removeEventListener('mousedown', vo.eleMousedown)\r\n        }\r\n\r\n        //window remove mousedown, mouseup\r\n        window.removeEventListener('mousedown', vo.windowMousedown)\r\n        window.removeEventListener('mouseup', vo.windowMouseup)\r\n\r\n    },\r\n    computed: {\r\n\r\n        useBackgroundColor: function() {\r\n            //console.log('computed useBackgroundColor')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.backgroundColor)\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        changeValue: function(value) {\r\n            //console.log('methods changeValue', value)\r\n\r\n            let vo = this\r\n\r\n            //覆蓋parentNode background\r\n            //因slot內可能使用margin導致會使用到parentNode的background, 通過使用者點擊而組件顯示或隱藏時馬上覆蓋parentNode的background, 可避免突然換色問題\r\n            //value因clickTrigger中強制v-menu要為顯示不隱藏, 故value會得到false但仍為顯示狀態, 所以此處不能用if判斷value作為執行依據\r\n            try {\r\n                vo.$refs.divContent.parentNode.style.background = vo.useBackgroundColor\r\n            }\r\n            catch (err) {}\r\n\r\n            //setTimeout, 延遲更改, 要避免比window click快觸發\r\n            setTimeout(() => {\r\n\r\n                //emit\r\n                vo.$emit('input', value)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n        clickTrigger: function(e) {\r\n            //console.log('methods clickTrigger', e)\r\n\r\n            let vo = this\r\n\r\n            //check\r\n            if (!vo.editable) {\r\n\r\n                //setTimeout, 因無法簡單阻止使用者點擊slot內容. 只好延遲emit強制恢復隱藏\r\n                setTimeout(() => {\r\n\r\n                    //emit\r\n                    vo.$emit('input', false)\r\n\r\n                }, 10)\r\n\r\n                return\r\n            }\r\n\r\n            if (vo.value) {\r\n\r\n                //setTimeout, 因無法簡單阻止重複點擊trigger隱藏v-menu, 只好延遲emit強制恢復顯示\r\n                setTimeout(() => {\r\n\r\n                    //emit\r\n                    vo.$emit('input', true)\r\n\r\n                }, 10)\r\n\r\n            }\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n::v-deep .v-menu__content {\r\n    background: #62f;\r\n}\r\n</style>\r\n\r\n"]},media:void 0})}),Rt,"data-v-aad39982",!1,void 0,!1,Lt,void 0,void 0)}));
//# sourceMappingURL=w-popup.umd.js.map
