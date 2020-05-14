/*!
 * w-switch v1.3.21
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-switch"]=e()}(this,(function(){"use strict";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=function(n,e){return n(e={exports:{}},e.exports),e.exports}((function(n){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(t)}n.exports=e})),t="object"==e(n)&&n&&n.Object===Object&&n,o="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,i=(t||o||Function("return this")()).Symbol,r=Object.prototype,a=r.hasOwnProperty,s=r.toString,l=i?i.toStringTag:void 0;var c=function(n){var e=a.call(n,l),t=n[l];try{n[l]=void 0;var o=!0}catch(n){}var i=s.call(n);return o&&(e?n[l]=t:delete n[l]),i},d=Object.prototype.toString;var u=function(n){return d.call(n)},f=i?i.toStringTag:void 0;var p=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":f&&f in Object(n)?c(n):u(n)};var m=function(n){return null!=n&&"object"==e(n)};var v=function(n){return!0===n||!1===n||m(n)&&"[object Boolean]"==p(n)};function y(n){return v(n)}var b={props:{text:{type:String,default:""},value:{type:[String,Boolean],default:"no"},color:{type:String,default:"pink accent-3"},editable:{type:Boolean,default:!0}},data:function(){return{b:null}},mounted:function(){},computed:{changeParam:function(){var n=this.value;return y(n)?this.b=n:this.b="yes"===n,""}},methods:{ch_boolean:function(n){var e=this,t=null;y(e.value)?(t=!1,n&&(t=!0)):(t="no",n&&(t="yes")),setTimeout((function(){e.$emit("input",t)}),1)}}};function h(n,e,t,o,i,r,a,s,l,c){"boolean"!=typeof a&&(l=s,s=a,a=!1);var d,u="function"==typeof t?t.options:t;if(n&&n.render&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),r?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,l(n)),n&&n._registeredComponents&&n._registeredComponents.add(r)},u._ssrRegister=d):e&&(d=a?function(n){e.call(this,c(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,s(n))}),d)if(u.functional){var f=u.render;u.render=function(n,e){return d.call(e),f(n,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,d):[d]}return t}var g,S="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function _(n){return function(n,e){return function(n,e){var t=S?e.media||"default":n,o=x[t]||(x[t]={ids:new Set,styles:[]});if(!o.ids.has(n)){o.ids.add(n);var i=e.source;if(e.map&&(i+="\n/*# sourceURL="+e.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),void 0===g&&(g=document.head||document.getElementsByTagName("head")[0]),g.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var r=o.ids.size-1,a=document.createTextNode(i),s=o.element.childNodes;s[r]&&o.element.removeChild(s[r]),s.length?o.element.insertBefore(a,s[r]):o.element.appendChild(a)}}}(n,e)}}var x={};const j=b;var w=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{display:"inline-block"},attrs:{changeParam:n.changeParam}},[t("v-switch",{staticStyle:{margin:"0px",padding:"0px"},attrs:{"hide-details":"",label:n.text,color:n.color,disabled:!n.editable},on:{change:n.ch_boolean},model:{value:n.b,callback:function(e){n.b=e},expression:"b"}})],1)};w._withStripped=!0;return h({render:w,staticRenderFns:[]},(function(n){n&&n("data-v-ea5a6690_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WSwitch.vue"},media:void 0})}),j,"data-v-ea5a6690",!1,void 0,!1,_,void 0,void 0)}));
//# sourceMappingURL=w-switch.umd.js.map
