/*!
 * w-textarea v1.3.32
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-textarea"]=n()}(this,(function(){"use strict";var e={props:{value:{type:String,default:""},placeholder:{type:String,default:""},borderColorFocus:{type:String,default:"purple lighten-3"},editable:{type:Boolean,default:!0}},data:function(){return{valueTrans:""}},mounted:function(){},computed:{changeParam:function(){return this.valueTrans=this.value,""}},methods:{changeContent:function(e){var n=this;setTimeout((function(){n.$emit("input",e)}),1)}}};function n(e,n,t,a,o,r,i,s,d,l){"boolean"!=typeof i&&(d=s,s=i,i=!1);var c,u="function"==typeof t?t.options:t;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),a&&(u._scopeId=a),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=i?function(e){n.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,s(e))}),c)if(u.functional){var p=u.render;u.render=function(e,n){return c.call(n),p(e,n)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return t}var t,a="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return function(e,n){return function(e,n){var o=a?n.media||"default":e,i=r[o]||(r[o]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var s=n.source;if(n.map&&(s+="\n/*# sourceURL="+n.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",n.media&&i.element.setAttribute("media",n.media),void 0===t&&(t=document.head||document.getElementsByTagName("head")[0]),t.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(s),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var d=i.ids.size-1,l=document.createTextNode(s),c=i.element.childNodes;c[d]&&i.element.removeChild(c[d]),c.length?i.element.insertBefore(l,c[d]):i.element.appendChild(l)}}}(e,n)}}var r={};const i=e;var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{changeParam:e.changeParam}},[t("v-textarea",{staticStyle:{margin:"0px",padding:"0px"},attrs:{"auto-grow":"","hide-details":"",rows:"1",color:e.borderColorFocus,placeholder:e.placeholder,disabled:!e.editable},on:{change:e.changeContent},model:{value:e.valueTrans,callback:function(n){e.valueTrans=n},expression:"valueTrans"}})],1)};s._withStripped=!0;return n({render:s,staticRenderFns:[]},(function(e){e&&e("data-v-4558e0a4_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WTextarea.vue"},media:void 0})}),i,"data-v-4558e0a4",!1,void 0,!1,o,void 0,void 0)}));
//# sourceMappingURL=w-textarea.umd.js.map
