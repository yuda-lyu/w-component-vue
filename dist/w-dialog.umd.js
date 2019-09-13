/*!
 * w-dialog v1.1.24
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-dialog"]=b())})(this,function(){'use strict';function a(b){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(b)}function b(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":u&&u in Object(a)?q(a):t(a)}function c(b){return null!=b&&"object"==a(b)}function d(a){return w(a)}function e(a,b){var c=z?b.media||"default":a,d=A[c]||(A[c]={ids:new Set,styles:[]});if(!d.ids.has(a)){d.ids.add(a);var e=b.source;if(b.map&&(e+="\n/*# sourceURL="+b.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",b.media&&d.element.setAttribute("media",b.media),void 0===f&&(f=document.head||document.getElementsByTagName("head")[0]),f.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(e),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{var g=d.ids.size-1,h=document.createTextNode(e),i=d.element.childNodes;i[g]&&d.element.removeChild(i[g]),i.length?d.element.insertBefore(h,i[g]):d.element.appendChild(h)}}}var f,g="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,h="object"==a(g)&&g&&g.Object===Object&&g,i="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,j=h||i||Function("return this")(),k=j.Symbol,l=k,m=Object.prototype,n=m.hasOwnProperty,o=m.toString,p=l?l.toStringTag:void 0,q=function(a){var b=n.call(a,p),c=a[p];try{a[p]=void 0;var d=!0}catch(a){}var e=o.call(a);return d&&(b?a[p]=c:delete a[p]),e},r=Object.prototype,s=r.toString,t=function(a){return s.call(a)},u=l?l.toStringTag:void 0,w=function(a){return!0===a||!1===a||c(a)&&b(a)=="[object Boolean]"},x={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){var a=this;return 0<=a.icon.indexOf("fa-")?a.icon+" fa-fw":a.icon},useSize:function(){var a=this,b=a.size;return 0<=a.icon.indexOf("fa-")?b-4:b},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}},y=function(a,b,c,d,e,f,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);var k="function"==typeof c?c.options:c;a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(){b.call(this,j(this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c},z="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),A={},B=function(){return function(a,b){return e(a,b)}};var C=function(){var a=this,b=a.$createElement,c=a._self._c||b;return""===a.icon?a._e():c("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[c("v-icon",{style:a.useStyle,attrs:{color:a.color,size:a.useSize}},[a._v("\n        "+a._s(a.useIcon)+"\n    ")])],1)};C._withStripped=!0;var D=y({render:C,staticRenderFns:[]},function(a){a&&a("data-v-c4e40804_0",{source:"\n.v-icon[data-v-c4e40804] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] \u8F38\u5165\u5716\u6A19\u5B57\u4E32\uFF0C\u53EF\u70BAmdi,md,fa\u4EE3\u865F\u6216mdi/js\u8DEF\u5F91\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [color=''] \u8F38\u5165\u5716\u6A19\u80CC\u666F\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {Number} [size=24] \u8F38\u5165\u5716\u6A19\u5927\u5C0F\uFF0C\u55AE\u4F4D\u70BApx\uFF0C\u9810\u8A2D24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})},x,"data-v-c4e40804",!1,void 0,B,void 0),E={components:{WIcon:D},props:{tooltip:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:"grey darken-1"},buttonColor:{type:String,default:"grey darken-1"},shadow:{type:Boolean,default:!0},small:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{},methods:{clickBtn:function(){var a=this;setTimeout(function(){a.$emit("click")},1)}}};var F=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticStyle:{display:"inline-block"}},[c("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===a.tooltip},scopedSlots:a._u([{key:"activator",fn:function(b){var d=b.on;return[c("v-btn",a._g({attrs:{icon:"",large:!a.small,elevation:a.shadow?4:0,color:a.buttonColor,loading:a.loading,disabled:!a.editable},on:{click:a.clickBtn}},d),[c("w-icon",{attrs:{icon:a.icon,color:a.iconColor}})],1)]}}])},[a._v(" "),c("span",[a._v(a._s(a.tooltip))])])],1)};F._withStripped=!0;var G=y({render:F,staticRenderFns:[]},function(a){a&&a("data-v-5b9fc89a_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WButtonCircle.vue"},media:void 0})},E,"data-v-5b9fc89a",!1,void 0,B,void 0),H={components:{WButtonCircle:G},props:{show:{type:Boolean,default:!1},icon:{type:String,default:""},title:{type:String,default:""},headerColor:{type:String,default:"light-blue darken-3"},headerBtns:{type:Array,default:function(){return[]}},hasSaveBtn:{type:Boolean,default:!0},saveBtnTooltip:{type:String,default:"\u5132\u5B58"},hasCloseBtn:{type:Boolean,default:!0},closeBtnTooltip:{type:String,default:"\u95DC\u9589"},widthMax:{type:Number,default:1e3}},data:function(){return{mdiCheckCircle:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",mdiClose:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",mdiCheckerboard:"M3,3H21V21H3V3M5,5V12H12V19H19V12H12V5H5Z",show_trans:null,fullscreen:!1}},mounted:function(){},watch:{show:function(a){var b=this;!b.show_trans&&a&&setTimeout(function(){b.$refs.scrollZone.scrollTop=0},1)}},computed:{changeParam:function(){var a=this;return a.show_trans=a.show,""}},methods:{changeSize:function(){var a=this;a.fullscreen=!!(a.widthMax>window.innerWidth)},clickBtns:function(a){var b=this;setTimeout(function(){b.$emit("click-btns",a)},1)},clickSave:function(){var a=this;setTimeout(function(){a.$emit("click-save")},1)},clickClose:function(a){var b=this;d(a)&&(b.show_trans=a),setTimeout(function(){b.$emit("update:show",b.show_trans),b.$emit("click-close")},1)}}};var I=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("v-dialog",{directives:[{name:"resize",rawName:"v-resize",value:a.changeSize,expression:"changeSize"}],attrs:{changeParam:a.changeParam,scrollable:"",persistent:a.hasCloseBtn,"max-width":a.widthMax,fullscreen:a.fullscreen},on:{"click:outside":a.clickClose},model:{value:a.show_trans,callback:function(b){a.show_trans=b},expression:"show_trans"}},[c("v-card",[c("v-toolbar",{attrs:{dark:"","max-height":"64",color:a.headerColor}},[c("div",{staticStyle:{"margin-right":"10px"}},[a.icon?c("v-icon",[a._v(a._s(a.icon))]):c("v-icon",[a._v(a._s(a.mdiCheckerboard))])],1),a._v(" "),c("v-toolbar-title",[a._v(a._s(a.title))]),a._v(" "),c("v-spacer"),a._v(" "),a._t("header"),a._v(" "),a._l(a.headerBtns,function(b,d){return[c("WButtonCircle",{key:d,staticStyle:{"margin-left":"5px"},attrs:{icon:b.icon,shadow:!1,iconColor:"white",buttonColor:"white",tooltip:b.tooltip},on:{click:function(){return a.clickBtns(b.evName)}}})]}),a._v(" "),a.hasSaveBtn?[c("WButtonCircle",{staticStyle:{"margin-left":"5px"},attrs:{icon:a.mdiCheckCircle,shadow:!1,iconColor:"white",buttonColor:"white",tooltip:a.saveBtnTooltip},on:{click:function(){return a.clickSave()}}})]:a._e(),a._v(" "),a.hasCloseBtn?[c("WButtonCircle",{staticStyle:{"margin-left":"5px"},attrs:{icon:a.mdiClose,shadow:!1,iconColor:"white",buttonColor:"white",tooltip:a.closeBtnTooltip},on:{click:function(){return a.clickClose(!1)}}})]:a._e()],2),a._v(" "),c("v-card-text",{ref:"scrollZone",staticStyle:{padding:"0px"}},[a._t("content")],2)],1)],1)};I._withStripped=!0;var J=y({render:I,staticRenderFns:[]},function(a){a&&a("data-v-f195b038_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WDialog.vue"},media:void 0})},H,"data-v-f195b038",!1,void 0,B,void 0);return J});
//# sourceMappingURL=w-dialog.umd.js.map