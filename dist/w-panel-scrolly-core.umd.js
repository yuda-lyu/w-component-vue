/*!
 * w-panel-scrolly-core v1.3.39
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-panel-scrolly-core"]=e()}(this,(function(){"use strict";var n=Array.isArray,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(n,e){return n(e={exports:{}},e.exports),e.exports}var r=t((function(n){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(t)}n.exports=e})),a="object"==r(e)&&e&&e.Object===Object&&e,i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,o=a||i||Function("return this")(),f=o.Symbol,c=Object.prototype,u=c.hasOwnProperty,s=c.toString,l=f?f.toStringTag:void 0;var d=function(n){var e=u.call(n,l),t=n[l];try{n[l]=void 0;var r=!0}catch(n){}var a=s.call(n);return r&&(e?n[l]=t:delete n[l]),a},h=Object.prototype.toString;var v=function(n){return h.call(n)},p=f?f.toStringTag:void 0;var b=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":p&&p in Object(n)?d(n):v(n)};var g=function(n){return null!=n&&"object"==r(n)};var y=function(n){return"symbol"==r(n)||g(n)&&"[object Symbol]"==b(n)},m=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var _=function(e,t){if(n(e))return!1;var a=r(e);return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=e&&!y(e))||(x.test(e)||!m.test(e)||null!=t&&e in Object(t))};var k=function(n){var e=r(n);return null!=n&&("object"==e||"function"==e)};var w,E=function(n){if(!k(n))return!1;var e=b(n);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=o["__core-js_shared__"],O=(w=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"";var S=function(n){return!!O&&O in n},B=Function.prototype.toString;var L=function(n){if(null!=n){try{return B.call(n)}catch(n){}try{return n+""}catch(n){}}return""},C=/^\[object .+?Constructor\]$/,T=Function.prototype,R=Object.prototype,M=T.toString,A=R.hasOwnProperty,z=RegExp("^"+M.call(A).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var H=function(n){return!(!k(n)||S(n))&&(E(n)?z:C).test(L(n))};var P=function(n,e){return null==n?void 0:n[e]};var Y=function(n,e){var t=P(n,e);return H(t)?t:void 0},$=Y(Object,"create");var N=function(){this.__data__=$?$(null):{},this.size=0};var D=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},U=Object.prototype.hasOwnProperty;var X=function(n){var e=this.__data__;if($){var t=e[n];return"__lodash_hash_undefined__"===t?void 0:t}return U.call(e,n)?e[n]:void 0},I=Object.prototype.hasOwnProperty;var Z=function(n){var e=this.__data__;return $?void 0!==e[n]:I.call(e,n)};var F=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=$&&void 0===e?"__lodash_hash_undefined__":e,this};function G(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}G.prototype.clear=N,G.prototype.delete=D,G.prototype.get=X,G.prototype.has=Z,G.prototype.set=F;var V=G;var W=function(){this.__data__=[],this.size=0};var J=function(n,e){return n===e||n!=n&&e!=e};var q=function(n,e){for(var t=n.length;t--;)if(J(n[t][0],e))return t;return-1},K=Array.prototype.splice;var Q=function(n){var e=this.__data__,t=q(e,n);return!(t<0)&&(t==e.length-1?e.pop():K.call(e,t,1),--this.size,!0)};var nn=function(n){var e=this.__data__,t=q(e,n);return t<0?void 0:e[t][1]};var en=function(n){return q(this.__data__,n)>-1};var tn=function(n,e){var t=this.__data__,r=q(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this};function rn(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}rn.prototype.clear=W,rn.prototype.delete=Q,rn.prototype.get=nn,rn.prototype.has=en,rn.prototype.set=tn;var an=rn,on=Y(o,"Map");var fn=function(){this.size=0,this.__data__={hash:new V,map:new(on||an),string:new V}};var cn=function(n){var e=r(n);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n};var un=function(n,e){var t=n.__data__;return cn(e)?t["string"==typeof e?"string":"hash"]:t.map};var sn=function(n){var e=un(this,n).delete(n);return this.size-=e?1:0,e};var ln=function(n){return un(this,n).get(n)};var dn=function(n){return un(this,n).has(n)};var hn=function(n,e){var t=un(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this};function vn(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}vn.prototype.clear=fn,vn.prototype.delete=sn,vn.prototype.get=ln,vn.prototype.has=dn,vn.prototype.set=hn;var pn=vn;function bn(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=e?e.apply(this,r):r[0],i=t.cache;if(i.has(a))return i.get(a);var o=n.apply(this,r);return t.cache=i.set(a,o)||i,o};return t.cache=new(bn.Cache||pn),t}bn.Cache=pn;var gn=bn;var yn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mn=/\\(\\)?/g,xn=function(n){var e=gn(n,(function(n){return 500===t.size&&t.clear(),n})),t=e.cache;return e}((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(yn,(function(n,t,r,a){e.push(r?a.replace(mn,"$1"):t||n)})),e}));var _n=function(n,e){for(var t=-1,r=null==n?0:n.length,a=Array(r);++t<r;)a[t]=e(n[t],t,n);return a},kn=f?f.prototype:void 0,wn=kn?kn.toString:void 0;var En=function e(t){if("string"==typeof t)return t;if(n(t))return _n(t,e)+"";if(y(t))return wn?wn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var jn=function(n){return null==n?"":En(n)};var On=function(e,t){return n(e)?e:_(e,t)?[e]:xn(jn(e))};var Sn=function(n){if("string"==typeof n||y(n))return n;var e=n+"";return"0"==e&&1/n==-1/0?"-0":e};var Bn=function(n,e){for(var t=0,r=(e=On(e,n)).length;null!=n&&t<r;)n=n[Sn(e[t++])];return t&&t==r?n:void 0};var Ln=function(n,e,t){var r=null==n?void 0:Bn(n,e);return void 0===r?t:r};var Cn=function(n){return"number"==typeof n||g(n)&&"[object Number]"==b(n)};var Tn=function(n){return!0===n||!1===n||g(n)&&"[object Boolean]"==b(n)},Rn=t((function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}function a(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function i(n,e,r,i,o){if("function"!=typeof r)throw new TypeError("The listener must be a function");var f=new a(r,i||n,o),c=t?t+e:e;return n._events[c]?n._events[c].fn?n._events[c]=[n._events[c],f]:n._events[c].push(f):(n._events[c]=f,n._eventsCount++),n}function o(n,e){0==--n._eventsCount?n._events=new r:delete n._events[e]}function f(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(t=!1)),f.prototype.eventNames=function(){var n,r,a=[];if(0===this._eventsCount)return a;for(r in n=this._events)e.call(n,r)&&a.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(n)):a},f.prototype.listeners=function(n){var e=t?t+n:n,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var a=0,i=r.length,o=new Array(i);a<i;a++)o[a]=r[a].fn;return o},f.prototype.listenerCount=function(n){var e=t?t+n:n,r=this._events[e];return r?r.fn?1:r.length:0},f.prototype.emit=function(n,e,r,a,i,o){var f=t?t+n:n;if(!this._events[f])return!1;var c,u,s=this._events[f],l=arguments.length;if(s.fn){switch(s.once&&this.removeListener(n,s.fn,void 0,!0),l){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,e),!0;case 3:return s.fn.call(s.context,e,r),!0;case 4:return s.fn.call(s.context,e,r,a),!0;case 5:return s.fn.call(s.context,e,r,a,i),!0;case 6:return s.fn.call(s.context,e,r,a,i,o),!0}for(u=1,c=new Array(l-1);u<l;u++)c[u-1]=arguments[u];s.fn.apply(s.context,c)}else{var d,h=s.length;for(u=0;u<h;u++)switch(s[u].once&&this.removeListener(n,s[u].fn,void 0,!0),l){case 1:s[u].fn.call(s[u].context);break;case 2:s[u].fn.call(s[u].context,e);break;case 3:s[u].fn.call(s[u].context,e,r);break;case 4:s[u].fn.call(s[u].context,e,r,a);break;default:if(!c)for(d=1,c=new Array(l-1);d<l;d++)c[d-1]=arguments[d];s[u].fn.apply(s[u].context,c)}}return!0},f.prototype.on=function(n,e,t){return i(this,n,e,t,!1)},f.prototype.once=function(n,e,t){return i(this,n,e,t,!0)},f.prototype.removeListener=function(n,e,r,a){var i=t?t+n:n;if(!this._events[i])return this;if(!e)return o(this,i),this;var f=this._events[i];if(f.fn)f.fn!==e||a&&!f.once||r&&f.context!==r||o(this,i);else{for(var c=0,u=[],s=f.length;c<s;c++)(f[c].fn!==e||a&&!f[c].once||r&&f[c].context!==r)&&u.push(f[c]);u.length?this._events[i]=1===u.length?u[0]:u:o(this,i)}return this},f.prototype.removeAllListeners=function(n){var e;return n?(e=t?t+n:n,this._events[e]&&o(this,e)):(this._events=new r,this._eventsCount=0),this},f.prototype.off=f.prototype.removeListener,f.prototype.addListener=f.prototype.on,f.prefixed=t,f.EventEmitter=f,n.exports=f}));function Mn(){return new Rn}function An(n){return n?n.cancelable?(window.event?n.cancelBubble=!0:n.stopPropagation(),void n.preventDefault()):"event is not cancelable":"invalid event"}var zn=function(n,e,t){var r=-1,a=n.length;e<0&&(e=-e>a?0:a+e),(t=t>a?a:t)<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var i=Array(a);++r<a;)i[r]=n[r+e];return i};var Hn=function(n,e,t){var r=n.length;return t=void 0===t?r:t,!e&&t>=r?n:zn(n,e,t)},Pn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Yn=function(n){return Pn.test(n)};var $n=function(n){return n.split("")},Nn="[\\ud800-\\udfff]",Dn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Un="\\ud83c[\\udffb-\\udfff]",Xn="[^\\ud800-\\udfff]",In="(?:\\ud83c[\\udde6-\\uddff]){2}",Zn="[\\ud800-\\udbff][\\udc00-\\udfff]",Fn="(?:"+Dn+"|"+Un+")"+"?",Gn="[\\ufe0e\\ufe0f]?"+Fn+("(?:\\u200d(?:"+[Xn,In,Zn].join("|")+")[\\ufe0e\\ufe0f]?"+Fn+")*"),Vn="(?:"+[Xn+Dn+"?",Dn,In,Zn,Nn].join("|")+")",Wn=RegExp(Un+"(?="+Un+")|"+Vn+Gn,"g");var Jn=function(n){return n.match(Wn)||[]};var qn=function(n){return Yn(n)?Jn(n):$n(n)};var Kn=function(n){return function(e){e=jn(e);var t=Yn(e)?qn(e):void 0,r=t?t[0]:e.charAt(0),a=t?Hn(t,1).join(""):e.slice(1);return r[n]()+a}}("toUpperCase");var Qn=function(n){return Kn(jn(n).toLowerCase())};var ne=function(n,e,t,r){var a=-1,i=null==n?0:n.length;for(r&&i&&(t=n[++a]);++a<i;)t=e(t,n[a],a,n);return t};var ee=function(n){return function(e){return null==n?void 0:n[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),te=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,re=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var ae=function(n){return(n=jn(n))&&n.replace(te,ee).replace(re,"")},ie=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var oe=function(n){return n.match(ie)||[]},fe=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var ce=function(n){return fe.test(n)},ue="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",se="["+ue+"]",le="\\d+",de="[\\u2700-\\u27bf]",he="[a-z\\xdf-\\xf6\\xf8-\\xff]",ve="[^\\ud800-\\udfff"+ue+le+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",pe="(?:\\ud83c[\\udde6-\\uddff]){2}",be="[\\ud800-\\udbff][\\udc00-\\udfff]",ge="[A-Z\\xc0-\\xd6\\xd8-\\xde]",ye="(?:"+he+"|"+ve+")",me="(?:"+ge+"|"+ve+")",xe="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",_e="[\\ufe0e\\ufe0f]?"+xe+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",pe,be].join("|")+")[\\ufe0e\\ufe0f]?"+xe+")*"),ke="(?:"+[de,pe,be].join("|")+")"+_e,we=RegExp([ge+"?"+he+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[se,ge,"$"].join("|")+")",me+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[se,ge+ye,"$"].join("|")+")",ge+"?"+ye+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ge+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",le,ke].join("|"),"g");var Ee=function(n){return n.match(we)||[]};var je=function(n,e,t){return n=jn(n),void 0===(e=t?void 0:e)?ce(n)?Ee(n):oe(n):n.match(e)||[]},Oe=RegExp("['’]","g");var Se=function(n){return function(e){return ne(je(ae(e).replace(Oe,"")),n,"")}}((function(n,e,t){return e=e.toLowerCase(),n+(t?Qn(e):e)}));var Be=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991};var Le=function(n){return null!=n&&Be(n.length)&&!E(n)},Ce=/^(?:0|[1-9]\d*)$/;var Te=function(n,e){var t=r(n);return!!(e=null==e?9007199254740991:e)&&("number"==t||"symbol"!=t&&Ce.test(n))&&n>-1&&n%1==0&&n<e};var Re=function(n,e,t){if(!k(t))return!1;var a=r(e);return!!("number"==a?Le(t)&&Te(e,t.length):"string"==a&&e in t)&&J(t[e],n)};var Me=function(n){return g(n)&&"[object RegExp]"==b(n)};var Ae=function(n){return function(e){return n(e)}},ze=t((function(n,e){var t=e&&!e.nodeType&&e,r=t&&n&&!n.nodeType&&n,i=r&&r.exports===t&&a.process,o=function(){try{var n=r&&r.require&&r.require("util").types;return n||i&&i.binding&&i.binding("util")}catch(n){}}();n.exports=o})),He=ze&&ze.isRegExp,Pe=He?Ae(He):Me;var Ye=function(n,e,t){return t&&"number"!=typeof t&&Re(n,e,t)&&(e=t=void 0),(t=void 0===t?4294967295:t>>>0)?(n=jn(n))&&("string"==typeof e||null!=e&&!Pe(e))&&!(e=En(e))&&Yn(n)?Hn(qn(n),0,t):n.split(e,t):[]},$e=Object.prototype;var Ne=function(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||$e)};var De=function(n,e){return function(t){return n(e(t))}}(Object.keys,Object),Ue=Object.prototype.hasOwnProperty;var Xe=function(n){if(!Ne(n))return De(n);var e=[];for(var t in Object(n))Ue.call(n,t)&&"constructor"!=t&&e.push(t);return e},Ie=Y(o,"DataView"),Ze=Y(o,"Promise"),Fe=Y(o,"Set"),Ge=Y(o,"WeakMap"),Ve=L(Ie),We=L(on),Je=L(Ze),qe=L(Fe),Ke=L(Ge),Qe=b;(Ie&&"[object DataView]"!=Qe(new Ie(new ArrayBuffer(1)))||on&&"[object Map]"!=Qe(new on)||Ze&&"[object Promise]"!=Qe(Ze.resolve())||Fe&&"[object Set]"!=Qe(new Fe)||Ge&&"[object WeakMap]"!=Qe(new Ge))&&(Qe=function(n){var e=b(n),t="[object Object]"==e?n.constructor:void 0,r=t?L(t):"";if(r)switch(r){case Ve:return"[object DataView]";case We:return"[object Map]";case Je:return"[object Promise]";case qe:return"[object Set]";case Ke:return"[object WeakMap]"}return e});var nt=Qe;var et=function(e){return"string"==typeof e||!n(e)&&g(e)&&"[object String]"==b(e)};var tt=function(n){return function(e){return null==e?void 0:e[n]}}("length"),rt="[\\ud800-\\udfff]",at="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",it="\\ud83c[\\udffb-\\udfff]",ot="[^\\ud800-\\udfff]",ft="(?:\\ud83c[\\udde6-\\uddff]){2}",ct="[\\ud800-\\udbff][\\udc00-\\udfff]",ut="(?:"+at+"|"+it+")"+"?",st="[\\ufe0e\\ufe0f]?"+ut+("(?:\\u200d(?:"+[ot,ft,ct].join("|")+")[\\ufe0e\\ufe0f]?"+ut+")*"),lt="(?:"+[ot+at+"?",at,ft,ct,rt].join("|")+")",dt=RegExp(it+"(?="+it+")|"+lt+st,"g");var ht=function(n){for(var e=dt.lastIndex=0;dt.test(n);)++e;return e};var vt=function(n){return Yn(n)?ht(n):tt(n)};var pt=function(n){if(null==n)return 0;if(Le(n))return et(n)?vt(n):n.length;var e=nt(n);return"[object Map]"==e||"[object Set]"==e?n.size:Xe(n).length},bt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function gt(n){if("white"===n)return"#fff";if("black"===n)return"#000";if("transparent"===n)return"rgba(0,0,0,0)";var e=Ye(n," ");if(2!==pt(e))return n;var t=e[0].trim();t=Se(t);var r=e[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=Ln(bt,"default.".concat(t,".").concat(r),null);return null===a&&(a=n),a}var yt={props:{viewHeightMax:{type:Number,default:400},contentHeight:{type:Number,default:1e4},scrollDelta:{type:Number,default:100},barColor:{type:String,default:"rgba(0,0,0,0.2)"},barBackgroundColor:{type:String,default:"transparent"},barWidth:{type:Number,default:8},barHeightMin:{type:Number,default:50},ratio:{type:Number,default:0}},data:function(){return{ratioTrans:0,barPressY:null,barOpacity:.5,das:null}},mounted:function(){var n=this,e=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=null,a=null,i=null,o=null,f=null,c=null,u=null,s=null,l=null,d=null,h=!1,v=Ln(t,"heighRatio",null);Cn(v)||(v=1);var p=Ln(t,"widthRatio",null);Cn(p)||(p=1);var b=Ln(t,"stopEventScrollPanel",null);Tn(b)||(b=!1);var g=n,y=e,m=Mn();function x(){r=function(n){var e=n.deltaY/Math.abs(n.deltaY),t=n.deltaX/Math.abs(n.deltaX);m.emit("scrollPanel",{ratioY:e,ratioX:t}),b&&An(n)},g.addEventListener("wheel",r),a=function(n){var e=-n.touches[0].clientY*v,t=-n.touches[0].clientX*p;h=!0,m.emit("pressBar",{clientY:e,clientX:t})},g.addEventListener("touchstart",a),i=function(n){if(h){var e=-n.touches[0].clientY*v,t=-n.touches[0].clientX*p;m.emit("dragBar",{clientY:e,clientX:t}),An(n)}},g.addEventListener("touchmove",i),o=function(n){h=!1,m.emit("freeBar")},g.addEventListener("touchend",o),f=function(n){h=!0,m.emit("pressBar",{clientY:n.clientY,clientX:n.clientX})},y.addEventListener("mousedown",f),c=function(n){h=!0,m.emit("pressBar",{clientY:n.touches[0].clientY,clientX:n.touches[0].clientX})},y.addEventListener("touchstart",c),u=function(n){h&&(m.emit("dragBar",{clientY:n.touches[0].clientY,clientX:n.touches[0].clientX}),An(n))},y.addEventListener("touchmove",u),s=function(n){h=!1,m.emit("freeBar")},y.addEventListener("touchend",s),l=function(n){h&&m.emit("dragBar",{clientY:n.clientY,clientX:n.clientX})},window.addEventListener("mousemove",l),d=function(n){h=!1,m.emit("freeBar"),An(n)},window.addEventListener("mouseup",d)}function _(){g.removeEventListener("wheel",r),g.removeEventListener("touchstart",a),g.removeEventListener("touchmove",i),g.removeEventListener("touchend",o),y.removeEventListener("mousedown",f),y.removeEventListener("touchstart",c),y.removeEventListener("touchmove",u),y.removeEventListener("touchend",s),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",d)}return x(),m.clear=_,m}(n.$refs.divPanel,n.$refs.divBar,{heighRatio:n.heighRatio,stopEventScrollPanel:!0});e.on("scrollPanel",n.scrollPanel),e.on("pressBar",n.pressBar),e.on("dragBar",n.dragBar),e.on("freeBar",n.freeBar),n.das=e},beforeDestroy:function(){this.das&&this.das.clear()},computed:{useBarColor:function(){return gt(this.barColor)},useBarBackgroundColor:function(){return gt(this.barBackgroundColor)},changeRatio:function(){var n=this.ratio;return n=Math.max(n,0),n=Math.min(n,1),this.ratioTrans=n,""},heighRatio:function(){return this.viewHeightMax/Math.max(this.contentHeight,1)},barSize:function(){var n=this.viewHeightMax/this.contentHeight,e=Math.max(n*this.viewHeightMax,this.barHeightMin);return e},barLoc:function(){return this.ratioTrans*this.viewHeightEff},contentHeightEff:function(){var n=this.contentHeight-this.viewHeightMax;return n=Math.max(n,0)},viewHeightEff:function(){var n=this.viewHeightMax-this.barSize-4;return n=Math.max(n,0)},viewTop:function(){return this.ratioTrans*this.contentHeightEff},viewBottom:function(){return this.viewTop+this.viewHeightMax}},methods:{updateRatioTrans:function(n){n=Math.max(n,0),n=Math.min(n,1),0===this.contentHeightEff&&(n=0);var e=this.ratioTrans!==n;return e&&(this.ratioTrans=n),e},pressBar:function(n){var e=n.clientY;e&&(this.barPressY=e)},dragBar:function(n){var e=n.clientY,t=(e-this.barPressY)/this.viewHeightEff;this.scrollByDeltaRatio(t),this.barPressY=e},freeBar:function(){this.triggerEvent("freeBar")},triggerEvent:function(n){var e=this;e.$nextTick((function(){var t={from:n,r:e.ratioTrans,t:e.viewTop,b:e.viewBottom,ch:e.contentHeight};e.$emit("update:ratio",e.ratioTrans),e.$emit("change",t),n&&e.$emit(n,t)}))},scrollByDeltaRatio:function(n){var e=this.ratioTrans;e>=0&&e<=1&&(e+=n),this.updateRatioTrans(e)&&this.triggerEvent()},scrollByDelta:function(n){var e=n/this.contentHeight;this.scrollByDeltaRatio(e)},scrollPanel:function(n){var e=n.ratioY*this.scrollDelta;this.scrollByDelta(e)},refresh:function(n,e){e&&this.triggerEvent()}}};function mt(n,e,t,r,a,i,o,f,c,u){"boolean"!=typeof o&&(c=f,f=o,o=!1);var s,l="function"==typeof t?t.options:t;if(n&&n.render&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),i?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,c(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},l._ssrRegister=s):e&&(s=o?function(n){e.call(this,u(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,f(n))}),s)if(l.functional){var d=l.render;l.render=function(n,e){return s.call(e),d(n,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,s):[s]}return t}var xt,_t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function kt(n){return function(n,e){return function(n,e){var t=_t?e.media||"default":n,r=wt[t]||(wt[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var a=e.source;if(e.map&&(a+="\n/*# sourceURL="+e.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===xt&&(xt=document.head||document.getElementsByTagName("head")[0]),xt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,o=document.createTextNode(a),f=r.element.childNodes;f[i]&&r.element.removeChild(f[i]),f.length?r.element.insertBefore(o,f[i]):r.element.appendChild(o)}}}(n,e)}}var wt={};const Et=yt;var jt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{style:"overflow:hidden; height:"+Math.min(n.contentHeight,n.viewHeightMax)+"px; box-sizing:content-box;"},[t("div",{style:"position:relative; overflow:hidden; height:"+n.viewHeightMax+"px; box-sizing:border-box;",attrs:{changeRatio:n.changeRatio},on:{mouseenter:function(e){n.barOpacity=1},mouseleave:function(e){n.barOpacity=.8}}},[t("div",{style:"height:"+(n.viewHeightMax+1)+"px;"}),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.contentHeightEff>0,expression:"contentHeightEff>0"}],staticStyle:{position:"absolute",top:"0",right:"0px",height:"100%","z-index":"1"}},[t("div",{style:"position:relative; width:"+n.barWidth+"px; height:100%; background:"+n.useBarBackgroundColor+"; padding:2px 1px; box-sizing:border-box;"},[t("div",{ref:"divBar",style:"width:100%; height:"+n.barSize+"px; background:"+n.useBarColor+"; border-radius:15px; user-select:none; transform:translateY("+n.barLoc+"px); cursor:pointer; opacity:"+n.barOpacity+"; transition:opacity 0.5s;"})])]),n._v(" "),t("div",{ref:"divPanel",style:"position:absolute; top:0px; width:calc(100% + 18px); overflow-y:scroll; overflow-x:hidden; height:"+n.viewHeightMax+"px;"},[n._t("default")],2)])])};jt._withStripped=!0;return mt({render:jt,staticRenderFns:[]},(function(n){n&&n("data-v-c24aaa94_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WPanelScrollyCore.vue"},media:void 0})}),Et,"data-v-c24aaa94",!1,void 0,!1,kt,void 0,void 0)}));
//# sourceMappingURL=w-panel-scrolly-core.umd.js.map
