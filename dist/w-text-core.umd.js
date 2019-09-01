/*!
 * w-text-core v1.1.11
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-text-core"]=b())})(this,function(){'use strict';function a(a){var b=Object.prototype.toString.call(a);return"[object String]"===b}function c(b){return!!(a(b)&&""!==b)}function d(a){var b=Object.prototype.toString.call(a);return"[object Number]"===b}function e(a){var e=!1;return c(a)?e=!isNaN(+a):d(a)&&(e=!0),e}function f(a){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f(a)}function g(a){var b=f(a);return null!=a&&("object"==b||"function"==b)}function h(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":P&&P in Object(a)?L(a):O(a)}function i(a){return null!=a&&"object"==f(a)}function j(a){return"symbol"==f(a)||R(a)&&Q(a)=="[object Symbol]"}function k(a){if(!e(a))return 0;var b=_(a);return b}function l(a){if(!e(a))return!1;var b=0<=k(a);return b}function m(a){if(!e(a))return!1;var b=0>=k(a);return b}function n(a){return!!e(a)&&(a=k(a),ba(a))}function o(a){if("string"==typeof a)return a;if(ea(a))return ca(a,o)+"";if(S(a))return ha?ha.call(a):"";var b=a+"";return"0"==b&&1/a==-fa?"-0":b}function p(a){if(!e(a))return 0;a=k(a);var b=ma(a);return"0"===b+""?0:b}function q(a){if(!n(a))return!1;var b=0<p(a);return b}function s(a){if(!n(a))return!1;var b=0<=p(a);return b}function t(a){if(!n(a))return!1;var b=0>p(a);return b}function u(a){if(!n(a))return!1;var b=0>=p(a);return b}function v(a){var b=Object.prototype.toString.call(a);return"[object Function]"===b||"[object AsyncFunction]"===b}function w(b,c){var d=!1,f="";if("isstr"===c)a(b)||(d=!0,f="\u9700\u8981\u70BA\u5B57\u4E32",b="");else if("isnum"===c)e(b)||(d=!0,f="\u9700\u8981\u70BA\u6578\u5B57",b=0);else if("isp0num"===c)l(b)||(d=!0,f="\u9700\u8981\u70BA\u542B0\u7684\u6B63\u6D6E\u9EDE\u6578",b=0);else if("isn0num"===c)m(b)||(d=!0,f="\u9700\u8981\u70BA\u542B0\u7684\u8CA0\u6D6E\u9EDE\u6578",b=0);else if("isint"===c)n(b)||(d=!0,f="\u9700\u8981\u70BA\u6574\u6578",b=0);else if("ispint"===c)q(b)||(d=!0,f="\u9700\u8981\u70BA\u4E0D\u542B0\u6B63\u6574\u6578",b=0);else if("isp0int"===c)s(b)||(d=!0,f="\u9700\u8981\u70BA\u542B0\u6B63\u6574\u6578",b=0);else if("isnint"===c)t(b)||(d=!0,f="\u9700\u8981\u70BA\u4E0D\u542B0\u8CA0\u6574\u6578",b=0);else if("isn0int"===c)u(b)||(d=!0,f="\u9700\u8981\u70BA\u542B0\u8CA0\u6574\u6578",b=0);else if(v(c)){b=c(b)}else"any"===c?e(b)||a(b)||(d=!0,f="\u9700\u8981\u70BA\u5B57\u4E32\u6216\u6578\u5B57",b=""):(d=!0,f="\u9700\u8981\u6307\u5B9A\u9A57\u8B49\u985E\u578B",b=null);var g={value:b,err:d,errmsg:f};return g}function x(a,b){var c=oa?b.media||"default":a,d=pa[c]||(pa[c]={ids:new Set,styles:[]});if(!d.ids.has(a)){d.ids.add(a);var e=b.source;if(b.map&&(e+="\n/*# sourceURL="+b.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",b.media&&d.element.setAttribute("media",b.media),void 0===y&&(y=document.head||document.getElementsByTagName("head")[0]),y.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(e),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{var f=d.ids.size-1,g=document.createTextNode(e),h=d.element.childNodes;h[f]&&d.element.removeChild(h[f]),h.length?d.element.insertBefore(g,h[f]):d.element.appendChild(g)}}}var y,z=g,A="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,B="object"==f(A)&&A&&A.Object===Object&&A,C="object"==("undefined"==typeof self?"undefined":f(self))&&self&&self.Object===Object&&self,D=B||C||Function("return this")(),E=D,F=E.Symbol,G=F,H=Object.prototype,I=H.hasOwnProperty,J=H.toString,K=G?G.toStringTag:void 0,L=function(a){var b=I.call(a,K),c=a[K];try{a[K]=void 0;var d=!0}catch(a){}var e=J.call(a);return d&&(b?a[K]=c:delete a[K]),e},M=Object.prototype,N=M.toString,O=function(a){return N.call(a)},P=G?G.toStringTag:void 0,Q=h,R=i,S=j,T=0/0,U=/^\s+|\s+$/g,V=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,X=/^0o[0-7]+$/i,Y=parseInt,Z=function(a){if("number"==typeof a)return a;if(S(a))return T;if(z(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=z(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(U,"");var c=W.test(a);return c||X.test(a)?Y(a.slice(2),c?2:8):V.test(a)?T:+a},$=1/0,_=function(a){if(!a)return 0===a?a:0;if(a=Z(a),a===$||a===-$){var b=0>a?-1:1;return 1.7976931348623157e+308*b}return a===a?a:0},aa=function(a){var b=_(a),c=b%1;return b===b?c?b-c:b:0},ba=function(a){return"number"==typeof a&&a==aa(a)},ca=function(a,b){for(var c=-1,d=null==a?0:a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e},da=Array.isArray,ea=da,fa=1/0,ga=G?G.prototype:void 0,ha=ga?ga.toString:void 0,ia=function(a){return null==a?"":o(a)},ja=E.isFinite,ka=Math.min,la=function(a){var b=Math[a];return function(a,c){if(a=Z(a),c=null==c?0:ka(aa(c),292),c&&ja(a)){var d=(ia(a)+"e").split("e"),e=b(d[0]+"e"+(+d[1]+c));return d=(ia(e)+"e").split("e"),+(d[0]+"e"+(+d[1]-c))}return b(a)}}("round"),ma=la,na={props:{type:{type:String,default:"any"},value:{type:[String,Number]},textAlign:{type:String,default:"left"},placeholder:{type:String,default:""},editable:{type:Boolean,default:!0}},data:function(){return{focused:!1,value_trans:""}},mounted:function(){},computed:{ch_param:function(){var a=this;return a.value_trans=a.value,""}},methods:{ch_content:function(a){var b=this,c=w(b.value_trans,b.type),d=c.value,e=c.errmsg;setTimeout(function(){b.value_trans=d,b.$emit("input",d,e),b.$emit(a,d,e),b.focused=!1},1)},setValueTrans:function(a){var b=this;b.value_trans=a}}},oa="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),pa={};var qa=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{attrs:{ch_param:a.ch_param}},[c("input",{directives:[{name:"model",rawName:"v-model",value:a.value_trans,expression:"value_trans"}],ref:"inp",staticClass:"basic",style:[{width:"100%"},{height:"28px"},{"text-align":a.textAlign},{opacity:a.value_trans||a.focused?1:.6}],attrs:{type:"text",readonly:!a.editable,placeholder:a.placeholder},domProps:{value:a.value_trans},on:{focus:function(){a.focused=!0},blur:function(){return a.ch_content("blur")},keyup:function(b){return!b.type.indexOf("key")&&a._k(b.keyCode,"enter",13,b.key,"Enter")?null:a.ch_content("enter")},input:function(b){b.target.composing||(a.value_trans=b.target.value)}}})])};qa._withStripped=!0;var ra=function(a,b,c,d,e,f,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);var k="function"==typeof c?c.options:c;a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(){b.call(this,j(this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c}({render:qa,staticRenderFns:[]},function(a){a&&a("data-v-3f07bbb5_0",{source:"\n.basic[data-v-3f07bbb5] {\r\n    transition: all 0.7s;\r\n    outline: none;\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WTextCore.vue"],names:[],mappings:";AAwHA;IACA,oBAAA;IACA,aAAA;AACA",file:"WTextCore.vue",sourcesContent:["<template>\r\n    <div :ch_param=\"ch_param\">\r\n\r\n        <input\r\n            ref=\"inp\"\r\n            class=\"basic\"\r\n            type=\"text\"\r\n            :style=\"[{'width':'100%'},{'height':'28px'},{'text-align':textAlign},{'opacity':(!value_trans && !focused)?0.6:1}]\"\r\n            :readonly=\"!editable\"\r\n            :placeholder=\"placeholder\"\r\n            v-model=\"value_trans\"\r\n            @focus=\"focused=true\"\r\n            @blur=\"ch_content('blur')\"\r\n            @keyup.enter=\"ch_content('enter')\"\r\n        >\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport verifyValue from 'wsemi/src/verifyValue.mjs'\r\n\r\n/**\r\n * @vue-prop {String} [type='any'] \u8F38\u5165\u6587\u5B57\u6846\u985E\u578B\u5B57\u4E32\uFF0C\u9810\u8A2D'any'\r\n * @vue-prop {String|Number} value \u8F38\u5165\u6587\u5B57\u6846\u503C\r\n * @vue-prop {String} [textAlign='left'] \u8F38\u5165\u6587\u5B57\u5DE6\u53F3\u5C0D\u9F4A\u5B57\u4E32\uFF0C\u9810\u8A2D'left'\r\n * @vue-prop {String} [placeholder=''] \u8F38\u5165\u7121\u6587\u5B57\u6642\u7684\u66FF\u4EE3\u5B57\u7B26\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {Boolean} [editable=true] \u8F38\u5165\u662F\u5426\u70BA\u7DE8\u8F2F\u6A21\u5F0F\uFF0C\u9810\u8A2Dtrue\r\n */\r\nexport default {\r\n    props: {\r\n        type: {\r\n            type: String,\r\n            default: 'any',\r\n        },\r\n        value: {\r\n            type: [String, Number],\r\n        },\r\n        textAlign: {\r\n            type: String,\r\n            default: 'left',\r\n        },\r\n        placeholder: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focused: false,\r\n            value_trans: '',\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        ch_param: function () {\r\n            //console.log('computed ch_param')\r\n\r\n            let vo = this\r\n\r\n            //value_trans\r\n            vo.value_trans = vo.value\r\n\r\n            return ''\r\n        },\r\n    },\r\n    methods: {\r\n\r\n        ch_content: function (evname) {\r\n            //console.log('methods ch_content', evname)\r\n\r\n            let vo = this\r\n\r\n            //verifyValue\r\n            let r = verifyValue(vo.value_trans, vo.type)\r\n\r\n            //value, errmsg\r\n            let value = r.value\r\n            let errmsg = r.errmsg\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //reset for error condition\r\n                vo.value_trans = value\r\n\r\n                //emit\r\n                vo.$emit('input', value, errmsg)\r\n\r\n                //emit\r\n                vo.$emit(evname, value, errmsg)\r\n\r\n                //focused\r\n                vo.focused = false\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n        setValueTrans: function(value) {\r\n            //console.log('methods setValueTrans', value)\r\n\r\n            let vo = this\r\n\r\n            //set value_trans\r\n            vo.value_trans = value\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.basic {\r\n    transition: all 0.7s;\r\n    outline: none;\r\n}\r\n</style>\r\n"]},media:void 0})},na,"data-v-3f07bbb5",!1,void 0,function(){return function(a,b){return x(a,b)}},void 0);return ra});
//# sourceMappingURL=w-text-core.umd.js.map
