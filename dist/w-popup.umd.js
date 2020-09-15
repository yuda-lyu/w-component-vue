/*!
 * w-popup v1.4.30
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self)["w-popup"]=e()}(this,(function(){"use strict";var n=Array.isArray,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(n,e,t){return n(t={path:e,exports:{},require:function(n,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&t.path)}},t.exports),t.exports}var r=t((function(n){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(t)}n.exports=e})),a="object"==r(e)&&e&&e.Object===Object&&e,f="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,i=a||f||Function("return this")(),c=i.Symbol,o=Object.prototype,u=o.hasOwnProperty,d=o.toString,l=c?c.toStringTag:void 0;var s=function(n){var e=u.call(n,l),t=n[l];try{n[l]=void 0;var r=!0}catch(n){}var a=d.call(n);return r&&(e?n[l]=t:delete n[l]),a},v=Object.prototype.toString;var h=function(n){return v.call(n)},b=c?c.toStringTag:void 0;var p=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":b&&b in Object(n)?s(n):h(n)};var g=function(n){return null!=n&&"object"==r(n)};var y=function(n){return"symbol"==r(n)||g(n)&&"[object Symbol]"==p(n)},k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,m=/^\w*$/;var _=function(e,t){if(n(e))return!1;var a=r(e);return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=e&&!y(e))||(m.test(e)||!k.test(e)||null!=t&&e in Object(t))};var w=function(n){var e=r(n);return null!=n&&("object"==e||"function"==e)};var j,x=function(n){if(!w(n))return!1;var e=p(n);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},O=i["__core-js_shared__"],E=(j=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var S=function(n){return!!E&&E in n},T=Function.prototype.toString;var C=function(n){if(null!=n){try{return T.call(n)}catch(n){}try{return n+""}catch(n){}}return""},$=/^\[object .+?Constructor\]$/,A=Function.prototype,N=Object.prototype,I=A.toString,R=N.hasOwnProperty,z=RegExp("^"+I.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var M=function(n){return!(!w(n)||S(n))&&(x(n)?z:$).test(C(n))};var L=function(n,e){return null==n?void 0:n[e]};var U=function(n,e){var t=L(n,e);return M(t)?t:void 0},B=U(Object,"create");var D=function(){this.__data__=B?B(null):{},this.size=0};var P=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},F=Object.prototype.hasOwnProperty;var V=function(n){var e=this.__data__;if(B){var t=e[n];return"__lodash_hash_undefined__"===t?void 0:t}return F.call(e,n)?e[n]:void 0},Z=Object.prototype.hasOwnProperty;var W=function(n){var e=this.__data__;return B?void 0!==e[n]:Z.call(e,n)};var G=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=B&&void 0===e?"__lodash_hash_undefined__":e,this};function Y(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Y.prototype.clear=D,Y.prototype.delete=P,Y.prototype.get=V,Y.prototype.has=W,Y.prototype.set=G;var q=Y;var H=function(){this.__data__=[],this.size=0};var J=function(n,e){return n===e||n!=n&&e!=e};var X=function(n,e){for(var t=n.length;t--;)if(J(n[t][0],e))return t;return-1},K=Array.prototype.splice;var Q=function(n){var e=this.__data__,t=X(e,n);return!(t<0)&&(t==e.length-1?e.pop():K.call(e,t,1),--this.size,!0)};var nn=function(n){var e=this.__data__,t=X(e,n);return t<0?void 0:e[t][1]};var en=function(n){return X(this.__data__,n)>-1};var tn=function(n,e){var t=this.__data__,r=X(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this};function rn(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}rn.prototype.clear=H,rn.prototype.delete=Q,rn.prototype.get=nn,rn.prototype.has=en,rn.prototype.set=tn;var an=rn,fn=U(i,"Map");var cn=function(){this.size=0,this.__data__={hash:new q,map:new(fn||an),string:new q}};var on=function(n){var e=r(n);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n};var un=function(n,e){var t=n.__data__;return on(e)?t["string"==typeof e?"string":"hash"]:t.map};var dn=function(n){var e=un(this,n).delete(n);return this.size-=e?1:0,e};var ln=function(n){return un(this,n).get(n)};var sn=function(n){return un(this,n).has(n)};var vn=function(n,e){var t=un(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this};function hn(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}hn.prototype.clear=cn,hn.prototype.delete=dn,hn.prototype.get=ln,hn.prototype.has=sn,hn.prototype.set=vn;var bn=hn;function pn(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=e?e.apply(this,r):r[0],f=t.cache;if(f.has(a))return f.get(a);var i=n.apply(this,r);return t.cache=f.set(a,i)||f,i};return t.cache=new(pn.Cache||bn),t}pn.Cache=bn;var gn=pn;var yn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kn=/\\(\\)?/g,mn=function(n){var e=gn(n,(function(n){return 500===t.size&&t.clear(),n})),t=e.cache;return e}((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(yn,(function(n,t,r,a){e.push(r?a.replace(kn,"$1"):t||n)})),e}));var _n=function(n,e){for(var t=-1,r=null==n?0:n.length,a=Array(r);++t<r;)a[t]=e(n[t],t,n);return a},wn=c?c.prototype:void 0,jn=wn?wn.toString:void 0;var xn=function e(t){if("string"==typeof t)return t;if(n(t))return _n(t,e)+"";if(y(t))return jn?jn.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var On=function(n){return null==n?"":xn(n)};var En=function(e,t){return n(e)?e:_(e,t)?[e]:mn(On(e))};var Sn=function(n){if("string"==typeof n||y(n))return n;var e=n+"";return"0"==e&&1/n==-Infinity?"-0":e};var Tn=function(n,e){for(var t=0,r=(e=En(e,n)).length;null!=n&&t<r;)n=n[Sn(e[t++])];return t&&t==r?n:void 0};var Cn=function(n,e,t){var r=null==n?void 0:Tn(n,e);return void 0===r?t:r},$n=Object.prototype;var An=function(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||$n)};var Nn=function(n,e){return function(t){return n(e(t))}},In=Nn(Object.keys,Object),Rn=Object.prototype.hasOwnProperty;var zn=function(n){if(!An(n))return In(n);var e=[];for(var t in Object(n))Rn.call(n,t)&&"constructor"!=t&&e.push(t);return e},Mn=U(i,"DataView"),Ln=U(i,"Promise"),Un=U(i,"Set"),Bn=U(i,"WeakMap"),Dn="[object Map]",Pn="[object Promise]",Fn="[object Set]",Vn="[object WeakMap]",Zn="[object DataView]",Wn=C(Mn),Gn=C(fn),Yn=C(Ln),qn=C(Un),Hn=C(Bn),Jn=p;(Mn&&Jn(new Mn(new ArrayBuffer(1)))!=Zn||fn&&Jn(new fn)!=Dn||Ln&&Jn(Ln.resolve())!=Pn||Un&&Jn(new Un)!=Fn||Bn&&Jn(new Bn)!=Vn)&&(Jn=function(n){var e=p(n),t="[object Object]"==e?n.constructor:void 0,r=t?C(t):"";if(r)switch(r){case Wn:return Zn;case Gn:return Dn;case Yn:return Pn;case qn:return Fn;case Hn:return Vn}return e});var Xn=Jn;var Kn=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991};var Qn=function(n){return null!=n&&Kn(n.length)&&!x(n)};var ne=function(e){return"string"==typeof e||!n(e)&&g(e)&&"[object String]"==p(e)};var ee=function(n){return function(e){return null==e?void 0:e[n]}}("length"),te=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var re=function(n){return te.test(n)},ae="[\\ud800-\\udfff]",fe="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",ie="\\ud83c[\\udffb-\\udfff]",ce="[^\\ud800-\\udfff]",oe="(?:\\ud83c[\\udde6-\\uddff]){2}",ue="[\\ud800-\\udbff][\\udc00-\\udfff]",de="(?:"+fe+"|"+ie+")"+"?",le="[\\ufe0e\\ufe0f]?",se=le+de+("(?:\\u200d(?:"+[ce,oe,ue].join("|")+")"+le+de+")*"),ve="(?:"+[ce+fe+"?",fe,oe,ue,ae].join("|")+")",he=RegExp(ie+"(?="+ie+")|"+ve+se,"g");var be=function(n){for(var e=he.lastIndex=0;he.test(n);)++e;return e};var pe=function(n){return re(n)?be(n):ee(n)};var ge=function(n){if(null==n)return 0;if(Qn(n))return ne(n)?pe(n):n.length;var e=Xn(n);return"[object Map]"==e||"[object Set]"==e?n.size:zn(n).length};function ye(){var n,e,t=new Promise((function(){n=arguments[0],e=arguments[1]}));return t.resolve=n,t.reject=e,t}function ke(n){var e=Object.prototype.toString.call(n);return"[object Function]"===e||"[object AsyncFunction]"===e}var me=/^\s+|\s+$/g,_e=/^[-+]0x[0-9a-f]+$/i,we=/^0b[01]+$/i,je=/^0o[0-7]+$/i,xe=parseInt;var Oe=function(n){if("number"==typeof n)return n;if(y(n))return NaN;if(w(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=w(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(me,"");var t=we.test(n);return t||je.test(n)?xe(n.slice(2),t?2:8):_e.test(n)?NaN:+n},Ee=1/0;var Se=function(n){return n?(n=Oe(n))===Ee||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0};var Te=function(n){var e=Se(n),t=e%1;return e==e?t?e-t:e:0};var Ce=function(n){return"number"==typeof n&&n==Te(n)};function $e(n){return!(!function(n){return"[object String]"===Object.prototype.toString.call(n)}(n)||""===n)}function Ae(n){var e=!1;return $e(n)?e=!isNaN(Number(n)):function(n){return"[object Number]"===Object.prototype.toString.call(n)}(n)&&(e=!0),e}function Ne(n){return Ae(n)?Se(n):0}var Ie=i.isFinite,Re=Math.min;var ze=function(n){var e=Math[n];return function(n,t){if(n=Oe(n),(t=null==t?0:Re(Te(t),292))&&Ie(n)){var r=(On(n)+"e").split("e"),a=e(r[0]+"e"+(+r[1]+t));return+((r=(On(a)+"e").split("e"))[0]+"e"+(+r[1]-t))}return e(n)}}("round");function Me(n){return!!function(n){return!!Ae(n)&&(n=Ne(n),Ce(n))}(n)&&function(n){if(!Ae(n))return 0;n=Ne(n);var e=ze(n);return"0"===String(e)?0:e}(n)>0}function Le(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=ye();if(!ke(n))return t.reject("waitfunction需輸入函數f"),t;if(!0===n())return t.resolve(),t;var r=Cn(e,"attemptNum",null);Me(r)||(r=200);var a=Cn(e,"timeInterval",null);Me(a)||(a=1e3);var f=0,i=setInterval((function(){f+=1,!0===n()&&(clearInterval(i),t.resolve()),f>r&&(clearInterval(i),t.resolve())}),a);return t}var Ue=Nn(Object.getPrototypeOf,Object),Be=Function.prototype,De=Object.prototype,Pe=Be.toString,Fe=De.hasOwnProperty,Ve=Pe.call(Object);var Ze=function(n){if(!g(n)||"[object Object]"!=p(n))return!1;var e=Ue(n);if(null===e)return!0;var t=Fe.call(e,"constructor")&&e.constructor;return"function"==typeof t&&t instanceof t&&Pe.call(t)==Ve};var We=function(n){return g(n)&&1===n.nodeType&&!Ze(n)};var Ge=function(n,e,t){var r=-1,a=n.length;e<0&&(e=-e>a?0:a+e),(t=t>a?a:t)<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var f=Array(a);++r<a;)f[r]=n[r+e];return f};var Ye=function(n,e,t){var r=n.length;return t=void 0===t?r:t,!e&&t>=r?n:Ge(n,e,t)};var qe=function(n){return n.split("")},He="[\\ud800-\\udfff]",Je="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Xe="\\ud83c[\\udffb-\\udfff]",Ke="[^\\ud800-\\udfff]",Qe="(?:\\ud83c[\\udde6-\\uddff]){2}",nt="[\\ud800-\\udbff][\\udc00-\\udfff]",et="(?:"+Je+"|"+Xe+")"+"?",tt="[\\ufe0e\\ufe0f]?",rt=tt+et+("(?:\\u200d(?:"+[Ke,Qe,nt].join("|")+")"+tt+et+")*"),at="(?:"+[Ke+Je+"?",Je,Qe,nt,He].join("|")+")",ft=RegExp(Xe+"(?="+Xe+")|"+at+rt,"g");var it=function(n){return n.match(ft)||[]};var ct=function(n){return re(n)?it(n):qe(n)};var ot=function(n){return function(e){e=On(e);var t=re(e)?ct(e):void 0,r=t?t[0]:e.charAt(0),a=t?Ye(t,1).join(""):e.slice(1);return r[n]()+a}}("toUpperCase");var ut=function(n){return ot(On(n).toLowerCase())};var dt=function(n,e,t,r){var a=-1,f=null==n?0:n.length;for(r&&f&&(t=n[++a]);++a<f;)t=e(t,n[a],a,n);return t};var lt=function(n){return function(e){return null==n?void 0:n[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,vt=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var ht=function(n){return(n=On(n))&&n.replace(st,lt).replace(vt,"")},bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var pt=function(n){return n.match(bt)||[]},gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var yt=function(n){return gt.test(n)},kt="\\u2700-\\u27bf",mt="a-z\\xdf-\\xf6\\xf8-\\xff",_t="A-Z\\xc0-\\xd6\\xd8-\\xde",wt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",jt="["+wt+"]",xt="\\d+",Ot="[\\u2700-\\u27bf]",Et="["+mt+"]",St="[^\\ud800-\\udfff"+wt+xt+kt+mt+_t+"]",Tt="(?:\\ud83c[\\udde6-\\uddff]){2}",Ct="[\\ud800-\\udbff][\\udc00-\\udfff]",$t="["+_t+"]",At="(?:"+Et+"|"+St+")",Nt="(?:"+$t+"|"+St+")",It="(?:['’](?:d|ll|m|re|s|t|ve))?",Rt="(?:['’](?:D|LL|M|RE|S|T|VE))?",zt="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",Mt="[\\ufe0e\\ufe0f]?",Lt=Mt+zt+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",Tt,Ct].join("|")+")"+Mt+zt+")*"),Ut="(?:"+[Ot,Tt,Ct].join("|")+")"+Lt,Bt=RegExp([$t+"?"+Et+"+"+It+"(?="+[jt,$t,"$"].join("|")+")",Nt+"+"+Rt+"(?="+[jt,$t+At,"$"].join("|")+")",$t+"?"+At+"+"+It,$t+"+"+Rt,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xt,Ut].join("|"),"g");var Dt=function(n){return n.match(Bt)||[]};var Pt=function(n,e,t){return n=On(n),void 0===(e=t?void 0:e)?yt(n)?Dt(n):pt(n):n.match(e)||[]},Ft=RegExp("['’]","g");var Vt=function(n){return function(e){return dt(Pt(ht(e).replace(Ft,"")),n,"")}}((function(n,e,t){return e=e.toLowerCase(),n+(t?ut(e):e)})),Zt=/^(?:0|[1-9]\d*)$/;var Wt=function(n,e){var t=r(n);return!!(e=null==e?9007199254740991:e)&&("number"==t||"symbol"!=t&&Zt.test(n))&&n>-1&&n%1==0&&n<e};var Gt=function(n,e,t){if(!w(t))return!1;var a=r(e);return!!("number"==a?Qn(t)&&Wt(e,t.length):"string"==a&&e in t)&&J(t[e],n)};var Yt=function(n){return g(n)&&"[object RegExp]"==p(n)};var qt=function(n){return function(e){return n(e)}},Ht=t((function(n,e){var t=e&&!e.nodeType&&e,r=t&&n&&!n.nodeType&&n,f=r&&r.exports===t&&a.process,i=function(){try{var n=r&&r.require&&r.require("util").types;return n||f&&f.binding&&f.binding("util")}catch(n){}}();n.exports=i})),Jt=Ht&&Ht.isRegExp,Xt=Jt?qt(Jt):Yt;var Kt=function(n,e,t){return t&&"number"!=typeof t&&Gt(n,e,t)&&(e=t=void 0),(t=void 0===t?4294967295:t>>>0)?(n=On(n))&&("string"==typeof e||null!=e&&!Xt(e))&&!(e=xn(e))&&re(n)?Ye(ct(n),0,t):n.split(e,t):[]},Qt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};var nr={props:{value:{type:Boolean,default:!1},minWidth:{type:Number,default:void 0},maxWidth:{type:Number,default:void 0},distY:{type:Number,default:5},backgroundColor:{type:String,default:"white"},editable:{type:Boolean,default:!0}},data:function(){return{timeDisabled:null,valueTrans:!1,clickInner:!1,eleMousedown:null,windowMousedown:null,windowMouseup:null,isBlock:!1}},mounted:function(){var n=this;n.eleMousedown=function(e){n.clickInner=!0,function(n){if(!n)return"invalid event";if(!n.cancelable)return"event is not cancelable";try{window.event?n.cancelBubble=!0:n.stopPropagation(),n.preventDefault()}catch(n){}}(e)},Le((function(){return null!==Cn(n,"$refs.divContent.addEventListener",null)})).then((function(){var e=n.$refs.divContent;e&&e.addEventListener("mousedown",n.eleMousedown)})),n.windowMousedown=function(e){n.clickInner=!1},window.addEventListener("mousedown",n.windowMousedown),n.windowMouseup=function(e){!n.clickInner&&n.valueTrans&&n.triggerEventThreshold(!1,"clickOuter")},window.addEventListener("mouseup",n.windowMouseup),Le((function(){return null!==Cn(n,"$refs.divTrigger",null)})).then((function(){var e=Cn(n,"$refs.divTrigger.children",null);if(0!==ge(e)){for(var t=!1,r=0;r<ge(e);r++){var a=e[r],f=getComputedStyle(a).display;if(t="block"===f||"flex"===f)break}n.isBlock=t}}))},beforeDestroy:function(){var n=this,e=Cn(n,"$refs.divContent",null);e&&e.removeEventListener("mousedown",n.eleMousedown),window.removeEventListener("mousedown",n.windowMousedown),window.removeEventListener("mouseup",n.windowMouseup)},computed:{changeValue:function(){return this.valueTrans=this.value,""},useBackgroundColor:function(){return function(n){if("white"===n)return"#fff";if("black"===n)return"#000";if("transparent"===n)return"rgba(0,0,0,0)";var e=Kt(n," ");if(2!==ge(e))return n;var t=e[0].trim();t=Vt(t);var r=e[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=Cn(Qt,"default.".concat(t,".").concat(r),null);return null===a&&(a=n),a}(this.backgroundColor)}},methods:{triggerEvent:function(n,e){var t=this;t.$nextTick((function(){t.$emit("input",n)}))},changeBackground:function(){var n=Cn(this,"$refs.divContent.parentNode",null);(function(n){return We(n)})(n)&&(n.style.background=this.useBackgroundColor)},changeValueTrans:function(n,e){var t=this;t.changeBackground(),t.valueTrans=n,t.triggerEventThreshold(n,e)},triggerEventThreshold:function(n,e){var t=this;new Date-t.timeDisabled<300||(t.timeDisabled=new Date,t.triggerEvent(n,e))},clickTrigger:function(n){}}};function er(n,e,t,r,a,f,i,c,o,u){"boolean"!=typeof i&&(o=c,c=i,i=!1);var d,l="function"==typeof t?t.options:t;if(n&&n.render&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),f?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,o(n)),n&&n._registeredComponents&&n._registeredComponents.add(f)},l._ssrRegister=d):e&&(d=i?function(n){e.call(this,u(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,c(n))}),d)if(l.functional){var s=l.render;l.render=function(n,e){return d.call(e),s(n,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,d):[d]}return t}var tr,rr="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function ar(n){return function(n,e){return function(n,e){var t=rr?e.media||"default":n,r=fr[t]||(fr[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var a=e.source;if(e.map&&(a+="\n/*# sourceURL="+e.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===tr&&(tr=document.head||document.getElementsByTagName("head")[0]),tr.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var f=r.ids.size-1,i=document.createTextNode(a),c=r.element.childNodes;c[f]&&r.element.removeChild(c[f]),c.length?r.element.insertBefore(i,c[f]):r.element.appendChild(i)}}}(n,e)}}var fr={};const ir=nr;var cr=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-menu",{attrs:{"offset-y":"","min-width":n.minWidth,"max-width":n.maxWidth,"nudge-top":-n.distY,"close-on-click":!1,"close-on-content-click":!1,disabled:!n.editable,value:n.valueTrans,changeValue:n.changeValue},on:{input:function(e){n.changeValueTrans(e,"v-menu")}},scopedSlots:n._u([{key:"activator",fn:function(e){var r=e.on;return[t("div",n._g({ref:"divTrigger",style:"display:"+(n.isBlock?"block":"inline-block")+";",on:{click:n.clickTrigger}},r),[n._t("trigger")],2)]}}],null,!0)},[n._v(" "),t("div",{ref:"divContent",style:"background:"+n.useBackgroundColor+";"},[n._t("content")],2)])};cr._withStripped=!0;return er({render:cr,staticRenderFns:[]},(function(n){n&&n("data-v-82b53622_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WPopup.vue"},media:void 0})}),ir,"data-v-82b53622",false,undefined,!1,ar,void 0,void 0)}));
//# sourceMappingURL=w-popup.umd.js.map
