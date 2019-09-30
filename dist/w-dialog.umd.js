/*!
 * w-dialog v1.1.30
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['w-dialog'] = factory());
}(this, function () { 'use strict';

  // Material Design Icons v4.4.95
  var mdiCheckCircle="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z";var mdiCheckerboard="M3,3H21V21H3V3M5,5V12H12V19H19V12H12V5H5Z";var mdiClose="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /** Detect free variable `global` from Node.js. */

  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */

  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = _freeGlobal || freeSelf || Function('return this')();
  var _root = root;

  /** Built-in value references. */

  var _Symbol2 = _root.Symbol;
  var _Symbol = _Symbol2;

  /** Used for built-in method references. */

  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /** Built-in value references. */

  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */

  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }

    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString$1 = objectProto$1.toString;
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */

  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */

  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  /** Built-in value references. */

  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && _typeof(value) == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */

  var boolTag = '[object Boolean]';
  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */

  function isBoolean(value) {
    return value === true || value === false || isObjectLike_1(value) && _baseGetTag(value) == boolTag;
  }

  var isBoolean_1 = isBoolean;

  /**
   * 判斷是否為boolean
   *
   * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isbol.test.js Github}
   * @memberOf wsemi
   * @param {*} v 輸入任意資料
   * @returns {Boolean} 回傳判斷布林值
   * @example
   * isbol(false)
   * // => true
   */

  function isbol(v) {
    return isBoolean_1(v);
  }

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
   * @vue-prop {String} [tooltip=text] 輸入提示文字字串，預設''
   * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
   * @vue-prop {String} [iconColor=''] 輸入圖標背景顏色字串，預設''，即透明
   * @vue-prop {String} [buttonColor='grey lighten-3'] 輸入按鈕背景顏色字串，預設'grey lighten-3'
   * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
   * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
   * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
   * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
   */

  var script$1 = {
    components: {
      WIcon: WIcon
    },
    props: {
      tooltip: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      iconColor: {
        type: String,
        default: 'grey darken-1'
      },
      buttonColor: {
        type: String,
        default: 'grey darken-1'
      },
      shadow: {
        type: Boolean,
        default: true
      },
      small: {
        type: Boolean,
        default: true
      },
      loading: {
        type: Boolean,
        default: false
      },
      editable: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {};
    },
    mounted: function mounted() {},
    computed: {},
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

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
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
                      "v-btn",
                      _vm._g(
                        {
                          attrs: {
                            icon: "",
                            large: !_vm.small,
                            elevation: _vm.shadow ? 4 : 0,
                            color: _vm.buttonColor,
                            loading: _vm.loading,
                            disabled: !_vm.editable
                          },
                          on: { click: _vm.clickBtn }
                        },
                        on
                      ),
                      [
                        _c("w-icon", {
                          attrs: { icon: _vm.icon, color: _vm.iconColor }
                        })
                      ],
                      1
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
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-5b9fc89a_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"WButtonCircle.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = "data-v-5b9fc89a";
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject SSR */
    

    
    var WButtonCircle = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      browser,
      undefined
    );

  //
  /**
   * @vue-prop {Boolean} [show=false] 輸入是否顯示，預設false
   * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
   * @vue-prop {String} [title=''] 輸入彈窗標題字串，預設''
   * @vue-prop {String} [headerColor='light-blue darken-3'] 輸入彈窗標題列背景顏色字串，預設'light-blue darken-3'
   * @vue-prop {Array} [headerBtns=[]] 輸入彈窗標題列自訂按鈕陣列，預設[]，各元素為物件，需有'icon'欄位值為字串、'tooltip'欄位值為字串、'evName'欄位值為字串，其中按鈕被click時會觸發彈窗的clickBtns事件(監聽@clickBtns)，裡面會提供evName供辨識觸發按鈕之用
   * @vue-prop {Boolean} [hasSaveBtn=true] 輸入是否顯示儲存按鈕，預設true
   * @vue-prop {String} [saveBtnTooltip='儲存'] 輸入儲存按鈕的提示文字字串，預設'儲存'
   * @vue-prop {Boolean} [hasCloseBtn=true] 輸入是否顯示關閉按鈕，預設true
   * @vue-prop {String} [closeBtnTooltip='關閉'] 輸入關閉按鈕的提示文字字串，預設'關閉'
   * @vue-prop {Number} [widthMax=1000] 輸入彈窗最大寬度，單位為px，預設1000，當裝置寬度小於彈窗最大寬度，則彈窗改為全螢幕顯示
   */

  var script$2 = {
    components: {
      WButtonCircle: WButtonCircle
    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      headerColor: {
        type: String,
        default: 'light-blue darken-3'
      },
      headerBtns: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      hasSaveBtn: {
        type: Boolean,
        default: true
      },
      saveBtnTooltip: {
        type: String,
        default: '儲存'
      },
      hasCloseBtn: {
        type: Boolean,
        default: true
      },
      closeBtnTooltip: {
        type: String,
        default: '關閉'
      },
      widthMax: {
        type: Number,
        default: 1000
      }
    },
    data: function data() {
      return {
        mdiCheckCircle: mdiCheckCircle,
        mdiClose: mdiClose,
        mdiCheckerboard: mdiCheckerboard,
        show_trans: null,
        fullscreen: false
      };
    },
    mounted: function mounted() {},
    watch: {
      show: function show(value) {
        //console.log('watch show', value)
        var vo = this; //當show改為true時自動捲至頂部

        if (!vo.show_trans && value) {
          setTimeout(function () {
            vo.$refs.scrollZone.scrollTop = 0;
          }, 1);
        }
      }
    },
    computed: {
      changeParam: function changeParam() {
        //console.log('computed changeParam')
        var vo = this; //show_trans

        vo.show_trans = vo.show;
        return '';
      }
    },
    methods: {
      changeSize: function changeSize() {
        //console.log('methods changeSize')
        var vo = this;

        if (vo.widthMax > window.innerWidth) {
          vo.fullscreen = true;
        } else {
          vo.fullscreen = false;
        }
      },
      clickBtns: function clickBtns(evName) {
        //console.log('methods clickBtns', evName)
        var vo = this; //setTimeout

        setTimeout(function () {
          //emit
          vo.$emit('click-btns', evName);
        }, 1);
      },
      clickSave: function clickSave() {
        //console.log('methods clickSave')
        var vo = this; //setTimeout

        setTimeout(function () {
          //emit
          vo.$emit('click-save');
        }, 1);
      },
      clickClose: function clickClose(show) {
        //console.log('methods clickClose', show)
        var vo = this; //check

        if (isbol(show)) {
          vo.show_trans = show;
        } //setTimeout


        setTimeout(function () {
          //emit
          vo.$emit('update:show', vo.show_trans); //emit

          vo.$emit('click-close');
        }, 1);
      }
    }
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-dialog",
      {
        directives: [
          {
            name: "resize",
            rawName: "v-resize",
            value: _vm.changeSize,
            expression: "changeSize"
          }
        ],
        attrs: {
          changeParam: _vm.changeParam,
          scrollable: "",
          persistent: _vm.hasCloseBtn,
          "max-width": _vm.widthMax,
          fullscreen: _vm.fullscreen
        },
        on: { "click:outside": _vm.clickClose },
        model: {
          value: _vm.show_trans,
          callback: function($$v) {
            _vm.show_trans = $$v;
          },
          expression: "show_trans"
        }
      },
      [
        _c(
          "v-card",
          [
            _c(
              "v-toolbar",
              { attrs: { dark: "", "max-height": "64", color: _vm.headerColor } },
              [
                _c(
                  "div",
                  { staticStyle: { "margin-right": "10px" } },
                  [
                    !_vm.icon
                      ? _c("v-icon", [_vm._v(_vm._s(_vm.mdiCheckerboard))])
                      : _c("v-icon", [_vm._v(_vm._s(_vm.icon))])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-toolbar-title", [_vm._v(_vm._s(_vm.title))]),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _vm._t("header"),
                _vm._v(" "),
                _vm._l(_vm.headerBtns, function(btn, kbtn) {
                  return [
                    _c("WButtonCircle", {
                      key: kbtn,
                      staticStyle: { "margin-left": "5px" },
                      attrs: {
                        icon: btn.icon,
                        shadow: false,
                        iconColor: "white",
                        buttonColor: "white",
                        tooltip: btn.tooltip
                      },
                      on: {
                        click: function($event) {
                          return _vm.clickBtns(btn.evName)
                        }
                      }
                    })
                  ]
                }),
                _vm._v(" "),
                _vm.hasSaveBtn
                  ? [
                      _c("WButtonCircle", {
                        staticStyle: { "margin-left": "5px" },
                        attrs: {
                          icon: _vm.mdiCheckCircle,
                          shadow: false,
                          iconColor: "white",
                          buttonColor: "white",
                          tooltip: _vm.saveBtnTooltip
                        },
                        on: {
                          click: function($event) {
                            return _vm.clickSave()
                          }
                        }
                      })
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.hasCloseBtn
                  ? [
                      _c("WButtonCircle", {
                        staticStyle: { "margin-left": "5px" },
                        attrs: {
                          icon: _vm.mdiClose,
                          shadow: false,
                          iconColor: "white",
                          buttonColor: "white",
                          tooltip: _vm.closeBtnTooltip
                        },
                        on: {
                          click: function($event) {
                            return _vm.clickClose(false)
                          }
                        }
                      })
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "v-card-text",
              { ref: "scrollZone", staticStyle: { padding: "0px" } },
              [_vm._t("content")],
              2
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-f195b038_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"WDialog.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$2 = "data-v-f195b038";
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    

    
    var WDialog = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      browser,
      undefined
    );

  return WDialog;

}));
//# sourceMappingURL=w-dialog.umd.js.map
