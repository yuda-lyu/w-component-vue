!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-switch"]=e()}(this,function(){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="object"==n(e)&&e&&e.Object===Object&&e,o="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,i=(t||o||Function("return this")()).Symbol,r=Object.prototype,a=r.hasOwnProperty,l=r.toString,s=i?i.toStringTag:void 0;var c=function(n){var e=a.call(n,s),t=n[s];try{n[s]=void 0;var o=!0}catch(n){}var i=l.call(n);return o&&(e?n[s]=t:delete n[s]),i},d=Object.prototype.toString;var u=function(n){return d.call(n)},f="[object Null]",p="[object Undefined]",m=i?i.toStringTag:void 0;var v=function(n){return null==n?void 0===n?p:f:m&&m in Object(n)?c(n):u(n)};var y=function(e){return null!=e&&"object"==n(e)},b="[object Boolean]";var h=function(n){return!0===n||!1===n||y(n)&&v(n)==b};function g(n){return h(n)}var S={props:{text:{type:String,default:""},value:{type:[String,Boolean],default:"no"},color:{type:String,default:"pink accent-3"},editable:{type:Boolean,default:!0}},data:function(){return{b:null}},mounted:function(){},computed:{changeParam:function(){var n=this.value;return g(n)?this.b=n:this.b="yes"===n,""}},methods:{ch_boolean:function(n){var e=this,t=null;g(e.value)?(t=!1,n&&(t=!0)):(t="no",n&&(t="yes")),setTimeout(function(){e.$emit("input",t)},1)}}};var _,j=function(n,e,t,o,i,r,a,l,s,c){"boolean"!=typeof a&&(s=l,l=a,a=!1);var d,u="function"==typeof t?t.options:t;if(n&&n.render&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),r?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,s(n)),n&&n._registeredComponents&&n._registeredComponents.add(r)},u._ssrRegister=d):e&&(d=a?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(n){e.call(this,l(n))}),d)if(u.functional){var f=u.render;u.render=function(n,e){return d.call(e),f(n,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,d):[d]}return t},w="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var C={};var T=function(n){return function(n,e){return function(n,e){var t=w?e.media||"default":n,o=C[t]||(C[t]={ids:new Set,styles:[]});if(!o.ids.has(n)){o.ids.add(n);var i=e.source;if(e.map&&(i+="\n/*# sourceURL="+e.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),void 0===_&&(_=document.head||document.getElementsByTagName("head")[0]),_.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var r=o.ids.size-1,a=document.createTextNode(i),l=o.element.childNodes;l[r]&&o.element.removeChild(l[r]),l.length?o.element.insertBefore(a,l[r]):o.element.appendChild(a)}}}(n,e)}};const x=S;var O=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{display:"inline-block"},attrs:{changeParam:n.changeParam}},[t("v-switch",{staticStyle:{margin:"0px"},attrs:{"hide-details":"",label:n.text,color:n.color,disabled:!n.editable},on:{change:n.ch_boolean},model:{value:n.b,callback:function(e){n.b=e},expression:"b"}})],1)};O._withStripped=!0;return j({render:O,staticRenderFns:[]},function(n){n&&n("data-v-36193256_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WSwitch.vue"},media:void 0})},x,"data-v-36193256",!1,void 0,T,void 0)});
//# sourceMappingURL=w-switch.umd.js.map
