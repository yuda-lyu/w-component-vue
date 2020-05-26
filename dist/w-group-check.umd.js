/*!
 * w-group-check v1.3.31
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-group-check"]=n()}(this,(function(){"use strict";var e={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var e=this.size;return this.icon.indexOf("fa-")>=0?e-4:e},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};function n(e,n,r,t,i,o,l,c,s,a){"boolean"!=typeof l&&(s=c,c=l,l=!1);var u,d="function"==typeof r?r.options:r;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),t&&(d._scopeId=t),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,s(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=u):n&&(u=l?function(e){n.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),u)if(d.functional){var p=d.render;d.render=function(e,n){return u.call(n),p(e,n)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,u):[u]}return r}var r,t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function i(e){return function(e,n){return function(e,n){var i=t?n.media||"default":e,l=o[i]||(o[i]={ids:new Set,styles:[]});if(!l.ids.has(e)){l.ids.add(e);var c=n.source;if(n.map&&(c+="\n/*# sourceURL="+n.map.sources[0]+" */",c+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),l.element||(l.element=document.createElement("style"),l.element.type="text/css",n.media&&l.element.setAttribute("media",n.media),void 0===r&&(r=document.head||document.getElementsByTagName("head")[0]),r.appendChild(l.element)),"styleSheet"in l.element)l.styles.push(c),l.element.styleSheet.cssText=l.styles.filter(Boolean).join("\n");else{var s=l.ids.size-1,a=document.createTextNode(c),u=l.element.childNodes;u[s]&&l.element.removeChild(u[s]),u.length?l.element.insertBefore(a,u[s]):l.element.appendChild(a)}}}(e,n)}}var o={};const l=e;var c=function(){var e=this,n=e.$createElement,r=e._self._c||n;return""!==e.icon?r("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[r("v-icon",{style:e.useStyle,attrs:{color:e.color,size:e.useSize}},[e._v("\n        "+e._s(e.useIcon)+"\n    ")])],1):e._e()};c._withStripped=!0;const s={components:{WIcon:n({render:c,staticRenderFns:[]},(function(e){e&&e("data-v-5ea7e17f_0",{source:"\n.v-icon[data-v-5ea7e17f] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})}),l,"data-v-5ea7e17f",!1,void 0,!1,i,void 0,void 0)},props:{items:{type:Array},value:{type:Array},textColor:{type:String,default:"white"},backgroundColor:{type:String,default:"purple lighten-1"},iconColor:{type:String,default:"white"},textcolorInactive:{type:String,default:"grey darken-2"},bgcolorInactive:{type:String,default:"grey lighten-5"},editable:{type:Boolean,default:!0}},data:function(){return{mdiCheckCircle:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"}},mounted:function(){},computed:{},methods:{getSelected:function(e){return this.value.indexOf(e)>=0},getBgColor:function(e){return this.getSelected(e)?this.backgroundColor:this.bgcolorInactive},getTextColor:function(e){return this.getSelected(e)?this.textColor:this.textcolorInactive},pull:function(e,n){var r=e.indexOf(n);return e.splice(r,1),e},toggleState:function(e){var n=this;!1!==n.editable&&(n.getSelected(e)?n.value=n.pull(n.value,e):n.value.push(e),setTimeout((function(){n.$emit("input",n.value)}),1))}}};var a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{style:{opacity:e.editable?1:.65}},[e._l(e.items,(function(n,t){return[r("v-chip",{key:t,staticClass:"v-chpi-modify",attrs:{small:"","text-color":e.getTextColor(n),color:e.getBgColor(n)},on:{click:function(r){return e.toggleState(n)}}},[e.getSelected(n)?r("div",{staticStyle:{"margin-left":"-9px","margin-right":"9px"}},[r("w-icon",{attrs:{icon:e.mdiCheckCircle,color:e.iconColor,size:20}})],1):e._e(),e._v(" "),r("div",{staticStyle:{height:"24px","line-height":"24px","font-size":"0.875rem"}},[e._v(e._s(n))])])]}))],2)};a._withStripped=!0;return n({render:a,staticRenderFns:[]},(function(e){e&&e("data-v-c00ddd0c_0",{source:"\n.v-chpi-modify[data-v-c00ddd0c] {\r\n    vertical-align: middle;\r\n    margin:10px 10px 10px 0px;\r\n    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WGroupCheck.vue"],names:[],mappings:";AAsJA;IACA,sBAAA;IACA,yBAAA;IACA,kGAAA;AACA",file:"WGroupCheck.vue",sourcesContent:["<template>\r\n    <div :style=\"{'opacity':editable?1:0.65}\">\r\n\r\n        <template v-for=\"(item,kitem) in items\">\r\n\r\n            <v-chip\r\n                class=\"v-chpi-modify\"\r\n                small\r\n                :text-color=\"getTextColor(item)\"\r\n                :color=\"getBgColor(item)\"\r\n                @click=\"toggleState(item)\"\r\n                :key=\"kitem\"\r\n            >\r\n\r\n                <div style=\"margin-left:-9px; margin-right:9px;\" v-if=\"getSelected(item)\">\r\n                    <w-icon\r\n                        :icon=\"mdiCheckCircle\"\r\n                        :color=\"iconColor\"\r\n                        :size=\"20\"\r\n                    ></w-icon>\r\n                </div>\r\n\r\n                <div style=\"height:24px; line-height:24px; font-size:0.875rem;\">{{item}}</div>\r\n\r\n            </v-chip>\r\n\r\n        </template>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport { mdiCheckCircle } from '@mdi/js'\r\nimport WIcon from './WIcon.vue'\r\n\r\n\r\n/**\r\n * @vue-prop {Array} items 輸入全部可選字串陣列\r\n * @vue-prop {Array} value 輸入已複選字串陣列\r\n * @vue-prop {String} [textColor='white'] 輸入已選項目之文字顏色字串，預設'white'\r\n * @vue-prop {String} [backgroundColor='purple lighten-1'] 輸入已選項目之文字背景顏色字串，預設'purple lighten-1'\r\n * @vue-prop {String} [iconColor='white'] 輸入已選項目之文字背景顏色字串，預設'white'\r\n * @vue-prop {String} [textcolorInactive='grey darken-2'] 輸入未選項目之文字顏色字串，預設'grey darken-2'\r\n * @vue-prop {String} [bgcolorInactive='grey lighten-5'] 輸入未選項目之文字背景顏色字串，預設'grey lighten-5'\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon,\r\n    },\r\n    props: {\r\n        items: {\r\n            type: Array,\r\n        },\r\n        value: {\r\n            type: Array,\r\n        },\r\n        textColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        backgroundColor: {\r\n            type: String,\r\n            default: 'purple lighten-1',\r\n        },\r\n        iconColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        textcolorInactive: {\r\n            type: String,\r\n            default: 'grey darken-2',\r\n        },\r\n        bgcolorInactive: {\r\n            type: String,\r\n            default: 'grey lighten-5',\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            mdiCheckCircle,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n    },\r\n    methods: {\r\n\r\n        getSelected: function(item) {\r\n            return this.value.indexOf(item) >= 0\r\n        },\r\n\r\n        getBgColor: function(item) {\r\n            if (this.getSelected(item)) {\r\n                return this.backgroundColor\r\n            }\r\n            return this.bgcolorInactive\r\n        },\r\n\r\n        getTextColor: function(item) {\r\n            if (this.getSelected(item)) {\r\n                return this.textColor\r\n            }\r\n            return this.textcolorInactive\r\n        },\r\n\r\n        pull: function(ar, item) {\r\n            let i = ar.indexOf(item)\r\n            ar.splice(i, 1)\r\n            return ar\r\n        },\r\n\r\n        toggleState: function(item) {\r\n            //console.log('methods toggleState', item)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            if (vo.getSelected(item)) {\r\n                //pull\r\n                vo.value = vo.pull(vo.value, item)\r\n            }\r\n            else {\r\n                //push\r\n                vo.value.push(item)\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(() => {\r\n\r\n                //emit\r\n                vo.$emit('input', vo.value)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-chpi-modify {\r\n    vertical-align: middle;\r\n    margin:10px 10px 10px 0px;\r\n    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]},media:void 0})}),s,"data-v-c00ddd0c",!1,void 0,!1,i,void 0,void 0)}));
//# sourceMappingURL=w-group-check.umd.js.map
