/*!
 * w-text-core v1.3.54
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-text-core"]=e()}(this,(function(){"use strict";function n(n){return"[object String]"===Object.prototype.toString.call(n)}function e(e){var t=!1;return!function(e){return!(!n(e)||""===e)}(e)?function(n){return"[object Number]"===Object.prototype.toString.call(n)}(e)&&(t=!0):t=!isNaN(Number(e)),t}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(n,e){return n(e={exports:{}},e.exports),e.exports}((function(n){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(t)}n.exports=e}));var o=function(n){var e=r(n);return null!=n&&("object"==e||"function"==e)},i="object"==r(t)&&t&&t.Object===Object&&t,u="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=i||u||Function("return this")(),s=a.Symbol,l=Object.prototype,c=l.hasOwnProperty,f=l.toString,d=s?s.toStringTag:void 0;var p=function(n){var e=c.call(n,d),t=n[d];try{n[d]=void 0;var r=!0}catch(n){}var o=f.call(n);return r&&(e?n[d]=t:delete n[d]),o},v=Object.prototype.toString;var m=function(n){return v.call(n)},y=s?s.toStringTag:void 0;var g=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":y&&y in Object(n)?p(n):m(n)};var h=function(n){return null!=n&&"object"==r(n)};var b=function(n){return"symbol"==r(n)||h(n)&&"[object Symbol]"==g(n)},S=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,T=/^0o[0-7]+$/i,_=parseInt;var C=function(n){if("number"==typeof n)return n;if(b(n))return NaN;if(o(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=o(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(S,"");var t=x.test(n);return t||T.test(n)?_(n.slice(2),t?2:8):j.test(n)?NaN:+n};var N=function(n){return n?(n=C(n))===1/0||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0};function O(n){return e(n)?N(n):0}var $=function(n){var e=N(n),t=e%1;return e==e?t?e-t:e:0};var w=function(n){return"number"==typeof n&&n==$(n)};function F(n){return!!e(n)&&(n=O(n),w(n))}var R=function(n,e){for(var t=-1,r=null==n?0:n.length,o=Array(r);++t<r;)o[t]=e(n[t],t,n);return o},A=Array.isArray,E=s?s.prototype:void 0,U=E?E.toString:void 0;var k=function n(e){if("string"==typeof e)return e;if(A(e))return R(e,n)+"";if(b(e))return U?U.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var B=function(n){return null==n?"":k(n)},V=a.isFinite,I=Math.min;var L=function(n){var e=Math[n];return function(n,t){if(n=C(n),(t=null==t?0:I($(t),292))&&V(n)){var r=(B(n)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+t));return+((r=(B(o)+"e").split("e"))[0]+"e"+(+r[1]-t))}return e(n)}}("round");function M(n){if(!e(n))return 0;n=O(n);var t=L(n);return"0"===String(t)?0:t}function P(t,r){var o,i=!1,u="";if("isstr"===r)n(t)||(i=!0,u="需要為字串",t="");else if("isnum"===r)e(t)||(i=!0,u="需要為數字",t=0);else if("isp0num"===r)e(o=t)&&O(o)>=0||(i=!0,u="需要為含0的正浮點數",t=0);else if("isn0num"===r)(function(n){return!!e(n)&&O(n)<=0})(t)||(i=!0,u="需要為含0的負浮點數",t=0);else if("isint"===r)F(t)||(i=!0,u="需要為整數",t=0);else if("ispint"===r)(function(n){return!!F(n)&&M(n)>0})(t)||(i=!0,u="需要為不含0正整數",t=0);else if("isp0int"===r)(function(n){return!!F(n)&&M(n)>=0})(t)||(i=!0,u="需要為含0正整數",t=0);else if("isnint"===r)(function(n){return!!F(n)&&M(n)<0})(t)||(i=!0,u="需要為不含0負整數",t=0);else if("isn0int"===r)(function(n){return!!F(n)&&M(n)<=0})(t)||(i=!0,u="需要為含0負整數",t=0);else if(function(n){var e=Object.prototype.toString.call(n);return"[object Function]"===e||"[object AsyncFunction]"===e}(r)){t=r(t)}else"any"===r?e(t)||n(t)||(i=!0,u="需要為字串或數字",t=""):(i=!0,u="需要指定驗證類型",t=null);return{value:t,err:i,errmsg:u}}var X={props:{type:{type:String,default:"any"},value:{type:[String,Number]},textAlign:{type:String,default:"left"},placeholder:{type:String,default:""},height:{type:Number,default:28},editable:{type:Boolean,default:!0},focused:{type:Boolean,default:!1}},data:function(){return{valueTrans:""}},mounted:function(){},computed:{changeValue:function(){return this.valueTrans=this.value,""}},methods:{changeFocused:function(n){var e=this;setTimeout((function(){e.$emit("update:focused",n)}),1)},changeContent:function(n){var e=this,t=P(e.valueTrans,e.type),r=t.value,o=t.errmsg;setTimeout((function(){e.valueTrans=r,e.$emit("input",r,o),e.$emit(n,r,o)}),1)}}};function z(n,e,t,r,o,i,u,a,s,l){"boolean"!=typeof u&&(s=a,a=u,u=!1);var c,f="function"==typeof t?t.options:t;if(n&&n.render&&(f.render=n.render,f.staticRenderFns=n.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(c=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,s(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},f._ssrRegister=c):e&&(c=u?function(n){e.call(this,l(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,a(n))}),c)if(f.functional){var d=f.render;f.render=function(n,e){return c.call(e),d(n,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,c):[c]}return t}var J,W="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function q(n){return function(n,e){return function(n,e){var t=W?e.media||"default":n,r=D[t]||(D[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===J&&(J=document.head||document.getElementsByTagName("head")[0]),J.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,u=document.createTextNode(o),a=r.element.childNodes;a[i]&&r.element.removeChild(a[i]),a.length?r.element.insertBefore(u,a[i]):r.element.appendChild(u)}}}(n,e)}}var D={};const G=X;var H=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{changeValue:n.changeValue}},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.valueTrans,expression:"valueTrans"}],ref:"inp",style:"transition:all 0.3s; outline: none; width:100%; height:"+n.height+"px; text-align:"+n.textAlign+"; opacity:"+(n.valueTrans||n.focused?1:.6)+";",attrs:{type:"text",readonly:!n.editable,placeholder:n.placeholder},domProps:{value:n.valueTrans},on:{input:[function(e){e.target.composing||(n.valueTrans=e.target.value)},function(e){n.changeFocused(!0),n.changeContent("input")}],focus:function(e){return n.changeFocused(!0)},blur:function(e){n.changeFocused(!1),n.changeContent("blur")},keyup:function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.changeContent("enter")}}})])};H._withStripped=!0;return z({render:H,staticRenderFns:[]},(function(n){n&&n("data-v-0e8111f8_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WTextCore.vue"},media:void 0})}),G,"data-v-0e8111f8",!1,void 0,!1,q,void 0,void 0)}));
//# sourceMappingURL=w-text-core.umd.js.map
