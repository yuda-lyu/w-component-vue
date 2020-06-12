/*!
 * w-button-circle v1.3.41
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-button-circle"]=e()}(this,(function(){"use strict";var n={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var n=this.size;return this.icon.indexOf("fa-")>=0?n-4:n},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};function e(n,e,t,r,o,i,s,a,l,c){"boolean"!=typeof s&&(l=a,a=s,s=!1);var d,u="function"==typeof t?t.options:t;if(n&&n.render&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),r&&(u._scopeId=r),i?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,l(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},u._ssrRegister=d):e&&(d=s?function(n){e.call(this,c(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,a(n))}),d)if(u.functional){var f=u.render;u.render=function(n,e){return d.call(e),f(n,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,d):[d]}return t}var t,r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(n){return function(n,e){return function(n,e){var o=r?e.media||"default":n,s=i[o]||(i[o]={ids:new Set,styles:[]});if(!s.ids.has(n)){s.ids.add(n);var a=e.source;if(e.map&&(a+="\n/*# sourceURL="+e.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",e.media&&s.element.setAttribute("media",e.media),void 0===t&&(t=document.head||document.getElementsByTagName("head")[0]),t.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(a),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{var l=s.ids.size-1,c=document.createTextNode(a),d=s.element.childNodes;d[l]&&s.element.removeChild(d[l]),d.length?s.element.insertBefore(c,d[l]):s.element.appendChild(c)}}}(n,e)}}var i={};const s=n;var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return""!==n.icon?t("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[t("v-icon",{style:n.useStyle,attrs:{color:n.color,size:n.useSize}},[n._v("\n        "+n._s(n.useIcon)+"\n    ")])],1):n._e()};a._withStripped=!0;const l={components:{WIcon:e({render:a,staticRenderFns:[]},(function(n){n&&n("data-v-39a33360_0",{source:"\n.v-icon[data-v-39a33360] {\r\n    transition: all 0.3s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.3s;\r\n}\r\n</style>\r\n"]},media:void 0})}),s,"data-v-39a33360",!1,void 0,!1,o,void 0,void 0)},props:{tooltip:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:"grey darken-1"},backgroundColor:{type:String,default:"transparent"},shadow:{type:Boolean,default:!0},small:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{},methods:{clickBtn:function(){var n=this;setTimeout((function(){n.$emit("click")}),1)}}};var c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{display:"inline-block"}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.tooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var r=e.on;return["transparent"===n.backgroundColor?t("v-btn",n._g({attrs:{icon:"",large:!n.small,elevation:n.shadow?4:0,color:n.iconColor,loading:n.loading,disabled:!n.editable},on:{click:n.clickBtn}},r),[t("w-icon",{attrs:{icon:n.icon}})],1):t("v-btn",n._g({attrs:{fab:"",small:n.small,elevation:n.shadow?4:0,color:n.backgroundColor,loading:n.loading,disabled:!n.editable},on:{click:n.clickBtn}},r),[t("w-icon",{attrs:{icon:n.icon,color:n.iconColor}})],1)]}}])},[n._v(" "),t("span",[n._v(n._s(n.tooltip))])])],1)};c._withStripped=!0;return e({render:c,staticRenderFns:[]},(function(n){n&&n("data-v-4650092e_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WButtonCircle.vue"},media:void 0})}),l,"data-v-4650092e",!1,void 0,!1,o,void 0,void 0)}));
//# sourceMappingURL=w-button-circle.umd.js.map
