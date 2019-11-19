!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-button-circle"]=e()}(this,function(){"use strict";var n={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var n=this.size;return this.icon.indexOf("fa-")>=0?n-4:n},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};var e=function(n,e,t,r,o,i,s,a,c,l){"boolean"!=typeof s&&(c=a,a=s,s=!1);var d,u="function"==typeof t?t.options:t;if(n&&n.render&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),r&&(u._scopeId=r),i?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,c(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},u._ssrRegister=d):e&&(d=s?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(n){e.call(this,a(n))}),d)if(u.functional){var f=u.render;u.render=function(n,e){return d.call(e),f(n,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,d):[d]}return t},t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var r=document.head||document.getElementsByTagName("head")[0],o={};var i=function(n){return function(n,e){return function(n,e){var i=t?e.media||"default":n,s=o[i]||(o[i]={ids:new Set,styles:[]});if(!s.ids.has(n)){s.ids.add(n);var a=e.source;if(e.map&&(a+="\n/*# sourceURL="+e.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",e.media&&s.element.setAttribute("media",e.media),r.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(a),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{var c=s.ids.size-1,l=document.createTextNode(a),d=s.element.childNodes;d[c]&&s.element.removeChild(d[c]),d.length?s.element.insertBefore(l,d[c]):s.element.appendChild(l)}}}(n,e)}};const s=n;var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return""!==n.icon?t("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[t("v-icon",{style:n.useStyle,attrs:{color:n.color,size:n.useSize}},[n._v("\n        "+n._s(n.useIcon)+"\n    ")])],1):n._e()};a._withStripped=!0;const c={components:{WIcon:e({render:a,staticRenderFns:[]},function(n){n&&n("data-v-b57e8100_0",{source:"\n.v-icon[data-v-b57e8100] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-3-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})},s,"data-v-b57e8100",!1,void 0,i,void 0)},props:{tooltip:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:"grey darken-1"},buttonColor:{type:String,default:"grey darken-1"},shadow:{type:Boolean,default:!0},small:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{},methods:{clickBtn:function(){var n=this;setTimeout(function(){n.$emit("click")},1)}}};var l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{display:"inline-block"}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.tooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var r=e.on;return[t("v-btn",n._g({attrs:{icon:"",large:!n.small,elevation:n.shadow?4:0,color:n.buttonColor,loading:n.loading,disabled:!n.editable},on:{click:n.clickBtn}},r),[t("w-icon",{attrs:{icon:n.icon,color:n.iconColor}})],1)]}}])},[n._v(" "),t("span",[n._v(n._s(n.tooltip))])])],1)};l._withStripped=!0;return e({render:l,staticRenderFns:[]},function(n){n&&n("data-v-234c684b_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WButtonCircle.vue"},media:void 0})},c,"data-v-234c684b",!1,void 0,i,void 0)});
//# sourceMappingURL=w-button-circle.umd.js.map
