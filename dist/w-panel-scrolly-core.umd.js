/*!
 * w-panel-scrolly-core v1.4.0
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-panel-scrolly-core"]=n()}(this,(function(){"use strict";var e=Array.isArray,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&t.path)}},t.exports),t.exports}var r=t((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),a="object"==r(n)&&n&&n.Object===Object&&n,i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,o=a||i||Function("return this")(),f=o.Symbol,c=Object.prototype,u=c.hasOwnProperty,s=c.toString,l=f?f.toStringTag:void 0;var d=function(e){var n=u.call(e,l),t=e[l];try{e[l]=void 0;var r=!0}catch(e){}var a=s.call(e);return r&&(n?e[l]=t:delete e[l]),a},h=Object.prototype.toString;var v=function(e){return h.call(e)},p=f?f.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":p&&p in Object(e)?d(e):v(e)};var g=function(e){return null!=e&&"object"==r(e)};var y=function(e){return"symbol"==r(e)||g(e)&&"[object Symbol]"==b(e)},m=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var _=function(n,t){if(e(n))return!1;var a=r(n);return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=n&&!y(n))||(x.test(n)||!m.test(n)||null!=t&&n in Object(t))};var w=function(e){var n=r(e);return null!=e&&("object"==n||"function"==n)};var k,j=function(e){if(!w(e))return!1;var n=b(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},O=o["__core-js_shared__"],E=(k=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var S=function(e){return!!E&&E in e},L=Function.prototype.toString;var B=function(e){if(null!=e){try{return L.call(e)}catch(e){}try{return e+""}catch(e){}}return""},P=/^\[object .+?Constructor\]$/,T=Function.prototype,C=Object.prototype,H=T.toString,z=C.hasOwnProperty,R=RegExp("^"+H.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var M=function(e){return!(!w(e)||S(e))&&(j(e)?R:P).test(B(e))};var A=function(e,n){return null==e?void 0:e[n]};var $=function(e,n){var t=A(e,n);return M(t)?t:void 0},N=$(Object,"create");var Y=function(){this.__data__=N?N(null):{},this.size=0};var D=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},I=Object.prototype.hasOwnProperty;var W=function(e){var n=this.__data__;if(N){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return I.call(n,e)?n[e]:void 0},U=Object.prototype.hasOwnProperty;var X=function(e){var n=this.__data__;return N?void 0!==n[e]:U.call(n,e)};var F=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=N&&void 0===n?"__lodash_hash_undefined__":n,this};function Z(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Z.prototype.clear=Y,Z.prototype.delete=D,Z.prototype.get=W,Z.prototype.has=X,Z.prototype.set=F;var G=Z;var V=function(){this.__data__=[],this.size=0};var q=function(e,n){return e===n||e!=e&&n!=n};var J=function(e,n){for(var t=e.length;t--;)if(q(e[t][0],n))return t;return-1},K=Array.prototype.splice;var Q=function(e){var n=this.__data__,t=J(n,e);return!(t<0)&&(t==n.length-1?n.pop():K.call(n,t,1),--this.size,!0)};var ee=function(e){var n=this.__data__,t=J(n,e);return t<0?void 0:n[t][1]};var ne=function(e){return J(this.__data__,e)>-1};var te=function(e,n){var t=this.__data__,r=J(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function re(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}re.prototype.clear=V,re.prototype.delete=Q,re.prototype.get=ee,re.prototype.has=ne,re.prototype.set=te;var ae=re,ie=$(o,"Map");var oe=function(){this.size=0,this.__data__={hash:new G,map:new(ie||ae),string:new G}};var fe=function(e){var n=r(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var ce=function(e,n){var t=e.__data__;return fe(n)?t["string"==typeof n?"string":"hash"]:t.map};var ue=function(e){var n=ce(this,e).delete(e);return this.size-=n?1:0,n};var se=function(e){return ce(this,e).get(e)};var le=function(e){return ce(this,e).has(e)};var de=function(e,n){var t=ce(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function he(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}he.prototype.clear=oe,he.prototype.delete=ue,he.prototype.get=se,he.prototype.has=le,he.prototype.set=de;var ve=he;function pe(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return t.cache=i.set(a,o)||i,o};return t.cache=new(pe.Cache||ve),t}pe.Cache=ve;var be=pe;var ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/\\(\\)?/g,me=function(e){var n=be(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(ge,(function(e,t,r,a){n.push(r?a.replace(ye,"$1"):t||e)})),n}));var xe=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},_e=f?f.prototype:void 0,we=_e?_e.toString:void 0;var ke=function n(t){if("string"==typeof t)return t;if(e(t))return xe(t,n)+"";if(y(t))return we?we.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var je=function(e){return null==e?"":ke(e)};var Oe=function(n,t){return e(n)?n:_(n,t)?[n]:me(je(n))};var Ee=function(e){if("string"==typeof e||y(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var Se=function(e,n){for(var t=0,r=(n=Oe(n,e)).length;null!=e&&t<r;)e=e[Ee(n[t++])];return t&&t==r?e:void 0};var Le=function(e,n,t){var r=null==e?void 0:Se(e,n);return void 0===r?t:r};var Be=function(e){return!0===e||!1===e||g(e)&&"[object Boolean]"==b(e)},Pe=t((function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}function a(e,n,t){this.fn=e,this.context=n,this.once=t||!1}function i(e,n,r,i,o){if("function"!=typeof r)throw new TypeError("The listener must be a function");var f=new a(r,i||e,o),c=t?t+n:n;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],f]:e._events[c].push(f):(e._events[c]=f,e._eventsCount++),e}function o(e,n){0==--e._eventsCount?e._events=new r:delete e._events[n]}function f(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(t=!1)),f.prototype.eventNames=function(){var e,r,a=[];if(0===this._eventsCount)return a;for(r in e=this._events)n.call(e,r)&&a.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(e)):a},f.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var a=0,i=r.length,o=new Array(i);a<i;a++)o[a]=r[a].fn;return o},f.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},f.prototype.emit=function(e,n,r,a,i,o){var f=t?t+e:e;if(!this._events[f])return!1;var c,u,s=this._events[f],l=arguments.length;if(s.fn){switch(s.once&&this.removeListener(e,s.fn,void 0,!0),l){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,n),!0;case 3:return s.fn.call(s.context,n,r),!0;case 4:return s.fn.call(s.context,n,r,a),!0;case 5:return s.fn.call(s.context,n,r,a,i),!0;case 6:return s.fn.call(s.context,n,r,a,i,o),!0}for(u=1,c=new Array(l-1);u<l;u++)c[u-1]=arguments[u];s.fn.apply(s.context,c)}else{var d,h=s.length;for(u=0;u<h;u++)switch(s[u].once&&this.removeListener(e,s[u].fn,void 0,!0),l){case 1:s[u].fn.call(s[u].context);break;case 2:s[u].fn.call(s[u].context,n);break;case 3:s[u].fn.call(s[u].context,n,r);break;case 4:s[u].fn.call(s[u].context,n,r,a);break;default:if(!c)for(d=1,c=new Array(l-1);d<l;d++)c[d-1]=arguments[d];s[u].fn.apply(s[u].context,c)}}return!0},f.prototype.on=function(e,n,t){return i(this,e,n,t,!1)},f.prototype.once=function(e,n,t){return i(this,e,n,t,!0)},f.prototype.removeListener=function(e,n,r,a){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return o(this,i),this;var f=this._events[i];if(f.fn)f.fn!==n||a&&!f.once||r&&f.context!==r||o(this,i);else{for(var c=0,u=[],s=f.length;c<s;c++)(f[c].fn!==n||a&&!f[c].once||r&&f[c].context!==r)&&u.push(f[c]);u.length?this._events[i]=1===u.length?u[0]:u:o(this,i)}return this},f.prototype.removeAllListeners=function(e){var n;return e?(n=t?t+e:e,this._events[n]&&o(this,n)):(this._events=new r,this._eventsCount=0),this},f.prototype.off=f.prototype.removeListener,f.prototype.addListener=f.prototype.on,f.prefixed=t,f.EventEmitter=f,e.exports=f}));function Te(){return new Pe}function Ce(e){if(!e)return"invalid event";if(!e.cancelable)return"event is not cancelable";try{window.event?e.cancelBubble=!0:e.stopPropagation(),e.preventDefault()}catch(e){}}var He=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},ze=/^\s+|\s+$/g,Re=/^[-+]0x[0-9a-f]+$/i,Me=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,$e=parseInt;var Ne=function(e){if("number"==typeof e)return e;if(y(e))return NaN;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(ze,"");var t=Me.test(e);return t||Ae.test(e)?$e(e.slice(2),t?2:8):Re.test(e)?NaN:+e};var Ye=function(e){return e?(e=Ne(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var De=function(e){var n=Ye(e),t=n%1;return n==n?t?n-t:n:0};var Ie=function(e){return"number"==typeof e&&e==De(e)};function We(e){return!(!function(e){return"[object String]"===Object.prototype.toString.call(e)}(e)||""===e)}function Ue(e){var n=!1;return We(e)?n=!isNaN(Number(e)):function(e){return"[object Number]"===Object.prototype.toString.call(e)}(e)&&(n=!0),n}function Xe(e){return Ue(e)?Ye(e):0}var Fe=o.isFinite,Ze=Math.min;var Ge=function(e){var n=Math[e];return function(e,t){if(e=Ne(e),(t=null==t?0:Ze(De(t),292))&&Fe(e)){var r=(je(e)+"e").split("e"),a=n(r[0]+"e"+(+r[1]+t));return+((r=(je(a)+"e").split("e"))[0]+"e"+(+r[1]-t))}return n(e)}}("round");function Ve(e){return!!function(e){return!!Ue(e)&&(e=Xe(e),Ie(e))}(e)&&function(e){if(!Ue(e))return 0;e=Xe(e);var n=Ge(e);return"0"===String(n)?0:n}(e)>0}function qe(e){var n=Object.prototype.toString.call(e);return"[object Function]"===n||"[object AsyncFunction]"===n}function Je(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ke(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Je(Object(t),!0).forEach((function(n){He(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Qe=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(a);++r<a;)i[r]=e[r+n];return i};var en=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:Qe(e,n,t)},nn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var tn=function(e){return nn.test(e)};var rn=function(e){return e.split("")},an="[\\ud800-\\udfff]",on="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",fn="\\ud83c[\\udffb-\\udfff]",cn="[^\\ud800-\\udfff]",un="(?:\\ud83c[\\udde6-\\uddff]){2}",sn="[\\ud800-\\udbff][\\udc00-\\udfff]",ln="(?:"+on+"|"+fn+")"+"?",dn="[\\ufe0e\\ufe0f]?"+ln+("(?:\\u200d(?:"+[cn,un,sn].join("|")+")[\\ufe0e\\ufe0f]?"+ln+")*"),hn="(?:"+[cn+on+"?",on,un,sn,an].join("|")+")",vn=RegExp(fn+"(?="+fn+")|"+hn+dn,"g");var pn=function(e){return e.match(vn)||[]};var bn=function(e){return tn(e)?pn(e):rn(e)};var gn=function(e){return function(n){n=je(n);var t=tn(n)?bn(n):void 0,r=t?t[0]:n.charAt(0),a=t?en(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var yn=function(e){return gn(je(e).toLowerCase())};var mn=function(e,n,t,r){var a=-1,i=null==e?0:e.length;for(r&&i&&(t=e[++a]);++a<i;)t=n(t,e[a],a,e);return t};var xn=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),_n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var kn=function(e){return(e=je(e))&&e.replace(_n,xn).replace(wn,"")},jn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var On=function(e){return e.match(jn)||[]},En=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var Sn=function(e){return En.test(e)},Ln="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Bn="["+Ln+"]",Pn="\\d+",Tn="[\\u2700-\\u27bf]",Cn="[a-z\\xdf-\\xf6\\xf8-\\xff]",Hn="[^\\ud800-\\udfff"+Ln+Pn+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",zn="(?:\\ud83c[\\udde6-\\uddff]){2}",Rn="[\\ud800-\\udbff][\\udc00-\\udfff]",Mn="[A-Z\\xc0-\\xd6\\xd8-\\xde]",An="(?:"+Cn+"|"+Hn+")",$n="(?:"+Mn+"|"+Hn+")",Nn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",Yn="[\\ufe0e\\ufe0f]?"+Nn+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",zn,Rn].join("|")+")[\\ufe0e\\ufe0f]?"+Nn+")*"),Dn="(?:"+[Tn,zn,Rn].join("|")+")"+Yn,In=RegExp([Mn+"?"+Cn+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Bn,Mn,"$"].join("|")+")",$n+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Bn,Mn+An,"$"].join("|")+")",Mn+"?"+An+"+(?:['’](?:d|ll|m|re|s|t|ve))?",Mn+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Pn,Dn].join("|"),"g");var Wn=function(e){return e.match(In)||[]};var Un=function(e,n,t){return e=je(e),void 0===(n=t?void 0:n)?Sn(e)?Wn(e):On(e):e.match(n)||[]},Xn=RegExp("['’]","g");var Fn=function(e){return function(n){return mn(Un(kn(n).replace(Xn,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?yn(n):n)}));var Zn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var Gn=function(e){return null!=e&&Zn(e.length)&&!j(e)},Vn=/^(?:0|[1-9]\d*)$/;var qn=function(e,n){var t=r(e);return!!(n=null==n?9007199254740991:n)&&("number"==t||"symbol"!=t&&Vn.test(e))&&e>-1&&e%1==0&&e<n};var Jn=function(e,n,t){if(!w(t))return!1;var a=r(n);return!!("number"==a?Gn(t)&&qn(n,t.length):"string"==a&&n in t)&&q(t[n],e)};var Kn=function(e){return g(e)&&"[object RegExp]"==b(e)};var Qn=function(e){return function(n){return e(n)}},et=t((function(e,n){var t=n&&!n.nodeType&&n,r=t&&e&&!e.nodeType&&e,i=r&&r.exports===t&&a.process,o=function(){try{var e=r&&r.require&&r.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o})),nt=et&&et.isRegExp,tt=nt?Qn(nt):Kn;var rt=function(e,n,t){return t&&"number"!=typeof t&&Jn(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=je(e))&&("string"==typeof n||null!=n&&!tt(n))&&!(n=ke(n))&&tn(e)?en(bn(e),0,t):e.split(n,t):[]},at=Object.prototype;var it=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||at)};var ot=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),ft=Object.prototype.hasOwnProperty;var ct=function(e){if(!it(e))return ot(e);var n=[];for(var t in Object(e))ft.call(e,t)&&"constructor"!=t&&n.push(t);return n},ut=$(o,"DataView"),st=$(o,"Promise"),lt=$(o,"Set"),dt=$(o,"WeakMap"),ht=B(ut),vt=B(ie),pt=B(st),bt=B(lt),gt=B(dt),yt=b;(ut&&"[object DataView]"!=yt(new ut(new ArrayBuffer(1)))||ie&&"[object Map]"!=yt(new ie)||st&&"[object Promise]"!=yt(st.resolve())||lt&&"[object Set]"!=yt(new lt)||dt&&"[object WeakMap]"!=yt(new dt))&&(yt=function(e){var n=b(e),t="[object Object]"==n?e.constructor:void 0,r=t?B(t):"";if(r)switch(r){case ht:return"[object DataView]";case vt:return"[object Map]";case pt:return"[object Promise]";case bt:return"[object Set]";case gt:return"[object WeakMap]"}return n});var mt=yt;var xt=function(n){return"string"==typeof n||!e(n)&&g(n)&&"[object String]"==b(n)};var _t=function(e){return function(n){return null==n?void 0:n[e]}}("length"),wt="[\\ud800-\\udfff]",kt="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",jt="\\ud83c[\\udffb-\\udfff]",Ot="[^\\ud800-\\udfff]",Et="(?:\\ud83c[\\udde6-\\uddff]){2}",St="[\\ud800-\\udbff][\\udc00-\\udfff]",Lt="(?:"+kt+"|"+jt+")"+"?",Bt="[\\ufe0e\\ufe0f]?"+Lt+("(?:\\u200d(?:"+[Ot,Et,St].join("|")+")[\\ufe0e\\ufe0f]?"+Lt+")*"),Pt="(?:"+[Ot+kt+"?",kt,Et,St,wt].join("|")+")",Tt=RegExp(jt+"(?="+jt+")|"+Pt+Bt,"g");var Ct=function(e){for(var n=Tt.lastIndex=0;Tt.test(e);)++n;return n};var Ht=function(e){return tn(e)?Ct(e):_t(e)};var zt=function(e){if(null==e)return 0;if(Gn(e))return xt(e)?Ht(e):e.length;var n=mt(e);return"[object Map]"==n||"[object Set]"==n?e.size:ct(e).length},Rt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function Mt(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=rt(e," ");if(2!==zt(n))return e;var t=n[0].trim();t=Fn(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=Le(Rt,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}var At={props:{viewHeightMax:{type:Number,default:400},contentHeight:{type:Number,default:1e4},scrollDelta:{type:Number,default:100},barColor:{type:String,default:"rgba(0,0,0,0.2)"},barBackgroundColor:{type:String,default:"transparent"},barWidth:{type:Number,default:8},barHeightMin:{type:Number,default:50},ratio:{type:Number,default:0}},data:function(){return{de:null,das:null,ratioTrans:0,barPressY:null,barOpacity:.5}},mounted:function(){var e=this,n=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Le(n,"timeInterval",null);Ve(t)||(t=20);var r=Le(n,"tolerancePixel",null);Ve(r)||(r=1);var a,i=Te(),o={offsetWidth:0,offsetHeight:0};if(!qe(e))return console.log("invalid f",e),null;a=setInterval((function(){var n=e();if(n){var t={offsetWidth:n.offsetWidth,offsetHeight:n.offsetHeight},a=Math.abs(o.offsetWidth-t.offsetWidth)>r,f=Math.abs(o.offsetHeight-t.offsetHeight)>r;if(a||f){var c=Ke({},o);setTimeout((function(){t.offsetWidth>0&&t.offsetHeight>0&&(i.emit("resize",{sold:c,snew:t,ele:n}),i.emit("resizeWithWindow",{sold:c,snew:t,ele:n,from:"dom"}))}),1)}o=t}}),t);var f=function(e){i.emit("resizeWithWindow",{snew:o,from:"window"})};return window.addEventListener("resize",f),i.clear=function(){clearInterval(a),window.removeEventListener("resize",f)},i}((function(){return e.$el}));n.on("resize",(function(n){e.triggerEvent("resize")})),e.de=n;var t=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=null,a=null,i=null,o=null,f=null,c=null,u=null,s=null,l=null,d=null,h=!1,v=Le(t,"getHeighRatio",null);j(v)||(v=function(){return 1});var p=Le(t,"getWidthRatio",null);j(p)||(p=function(){return 1});var b=Le(t,"stopScrollPropagationForPanel",null);Be(b)||(b=!1);var g=Le(t,"useTouchDragForPanel",null);Be(g)||(g=!0);var y=e,m=n,x=Te();function _(){r=function(e){var n=e.deltaY/Math.abs(e.deltaY),t=e.deltaX/Math.abs(e.deltaX);x.emit("scrollPanel",{ratioY:n,ratioX:t}),b&&Ce(e)},y.addEventListener("wheel",r),a=function(e){if(g){var n=-e.touches[0].clientY*v(),t=-e.touches[0].clientX*p();h=!0,x.emit("pressBar",{clientY:n,clientX:t})}},y.addEventListener("touchstart",a),i=function(e){if(h){var n=-e.touches[0].clientY*v(),t=-e.touches[0].clientX*p();x.emit("dragBar",{clientY:n,clientX:t}),Ce(e)}},y.addEventListener("touchmove",i),o=function(e){h&&(h=!1,x.emit("freeBar"))},y.addEventListener("touchend",o),f=function(e){h=!0,x.emit("pressBar",{clientY:e.clientY,clientX:e.clientX})},m.addEventListener("mousedown",f),c=function(e){h=!0,x.emit("pressBar",{clientY:e.touches[0].clientY,clientX:e.touches[0].clientX})},m.addEventListener("touchstart",c),u=function(e){h&&(x.emit("dragBar",{clientY:e.touches[0].clientY,clientX:e.touches[0].clientX}),Ce(e))},m.addEventListener("touchmove",u),s=function(e){h&&(h=!1,x.emit("freeBar"))},m.addEventListener("touchend",s),l=function(e){h&&x.emit("dragBar",{clientY:e.clientY,clientX:e.clientX})},window.addEventListener("mousemove",l),d=function(e){h&&(h=!1,x.emit("freeBar"),Ce(e))},window.addEventListener("mouseup",d)}function w(){y.removeEventListener("wheel",r),y.removeEventListener("touchstart",a),y.removeEventListener("touchmove",i),y.removeEventListener("touchend",o),m.removeEventListener("mousedown",f),m.removeEventListener("touchstart",c),m.removeEventListener("touchmove",u),m.removeEventListener("touchend",s),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",d)}return _(),x.clear=w,x}(e.$refs.divPanel,e.$refs.divBar,{getHeighRatio:function(){return e.heighRatio},stopScrollPropagationForPanel:!0});t.on("scrollPanel",e.scrollPanel),t.on("pressBar",e.pressBar),t.on("dragBar",e.dragBar),t.on("freeBar",e.freeBar),e.das=t},beforeDestroy:function(){this.de&&this.de.clear(),this.das&&this.das.clear()},computed:{useBarColor:function(){return Mt(this.barColor)},useBarBackgroundColor:function(){return Mt(this.barBackgroundColor)},changeRatio:function(){var e=this.ratio;return e=Math.max(e,0),e=Math.min(e,1),this.ratioTrans=e,""},heighRatio:function(){var e=this.contentHeight;return this.viewHeightMax/Math.max(e,1)},barSize:function(){var e=this.viewHeightMax/this.contentHeight,n=Math.max(e*this.viewHeightMax,this.barHeightMin);return n},barLoc:function(){return this.ratioTrans*this.viewHeightEff},contentHeightEff:function(){var e=this.contentHeight-this.viewHeightMax;return e=Math.max(e,0),this.triggerEvent("changeHeight"),e},viewHeightEff:function(){var e=this.viewHeightMax-this.barSize-4;return e=Math.max(e,0)},viewTop:function(){return this.ratioTrans*this.contentHeightEff},viewBottom:function(){return this.viewTop+this.viewHeightMax}},methods:{updateRatioTrans:function(e){e=Math.max(e,0),e=Math.min(e,1),0===this.contentHeightEff&&(e=0);var n=this.ratioTrans!==e;return n&&(this.ratioTrans=e),n},pressBar:function(e){var n=e.clientY;n&&(this.barPressY=n)},dragBar:function(e){var n=e.clientY,t=(n-this.barPressY)/this.viewHeightEff;this.scrollByDeltaRatio(t),this.barPressY=n},freeBar:function(){this.triggerEvent("freeBar")},triggerEvent:function(e){var n=this;n.$nextTick((function(){var t={from:e,r:n.ratioTrans,t:n.viewTop,b:n.viewBottom,ch:n.contentHeight};n.$emit("update:ratio",n.ratioTrans),n.$emit("change",t),e&&n.$emit(e,t)}))},scrollByDeltaRatio:function(e){var n=this.ratioTrans;n>=0&&n<=1&&(n+=e),this.updateRatioTrans(n)&&this.triggerEvent("scroll")},scrollByDelta:function(e){var n=e/this.contentHeight;this.scrollByDeltaRatio(n)},scrollPanel:function(e){var n=e.ratioY*this.scrollDelta;this.scrollByDelta(n)}}};function $t(e,n,t,r,a,i,o,f,c,u){"boolean"!=typeof o&&(c=f,f=o,o=!1);var s,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),i?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=s):n&&(s=o?function(e){n.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,f(e))}),s)if(l.functional){var d=l.render;l.render=function(e,n){return s.call(n),d(e,n)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,s):[s]}return t}var Nt,Yt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Dt(e){return function(e,n){return function(e,n){var t=Yt?n.media||"default":e,r=It[t]||(It[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===Nt&&(Nt=document.head||document.getElementsByTagName("head")[0]),Nt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,o=document.createTextNode(a),f=r.element.childNodes;f[i]&&r.element.removeChild(f[i]),f.length?r.element.insertBefore(o,f[i]):r.element.appendChild(o)}}}(e,n)}}var It={};const Wt=At;var Ut=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{style:"overflow:hidden; height:"+Math.min(e.contentHeight,e.viewHeightMax)+"px; box-sizing:content-box;"},[t("div",{style:"position:relative; overflow:hidden; height:"+e.viewHeightMax+"px; box-sizing:border-box;",attrs:{changeRatio:e.changeRatio},on:{mouseenter:function(n){e.barOpacity=1},mouseleave:function(n){e.barOpacity=.8}}},[t("div",{style:"height:"+(e.viewHeightMax+1)+"px;"}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.contentHeightEff>0,expression:"contentHeightEff>0"}],staticStyle:{position:"absolute",top:"0",right:"0px",height:"100%","z-index":"1"}},[t("div",{style:"position:relative; width:"+e.barWidth+"px; height:100%; background:"+e.useBarBackgroundColor+"; padding:2px 1px; box-sizing:border-box;"},[t("div",{ref:"divBar",style:"width:100%; height:"+e.barSize+"px; background:"+e.useBarColor+"; border-radius:15px; user-select:none; transform:translateY("+e.barLoc+"px); cursor:pointer; opacity:"+e.barOpacity+"; transition:opacity 0.5s;"})])]),e._v(" "),t("div",{ref:"divPanel",style:"position:absolute; top:0px; width:calc(100% + 18px); overflow-y:scroll; overflow-x:hidden; height:"+e.viewHeightMax+"px;"},[e._t("default")],2)])])};Ut._withStripped=!0;return $t({render:Ut,staticRenderFns:[]},(function(e){e&&e("data-v-6e5e743e_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WPanelScrollyCore.vue"},media:void 0})}),Wt,"data-v-6e5e743e",!1,void 0,!1,Dt,void 0,void 0)}));
//# sourceMappingURL=w-panel-scrolly-core.umd.js.map
