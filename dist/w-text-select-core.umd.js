/*!
 * w-text-select-core v1.3.35
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-text-select-core"]=n()}(this,(function(){"use strict";var e={props:{items:{type:Array,default:function(){return[]}},value:{type:[Object,String,Number],default:null},editable:{type:Boolean,default:!0}},data:function(){return{mdiMenuDown:"M7,10L12,15L17,10H7Z",valueTrans:{}}},mounted:function(){},computed:{changeParam:function(){return this.valueTrans=this.value,""}},methods:{changeContent:function(e){var n=this;setTimeout((function(){n.$emit("input",e)}),1)}}};function n(e,n,t,r,i,o,a,s,u,d){"boolean"!=typeof a&&(u=s,s=a,a=!1);var l,c="function"==typeof t?t.options:t;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),r&&(c._scopeId=r),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=a?function(e){n.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,s(e))}),l)if(c.functional){var p=c.render;c.render=function(e,n){return l.call(n),p(e,n)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,l):[l]}return t}var t,r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function i(e){return function(e,n){return function(e,n){var i=r?n.media||"default":e,a=o[i]||(o[i]={ids:new Set,styles:[]});if(!a.ids.has(e)){a.ids.add(e);var s=n.source;if(n.map&&(s+="\n/*# sourceURL="+n.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",n.media&&a.element.setAttribute("media",n.media),void 0===t&&(t=document.head||document.getElementsByTagName("head")[0]),t.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(s),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{var u=a.ids.size-1,d=document.createTextNode(s),l=a.element.childNodes;l[u]&&a.element.removeChild(l[u]),l.length?a.element.insertBefore(d,l[u]):a.element.appendChild(d)}}}(e,n)}}var o={};const a=e;var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"CSSTextSelectCore",attrs:{changeParam:e.changeParam}},[t("div",{staticStyle:{margin:"-6px -18px -4px -12px"}},[t("v-autocomplete",{staticStyle:{margin:"0px",padding:"0px"},attrs:{"single-line":"","hide-no-data":"","hide-details":"",dense:"",solo:"",flat:"","background-color":"transparent","item-text":"text","item-value":"value","return-object":"","append-icon":e.mdiMenuDown,readonly:!e.editable,items:e.items,value:e.valueTrans},on:{input:e.changeContent,focus:function(n){return e.$emit("update:focused",!0)},blur:function(n){return e.$emit("update:focused",!1)}}})],1)])};s._withStripped=!0;return n({render:s,staticRenderFns:[]},(function(e){e&&e("data-v-a5a89966_0",{source:"\n[data-v-a5a89966] div {\r\n    cursor: pointer;\n}\n[data-v-a5a89966] input {\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    color: inherit;\r\n    line-height: inherit;\r\n    max-height: inherit; /* for ie11 */\n}\n[data-v-a5a89966] .v-text-field input {\r\n    line-height: inherit;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WTextSelectCore.vue"],names:[],mappings:";AAmGA;IACA,eAAA;AACA;AACA;IACA,eAAA;IACA,eAAA;IACA,cAAA;IACA,oBAAA;IACA,mBAAA,EAAA,aAAA;AACA;AACA;IACA,oBAAA;AACA",file:"WTextSelectCore.vue",sourcesContent:['<template>\r\n    <div class="CSSTextSelectCore" :changeParam="changeParam">\r\n\r\n        <div style="margin:-6px -18px -4px -12px;">\r\n\r\n            <v-autocomplete\r\n                style="margin:0px; padding:0px;"\r\n                single-line\r\n                hide-no-data\r\n                hide-details\r\n                dense\r\n                solo\r\n                flat\r\n                background-color="transparent"\r\n                item-text="text"\r\n                item-value="value"\r\n                return-object\r\n                :append-icon="mdiMenuDown"\r\n                :readonly="!editable"\r\n                :items="items"\r\n                :value="valueTrans"\r\n                @input="changeContent"\r\n                @focus="$emit(\'update:focused\', true)"\r\n                @blur="$emit(\'update:focused\', false)"\r\n            ></v-autocomplete>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport { mdiMenuDown } from \'@mdi/js\'\r\n\r\n\r\n/**\r\n * @vue-prop {Array} [items=[]] 輸入可選項目陣列，預設[]\r\n * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n */\r\nexport default {\r\n    props: {\r\n        items: {\r\n            type: Array,\r\n            default: () => [],\r\n        },\r\n        value: {\r\n            type: [Object, String, Number],\r\n            default: null,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            mdiMenuDown,\r\n            valueTrans: {},\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log(\'computed changeParam\')\r\n\r\n            let vo = this\r\n\r\n            //valueTrans\r\n            vo.valueTrans = vo.value\r\n\r\n            return \'\'\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        changeContent: function (value) {\r\n            //console.log(\'methods changeContent\', value)\r\n\r\n            let vo = this\r\n\r\n            //setTimeout\r\n            setTimeout(() => {\r\n\r\n                //emit\r\n                vo.$emit(\'input\', value)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n::v-deep div {\r\n    cursor: pointer;\r\n}\r\n::v-deep input {\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    color: inherit;\r\n    line-height: inherit;\r\n    max-height: inherit; /* for ie11 */\r\n}\r\n::v-deep .v-text-field input {\r\n    line-height: inherit;\r\n}\r\n</style>\r\n']},media:void 0})}),a,"data-v-a5a89966",!1,void 0,!1,i,void 0,void 0)}));
//# sourceMappingURL=w-text-select-core.umd.js.map
