/*!
 * w-text-core v1.1.30
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global['w-text-core'] = factory());
}(this, function () { 'use strict';

    /**
     * 判斷是否為字串
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isstr.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isstr(0)
     * // => false
     *
     * isstr('0')
     * // => true
     *
     * isstr('')
     * // => true
     */
    function isstr(v) {
      var c = Object.prototype.toString.call(v);
      return c === '[object String]';
    }

    /**
     * 判斷是否為有效字串
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isestr.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isestr('1.25')
     * // => true
     *
     * isestr(125)
     * // => false
     *
     * isestr('')
     * // => false
     */

    function isestr(v) {
      //check
      if (isstr(v)) {
        if (v !== '') {
          return true;
        }
      }

      return false;
    }

    /**
     * 判斷是否為數字
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isnbr.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isnbr(1.25)
     * // => true
     *
     * isnbr('1.25')
     * // => false
     */
    function isnbr(v) {
      var c = Object.prototype.toString.call(v);
      return c === '[object Number]';
    }

    /**
     * 判斷是否為數字
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isnum.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isnum(0)
     * // => true
     *
     * isnum(1.25)
     * // => true
     *
     * isnum('-125')
     * // => true
     */

    function isnum(v) {
      var b = false;

      if (isestr(v)) {
        b = !isNaN(Number(v));
      } else if (isnbr(v)) {
        b = true;
      }

      return b;
    }

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

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = _typeof(value);

      return value != null && (type == 'object' || type == 'function');
    }

    var isObject_1 = isObject;

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

    var symbolTag = '[object Symbol]';
    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */

    function isSymbol(value) {
      return _typeof(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
    }

    var isSymbol_1 = isSymbol;

    /** Used as references for various `Number` constants. */

    var NAN = 0 / 0;
    /** Used to match leading and trailing whitespace. */

    var reTrim = /^\s+|\s+$/g;
    /** Used to detect bad signed hexadecimal string values. */

    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    /** Used to detect binary string values. */

    var reIsBinary = /^0b[01]+$/i;
    /** Used to detect octal string values. */

    var reIsOctal = /^0o[0-7]+$/i;
    /** Built-in method references without a dependency on `root`. */

    var freeParseInt = parseInt;
    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */

    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }

      if (isSymbol_1(value)) {
        return NAN;
      }

      if (isObject_1(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject_1(other) ? other + '' : other;
      }

      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }

      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }

    var toNumber_1 = toNumber;

    /** Used as references for various `Number` constants. */

    var INFINITY = 1 / 0,
        MAX_INTEGER = 1.7976931348623157e+308;
    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */

    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }

      value = toNumber_1(value);

      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }

      return value === value ? value : 0;
    }

    var toFinite_1 = toFinite;

    /**
     * 數字或字串轉浮點數
     * 若輸入非數字則回傳0
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/cdbl.test.js Github}
     * @memberOf wsemi
     * @param {Number|String} v 輸入數字或字串
     * @returns {Number} 回傳數字
     * @example
     * cdbl('25')
     * // => 25
     */

    function cdbl(v) {
      //check
      if (!isnum(v)) {
        return 0;
      }

      var r = toFinite_1(v);
      return r;
    }

    /**
     * 判斷是否為大於等於0浮點數(非負浮點數)
     * 非負浮點數包含0
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isp0num.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isp0num(0)
     * // => true
     *
     * isp0num(125)
     * // => true
     *
     * isp0num(1.25)
     * // => true
     *
     * isp0num(-1.25)
     * // => false
     *
     * isp0num('1.25')
     * // => true
     */

    function isp0num(v) {
      //check
      if (!isnum(v)) {
        return false;
      }

      var r = cdbl(v) >= 0;
      return r;
    }

    /**
     * 判斷是否為小於等於0浮點數(非正浮點數)
     * 非正浮點數包含0
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isn0num.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isn0num(0)
     * // => true
     *
     * isn0num(-125)
     * // => true
     *
     * isn0num(-1.25)
     * // => true
     *
     * isn0num(125)
     * // => false
     *
     * isn0num('-125')
     * // => true
     *
     * isn0num('-1.25')
     * // => true
     *
     * isn0num('125')
     * // => false
     */

    function isn0num(v) {
      //check
      if (!isnum(v)) {
        return false;
      }

      var r = cdbl(v) <= 0;
      return r;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */

    function toInteger(value) {
      var result = toFinite_1(value),
          remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }

    var toInteger_1 = toInteger;

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */

    function isInteger(value) {
      return typeof value == 'number' && value == toInteger_1(value);
    }

    var isInteger_1 = isInteger;

    /**
     * 判斷是否為整數
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isint.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isint('1.25')
     * // => false
     *
     * isint('125')
     * // => true
     *
     * isint(1.25)
     * // => false
     *
     * isint(125)
     * // => true
     */

    function isint(v) {
      if (isnum(v)) {
        v = cdbl(v);
        return isInteger_1(v);
      } else {
        return false;
      }
    }

    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array == null ? 0 : array.length,
          result = Array(length);

      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }

      return result;
    }

    var _arrayMap = arrayMap;

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;
    var isArray_1 = isArray;

    /** Used as references for various `Number` constants. */

    var INFINITY$1 = 1 / 0;
    /** Used to convert symbols to primitives and strings. */

    var symbolProto = _Symbol ? _Symbol.prototype : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;
    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */

    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }

      if (isArray_1(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return _arrayMap(value, baseToString) + '';
      }

      if (isSymbol_1(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }

      var result = value + '';
      return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
    }

    var _baseToString = baseToString;

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */

    function toString(value) {
      return value == null ? '' : _baseToString(value);
    }

    var toString_1 = toString;

    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeIsFinite = _root.isFinite,
        nativeMin = Math.min;
    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */

    function createRound(methodName) {
      var func = Math[methodName];
      return function (number, precision) {
        number = toNumber_1(number);
        precision = precision == null ? 0 : nativeMin(toInteger_1(precision), 292);

        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString_1(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));
          pair = (toString_1(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }

        return func(number);
      };
    }

    var _createRound = createRound;

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */

    var round = _createRound('round');
    var round_1 = round;

    /**
     * 數字或字串四捨五入轉整數
     * 若輸入非數字則回傳0
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/cint.test.js Github}
     * @memberOf wsemi
     * @param {Number|String} v 輸入數字或字串
     * @returns {Integer} 回傳四捨五入後整數
     * @example
     * cint('1.5')
     * // => 2
     *
     *  cint('-1.5')
     * // => -1
     */

    function cint(v) {
      //check
      if (!isnum(v)) {
        return 0;
      }

      v = cdbl(v);
      var r = round_1(v); //check -0

      if (String(r) === '0') {
        return 0;
      }

      return r;
    }

    /**
     * 判斷是否為正整數
     * 正整數不包含0，為大於0的整數
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/ispint.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * ispint(0)
     * // => false
     *
     * ispint(125)
     * // => true
     *
     * ispint('125')
     * // => true
     *
     * ispint(1.25)
     * // => false
     */

    function ispint(v) {
      //check
      if (!isint(v)) {
        return false;
      }

      var r = cint(v) > 0;
      return r;
    }

    /**
     * 判斷是否為大於等於0整數(非負整數)
     * 非負整數包含0
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isp0int.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isp0int(0)
     * // => true
     *
     * isp0int(125)
     * // => true
     *
     * isp0int(1.25)
     * // => false
     *
     * isp0int('125')
     * // => true
     */

    function isp0int(v) {
      //check
      if (!isint(v)) {
        return false;
      }

      var r = cint(v) >= 0;
      return r;
    }

    /**
     * 判斷是否為負整數
     * 負整數不包含0，為小於0的整數
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isnint.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isnint(0)
     * // => false
     *
     * isnint(125)
     * // => false
     *
     * isnint(-125)
     * // => true
     */

    function isnint(v) {
      //check
      if (!isint(v)) {
        return false;
      }

      var r = cint(v) < 0;
      return r;
    }

    /**
     * 判斷是否為小於等於0整數(非正整數)
     * 非正整數包含0
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isn0int.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isn0int(0)
     * // => true
     *
     * isn0int(125)
     * // => false
     *
     * isn0int(-125)
     * // => true
     */

    function isn0int(v) {
      //check
      if (!isint(v)) {
        return false;
      }

      var r = cint(v) <= 0;
      return r;
    }

    /**
     * 判斷是否為函數
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isfun.test.js Github}
     * @memberOf wsemi
     * @param {*} v 輸入任意資料
     * @returns {Boolean} 回傳判斷布林值
     * @example
     * isfun('1.25')
     * // => false
     *
     * isfun(function() {})
     * // => true
     */
    function isfun(v) {
      var c = Object.prototype.toString.call(v);
      return c === '[object Function]' || c === '[object AsyncFunction]';
    }

    /**
     * 驗證數值是否為指定類型
     *
     * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/verifyValue.test.js Github}
     * @memberOf wsemi
     * @param {String|Function} type 輸入判斷資料類型字串或判斷函式，資料類型可選為'isstr','isnum','isp0num','isn0num','isint','ispint','isp0int','isnint','isn0int','isfun'
     * @param {*} value 輸入任意資料
     * @returns {Object} 回傳判斷結果，屬性value為回傳資料類型的取值，屬性err為是否資料類型有錯，屬性errmsg為類型有錯時之錯誤訊息
     * @example
     * verifyValue('12a5', 'isstr')
     * // => r.err=false
     *
     * verifyValue('12', 'isint')
     * // => r.err=false
     *
     * verifyValue('0', 'isp0int')
     * // => r.err=false
     *
     * verifyValue('12', 'isp0int')
     * // => r.err=false
     *
     * verifyValue('0', 'isn0int')
     * // => r.err=false
     *
     * verifyValue('-12', 'isn0int')
     * // => r.err=false
     *
     * verifyValue('12.34', 'isnum')
     * // => r.err=false
     *
     * verifyValue('12.34', 'isp0num')
     * // => r.err=false
     *
     * verifyValue('-12.34', 'isn0num')
     * // => r.err=false
     *
     */

    function verifyValue(value, type) {
      var err = false;
      var errmsg = '';

      if (type === 'isstr') {
        if (!isstr(value)) {
          err = true;
          errmsg = '需要為字串';
          value = '';
        }
      } else if (type === 'isnum') {
        if (!isnum(value)) {
          err = true;
          errmsg = '需要為數字';
          value = 0;
        }
      } else if (type === 'isp0num') {
        if (!isp0num(value)) {
          err = true;
          errmsg = '需要為含0的正浮點數';
          value = 0;
        }
      } else if (type === 'isn0num') {
        if (!isn0num(value)) {
          err = true;
          errmsg = '需要為含0的負浮點數';
          value = 0;
        }
      } else if (type === 'isint') {
        if (!isint(value)) {
          err = true;
          errmsg = '需要為整數';
          value = 0;
        }
      } else if (type === 'ispint') {
        if (!ispint(value)) {
          err = true;
          errmsg = '需要為不含0正整數';
          value = 0;
        }
      } else if (type === 'isp0int') {
        if (!isp0int(value)) {
          err = true;
          errmsg = '需要為含0正整數';
          value = 0;
        }
      } else if (type === 'isnint') {
        if (!isnint(value)) {
          err = true;
          errmsg = '需要為不含0負整數';
          value = 0;
        }
      } else if (type === 'isn0int') {
        if (!isn0int(value)) {
          err = true;
          errmsg = '需要為含0負整數';
          value = 0;
        }
      } else if (isfun(type)) {
        var f = type;
        value = f(value);
      } else if (type === 'any') {
        if (!isnum(value) && !isstr(value)) {
          err = true;
          errmsg = '需要為字串或數字';
          value = '';
        }
      } else {
        err = true;
        errmsg = '需要指定驗證類型';
        value = null;
      }

      var r = {
        value: value,
        err: err,
        errmsg: errmsg
      };
      return r;
    }

    //
    /**
     * @vue-prop {String} [type='any'] 輸入文字框類型字串，預設'any'
     * @vue-prop {String|Number} value 輸入文字框值
     * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
     * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
     * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
     * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
     */

    var script = {
      props: {
        type: {
          type: String,
          default: 'any'
        },
        value: {
          type: [String, Number]
        },
        textAlign: {
          type: String,
          default: 'left'
        },
        placeholder: {
          type: String,
          default: ''
        },
        editable: {
          type: Boolean,
          default: true
        },
        focused: {
          type: Boolean,
          default: false
        }
      },
      data: function data() {
        return {
          value_trans: ''
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
        changeFocused: function changeFocused(focused) {
          //console.log('methods changeFocused', focused)
          var vo = this; //save
          //vo.focused_trans = focused
          //setTimeout

          setTimeout(function () {
            //emit
            vo.$emit('update:focused', focused);
          }, 1);
        },
        changeContent: function changeContent(evname) {
          //console.log('methods changeContent', evname)
          var vo = this; //verifyValue

          var r = verifyValue(vo.value_trans, vo.type); //value, errmsg

          var value = r.value;
          var errmsg = r.errmsg; //setTimeout

          setTimeout(function () {
            //reset for error condition
            vo.value_trans = value; //emit

            vo.$emit('input', value, errmsg); //emit

            vo.$emit(evname, value, errmsg);
          }, 1);
        },
        setValueTrans: function setValueTrans(value) {
          //console.log('methods setValueTrans', value)
          var vo = this; //set value_trans

          vo.value_trans = value;
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
      return _c("div", { attrs: { changeParam: _vm.changeParam } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value_trans,
              expression: "value_trans"
            }
          ],
          ref: "inp",
          staticClass: "basic",
          style: [
            { width: "100%" },
            { height: "28px" },
            { "text-align": _vm.textAlign },
            { opacity: !_vm.value_trans && !_vm.focused ? 0.6 : 1 }
          ],
          attrs: {
            type: "text",
            readonly: !_vm.editable,
            placeholder: _vm.placeholder
          },
          domProps: { value: _vm.value_trans },
          on: {
            focus: function($event) {
              return _vm.changeFocused(true)
            },
            blur: function($event) {
              _vm.changeFocused(false);
              _vm.changeContent("blur");
            },
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.changeContent("enter")
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.value_trans = $event.target.value;
            }
          }
        })
      ])
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = function (inject) {
        if (!inject) return
        inject("data-v-03f04f78_0", { source: "\n.basic[data-v-03f04f78] {\r\n    transition: all 0.7s;\r\n    outline: none;\n}\r\n", map: {"version":3,"sources":["D:\\開源-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WTextCore.vue"],"names":[],"mappings":";AA4IA;IACA,oBAAA;IACA,aAAA;AACA","file":"WTextCore.vue","sourcesContent":["<template>\r\n    <div :changeParam=\"changeParam\">\r\n\r\n        <input\r\n            ref=\"inp\"\r\n            class=\"basic\"\r\n            type=\"text\"\r\n            :style=\"[{'width':'100%'},{'height':'28px'},{'text-align':textAlign},{'opacity':(!value_trans && !focused)?0.6:1}]\"\r\n            :readonly=\"!editable\"\r\n            :placeholder=\"placeholder\"\r\n            v-model=\"value_trans\"\r\n            @focus=\"changeFocused(true)\"\r\n            @blur=\"changeFocused(false);changeContent('blur');\"\r\n            @keyup.enter=\"changeContent('enter')\"\r\n        >\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport verifyValue from 'wsemi/src/verifyValue.mjs'\r\n\r\n/**\r\n * @vue-prop {String} [type='any'] 輸入文字框類型字串，預設'any'\r\n * @vue-prop {String|Number} value 輸入文字框值\r\n * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'\r\n * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false\r\n */\r\nexport default {\r\n    props: {\r\n        type: {\r\n            type: String,\r\n            default: 'any',\r\n        },\r\n        value: {\r\n            type: [String, Number],\r\n        },\r\n        textAlign: {\r\n            type: String,\r\n            default: 'left',\r\n        },\r\n        placeholder: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        focused: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            value_trans: '',\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //value_trans\r\n            vo.value_trans = vo.value\r\n\r\n            return ''\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        changeFocused: function(focused) {\r\n            //console.log('methods changeFocused', focused)\r\n\r\n            let vo = this\r\n\r\n            //save\r\n            //vo.focused_trans = focused\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //emit\r\n                vo.$emit('update:focused', focused)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n        changeContent: function (evname) {\r\n            //console.log('methods changeContent', evname)\r\n\r\n            let vo = this\r\n\r\n            //verifyValue\r\n            let r = verifyValue(vo.value_trans, vo.type)\r\n\r\n            //value, errmsg\r\n            let value = r.value\r\n            let errmsg = r.errmsg\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //reset for error condition\r\n                vo.value_trans = value\r\n\r\n                //emit\r\n                vo.$emit('input', value, errmsg)\r\n\r\n                //emit\r\n                vo.$emit(evname, value, errmsg)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n        setValueTrans: function(value) {\r\n            //console.log('methods setValueTrans', value)\r\n\r\n            let vo = this\r\n\r\n            //set value_trans\r\n            vo.value_trans = value\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.basic {\r\n    transition: all 0.7s;\r\n    outline: none;\r\n}\r\n</style>\r\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__ = "data-v-03f04f78";
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject SSR */
      

      
      var WTextCore = normalizeComponent_1(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        browser,
        undefined
      );

    return WTextCore;

}));
//# sourceMappingURL=w-text-core.umd.js.map
