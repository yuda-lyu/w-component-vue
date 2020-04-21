/*!
 * w-button-chip v1.3.15
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-button-chip"]=n()}(this,(function(){"use strict";var e={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var e=this.size;return this.icon.indexOf("fa-")>=0?e-4:e},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};function n(e,n,t,r,a,f,i,o,c,u){"boolean"!=typeof i&&(c=o,o=i,i=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),f?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(f)},l._ssrRegister=d):n&&(d=i?function(e){n.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,o(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,d):[d]}return t}var t,r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function a(e){return function(e,n){return function(e,n){var a=r?n.media||"default":e,i=f[a]||(f[a]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var o=n.source;if(n.map&&(o+="\n/*# sourceURL="+n.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",n.media&&i.element.setAttribute("media",n.media),void 0===t&&(t=document.head||document.getElementsByTagName("head")[0]),t.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(o),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var c=i.ids.size-1,u=document.createTextNode(o),d=i.element.childNodes;d[c]&&i.element.removeChild(d[c]),d.length?i.element.insertBefore(u,d[c]):i.element.appendChild(u)}}}(e,n)}}var f={};const i=e;var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return""!==e.icon?t("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[t("v-icon",{style:e.useStyle,attrs:{color:e.color,size:e.useSize}},[e._v("\n        "+e._s(e.useIcon)+"\n    ")])],1):e._e()};o._withStripped=!0;const c=n({render:o,staticRenderFns:[]},(function(e){e&&e("data-v-5ea7e17f_0",{source:"\n.v-icon[data-v-5ea7e17f] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})}),i,"data-v-5ea7e17f",!1,void 0,!1,a,void 0,void 0);var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function d(e,n){return e(n={exports:{}},n.exports),n.exports}var l=d((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),s="object"==l(u)&&u&&u.Object===Object&&u,h="object"==("undefined"==typeof self?"undefined":l(self))&&self&&self.Object===Object&&self,p=s||h||Function("return this")(),v=p.Symbol;var b=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},g=Array.isArray,y=Object.prototype,m=y.hasOwnProperty,_=y.toString,k=v?v.toStringTag:void 0;var x=function(e){var n=m.call(e,k),t=e[k];try{e[k]=void 0;var r=!0}catch(e){}var a=_.call(e);return r&&(n?e[k]=t:delete e[k]),a},S=Object.prototype.toString;var j=function(e){return S.call(e)},O=v?v.toStringTag:void 0;var w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?x(e):j(e)};var z=function(e){return null!=e&&"object"==l(e)};var A=function(e){return"symbol"==l(e)||z(e)&&"[object Symbol]"==w(e)},C=v?v.prototype:void 0,E=C?C.toString:void 0;var R=function e(n){if("string"==typeof n)return n;if(g(n))return b(n,e)+"";if(A(n))return E?E.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t};var T=function(e){return null==e?"":R(e)};var I=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var f=Array(a);++r<a;)f[r]=e[r+n];return f};var $=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:I(e,n,t)},L=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var N=function(e){return L.test(e)};var U=function(e){return e.split("")},B="[\\ud800-\\udfff]",P="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",D="\\ud83c[\\udffb-\\udfff]",F="[^\\ud800-\\udfff]",Z="(?:\\ud83c[\\udde6-\\uddff]){2}",M="[\\ud800-\\udbff][\\udc00-\\udfff]",W="(?:"+P+"|"+D+")"+"?",G="[\\ufe0e\\ufe0f]?"+W+("(?:\\u200d(?:"+[F,Z,M].join("|")+")[\\ufe0e\\ufe0f]?"+W+")*"),V="(?:"+[F+P+"?",P,Z,M,B].join("|")+")",J=RegExp(D+"(?="+D+")|"+V+G,"g");var Y=function(e){return e.match(J)||[]};var H=function(e){return N(e)?Y(e):U(e)};var X=function(e){return function(n){n=T(n);var t=N(n)?H(n):void 0,r=t?t[0]:n.charAt(0),a=t?$(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var q=function(e){return X(T(e).toLowerCase())};var K=function(e,n,t,r){var a=-1,f=null==e?0:e.length;for(r&&f&&(t=e[++a]);++a<f;)t=n(t,e[a],a,e);return t};var Q=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),ee=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ne=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var te=function(e){return(e=T(e))&&e.replace(ee,Q).replace(ne,"")},re=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var ae=function(e){return e.match(re)||[]},fe=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var ie=function(e){return fe.test(e)},oe="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ce="["+oe+"]",ue="\\d+",de="[\\u2700-\\u27bf]",le="[a-z\\xdf-\\xf6\\xf8-\\xff]",se="[^\\ud800-\\udfff"+oe+ue+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",he="(?:\\ud83c[\\udde6-\\uddff]){2}",pe="[\\ud800-\\udbff][\\udc00-\\udfff]",ve="[A-Z\\xc0-\\xd6\\xd8-\\xde]",be="(?:"+le+"|"+se+")",ge="(?:"+ve+"|"+se+")",ye="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",me="[\\ufe0e\\ufe0f]?"+ye+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",he,pe].join("|")+")[\\ufe0e\\ufe0f]?"+ye+")*"),_e="(?:"+[de,he,pe].join("|")+")"+me,ke=RegExp([ve+"?"+le+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[ce,ve,"$"].join("|")+")",ge+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[ce,ve+be,"$"].join("|")+")",ve+"?"+be+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ve+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ue,_e].join("|"),"g");var xe=function(e){return e.match(ke)||[]};var Se=function(e,n,t){return e=T(e),void 0===(n=t?void 0:n)?ie(e)?xe(e):ae(e):e.match(n)||[]},je=RegExp("['’]","g");var Oe=function(e){return function(n){return K(Se(te(n).replace(je,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?q(n):n)}));var we=function(e,n){return e===n||e!=e&&n!=n};var ze=function(e){var n=l(e);return null!=e&&("object"==n||"function"==n)};var Ae=function(e){if(!ze(e))return!1;var n=w(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var Ce=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var Ee=function(e){return null!=e&&Ce(e.length)&&!Ae(e)},Re=/^(?:0|[1-9]\d*)$/;var Te=function(e,n){var t=l(e);return!!(n=null==n?9007199254740991:n)&&("number"==t||"symbol"!=t&&Re.test(e))&&e>-1&&e%1==0&&e<n};var Ie=function(e,n,t){if(!ze(t))return!1;var r=l(n);return!!("number"==r?Ee(t)&&Te(n,t.length):"string"==r&&n in t)&&we(t[n],e)};var $e=function(e){return z(e)&&"[object RegExp]"==w(e)};var Le=function(e){return function(n){return e(n)}},Ne=d((function(e,n){var t=n&&!n.nodeType&&n,r=t&&e&&!e.nodeType&&e,a=r&&r.exports===t&&s.process,f=function(){try{var e=r&&r.require&&r.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=f})),Ue=Ne&&Ne.isRegExp,Be=Ue?Le(Ue):$e;var Pe=function(e,n,t){return t&&"number"!=typeof t&&Ie(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=T(e))&&("string"==typeof n||null!=n&&!Be(n))&&!(n=R(n))&&N(e)?$(H(e),0,t):e.split(n,t):[]},De=Object.prototype;var Fe=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||De)};var Ze=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Me=Object.prototype.hasOwnProperty;var We,Ge=function(e){if(!Fe(e))return Ze(e);var n=[];for(var t in Object(e))Me.call(e,t)&&"constructor"!=t&&n.push(t);return n},Ve=p["__core-js_shared__"],Je=(We=/[^.]+$/.exec(Ve&&Ve.keys&&Ve.keys.IE_PROTO||""))?"Symbol(src)_1."+We:"";var Ye=function(e){return!!Je&&Je in e},He=Function.prototype.toString;var Xe=function(e){if(null!=e){try{return He.call(e)}catch(e){}try{return e+""}catch(e){}}return""},qe=/^\[object .+?Constructor\]$/,Ke=Function.prototype,Qe=Object.prototype,en=Ke.toString,nn=Qe.hasOwnProperty,tn=RegExp("^"+en.call(nn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rn=function(e){return!(!ze(e)||Ye(e))&&(Ae(e)?tn:qe).test(Xe(e))};var an=function(e,n){return null==e?void 0:e[n]};var fn=function(e,n){var t=an(e,n);return rn(t)?t:void 0},on=fn(p,"DataView"),cn=fn(p,"Map"),un=fn(p,"Promise"),dn=fn(p,"Set"),ln=fn(p,"WeakMap"),sn=Xe(on),hn=Xe(cn),pn=Xe(un),vn=Xe(dn),bn=Xe(ln),gn=w;(on&&"[object DataView]"!=gn(new on(new ArrayBuffer(1)))||cn&&"[object Map]"!=gn(new cn)||un&&"[object Promise]"!=gn(un.resolve())||dn&&"[object Set]"!=gn(new dn)||ln&&"[object WeakMap]"!=gn(new ln))&&(gn=function(e){var n=w(e),t="[object Object]"==n?e.constructor:void 0,r=t?Xe(t):"";if(r)switch(r){case sn:return"[object DataView]";case hn:return"[object Map]";case pn:return"[object Promise]";case vn:return"[object Set]";case bn:return"[object WeakMap]"}return n});var yn=gn;var mn=function(e){return"string"==typeof e||!g(e)&&z(e)&&"[object String]"==w(e)};var _n=function(e){return function(n){return null==n?void 0:n[e]}}("length"),kn="[\\ud800-\\udfff]",xn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Sn="\\ud83c[\\udffb-\\udfff]",jn="[^\\ud800-\\udfff]",On="(?:\\ud83c[\\udde6-\\uddff]){2}",wn="[\\ud800-\\udbff][\\udc00-\\udfff]",zn="(?:"+xn+"|"+Sn+")"+"?",An="[\\ufe0e\\ufe0f]?"+zn+("(?:\\u200d(?:"+[jn,On,wn].join("|")+")[\\ufe0e\\ufe0f]?"+zn+")*"),Cn="(?:"+[jn+xn+"?",xn,On,wn,kn].join("|")+")",En=RegExp(Sn+"(?="+Sn+")|"+Cn+An,"g");var Rn=function(e){for(var n=En.lastIndex=0;En.test(e);)++n;return n};var Tn=function(e){return N(e)?Rn(e):_n(e)};var In=function(e){if(null==e)return 0;if(Ee(e))return mn(e)?Tn(e):e.length;var n=yn(e);return"[object Map]"==n||"[object Set]"==n?e.size:Ge(e).length},$n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ln=/^\w*$/;var Nn=function(e,n){if(g(e))return!1;var t=l(e);return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!A(e))||(Ln.test(e)||!$n.test(e)||null!=n&&e in Object(n))},Un=fn(Object,"create");var Bn=function(){this.__data__=Un?Un(null):{},this.size=0};var Pn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Dn=Object.prototype.hasOwnProperty;var Fn=function(e){var n=this.__data__;if(Un){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return Dn.call(n,e)?n[e]:void 0},Zn=Object.prototype.hasOwnProperty;var Mn=function(e){var n=this.__data__;return Un?void 0!==n[e]:Zn.call(n,e)};var Wn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Un&&void 0===n?"__lodash_hash_undefined__":n,this};function Gn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Gn.prototype.clear=Bn,Gn.prototype.delete=Pn,Gn.prototype.get=Fn,Gn.prototype.has=Mn,Gn.prototype.set=Wn;var Vn=Gn;var Jn=function(){this.__data__=[],this.size=0};var Yn=function(e,n){for(var t=e.length;t--;)if(we(e[t][0],n))return t;return-1},Hn=Array.prototype.splice;var Xn=function(e){var n=this.__data__,t=Yn(n,e);return!(t<0)&&(t==n.length-1?n.pop():Hn.call(n,t,1),--this.size,!0)};var qn=function(e){var n=this.__data__,t=Yn(n,e);return t<0?void 0:n[t][1]};var Kn=function(e){return Yn(this.__data__,e)>-1};var Qn=function(e,n){var t=this.__data__,r=Yn(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function et(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}et.prototype.clear=Jn,et.prototype.delete=Xn,et.prototype.get=qn,et.prototype.has=Kn,et.prototype.set=Qn;var nt=et;var tt=function(){this.size=0,this.__data__={hash:new Vn,map:new(cn||nt),string:new Vn}};var rt=function(e){var n=l(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var at=function(e,n){var t=e.__data__;return rt(n)?t["string"==typeof n?"string":"hash"]:t.map};var ft=function(e){var n=at(this,e).delete(e);return this.size-=n?1:0,n};var it=function(e){return at(this,e).get(e)};var ot=function(e){return at(this,e).has(e)};var ct=function(e,n){var t=at(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function ut(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ut.prototype.clear=tt,ut.prototype.delete=ft,ut.prototype.get=it,ut.prototype.has=ot,ut.prototype.set=ct;var dt=ut;function lt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],f=t.cache;if(f.has(a))return f.get(a);var i=e.apply(this,r);return t.cache=f.set(a,i)||f,i};return t.cache=new(lt.Cache||dt),t}lt.Cache=dt;var st=lt;var ht=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pt=/\\(\\)?/g,vt=function(e){var n=st(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(ht,(function(e,t,r,a){n.push(r?a.replace(pt,"$1"):t||e)})),n}));var bt=function(e,n){return g(e)?e:Nn(e,n)?[e]:vt(T(e))};var gt=function(e){if("string"==typeof e||A(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var yt=function(e,n){for(var t=0,r=(n=bt(n,e)).length;null!=e&&t<r;)e=e[gt(n[t++])];return t&&t==r?e:void 0};var mt=function(e,n,t){var r=null==e?void 0:yt(e,n);return void 0===r?t:r},_t={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};const kt={components:{WIcon:c},props:{text:{type:String,default:""},tooltip:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:""},iconShiftLeft:{type:Number,default:0},textColor:{type:String,default:"black"},backgroundColor:{type:String,default:"grey lighten-4"},small:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{useIconShiftLeft:function(){return this.iconShiftLeft-9},useTextColor:function(){return function(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Pe(e," ");if(2!==In(n))return e;var t=n[0].trim();t=Oe(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=mt(_t,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}(this.textColor)}},methods:{clickBtn:function(){var e=this;setTimeout((function(){e.$emit("click")}),1)}}};var xt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{display:"inline-block"}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.tooltip},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t("v-btn",e._g({attrs:{rounded:"",small:e.small,color:e.backgroundColor,loading:e.loading,disabled:!e.editable},on:{click:e.clickBtn}},r),[t("w-icon",{style:"margin:0px 5px 0px "+e.useIconShiftLeft+"px;",attrs:{icon:e.icon,color:e.iconColor,size:22}}),e._v(" "),t("span",{style:"font-size:0.875rem; text-transform:none; color:"+e.useTextColor},[e._v(e._s(e.text))])],1)]}}])},[e._v(" "),t("span",[e._v(e._s(e.tooltip))])])],1)};xt._withStripped=!0;return n({render:xt,staticRenderFns:[]},(function(e){e&&e("data-v-4d973d7a_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WButtonChip.vue"},media:void 0})}),kt,"data-v-4d973d7a",!1,void 0,!1,a,void 0,void 0)}));
//# sourceMappingURL=w-button-chip.umd.js.map