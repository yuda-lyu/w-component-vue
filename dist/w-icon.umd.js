/*!
 * w-icon v1.3.31
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-icon"]=n()}(this,(function(){"use strict";var e={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var e=this.size;return this.icon.indexOf("fa-")>=0?e-4:e},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};function n(e,n,r,t,o,i,s,a,c,l){"boolean"!=typeof s&&(c=a,a=s,s=!1);var d,u="function"==typeof r?r.options:r;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),t&&(u._scopeId=t),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):n&&(d=s?function(e){n.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,a(e))}),d)if(u.functional){var f=u.render;u.render=function(e,n){return d.call(n),f(e,n)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,d):[d]}return r}var r,t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return function(e,n){return function(e,n){var o=t?n.media||"default":e,s=i[o]||(i[o]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",n.media&&s.element.setAttribute("media",n.media),void 0===r&&(r=document.head||document.getElementsByTagName("head")[0]),r.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(a),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{var c=s.ids.size-1,l=document.createTextNode(a),d=s.element.childNodes;d[c]&&s.element.removeChild(d[c]),d.length?s.element.insertBefore(l,d[c]):s.element.appendChild(l)}}}(e,n)}}var i={};const s=e;var a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return""!==e.icon?r("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[r("v-icon",{style:e.useStyle,attrs:{color:e.color,size:e.useSize}},[e._v("\n        "+e._s(e.useIcon)+"\n    ")])],1):e._e()};a._withStripped=!0;return n({render:a,staticRenderFns:[]},(function(e){e&&e("data-v-5ea7e17f_0",{source:"\n.v-icon[data-v-5ea7e17f] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})}),s,"data-v-5ea7e17f",!1,void 0,!1,o,void 0,void 0)}));
//# sourceMappingURL=w-icon.umd.js.map
