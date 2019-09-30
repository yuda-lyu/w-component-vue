/*!
 * w-confirm v1.1.30
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['w-confirm'] = factory());
}(this, function () { 'use strict';

  // Material Design Icons v4.4.95
  var mdiAlert="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z";var mdiCheckboxMarkedCircleOutline="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z";var mdiCloseCircleOutline="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z";

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
  /**
   * @vue-prop {Boolean} [show=false] 輸入是否顯示，預設false
   * @vue-prop {String} [title=''] 輸入標題字串，預設''
   * @vue-prop {String} [titleColor='black'] 輸入標題顏色字串，預設'black'
   * @vue-prop {String} [content=''] 輸入內容字串，預設''
   * @vue-prop {String} [contentColor='black'] 輸入內容顏色字串，預設'black'
   * @vue-prop {String} [contentIcon=mdiAlert] 輸入內容左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiAlert
   * @vue-prop {String} [contentIconColor='orange'] 輸入內容左側圖標顏色字串，預設'orange'
   * @vue-prop {Number} [contentIconSize=40] 輸入內容左側圖標大小數字，預設40
   * @vue-prop {String} [noText='取消'] 輸入否決按鈕文字字串，預設'取消'
   * @vue-prop {String} [yesText='同意'] 輸入同意按鈕文字字串，預設'同意'
   * @vue-prop {Boolean} [hasCancelBtn=true] 輸入是否顯示取消按鈕，預設true
   * @vue-prop {String} [headerBackgroundColor='grey lighten-5'] 輸入上方區塊背景顏色字串，預設'grey lighten-5'
   * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'
   * @vue-prop {String} [footerBackgroundColor='grey lighten-5'] 輸入下方區塊背景顏色字串，預設'grey lighten-5'
   * @vue-prop {Number} [widthMax=500] 輸入彈窗最大寬度，單位為px，預設500
   */

  var script = {
    components: {},
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      titleColor: {
        type: String,
        default: 'black'
      },
      content: {
        type: String,
        default: ''
      },
      contentColor: {
        type: String,
        default: 'grey darken-2'
      },
      contentIcon: {
        type: String,
        default: mdiAlert
      },
      contentIconColor: {
        type: String,
        default: 'orange'
      },
      contentIconSize: {
        type: Number,
        default: 40
      },
      noText: {
        type: String,
        default: '取消'
      },
      yesText: {
        type: String,
        default: '同意'
      },
      hasCancelBtn: {
        type: Boolean,
        default: true
      },
      headerBackgroundColor: {
        type: String,
        default: 'grey lighten-5'
      },
      contentBackgroundColor: {
        type: String,
        default: 'white'
      },
      footerBackgroundColor: {
        type: String,
        default: 'grey lighten-5'
      },
      widthMax: {
        type: Number,
        default: 500
      }
    },
    data: function data() {
      return {
        mdiAlert: mdiAlert,
        mdiCheckboxMarkedCircleOutline: mdiCheckboxMarkedCircleOutline,
        mdiCloseCircleOutline: mdiCloseCircleOutline,
        show_trans: null
      };
    },
    mounted: function mounted() {},
    computed: {
      changeParam: function changeParam() {
        //console.log('computed changeParam')
        var vo = this; //show_trans

        vo.show_trans = vo.show;
        return '';
      },
      useTitleColor: function useTitleColor() {
        //console.log('computed useTitleColor')
        var vo = this;
        var s = {};
        s['color'] = color2hex(vo.titleColor);
        return s;
      },
      useHeaderStyle: function useHeaderStyle() {
        //console.log('computed useHeaderStyle')
        var vo = this;
        var s = {};
        s['padding'] = '15px';
        s['background-color'] = color2hex(vo.headerBackgroundColor);
        s['border-bottom'] = '1px solid #ddd';
        return s;
      },
      useContentStyle: function useContentStyle() {
        //console.log('computed useContentStyle')
        var vo = this;
        var s = {};
        s['padding'] = '20px 15px';
        s['background-color'] = color2hex(vo.contentBackgroundColor);
        s['display'] = 'flex';
        s['align-items'] = 'center';
        s['color'] = color2hex(vo.contentColor);
        return s;
      },
      useFooterStyle: function useFooterStyle() {
        //console.log('computed useFooterStyle')
        var vo = this;
        var s = {};
        s['padding'] = '15px';
        s['background-color'] = color2hex(vo.footerBackgroundColor);
        s['border-top'] = '1px solid #ddd';
        s['text-align'] = 'right';
        return s;
      }
    },
    methods: {
      clickBtns: function clickBtns(state) {
        //console.log('methods clickBtns', state)
        var vo = this; //hide

        vo.show_trans = false; //setTimeout

        setTimeout(function () {
          //emit
          vo.$emit('update:show', vo.show_trans); //emit

          var c = 'no';

          if (state) {
            c = 'yes';
          }

          vo.$emit('click-' + c);
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
      "v-dialog",
      {
        attrs: {
          changeParam: _vm.changeParam,
          persistent: "",
          "max-width": _vm.widthMax
        },
        model: {
          value: _vm.show_trans,
          callback: function($$v) {
            _vm.show_trans = $$v;
          },
          expression: "show_trans"
        }
      },
      [
        _c("v-card", [
          _c("div", { style: _vm.useHeaderStyle }, [
            _c(
              "span",
              {
                style: [
                  { "font-size": "1.2rem", "font-weight": "bold" },
                  _vm.useTitleColor
                ]
              },
              [
                _vm._v(
                  "\n                " + _vm._s(_vm.title) + "\n            "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { style: _vm.useContentStyle },
            [
              _c(
                "v-icon",
                {
                  attrs: {
                    size: _vm.contentIconSize,
                    color: _vm.contentIconColor
                  }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.contentIcon) +
                      "\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { "margin-left": "15px", "font-size": "1.2rem" } },
                [_vm._v(_vm._s(_vm.content))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { style: _vm.useFooterStyle },
            [
              _vm.hasCancelBtn
                ? _c(
                    "v-btn",
                    {
                      staticStyle: { "margin-left": "20px" },
                      attrs: {
                        small: "",
                        rounded: "",
                        dark: "",
                        color: "pink lighten-1"
                      },
                      on: {
                        click: function($event) {
                          return _vm.clickBtns(false)
                        }
                      }
                    },
                    [
                      _c("v-icon", { staticStyle: { "margin-left": "-8px" } }, [
                        _vm._v(_vm._s(_vm.mdiCloseCircleOutline))
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "margin-left": "5px",
                            "font-size": "0.875rem",
                            "text-transform": "none"
                          }
                        },
                        [_vm._v(_vm._s(_vm.noText))]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticStyle: { "margin-left": "20px" },
                  attrs: { small: "", rounded: "", dark: "", color: "blue" },
                  on: {
                    click: function($event) {
                      return _vm.clickBtns(true)
                    }
                  }
                },
                [
                  _c("v-icon", { staticStyle: { "margin-left": "-8px" } }, [
                    _vm._v(_vm._s(_vm.mdiCheckboxMarkedCircleOutline))
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "margin-left": "5px",
                        "font-size": "0.875rem",
                        "text-transform": "none"
                      }
                    },
                    [_vm._v(_vm._s(_vm.yesText))]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ],
      1
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-7f919942_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"WConfirm.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-7f919942";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var WConfirm = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
      undefined
    );

  return WConfirm;

}));
//# sourceMappingURL=w-confirm.umd.js.map
