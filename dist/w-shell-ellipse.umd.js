/*!
 * w-shell-ellipse v1.1.5
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e["w-shell-ellipse"]=t())})(this,function(){'use strict';function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":j&&j in Object(e)?C(e):_(e)}function n(t){return null!=t&&"object"==e(t)}function o(t){return"symbol"==e(t)||z(t)&&E(t)=="[object Symbol]"}function a(e){if("string"==typeof e)return e;if(y(e))return v(e,a)+"";if(R(e))return B?B.call(e):"";var t=e+"";return"0"==t&&1/e==-H?"-0":t}function i(t){var n=e(t);return null!=t&&("object"==n||"function"==n)}function d(t,n){var o=e(t);return n=null==n?9007199254740991:n,!!n&&("number"==o||"symbol"!=o&&Fe.test(t))&&-1<t&&0==t%1&&t<n}function r(t,n,o){if(!$e(o))return!1;var a=e(n);return!("number"==a?!(De(o)&&Ye(n,o.length)):!("string"==a&&n in o))&&Pe(o[n],t)}function l(t){if("white"===t)return"#fff";if("black"===t)return"#000";if("transparent"===t)return"#rgba(0,0,0,0)";var n=Me(t," "),e=n[0].trim();e=Ue(e);var o=n[1];o===void 0&&(o="base"),o=o.replace("-","").trim();var a="#666";try{a=Xe.default[e][o]}catch(n){console.log("can not convert color: "+t,Xe.default)}return a}function c(e,t){var n=Qe?t.media||"default":e,o=et[n]||(et[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var a=t.source;if(t.map&&(a+="\n/*# sourceURL="+t.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===f&&(f=document.head||document.getElementsByTagName("head")[0]),f.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(a),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var i=o.ids.size-1,d=document.createTextNode(a),r=o.element.childNodes;r[i]&&o.element.removeChild(r[i]),r.length?o.element.insertBefore(d,r[i]):o.element.appendChild(d)}}}var f,s="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,u="object"==e(s)&&s&&s.Object===Object&&s,p=u,g="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,h=p||g||Function("return this")(),b=h.Symbol,m=b,v=function(e,t){for(var n=-1,o=null==e?0:e.length,a=Array(o);++n<o;)a[n]=t(e[n],n,e);return a},x=Array.isArray,y=x,k=Object.prototype,S=k.hasOwnProperty,I=k.toString,A=m?m.toStringTag:void 0,C=function(e){var t=S.call(e,A),n=e[A];try{e[A]=void 0;var o=!0}catch(t){}var a=I.call(e);return o&&(t?e[A]=n:delete e[A]),a},w=Object.prototype,T=w.toString,_=function(e){return T.call(e)},j=m?m.toStringTag:void 0,E=t,z=n,R=o,H=1/0,O=m?m.prototype:void 0,B=O?O.toString:void 0,N=a,L=function(e){return null==e?"":N(e)},U=function(e,t,n){var o=-1,a=e.length;0>t&&(t=-t>a?0:a+t),n=n>a?a:n,0>n&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(a);++o<a;)i[o]=e[o+t];return i},P=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:U(e,t,n)},$=RegExp("["+"\\u200d"+"\\ud800-\\udfff"+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"\\ufe0e\\ufe0f"+"]"),G=function(e){return $.test(e)},W=function(e){return e.split("")},D="\\ud800-\\udfff",F="["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]",Y="\\ud83c[\\udffb-\\udfff]",Z="[^"+D+"]",J="(?:\\ud83c[\\udde6-\\uddff]){2}",q="[\\ud800-\\udbff][\\udc00-\\udfff]",M="(?:"+F+"|"+Y+")"+"?",X="["+"\\ufe0e\\ufe0f"+"]?",K="(?:"+"\\u200d"+"(?:"+[Z,J,q].join("|")+")"+X+M+")*",V="(?:"+[Z+F+"?",F,J,q,"["+D+"]"].join("|")+")",Q=RegExp(Y+"(?="+Y+")|"+V+(X+M+K),"g"),ee=function(e){return e.match(Q)||[]},te=function(e){return G(e)?ee(e):W(e)},ne=function(e){return function(t){t=L(t);var n=G(t)?te(t):void 0,o=n?n[0]:t.charAt(0),a=n?P(n,1).join(""):t.slice(1);return o[e]()+a}}("toUpperCase"),oe=function(e){return ne(L(e).toLowerCase())},ae=function(e,t,n,o){var a=-1,i=null==e?0:e.length;for(o&&i&&(n=e[++a]);++a<i;)n=t(n,e[a],a,e);return n},ie=function(e){return function(t){return null==e?void 0:e[t]}}({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),de=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,re=RegExp("["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]","g"),le=function(e){return e=L(e),e&&e.replace(de,ie).replace(re,"")},ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,fe=function(e){return e.match(ce)||[]},se=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ue=function(e){return se.test(e)},pe="\\ud800-\\udfff",ge="\\u2700-\\u27bf",he="a-z\\xdf-\\xf6\\xf8-\\xff",be="A-Z\\xc0-\\xd6\\xd8-\\xde",me="\\xac\\xb1\\xd7\\xf7"+"\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf"+"\\u2000-\\u206f"+" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ve="['\u2019]",xe="["+me+"]",ye="\\d+",ke="["+he+"]",Se="[^"+pe+me+ye+ge+he+be+"]",Ie="(?:\\ud83c[\\udde6-\\uddff]){2}",Ae="[\\ud800-\\udbff][\\udc00-\\udfff]",Ce="["+be+"]",we="(?:"+ke+"|"+Se+")",Te="(?:"+ve+"(?:d|ll|m|re|s|t|ve))?",_e="(?:"+ve+"(?:D|LL|M|RE|S|T|VE))?",je="(?:"+("["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]")+"|"+"\\ud83c[\\udffb-\\udfff]"+")"+"?",Ee="["+"\\ufe0e\\ufe0f"+"]?",ze="(?:"+"\\u200d"+"(?:"+["[^"+pe+"]",Ie,Ae].join("|")+")"+Ee+je+")*",Re="(?:"+["["+ge+"]",Ie,Ae].join("|")+")"+(Ee+je+ze),He=RegExp([Ce+"?"+ke+"+"+Te+"(?="+[xe,Ce,"$"].join("|")+")","(?:"+Ce+"|"+Se+")"+"+"+_e+"(?="+[xe,Ce+we,"$"].join("|")+")",Ce+"?"+we+"+"+Te,Ce+"+"+_e,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ye,Re].join("|"),"g"),Oe=function(e){return e.match(He)||[]},Be=function(e,t,n){return e=L(e),t=n?void 0:t,void 0===t?ue(e)?Oe(e):fe(e):e.match(t)||[]},Ne=RegExp("['\u2019]","g"),Le=function(e){return function(t){return ae(Be(le(t).replace(Ne,"")),e,"")}}(function(e,t,n){return t=t.toLowerCase(),e+(n?oe(t):t)}),Ue=Le,Pe=function(e,t){return e===t||e!==e&&t!==t},$e=i,Ge=function(e){if(!$e(e))return!1;var t=E(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},We=function(e){return"number"==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},De=function(e){return null!=e&&We(e.length)&&!Ge(e)},Fe=/^(?:0|[1-9]\d*)$/,Ye=d,Ze=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){var n=t&&!t.nodeType&&t,o=n&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===n,i=a&&p.process,d=function(){try{var e=o&&o.require&&o.require("util").types;return e?e:i&&i.binding&&i.binding("util")}catch(t){}}();e.exports=d}),Je=Ze&&Ze.isRegExp,qe=Je?function(e){return function(t){return e(t)}}(Je):function(e){return z(e)&&E(e)=="[object RegExp]"},Me=function(e,t,n){return(n&&"number"!=typeof n&&r(e,t,n)&&(t=n=void 0),n=void 0===n?4294967295:n>>>0,!n)?[]:(e=L(e),e&&("string"==typeof t||null!=t&&!qe(t))&&(t=N(t),!t&&G(e))?P(te(e),0,n):e.split(t,n))},Xe={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}},Ke={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){var e=this;return 0<=e.icon.indexOf("fa-")?e.icon+" fa-fw":e.icon},useSize:function(){var e=this,t=e.size;return 0<=e.icon.indexOf("fa-")?t-4:t},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}},Ve=function(e,t,n,o,a,i,d,r,l,c){"boolean"!=typeof d&&(l=r,r=d,d=!1);var f="function"==typeof n?n.options:n;e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,a&&(f.functional=!0)),o&&(f._scopeId=o);var s;if(i?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=s):t&&(s=d?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),s)if(f.functional){var u=f.render;f.render=function(e,t){return s.call(t),u(e,t)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,s):[s]}return n},Qe="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),et={},tt=function(){return function(e,t){return c(e,t)}};var nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return""===e.icon?e._e():n("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[n("v-icon",{style:e.useStyle,attrs:{color:e.color,size:e.useSize}},[e._v("\n        "+e._s(e.useIcon)+"\n    ")])],1)};nt._withStripped=!0;var ot=Ve({render:nt,staticRenderFns:[]},function(e){e&&e("data-v-c4e40804_0",{source:"\n.v-icon[data-v-c4e40804] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] \u8F38\u5165\u5716\u6A19\u5B57\u4E32\uFF0C\u53EF\u70BAmdi,md,fa\u4EE3\u865F\u6216mdi/js\u8DEF\u5F91\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [color=''] \u8F38\u5165\u5716\u6A19\u80CC\u666F\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {Number} [size=24] \u8F38\u5165\u5716\u6A19\u5927\u5C0F\uFF0C\u55AE\u4F4D\u70BApx\uFF0C\u9810\u8A2D24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})},Ke,"data-v-c4e40804",!1,void 0,tt,void 0),at={components:{WIcon:ot},props:{title:{type:String,default:""},titleColor:{type:String,default:"deep-orange darken-1"},borderRadius:{type:Number,default:30},borderShadow:{type:Boolean,default:!0},leftIcon:{type:String,default:""},leftIconColor:{type:String,default:"deep-orange lighten-2"},leftIconColorHover:{type:String,default:"deep-orange lighten-1"},leftIconTooltip:{type:String,default:""},rightIcon:{type:String,default:""},rightIconColor:{type:String,default:"deep-orange lighten-2"},rightIconColorHover:{type:String,default:"deep-orange lighten-1"},rightIconTooltip:{type:String,default:""},borderColor:{type:String,default:"white"},borderColorHover:{type:String,default:"white"},small:{type:Boolean,default:!0},editable:{type:Boolean,default:!0}},data:function(){return{focused:!1}},mounted:function(){},computed:{useBorder:function(){var e=this,t={};return t.border=e.focused?"1px solid "+l(e.borderColorHover):"1px solid "+l(e.borderColor),t},useTitleColor:function(){var e=this,t={};return t.color=l(e.titleColor),t},usePadding:function(){var e=this,t={};return t.padding=e.small?"0px":"3px 6px",t},usePaddingSlot:function(){var e=this,t={};return t["padding-top"]="0px",t["padding-bottom"]="0px",t["padding-left"]="15px",t["padding-right"]="15px",""!==e.leftIcon&&(t["padding-left"]="10px"),""!==e.rightIcon&&(t["padding-right"]="10px"),t}},methods:{ck_icon:function(e){var t=this;!1===t.editable||setTimeout(function(){t.$emit("click"+e)},1)}}};var it=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{position:"relative"}},[n("div",{style:[{position:"absolute",top:"0px",transform:"translateY(-120%)","font-size":"0.9rem","white-space":"nowrap",opacity:.7},e.useTitleColor]},[e._v("\n            "+e._s(e.title)+"\n        ")])]),e._v(" "),n("div",{class:{group:!0,shadow:e.borderShadow},style:[e.useBorder,e.usePadding,{"border-radius":e.borderRadius+"px"},{opacity:e.editable?1:.6}],on:{mouseenter:function(){e.focused=!0},mouseleave:function(){e.focused=!1}}},[e.leftIcon?n("div",{staticStyle:{"margin-left":"5px",cursor:"pointer"},on:{click:function(){return e.ck_icon("left")}}},[n("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.leftIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("div",e._g({attrs:{ShellEllipse:"leftIcon"}},Object.assign({},o)),[n("w-icon",{attrs:{icon:e.leftIcon,color:e.focused?e.leftIconColorHover:e.leftIconColor}})],1)]}}],null,!1,306534687)},[e._v(" "),n("span",[e._v(e._s(e.leftIconTooltip))])])],1):e._e(),e._v(" "),n("div",{style:[{width:"100%"},e.usePaddingSlot]},[e._t("default")],2),e._v(" "),e.rightIcon?n("div",{staticStyle:{"margin-right":"5px",cursor:"pointer"},on:{click:function(){return e.ck_icon("right")}}},[n("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.rightIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("div",e._g({attrs:{ShellEllipse:"rightIcon"}},Object.assign({},o)),[n("w-icon",{attrs:{icon:e.rightIcon,color:e.focused?e.rightIconColorHover:e.rightIconColor}})],1)]}}],null,!1,843001247)},[e._v(" "),n("span",[e._v(e._s(e.rightIconTooltip))])])],1):e._e()])])};it._withStripped=!0;var dt=Ve({render:it,staticRenderFns:[]},function(e){e&&e("data-v-5a7ba355_0",{source:"\n.group[data-v-5a7ba355] {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\n}\n.shadow[data-v-5a7ba355] {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n.shadow[data-v-5a7ba355]:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WShellEllipse.vue"],names:[],mappings:";AA8PA;IACA,oBAAA;IACA,aAAA;IACA,2BAAA;IACA,mBAAA;AACA;AACA;IACA,mGAAA;AACA;AACA;IACA,mGAAA;AACA",file:"WShellEllipse.vue",sourcesContent:["<template>\r\n    <div>\r\n\r\n        <div style=\"position:relative;\">\r\n\r\n            <div :style=\"[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]\">\r\n                {{title}}\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div\r\n            :class=\"{'group':true,'shadow':borderShadow}\"\r\n            :style=\"[useBorder,usePadding,{'border-radius':borderRadius+'px'},{'opacity':editable?1:0.6}]\"\r\n            @mouseenter=\"focused=true\"\r\n            @mouseleave=\"focused=false\"\r\n        >\r\n\r\n            <div style=\"margin-left:5px; cursor:pointer;\" @click=\"ck_icon('left')\" v-if=\"leftIcon\">\r\n\r\n                <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"leftIconTooltip===''\">\r\n\r\n                    <template v-slot:activator=\"{ on: ttShellEllipseLeft }\">\r\n                        <div ShellEllipse=\"leftIcon\" v-on=\"{...ttShellEllipseLeft}\">\r\n                            <w-icon\r\n                                :icon=\"leftIcon\"\r\n                                :color=\"focused?leftIconColorHover:leftIconColor\"\r\n                            ></w-icon>\r\n                        </div>\r\n                    </template>\r\n\r\n                    <span>{{leftIconTooltip}}</span>\r\n\r\n                </v-tooltip>\r\n\r\n            </div>\r\n\r\n            <div :style=\"[{'width':'100%'},usePaddingSlot]\">\r\n\r\n                <slot></slot>\r\n\r\n            </div>\r\n\r\n            <div style=\"margin-right:5px; cursor:pointer;\" @click=\"ck_icon('right')\" v-if=\"rightIcon\">\r\n\r\n                <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"rightIconTooltip===''\">\r\n\r\n                    <template v-slot:activator=\"{ on: ttShellEllipseRight }\">\r\n                        <div ShellEllipse=\"rightIcon\" v-on=\"{...ttShellEllipseRight}\">\r\n                            <w-icon\r\n                                :icon=\"rightIcon\"\r\n                                :color=\"focused?rightIconColorHover:rightIconColor\"\r\n                            ></w-icon>\r\n                        </div>\r\n                    </template>\r\n\r\n                    <span>{{rightIconTooltip}}</span>\r\n\r\n                </v-tooltip>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport { color2hex } from '../js/vuetifyColor.mjs'\r\nimport WIcon from './WIcon.vue'\r\n\r\n/**\r\n * @vue-prop {String} [title=''] \u8F38\u5165\u6A19\u984C\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [titleColor='deep-orange darken-1'] \u8F38\u5165\u6A19\u984C\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'deep-orange darken-1'\r\n * @vue-prop {Number} [borderRadius=30] \u8F38\u5165\u5713\u89D2\u5BEC\u5EA6\uFF0C\u55AE\u4F4D\u70BApx\uFF0C\u9810\u8A2D30\r\n * @vue-prop {Boolean} [borderShadow=true] \u8F38\u5165\u662F\u5426\u70BA\u9670\u5F71\u6A21\u5F0F\uFF0C\u9810\u8A2Dtrue\r\n * @vue-prop {String} [leftIcon=''] \u8F38\u5165\u5DE6\u5074\u5716\u6A19\u5B57\u4E32\uFF0C\u53EF\u70BAmdi,md,fa\u4EE3\u865F\u6216mdi/js\u8DEF\u5F91\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] \u8F38\u5165\u5DE6\u5074\u5716\u6A19\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'deep-orange lighten-2'\r\n * @vue-prop {String} [leftIconColorHover='deep-orange lighten-1'] \u8F38\u5165\u5DE6\u5074\u5716\u6A19Hover\u6642\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'deep-orange lighten-1'\r\n * @vue-prop {String} [leftIconTooltip=''] \u8F38\u5165\u5DE6\u5074\u5716\u6A19\u63D0\u793A\u6587\u5B57\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [rightIcon=''] \u8F38\u5165\u53F3\u5074\u5716\u6A19\u5B57\u4E32\uFF0C\u53EF\u70BAmdi,md,fa\u4EE3\u865F\u6216mdi/js\u8DEF\u5F91\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] \u8F38\u5165\u53F3\u5074\u5716\u6A19\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'deep-orange lighten-2'\r\n * @vue-prop {String} [rightIconColorHover='deep-orange lighten-1'] \u8F38\u5165\u53F3\u5074\u5716\u6A19Hover\u6642\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'deep-orange lighten-1'\r\n * @vue-prop {String} [rightIconTooltip=''] \u8F38\u5165\u53F3\u5074\u5716\u6A19\u63D0\u793A\u6587\u5B57\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [borderColor='white'] \u8F38\u5165\u908A\u6846\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'white'\r\n * @vue-prop {String} [borderColorHover='white'] \u8F38\u5165\u908A\u6846Hover\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'white'\r\n * @vue-prop {Boolean} [small=true] \u8F38\u5165\u662F\u5426\u70BA\u5C0F\u578B\u6A21\u5F0F\uFF0C\u9810\u8A2Dtrue\r\n * @vue-prop {Boolean} [editable=true] \u8F38\u5165\u662F\u5426\u70BA\u7DE8\u8F2F\u6A21\u5F0F\uFF0C\u9810\u8A2Dtrue\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon\r\n    },\r\n    props: {\r\n        title: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        titleColor: {\r\n            type: String,\r\n            default: 'deep-orange darken-1',\r\n        },\r\n        borderRadius: {\r\n            type: Number,\r\n            default: 30,\r\n        },\r\n        borderShadow: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        leftIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        leftIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        leftIconColorHover: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        leftIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        rightIconColorHover: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        rightIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        borderColor: {\r\n            type: String,\r\n            default: 'white', //transparent grey lighten-1\r\n        },\r\n        borderColorHover: {\r\n            type: String,\r\n            default: 'white', //transparent grey lighten-1\r\n        },\r\n        small: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focused: false,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useBorder: function() {\r\n            //console.log('computed useBorder')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.focused) {\r\n                s['border'] = '1px solid ' + color2hex(vo.borderColorHover)\r\n            }\r\n            else {\r\n                s['border'] = '1px solid ' + color2hex(vo.borderColor)\r\n            }\r\n            return s\r\n        },\r\n\r\n        useTitleColor: function() {\r\n            //console.log('computed useTitleColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['color'] = color2hex(vo.titleColor)\r\n            return s\r\n        },\r\n\r\n        usePadding: function() {\r\n            //console.log('computed usePadding')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.small) {\r\n                s['padding'] = '0px'\r\n            }\r\n            else {\r\n                s['padding'] = '3px 6px'\r\n            }\r\n            return s\r\n        },\r\n\r\n        usePaddingSlot: function() {\r\n            //console.log('computed usePaddingSlot')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding-top'] = '0px'\r\n            s['padding-bottom'] = '0px'\r\n            s['padding-left'] = '15px'\r\n            s['padding-right'] = '15px'\r\n            if (vo.leftIcon !== '') {\r\n                s['padding-left'] = '10px'\r\n            }\r\n            if (vo.rightIcon !== '') {\r\n                s['padding-right'] = '10px'\r\n            }\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        ck_icon: function (mode) {\r\n            //console.log('methods ck_icon', mode)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //emit\r\n                vo.$emit('click' + mode)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.group {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n.shadow {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.shadow:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]},media:void 0})},at,"data-v-5a7ba355",!1,void 0,tt,void 0);return dt});
//# sourceMappingURL=w-shell-ellipse.umd.js.map
