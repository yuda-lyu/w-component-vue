/*!
 * w-panel-divide-horizontal v1.4.11
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self)["w-panel-divide-horizontal"]=n()}(this,(function(){"use strict";var e=Array.isArray,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&t.path)}},t.exports),t.exports}var r=t((function(e){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n})),o="object"==r(n)&&n&&n.Object===Object&&n,i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=o||i||Function("return this")(),s=a.Symbol,u=Object.prototype,c=u.hasOwnProperty,l=u.toString,f=s?s.toStringTag:void 0;var v=function(e){var n=c.call(e,f),t=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=l.call(e);return r&&(n?e[f]=t:delete e[f]),o},d=Object.prototype.toString;var h=function(e){return d.call(e)},p=s?s.toStringTag:void 0;var y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":p&&p in Object(e)?v(e):h(e)};var m=function(e){return null!=e&&"object"==r(e)};var b=function(e){return"symbol"==r(e)||m(e)&&"[object Symbol]"==y(e)},_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,g=/^\w*$/;var w=function(n,t){if(e(n))return!1;var o=r(n);return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=n&&!b(n))||(g.test(n)||!_.test(n)||null!=t&&n in Object(t))};var j=function(e){var n=r(e);return null!=e&&("object"==n||"function"==n)};var x,O=function(e){if(!j(e))return!1;var n=y(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},S=a["__core-js_shared__"],E=(x=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"";var P=function(e){return!!E&&E in e},L=Function.prototype.toString;var z=function(e){if(null!=e){try{return L.call(e)}catch(e){}try{return e+""}catch(e){}}return""},C=/^\[object .+?Constructor\]$/,B=Function.prototype,$=Object.prototype,N=B.toString,W=$.hasOwnProperty,T=RegExp("^"+N.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var X=function(e){return!(!j(e)||P(e))&&(O(e)?T:C).test(z(e))};var H=function(e,n){return null==e?void 0:e[n]};var F=function(e,n){var t=H(e,n);return X(t)?t:void 0},R=F(Object,"create");var Y=function(){this.__data__=R?R(null):{},this.size=0};var A=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},M=Object.prototype.hasOwnProperty;var I=function(e){var n=this.__data__;if(R){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return M.call(n,e)?n[e]:void 0},D=Object.prototype.hasOwnProperty;var k=function(e){var n=this.__data__;return R?void 0!==n[e]:D.call(n,e)};var U=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=R&&void 0===n?"__lodash_hash_undefined__":n,this};function q(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}q.prototype.clear=Y,q.prototype.delete=A,q.prototype.get=I,q.prototype.has=k,q.prototype.set=U;var V=q;var G=function(){this.__data__=[],this.size=0};var J=function(e,n){return e===n||e!=e&&n!=n};var K=function(e,n){for(var t=e.length;t--;)if(J(e[t][0],n))return t;return-1},Q=Array.prototype.splice;var Z=function(e){var n=this.__data__,t=K(n,e);return!(t<0)&&(t==n.length-1?n.pop():Q.call(n,t,1),--this.size,!0)};var ee=function(e){var n=this.__data__,t=K(n,e);return t<0?void 0:n[t][1]};var ne=function(e){return K(this.__data__,e)>-1};var te=function(e,n){var t=this.__data__,r=K(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function re(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}re.prototype.clear=G,re.prototype.delete=Z,re.prototype.get=ee,re.prototype.has=ne,re.prototype.set=te;var oe=re,ie=F(a,"Map");var ae=function(){this.size=0,this.__data__={hash:new V,map:new(ie||oe),string:new V}};var se=function(e){var n=r(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var ue=function(e,n){var t=e.__data__;return se(n)?t["string"==typeof n?"string":"hash"]:t.map};var ce=function(e){var n=ue(this,e).delete(e);return this.size-=n?1:0,n};var le=function(e){return ue(this,e).get(e)};var fe=function(e){return ue(this,e).has(e)};var ve=function(e,n){var t=ue(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function de(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}de.prototype.clear=ae,de.prototype.delete=ce,de.prototype.get=le,de.prototype.has=fe,de.prototype.set=ve;var he=de;function pe(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,o=n?n.apply(this,r):r[0],i=t.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return t.cache=i.set(o,a)||i,a};return t.cache=new(pe.Cache||he),t}pe.Cache=he;var ye=pe;var me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,be=/\\(\\)?/g,_e=function(e){var n=ye(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(me,(function(e,t,r,o){n.push(r?o.replace(be,"$1"):t||e)})),n}));var ge=function(e,n){for(var t=-1,r=null==e?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o},we=s?s.prototype:void 0,je=we?we.toString:void 0;var xe=function n(t){if("string"==typeof t)return t;if(e(t))return ge(t,n)+"";if(b(t))return je?je.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var Oe=function(e){return null==e?"":xe(e)};var Se=function(n,t){return e(n)?n:w(n,t)?[n]:_e(Oe(n))};var Ee=function(e){if("string"==typeof e||b(e))return e;var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var Pe=function(e,n){for(var t=0,r=(n=Se(n,e)).length;null!=e&&t<r;)e=e[Ee(n[t++])];return t&&t==r?e:void 0};var Le=function(e,n,t){var r=null==e?void 0:Pe(e,n);return void 0===r?t:r};var ze=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},Ce=/^\s+|\s+$/g,Be=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,We=parseInt;var Te=function(e){if("number"==typeof e)return e;if(b(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ce,"");var t=$e.test(e);return t||Ne.test(e)?We(e.slice(2),t?2:8):Be.test(e)?NaN:+e};var Xe=function(e){return e?Infinity===(e=Te(e))||-Infinity===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var He=function(e){var n=Xe(e),t=n%1;return n==n?t?n-t:n:0};var Fe=function(e){return"number"==typeof e&&e==He(e)};function Re(e){return!(!function(e){return"[object String]"===Object.prototype.toString.call(e)}(e)||""===e)}function Ye(e){var n=!1;return Re(e)?n=!isNaN(Number(e)):function(e){return"[object Number]"===Object.prototype.toString.call(e)}(e)&&(n=!0),n}function Ae(e){return Ye(e)?Xe(e):0}var Me=a.isFinite,Ie=Math.min;var De=function(e){var n=Math[e];return function(e,t){if(e=Te(e),(t=null==t?0:Ie(He(t),292))&&Me(e)){var r=(Oe(e)+"e").split("e"),o=n(r[0]+"e"+(+r[1]+t));return+((r=(Oe(o)+"e").split("e"))[0]+"e"+(+r[1]-t))}return n(e)}}("round");function ke(e){return!!function(e){return!!Ye(e)&&(e=Ae(e),Fe(e))}(e)&&function(e){if(!Ye(e))return 0;e=Ae(e);var n=De(e);return"0"===String(n)?0:n}(e)>0}var Ue=t((function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}function o(e,n,t){this.fn=e,this.context=n,this.once=t||!1}function i(e,n,r,i,a){if("function"!=typeof r)throw new TypeError("The listener must be a function");var s=new o(r,i||e,a),u=t?t+n:n;return e._events[u]?e._events[u].fn?e._events[u]=[e._events[u],s]:e._events[u].push(s):(e._events[u]=s,e._eventsCount++),e}function a(e,n){0==--e._eventsCount?e._events=new r:delete e._events[n]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(t=!1)),s.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)n.call(e,r)&&o.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},s.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},s.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,n,r,o,i,a){var s=t?t+e:e;if(!this._events[s])return!1;var u,c,l=this._events[s],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,n),!0;case 3:return l.fn.call(l.context,n,r),!0;case 4:return l.fn.call(l.context,n,r,o),!0;case 5:return l.fn.call(l.context,n,r,o,i),!0;case 6:return l.fn.call(l.context,n,r,o,i,a),!0}for(c=1,u=new Array(f-1);c<f;c++)u[c-1]=arguments[c];l.fn.apply(l.context,u)}else{var v,d=l.length;for(c=0;c<d;c++)switch(l[c].once&&this.removeListener(e,l[c].fn,void 0,!0),f){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,n);break;case 3:l[c].fn.call(l[c].context,n,r);break;case 4:l[c].fn.call(l[c].context,n,r,o);break;default:if(!u)for(v=1,u=new Array(f-1);v<f;v++)u[v-1]=arguments[v];l[c].fn.apply(l[c].context,u)}}return!0},s.prototype.on=function(e,n,t){return i(this,e,n,t,!1)},s.prototype.once=function(e,n,t){return i(this,e,n,t,!0)},s.prototype.removeListener=function(e,n,r,o){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return a(this,i),this;var s=this._events[i];if(s.fn)s.fn!==n||o&&!s.once||r&&s.context!==r||a(this,i);else{for(var u=0,c=[],l=s.length;u<l;u++)(s[u].fn!==n||o&&!s[u].once||r&&s[u].context!==r)&&c.push(s[u]);c.length?this._events[i]=1===c.length?c[0]:c:a(this,i)}return this},s.prototype.removeAllListeners=function(e){var n;return e?(n=t?t+e:e,this._events[n]&&a(this,n)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,e.exports=s}));function qe(){return new Ue}function Ve(e){var n=Object.prototype.toString.call(e);return"[object Function]"===n||"[object AsyncFunction]"===n}function Ge(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Je(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ge(Object(t),!0).forEach((function(n){ze(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ge(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Ke=function(e){return!0===e||!1===e||m(e)&&"[object Boolean]"==y(e)};function Qe(e){if(!e)return"invalid event";if(!e.cancelable)return"event is not cancelable";try{window.event?e.cancelBubble=!0:e.stopPropagation(),e.preventDefault()}catch(e){}}var Ze={components:{},props:{ratio:{type:Number,default:.5},min:{type:Number,default:0},max:{type:Number,default:1},barColor:{type:String,default:"#ddd"},barBorderColor:{type:String,default:"transparent"},barSize:{type:Number,default:2},barBorderSize:{type:Number,default:3}},data:function(){return{r:null,panelWidth:0,panelHeight:0,de:null,das:null}},mounted:function(){var e=this,n=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Le(n,"timeInterval",null);ke(t)||(t=20);var r=Le(n,"tolerancePixel",null);ke(r)||(r=1);var o,i=qe(),a={offsetWidth:0,offsetHeight:0};if(!Ve(e))return console.log("invalid f",e),null;o=setInterval((function(){var n=e();if(n){var t={offsetWidth:n.offsetWidth,offsetHeight:n.offsetHeight},o=Math.abs(a.offsetWidth-t.offsetWidth)>r,s=Math.abs(a.offsetHeight-t.offsetHeight)>r;if(o||s){var u=Je({},a);setTimeout((function(){t.offsetWidth>0&&t.offsetHeight>0&&(i.emit("resize",{sold:u,snew:t,ele:n}),i.emit("resizeWithWindow",{sold:u,snew:t,ele:n,from:"dom"}))}),1)}a=t}}),t);var s=function(e){i.emit("resizeWithWindow",{snew:a,from:"window"})};return window.addEventListener("resize",s),i.clear=function(){clearInterval(o),window.removeEventListener("resize",s)},i}((function(){return Le(e,"$el")}));n.on("resize",(function(n){e.panelWidth=n.snew.offsetWidth,e.panelHeight=n.snew.offsetHeight})),e.de=n;var t=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=null,o=null,i=null,a=null,s=null,u=null,c=null,l=null,f=null,v=null,d=!1,h=Le(t,"getHeighRatio",null);O(h)||(h=function(){return 1});var p=Le(t,"getWidthRatio",null);O(p)||(p=function(){return 1});var y=Le(t,"stopScrollPropagationForPanel",null);Ke(y)||(y=!1);var m=Le(t,"useTouchDragForPanel",null);Ke(m)||(m=!0);var b=e,_=n,g=qe();function w(){r=function(e){var n=e.deltaY/Math.abs(e.deltaY),t=e.deltaX/Math.abs(e.deltaX);g.emit("scrollPanel",{ratioY:n,ratioX:t}),y&&Qe(e)},b.addEventListener("wheel",r),o=function(e){if(m){var n=-e.touches[0].clientY*h(),t=-e.touches[0].clientX*p();d=!0,g.emit("pressBar",{clientY:n,clientX:t})}},b.addEventListener("touchstart",o),i=function(e){if(d){var n=-e.touches[0].clientY*h(),t=-e.touches[0].clientX*p();g.emit("dragBar",{clientY:n,clientX:t}),Qe(e)}},b.addEventListener("touchmove",i),a=function(e){d&&(d=!1,g.emit("freeBar"))},b.addEventListener("touchend",a),s=function(e){d=!0,g.emit("pressBar",{clientY:e.clientY,clientX:e.clientX})},_.addEventListener("mousedown",s),u=function(e){d=!0,g.emit("pressBar",{clientY:e.touches[0].clientY,clientX:e.touches[0].clientX})},_.addEventListener("touchstart",u),c=function(e){d&&(g.emit("dragBar",{clientY:e.touches[0].clientY,clientX:e.touches[0].clientX}),Qe(e))},_.addEventListener("touchmove",c),l=function(e){d&&(d=!1,g.emit("freeBar"))},_.addEventListener("touchend",l),f=function(e){d&&g.emit("dragBar",{clientY:e.clientY,clientX:e.clientX})},window.addEventListener("mousemove",f),v=function(e){d&&(d=!1,g.emit("freeBar"),Qe(e))},window.addEventListener("mouseup",v)}function j(){b.removeEventListener("wheel",r),b.removeEventListener("touchstart",o),b.removeEventListener("touchmove",i),b.removeEventListener("touchend",a),_.removeEventListener("mousedown",s),_.removeEventListener("touchstart",u),_.removeEventListener("touchmove",c),_.removeEventListener("touchend",l),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",v)}return w(),g.clear=j,g}(e.$refs.divPanel,e.$refs.divBar,{useTouchDragForPanel:!1});t.on("dragBar",e.dragBar),e.das=t},beforeDestroy:function(){this.de&&this.de.clear(),this.das&&this.das.clear()},computed:{changeParam:function(){var e=this.ratio;return e=Math.min(e,this.max),e=Math.max(e,this.min),this.r=e,""},bw:function(){return this.barSize+2*this.barBorderSize}},methods:{dragBar:function(e){var n=e.clientX,t=this,r=t.$el.getBoundingClientRect(),o=n,i=t.$el.offsetWidth,a=0;i>0&&(a=(o-r.left)/i),a=Math.min(a,t.max),a=Math.max(a,t.min),t.r=a,t.$emit("update:ratio",a)}}};function en(e,n,t,r,o,i,a,s,u,c){"boolean"!=typeof a&&(u=s,s=a,a=!1);var l,f="function"==typeof t?t.options:t;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=l):n&&(l=a?function(e){n.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,s(e))}),l)if(f.functional){var v=f.render;f.render=function(e,n){return l.call(n),v(e,n)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,l):[l]}return t}var nn,tn="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function rn(e){return function(e,n){return function(e,n){var t=tn?n.media||"default":e,r=on[t]||(on[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var o=n.source;if(n.map&&(o+="\n/*# sourceURL="+n.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===nn&&(nn=document.head||document.getElementsByTagName("head")[0]),nn.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),s=r.element.childNodes;s[i]&&r.element.removeChild(s[i]),s.length?r.element.insertBefore(a,s[i]):r.element.appendChild(a)}}}(e,n)}}var on={};const an=Ze;var sn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{changeParam:e.changeParam}},[t("div",{ref:"divPanel",staticStyle:{position:"relative",display:"flex"}},[t("div",{ref:"left",style:"width:"+e.r*e.panelWidth+"px; height:"+e.panelHeight+"px;"},[e._t("left",null,{ratio:e.r,width:e.r*e.panelWidth,height:e.panelHeight})],2),e._v(" "),t("div",{ref:"divBar",style:"position:absolute; z-index:1; left:"+(e.r*e.panelWidth-e.bw/2)+"px; width:"+e.bw+"px; height:"+e.panelHeight+"px; border-left:"+e.barBorderSize+"px solid "+e.barBorderColor+"; border-right:"+e.barBorderSize+"px solid "+e.barBorderColor+"; cursor:col-resize; user-select:none;"},[t("div",{style:"width:"+e.barSize+"px; height:"+e.panelHeight+"px; background-color:"+e.barColor+";"})]),e._v(" "),t("div",{ref:"right",style:"width:"+(1-e.r)*e.panelWidth+"px; height:"+e.panelHeight+"px;"},[e._t("right",null,{ratio:1-e.r,width:(1-e.r)*e.panelWidth,height:e.panelHeight})],2)])])};sn._withStripped=!0;return en({render:sn,staticRenderFns:[]},(function(e){e&&e("data-v-4ccf9779_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WPanelDivideHorizontal.vue"},media:void 0})}),an,"data-v-4ccf9779",false,undefined,!1,rn,void 0,void 0)}));
//# sourceMappingURL=w-panel-divide-horizontal.umd.js.map
