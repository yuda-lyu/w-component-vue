/*!
 * w-popup-panel v1.3.33
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-popup-panel"]=e()}(this,(function(){"use strict";var n=Array.isArray,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t=function(n,e){return n(e={exports:{}},e.exports),e.exports}((function(n){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(t)}n.exports=e})),r="object"==t(e)&&e&&e.Object===Object&&e,o="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,i=r||o||Function("return this")(),u=i.Symbol,a=Object.prototype,c=a.hasOwnProperty,s=a.toString,l=u?u.toStringTag:void 0;var f=function(n){var e=c.call(n,l),t=n[l];try{n[l]=void 0;var r=!0}catch(n){}var o=s.call(n);return r&&(e?n[l]=t:delete n[l]),o},d=Object.prototype.toString;var v=function(n){return d.call(n)},p=u?u.toStringTag:void 0;var h=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":p&&p in Object(n)?f(n):v(n)};var y=function(n){return null!=n&&"object"==t(n)};var _=function(n){return"symbol"==t(n)||y(n)&&"[object Symbol]"==h(n)},m=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,b=/^\w*$/;var g=function(e,r){if(n(e))return!1;var o=t(e);return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=e&&!_(e))||(b.test(e)||!m.test(e)||null!=r&&e in Object(r))};var w=function(n){var e=t(n);return null!=n&&("object"==e||"function"==e)};var j,S=function(n){if(!w(n))return!1;var e=h(n);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},O=i["__core-js_shared__"],$=(j=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var x=function(n){return!!$&&$ in n},C=Function.prototype.toString;var E=function(n){if(null!=n){try{return C.call(n)}catch(n){}try{return n+""}catch(n){}}return""},N=/^\[object .+?Constructor\]$/,T=Function.prototype,M=Object.prototype,z=T.toString,k=M.hasOwnProperty,F=RegExp("^"+z.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var R=function(n){return!(!w(n)||x(n))&&(S(n)?F:N).test(E(n))};var I=function(n,e){return null==n?void 0:n[e]};var P=function(n,e){var t=I(n,e);return R(t)?t:void 0},L=P(Object,"create");var A=function(){this.__data__=L?L(null):{},this.size=0};var B=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},U=Object.prototype.hasOwnProperty;var V=function(n){var e=this.__data__;if(L){var t=e[n];return"__lodash_hash_undefined__"===t?void 0:t}return U.call(e,n)?e[n]:void 0},W=Object.prototype.hasOwnProperty;var D=function(n){var e=this.__data__;return L?void 0!==e[n]:W.call(e,n)};var X=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=L&&void 0===e?"__lodash_hash_undefined__":e,this};function Y(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Y.prototype.clear=A,Y.prototype.delete=B,Y.prototype.get=V,Y.prototype.has=D,Y.prototype.set=X;var G=Y;var J=function(){this.__data__=[],this.size=0};var q=function(n,e){return n===e||n!=n&&e!=e};var H=function(n,e){for(var t=n.length;t--;)if(q(n[t][0],e))return t;return-1},K=Array.prototype.splice;var Q=function(n){var e=this.__data__,t=H(e,n);return!(t<0)&&(t==e.length-1?e.pop():K.call(e,t,1),--this.size,!0)};var Z=function(n){var e=this.__data__,t=H(e,n);return t<0?void 0:e[t][1]};var nn=function(n){return H(this.__data__,n)>-1};var en=function(n,e){var t=this.__data__,r=H(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this};function tn(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}tn.prototype.clear=J,tn.prototype.delete=Q,tn.prototype.get=Z,tn.prototype.has=nn,tn.prototype.set=en;var rn=tn,on=P(i,"Map");var un=function(){this.size=0,this.__data__={hash:new G,map:new(on||rn),string:new G}};var an=function(n){var e=t(n);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n};var cn=function(n,e){var t=n.__data__;return an(e)?t["string"==typeof e?"string":"hash"]:t.map};var sn=function(n){var e=cn(this,n).delete(n);return this.size-=e?1:0,e};var ln=function(n){return cn(this,n).get(n)};var fn=function(n){return cn(this,n).has(n)};var dn=function(n,e){var t=cn(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this};function vn(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}vn.prototype.clear=un,vn.prototype.delete=sn,vn.prototype.get=ln,vn.prototype.has=fn,vn.prototype.set=dn;var pn=vn;function hn(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function t(){var r=arguments,o=e?e.apply(this,r):r[0],i=t.cache;if(i.has(o))return i.get(o);var u=n.apply(this,r);return t.cache=i.set(o,u)||i,u};return t.cache=new(hn.Cache||pn),t}hn.Cache=pn;var yn=hn;var _n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mn=/\\(\\)?/g,bn=function(n){var e=yn(n,(function(n){return 500===t.size&&t.clear(),n})),t=e.cache;return e}((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(_n,(function(n,t,r,o){e.push(r?o.replace(mn,"$1"):t||n)})),e}));var gn=function(n,e){for(var t=-1,r=null==n?0:n.length,o=Array(r);++t<r;)o[t]=e(n[t],t,n);return o},wn=u?u.prototype:void 0,jn=wn?wn.toString:void 0;var Sn=function e(t){if("string"==typeof t)return t;if(n(t))return gn(t,e)+"";if(_(t))return jn?jn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var On=function(n){return null==n?"":Sn(n)};var $n=function(e,t){return n(e)?e:g(e,t)?[e]:bn(On(e))};var xn=function(n){if("string"==typeof n||_(n))return n;var e=n+"";return"0"==e&&1/n==-1/0?"-0":e};var Cn=function(n,e){for(var t=0,r=(e=$n(e,n)).length;null!=n&&t<r;)n=n[xn(e[t++])];return t&&t==r?n:void 0};var En=function(n,e,t){var r=null==n?void 0:Cn(n,e);return void 0===r?t:r};function Nn(){var n,e,t=new Promise((function(){n=arguments[0],e=arguments[1]}));return t.resolve=n,t.reject=e,t}function Tn(n){var e=Object.prototype.toString.call(n);return"[object Function]"===e||"[object AsyncFunction]"===e}var Mn=/^\s+|\s+$/g,zn=/^[-+]0x[0-9a-f]+$/i,kn=/^0b[01]+$/i,Fn=/^0o[0-7]+$/i,Rn=parseInt;var In=function(n){if("number"==typeof n)return n;if(_(n))return NaN;if(w(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=w(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Mn,"");var t=kn.test(n);return t||Fn.test(n)?Rn(n.slice(2),t?2:8):zn.test(n)?NaN:+n};var Pn=function(n){return n?(n=In(n))===1/0||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0};var Ln=function(n){var e=Pn(n),t=e%1;return e==e?t?e-t:e:0};var An=function(n){return"number"==typeof n&&n==Ln(n)};function Bn(n){return!(!function(n){return"[object String]"===Object.prototype.toString.call(n)}(n)||""===n)}function Un(n){var e=!1;return Bn(n)?e=!isNaN(Number(n)):function(n){return"[object Number]"===Object.prototype.toString.call(n)}(n)&&(e=!0),e}function Vn(n){return Un(n)?Pn(n):0}var Wn=i.isFinite,Dn=Math.min;var Xn=function(n){var e=Math[n];return function(n,t){if(n=In(n),(t=null==t?0:Dn(Ln(t),292))&&Wn(n)){var r=(On(n)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+t));return+((r=(On(o)+"e").split("e"))[0]+"e"+(+r[1]-t))}return e(n)}}("round");function Yn(n){return!!function(n){return!!Un(n)&&(n=Vn(n),An(n))}(n)&&function(n){if(!Un(n))return 0;n=Vn(n);var e=Xn(n);return"0"===String(e)?0:e}(n)>0}var Gn={props:{value:{type:Boolean,default:!1},minWidth:{type:Number,default:void 0},maxWidth:{type:Number,default:void 0},distY:{type:Number,default:5},editable:{type:Boolean,default:!0}},data:function(){return{clickInner:!1,eleMousedown:null,windowMousedown:null,windowMouseup:null}},mounted:function(){var n=this;n.eleMousedown=function(e){n.clickInner=!0,function(n){window.event?n.cancelBubble=!0:n.stopPropagation(),n.preventDefault()}(e)},function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180,t=Nn();if(!Tn(n))return t.reject("waitfunction需輸入函數f"),t;if(!0===n())return t.resolve(),t;Yn(e)||(e=180);var r=0,o=setInterval((function(){r+=1,!0===n()&&(clearInterval(o),t.resolve()),r>=e&&(clearInterval(o),t.resolve())}),1e3);return t}((function(){return null!==En(n,"$refs.divContent.addEventListener",null)})).then((function(){var e=n.$refs.divContent;e&&e.addEventListener("mousedown",n.eleMousedown)})),n.windowMousedown=function(e){n.clickInner=!1},window.addEventListener("mousedown",n.windowMousedown),n.windowMouseup=function(e){!n.clickInner&&n.value&&n.changeValue(!1)},window.addEventListener("mouseup",n.windowMouseup)},beforeDestroy:function(){var n=En(this,"$refs.divContent",null);n&&n.removeEventListener("mousedown",this.eleMousedown),window.removeEventListener("mousedown",this.windowMousedown),window.removeEventListener("mouseup",this.windowMouseup)},computed:{},methods:{changeValue:function(n){var e=this;setTimeout((function(){e.$emit("input",n)}),1)},clickTrigger:function(n){var e=this;e.value&&setTimeout((function(){e.$emit("input",!0)}),10)}}};function Jn(n,e,t,r,o,i,u,a,c,s){"boolean"!=typeof u&&(c=a,a=u,u=!1);var l,f="function"==typeof t?t.options:t;if(n&&n.render&&(f.render=n.render,f.staticRenderFns=n.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(l=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,c(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},f._ssrRegister=l):e&&(l=u?function(n){e.call(this,s(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,a(n))}),l)if(f.functional){var d=f.render;f.render=function(n,e){return l.call(e),d(n,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return t}var qn,Hn="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Kn(n){return function(n,e){return function(n,e){var t=Hn?e.media||"default":n,r=Qn[t]||(Qn[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===qn&&(qn=document.head||document.getElementsByTagName("head")[0]),qn.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,u=document.createTextNode(o),a=r.element.childNodes;a[i]&&r.element.removeChild(a[i]),a.length?r.element.insertBefore(u,a[i]):r.element.appendChild(u)}}}(n,e)}}var Qn={};const Zn=Gn;var ne=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-menu",{attrs:{"offset-y":"","min-width":n.minWidth,"max-width":n.maxWidth,"nudge-top":-n.distY,"close-on-click":!1,"close-on-content-click":!1,value:n.value,disabled:!n.editable},on:{input:n.changeValue},scopedSlots:n._u([{key:"activator",fn:function(e){var r=e.on;return[t("div",n._g({on:{click:n.clickTrigger}},r),[n._t("trigger")],2)]}}],null,!0)},[n._v(" "),t("div",{ref:"divContent"},[n._t("content")],2)])};ne._withStripped=!0;return Jn({render:ne,staticRenderFns:[]},(function(n){n&&n("data-v-613e3cc0_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WPopupPanel.vue"},media:void 0})}),Zn,"data-v-613e3cc0",!1,void 0,!1,Kn,void 0,void 0)}));
//# sourceMappingURL=w-popup-panel.umd.js.map
