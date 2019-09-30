/*!
 * w-chips v1.1.30
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['w-chips'] = factory());
}(this, function () { 'use strict';

  // Material Design Icons v4.4.95
  var mdiCloseCircle="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z";var mdiPlusCircle="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";

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

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

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

  var INFINITY = 1 / 0;
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
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  var _baseToString = baseToString;

  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }

    end = end > length ? length : end;

    if (end < 0) {
      end += length;
    }

    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);

    while (++index < length) {
      result[index] = array[index + start];
    }

    return result;
  }

  var _baseSlice = baseSlice;

  /**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */

  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : _baseSlice(array, start, end);
  }

  var _castSlice = castSlice;

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }

    return -1;
  }

  var _baseFindIndex = baseFindIndex;

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  var _baseIsNaN = baseIsNaN;

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }

    return -1;
  }

  var _strictIndexOf = strictIndexOf;

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function baseIndexOf(array, value, fromIndex) {
    return value === value ? _strictIndexOf(array, value, fromIndex) : _baseFindIndex(array, _baseIsNaN, fromIndex);
  }

  var _baseIndexOf = baseIndexOf;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */

  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && _baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

    return index;
  }

  var _charsEndIndex = charsEndIndex;

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */

  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && _baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

    return index;
  }

  var _charsStartIndex = charsStartIndex;

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  var _asciiToArray = asciiToArray;

  /** Used to compose unicode character classes. */
  var rsAstralRange = "\\ud800-\\udfff",
      rsComboMarksRange = "\\u0300-\\u036f",
      reComboHalfMarksRange = "\\ufe20-\\ufe2f",
      rsComboSymbolsRange = "\\u20d0-\\u20ff",
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsVarRange = "\\ufe0e\\ufe0f";
  /** Used to compose unicode capture groups. */

  var rsZWJ = "\\u200d";
  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */

  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  var _hasUnicode = hasUnicode;

  /** Used to compose unicode character classes. */
  var rsAstralRange$1 = "\\ud800-\\udfff",
      rsComboMarksRange$1 = "\\u0300-\\u036f",
      reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f",
      rsComboSymbolsRange$1 = "\\u20d0-\\u20ff",
      rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
      rsVarRange$1 = "\\ufe0e\\ufe0f";
  /** Used to compose unicode capture groups. */

  var rsAstral = '[' + rsAstralRange$1 + ']',
      rsCombo = '[' + rsComboRange$1 + ']',
      rsFitz = "\\ud83c[\\udffb-\\udfff]",
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange$1 + ']',
      rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      rsZWJ$1 = "\\u200d";
  /** Used to compose unicode regexes. */

  var reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange$1 + ']?',
      rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */

  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  var _unicodeToArray = unicodeToArray;

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */

  function stringToArray(string) {
    return _hasUnicode(string) ? _unicodeToArray(string) : _asciiToArray(string);
  }

  var _stringToArray = stringToArray;

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

  /** Used to match leading and trailing whitespace. */

  var reTrim = /^\s+|\s+$/g;
  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */

  function trim(string, chars, guard) {
    string = toString_1(string);

    if (string && (guard || chars === undefined)) {
      return string.replace(reTrim, '');
    }

    if (!string || !(chars = _baseToString(chars))) {
      return string;
    }

    var strSymbols = _stringToArray(string),
        chrSymbols = _stringToArray(chars),
        start = _charsStartIndex(strSymbols, chrSymbols),
        end = _charsEndIndex(strSymbols, chrSymbols) + 1;
    return _castSlice(strSymbols, start, end).join('');
  }

  var trim_1 = trim;

  /**
   * Creates a function like `_.lowerFirst`.
   *
   * @private
   * @param {string} methodName The name of the `String` case method to use.
   * @returns {Function} Returns the new case function.
   */

  function createCaseFirst(methodName) {
    return function (string) {
      string = toString_1(string);
      var strSymbols = _hasUnicode(string) ? _stringToArray(string) : undefined;
      var chr = strSymbols ? strSymbols[0] : string.charAt(0);
      var trailing = strSymbols ? _castSlice(strSymbols, 1).join('') : string.slice(1);
      return chr[methodName]() + trailing;
    };
  }

  var _createCaseFirst = createCaseFirst;

  /**
   * Converts the first character of `string` to upper case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.upperFirst('fred');
   * // => 'Fred'
   *
   * _.upperFirst('FRED');
   * // => 'FRED'
   */

  var upperFirst = _createCaseFirst('toUpperCase');
  var upperFirst_1 = upperFirst;

  /**
   * Converts the first character of `string` to upper case and the remaining
   * to lower case.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to capitalize.
   * @returns {string} Returns the capitalized string.
   * @example
   *
   * _.capitalize('FRED');
   * // => 'Fred'
   */

  function capitalize(string) {
    return upperFirst_1(toString_1(string).toLowerCase());
  }

  var capitalize_1 = capitalize;

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }

    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }

    return accumulator;
  }

  var _arrayReduce = arrayReduce;

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function (key) {
      return object == null ? undefined : object[key];
    };
  }

  var _basePropertyOf = basePropertyOf;

  /** Used to map Latin Unicode letters to basic Latin letters. */

  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',
    '\xc1': 'A',
    '\xc2': 'A',
    '\xc3': 'A',
    '\xc4': 'A',
    '\xc5': 'A',
    '\xe0': 'a',
    '\xe1': 'a',
    '\xe2': 'a',
    '\xe3': 'a',
    '\xe4': 'a',
    '\xe5': 'a',
    '\xc7': 'C',
    '\xe7': 'c',
    '\xd0': 'D',
    '\xf0': 'd',
    '\xc8': 'E',
    '\xc9': 'E',
    '\xca': 'E',
    '\xcb': 'E',
    '\xe8': 'e',
    '\xe9': 'e',
    '\xea': 'e',
    '\xeb': 'e',
    '\xcc': 'I',
    '\xcd': 'I',
    '\xce': 'I',
    '\xcf': 'I',
    '\xec': 'i',
    '\xed': 'i',
    '\xee': 'i',
    '\xef': 'i',
    '\xd1': 'N',
    '\xf1': 'n',
    '\xd2': 'O',
    '\xd3': 'O',
    '\xd4': 'O',
    '\xd5': 'O',
    '\xd6': 'O',
    '\xd8': 'O',
    '\xf2': 'o',
    '\xf3': 'o',
    '\xf4': 'o',
    '\xf5': 'o',
    '\xf6': 'o',
    '\xf8': 'o',
    '\xd9': 'U',
    '\xda': 'U',
    '\xdb': 'U',
    '\xdc': 'U',
    '\xf9': 'u',
    '\xfa': 'u',
    '\xfb': 'u',
    '\xfc': 'u',
    '\xdd': 'Y',
    '\xfd': 'y',
    '\xff': 'y',
    '\xc6': 'Ae',
    '\xe6': 'ae',
    '\xde': 'Th',
    '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    "\u0100": 'A',
    "\u0102": 'A',
    "\u0104": 'A',
    "\u0101": 'a',
    "\u0103": 'a',
    "\u0105": 'a',
    "\u0106": 'C',
    "\u0108": 'C',
    "\u010A": 'C',
    "\u010C": 'C',
    "\u0107": 'c',
    "\u0109": 'c',
    "\u010B": 'c',
    "\u010D": 'c',
    "\u010E": 'D',
    "\u0110": 'D',
    "\u010F": 'd',
    "\u0111": 'd',
    "\u0112": 'E',
    "\u0114": 'E',
    "\u0116": 'E',
    "\u0118": 'E',
    "\u011A": 'E',
    "\u0113": 'e',
    "\u0115": 'e',
    "\u0117": 'e',
    "\u0119": 'e',
    "\u011B": 'e',
    "\u011C": 'G',
    "\u011E": 'G',
    "\u0120": 'G',
    "\u0122": 'G',
    "\u011D": 'g',
    "\u011F": 'g',
    "\u0121": 'g',
    "\u0123": 'g',
    "\u0124": 'H',
    "\u0126": 'H',
    "\u0125": 'h',
    "\u0127": 'h',
    "\u0128": 'I',
    "\u012A": 'I',
    "\u012C": 'I',
    "\u012E": 'I',
    "\u0130": 'I',
    "\u0129": 'i',
    "\u012B": 'i',
    "\u012D": 'i',
    "\u012F": 'i',
    "\u0131": 'i',
    "\u0134": 'J',
    "\u0135": 'j',
    "\u0136": 'K',
    "\u0137": 'k',
    "\u0138": 'k',
    "\u0139": 'L',
    "\u013B": 'L',
    "\u013D": 'L',
    "\u013F": 'L',
    "\u0141": 'L',
    "\u013A": 'l',
    "\u013C": 'l',
    "\u013E": 'l',
    "\u0140": 'l',
    "\u0142": 'l',
    "\u0143": 'N',
    "\u0145": 'N',
    "\u0147": 'N',
    "\u014A": 'N',
    "\u0144": 'n',
    "\u0146": 'n',
    "\u0148": 'n',
    "\u014B": 'n',
    "\u014C": 'O',
    "\u014E": 'O',
    "\u0150": 'O',
    "\u014D": 'o',
    "\u014F": 'o',
    "\u0151": 'o',
    "\u0154": 'R',
    "\u0156": 'R',
    "\u0158": 'R',
    "\u0155": 'r',
    "\u0157": 'r',
    "\u0159": 'r',
    "\u015A": 'S',
    "\u015C": 'S',
    "\u015E": 'S',
    "\u0160": 'S',
    "\u015B": 's',
    "\u015D": 's',
    "\u015F": 's',
    "\u0161": 's',
    "\u0162": 'T',
    "\u0164": 'T',
    "\u0166": 'T',
    "\u0163": 't',
    "\u0165": 't',
    "\u0167": 't',
    "\u0168": 'U',
    "\u016A": 'U',
    "\u016C": 'U',
    "\u016E": 'U',
    "\u0170": 'U',
    "\u0172": 'U',
    "\u0169": 'u',
    "\u016B": 'u',
    "\u016D": 'u',
    "\u016F": 'u',
    "\u0171": 'u',
    "\u0173": 'u',
    "\u0174": 'W',
    "\u0175": 'w',
    "\u0176": 'Y',
    "\u0177": 'y',
    "\u0178": 'Y',
    "\u0179": 'Z',
    "\u017B": 'Z',
    "\u017D": 'Z',
    "\u017A": 'z',
    "\u017C": 'z',
    "\u017E": 'z',
    "\u0132": 'IJ',
    "\u0133": 'ij',
    "\u0152": 'Oe',
    "\u0153": 'oe',
    "\u0149": "'n",
    "\u017F": 's'
  };
  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */

  var deburrLetter = _basePropertyOf(deburredLetters);
  var _deburrLetter = deburrLetter;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */

  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
  /** Used to compose unicode character classes. */

  var rsComboMarksRange$2 = "\\u0300-\\u036f",
      reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f",
      rsComboSymbolsRange$2 = "\\u20d0-\\u20ff",
      rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2;
  /** Used to compose unicode capture groups. */

  var rsCombo$1 = '[' + rsComboRange$2 + ']';
  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */

  var reComboMark = RegExp(rsCombo$1, 'g');
  /**
   * Deburrs `string` by converting
   * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
   * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
   * letters to basic Latin letters and removing
   * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to deburr.
   * @returns {string} Returns the deburred string.
   * @example
   *
   * _.deburr('déjà vu');
   * // => 'deja vu'
   */

  function deburr(string) {
    string = toString_1(string);
    return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
  }

  var deburr_1 = deburr;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */

  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  var _asciiWords = asciiWords;

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */

  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  var _hasUnicodeWord = hasUnicodeWord;

  /** Used to compose unicode character classes. */
  var rsAstralRange$2 = "\\ud800-\\udfff",
      rsComboMarksRange$3 = "\\u0300-\\u036f",
      reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f",
      rsComboSymbolsRange$3 = "\\u20d0-\\u20ff",
      rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
      rsDingbatRange = "\\u2700-\\u27bf",
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = "\\u2000-\\u206f",
      rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange$2 = "\\ufe0e\\ufe0f",
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
  /** Used to compose unicode capture groups. */

  var rsApos = "['\u2019]",
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo$2 = '[' + rsComboRange$3 + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz$1 = "\\ud83c[\\udffb-\\udfff]",
      rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
      rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
      rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ$2 = "\\u200d";
  /** Used to compose unicode regexes. */

  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod$1 = rsModifier$1 + '?',
      rsOptVar$1 = '[' + rsVarRange$2 + ']?',
      rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
      rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;
  /** Used to match complex or compound words. */

  var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');
  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */

  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  var _unicodeWords = unicodeWords;

  /**
   * Splits `string` into an array of its words.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {RegExp|string} [pattern] The pattern to match words.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the words of `string`.
   * @example
   *
   * _.words('fred, barney, & pebbles');
   * // => ['fred', 'barney', 'pebbles']
   *
   * _.words('fred, barney, & pebbles', /[^, ]+/g);
   * // => ['fred', 'barney', '&', 'pebbles']
   */

  function words(string, pattern, guard) {
    string = toString_1(string);
    pattern = guard ? undefined : pattern;

    if (pattern === undefined) {
      return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
    }

    return string.match(pattern) || [];
  }

  var words_1 = words;

  /** Used to compose unicode capture groups. */

  var rsApos$1 = "['\u2019]";
  /** Used to match apostrophes. */

  var reApos = RegExp(rsApos$1, 'g');
  /**
   * Creates a function like `_.camelCase`.
   *
   * @private
   * @param {Function} callback The function to combine each word.
   * @returns {Function} Returns the new compounder function.
   */

  function createCompounder(callback) {
    return function (string) {
      return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
    };
  }

  var _createCompounder = createCompounder;

  /**
   * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the camel cased string.
   * @example
   *
   * _.camelCase('Foo Bar');
   * // => 'fooBar'
   *
   * _.camelCase('--foo-bar--');
   * // => 'fooBar'
   *
   * _.camelCase('__FOO_BAR__');
   * // => 'fooBar'
   */

  var camelCase = _createCompounder(function (result, word, index) {
    word = word.toLowerCase();
    return result + (index ? capitalize_1(word) : word);
  });
  var camelCase_1 = camelCase;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  var eq_1 = eq;

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

  /** `Object#toString` result references. */

  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */

  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    } // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.


    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */

  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */

  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */

  function isIndex(value, length) {
    var type = _typeof(value);

    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  var _isIndex = isIndex;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */

  function isIterateeCall(value, index, object) {
    if (!isObject_1(object)) {
      return false;
    }

    var type = _typeof(index);

    if (type == 'number' ? isArrayLike_1(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
      return eq_1(object[index], value);
    }

    return false;
  }

  var _isIterateeCall = isIterateeCall;

  /** `Object#toString` result references. */

  var regexpTag = '[object RegExp]';
  /**
   * The base implementation of `_.isRegExp` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   */

  function baseIsRegExp(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == regexpTag;
  }

  var _baseIsRegExp = baseIsRegExp;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
    /** Detect free variable `exports`. */
    var freeExports =  exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Detect free variable `process` from Node.js. */

    var freeProcess = moduleExports && _freeGlobal.process;
    /** Used to access faster Node.js helpers. */

    var nodeUtil = function () {
      try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;

        if (types) {
          return types;
        } // Legacy `process.binding('util')` for Node.js < 10.


        return freeProcess && freeProcess.binding && freeProcess.binding('util');
      } catch (e) {}
    }();

    module.exports = nodeUtil;
  });

  /* Node.js helper references. */

  var nodeIsRegExp = _nodeUtil && _nodeUtil.isRegExp;
  /**
   * Checks if `value` is classified as a `RegExp` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   * @example
   *
   * _.isRegExp(/abc/);
   * // => true
   *
   * _.isRegExp('/abc/');
   * // => false
   */

  var isRegExp = nodeIsRegExp ? _baseUnary(nodeIsRegExp) : _baseIsRegExp;
  var isRegExp_1 = isRegExp;

  /** Used as references for the maximum length and index of an array. */

  var MAX_ARRAY_LENGTH = 4294967295;
  /**
   * Splits `string` by `separator`.
   *
   * **Note:** This method is based on
   * [`String#split`](https://mdn.io/String/split).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to split.
   * @param {RegExp|string} separator The separator pattern to split by.
   * @param {number} [limit] The length to truncate results to.
   * @returns {Array} Returns the string segments.
   * @example
   *
   * _.split('a-b-c', '-', 2);
   * // => ['a', 'b']
   */

  function split(string, separator, limit) {
    if (limit && typeof limit != 'number' && _isIterateeCall(string, separator, limit)) {
      separator = limit = undefined;
    }

    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;

    if (!limit) {
      return [];
    }

    string = toString_1(string);

    if (string && (typeof separator == 'string' || separator != null && !isRegExp_1(separator))) {
      separator = _baseToString(separator);

      if (!separator && _hasUnicode(string)) {
        return _castSlice(_stringToArray(string), 0, limit);
      }
    }

    return string.split(separator, limit);
  }

  var split_1 = split;

  //fs.writeFileSync('colors.json', JSON.stringify(colors), 'utf8')

  var colors = {
    'default': {
      'red': {
        'base': '#f44336',
        'lighten5': '#ffebee',
        'lighten4': '#ffcdd2',
        'lighten3': '#ef9a9a',
        'lighten2': '#e57373',
        'lighten1': '#ef5350',
        'darken1': '#e53935',
        'darken2': '#d32f2f',
        'darken3': '#c62828',
        'darken4': '#b71c1c',
        'accent1': '#ff8a80',
        'accent2': '#ff5252',
        'accent3': '#ff1744',
        'accent4': '#d50000'
      },
      'pink': {
        'base': '#e91e63',
        'lighten5': '#fce4ec',
        'lighten4': '#f8bbd0',
        'lighten3': '#f48fb1',
        'lighten2': '#f06292',
        'lighten1': '#ec407a',
        'darken1': '#d81b60',
        'darken2': '#c2185b',
        'darken3': '#ad1457',
        'darken4': '#880e4f',
        'accent1': '#ff80ab',
        'accent2': '#ff4081',
        'accent3': '#f50057',
        'accent4': '#c51162'
      },
      'purple': {
        'base': '#9c27b0',
        'lighten5': '#f3e5f5',
        'lighten4': '#e1bee7',
        'lighten3': '#ce93d8',
        'lighten2': '#ba68c8',
        'lighten1': '#ab47bc',
        'darken1': '#8e24aa',
        'darken2': '#7b1fa2',
        'darken3': '#6a1b9a',
        'darken4': '#4a148c',
        'accent1': '#ea80fc',
        'accent2': '#e040fb',
        'accent3': '#d500f9',
        'accent4': '#aa00ff'
      },
      'deepPurple': {
        'base': '#673ab7',
        'lighten5': '#ede7f6',
        'lighten4': '#d1c4e9',
        'lighten3': '#b39ddb',
        'lighten2': '#9575cd',
        'lighten1': '#7e57c2',
        'darken1': '#5e35b1',
        'darken2': '#512da8',
        'darken3': '#4527a0',
        'darken4': '#311b92',
        'accent1': '#b388ff',
        'accent2': '#7c4dff',
        'accent3': '#651fff',
        'accent4': '#6200ea'
      },
      'indigo': {
        'base': '#3f51b5',
        'lighten5': '#e8eaf6',
        'lighten4': '#c5cae9',
        'lighten3': '#9fa8da',
        'lighten2': '#7986cb',
        'lighten1': '#5c6bc0',
        'darken1': '#3949ab',
        'darken2': '#303f9f',
        'darken3': '#283593',
        'darken4': '#1a237e',
        'accent1': '#8c9eff',
        'accent2': '#536dfe',
        'accent3': '#3d5afe',
        'accent4': '#304ffe'
      },
      'blue': {
        'base': '#2196f3',
        'lighten5': '#e3f2fd',
        'lighten4': '#bbdefb',
        'lighten3': '#90caf9',
        'lighten2': '#64b5f6',
        'lighten1': '#42a5f5',
        'darken1': '#1e88e5',
        'darken2': '#1976d2',
        'darken3': '#1565c0',
        'darken4': '#0d47a1',
        'accent1': '#82b1ff',
        'accent2': '#448aff',
        'accent3': '#2979ff',
        'accent4': '#2962ff'
      },
      'lightBlue': {
        'base': '#03a9f4',
        'lighten5': '#e1f5fe',
        'lighten4': '#b3e5fc',
        'lighten3': '#81d4fa',
        'lighten2': '#4fc3f7',
        'lighten1': '#29b6f6',
        'darken1': '#039be5',
        'darken2': '#0288d1',
        'darken3': '#0277bd',
        'darken4': '#01579b',
        'accent1': '#80d8ff',
        'accent2': '#40c4ff',
        'accent3': '#00b0ff',
        'accent4': '#0091ea'
      },
      'cyan': {
        'base': '#00bcd4',
        'lighten5': '#e0f7fa',
        'lighten4': '#b2ebf2',
        'lighten3': '#80deea',
        'lighten2': '#4dd0e1',
        'lighten1': '#26c6da',
        'darken1': '#00acc1',
        'darken2': '#0097a7',
        'darken3': '#00838f',
        'darken4': '#006064',
        'accent1': '#84ffff',
        'accent2': '#18ffff',
        'accent3': '#00e5ff',
        'accent4': '#00b8d4'
      },
      'teal': {
        'base': '#009688',
        'lighten5': '#e0f2f1',
        'lighten4': '#b2dfdb',
        'lighten3': '#80cbc4',
        'lighten2': '#4db6ac',
        'lighten1': '#26a69a',
        'darken1': '#00897b',
        'darken2': '#00796b',
        'darken3': '#00695c',
        'darken4': '#004d40',
        'accent1': '#a7ffeb',
        'accent2': '#64ffda',
        'accent3': '#1de9b6',
        'accent4': '#00bfa5'
      },
      'green': {
        'base': '#4caf50',
        'lighten5': '#e8f5e9',
        'lighten4': '#c8e6c9',
        'lighten3': '#a5d6a7',
        'lighten2': '#81c784',
        'lighten1': '#66bb6a',
        'darken1': '#43a047',
        'darken2': '#388e3c',
        'darken3': '#2e7d32',
        'darken4': '#1b5e20',
        'accent1': '#b9f6ca',
        'accent2': '#69f0ae',
        'accent3': '#00e676',
        'accent4': '#00c853'
      },
      'lightGreen': {
        'base': '#8bc34a',
        'lighten5': '#f1f8e9',
        'lighten4': '#dcedc8',
        'lighten3': '#c5e1a5',
        'lighten2': '#aed581',
        'lighten1': '#9ccc65',
        'darken1': '#7cb342',
        'darken2': '#689f38',
        'darken3': '#558b2f',
        'darken4': '#33691e',
        'accent1': '#ccff90',
        'accent2': '#b2ff59',
        'accent3': '#76ff03',
        'accent4': '#64dd17'
      },
      'lime': {
        'base': '#cddc39',
        'lighten5': '#f9fbe7',
        'lighten4': '#f0f4c3',
        'lighten3': '#e6ee9c',
        'lighten2': '#dce775',
        'lighten1': '#d4e157',
        'darken1': '#c0ca33',
        'darken2': '#afb42b',
        'darken3': '#9e9d24',
        'darken4': '#827717',
        'accent1': '#f4ff81',
        'accent2': '#eeff41',
        'accent3': '#c6ff00',
        'accent4': '#aeea00'
      },
      'yellow': {
        'base': '#ffeb3b',
        'lighten5': '#fffde7',
        'lighten4': '#fff9c4',
        'lighten3': '#fff59d',
        'lighten2': '#fff176',
        'lighten1': '#ffee58',
        'darken1': '#fdd835',
        'darken2': '#fbc02d',
        'darken3': '#f9a825',
        'darken4': '#f57f17',
        'accent1': '#ffff8d',
        'accent2': '#ffff00',
        'accent3': '#ffea00',
        'accent4': '#ffd600'
      },
      'amber': {
        'base': '#ffc107',
        'lighten5': '#fff8e1',
        'lighten4': '#ffecb3',
        'lighten3': '#ffe082',
        'lighten2': '#ffd54f',
        'lighten1': '#ffca28',
        'darken1': '#ffb300',
        'darken2': '#ffa000',
        'darken3': '#ff8f00',
        'darken4': '#ff6f00',
        'accent1': '#ffe57f',
        'accent2': '#ffd740',
        'accent3': '#ffc400',
        'accent4': '#ffab00'
      },
      'orange': {
        'base': '#ff9800',
        'lighten5': '#fff3e0',
        'lighten4': '#ffe0b2',
        'lighten3': '#ffcc80',
        'lighten2': '#ffb74d',
        'lighten1': '#ffa726',
        'darken1': '#fb8c00',
        'darken2': '#f57c00',
        'darken3': '#ef6c00',
        'darken4': '#e65100',
        'accent1': '#ffd180',
        'accent2': '#ffab40',
        'accent3': '#ff9100',
        'accent4': '#ff6d00'
      },
      'deepOrange': {
        'base': '#ff5722',
        'lighten5': '#fbe9e7',
        'lighten4': '#ffccbc',
        'lighten3': '#ffab91',
        'lighten2': '#ff8a65',
        'lighten1': '#ff7043',
        'darken1': '#f4511e',
        'darken2': '#e64a19',
        'darken3': '#d84315',
        'darken4': '#bf360c',
        'accent1': '#ff9e80',
        'accent2': '#ff6e40',
        'accent3': '#ff3d00',
        'accent4': '#dd2c00'
      },
      'brown': {
        'base': '#795548',
        'lighten5': '#efebe9',
        'lighten4': '#d7ccc8',
        'lighten3': '#bcaaa4',
        'lighten2': '#a1887f',
        'lighten1': '#8d6e63',
        'darken1': '#6d4c41',
        'darken2': '#5d4037',
        'darken3': '#4e342e',
        'darken4': '#3e2723'
      },
      'blueGrey': {
        'base': '#607d8b',
        'lighten5': '#eceff1',
        'lighten4': '#cfd8dc',
        'lighten3': '#b0bec5',
        'lighten2': '#90a4ae',
        'lighten1': '#78909c',
        'darken1': '#546e7a',
        'darken2': '#455a64',
        'darken3': '#37474f',
        'darken4': '#263238'
      },
      'grey': {
        'base': '#9e9e9e',
        'lighten5': '#fafafa',
        'lighten4': '#f5f5f5',
        'lighten3': '#eeeeee',
        'lighten2': '#e0e0e0',
        'lighten1': '#bdbdbd',
        'darken1': '#757575',
        'darken2': '#616161',
        'darken3': '#424242',
        'darken4': '#212121'
      },
      'shades': {
        'black': '#000000',
        'white': '#ffffff',
        'transparent': 'transparent'
      }
    }
  };
  /**
   * 轉換vuetify color為hex顏色字串
   *
   * @param {String} color 輸入vuetify顏色字串
   * @returns {String} hex 回傳hex顏色字串
   */

  function color2hex(color) {
    //speed
    if (color === 'white') {
      return '#fff';
    } else if (color === 'black') {
      return '#000';
    } else if (color === 'transparent') {
      return '#rgba(0,0,0,0)';
    } //split, 'blue-grey lighten-5' => ['blue-grey', 'lighten-5']


    var cc = split_1(color, ' '); //key0, 'blue-grey' => blueGrey

    var key0 = cc[0].trim();
    key0 = camelCase_1(key0); //key1, 'lighten-5' => 'lighten5', undefined => 'base'

    var key1 = cc[1];

    if (key1 === undefined) {
      key1 = 'base';
    }

    key1 = key1.replace('-', '').trim(); //hex

    var hex = '#666';

    try {
      hex = colors.default[key0][key1];
    } catch (e) {
      console.log('can not convert color: ' + color, colors.default);
    }

    return hex;
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
   * @vue-prop {String} [title=''] 輸入標題字串，預設''
   * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'
   * @vue-prop {Number} [borderRadius=30] 輸入圓角寬度，單位為px，預設30
   * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
   * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'
   * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
   * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'
   * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
   * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
   * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'
   * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'
   * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
   * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
   * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'
   * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'
   * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''
   * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
   * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
   * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
   */

  var script$1 = {
    components: {
      WIcon: WIcon
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      titleColor: {
        type: String,
        default: 'deep-orange darken-1'
      },
      backgroundColor: {
        type: String,
        default: 'white'
      },
      backgroundColorFocus: {
        type: String,
        default: 'white'
      },
      borderRadius: {
        type: Number,
        default: 30
      },
      borderColor: {
        type: String,
        default: 'white'
      },
      borderColorFocus: {
        type: String,
        default: 'white'
      },
      borderShadow: {
        type: Boolean,
        default: true
      },
      leftIcon: {
        type: String,
        default: ''
      },
      leftIconColor: {
        type: String,
        default: 'deep-orange lighten-2'
      },
      leftIconColorFocus: {
        type: String,
        default: 'deep-orange lighten-1'
      },
      leftIconTooltip: {
        type: String,
        default: ''
      },
      rightIcon: {
        type: String,
        default: ''
      },
      rightIconColor: {
        type: String,
        default: 'deep-orange lighten-2'
      },
      rightIconColorFocus: {
        type: String,
        default: 'deep-orange lighten-1'
      },
      rightIconTooltip: {
        type: String,
        default: ''
      },
      small: {
        type: Boolean,
        default: true
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
        focused_trans: false
      };
    },
    mounted: function mounted() {},
    computed: {
      changeParam: function changeParam() {
        //console.log('computed changeParam')
        var vo = this; //focused_trans

        vo.focused_trans = vo.focused;
        return '';
      },
      useBackgroundColor: function useBackgroundColor() {
        //console.log('computed useBackgroundColor')
        var vo = this;
        var s = {};

        if (vo.focused_trans) {
          s['background-color'] = color2hex(vo.backgroundColorFocus);
        } else {
          s['background-color'] = color2hex(vo.backgroundColor);
        }

        return s;
      },
      useBorder: function useBorder() {
        //console.log('computed useBorder')
        var vo = this;
        var s = {};

        if (vo.focused_trans) {
          s['border'] = '1px solid ' + color2hex(vo.borderColorFocus);
        } else {
          s['border'] = '1px solid ' + color2hex(vo.borderColor);
        }

        return s;
      },
      useTitleColor: function useTitleColor() {
        //console.log('computed useTitleColor')
        var vo = this;
        var s = {};
        s['color'] = color2hex(vo.titleColor);
        return s;
      },
      usePadding: function usePadding() {
        //console.log('computed usePadding')
        var vo = this;
        var s = {};

        if (vo.small) {
          s['padding'] = '0px';
        } else {
          s['padding'] = '3px 6px';
        }

        return s;
      },
      usePaddingSlot: function usePaddingSlot() {
        //console.log('computed usePaddingSlot')
        var vo = this;
        var s = {};
        s['padding-top'] = '0px';
        s['padding-bottom'] = '0px';
        s['padding-left'] = '15px';
        s['padding-right'] = '15px';

        if (vo.leftIcon !== '') {
          s['padding-left'] = '10px';
        }

        if (vo.rightIcon !== '') {
          s['padding-right'] = '10px';
        }

        return s;
      }
    },
    methods: {
      clickIcon: function clickIcon(mode) {
        //console.log('methods clickIcon', mode)
        var vo = this;

        if (vo.editable === false) {
          return;
        } //setTimeout


        setTimeout(function () {
          //emit
          vo.$emit('click-' + mode);
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
    return _c("div", { attrs: { changeParam: _vm.changeParam } }, [
      _c("div", { staticStyle: { position: "relative" } }, [
        _c(
          "div",
          {
            style: [
              {
                position: "absolute",
                top: "0px",
                transform: "translateY(-120%)",
                "font-size": "0.9rem",
                "white-space": "nowrap",
                opacity: 0.7
              },
              _vm.useTitleColor
            ]
          },
          [_vm._v("\n            " + _vm._s(_vm.title) + "\n        ")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          class: { group: true, shadow: _vm.borderShadow },
          style: [
            _vm.useBackgroundColor,
            _vm.useBorder,
            _vm.usePadding,
            { "border-radius": _vm.borderRadius + "px" },
            { opacity: _vm.editable ? 1 : 0.6 }
          ]
        },
        [
          _vm.leftIcon
            ? _c(
                "div",
                {
                  staticStyle: { "margin-left": "5px", cursor: "pointer" },
                  on: {
                    click: function($event) {
                      return _vm.clickIcon("left")
                    }
                  }
                },
                [
                  _c(
                    "v-tooltip",
                    {
                      attrs: {
                        bottom: "",
                        transition: "slide-y-transition",
                        disabled: _vm.leftIconTooltip === ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var ttShellEllipseLeft = ref.on;
                              return [
                                _c(
                                  "div",
                                  _vm._g(
                                    { attrs: { ShellEllipse: "leftIcon" } },
                                    Object.assign({}, ttShellEllipseLeft)
                                  ),
                                  [
                                    _c("w-icon", {
                                      attrs: {
                                        icon: _vm.leftIcon,
                                        color: _vm.focused_trans
                                          ? _vm.leftIconColorFocus
                                          : _vm.leftIconColor
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        2921250864
                      )
                    },
                    [
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.leftIconTooltip))])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { style: [{ width: "100%" }, _vm.usePaddingSlot] },
            [_vm._t("default")],
            2
          ),
          _vm._v(" "),
          _vm.rightIcon
            ? _c(
                "div",
                {
                  staticStyle: { "margin-right": "5px", cursor: "pointer" },
                  on: {
                    click: function($event) {
                      return _vm.clickIcon("right")
                    }
                  }
                },
                [
                  _c(
                    "v-tooltip",
                    {
                      attrs: {
                        bottom: "",
                        transition: "slide-y-transition",
                        disabled: _vm.rightIconTooltip === ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var ttShellEllipseRight = ref.on;
                              return [
                                _c(
                                  "div",
                                  _vm._g(
                                    { attrs: { ShellEllipse: "rightIcon" } },
                                    Object.assign({}, ttShellEllipseRight)
                                  ),
                                  [
                                    _c("w-icon", {
                                      attrs: {
                                        icon: _vm.rightIcon,
                                        color: _vm.focused_trans
                                          ? _vm.rightIconColorFocus
                                          : _vm.rightIconColor
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        984625584
                      )
                    },
                    [
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.rightIconTooltip))])
                    ]
                  )
                ],
                1
              )
            : _vm._e()
        ]
      )
    ])
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-10902903_0", { source: "\n.group[data-v-10902903] {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\n}\n.shadow[data-v-10902903] {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n.shadow[data-v-10902903]:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n", map: {"version":3,"sources":["D:\\開源-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WShellEllipse.vue"],"names":[],"mappings":";AAqSA;IACA,oBAAA;IACA,aAAA;IACA,2BAAA;IACA,mBAAA;AACA;AACA;IACA,mGAAA;AACA;AACA;IACA,mGAAA;AACA","file":"WShellEllipse.vue","sourcesContent":["<template>\r\n    <div :changeParam=\"changeParam\">\r\n\r\n        <div style=\"position:relative;\">\r\n\r\n            <div :style=\"[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]\">\r\n                {{title}}\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div\r\n            :class=\"{'group':true,'shadow':borderShadow}\"\r\n            :style=\"[useBackgroundColor,useBorder,usePadding,{'border-radius':borderRadius+'px'},{'opacity':editable?1:0.6}]\"\r\n        >\r\n\r\n            <div style=\"margin-left:5px; cursor:pointer;\" @click=\"clickIcon('left')\" v-if=\"leftIcon\">\r\n\r\n                <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"leftIconTooltip===''\">\r\n\r\n                    <template v-slot:activator=\"{ on: ttShellEllipseLeft }\">\r\n                        <div ShellEllipse=\"leftIcon\" v-on=\"{...ttShellEllipseLeft}\">\r\n                            <w-icon\r\n                                :icon=\"leftIcon\"\r\n                                :color=\"focused_trans?leftIconColorFocus:leftIconColor\"\r\n                            ></w-icon>\r\n                        </div>\r\n                    </template>\r\n\r\n                    <span>{{leftIconTooltip}}</span>\r\n\r\n                </v-tooltip>\r\n\r\n            </div>\r\n\r\n            <div :style=\"[{'width':'100%'},usePaddingSlot]\">\r\n\r\n                <slot></slot>\r\n\r\n            </div>\r\n\r\n            <div style=\"margin-right:5px; cursor:pointer;\" @click=\"clickIcon('right')\" v-if=\"rightIcon\">\r\n\r\n                <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"rightIconTooltip===''\">\r\n\r\n                    <template v-slot:activator=\"{ on: ttShellEllipseRight }\">\r\n                        <div ShellEllipse=\"rightIcon\" v-on=\"{...ttShellEllipseRight}\">\r\n                            <w-icon\r\n                                :icon=\"rightIcon\"\r\n                                :color=\"focused_trans?rightIconColorFocus:rightIconColor\"\r\n                            ></w-icon>\r\n                        </div>\r\n                    </template>\r\n\r\n                    <span>{{rightIconTooltip}}</span>\r\n\r\n                </v-tooltip>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport { color2hex } from '../js/vuetifyColor.mjs'\r\nimport WIcon from './WIcon.vue'\r\n\r\n/**\r\n * @vue-prop {String} [title=''] 輸入標題字串，預設''\r\n * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'\r\n * @vue-prop {Number} [borderRadius=30] 輸入圓角寬度，單位為px，預設30\r\n * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'\r\n * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'\r\n * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'\r\n * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'\r\n * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true\r\n * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''\r\n * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''\r\n * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon\r\n    },\r\n    props: {\r\n        title: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        titleColor: {\r\n            type: String,\r\n            default: 'deep-orange darken-1',\r\n        },\r\n        backgroundColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        backgroundColorFocus: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderRadius: {\r\n            type: Number,\r\n            default: 30,\r\n        },\r\n        borderColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderColorFocus: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderShadow: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        leftIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        leftIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        leftIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        leftIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        rightIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        rightIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        small: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        focused: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focused_trans: false,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //focused_trans\r\n            vo.focused_trans = vo.focused\r\n\r\n            return ''\r\n        },\r\n\r\n        useBackgroundColor: function() {\r\n            //console.log('computed useBackgroundColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.focused_trans) {\r\n                s['background-color'] = color2hex(vo.backgroundColorFocus)\r\n            }\r\n            else {\r\n                s['background-color'] = color2hex(vo.backgroundColor)\r\n            }\r\n            return s\r\n        },\r\n\r\n        useBorder: function() {\r\n            //console.log('computed useBorder')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.focused_trans) {\r\n                s['border'] = '1px solid ' + color2hex(vo.borderColorFocus)\r\n            }\r\n            else {\r\n                s['border'] = '1px solid ' + color2hex(vo.borderColor)\r\n            }\r\n            return s\r\n        },\r\n\r\n        useTitleColor: function() {\r\n            //console.log('computed useTitleColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['color'] = color2hex(vo.titleColor)\r\n            return s\r\n        },\r\n\r\n        usePadding: function() {\r\n            //console.log('computed usePadding')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.small) {\r\n                s['padding'] = '0px'\r\n            }\r\n            else {\r\n                s['padding'] = '3px 6px'\r\n            }\r\n            return s\r\n        },\r\n\r\n        usePaddingSlot: function() {\r\n            //console.log('computed usePaddingSlot')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding-top'] = '0px'\r\n            s['padding-bottom'] = '0px'\r\n            s['padding-left'] = '15px'\r\n            s['padding-right'] = '15px'\r\n            if (vo.leftIcon !== '') {\r\n                s['padding-left'] = '10px'\r\n            }\r\n            if (vo.rightIcon !== '') {\r\n                s['padding-right'] = '10px'\r\n            }\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        clickIcon: function (mode) {\r\n            //console.log('methods clickIcon', mode)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //emit\r\n                vo.$emit('click-' + mode)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.group {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n.shadow {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.shadow:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = "data-v-10902903";
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject SSR */
    

    
    var WShellEllipse = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      browser,
      undefined
    );

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

  /** Used as references for various `Number` constants. */

  var NAN = 0 / 0;
  /** Used to match leading and trailing whitespace. */

  var reTrim$1 = /^\s+|\s+$/g;
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

    value = value.replace(reTrim$1, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }

  var toNumber_1 = toNumber;

  /** Used as references for various `Number` constants. */

  var INFINITY$1 = 1 / 0,
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

    if (value === INFINITY$1 || value === -INFINITY$1) {
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

  var script$2 = {
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

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
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
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-03f04f78_0", { source: "\n.basic[data-v-03f04f78] {\r\n    transition: all 0.7s;\r\n    outline: none;\n}\r\n", map: {"version":3,"sources":["D:\\開源-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WTextCore.vue"],"names":[],"mappings":";AA4IA;IACA,oBAAA;IACA,aAAA;AACA","file":"WTextCore.vue","sourcesContent":["<template>\r\n    <div :changeParam=\"changeParam\">\r\n\r\n        <input\r\n            ref=\"inp\"\r\n            class=\"basic\"\r\n            type=\"text\"\r\n            :style=\"[{'width':'100%'},{'height':'28px'},{'text-align':textAlign},{'opacity':(!value_trans && !focused)?0.6:1}]\"\r\n            :readonly=\"!editable\"\r\n            :placeholder=\"placeholder\"\r\n            v-model=\"value_trans\"\r\n            @focus=\"changeFocused(true)\"\r\n            @blur=\"changeFocused(false);changeContent('blur');\"\r\n            @keyup.enter=\"changeContent('enter')\"\r\n        >\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport verifyValue from 'wsemi/src/verifyValue.mjs'\r\n\r\n/**\r\n * @vue-prop {String} [type='any'] 輸入文字框類型字串，預設'any'\r\n * @vue-prop {String|Number} value 輸入文字框值\r\n * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'\r\n * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false\r\n */\r\nexport default {\r\n    props: {\r\n        type: {\r\n            type: String,\r\n            default: 'any',\r\n        },\r\n        value: {\r\n            type: [String, Number],\r\n        },\r\n        textAlign: {\r\n            type: String,\r\n            default: 'left',\r\n        },\r\n        placeholder: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        focused: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            value_trans: '',\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //value_trans\r\n            vo.value_trans = vo.value\r\n\r\n            return ''\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        changeFocused: function(focused) {\r\n            //console.log('methods changeFocused', focused)\r\n\r\n            let vo = this\r\n\r\n            //save\r\n            //vo.focused_trans = focused\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //emit\r\n                vo.$emit('update:focused', focused)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n        changeContent: function (evname) {\r\n            //console.log('methods changeContent', evname)\r\n\r\n            let vo = this\r\n\r\n            //verifyValue\r\n            let r = verifyValue(vo.value_trans, vo.type)\r\n\r\n            //value, errmsg\r\n            let value = r.value\r\n            let errmsg = r.errmsg\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //reset for error condition\r\n                vo.value_trans = value\r\n\r\n                //emit\r\n                vo.$emit('input', value, errmsg)\r\n\r\n                //emit\r\n                vo.$emit(evname, value, errmsg)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n        setValueTrans: function(value) {\r\n            //console.log('methods setValueTrans', value)\r\n\r\n            let vo = this\r\n\r\n            //set value_trans\r\n            vo.value_trans = value\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.basic {\r\n    transition: all 0.7s;\r\n    outline: none;\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$2 = "data-v-03f04f78";
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    

    
    var WTextCore = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      browser,
      undefined
    );

  //
  /**
   * @vue-prop {String} [title=''] 輸入標題字串，預設''
   * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'
   * @vue-prop {Number} [borderRadius=30] 輸入文字框圓角寬度，單位為px，預設30
   * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
   * @vue-prop {String} [type='any'] 輸入文字框類型字串，預設'any'
   * @vue-prop {String|Number} value 輸入文字框值
   * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
   * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
   * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'
   * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'
   * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
   * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
   * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'
   * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'
   * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''
   * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
   * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'
   * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
   * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'
   * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
   * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
   * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
   * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
   */

  var script$3 = {
    components: {
      WShellEllipse: WShellEllipse,
      WTextCore: WTextCore
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      titleColor: {
        type: String,
        default: 'deep-orange darken-1'
      },
      borderRadius: {
        type: Number,
        default: 30
      },
      borderShadow: {
        type: Boolean,
        default: true
      },
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
      leftIcon: {
        type: String,
        default: ''
      },
      leftIconColor: {
        type: String,
        default: 'deep-orange lighten-2'
      },
      leftIconColorFocus: {
        type: String,
        default: 'deep-orange lighten-1'
      },
      leftIconTooltip: {
        type: String,
        default: ''
      },
      rightIcon: {
        type: String,
        default: ''
      },
      rightIconColor: {
        type: String,
        default: 'deep-orange lighten-2'
      },
      rightIconColorFocus: {
        type: String,
        default: 'deep-orange lighten-1'
      },
      rightIconTooltip: {
        type: String,
        default: ''
      },
      backgroundColor: {
        type: String,
        default: 'white'
      },
      backgroundColorFocus: {
        type: String,
        default: 'white'
      },
      borderColor: {
        type: String,
        default: 'white'
      },
      borderColorFocus: {
        type: String,
        default: 'white'
      },
      placeholder: {
        type: String,
        default: ''
      },
      small: {
        type: Boolean,
        default: true
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
        focused_trans: false
      };
    },
    mounted: function mounted() {},
    computed: {
      changeParam: function changeParam() {
        //console.log('computed changeParam')
        var vo = this; //focused_trans

        vo.focused_trans = vo.focused;
        return '';
      }
    },
    methods: {
      setValueTrans: function setValueTrans(value) {
        //console.log('methods setValueTrans', value)
        var vo = this; //setValueTrans

        vo.$refs.inp.setValueTrans(value);
      },
      changeFocused: function changeFocused(focused) {
        //console.log('methods changeFocused', focused)
        var vo = this; //save

        vo.focused_trans = focused; //setTimeout

        setTimeout(function () {
          //emit
          vo.$emit('update:focused', focused);
        }, 1);
      }
    }
  };

  /* script */
  const __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { attrs: { changeParam: _vm.changeParam } },
      [
        _c(
          "w-shell-ellipse",
          {
            attrs: {
              title: _vm.title,
              titleColor: _vm.titleColor,
              borderRadius: _vm.borderRadius,
              borderShadow: _vm.borderShadow,
              leftIcon: _vm.leftIcon,
              leftIconColor: _vm.leftIconColor,
              leftIconColorFocus: _vm.leftIconColorFocus,
              leftIconTooltip: _vm.leftIconTooltip,
              rightIcon: _vm.rightIcon,
              rightIconColor: _vm.rightIconColor,
              rightIconColorFocus: _vm.rightIconColorFocus,
              rightIconTooltip: _vm.rightIconTooltip,
              backgroundColor: _vm.backgroundColor,
              backgroundColorFocus: _vm.backgroundColorFocus,
              borderColor: _vm.borderColor,
              borderColorFocus: _vm.borderColorFocus,
              small: _vm.small,
              editable: _vm.editable,
              focused: _vm.focused_trans
            },
            on: {
              "click-left": function(v) {
                _vm.$emit("click-left", v);
              },
              "click-right": function(v) {
                _vm.$emit("click-right", v);
              }
            }
          },
          [
            _c("w-text-core", {
              ref: "inp",
              attrs: {
                type: _vm.type,
                textAlign: _vm.textAlign,
                placeholder: _vm.placeholder,
                editable: _vm.editable,
                value: _vm.value,
                focused: _vm.focused_trans
              },
              on: {
                "update:focused": _vm.changeFocused,
                blur: function(v, err) {
                  _vm.$emit("blur", v, err);
                },
                enter: function(v, err) {
                  _vm.$emit("enter", v, err);
                },
                input: function(v, err) {
                  _vm.$emit("input", v, err);
                }
              }
            })
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = function (inject) {
      if (!inject) return
      inject("data-v-a560da96_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"WText.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$3 = "data-v-a560da96";
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject SSR */
    

    
    var WText = normalizeComponent_1(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      browser,
      undefined
    );

  //
  /**
   * @vue-prop {Array} value 輸入字串陣列
   * @vue-prop {String} [textColor='grey darken-2'] 輸入文字顏色字串，預設'grey darken-2'
   * @vue-prop {String} [backgroundColor='grey lighten-3'] 輸入背景顏色字串，預設'grey lighten-3'
   * @vue-prop {String} [inputTextBackgroundColor='white'] 輸入輸入框背景顏色字串，預設'white'
   * @vue-prop {String} [inputTextBackgroundColorFocus='grey lighten-5'] 輸入輸入框背景Focus顏色字串，預設'grey lighten-5'
   * @vue-prop {String} [inputTextBorderColor='grey lighten-1'] 輸入輸入框未Focus時文字顏色字串，預設'grey lighten-1'
   * @vue-prop {String} [inputTextBorderColorFocus='grey darken-1'] 輸入輸入框Focus時文字顏色字串，預設'grey darken-1'
   * @vue-prop {String} [iconTooltip='新增'] 輸入輸入框右側按鈕提示文字字串，預設'新增'
   * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
   * @vue-prop {String} [nodata='無'] 輸入無任何字串陣列時的預設文字字串，預設'無'
   */

  var script$4 = {
    components: {
      WText: WText
    },
    props: {
      value: {
        type: Array
      },
      textColor: {
        type: String,
        default: 'grey darken-2'
      },
      backgroundColor: {
        type: String,
        default: 'grey lighten-3'
      },
      inputTextBackgroundColor: {
        type: String,
        default: 'white'
      },
      inputTextBackgroundColorFocus: {
        type: String,
        default: 'grey lighten-5'
      },
      inputTextBorderColor: {
        type: String,
        default: 'grey lighten-1'
      },
      inputTextBorderColorFocus: {
        type: String,
        default: 'grey'
      },
      inputTextButtonColor: {
        type: String,
        default: 'grey lighten-1'
      },
      inputTextButtonColorFocus: {
        type: String,
        default: 'grey'
      },
      iconTooltip: {
        type: String,
        default: '新增'
      },
      editable: {
        type: Boolean,
        default: true
      },
      nodata: {
        type: String,
        default: '無'
      }
    },
    data: function data() {
      return {
        mdiCloseCircle: mdiCloseCircle,
        mdiPlusCircle: mdiPlusCircle,
        value_trans: [],
        userinput: ''
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
      clickChip: function clickChip(item) {
        //console.log('methods clickChip', item)
        var vo = this; //setTimeout

        setTimeout(function () {
          //emit
          vo.$emit('click', item);
        }, 1);
      },
      clickAddBtn: function clickAddBtn() {
        //console.log('methods clickAddBtn')
        var vo = this; //check

        if (trim_1(vo.userinput) === '') {
          return;
        } //setTimeout


        setTimeout(function () {
          //push
          vo.value_trans.push(trim_1(vo.userinput)); //emit

          vo.$emit('input', vo.value_trans); //clear

          vo.userinput = '';
        }, 1);
      },
      pull: function pull(ar, item) {
        var i = ar.indexOf(item);
        ar.splice(i, 1);
        return ar;
      },
      clickRemoveBtn: function clickRemoveBtn(item) {
        //console.log('methods clickRemoveBtn', cp)
        var vo = this; //setTimeout

        setTimeout(function () {
          //emit
          vo.$emit('input', vo.pull(vo.value_trans, item));
        }, 1);
      }
    }
  };

  /* script */
  const __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticStyle: { display: "inline-block" },
        attrs: { changeParam: _vm.changeParam }
      },
      [
        _vm._l(_vm.value_trans, function(item, kitem) {
          return [
            _c(
              "v-chip",
              {
                key: kitem,
                staticClass: "v-chpi-modify",
                attrs: {
                  small: "",
                  "text-color": _vm.textColor,
                  color: _vm.backgroundColor,
                  close: _vm.editable,
                  "close-icon": _vm.mdiCloseCircle
                },
                on: {
                  click: function($event) {
                    return _vm.clickChip(item)
                  },
                  "click:close": function($event) {
                    return _vm.clickRemoveBtn(item)
                  }
                }
              },
              [
                _c("span", { staticStyle: { "font-size": "0.875rem" } }, [
                  _vm._v(_vm._s(item))
                ])
              ]
            )
          ]
        }),
        _vm._v(" "),
        _vm.value_trans.length === 0
          ? [
              _c(
                "v-chip",
                {
                  staticClass: "v-chpi-modify",
                  attrs: {
                    small: "",
                    "text-color": _vm.textColor,
                    color: _vm.backgroundColor
                  }
                },
                [
                  _c("span", { staticStyle: { "font-size": "0.875rem" } }, [
                    _vm._v(_vm._s(_vm.nodata))
                  ])
                ]
              )
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.editable
          ? _c("div", { staticStyle: { display: "inline-block", width: "10px" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.editable
          ? _c(
              "div",
              {
                staticStyle: {
                  display: "inline-block",
                  width: "150px",
                  "vertical-align": "middle"
                }
              },
              [
                _c("w-text", {
                  attrs: {
                    borderShadow: false,
                    rightIcon: _vm.mdiPlusCircle,
                    rightIconColor: _vm.inputTextButtonColor,
                    rightIconColorFocus: _vm.inputTextButtonColorFocus,
                    rightIconTooltip: _vm.iconTooltip,
                    backgroundColor: _vm.inputTextBackgroundColor,
                    backgroundColorFocus: _vm.inputTextBackgroundColorFocus,
                    borderColor: _vm.inputTextBorderColor,
                    borderColorFocus: _vm.inputTextBorderColorFocus
                  },
                  on: { "click-right": _vm.clickAddBtn, enter: _vm.clickAddBtn },
                  model: {
                    value: _vm.userinput,
                    callback: function($$v) {
                      _vm.userinput = $$v;
                    },
                    expression: "userinput"
                  }
                })
              ],
              1
            )
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = function (inject) {
      if (!inject) return
      inject("data-v-a9468302_0", { source: "\n.v-chpi-modify[data-v-a9468302] {\r\n    vertical-align: middle;\r\n    margin: 10px 10px 10px 0px;\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n", map: {"version":3,"sources":["D:\\開源-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WChips.vue"],"names":[],"mappings":";AA+NA;IACA,sBAAA;IACA,0BAAA;IACA,mGAAA;AACA","file":"WChips.vue","sourcesContent":["<template>\r\n    <div style=\"display:inline-block;\" :changeParam=\"changeParam\">\r\n\r\n        <template v-for=\"(item,kitem) in value_trans\">\r\n\r\n            <v-chip\r\n                class=\"v-chpi-modify\"\r\n                small\r\n                :text-color=\"textColor\"\r\n                :color=\"backgroundColor\"\r\n                :close=\"editable\"\r\n                :close-icon=\"mdiCloseCircle\"\r\n                @click=\"clickChip(item)\"\r\n                @click:close=\"clickRemoveBtn(item)\"\r\n                :key=\"kitem\"\r\n            >\r\n\r\n                <span style=\"font-size:0.875rem;\">{{item}}</span>\r\n\r\n            </v-chip>\r\n\r\n        </template>\r\n\r\n        <template v-if=\"value_trans.length===0\">\r\n\r\n            <v-chip\r\n                class=\"v-chpi-modify\"\r\n                small\r\n                :text-color=\"textColor\"\r\n                :color=\"backgroundColor\"\r\n            >\r\n\r\n                <span style=\"font-size:0.875rem;\">{{nodata}}</span>\r\n\r\n            </v-chip>\r\n\r\n        </template>\r\n\r\n        <div style=\"display:inline-block; width:10px;\" v-if=\"editable\"></div>\r\n\r\n        <div style=\"display:inline-block; width:150px; vertical-align:middle;\" v-if=\"editable\">\r\n            <w-text\r\n                :borderShadow=\"false\"\r\n                :rightIcon=\"mdiPlusCircle\"\r\n                :rightIconColor=\"inputTextButtonColor\"\r\n                :rightIconColorFocus=\"inputTextButtonColorFocus\"\r\n                :rightIconTooltip=\"iconTooltip\"\r\n                :backgroundColor=\"inputTextBackgroundColor\"\r\n                :backgroundColorFocus=\"inputTextBackgroundColorFocus\"\r\n                :borderColor=\"inputTextBorderColor\"\r\n                :borderColorFocus=\"inputTextBorderColorFocus\"\r\n                @click-right=\"clickAddBtn\"\r\n                @enter=\"clickAddBtn\"\r\n                v-model=\"userinput\"\r\n            ></w-text>\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport { mdiCloseCircle, mdiPlusCircle } from '@mdi/js'\r\nimport trim from 'lodash/trim'\r\nimport WText from './WText.vue'\r\n\r\n/**\r\n * @vue-prop {Array} value 輸入字串陣列\r\n * @vue-prop {String} [textColor='grey darken-2'] 輸入文字顏色字串，預設'grey darken-2'\r\n * @vue-prop {String} [backgroundColor='grey lighten-3'] 輸入背景顏色字串，預設'grey lighten-3'\r\n * @vue-prop {String} [inputTextBackgroundColor='white'] 輸入輸入框背景顏色字串，預設'white'\r\n * @vue-prop {String} [inputTextBackgroundColorFocus='grey lighten-5'] 輸入輸入框背景Focus顏色字串，預設'grey lighten-5'\r\n * @vue-prop {String} [inputTextBorderColor='grey lighten-1'] 輸入輸入框未Focus時文字顏色字串，預設'grey lighten-1'\r\n * @vue-prop {String} [inputTextBorderColorFocus='grey darken-1'] 輸入輸入框Focus時文字顏色字串，預設'grey darken-1'\r\n * @vue-prop {String} [iconTooltip='新增'] 輸入輸入框右側按鈕提示文字字串，預設'新增'\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {String} [nodata='無'] 輸入無任何字串陣列時的預設文字字串，預設'無'\r\n */\r\nexport default {\r\n    components: {\r\n        WText\r\n    },\r\n    props: {\r\n        value: {\r\n            type: Array,\r\n        },\r\n        textColor: {\r\n            type: String,\r\n            default: 'grey darken-2',\r\n        },\r\n        backgroundColor: {\r\n            type: String,\r\n            default: 'grey lighten-3',\r\n        },\r\n        inputTextBackgroundColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        inputTextBackgroundColorFocus: {\r\n            type: String,\r\n            default: 'grey lighten-5',\r\n        },\r\n        inputTextBorderColor: {\r\n            type: String,\r\n            default: 'grey lighten-1',\r\n        },\r\n        inputTextBorderColorFocus: {\r\n            type: String,\r\n            default: 'grey',\r\n        },\r\n        inputTextButtonColor: {\r\n            type: String,\r\n            default: 'grey lighten-1',\r\n        },\r\n        inputTextButtonColorFocus: {\r\n            type: String,\r\n            default: 'grey',\r\n        },\r\n        iconTooltip: {\r\n            type: String,\r\n            default: '新增',\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        nodata: {\r\n            type: String,\r\n            default: '無',\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            mdiCloseCircle,\r\n            mdiPlusCircle,\r\n            value_trans: [],\r\n            userinput: '',\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //value_trans\r\n            vo.value_trans = vo.value\r\n\r\n            return ''\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        clickChip: function(item) {\r\n            //console.log('methods clickChip', item)\r\n\r\n            let vo = this\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //emit\r\n                vo.$emit('click', item)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n        clickAddBtn: function () {\r\n            //console.log('methods clickAddBtn')\r\n\r\n            let vo = this\r\n\r\n            //check\r\n            if (trim(vo.userinput) === '') {\r\n                return\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //push\r\n                vo.value_trans.push(trim(vo.userinput))\r\n\r\n                //emit\r\n                vo.$emit('input', vo.value_trans)\r\n\r\n                //clear\r\n                vo.userinput = ''\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n        pull: function(ar, item) {\r\n            let i = ar.indexOf(item)\r\n            ar.splice(i, 1)\r\n            return ar\r\n        },\r\n\r\n        clickRemoveBtn: function (item) {\r\n            //console.log('methods clickRemoveBtn', cp)\r\n\r\n            let vo = this\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //emit\r\n                vo.$emit('input', vo.pull(vo.value_trans, item))\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.v-chpi-modify {\r\n    vertical-align: middle;\r\n    margin: 10px 10px 10px 0px;\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$4 = "data-v-a9468302";
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject SSR */
    

    
    var WChips = normalizeComponent_1(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      browser,
      undefined
    );

  return WChips;

}));
//# sourceMappingURL=w-chips.umd.js.map
