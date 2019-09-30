/*!
 * w-progress-circle v1.1.30
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global['w-progress-circle'] = factory());
}(this, function () { 'use strict';

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
    //
    //

    /**
     * @vue-prop {String} [text=''] 輸入文字字串，預設''
     * @vue-prop {Number} [value=0] 輸入數值，介於0~100之間，預設0
     * @vue-prop {String} [color='purple lighten-1'] 輸入環狀圓條顏色字串，預設'purple lighten-1'
     * @vue-prop {Number} [size=120] 輸入進度條外徑寬度，單位為px，預設120
     * @vue-prop {Number} [width=10] 輸入環狀圓條寬度，單位為px，預設10
     * @vue-prop {String} [tooltip=text] 輸入提示文字字串，預設''
     */
    var script = {
      props: {
        text: {
          type: String,
          default: ''
        },
        value: {
          type: Number,
          default: 0
        },
        color: {
          type: String,
          default: 'purple lighten-1'
        },
        size: {
          type: Number,
          default: 120
        },
        width: {
          type: Number,
          default: 10
        },
        tooltip: {
          type: String,
          default: ''
        }
      },
      data: function data() {
        return {};
      },
      mounted: function mounted() {},
      computed: {
        styleProg: function styleProg() {
          //console.log('computed styleProg')
          var vo = this; //size

          var fs = vo.size / 5.4;
          var ts = (vo.size - 26) / 94 * 0.25 + 0.75;
          var s = {
            'font-size': fs + 'pt',
            'transform': "scale(".concat(ts, ")")
          };
          return s;
        },
        styleText: function styleText() {
          //console.log('computed styleText')
          var vo = this; //size

          var fs = vo.size / 12;
          var ts = 1.2;
          var s = {
            'color': '#666',
            'font-size': fs + 'pt',
            'transform': "scale(".concat(ts, ")")
          };
          return s;
        }
      },
      methods: {
        clickBtn: function clickBtn() {
          //console.log('methods clickBtn')
          var vo = this; //setTimeout

          setTimeout(function () {
            //emit
            vo.$emit('click');
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
        { staticStyle: { display: "inline-block" } },
        [
          _c(
            "v-tooltip",
            {
              attrs: {
                bottom: "",
                transition: "slide-y-transition",
                disabled: _vm.tooltip === ""
              },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on;
                    return [
                      _c(
                        "v-progress-circular",
                        _vm._g(
                          {
                            attrs: {
                              rotate: -90,
                              size: _vm.size,
                              width: _vm.width,
                              color: _vm.color,
                              value: _vm.value
                            }
                          },
                          on
                        ),
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "text-align": "center",
                                transform: "translateY(-2%)"
                              }
                            },
                            [
                              _c("div", { style: [_vm.styleProg] }, [
                                _vm._v(_vm._s(_vm.value) + "%")
                              ]),
                              _vm._v(" "),
                              _c("div", { style: [_vm.styleText] }, [
                                _vm._v(_vm._s(_vm.text))
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  }
                }
              ])
            },
            [_vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.tooltip))])]
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = function (inject) {
        if (!inject) return
        inject("data-v-3cc6cb3a_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"WProgressCircle.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__ = "data-v-3cc6cb3a";
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject SSR */
      

      
      var WProgressCircle = normalizeComponent_1(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        browser,
        undefined
      );

    return WProgressCircle;

}));
//# sourceMappingURL=w-progress-circle.umd.js.map
