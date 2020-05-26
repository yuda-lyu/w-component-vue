/*!
 * w-icon-loading v1.3.30
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-icon-loading"]=n()}(this,(function(){"use strict";var e={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};function n(e,n,t,i,s,a,o,r,d,l){"boolean"!=typeof o&&(d=r,r=o,o=!1);var c,u="function"==typeof t?t.options:t;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,s&&(u.functional=!0)),i&&(u._scopeId=i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):n&&(c=o?function(e){n.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,r(e))}),c)if(u.functional){var p=u.render;u.render=function(e,n){return c.call(n),p(e,n)}}else{var m=u.beforeCreate;u.beforeCreate=m?[].concat(m,c):[c]}return t}var t,i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function s(e){return function(e,n){return function(e,n){var s=i?n.media||"default":e,o=a[s]||(a[s]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var r=n.source;if(n.map&&(r+="\n/*# sourceURL="+n.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",n.media&&o.element.setAttribute("media",n.media),void 0===t&&(t=document.head||document.getElementsByTagName("head")[0]),t.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(r),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var d=o.ids.size-1,l=document.createTextNode(r),c=o.element.childNodes;c[d]&&o.element.removeChild(c[d]),c.length?o.element.insertBefore(l,c[d]):o.element.appendChild(l)}}}(e,n)}}var a={};const o=e;var r=function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},["cir1"===this.name?[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:this.size,height:this.size}},[n("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[n("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),this._v(" "),n("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),this._v(" "),n("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[n("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),this._v(" "),n("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:this._e()],2)};r._withStripped=!0;return n({render:r,staticRenderFns:[]},(function(e){e&&e("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),o,"data-v-619e545c",!1,void 0,!1,s,void 0,void 0)}));
//# sourceMappingURL=w-icon-loading.umd.js.map
