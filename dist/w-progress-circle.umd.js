/*!
 * w-progress-circle v1.3.15
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-progress-circle"]=e()}(this,(function(){"use strict";var n={props:{text:{type:String,default:""},value:{type:Number,default:0},color:{type:String,default:"purple lighten-1"},size:{type:Number,default:120},width:{type:Number,default:10},tooltip:{type:String,default:""}},data:function(){return{}},mounted:function(){},computed:{styleProg:function(){var n=this.size/5.4,e=(this.size-26)/94*.25+.75;return{"font-size":n+"pt",transform:"scale(".concat(e,")")}},styleText:function(){return{color:"#666","font-size":this.size/12+"pt",transform:"scale(".concat(1.2,")")}}},methods:{clickBtn:function(){var n=this;setTimeout((function(){n.$emit("click")}),1)}}};var e,t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var i={};const o=n;var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{display:"inline-block"}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.tooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var i=e.on;return[t("v-progress-circular",n._g({attrs:{rotate:-90,size:n.size,width:n.width,color:n.color,value:n.value}},i),[t("div",{staticStyle:{"text-align":"center",transform:"translateY(-2%)"}},[t("div",{style:[n.styleProg]},[n._v(n._s(n.value)+"%")]),n._v(" "),t("div",{style:[n.styleText]},[n._v(n._s(n.text))])])])]}}])},[n._v(" "),t("span",[n._v(n._s(n.tooltip))])])],1)};s._withStripped=!0;return function(n,e,t,i,o,s,r,a,d,l){"boolean"!=typeof r&&(d=a,a=r,r=!1);var c,u="function"==typeof t?t.options:t;if(n&&n.render&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),i&&(u._scopeId=i),s?(c=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,d(n)),n&&n._registeredComponents&&n._registeredComponents.add(s)},u._ssrRegister=c):e&&(c=r?function(n){e.call(this,l(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,a(n))}),c)if(u.functional){var f=u.render;u.render=function(n,e){return c.call(e),f(n,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return t}({render:s,staticRenderFns:[]},(function(n){n&&n("data-v-04d05543_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WProgressCircle.vue"},media:void 0})}),o,"data-v-04d05543",!1,void 0,!1,(function(n){return function(n,o){return function(n,o){var s=t?o.media||"default":n,r=i[s]||(i[s]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var a=o.source;if(o.map&&(a+="\n/*# sourceURL="+o.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",o.media&&r.element.setAttribute("media",o.media),void 0===e&&(e=document.head||document.getElementsByTagName("head")[0]),e.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var d=r.ids.size-1,l=document.createTextNode(a),c=r.element.childNodes;c[d]&&r.element.removeChild(c[d]),c.length?r.element.insertBefore(l,c[d]):r.element.appendChild(l)}}}(n,o)}}),void 0,void 0)}));
//# sourceMappingURL=w-progress-circle.umd.js.map