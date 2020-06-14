/*!
 * w-panel-divide-horizontal v1.3.43
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self)["w-panel-divide-horizontal"]=t()}(this,(function(){"use strict";var e=Array.isArray,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,t){return e(t={exports:{}},t.exports),t.exports}var r=n((function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t})),o="object"==r(t)&&t&&t.Object===Object&&t,i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=o||i||Function("return this")(),s=a.Symbol,c=Object.prototype,u=c.hasOwnProperty,l=c.toString,f=s?s.toStringTag:void 0;var d=function(e){var t=u.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=l.call(e);return r&&(t?e[f]=n:delete e[f]),o},h=Object.prototype.toString;var v=function(e){return h.call(e)},p=s?s.toStringTag:void 0;var y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":p&&p in Object(e)?d(e):v(e)};var m=function(e){return null!=e&&"object"==r(e)};var _=function(e){return"symbol"==r(e)||m(e)&&"[object Symbol]"==y(e)},b=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,g=/^\w*$/;var w=function(t,n){if(e(t))return!1;var o=r(t);return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=t&&!_(t))||(g.test(t)||!b.test(t)||null!=n&&t in Object(n))};var x=function(e){var t=r(e);return null!=e&&("object"==t||"function"==t)};var j,O=function(e){if(!x(e))return!1;var t=y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},S=a["__core-js_shared__"],E=(j=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var P=function(e){return!!E&&E in e},C=Function.prototype.toString;var L=function(e){if(null!=e){try{return C.call(e)}catch(e){}try{return e+""}catch(e){}}return""},B=/^\[object .+?Constructor\]$/,z=Function.prototype,$=Object.prototype,H=z.toString,W=$.hasOwnProperty,T=RegExp("^"+H.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var X=function(e){return!(!x(e)||P(e))&&(O(e)?T:B).test(L(e))};var R=function(e,t){return null==e?void 0:e[t]};var Y=function(e,t){var n=R(e,t);return X(n)?n:void 0},F=Y(Object,"create");var A=function(){this.__data__=F?F(null):{},this.size=0};var N=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},D=Object.prototype.hasOwnProperty;var k=function(e){var t=this.__data__;if(F){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return D.call(t,e)?t[e]:void 0},M=Object.prototype.hasOwnProperty;var U=function(e){var t=this.__data__;return F?void 0!==t[e]:M.call(t,e)};var I=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=F&&void 0===t?"__lodash_hash_undefined__":t,this};function V(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}V.prototype.clear=A,V.prototype.delete=N,V.prototype.get=k,V.prototype.has=U,V.prototype.set=I;var G=V;var J=function(){this.__data__=[],this.size=0};var q=function(e,t){return e===t||e!=e&&t!=t};var K=function(e,t){for(var n=e.length;n--;)if(q(e[n][0],t))return n;return-1},Q=Array.prototype.splice;var Z=function(e){var t=this.__data__,n=K(t,e);return!(n<0)&&(n==t.length-1?t.pop():Q.call(t,n,1),--this.size,!0)};var ee=function(e){var t=this.__data__,n=K(t,e);return n<0?void 0:t[n][1]};var te=function(e){return K(this.__data__,e)>-1};var ne=function(e,t){var n=this.__data__,r=K(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}re.prototype.clear=J,re.prototype.delete=Z,re.prototype.get=ee,re.prototype.has=te,re.prototype.set=ne;var oe=re,ie=Y(a,"Map");var ae=function(){this.size=0,this.__data__={hash:new G,map:new(ie||oe),string:new G}};var se=function(e){var t=r(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ce=function(e,t){var n=e.__data__;return se(t)?n["string"==typeof t?"string":"hash"]:n.map};var ue=function(e){var t=ce(this,e).delete(e);return this.size-=t?1:0,t};var le=function(e){return ce(this,e).get(e)};var fe=function(e){return ce(this,e).has(e)};var de=function(e,t){var n=ce(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function he(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}he.prototype.clear=ae,he.prototype.delete=ue,he.prototype.get=le,he.prototype.has=fe,he.prototype.set=de;var ve=he;function pe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(pe.Cache||ve),n}pe.Cache=ve;var ye=pe;var me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_e=/\\(\\)?/g,be=function(e){var t=ye(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(me,(function(e,n,r,o){t.push(r?o.replace(_e,"$1"):n||e)})),t}));var ge=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},we=s?s.prototype:void 0,xe=we?we.toString:void 0;var je=function t(n){if("string"==typeof n)return n;if(e(n))return ge(n,t)+"";if(_(n))return xe?xe.call(n):"";var r=n+"";return"0"==r&&1/n==-1/0?"-0":r};var Oe=function(e){return null==e?"":je(e)};var Se=function(t,n){return e(t)?t:w(t,n)?[t]:be(Oe(t))};var Ee=function(e){if("string"==typeof e||_(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Pe=function(e,t){for(var n=0,r=(t=Se(t,e)).length;null!=e&&n<r;)e=e[Ee(t[n++])];return n&&n==r?e:void 0};var Ce=function(e,t,n){var r=null==e?void 0:Pe(e,t);return void 0===r?n:r};var Le=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Be=n((function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function i(e,t,r,i,a){if("function"!=typeof r)throw new TypeError("The listener must be a function");var s=new o(r,i||e,a),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),s.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},s.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},s.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,t,r,o,i,a){var s=n?n+e:e;if(!this._events[s])return!1;var c,u,l=this._events[s],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,r),!0;case 4:return l.fn.call(l.context,t,r,o),!0;case 5:return l.fn.call(l.context,t,r,o,i),!0;case 6:return l.fn.call(l.context,t,r,o,i,a),!0}for(u=1,c=new Array(f-1);u<f;u++)c[u-1]=arguments[u];l.fn.apply(l.context,c)}else{var d,h=l.length;for(u=0;u<h;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),f){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,r);break;case 4:l[u].fn.call(l[u].context,t,r,o);break;default:if(!c)for(d=1,c=new Array(f-1);d<f;d++)c[d-1]=arguments[d];l[u].fn.apply(l[u].context,c)}}return!0},s.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,r,o){var i=n?n+e:e;if(!this._events[i])return this;if(!t)return a(this,i),this;var s=this._events[i];if(s.fn)s.fn!==t||o&&!s.once||r&&s.context!==r||a(this,i);else{for(var c=0,u=[],l=s.length;c<l;c++)(s[c].fn!==t||o&&!s[c].once||r&&s[c].context!==r)&&u.push(s[c]);u.length?this._events[i]=1===u.length?u[0]:u:a(this,i)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s}));function ze(){return new Be}function $e(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t}function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function We(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?He(Object(n),!0).forEach((function(t){Le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Te=function(e){return!0===e||!1===e||m(e)&&"[object Boolean]"==y(e)};function Xe(e){return e?e.cancelable?(window.event?e.cancelBubble=!0:e.stopPropagation(),void e.preventDefault()):"event is not cancelable":"invalid event"}var Re={components:{},props:{ratio:{type:Number,default:.5},min:{type:Number,default:0},max:{type:Number,default:1},barColor:{type:String,default:"#ddd"},barBorderColor:{type:String,default:"transparent"},barSize:{type:Number,default:2},barBorderSize:{type:Number,default:3}},data:function(){return{r:null,panelWidth:0,panelHeight:0,de:null,das:null}},mounted:function(){var e=this,t=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,r=ze(),o={offsetWidth:0,offsetHeight:0};return $e(e)?(t=setInterval((function(){var t=e();if(t){var n={offsetWidth:t.offsetWidth,offsetHeight:t.offsetHeight};if(o.offsetWidth!==n.offsetWidth||o.offsetHeight!==n.offsetHeight){var i=We({},o);setTimeout((function(){n.offsetWidth>0&&n.offsetHeight>0&&r.emit("resize",{sold:i,snew:n,ele:t}),0===o.offsetWidth&&0===o.offsetHeight&&(n.offsetWidth>0||n.offsetHeight>0)&&r.emit("display",{mode:"show",ele:t}),(o.offsetWidth>0||o.offsetHeight>0)&&0===n.offsetWidth&&0===n.offsetHeight&&r.emit("display",{mode:"hide",ele:t})}),1)}o=n}}),n),r.clear=function(){clearInterval(t)},r):(console.log("invalid f",e),null)}((function(){return Ce(e,"$el")}));t.on("resize",(function(t){e.panelWidth=t.snew.offsetWidth,e.panelHeight=t.snew.offsetHeight})),t.on("display",(function(e){})),e.de=t;var n=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=null,o=null,i=null,a=null,s=null,c=null,u=null,l=null,f=null,d=null,h=!1,v=Ce(n,"getHeighRatio",null);O(v)||(v=function(){return 1});var p=Ce(n,"getWidthRatio",null);O(p)||(p=function(){return 1});var y=Ce(n,"stopScrollPropagationForPanel",null);Te(y)||(y=!1);var m=Ce(n,"useTouchDragForPanel",null);Te(m)||(m=!0);var _=e,b=t,g=ze();function w(){r=function(e){var t=e.deltaY/Math.abs(e.deltaY),n=e.deltaX/Math.abs(e.deltaX);g.emit("scrollPanel",{ratioY:t,ratioX:n}),y&&Xe(e)},_.addEventListener("wheel",r),o=function(e){if(m){var t=-e.touches[0].clientY*v(),n=-e.touches[0].clientX*p();h=!0,g.emit("pressBar",{clientY:t,clientX:n})}},_.addEventListener("touchstart",o),i=function(e){if(h){var t=-e.touches[0].clientY*v(),n=-e.touches[0].clientX*p();g.emit("dragBar",{clientY:t,clientX:n}),Xe(e)}},_.addEventListener("touchmove",i),a=function(e){h&&(h=!1,g.emit("freeBar"))},_.addEventListener("touchend",a),s=function(e){h=!0,g.emit("pressBar",{clientY:e.clientY,clientX:e.clientX})},b.addEventListener("mousedown",s),c=function(e){h=!0,g.emit("pressBar",{clientY:e.touches[0].clientY,clientX:e.touches[0].clientX})},b.addEventListener("touchstart",c),u=function(e){h&&(g.emit("dragBar",{clientY:e.touches[0].clientY,clientX:e.touches[0].clientX}),Xe(e))},b.addEventListener("touchmove",u),l=function(e){h&&(h=!1,g.emit("freeBar"))},b.addEventListener("touchend",l),f=function(e){h&&g.emit("dragBar",{clientY:e.clientY,clientX:e.clientX})},window.addEventListener("mousemove",f),d=function(e){h&&(h=!1,g.emit("freeBar"),Xe(e))},window.addEventListener("mouseup",d)}function x(){_.removeEventListener("wheel",r),_.removeEventListener("touchstart",o),_.removeEventListener("touchmove",i),_.removeEventListener("touchend",a),b.removeEventListener("mousedown",s),b.removeEventListener("touchstart",c),b.removeEventListener("touchmove",u),b.removeEventListener("touchend",l),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",d)}return w(),g.clear=x,g}(e.$refs.divPanel,e.$refs.divBar,{useTouchDragForPanel:!1});n.on("dragBar",e.dragBar),e.das=n},beforeDestroy:function(){this.de&&this.de.clear(),this.das&&this.das.clear()},computed:{changeParam:function(){var e=this.ratio;return e=Math.min(e,this.max),e=Math.max(e,this.min),this.r=e,""},bw:function(){return this.barSize+2*this.barBorderSize}},methods:{dragBar:function(e){var t=e.clientX,n=this,r=n.$el.getBoundingClientRect(),o=t,i=n.$el.offsetWidth,a=0;i>0&&(a=(o-r.left)/i),a=Math.min(a,n.max),a=Math.max(a,n.min),n.r=a,n.$emit("update:ratio",a)}}};function Ye(e,t,n,r,o,i,a,s,c,u){"boolean"!=typeof a&&(c=s,s=a,a=!1);var l,f="function"==typeof n?n.options:n;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=l):t&&(l=a?function(e){t.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),l)if(f.functional){var d=f.render;f.render=function(e,t){return l.call(t),d(e,t)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,l):[l]}return n}var Fe,Ae="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Ne(e){return function(e,t){return function(e,t){var n=Ae?t.media||"default":e,r=De[n]||(De[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===Fe&&(Fe=document.head||document.getElementsByTagName("head")[0]),Fe.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),s=r.element.childNodes;s[i]&&r.element.removeChild(s[i]),s.length?r.element.insertBefore(a,s[i]):r.element.appendChild(a)}}}(e,t)}}var De={};const ke=Re;var Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{changeParam:e.changeParam}},[n("div",{ref:"divPanel",staticStyle:{position:"relative",display:"flex"}},[n("div",{ref:"left",style:"width:"+e.r*e.panelWidth+"px; height:"+e.panelHeight+"px;"},[e._t("left",null,{ratio:e.r,width:e.r*e.panelWidth,height:e.panelHeight})],2),e._v(" "),n("div",{ref:"divBar",style:"position:absolute; z-index:1; left:"+(e.r*e.panelWidth-e.bw/2)+"px; width:"+e.bw+"px; height:"+e.panelHeight+"px; border-left:"+e.barBorderSize+"px solid "+e.barBorderColor+"; border-right:"+e.barBorderSize+"px solid "+e.barBorderColor+"; cursor:col-resize; user-select:none;"},[n("div",{style:"width:"+e.barSize+"px; height:"+e.panelHeight+"px; background-color:"+e.barColor+";"})]),e._v(" "),n("div",{ref:"right",style:"width:"+(1-e.r)*e.panelWidth+"px; height:"+e.panelHeight+"px;"},[e._t("right",null,{ratio:1-e.r,width:(1-e.r)*e.panelWidth,height:e.panelHeight})],2)])])};Me._withStripped=!0;return Ye({render:Me,staticRenderFns:[]},(function(e){e&&e("data-v-ea53d650_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WPanelDivideHorizontal.vue"},media:void 0})}),ke,"data-v-ea53d650",!1,void 0,!1,Ne,void 0,void 0)}));
//# sourceMappingURL=w-panel-divide-horizontal.umd.js.map
