/*!
 * w-check-chips v1.1.27
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-check-chips"]=b())})(this,function(){'use strict';function a(a,c){var d=e?c.media||"default":a,g=f[d]||(f[d]={ids:new Set,styles:[]});if(!g.ids.has(a)){g.ids.add(a);var h=c.source;if(c.map&&(h+="\n/*# sourceURL="+c.map.sources[0]+" */",h+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c.map))))+" */"),g.element||(g.element=document.createElement("style"),g.element.type="text/css",c.media&&g.element.setAttribute("media",c.media),void 0===b&&(b=document.head||document.getElementsByTagName("head")[0]),b.appendChild(g.element)),"styleSheet"in g.element)g.styles.push(h),g.element.styleSheet.cssText=g.styles.filter(Boolean).join("\n");else{var i=g.ids.size-1,j=document.createTextNode(h),k=g.element.childNodes;k[i]&&g.element.removeChild(k[i]),k.length?g.element.insertBefore(j,k[i]):g.element.appendChild(j)}}}var b,c={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){var a=this;return 0<=a.icon.indexOf("fa-")?a.icon+" fa-fw":a.icon},useSize:function(){var a=this,b=a.size;return 0<=a.icon.indexOf("fa-")?b-4:b},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}},d=function(a,b,c,d,e,f,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);var k="function"==typeof c?c.options:c;a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(){b.call(this,j(this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c},e="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),f={},g=function(){return function(b,c){return a(b,c)}};var h=function(){var a=this,b=a.$createElement,c=a._self._c||b;return""===a.icon?a._e():c("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[c("v-icon",{style:a.useStyle,attrs:{color:a.color,size:a.useSize}},[a._v("\n        "+a._s(a.useIcon)+"\n    ")])],1)};h._withStripped=!0;var i=d({render:h,staticRenderFns:[]},function(a){a&&a("data-v-c4e40804_0",{source:"\n.v-icon[data-v-c4e40804] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] \u8F38\u5165\u5716\u6A19\u5B57\u4E32\uFF0C\u53EF\u70BAmdi,md,fa\u4EE3\u865F\u6216mdi/js\u8DEF\u5F91\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [color=''] \u8F38\u5165\u5716\u6A19\u80CC\u666F\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {Number} [size=24] \u8F38\u5165\u5716\u6A19\u5927\u5C0F\uFF0C\u55AE\u4F4D\u70BApx\uFF0C\u9810\u8A2D24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})},c,"data-v-c4e40804",!1,void 0,g,void 0),j={components:{WIcon:i},props:{items:{type:Array},value:{type:Array},textColor:{type:String,default:"white"},backgroundColor:{type:String,default:"purple lighten-1"},iconColor:{type:String,default:"white"},textcolorInactive:{type:String,default:"grey darken-2"},bgcolorInactive:{type:String,default:"grey lighten-5"},editable:{type:Boolean,default:!0}},data:function(){return{mdiCheckCircle:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"}},mounted:function(){},computed:{},methods:{getSelected:function(a){return 0<=this.value.indexOf(a)},getBgColor:function(a){return this.getSelected(a)?this.backgroundColor:this.bgcolorInactive},getTextColor:function(a){return this.getSelected(a)?this.textColor:this.textcolorInactive},pull:function(a,b){var c=a.indexOf(b);return a.splice(c,1),a},toggleState:function(a){var b=this;!1===b.editable||(b.getSelected(a)?b.value=b.pull(b.value,a):b.value.push(a),setTimeout(function(){b.$emit("input",b.value)},1))}}};var k=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{style:{opacity:a.editable?1:.65}},[a._l(a.items,function(b,d){return[c("v-chip",{key:d,staticClass:"v-chpi-modify",attrs:{small:"","text-color":a.getTextColor(b),color:a.getBgColor(b)},on:{click:function(){return a.toggleState(b)}}},[a.getSelected(b)?c("div",{staticStyle:{"margin-left":"-9px","margin-right":"9px"}},[c("w-icon",{attrs:{icon:a.mdiCheckCircle,color:a.iconColor,size:20}})],1):a._e(),a._v(" "),c("div",{staticStyle:{height:"24px","line-height":"24px","font-size":"0.875rem"}},[a._v(a._s(b))])])]})],2)};k._withStripped=!0;var l=d({render:k,staticRenderFns:[]},function(a){a&&a("data-v-5e9f611a_0",{source:"\n.v-chpi-modify[data-v-5e9f611a] {\r\n    vertical-align: middle;\r\n    margin:10px 10px 10px 0px;\r\n    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WCheckChips.vue"],names:[],mappings:";AAqJA;IACA,sBAAA;IACA,yBAAA;IACA,kGAAA;AACA",file:"WCheckChips.vue",sourcesContent:["<template>\r\n    <div :style=\"{'opacity':editable?1:0.65}\">\r\n\r\n        <template v-for=\"(item,kitem) in items\">\r\n\r\n            <v-chip\r\n                class=\"v-chpi-modify\"\r\n                small\r\n                :text-color=\"getTextColor(item)\"\r\n                :color=\"getBgColor(item)\"\r\n                @click=\"toggleState(item)\"\r\n                :key=\"kitem\"\r\n            >\r\n\r\n                <div style=\"margin-left:-9px; margin-right:9px;\" v-if=\"getSelected(item)\">\r\n                    <w-icon\r\n                        :icon=\"mdiCheckCircle\"\r\n                        :color=\"iconColor\"\r\n                        :size=\"20\"\r\n                    ></w-icon>\r\n                </div>\r\n\r\n                <div style=\"height:24px; line-height:24px; font-size:0.875rem;\">{{item}}</div>\r\n\r\n            </v-chip>\r\n\r\n        </template>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport { mdiCheckCircle } from '@mdi/js'\r\nimport WIcon from './WIcon.vue'\r\n\r\n/**\r\n * @vue-prop {Array} items \u8F38\u5165\u5168\u90E8\u53EF\u9078\u5B57\u4E32\u9663\u5217\r\n * @vue-prop {Array} value \u8F38\u5165\u5DF2\u8907\u9078\u5B57\u4E32\u9663\u5217\r\n * @vue-prop {String} [textColor='white'] \u8F38\u5165\u5DF2\u9078\u9805\u76EE\u4E4B\u6587\u5B57\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'white'\r\n * @vue-prop {String} [backgroundColor='purple lighten-1'] \u8F38\u5165\u5DF2\u9078\u9805\u76EE\u4E4B\u6587\u5B57\u80CC\u666F\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'purple lighten-1'\r\n * @vue-prop {String} [iconColor='white'] \u8F38\u5165\u5DF2\u9078\u9805\u76EE\u4E4B\u6587\u5B57\u80CC\u666F\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'white'\r\n * @vue-prop {String} [textcolorInactive='grey darken-2'] \u8F38\u5165\u672A\u9078\u9805\u76EE\u4E4B\u6587\u5B57\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'grey darken-2'\r\n * @vue-prop {String} [bgcolorInactive='grey lighten-5'] \u8F38\u5165\u672A\u9078\u9805\u76EE\u4E4B\u6587\u5B57\u80CC\u666F\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'grey lighten-5'\r\n * @vue-prop {Boolean} [editable=true] \u8F38\u5165\u662F\u5426\u70BA\u7DE8\u8F2F\u6A21\u5F0F\uFF0C\u9810\u8A2Dtrue\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon\r\n    },\r\n    props: {\r\n        items: {\r\n            type: Array,\r\n        },\r\n        value: {\r\n            type: Array,\r\n        },\r\n        textColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        backgroundColor: {\r\n            type: String,\r\n            default: 'purple lighten-1',\r\n        },\r\n        iconColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        textcolorInactive: {\r\n            type: String,\r\n            default: 'grey darken-2',\r\n        },\r\n        bgcolorInactive: {\r\n            type: String,\r\n            default: 'grey lighten-5',\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            mdiCheckCircle,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n    },\r\n    methods: {\r\n\r\n        getSelected: function(item) {\r\n            return this.value.indexOf(item) >= 0\r\n        },\r\n\r\n        getBgColor: function(item) {\r\n            if (this.getSelected(item)) {\r\n                return this.backgroundColor\r\n            }\r\n            return this.bgcolorInactive\r\n        },\r\n\r\n        getTextColor: function(item) {\r\n            if (this.getSelected(item)) {\r\n                return this.textColor\r\n            }\r\n            return this.textcolorInactive\r\n        },\r\n\r\n        pull: function(ar, item) {\r\n            let i = ar.indexOf(item)\r\n            ar.splice(i, 1)\r\n            return ar\r\n        },\r\n\r\n        toggleState: function(item) {\r\n            //console.log('methods toggleState', item)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            if (vo.getSelected(item)) {\r\n                //pull\r\n                vo.value = vo.pull(vo.value, item)\r\n            }\r\n            else {\r\n                //push\r\n                vo.value.push(item)\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //emit\r\n                vo.$emit('input', vo.value)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.v-chpi-modify {\r\n    vertical-align: middle;\r\n    margin:10px 10px 10px 0px;\r\n    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]},media:void 0})},j,"data-v-5e9f611a",!1,void 0,g,void 0);return l});
//# sourceMappingURL=w-check-chips.umd.js.map
