/*!
 * w-switch v1.1.14
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-switch"]=b())})(this,function(){'use strict';function a(b){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(b)}function b(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":u&&u in Object(a)?q(a):t(a)}function c(b){return null!=b&&"object"==a(b)}function d(a){return w(a)}function e(a,b){var c=y?b.media||"default":a,d=z[c]||(z[c]={ids:new Set,styles:[]});if(!d.ids.has(a)){d.ids.add(a);var e=b.source;if(b.map&&(e+="\n/*# sourceURL="+b.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",b.media&&d.element.setAttribute("media",b.media),void 0===f&&(f=document.head||document.getElementsByTagName("head")[0]),f.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(e),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{var g=d.ids.size-1,h=document.createTextNode(e),i=d.element.childNodes;i[g]&&d.element.removeChild(i[g]),i.length?d.element.insertBefore(h,i[g]):d.element.appendChild(h)}}}var f,g="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,h="object"==a(g)&&g&&g.Object===Object&&g,i="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,j=h||i||Function("return this")(),k=j.Symbol,l=k,m=Object.prototype,n=m.hasOwnProperty,o=m.toString,p=l?l.toStringTag:void 0,q=function(a){var b=n.call(a,p),c=a[p];try{a[p]=void 0;var d=!0}catch(a){}var e=o.call(a);return d&&(b?a[p]=c:delete a[p]),e},r=Object.prototype,s=r.toString,t=function(a){return s.call(a)},u=l?l.toStringTag:void 0,w=function(a){return!0===a||!1===a||c(a)&&b(a)=="[object Boolean]"},x={props:{text:{type:String,default:""},value:{type:[String,Boolean],default:"no"},color:{type:String,default:"pink accent-3"},editable:{type:Boolean,default:!0}},data:function(){return{b:null}},mounted:function(){},computed:{ch_param:function(){var a=this,b=a.value;return a.b=d(b)?b:"yes"===b,""}},methods:{ch_boolean:function(a){var b=this,c=null;d(b.value)?(c=!1,a&&(c=!0)):(c="no",a&&(c="yes")),setTimeout(function(){b.$emit("input",c)},1)}}},y="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),z={};var A=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticStyle:{display:"inline-block"},attrs:{ch_param:a.ch_param}},[c("v-switch",{staticStyle:{margin:"0px"},attrs:{"hide-details":"",label:a.text,color:a.color,disabled:!a.editable},on:{change:a.ch_boolean},model:{value:a.b,callback:function(b){a.b=b},expression:"b"}})],1)};A._withStripped=!0;var B=function(a,b,c,d,e,f,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);var k="function"==typeof c?c.options:c;a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(){b.call(this,j(this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c}({render:A,staticRenderFns:[]},function(a){a&&a("data-v-d3face44_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WSwitch.vue"},media:void 0})},x,"data-v-d3face44",!1,void 0,function(){return function(a,b){return e(a,b)}},void 0);return B});
//# sourceMappingURL=w-switch.umd.js.map
