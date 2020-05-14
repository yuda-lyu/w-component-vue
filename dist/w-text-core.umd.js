/*!
 * w-text-core v1.3.20
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-text-core"]=n()}(this,(function(){"use strict";function e(e){return"[object String]"===Object.prototype.toString.call(e)}function n(n){var t=!1;return!function(n){return!(!e(n)||""===n)}(n)?function(e){return"[object Number]"===Object.prototype.toString.call(e)}(n)&&(t=!0):t=!isNaN(Number(n)),t}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n}));var o=function(e){var n=r(e);return null!=e&&("object"==n||"function"==n)},i="object"==r(t)&&t&&t.Object===Object&&t,u="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=i||u||Function("return this")(),l=a.Symbol,s=Object.prototype,c=s.hasOwnProperty,f=s.toString,d=l?l.toStringTag:void 0;var p=function(e){var n=c.call(e,d),t=e[d];try{e[d]=void 0;var r=!0}catch(e){}var o=f.call(e);return r&&(n?e[d]=t:delete e[d]),o},v=Object.prototype.toString;var m=function(e){return v.call(e)},y=l?l.toStringTag:void 0;var g=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":y&&y in Object(e)?p(e):m(e)};var h=function(e){return null!=e&&"object"==r(e)};var b=function(e){return"symbol"==r(e)||h(e)&&"[object Symbol]"==g(e)},S=/^\s+|\s+$/g,T=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,C=/^0o[0-7]+$/i,A=parseInt;var j=function(e){if("number"==typeof e)return e;if(b(e))return NaN;if(o(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(S,"");var t=x.test(e);return t||C.test(e)?A(e.slice(2),t?2:8):T.test(e)?NaN:+e};var _=function(e){return e?(e=j(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};function N(e){return n(e)?_(e):0}var O=function(e){var n=_(e),t=n%1;return n==n?t?n-t:n:0};var $=function(e){return"number"==typeof e&&e==O(e)};function w(e){return!!n(e)&&(e=N(e),$(e))}var F=function(e,n){for(var t=-1,r=null==e?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o},V=Array.isArray,B=l?l.prototype:void 0,R=B?B.toString:void 0;var E=function e(n){if("string"==typeof n)return n;if(V(n))return F(n,e)+"";if(b(n))return R?R.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t};var k=function(e){return null==e?"":E(e)},I=a.isFinite,U=Math.min;var L=function(e){var n=Math[e];return function(e,t){if(e=j(e),(t=null==t?0:U(O(t),292))&&I(e)){var r=(k(e)+"e").split("e"),o=n(r[0]+"e"+(+r[1]+t));return+((r=(k(o)+"e").split("e"))[0]+"e"+(+r[1]-t))}return n(e)}}("round");function M(e){if(!n(e))return 0;e=N(e);var t=L(e);return"0"===String(t)?0:t}function J(t,r){var o,i=!1,u="";if("isstr"===r)e(t)||(i=!0,u="需要為字串",t="");else if("isnum"===r)n(t)||(i=!0,u="需要為數字",t=0);else if("isp0num"===r)n(o=t)&&N(o)>=0||(i=!0,u="需要為含0的正浮點數",t=0);else if("isn0num"===r)(function(e){return!!n(e)&&N(e)<=0})(t)||(i=!0,u="需要為含0的負浮點數",t=0);else if("isint"===r)w(t)||(i=!0,u="需要為整數",t=0);else if("ispint"===r)(function(e){return!!w(e)&&M(e)>0})(t)||(i=!0,u="需要為不含0正整數",t=0);else if("isp0int"===r)(function(e){return!!w(e)&&M(e)>=0})(t)||(i=!0,u="需要為含0正整數",t=0);else if("isnint"===r)(function(e){return!!w(e)&&M(e)<0})(t)||(i=!0,u="需要為不含0負整數",t=0);else if("isn0int"===r)(function(e){return!!w(e)&&M(e)<=0})(t)||(i=!0,u="需要為含0負整數",t=0);else if(function(e){var n=Object.prototype.toString.call(e);return"[object Function]"===n||"[object AsyncFunction]"===n}(r)){t=r(t)}else"any"===r?n(t)||e(t)||(i=!0,u="需要為字串或數字",t=""):(i=!0,u="需要指定驗證類型",t=null);return{value:t,err:i,errmsg:u}}var P={props:{type:{type:String,default:"any"},value:{type:[String,Number]},textAlign:{type:String,default:"left"},placeholder:{type:String,default:""},editable:{type:Boolean,default:!0},focused:{type:Boolean,default:!1}},data:function(){return{valueTrans:""}},mounted:function(){},computed:{changeValue:function(){return this.valueTrans=this.value,""}},methods:{changeFocused:function(e){var n=this;setTimeout((function(){n.$emit("update:focused",e)}),1)},changeContent:function(e){var n=this,t=J(n.valueTrans,n.type),r=t.value,o=t.errmsg;setTimeout((function(){n.valueTrans=r,n.$emit("input",r,o),n.$emit(e,r,o)}),1)}}};function W(e,n,t,r,o,i,u,a,l,s){"boolean"!=typeof u&&(l=a,a=u,u=!1);var c,f="function"==typeof t?t.options:t;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=c):n&&(c=u?function(e){n.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,a(e))}),c)if(f.functional){var d=f.render;f.render=function(e,n){return c.call(n),d(e,n)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,c):[c]}return t}var X,z="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function D(e){return function(e,n){return function(e,n){var t=z?n.media||"default":e,r=q[t]||(q[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var o=n.source;if(n.map&&(o+="\n/*# sourceURL="+n.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===X&&(X=document.head||document.getElementsByTagName("head")[0]),X.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,u=document.createTextNode(o),a=r.element.childNodes;a[i]&&r.element.removeChild(a[i]),a.length?r.element.insertBefore(u,a[i]):r.element.appendChild(u)}}}(e,n)}}var q={};const G=P;var H=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{changeValue:e.changeValue}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.valueTrans,expression:"valueTrans"}],ref:"inp",staticClass:"basic",style:[{width:"100%"},{height:"28px"},{"text-align":e.textAlign},{opacity:e.valueTrans||e.focused?1:.6}],attrs:{type:"text",readonly:!e.editable,placeholder:e.placeholder},domProps:{value:e.valueTrans},on:{input:[function(n){n.target.composing||(e.valueTrans=n.target.value)},function(n){e.changeFocused(!0),e.changeContent("input")}],focus:function(n){return e.changeFocused(!0)},blur:function(n){e.changeFocused(!1),e.changeContent("blur")},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.changeContent("enter")}}})])};H._withStripped=!0;return W({render:H,staticRenderFns:[]},(function(e){e&&e("data-v-40663c27_0",{source:"\n.basic[data-v-40663c27] {\r\n    transition: all 0.7s;\r\n    outline: none;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WTextCore.vue"],names:[],mappings:";AAgIA;IACA,oBAAA;IACA,aAAA;AACA",file:"WTextCore.vue",sourcesContent:["<template>\r\n    <div :changeValue=\"changeValue\">\r\n\r\n        <input\r\n            ref=\"inp\"\r\n            class=\"basic\"\r\n            type=\"text\"\r\n            :style=\"[{'width':'100%'},{'height':'28px'},{'text-align':textAlign},{'opacity':(!valueTrans && !focused)?0.6:1}]\"\r\n            :readonly=\"!editable\"\r\n            :placeholder=\"placeholder\"\r\n            v-model=\"valueTrans\"\r\n            @input=\"changeFocused(true);changeContent('input')\"\r\n            @focus=\"changeFocused(true)\"\r\n            @blur=\"changeFocused(false);changeContent('blur');\"\r\n            @keyup.enter=\"changeContent('enter')\"\r\n        >\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport verifyValue from 'wsemi/src/verifyValue.mjs'\r\n\r\n/**\r\n * @vue-prop {String} [type='any'] 輸入文字框類型字串，預設'any'\r\n * @vue-prop {String|Number} value 輸入文字框值\r\n * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'\r\n * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false\r\n */\r\nexport default {\r\n    props: {\r\n        type: {\r\n            type: String,\r\n            default: 'any',\r\n        },\r\n        value: {\r\n            type: [String, Number],\r\n        },\r\n        textAlign: {\r\n            type: String,\r\n            default: 'left',\r\n        },\r\n        placeholder: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        focused: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            valueTrans: '',\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeValue: function () {\r\n            //console.log('computed changeValue')\r\n\r\n            let vo = this\r\n\r\n            //valueTrans\r\n            vo.valueTrans = vo.value\r\n\r\n            return ''\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        changeFocused: function(focused) {\r\n            //console.log('methods changeFocused', focused)\r\n\r\n            let vo = this\r\n\r\n            //setTimeout\r\n            setTimeout(() => {\r\n\r\n                //emit\r\n                vo.$emit('update:focused', focused)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n        changeContent: function (evname) {\r\n            //console.log('methods changeContent', evname)\r\n\r\n            let vo = this\r\n\r\n            //verifyValue\r\n            let r = verifyValue(vo.valueTrans, vo.type)\r\n\r\n            //value, errmsg\r\n            let value = r.value\r\n            let errmsg = r.errmsg\r\n\r\n            //setTimeout\r\n            setTimeout(() => {\r\n\r\n                //save\r\n                vo.valueTrans = value\r\n\r\n                //emit\r\n                vo.$emit('input', value, errmsg)\r\n\r\n                //emit\r\n                vo.$emit(evname, value, errmsg)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.basic {\r\n    transition: all 0.7s;\r\n    outline: none;\r\n}\r\n</style>\r\n"]},media:void 0})}),G,"data-v-40663c27",!1,void 0,!1,D,void 0,void 0)}));
//# sourceMappingURL=w-text-core.umd.js.map
