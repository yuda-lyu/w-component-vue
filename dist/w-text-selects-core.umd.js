/*!
 * w-text-selects-core v1.1.30
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global['w-text-selects-core'] = factory());
}(this, function () { 'use strict';

    // Material Design Icons v4.4.95
    var mdiMenuDown="M7,10L12,15L17,10H7Z";

    //
    /**
     * @vue-prop {Array} [items=[]] 輸入可選項目陣列，預設[]
     * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null
     * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
     */

    var script = {
      props: {
        items: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        value: {
          type: [Object, String, Number],
          default: null
        },
        editable: {
          type: Boolean,
          default: true
        }
      },
      data: function data() {
        return {
          mdiMenuDown: mdiMenuDown,
          value_trans: {}
        };
      },
      mounted: function mounted() {},
      computed: {
        changeParam: function changeParam() {
          //console.log('computed changeParam')
          var vo = this; //value_trans

          vo.value_trans = vo.value;
          return '';
        }
      },
      methods: {
        changeContent: function changeContent(value) {
          //console.log('methods changeContent', value)
          var vo = this; //setTimeout

          setTimeout(function () {
            //emit
            vo.$emit('input', value);
          }, 1);
        }
      }
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
      return _c(
        "div",
        {
          staticClass: "CSSTextSelectsCore",
          attrs: { changeParam: _vm.changeParam }
        },
        [
          _c(
            "div",
            { staticStyle: { margin: "-10px -18px -10px -12px" } },
            [
              _c("v-autocomplete", {
                staticStyle: { margin: "0px", padding: "0px" },
                attrs: {
                  "single-line": "",
                  "hide-no-data": "",
                  "hide-details": "",
                  dense: "",
                  solo: "",
                  flat: "",
                  "cache-items": "",
                  "background-color": "transparent",
                  "item-text": "text",
                  "item-value": "value",
                  "return-object": "",
                  "append-icon": _vm.mdiMenuDown,
                  readonly: !_vm.editable,
                  items: _vm.items,
                  value: _vm.value_trans
                },
                on: {
                  input: _vm.changeContent,
                  focus: function($event) {
                    return _vm.$emit("update:focused", true)
                  },
                  blur: function($event) {
                    return _vm.$emit("update:focused", false)
                  }
                }
              })
            ],
            1
          )
        ]
      )
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = function (inject) {
        if (!inject) return
        inject("data-v-241c6f1a_0", { source: "\n[data-v-241c6f1a] div {\r\n    cursor: pointer;\n}\n[data-v-241c6f1a] input {\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    color: inherit;\r\n    line-height: inherit;\r\n    max-height: inherit; /* for ie11 */\n}\n[data-v-241c6f1a] .v-text-field input {\r\n    line-height: inherit;\n}\r\n", map: {"version":3,"sources":["D:\\開源-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WTextSelectsCore.vue"],"names":[],"mappings":";AAmGA;IACA,eAAA;AACA;AACA;IACA,eAAA;IACA,eAAA;IACA,cAAA;IACA,oBAAA;IACA,mBAAA,EAAA,aAAA;AACA;AACA;IACA,oBAAA;AACA","file":"WTextSelectsCore.vue","sourcesContent":["<template>\r\n    <div class=\"CSSTextSelectsCore\" :changeParam=\"changeParam\">\r\n\r\n        <div style=\"margin:-10px -18px -10px -12px;\">\r\n\r\n            <v-autocomplete\r\n                style=\"margin:0px; padding:0px;\"\r\n                single-line\r\n                hide-no-data\r\n                hide-details\r\n                dense\r\n                solo\r\n                flat\r\n                cache-items\r\n                background-color=\"transparent\"\r\n                item-text=\"text\"\r\n                item-value=\"value\"\r\n                return-object\r\n                :append-icon=\"mdiMenuDown\"\r\n                :readonly=\"!editable\"\r\n                :items=\"items\"\r\n                :value=\"value_trans\"\r\n                @input=\"changeContent\"\r\n                @focus=\"$emit('update:focused', true)\"\r\n                @blur=\"$emit('update:focused', false)\"\r\n            ></v-autocomplete>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport { mdiMenuDown } from '@mdi/js'\r\n\r\n/**\r\n * @vue-prop {Array} [items=[]] 輸入可選項目陣列，預設[]\r\n * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n */\r\nexport default {\r\n    props: {\r\n        items: {\r\n            type: Array,\r\n            default: () => [],\r\n        },\r\n        value: {\r\n            type: [Object, String, Number],\r\n            default: null,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            mdiMenuDown,\r\n            value_trans: {},\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //value_trans\r\n            vo.value_trans = vo.value\r\n\r\n            return ''\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        changeContent: function (value) {\r\n            //console.log('methods changeContent', value)\r\n\r\n            let vo = this\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //emit\r\n                vo.$emit('input', value)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n::v-deep div {\r\n    cursor: pointer;\r\n}\r\n::v-deep input {\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    color: inherit;\r\n    line-height: inherit;\r\n    max-height: inherit; /* for ie11 */\r\n}\r\n::v-deep .v-text-field input {\r\n    line-height: inherit;\r\n}\r\n</style>\r\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__ = "data-v-241c6f1a";
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject SSR */
      

      
      var WTextSelectsCore = normalizeComponent_1(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        browser,
        undefined
      );

    return WTextSelectsCore;

}));
//# sourceMappingURL=w-text-selects-core.umd.js.map
