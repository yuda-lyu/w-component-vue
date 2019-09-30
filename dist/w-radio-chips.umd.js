/*!
 * w-radio-chips v1.1.30
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global['w-radio-chips'] = factory());
}(this, function () { 'use strict';

    // Material Design Icons v4.4.95
    var mdiCheckCircle="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z";

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /**
     * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
     * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''
     * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24
     */
    var script = {
      props: {
        icon: {
          type: String,
          default: ''
        },
        color: {
          type: String,
          default: ''
        },
        size: {
          type: Number,
          default: 24
        }
      },
      data: function data() {
        return {};
      },
      mounted: function mounted() {},
      computed: {
        useIcon: function useIcon() {
          //console.log('computed useIcon')
          var vo = this;

          if (vo.icon.indexOf('fa-') >= 0) {
            return vo.icon + ' fa-fw';
          }

          return vo.icon;
        },
        useSize: function useSize() {
          //console.log('computed useSize')
          var vo = this; //size

          var size = vo.size;

          if (vo.icon.indexOf('fa-') >= 0) {
            return size - 4;
          }

          return size;
        },
        useStyle: function useStyle() {
          //console.log('computed useStyle')
          //let vo = this
          var s = {
            'vertical-align': 'middle'
          }; // s['transform'] = ''
          // if (vo.icon.indexOf('fa-') >= 0) {
          //     s['transform'] += ' translateY(-1px)'
          // }
          // s['transform'] += ' translateX(-1px)'

          return s;
        }
      },
      methods: {}
    };

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
    /* server only */
    , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
      } // Vue.extend constructor export interop.


      var options = typeof script === 'function' ? script.options : script; // render functions

      if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true; // functional template

        if (isFunctionalTemplate) {
          options.functional = true;
        }
      } // scopedId


      if (scopeId) {
        options._scopeId = scopeId;
      }

      var hook;

      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context || // cached call
          this.$vnode && this.$vnode.ssrContext || // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true

          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          } // inject component styles


          if (style) {
            style.call(this, createInjectorSSR(context));
          } // register component module identifier for async chunk inference


          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        }; // used by ssr in case component is cached and beforeCreate
        // never gets called


        options._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function () {
          style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
        } : function (context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook) {
        if (options.functional) {
          // register for functional component in vue file
          var originalRender = options.render;

          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }

      return script;
    }

    var normalizeComponent_1 = normalizeComponent;

    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    function createInjector(context) {
      return function (id, style) {
        return addStyle(id, style);
      };
    }

    var HEAD;
    var styles = {};

    function addStyle(id, css) {
      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = {
        ids: new Set(),
        styles: []
      });

      if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

          code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
        }

        if (!style.element) {
          style.element = document.createElement('style');
          style.element.type = 'text/css';
          if (css.media) style.element.setAttribute('media', css.media);

          if (HEAD === undefined) {
            HEAD = document.head || document.getElementsByTagName('head')[0];
          }

          HEAD.appendChild(style.element);
        }

        if ('styleSheet' in style.element) {
          style.styles.push(code);
          style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
        } else {
          var index = style.ids.size - 1;
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    }

    var browser = createInjector;

    /* script */
    const __vue_script__ = script;

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _vm.icon !== ""
        ? _c(
            "div",
            {
              staticStyle: {
                display: "flex",
                "align-items": "center",
                "user-select": "none"
              }
            },
            [
              _c(
                "v-icon",
                {
                  style: _vm.useStyle,
                  attrs: { color: _vm.color, size: _vm.useSize }
                },
                [_vm._v("\n        " + _vm._s(_vm.useIcon) + "\n    ")]
              )
            ],
            1
          )
        : _vm._e()
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = function (inject) {
        if (!inject) return
        inject("data-v-c4e40804_0", { source: "\n.v-icon[data-v-c4e40804] {\r\n    transition: all 0.7s;\n}\r\n", map: {"version":3,"sources":["D:\\開源-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],"names":[],"mappings":";AA6FA;IACA,oBAAA;AACA","file":"WIcon.vue","sourcesContent":["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__ = "data-v-c4e40804";
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject SSR */
      

      
      var WIcon = normalizeComponent_1(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        browser,
        undefined
      );

    //
    /**
     * @vue-prop {Array} items 輸入全部可選字串陣列
     * @vue-prop {String} value 輸入單選字串
     * @vue-prop {String} [textColor='white'] 輸入已選項目之文字顏色字串，預設'white'
     * @vue-prop {String} [backgroundColor='purple lighten-1'] 輸入已選項目之文字背景顏色字串，預設'purple lighten-1'
     * @vue-prop {String} [iconColor='white'] 輸入已選項目之文字背景顏色字串，預設'white'
     * @vue-prop {String} [textcolorInactive='grey darken-2'] 輸入未選項目之文字顏色字串，預設'grey darken-2'
     * @vue-prop {String} [bgcolorInactive='grey lighten-5'] 輸入未選項目之文字背景顏色字串，預設'grey lighten-5'
     * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
     */

    var script$1 = {
      components: {
        WIcon: WIcon
      },
      props: {
        items: {
          type: Array
        },
        value: {
          type: String
        },
        textColor: {
          type: String,
          default: 'white'
        },
        backgroundColor: {
          type: String,
          default: 'purple lighten-1'
        },
        iconColor: {
          type: String,
          default: 'white'
        },
        textcolorInactive: {
          type: String,
          default: 'grey darken-2'
        },
        bgcolorInactive: {
          type: String,
          default: 'grey lighten-5'
        },
        editable: {
          type: Boolean,
          default: true
        }
      },
      data: function data() {
        return {
          mdiCheckCircle: mdiCheckCircle
        };
      },
      mounted: function mounted() {},
      computed: {},
      methods: {
        getSelected: function getSelected(item) {
          return this.value === item;
        },
        getBgColor: function getBgColor(item) {
          if (this.getSelected(item)) {
            return this.backgroundColor;
          }

          return this.bgcolorInactive;
        },
        getTextColor: function getTextColor(item) {
          if (this.getSelected(item)) {
            return this.textColor;
          }

          return this.textcolorInactive;
        },
        pull: function pull(ar, item) {
          var i = ar.indexOf(item);
          ar.splice(i, 1);
          return ar;
        },
        toggleState: function toggleState(item) {
          //console.log('methods toggleState', item)
          var vo = this;

          if (vo.editable === false) {
            return;
          } //setTimeout


          setTimeout(function () {
            //emit
            vo.$emit('input', item);
          }, 1);
        }
      }
    };

    /* script */
    const __vue_script__$1 = script$1;

    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { style: { opacity: _vm.editable ? 1 : 0.65 } },
        [
          _vm._l(_vm.items, function(item, kitem) {
            return [
              _c(
                "v-chip",
                {
                  key: kitem,
                  staticClass: "v-chpi-modify",
                  attrs: {
                    small: "",
                    "text-color": _vm.getTextColor(item),
                    color: _vm.getBgColor(item)
                  },
                  on: {
                    click: function($event) {
                      return _vm.toggleState(item)
                    }
                  }
                },
                [
                  _vm.getSelected(item)
                    ? _c(
                        "div",
                        {
                          staticStyle: {
                            "margin-left": "-9px",
                            "margin-right": "9px"
                          }
                        },
                        [
                          _c("w-icon", {
                            attrs: {
                              icon: _vm.mdiCheckCircle,
                              color: _vm.iconColor,
                              size: 20
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        height: "24px",
                        "line-height": "24px",
                        "font-size": "0.875rem"
                      }
                    },
                    [_vm._v(_vm._s(item))]
                  )
                ]
              )
            ]
          })
        ],
        2
      )
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

      /* style */
      const __vue_inject_styles__$1 = function (inject) {
        if (!inject) return
        inject("data-v-542453ea_0", { source: "\n.v-chpi-modify[data-v-542453ea] {\r\n    vertical-align: middle;\r\n    margin:10px 10px 10px 0px;\r\n    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n", map: {"version":3,"sources":["D:\\開源-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WRadioChips.vue"],"names":[],"mappings":";AA4IA;IACA,sBAAA;IACA,yBAAA;IACA,kGAAA;AACA","file":"WRadioChips.vue","sourcesContent":["<template>\r\n    <div :style=\"{'opacity':editable?1:0.65}\">\r\n\r\n        <template v-for=\"(item,kitem) in items\">\r\n\r\n            <v-chip\r\n                class=\"v-chpi-modify\"\r\n                small\r\n                :text-color=\"getTextColor(item)\"\r\n                :color=\"getBgColor(item)\"\r\n                @click=\"toggleState(item)\"\r\n                :key=\"kitem\"\r\n            >\r\n\r\n                <div style=\"margin-left:-9px; margin-right:9px;\" v-if=\"getSelected(item)\">\r\n                    <w-icon\r\n                        :icon=\"mdiCheckCircle\"\r\n                        :color=\"iconColor\"\r\n                        :size=\"20\"\r\n                    ></w-icon>\r\n                </div>\r\n\r\n                <div style=\"height:24px; line-height:24px; font-size:0.875rem;\">{{item}}</div>\r\n\r\n            </v-chip>\r\n\r\n        </template>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport { mdiCheckCircle } from '@mdi/js'\r\nimport WIcon from './WIcon.vue'\r\n\r\n/**\r\n * @vue-prop {Array} items 輸入全部可選字串陣列\r\n * @vue-prop {String} value 輸入單選字串\r\n * @vue-prop {String} [textColor='white'] 輸入已選項目之文字顏色字串，預設'white'\r\n * @vue-prop {String} [backgroundColor='purple lighten-1'] 輸入已選項目之文字背景顏色字串，預設'purple lighten-1'\r\n * @vue-prop {String} [iconColor='white'] 輸入已選項目之文字背景顏色字串，預設'white'\r\n * @vue-prop {String} [textcolorInactive='grey darken-2'] 輸入未選項目之文字顏色字串，預設'grey darken-2'\r\n * @vue-prop {String} [bgcolorInactive='grey lighten-5'] 輸入未選項目之文字背景顏色字串，預設'grey lighten-5'\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon\r\n    },\r\n    props: {\r\n        items: {\r\n            type: Array,\r\n        },\r\n        value: {\r\n            type: String,\r\n        },\r\n        textColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        backgroundColor: {\r\n            type: String,\r\n            default: 'purple lighten-1',\r\n        },\r\n        iconColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        textcolorInactive: {\r\n            type: String,\r\n            default: 'grey darken-2',\r\n        },\r\n        bgcolorInactive: {\r\n            type: String,\r\n            default: 'grey lighten-5',\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            mdiCheckCircle,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n    },\r\n    methods: {\r\n\r\n        getSelected: function(item) {\r\n            return this.value === item\r\n        },\r\n\r\n        getBgColor: function(item) {\r\n            if (this.getSelected(item)) {\r\n                return this.backgroundColor\r\n            }\r\n            return this.bgcolorInactive\r\n        },\r\n\r\n        getTextColor: function(item) {\r\n            if (this.getSelected(item)) {\r\n                return this.textColor\r\n            }\r\n            return this.textcolorInactive\r\n        },\r\n\r\n        pull: function(ar, item) {\r\n            let i = ar.indexOf(item)\r\n            ar.splice(i, 1)\r\n            return ar\r\n        },\r\n\r\n        toggleState: function(item) {\r\n            //console.log('methods toggleState', item)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //emit\r\n                vo.$emit('input', item)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.v-chpi-modify {\r\n    vertical-align: middle;\r\n    margin:10px 10px 10px 0px;\r\n    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$1 = "data-v-542453ea";
      /* module identifier */
      const __vue_module_identifier__$1 = undefined;
      /* functional template */
      const __vue_is_functional_template__$1 = false;
      /* style inject SSR */
      

      
      var WRadioChips = normalizeComponent_1(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        browser,
        undefined
      );

    return WRadioChips;

}));
//# sourceMappingURL=w-radio-chips.umd.js.map
