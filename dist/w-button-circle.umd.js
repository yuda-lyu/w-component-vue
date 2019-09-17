/*!
 * w-button-circle v1.1.27
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-button-circle"]=b())})(this,function(){'use strict';function a(a,c){var d=e?c.media||"default":a,g=f[d]||(f[d]={ids:new Set,styles:[]});if(!g.ids.has(a)){g.ids.add(a);var h=c.source;if(c.map&&(h+="\n/*# sourceURL="+c.map.sources[0]+" */",h+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c.map))))+" */"),g.element||(g.element=document.createElement("style"),g.element.type="text/css",c.media&&g.element.setAttribute("media",c.media),void 0===b&&(b=document.head||document.getElementsByTagName("head")[0]),b.appendChild(g.element)),"styleSheet"in g.element)g.styles.push(h),g.element.styleSheet.cssText=g.styles.filter(Boolean).join("\n");else{var i=g.ids.size-1,j=document.createTextNode(h),k=g.element.childNodes;k[i]&&g.element.removeChild(k[i]),k.length?g.element.insertBefore(j,k[i]):g.element.appendChild(j)}}}var b,c={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){var a=this;return 0<=a.icon.indexOf("fa-")?a.icon+" fa-fw":a.icon},useSize:function(){var a=this,b=a.size;return 0<=a.icon.indexOf("fa-")?b-4:b},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}},d=function(a,b,c,d,e,f,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);var k="function"==typeof c?c.options:c;a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(){b.call(this,j(this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c},e="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),f={},g=function(){return function(b,c){return a(b,c)}};var h=function(){var a=this,b=a.$createElement,c=a._self._c||b;return""===a.icon?a._e():c("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[c("v-icon",{style:a.useStyle,attrs:{color:a.color,size:a.useSize}},[a._v("\n        "+a._s(a.useIcon)+"\n    ")])],1)};h._withStripped=!0;var i=d({render:h,staticRenderFns:[]},function(a){a&&a("data-v-c4e40804_0",{source:"\n.v-icon[data-v-c4e40804] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] \u8F38\u5165\u5716\u6A19\u5B57\u4E32\uFF0C\u53EF\u70BAmdi,md,fa\u4EE3\u865F\u6216mdi/js\u8DEF\u5F91\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [color=''] \u8F38\u5165\u5716\u6A19\u80CC\u666F\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {Number} [size=24] \u8F38\u5165\u5716\u6A19\u5927\u5C0F\uFF0C\u55AE\u4F4D\u70BApx\uFF0C\u9810\u8A2D24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})},c,"data-v-c4e40804",!1,void 0,g,void 0),j={components:{WIcon:i},props:{tooltip:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:"grey darken-1"},buttonColor:{type:String,default:"grey darken-1"},shadow:{type:Boolean,default:!0},small:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{},methods:{clickBtn:function(){var a=this;setTimeout(function(){a.$emit("click")},1)}}};var k=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticStyle:{display:"inline-block"}},[c("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===a.tooltip},scopedSlots:a._u([{key:"activator",fn:function(b){var d=b.on;return[c("v-btn",a._g({attrs:{icon:"",large:!a.small,elevation:a.shadow?4:0,color:a.buttonColor,loading:a.loading,disabled:!a.editable},on:{click:a.clickBtn}},d),[c("w-icon",{attrs:{icon:a.icon,color:a.iconColor}})],1)]}}])},[a._v(" "),c("span",[a._v(a._s(a.tooltip))])])],1)};k._withStripped=!0;var l=d({render:k,staticRenderFns:[]},function(a){a&&a("data-v-5b9fc89a_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WButtonCircle.vue"},media:void 0})},j,"data-v-5b9fc89a",!1,void 0,g,void 0);return l});
//# sourceMappingURL=w-button-circle.umd.js.map
