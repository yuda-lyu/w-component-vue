/*!
 * w-panel-divide-vertical v1.4.1
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self)["w-panel-divide-vertical"]=t()}(this,(function(){"use strict";var e=Array.isArray,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var r=n((function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t})),o="object"==r(t)&&t&&t.Object===Object&&t,i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=o||i||Function("return this")(),s=a.Symbol,u=Object.prototype,c=u.hasOwnProperty,l=u.toString,f=s?s.toStringTag:void 0;var v=function(e){var t=c.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=l.call(e);return r&&(t?e[f]=n:delete e[f]),o},p=Object.prototype.toString;var d=function(e){return p.call(e)},h=s?s.toStringTag:void 0;var y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":h&&h in Object(e)?v(e):d(e)};var m=function(e){return null!=e&&"object"==r(e)};var b=function(e){return"symbol"==r(e)||m(e)&&"[object Symbol]"==y(e)},_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,g=/^\w*$/;var w=function(t,n){if(e(t))return!1;var o=r(t);return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=t&&!b(t))||(g.test(t)||!_.test(t)||null!=n&&t in Object(n))};var j=function(e){var t=r(e);return null!=e&&("object"==t||"function"==t)};var x,O=function(e){if(!j(e))return!1;var t=y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},S=a["__core-js_shared__"],E=(x=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"";var P=function(e){return!!E&&E in e},L=Function.prototype.toString;var z=function(e){if(null!=e){try{return L.call(e)}catch(e){}try{return e+""}catch(e){}}return""},C=/^\[object .+?Constructor\]$/,B=Function.prototype,$=Object.prototype,N=B.toString,W=$.hasOwnProperty,T=RegExp("^"+N.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var X=function(e){return!(!j(e)||P(e))&&(O(e)?T:C).test(z(e))};var H=function(e,t){return null==e?void 0:e[t]};var Y=function(e,t){var n=H(e,t);return X(n)?n:void 0},F=Y(Object,"create");var R=function(){this.__data__=F?F(null):{},this.size=0};var A=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},M=Object.prototype.hasOwnProperty;var D=function(e){var t=this.__data__;if(F){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return M.call(t,e)?t[e]:void 0},k=Object.prototype.hasOwnProperty;var I=function(e){var t=this.__data__;return F?void 0!==t[e]:k.call(t,e)};var U=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=F&&void 0===t?"__lodash_hash_undefined__":t,this};function V(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}V.prototype.clear=R,V.prototype.delete=A,V.prototype.get=D,V.prototype.has=I,V.prototype.set=U;var q=V;var G=function(){this.__data__=[],this.size=0};var J=function(e,t){return e===t||e!=e&&t!=t};var K=function(e,t){for(var n=e.length;n--;)if(J(e[n][0],t))return n;return-1},Q=Array.prototype.splice;var Z=function(e){var t=this.__data__,n=K(t,e);return!(n<0)&&(n==t.length-1?t.pop():Q.call(t,n,1),--this.size,!0)};var ee=function(e){var t=this.__data__,n=K(t,e);return n<0?void 0:t[n][1]};var te=function(e){return K(this.__data__,e)>-1};var ne=function(e,t){var n=this.__data__,r=K(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}re.prototype.clear=G,re.prototype.delete=Z,re.prototype.get=ee,re.prototype.has=te,re.prototype.set=ne;var oe=re,ie=Y(a,"Map");var ae=function(){this.size=0,this.__data__={hash:new q,map:new(ie||oe),string:new q}};var se=function(e){var t=r(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ue=function(e,t){var n=e.__data__;return se(t)?n["string"==typeof t?"string":"hash"]:n.map};var ce=function(e){var t=ue(this,e).delete(e);return this.size-=t?1:0,t};var le=function(e){return ue(this,e).get(e)};var fe=function(e){return ue(this,e).has(e)};var ve=function(e,t){var n=ue(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pe.prototype.clear=ae,pe.prototype.delete=ce,pe.prototype.get=le,pe.prototype.has=fe,pe.prototype.set=ve;var de=pe;function he(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(he.Cache||de),n}he.Cache=de;var ye=he;var me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,be=/\\(\\)?/g,_e=function(e){var t=ye(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(me,(function(e,n,r,o){t.push(r?o.replace(be,"$1"):n||e)})),t}));var ge=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},we=s?s.prototype:void 0,je=we?we.toString:void 0;var xe=function t(n){if("string"==typeof n)return n;if(e(n))return ge(n,t)+"";if(b(n))return je?je.call(n):"";var r=n+"";return"0"==r&&1/n==-1/0?"-0":r};var Oe=function(e){return null==e?"":xe(e)};var Se=function(t,n){return e(t)?t:w(t,n)?[t]:_e(Oe(t))};var Ee=function(e){if("string"==typeof e||b(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Pe=function(e,t){for(var n=0,r=(t=Se(t,e)).length;null!=e&&n<r;)e=e[Ee(t[n++])];return n&&n==r?e:void 0};var Le=function(e,t,n){var r=null==e?void 0:Pe(e,t);return void 0===r?n:r};var ze=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Ce=/^\s+|\s+$/g,Be=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,We=parseInt;var Te=function(e){if("number"==typeof e)return e;if(b(e))return NaN;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ce,"");var n=$e.test(e);return n||Ne.test(e)?We(e.slice(2),n?2:8):Be.test(e)?NaN:+e};var Xe=function(e){return e?(e=Te(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var He=function(e){var t=Xe(e),n=t%1;return t==t?n?t-n:t:0};var Ye=function(e){return"number"==typeof e&&e==He(e)};function Fe(e){return!(!function(e){return"[object String]"===Object.prototype.toString.call(e)}(e)||""===e)}function Re(e){var t=!1;return Fe(e)?t=!isNaN(Number(e)):function(e){return"[object Number]"===Object.prototype.toString.call(e)}(e)&&(t=!0),t}function Ae(e){return Re(e)?Xe(e):0}var Me=a.isFinite,De=Math.min;var ke=function(e){var t=Math[e];return function(e,n){if(e=Te(e),(n=null==n?0:De(He(n),292))&&Me(e)){var r=(Oe(e)+"e").split("e"),o=t(r[0]+"e"+(+r[1]+n));return+((r=(Oe(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}("round");function Ie(e){return!!function(e){return!!Re(e)&&(e=Ae(e),Ye(e))}(e)&&function(e){if(!Re(e))return 0;e=Ae(e);var t=ke(e);return"0"===String(t)?0:t}(e)>0}var Ue=n((function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function i(e,t,r,i,a){if("function"!=typeof r)throw new TypeError("The listener must be a function");var s=new o(r,i||e,a),u=n?n+t:t;return e._events[u]?e._events[u].fn?e._events[u]=[e._events[u],s]:e._events[u].push(s):(e._events[u]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),s.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},s.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},s.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,t,r,o,i,a){var s=n?n+e:e;if(!this._events[s])return!1;var u,c,l=this._events[s],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,r),!0;case 4:return l.fn.call(l.context,t,r,o),!0;case 5:return l.fn.call(l.context,t,r,o,i),!0;case 6:return l.fn.call(l.context,t,r,o,i,a),!0}for(c=1,u=new Array(f-1);c<f;c++)u[c-1]=arguments[c];l.fn.apply(l.context,u)}else{var v,p=l.length;for(c=0;c<p;c++)switch(l[c].once&&this.removeListener(e,l[c].fn,void 0,!0),f){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,t);break;case 3:l[c].fn.call(l[c].context,t,r);break;case 4:l[c].fn.call(l[c].context,t,r,o);break;default:if(!u)for(v=1,u=new Array(f-1);v<f;v++)u[v-1]=arguments[v];l[c].fn.apply(l[c].context,u)}}return!0},s.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,r,o){var i=n?n+e:e;if(!this._events[i])return this;if(!t)return a(this,i),this;var s=this._events[i];if(s.fn)s.fn!==t||o&&!s.once||r&&s.context!==r||a(this,i);else{for(var u=0,c=[],l=s.length;u<l;u++)(s[u].fn!==t||o&&!s[u].once||r&&s[u].context!==r)&&c.push(s[u]);c.length?this._events[i]=1===c.length?c[0]:c:a(this,i)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s}));function Ve(){return new Ue}function qe(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t}function Ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(n),!0).forEach((function(t){ze(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ke=function(e){return!0===e||!1===e||m(e)&&"[object Boolean]"==y(e)};function Qe(e){if(!e)return"invalid event";if(!e.cancelable)return"event is not cancelable";try{window.event?e.cancelBubble=!0:e.stopPropagation(),e.preventDefault()}catch(e){}}var Ze={components:{},props:{ratio:{type:Number,default:.5},min:{type:Number,default:0},max:{type:Number,default:1},barColor:{type:String,default:"#ddd"},barBorderColor:{type:String,default:"transparent"},barSize:{type:Number,default:2},barBorderSize:{type:Number,default:3}},data:function(){return{r:null,panelWidth:0,panelHeight:0,de:null,das:null}},mounted:function(){var e=this,t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Le(t,"timeInterval",null);Ie(n)||(n=20);var r=Le(t,"tolerancePixel",null);Ie(r)||(r=1);var o,i=Ve(),a={offsetWidth:0,offsetHeight:0};if(!qe(e))return console.log("invalid f",e),null;o=setInterval((function(){var t=e();if(t){var n={offsetWidth:t.offsetWidth,offsetHeight:t.offsetHeight},o=Math.abs(a.offsetWidth-n.offsetWidth)>r,s=Math.abs(a.offsetHeight-n.offsetHeight)>r;if(o||s){var u=Je({},a);setTimeout((function(){n.offsetWidth>0&&n.offsetHeight>0&&(i.emit("resize",{sold:u,snew:n,ele:t}),i.emit("resizeWithWindow",{sold:u,snew:n,ele:t,from:"dom"}))}),1)}a=n}}),n);var s=function(e){i.emit("resizeWithWindow",{snew:a,from:"window"})};return window.addEventListener("resize",s),i.clear=function(){clearInterval(o),window.removeEventListener("resize",s)},i}((function(){return Le(e,"$el")}));t.on("resize",(function(t){e.panelWidth=t.snew.offsetWidth,e.panelHeight=t.snew.offsetHeight})),e.de=t;var n=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=null,o=null,i=null,a=null,s=null,u=null,c=null,l=null,f=null,v=null,p=!1,d=Le(n,"getHeighRatio",null);O(d)||(d=function(){return 1});var h=Le(n,"getWidthRatio",null);O(h)||(h=function(){return 1});var y=Le(n,"stopScrollPropagationForPanel",null);Ke(y)||(y=!1);var m=Le(n,"useTouchDragForPanel",null);Ke(m)||(m=!0);var b=e,_=t,g=Ve();function w(){r=function(e){var t=e.deltaY/Math.abs(e.deltaY),n=e.deltaX/Math.abs(e.deltaX);g.emit("scrollPanel",{ratioY:t,ratioX:n}),y&&Qe(e)},b.addEventListener("wheel",r),o=function(e){if(m){var t=-e.touches[0].clientY*d(),n=-e.touches[0].clientX*h();p=!0,g.emit("pressBar",{clientY:t,clientX:n})}},b.addEventListener("touchstart",o),i=function(e){if(p){var t=-e.touches[0].clientY*d(),n=-e.touches[0].clientX*h();g.emit("dragBar",{clientY:t,clientX:n}),Qe(e)}},b.addEventListener("touchmove",i),a=function(e){p&&(p=!1,g.emit("freeBar"))},b.addEventListener("touchend",a),s=function(e){p=!0,g.emit("pressBar",{clientY:e.clientY,clientX:e.clientX})},_.addEventListener("mousedown",s),u=function(e){p=!0,g.emit("pressBar",{clientY:e.touches[0].clientY,clientX:e.touches[0].clientX})},_.addEventListener("touchstart",u),c=function(e){p&&(g.emit("dragBar",{clientY:e.touches[0].clientY,clientX:e.touches[0].clientX}),Qe(e))},_.addEventListener("touchmove",c),l=function(e){p&&(p=!1,g.emit("freeBar"))},_.addEventListener("touchend",l),f=function(e){p&&g.emit("dragBar",{clientY:e.clientY,clientX:e.clientX})},window.addEventListener("mousemove",f),v=function(e){p&&(p=!1,g.emit("freeBar"),Qe(e))},window.addEventListener("mouseup",v)}function j(){b.removeEventListener("wheel",r),b.removeEventListener("touchstart",o),b.removeEventListener("touchmove",i),b.removeEventListener("touchend",a),_.removeEventListener("mousedown",s),_.removeEventListener("touchstart",u),_.removeEventListener("touchmove",c),_.removeEventListener("touchend",l),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",v)}return w(),g.clear=j,g}(e.$refs.divPanel,e.$refs.divBar,{useTouchDragForPanel:!1});n.on("dragBar",e.dragBar),e.das=n},beforeDestroy:function(){this.de&&this.de.clear(),this.das&&this.das.clear()},computed:{changeParam:function(){var e=this.ratio;return e=Math.min(e,this.max),e=Math.max(e,this.min),this.r=e,""},bw:function(){return this.barSize+2*this.barBorderSize}},methods:{dragBar:function(e){var t=e.clientY,n=this,r=n.$el.getBoundingClientRect(),o=t,i=n.$el.offsetHeight,a=0;i>0&&(a=(o-r.top)/i),a=Math.min(a,n.max),a=Math.max(a,n.min),n.r=a,n.$emit("update:ratio",a)}}};function et(e,t,n,r,o,i,a,s,u,c){"boolean"!=typeof a&&(u=s,s=a,a=!1);var l,f="function"==typeof n?n.options:n;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=l):t&&(l=a?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),l)if(f.functional){var v=f.render;f.render=function(e,t){return l.call(t),v(e,t)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,l):[l]}return n}var tt,nt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function rt(e){return function(e,t){return function(e,t){var n=nt?t.media||"default":e,r=ot[n]||(ot[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===tt&&(tt=document.head||document.getElementsByTagName("head")[0]),tt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),s=r.element.childNodes;s[i]&&r.element.removeChild(s[i]),s.length?r.element.insertBefore(a,s[i]):r.element.appendChild(a)}}}(e,t)}}var ot={};const it=Ze;var at=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{changeParam:e.changeParam}},[n("div",{ref:"divPanel",staticStyle:{position:"relative"}},[n("div",{ref:"top",style:"width:"+e.panelWidth+"px; height:"+e.r*e.panelHeight+"px;"},[e._t("top",null,{ratio:e.r,width:e.panelWidth,height:e.r*e.panelHeight})],2),e._v(" "),n("div",{ref:"divBar",style:"position:absolute; z-index:1; top:"+(e.r*e.panelHeight-e.bw/2)+"px; width:"+e.panelWidth+"px; height:"+e.barSize+"px; border-top:"+e.barBorderSize+"px solid "+e.barBorderColor+"; border-bottom:"+e.barBorderSize+"px solid "+e.barBorderColor+"; cursor:row-resize; user-select:none;"},[n("div",{style:"width:"+e.panelWidth+"px; height:"+e.barSize+"px; background-color:"+e.barColor+";"})]),e._v(" "),n("div",{ref:"bottom",style:"width:"+e.panelWidth+"px; height:"+(1-e.r)*e.panelHeight+"px;"},[e._t("bottom",null,{ratio:1-e.r,width:e.panelWidth,height:(1-e.r)*e.panelHeight})],2)])])};at._withStripped=!0;return et({render:at,staticRenderFns:[]},(function(e){e&&e("data-v-1b555616_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WPanelDivideVertical.vue"},media:void 0})}),it,"data-v-1b555616",!1,void 0,!1,rt,void 0,void 0)}));
//# sourceMappingURL=w-panel-divide-vertical.umd.js.map
