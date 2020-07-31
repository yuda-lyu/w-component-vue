/*!
 * w-panel-bulge v1.4.4
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-panel-bulge"]=n()}(this,(function(){"use strict";var e=Array.isArray,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&t.path)}},t.exports),t.exports}var r=t((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),a="object"==r(n)&&n&&n.Object===Object&&n,o="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,i=a||o||Function("return this")(),f=i.Symbol,c=Object.prototype,u=c.hasOwnProperty,d=c.toString,s=f?f.toStringTag:void 0;var l=function(e){var n=u.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=d.call(e);return r&&(n?e[s]=t:delete e[s]),a},h=Object.prototype.toString;var p=function(e){return h.call(e)},v=f?f.toStringTag:void 0;var g=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?l(e):p(e)};var b=function(e){return null!=e&&"object"==r(e)};var y=function(e){return"symbol"==r(e)||b(e)&&"[object Symbol]"==g(e)},x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,m=/^\w*$/;var _=function(n,t){if(e(n))return!1;var a=r(n);return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=n&&!y(n))||(m.test(n)||!x.test(n)||null!=t&&n in Object(t))};var k=function(e){var n=r(e);return null!=e&&("object"==n||"function"==n)};var w,j=function(e){if(!k(e))return!1;var n=g(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},C=i["__core-js_shared__"],S=(w=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"";var O=function(e){return!!S&&S in e},A=Function.prototype.toString;var P=function(e){if(null!=e){try{return A.call(e)}catch(e){}try{return e+""}catch(e){}}return""},B=/^\[object .+?Constructor\]$/,T=Function.prototype,E=Object.prototype,z=T.toString,R=E.hasOwnProperty,$=RegExp("^"+z.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var H=function(e){return!(!k(e)||O(e))&&(j(e)?$:B).test(P(e))};var N=function(e,n){return null==e?void 0:e[n]};var D=function(e,n){var t=N(e,n);return H(t)?t:void 0},L=D(Object,"create");var I=function(){this.__data__=L?L(null):{},this.size=0};var U=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},W=Object.prototype.hasOwnProperty;var M=function(e){var n=this.__data__;if(L){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return W.call(n,e)?n[e]:void 0},F=Object.prototype.hasOwnProperty;var Z=function(e){var n=this.__data__;return L?void 0!==n[e]:F.call(n,e)};var G=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=L&&void 0===n?"__lodash_hash_undefined__":n,this};function V(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}V.prototype.clear=I,V.prototype.delete=U,V.prototype.get=M,V.prototype.has=Z,V.prototype.set=G;var q=V;var J=function(){this.__data__=[],this.size=0};var Y=function(e,n){return e===n||e!=e&&n!=n};var X=function(e,n){for(var t=e.length;t--;)if(Y(e[t][0],n))return t;return-1},K=Array.prototype.splice;var Q=function(e){var n=this.__data__,t=X(n,e);return!(t<0)&&(t==n.length-1?n.pop():K.call(n,t,1),--this.size,!0)};var ee=function(e){var n=this.__data__,t=X(n,e);return t<0?void 0:n[t][1]};var ne=function(e){return X(this.__data__,e)>-1};var te=function(e,n){var t=this.__data__,r=X(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function re(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}re.prototype.clear=J,re.prototype.delete=Q,re.prototype.get=ee,re.prototype.has=ne,re.prototype.set=te;var ae=re,oe=D(i,"Map");var ie=function(){this.size=0,this.__data__={hash:new q,map:new(oe||ae),string:new q}};var fe=function(e){var n=r(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var ce=function(e,n){var t=e.__data__;return fe(n)?t["string"==typeof n?"string":"hash"]:t.map};var ue=function(e){var n=ce(this,e).delete(e);return this.size-=n?1:0,n};var de=function(e){return ce(this,e).get(e)};var se=function(e){return ce(this,e).has(e)};var le=function(e,n){var t=ce(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function he(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}he.prototype.clear=ie,he.prototype.delete=ue,he.prototype.get=de,he.prototype.has=se,he.prototype.set=le;var pe=he;function ve(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],o=t.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return t.cache=o.set(a,i)||o,i};return t.cache=new(ve.Cache||pe),t}ve.Cache=pe;var ge=ve;var be=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/\\(\\)?/g,xe=function(e){var n=ge(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(be,(function(e,t,r,a){n.push(r?a.replace(ye,"$1"):t||e)})),n}));var me=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},_e=f?f.prototype:void 0,ke=_e?_e.toString:void 0;var we=function n(t){if("string"==typeof t)return t;if(e(t))return me(t,n)+"";if(y(t))return ke?ke.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var je=function(e){return null==e?"":we(e)};var Ce=function(n,t){return e(n)?n:_(n,t)?[n]:xe(je(n))};var Se=function(e){if("string"==typeof e||y(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var Oe=function(e,n){for(var t=0,r=(n=Ce(n,e)).length;null!=e&&t<r;)e=e[Se(n[t++])];return t&&t==r?e:void 0};var Ae=function(e,n,t){var r=null==e?void 0:Oe(e,n);return void 0===r?t:r};function Pe(e){return!(!function(e){return"[object String]"===Object.prototype.toString.call(e)}(e)||""===e)}function Be(e){var n=!1;return Pe(e)?n=!isNaN(Number(e)):function(e){return"[object Number]"===Object.prototype.toString.call(e)}(e)&&(n=!0),n}var Te=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},Ee=/^\s+|\s+$/g,ze=/^[-+]0x[0-9a-f]+$/i,Re=/^0b[01]+$/i,$e=/^0o[0-7]+$/i,He=parseInt;var Ne=function(e){if("number"==typeof e)return e;if(y(e))return NaN;if(k(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=k(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ee,"");var t=Re.test(e);return t||$e.test(e)?He(e.slice(2),t?2:8):ze.test(e)?NaN:+e};var De=function(e){return e?(e=Ne(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Le=function(e){var n=De(e),t=n%1;return n==n?t?n-t:n:0};var Ie=function(e){return"number"==typeof e&&e==Le(e)};function Ue(e){return Be(e)?De(e):0}var We=i.isFinite,Me=Math.min;var Fe=function(e){var n=Math[e];return function(e,t){if(e=Ne(e),(t=null==t?0:Me(Le(t),292))&&We(e)){var r=(je(e)+"e").split("e"),a=n(r[0]+"e"+(+r[1]+t));return+((r=(je(a)+"e").split("e"))[0]+"e"+(+r[1]-t))}return n(e)}}("round");function Ze(e){return!!function(e){return!!Be(e)&&(e=Ue(e),Ie(e))}(e)&&function(e){if(!Be(e))return 0;e=Ue(e);var n=Fe(e);return"0"===String(n)?0:n}(e)>0}var Ge=t((function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}function a(e,n,t){this.fn=e,this.context=n,this.once=t||!1}function o(e,n,r,o,i){if("function"!=typeof r)throw new TypeError("The listener must be a function");var f=new a(r,o||e,i),c=t?t+n:n;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],f]:e._events[c].push(f):(e._events[c]=f,e._eventsCount++),e}function i(e,n){0==--e._eventsCount?e._events=new r:delete e._events[n]}function f(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(t=!1)),f.prototype.eventNames=function(){var e,r,a=[];if(0===this._eventsCount)return a;for(r in e=this._events)n.call(e,r)&&a.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(e)):a},f.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var a=0,o=r.length,i=new Array(o);a<o;a++)i[a]=r[a].fn;return i},f.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},f.prototype.emit=function(e,n,r,a,o,i){var f=t?t+e:e;if(!this._events[f])return!1;var c,u,d=this._events[f],s=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),s){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,n),!0;case 3:return d.fn.call(d.context,n,r),!0;case 4:return d.fn.call(d.context,n,r,a),!0;case 5:return d.fn.call(d.context,n,r,a,o),!0;case 6:return d.fn.call(d.context,n,r,a,o,i),!0}for(u=1,c=new Array(s-1);u<s;u++)c[u-1]=arguments[u];d.fn.apply(d.context,c)}else{var l,h=d.length;for(u=0;u<h;u++)switch(d[u].once&&this.removeListener(e,d[u].fn,void 0,!0),s){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,n);break;case 3:d[u].fn.call(d[u].context,n,r);break;case 4:d[u].fn.call(d[u].context,n,r,a);break;default:if(!c)for(l=1,c=new Array(s-1);l<s;l++)c[l-1]=arguments[l];d[u].fn.apply(d[u].context,c)}}return!0},f.prototype.on=function(e,n,t){return o(this,e,n,t,!1)},f.prototype.once=function(e,n,t){return o(this,e,n,t,!0)},f.prototype.removeListener=function(e,n,r,a){var o=t?t+e:e;if(!this._events[o])return this;if(!n)return i(this,o),this;var f=this._events[o];if(f.fn)f.fn!==n||a&&!f.once||r&&f.context!==r||i(this,o);else{for(var c=0,u=[],d=f.length;c<d;c++)(f[c].fn!==n||a&&!f[c].once||r&&f[c].context!==r)&&u.push(f[c]);u.length?this._events[o]=1===u.length?u[0]:u:i(this,o)}return this},f.prototype.removeAllListeners=function(e){var n;return e?(n=t?t+e:e,this._events[n]&&i(this,n)):(this._events=new r,this._eventsCount=0),this},f.prototype.off=f.prototype.removeListener,f.prototype.addListener=f.prototype.on,f.prefixed=t,f.EventEmitter=f,e.exports=f}));function Ve(){return new Ge}function qe(e){var n=Object.prototype.toString.call(e);return"[object Function]"===n||"[object AsyncFunction]"===n}function Je(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ye(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Je(Object(t),!0).forEach((function(n){Te(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Xe=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var o=Array(a);++r<a;)o[r]=e[r+n];return o};var Ke=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:Xe(e,n,t)},Qe=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var en=function(e){return Qe.test(e)};var nn=function(e){return e.split("")},tn="[\\ud800-\\udfff]",rn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",an="\\ud83c[\\udffb-\\udfff]",on="[^\\ud800-\\udfff]",fn="(?:\\ud83c[\\udde6-\\uddff]){2}",cn="[\\ud800-\\udbff][\\udc00-\\udfff]",un="(?:"+rn+"|"+an+")"+"?",dn="[\\ufe0e\\ufe0f]?"+un+("(?:\\u200d(?:"+[on,fn,cn].join("|")+")[\\ufe0e\\ufe0f]?"+un+")*"),sn="(?:"+[on+rn+"?",rn,fn,cn,tn].join("|")+")",ln=RegExp(an+"(?="+an+")|"+sn+dn,"g");var hn=function(e){return e.match(ln)||[]};var pn=function(e){return en(e)?hn(e):nn(e)};var vn=function(e){return function(n){n=je(n);var t=en(n)?pn(n):void 0,r=t?t[0]:n.charAt(0),a=t?Ke(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var gn=function(e){return vn(je(e).toLowerCase())};var bn=function(e,n,t,r){var a=-1,o=null==e?0:e.length;for(r&&o&&(t=e[++a]);++a<o;)t=n(t,e[a],a,e);return t};var yn=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,mn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var _n=function(e){return(e=je(e))&&e.replace(xn,yn).replace(mn,"")},kn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var wn=function(e){return e.match(kn)||[]},jn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var Cn=function(e){return jn.test(e)},Sn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",On="["+Sn+"]",An="\\d+",Pn="[\\u2700-\\u27bf]",Bn="[a-z\\xdf-\\xf6\\xf8-\\xff]",Tn="[^\\ud800-\\udfff"+Sn+An+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",En="(?:\\ud83c[\\udde6-\\uddff]){2}",zn="[\\ud800-\\udbff][\\udc00-\\udfff]",Rn="[A-Z\\xc0-\\xd6\\xd8-\\xde]",$n="(?:"+Bn+"|"+Tn+")",Hn="(?:"+Rn+"|"+Tn+")",Nn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",Dn="[\\ufe0e\\ufe0f]?"+Nn+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",En,zn].join("|")+")[\\ufe0e\\ufe0f]?"+Nn+")*"),Ln="(?:"+[Pn,En,zn].join("|")+")"+Dn,In=RegExp([Rn+"?"+Bn+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[On,Rn,"$"].join("|")+")",Hn+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[On,Rn+$n,"$"].join("|")+")",Rn+"?"+$n+"+(?:['’](?:d|ll|m|re|s|t|ve))?",Rn+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",An,Ln].join("|"),"g");var Un=function(e){return e.match(In)||[]};var Wn=function(e,n,t){return e=je(e),void 0===(n=t?void 0:n)?Cn(e)?Un(e):wn(e):e.match(n)||[]},Mn=RegExp("['’]","g");var Fn=function(e){return function(n){return bn(Wn(_n(n).replace(Mn,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?gn(n):n)}));var Zn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var Gn=function(e){return null!=e&&Zn(e.length)&&!j(e)},Vn=/^(?:0|[1-9]\d*)$/;var qn=function(e,n){var t=r(e);return!!(n=null==n?9007199254740991:n)&&("number"==t||"symbol"!=t&&Vn.test(e))&&e>-1&&e%1==0&&e<n};var Jn=function(e,n,t){if(!k(t))return!1;var a=r(n);return!!("number"==a?Gn(t)&&qn(n,t.length):"string"==a&&n in t)&&Y(t[n],e)};var Yn=function(e){return b(e)&&"[object RegExp]"==g(e)};var Xn=function(e){return function(n){return e(n)}},Kn=t((function(e,n){var t=n&&!n.nodeType&&n,r=t&&e&&!e.nodeType&&e,o=r&&r.exports===t&&a.process,i=function(){try{var e=r&&r.require&&r.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=i})),Qn=Kn&&Kn.isRegExp,et=Qn?Xn(Qn):Yn;var nt=function(e,n,t){return t&&"number"!=typeof t&&Jn(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=je(e))&&("string"==typeof n||null!=n&&!et(n))&&!(n=we(n))&&en(e)?Ke(pn(e),0,t):e.split(n,t):[]},tt=Object.prototype;var rt=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||tt)};var at=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),ot=Object.prototype.hasOwnProperty;var it=function(e){if(!rt(e))return at(e);var n=[];for(var t in Object(e))ot.call(e,t)&&"constructor"!=t&&n.push(t);return n},ft=D(i,"DataView"),ct=D(i,"Promise"),ut=D(i,"Set"),dt=D(i,"WeakMap"),st=P(ft),lt=P(oe),ht=P(ct),pt=P(ut),vt=P(dt),gt=g;(ft&&"[object DataView]"!=gt(new ft(new ArrayBuffer(1)))||oe&&"[object Map]"!=gt(new oe)||ct&&"[object Promise]"!=gt(ct.resolve())||ut&&"[object Set]"!=gt(new ut)||dt&&"[object WeakMap]"!=gt(new dt))&&(gt=function(e){var n=g(e),t="[object Object]"==n?e.constructor:void 0,r=t?P(t):"";if(r)switch(r){case st:return"[object DataView]";case lt:return"[object Map]";case ht:return"[object Promise]";case pt:return"[object Set]";case vt:return"[object WeakMap]"}return n});var bt=gt;var yt=function(n){return"string"==typeof n||!e(n)&&b(n)&&"[object String]"==g(n)};var xt=function(e){return function(n){return null==n?void 0:n[e]}}("length"),mt="[\\ud800-\\udfff]",_t="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",kt="\\ud83c[\\udffb-\\udfff]",wt="[^\\ud800-\\udfff]",jt="(?:\\ud83c[\\udde6-\\uddff]){2}",Ct="[\\ud800-\\udbff][\\udc00-\\udfff]",St="(?:"+_t+"|"+kt+")"+"?",Ot="[\\ufe0e\\ufe0f]?"+St+("(?:\\u200d(?:"+[wt,jt,Ct].join("|")+")[\\ufe0e\\ufe0f]?"+St+")*"),At="(?:"+[wt+_t+"?",_t,jt,Ct,mt].join("|")+")",Pt=RegExp(kt+"(?="+kt+")|"+At+Ot,"g");var Bt=function(e){for(var n=Pt.lastIndex=0;Pt.test(e);)++n;return n};var Tt=function(e){return en(e)?Bt(e):xt(e)};var Et=function(e){if(null==e)return 0;if(Gn(e))return yt(e)?Tt(e):e.length;var n=bt(e);return"[object Map]"==n||"[object Set]"==n?e.size:it(e).length},zt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function Rt(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=nt(e," ");if(2!==Et(n))return e;var t=n[0].trim();t=Fn(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=Ae(zt,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}var $t={props:{headerBorderRadius:{type:Number,default:0},headerPadding:{type:[Number,String],default:"0px 20px"},headerText:{type:String,default:""},headerTextColor:{type:String,default:"white"},headerBackgroundColor:{type:String,default:"rgb(77, 182, 172, 0.8)"},headerShadow:{type:Boolean,default:!0},contentBorderRadius:{type:Number,default:0},contentPadding:{type:[Number,String],default:0},contentBackgroundColor:{type:String,default:"white"},contentShadow:{type:Boolean,default:!0}},data:function(){return{de:null,headerHeight:0}},mounted:function(){var e=this,n=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Ae(n,"timeInterval",null);Ze(t)||(t=20);var r=Ae(n,"tolerancePixel",null);Ze(r)||(r=1);var a,o=Ve(),i={offsetWidth:0,offsetHeight:0};if(!qe(e))return console.log("invalid f",e),null;a=setInterval((function(){var n=e();if(n){var t={offsetWidth:n.offsetWidth,offsetHeight:n.offsetHeight},a=Math.abs(i.offsetWidth-t.offsetWidth)>r,f=Math.abs(i.offsetHeight-t.offsetHeight)>r;if(a||f){var c=Ye({},i);setTimeout((function(){t.offsetWidth>0&&t.offsetHeight>0&&(o.emit("resize",{sold:c,snew:t,ele:n}),o.emit("resizeWithWindow",{sold:c,snew:t,ele:n,from:"dom"}))}),1)}i=t}}),t);var f=function(e){o.emit("resizeWithWindow",{snew:i,from:"window"})};return window.addEventListener("resize",f),o.clear=function(){clearInterval(a),window.removeEventListener("resize",f)},o}((function(){return Ae(e,"$refs.hd")}));n.on("resize",(function(n){e.headerHeight=n.snew.offsetHeight})),e.de=n},beforeDestroy:function(){this.de&&this.de.clear()},computed:{useHeaderTextColor:function(){return Rt(this.headerTextColor)},useHeaderBackgroundColor:function(){return Rt(this.headerBackgroundColor)},useHeaderPadding:function(){return Be(this.headerPadding)?"".concat(this.headerPadding,"px"):this.headerPadding},useContentBackgroundColor:function(){return Rt(this.contentBackgroundColor)},useContentPadding:function(){return Be(this.contentPadding)?"".concat(this.contentPadding,"px"):this.contentPadding}},methods:{}};function Ht(e,n,t,r,a,o,i,f,c,u){"boolean"!=typeof i&&(c=f,f=i,i=!1);var d,s="function"==typeof t?t.options:t;if(e&&e.render&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,a&&(s.functional=!0)),r&&(s._scopeId=r),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},s._ssrRegister=d):n&&(d=i?function(e){n.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,f(e))}),d)if(s.functional){var l=s.render;s.render=function(e,n){return d.call(n),l(e,n)}}else{var h=s.beforeCreate;s.beforeCreate=h?[].concat(h,d):[d]}return t}var Nt,Dt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Lt(e){return function(e,n){return function(e,n){var t=Dt?n.media||"default":e,r=It[t]||(It[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===Nt&&(Nt=document.head||document.getElementsByTagName("head")[0]),Nt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var o=r.ids.size-1,i=document.createTextNode(a),f=r.element.childNodes;f[o]&&r.element.removeChild(f[o]),f.length?r.element.insertBefore(i,f[o]):r.element.appendChild(i)}}}(e,n)}}var It={};const Ut=$t;var Wt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{style:"padding:"+e.useHeaderPadding+"; z-index:2;"},[t("div",{ref:"hd",class:{"shadow-header":e.headerShadow},style:"display:inline-block; background:"+e.useHeaderBackgroundColor+"; border-radius:"+e.headerBorderRadius+"px;"},[e._t("header",[t("div",{style:"padding:5px 10px; color:"+e.useHeaderTextColor+";"},[e._v("\n                    "+e._s(e.headerText)+"\n                ")])])],2)]),e._v(" "),t("div",{style:"margin-top:-"+e.headerHeight/2+"px; z-index:1;"},[t("div",{class:{shadow:e.contentShadow},style:"background:"+e.useContentBackgroundColor+"; border-radius:"+e.contentBorderRadius+"px;"},[t("div",{style:"padding:"+e.useContentPadding+";"},[t("div",{style:"height:"+e.headerHeight/2+"px;"}),e._v(" "),e._t("default")],2)])])])};Wt._withStripped=!0;return Ht({render:Wt,staticRenderFns:[]},(function(e){e&&e("data-v-34b5f042_0",{source:"\n.shadow[data-v-34b5f042] {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n.shadow-header[data-v-34b5f042] {\r\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 7px 10px 1px rgba(0, 0, 0, 0.06), 0px 2px 16px 1px rgba(0, 0, 0, 0.04);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WPanelBulge.vue"],names:[],mappings:";AAqMA;IACA,mGAAA;AACA;AACA;IACA,4HAAA;AACA",file:"WPanelBulge.vue",sourcesContent:["<template>\r\n    <div>\r\n\r\n        <div\r\n            :style=\"`padding:${useHeaderPadding}; z-index:2;`\"\r\n        >\r\n            <div\r\n                ref=\"hd\"\r\n                :class=\"{'shadow-header':headerShadow}\"\r\n                :style=\"`display:inline-block; background:${useHeaderBackgroundColor}; border-radius:${headerBorderRadius}px;`\"\r\n            >\r\n\r\n                <slot name=\"header\">\r\n                    <div :style=\"`padding:5px 10px; color:${useHeaderTextColor};`\">\r\n                        {{headerText}}\r\n                    </div>\r\n                </slot>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div :style=\"`margin-top:-${headerHeight/2}px; z-index:1;`\">\r\n\r\n            <div\r\n                :class=\"{'shadow':contentShadow}\"\r\n                :style=\"`background:${useContentBackgroundColor}; border-radius:${contentBorderRadius}px;`\"\r\n            >\r\n\r\n                <div :style=\"`padding:${useContentPadding};`\">\r\n\r\n                    <div :style=\"`height:${headerHeight/2}px;`\"></div>\r\n\r\n                    <slot></slot>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport get from 'lodash/get'\r\nimport isnum from 'wsemi/src/isnum.mjs'\r\nimport domDetect from 'wsemi/src/domDetect.mjs'\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\n\r\n\r\n/**\r\n * @vue-prop {Number} [headerBorderRadius=0] 輸入標題區圓角寬度，單位為px，預設0\r\n * @vue-prop {Number|String} [headerPadding='0px 20px'] 輸入標題區邊寬長度數字或字串，若輸入數字則單位為px，若輸入字串則需自己添加單位，預設'0px 20px'\r\n * @vue-prop {String} [headerText=''] 輸入標題文字字串，預設''\r\n * @vue-prop {String} [headerTextColor='white'] 輸入標題文字顏色字串，預設'white'\r\n * @vue-prop {String} [headerBackgroundColor='teal lighten-2'] 輸入標題背景顏色字串，預設'teal lighten-2'\r\n * @vue-prop {Boolean} [headerShadow=true] 輸入標題區是否使用陰影模式，預設true\r\n * @vue-prop {Number} [contentBorderRadius=0] 輸入內容區圓角寬度，單位為px，預設0\r\n * @vue-prop {Number|String} [contentPadding=20] 輸入內容區邊寬長度數字或字串，若輸入數字則單位為px，預設20，若輸入字串則需自己添加單位\r\n * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'\r\n * @vue-prop {Boolean} [contentShadow=true] 輸入內容區是否使用陰影模式，預設true\r\n */\r\nexport default {\r\n    props: {\r\n        headerBorderRadius: {\r\n            type: Number,\r\n            default: 0,\r\n        },\r\n        headerPadding: {\r\n            type: [Number, String],\r\n            default: '0px 20px',\r\n        },\r\n        headerText: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        headerTextColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        headerBackgroundColor: {\r\n            type: String,\r\n            default: 'rgb(77, 182, 172, 0.8)', //teal lighten-2\r\n        },\r\n        headerShadow: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        contentBorderRadius: {\r\n            type: Number,\r\n            default: 0,\r\n        },\r\n        contentPadding: {\r\n            type: [Number, String],\r\n            default: 0,\r\n        },\r\n        contentBackgroundColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        contentShadow: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            de: null,\r\n            headerHeight: 0,\r\n        }\r\n    },\r\n    mounted: function() {\r\n        //console.log('mounted')\r\n\r\n        let vo = this\r\n\r\n        //de, 不能用vuetify的v-resize, 因是基於window resize無法偵測單純的元素尺寸變化\r\n        let de = domDetect(() => {\r\n            return get(vo, '$refs.hd')\r\n        })\r\n        de.on('resize', (s) => {\r\n            // console.log('resize', s)\r\n            vo.headerHeight = s.snew.offsetHeight\r\n        })\r\n        vo.de = de\r\n\r\n    },\r\n    beforeDestroy: function() {\r\n        //console.log('beforeDestroy')\r\n\r\n        let vo = this\r\n\r\n        //clear\r\n        if (vo.de) {\r\n            vo.de.clear()\r\n        }\r\n\r\n    },\r\n    computed: {\r\n\r\n        useHeaderTextColor: function() {\r\n            //console.log('computed useHeaderTextColor')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.headerTextColor)\r\n        },\r\n\r\n        useHeaderBackgroundColor: function() {\r\n            //console.log('computed useHeaderBackgroundColor')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.headerBackgroundColor)\r\n        },\r\n\r\n        useHeaderPadding: function() {\r\n            //console.log('computed useHeaderPadding')\r\n\r\n            let vo = this\r\n\r\n            if (isnum(vo.headerPadding)) {\r\n                return `${vo.headerPadding}px`\r\n            }\r\n            else {\r\n                return vo.headerPadding\r\n            }\r\n        },\r\n\r\n        useContentBackgroundColor: function() {\r\n            //console.log('computed useContentBackgroundColor')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.contentBackgroundColor)\r\n        },\r\n\r\n        useContentPadding: function() {\r\n            //console.log('computed useContentPadding')\r\n\r\n            let vo = this\r\n\r\n            if (isnum(vo.contentPadding)) {\r\n                return `${vo.contentPadding}px`\r\n            }\r\n            else {\r\n                return vo.contentPadding\r\n            }\r\n        },\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.shadow {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.shadow-header {\r\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 7px 10px 1px rgba(0, 0, 0, 0.06), 0px 2px 16px 1px rgba(0, 0, 0, 0.04);\r\n}\r\n</style>\r\n"]},media:void 0})}),Ut,"data-v-34b5f042",!1,void 0,!1,Lt,void 0,void 0)}));
//# sourceMappingURL=w-panel-bulge.umd.js.map
