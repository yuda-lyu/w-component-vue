/*!
 * w-text-suggest v1.1.30
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['w-text-suggest'] = factory());
}(this, function () { 'use strict';

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

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace (n) {
  	return n && n['default'] || n;
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
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function assocIndexOf(array, key) {
    var length = array.length;

    while (length--) {
      if (eq_1(array[length][0], key)) {
        return length;
      }
    }

    return -1;
  }

  var _assocIndexOf = assocIndexOf;

  /** Used for built-in method references. */

  var arrayProto = Array.prototype;
  /** Built-in value references. */

  var splice = arrayProto.splice;
  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function listCacheDelete(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }

    var lastIndex = data.length - 1;

    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }

    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function listCacheGet(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function listCacheHas(key) {
    return _assocIndexOf(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */

  function listCacheSet(key, value) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }

    return this;
  }

  var _listCacheSet = listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `ListCache`.


  ListCache.prototype.clear = _listCacheClear;
  ListCache.prototype['delete'] = _listCacheDelete;
  ListCache.prototype.get = _listCacheGet;
  ListCache.prototype.has = _listCacheHas;
  ListCache.prototype.set = _listCacheSet;
  var _ListCache = ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */

  function stackClear() {
    this.__data__ = new _ListCache();
    this.size = 0;
  }

  var _stackClear = stackClear;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);
    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas;

  /** Used to detect overreaching core-js shims. */

  var coreJsData = _root['__core-js_shared__'];
  var _coreJsData = coreJsData;

  /** Used to detect methods masquerading as native. */

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */


  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  var _isMasked = isMasked;

  /** Used for built-in method references. */
  var funcProto = Function.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString = funcProto.toString;
  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */

  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }

  var _toSource = toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  /** Used to detect host constructors (Safari). */

  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  /** Used for built-in method references. */

  var funcProto$1 = Function.prototype,
      objectProto$2 = Object.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString$1 = funcProto$1.toString;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
  /** Used to detect if a method is native. */

  var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */

  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }

    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */

  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  /* Built-in method references that are verified to be native. */

  var Map$1 = _getNative(_root, 'Map');
  var _Map = Map$1;

  /* Built-in method references that are verified to be native. */

  var nativeCreate = _getNative(Object, 'create');
  var _nativeCreate = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */

  function hashClear() {
    this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete;

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  /** Used for built-in method references. */

  var objectProto$3 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function hashGet(key) {
    var data = this.__data__;

    if (_nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }

    return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet;

  /** Used for built-in method references. */

  var objectProto$4 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function hashHas(key) {
    var data = this.__data__;
    return _nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
  }

  var _hashHas = hashHas;

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */

  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `Hash`.


  Hash.prototype.clear = _hashClear;
  Hash.prototype['delete'] = _hashDelete;
  Hash.prototype.get = _hashGet;
  Hash.prototype.has = _hashHas;
  Hash.prototype.set = _hashSet;
  var _Hash = Hash;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */

  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _Hash(),
      'map': new (_Map || _ListCache)(),
      'string': new _Hash()
    };
  }

  var _mapCacheClear = mapCacheClear;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = _typeof(value);

    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  var _isKeyable = isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */

  function getMapData(map, key) {
    var data = map.__data__;
    return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  var _getMapData = getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function mapCacheDelete(key) {
    var result = _getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function mapCacheGet(key) {
    return _getMapData(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function mapCacheHas(key) {
    return _getMapData(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */

  function mapCacheSet(key, value) {
    var data = _getMapData(this, key),
        size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `MapCache`.


  MapCache.prototype.clear = _mapCacheClear;
  MapCache.prototype['delete'] = _mapCacheDelete;
  MapCache.prototype.get = _mapCacheGet;
  MapCache.prototype.has = _mapCacheHas;
  MapCache.prototype.set = _mapCacheSet;
  var _MapCache = MapCache;

  /** Used as the size to enable large array optimizations. */

  var LARGE_ARRAY_SIZE = 200;
  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */

  function stackSet(key, value) {
    var data = this.__data__;

    if (data instanceof _ListCache) {
      var pairs = data.__data__;

      if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }

      data = this.__data__ = new _MapCache(pairs);
    }

    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Stack(entries) {
    var data = this.__data__ = new _ListCache(entries);
    this.size = data.size;
  } // Add methods to `Stack`.


  Stack.prototype.clear = _stackClear;
  Stack.prototype['delete'] = _stackDelete;
  Stack.prototype.get = _stackGet;
  Stack.prototype.has = _stackHas;
  Stack.prototype.set = _stackSet;
  var _Stack = Stack;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */

  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED$2);

    return this;
  }

  var _setCacheAdd = setCacheAdd;

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  var _setCacheHas = setCacheHas;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */

  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;
    this.__data__ = new _MapCache();

    while (++index < length) {
      this.add(values[index]);
    }
  } // Add methods to `SetCache`.


  SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
  SetCache.prototype.has = _setCacheHas;
  var _SetCache = SetCache;

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }

    return false;
  }

  var _arraySome = arraySome;

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  var _cacheHas = cacheHas;

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;
  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */

  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    } // Assume cyclic values are equal.


    var stacked = stack.get(array);

    if (stacked && stack.get(other)) {
      return stacked == other;
    }

    var index = -1,
        result = true,
        seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache() : undefined;
    stack.set(array, other);
    stack.set(other, array); // Ignore non-index properties.

    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }

      if (compared !== undefined) {
        if (compared) {
          continue;
        }

        result = false;
        break;
      } // Recursively compare arrays (susceptible to call stack limits).


      if (seen) {
        if (!_arraySome(other, function (othValue, othIndex) {
          if (!_cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }

    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  var _equalArrays = equalArrays;

  /** Built-in value references. */

  var Uint8Array = _root.Uint8Array;
  var _Uint8Array = Uint8Array;

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);
    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  var _mapToArray = mapToArray;

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);
    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }

  var _setToArray = setToArray;

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG$1 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;
  /** `Object#toString` result references. */

  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag$1 = '[object Symbol]';
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]';
  /** Used to convert symbols to primitives and strings. */

  var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */

  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }

        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
          return false;
        }

        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq_1(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag$1:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == other + '';

      case mapTag:
        var convert = _mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
        convert || (convert = _setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        } // Assume cyclic values are equal.


        var stacked = stack.get(object);

        if (stacked) {
          return stacked == other;
        }

        bitmask |= COMPARE_UNORDERED_FLAG$1; // Recursively compare objects (susceptible to call stack limits).

        stack.set(object, other);
        var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag$1:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }

    }

    return false;
  }

  var _equalByTag = equalByTag;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }

  var _arrayPush = arrayPush;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */

  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }

    return result;
  }

  var _arrayFilter = arrayFilter;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  var stubArray_1 = stubArray;

  /** Used for built-in method references. */

  var objectProto$5 = Object.prototype;
  /** Built-in value references. */

  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeGetSymbols = Object.getOwnPropertySymbols;
  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */

  var getSymbols = !nativeGetSymbols ? stubArray_1 : function (object) {
    if (object == null) {
      return [];
    }

    object = Object(object);
    return _arrayFilter(nativeGetSymbols(object), function (symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var _getSymbols = getSymbols;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }

  var _baseTimes = baseTimes;

  /** `Object#toString` result references. */

  var argsTag = '[object Arguments]';
  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */

  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;

  /** Used for built-in method references. */

  var objectProto$6 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
  /** Built-in value references. */

  var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */

  var isArguments = _baseIsArguments(function () {
    return arguments;
  }()) ? _baseIsArguments : function (value) {
    return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable$1.call(value, 'callee');
  };
  var isArguments_1 = isArguments;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  var isBuffer_1 = createCommonjsModule(function (module, exports) {
    /** Detect free variable `exports`. */
    var freeExports =  exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Built-in value references. */

    var Buffer = moduleExports ? _root.Buffer : undefined;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */

    var isBuffer = nativeIsBuffer || stubFalse_1;
    module.exports = isBuffer;
  });

  /** `Object#toString` result references. */

  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      errorTag$1 = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag$1 = '[object Map]',
      numberTag$1 = '[object Number]',
      objectTag = '[object Object]',
      regexpTag$2 = '[object RegExp]',
      setTag$1 = '[object Set]',
      stringTag$1 = '[object String]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  /** Used to identify `toStringTag` values of typed arrays. */

  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag] = false;
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */

  function baseIsTypedArray(value) {
    return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  /* Node.js helper references. */

  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */

  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
  var isTypedArray_1 = isTypedArray;

  /** Used for built-in method references. */

  var objectProto$7 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */

  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer_1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
      _isIndex(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */

  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$8;
    return value === proto;
  }

  var _isPrototype = isPrototype;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeKeys = _overArg(Object.keys, Object);
  var _nativeKeys = nativeKeys;

  /** Used for built-in method references. */

  var objectProto$9 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$6 = objectProto$9.hasOwnProperty;
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeys(object) {
    if (!_isPrototype(object)) {
      return _nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }

  var _baseKeys = baseKeys;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */

  function keys(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
  }

  var keys_1 = keys;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */

  function getAllKeys(object) {
    return _baseGetAllKeys(object, keys_1, _getSymbols);
  }

  var _getAllKeys = getAllKeys;

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG$2 = 1;
  /** Used for built-in method references. */

  var objectProto$a = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$7 = objectProto$a.hasOwnProperty;
  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */

  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
        objProps = _getAllKeys(object),
        objLength = objProps.length,
        othProps = _getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }

    var index = objLength;

    while (index--) {
      var key = objProps[index];

      if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
        return false;
      }
    } // Assume cyclic values are equal.


    var stacked = stack.get(object);

    if (stacked && stack.get(other)) {
      return stacked == other;
    }

    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;

    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      } // Recursively compare objects (susceptible to call stack limits).


      if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }

      skipCtor || (skipCtor = key == 'constructor');
    }

    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

      if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }

    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  var _equalObjects = equalObjects;

  /* Built-in method references that are verified to be native. */

  var DataView = _getNative(_root, 'DataView');
  var _DataView = DataView;

  /* Built-in method references that are verified to be native. */

  var Promise$1 = _getNative(_root, 'Promise');
  var _Promise = Promise$1;

  /* Built-in method references that are verified to be native. */

  var Set$1 = _getNative(_root, 'Set');
  var _Set = Set$1;

  /* Built-in method references that are verified to be native. */

  var WeakMap$1 = _getNative(_root, 'WeakMap');
  var _WeakMap = WeakMap$1;

  /** `Object#toString` result references. */

  var mapTag$2 = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$2 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';
  var dataViewTag$2 = '[object DataView]';
  /** Used to detect maps, sets, and weakmaps. */

  var dataViewCtorString = _toSource(_DataView),
      mapCtorString = _toSource(_Map),
      promiseCtorString = _toSource(_Promise),
      setCtorString = _toSource(_Set),
      weakMapCtorString = _toSource(_WeakMap);
  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  var getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

  if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2 || _Map && getTag(new _Map()) != mapTag$2 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$2 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
    getTag = function getTag(value) {
      var result = _baseGetTag(value),
          Ctor = result == objectTag$1 ? value.constructor : undefined,
          ctorString = Ctor ? _toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;

          case mapCtorString:
            return mapTag$2;

          case promiseCtorString:
            return promiseTag;

          case setCtorString:
            return setTag$2;

          case weakMapCtorString:
            return weakMapTag$1;
        }
      }

      return result;
    };
  }

  var _getTag = getTag;

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG$3 = 1;
  /** `Object#toString` result references. */

  var argsTag$2 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      objectTag$2 = '[object Object]';
  /** Used for built-in method references. */

  var objectProto$b = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */

  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_1(object),
        othIsArr = isArray_1(other),
        objTag = objIsArr ? arrayTag$1 : _getTag(object),
        othTag = othIsArr ? arrayTag$1 : _getTag(other);
    objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
    othTag = othTag == argsTag$2 ? objectTag$2 : othTag;
    var objIsObj = objTag == objectTag$2,
        othIsObj = othTag == objectTag$2,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer_1(object)) {
      if (!isBuffer_1(other)) {
        return false;
      }

      objIsArr = true;
      objIsObj = false;
    }

    if (isSameTag && !objIsObj) {
      stack || (stack = new _Stack());
      return objIsArr || isTypedArray_1(object) ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack) : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }

    if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
      var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new _Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }

    if (!isSameTag) {
      return false;
    }

    stack || (stack = new _Stack());
    return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  var _baseIsEqualDeep = baseIsEqualDeep;

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */

  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }

    if (value == null || other == null || !isObjectLike_1(value) && !isObjectLike_1(other)) {
      return value !== value && other !== other;
    }

    return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  var _baseIsEqual = baseIsEqual;

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG$4 = 1,
      COMPARE_UNORDERED_FLAG$2 = 2;
  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */

  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }

    object = Object(object);

    while (index--) {
      var data = matchData[index];

      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }

    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new _Stack();

        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }

        if (!(result === undefined ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack) : result)) {
          return false;
        }
      }
    }

    return true;
  }

  var _baseIsMatch = baseIsMatch;

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */

  function isStrictComparable(value) {
    return value === value && !isObject_1(value);
  }

  var _isStrictComparable = isStrictComparable;

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */

  function getMatchData(object) {
    var result = keys_1(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];
      result[length] = [key, value, _isStrictComparable(value)];
    }

    return result;
  }

  var _getMatchData = getMatchData;

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function (object) {
      if (object == null) {
        return false;
      }

      return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
  }

  var _matchesStrictComparable = matchesStrictComparable;

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */

  function baseMatches(source) {
    var matchData = _getMatchData(source);

    if (matchData.length == 1 && matchData[0][2]) {
      return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }

    return function (object) {
      return object === source || _baseIsMatch(object, source, matchData);
    };
  }

  var _baseMatches = baseMatches;

  /** Used to match property names within property paths. */

  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;
  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */

  function isKey(value, object) {
    if (isArray_1(value)) {
      return false;
    }

    var type = _typeof(value);

    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol_1(value)) {
      return true;
    }

    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }

  var _isKey = isKey;

  /** Error message constants. */

  var FUNC_ERROR_TEXT = 'Expected a function';
  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */

  function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    var memoized = function memoized() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }

      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };

    memoized.cache = new (memoize.Cache || _MapCache)();
    return memoized;
  } // Expose `MapCache`.


  memoize.Cache = _MapCache;
  var memoize_1 = memoize;

  /** Used as the maximum memoize cache size. */

  var MAX_MEMOIZE_SIZE = 500;
  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */

  function memoizeCapped(func) {
    var result = memoize_1(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }

      return key;
    });
    var cache = result.cache;
    return result;
  }

  var _memoizeCapped = memoizeCapped;

  /** Used to match property names within property paths. */

  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  /** Used to match backslashes in property paths. */

  var reEscapeChar = /\\(\\)?/g;
  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */

  var stringToPath = _memoizeCapped(function (string) {
    var result = [];

    if (string.charCodeAt(0) === 46
    /* . */
    ) {
        result.push('');
      }

    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
  });
  var _stringToPath = stringToPath;

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */

  function castPath(value, object) {
    if (isArray_1(value)) {
      return value;
    }

    return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
  }

  var _castPath = castPath;

  /** Used as references for various `Number` constants. */

  var INFINITY$1 = 1 / 0;
  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */

  function toKey(value) {
    if (typeof value == 'string' || isSymbol_1(value)) {
      return value;
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
  }

  var _toKey = toKey;

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */

  function baseGet(object, path) {
    path = _castPath(path, object);
    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[_toKey(path[index++])];
    }

    return index && index == length ? object : undefined;
  }

  var _baseGet = baseGet;

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */

  function get(object, path, defaultValue) {
    var result = object == null ? undefined : _baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  var get_1 = get;

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  var _baseHasIn = baseHasIn;

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */

  function hasPath(object, path, hasFunc) {
    path = _castPath(path, object);
    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = _toKey(path[index]);

      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }

      object = object[key];
    }

    if (result || ++index != length) {
      return result;
    }

    length = object == null ? 0 : object.length;
    return !!length && isLength_1(length) && _isIndex(key, length) && (isArray_1(object) || isArguments_1(object));
  }

  var _hasPath = hasPath;

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */

  function hasIn(object, path) {
    return object != null && _hasPath(object, path, _baseHasIn);
  }

  var hasIn_1 = hasIn;

  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG$5 = 1,
      COMPARE_UNORDERED_FLAG$3 = 2;
  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */

  function baseMatchesProperty(path, srcValue) {
    if (_isKey(path) && _isStrictComparable(srcValue)) {
      return _matchesStrictComparable(_toKey(path), srcValue);
    }

    return function (object) {
      var objValue = get_1(object, path);
      return objValue === undefined && objValue === srcValue ? hasIn_1(object, path) : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
    };
  }

  var _baseMatchesProperty = baseMatchesProperty;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  var identity_1 = identity;

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }

  var _baseProperty = baseProperty;

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */

  function basePropertyDeep(path) {
    return function (object) {
      return _baseGet(object, path);
    };
  }

  var _basePropertyDeep = basePropertyDeep;

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */

  function property(path) {
    return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
  }

  var property_1 = property;

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */

  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }

    if (value == null) {
      return identity_1;
    }

    if (_typeof(value) == 'object') {
      return isArray_1(value) ? _baseMatchesProperty(value[0], value[1]) : _baseMatches(value);
    }

    return property_1(value);
  }

  var _baseIteratee = baseIteratee;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];

        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }

      return object;
    };
  }

  var _createBaseFor = createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */

  var baseFor = _createBaseFor();
  var _baseFor = baseFor;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */

  function baseForOwn(object, iteratee) {
    return object && _baseFor(object, iteratee, keys_1);
  }

  var _baseForOwn = baseForOwn;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */

  function createBaseEach(eachFunc, fromRight) {
    return function (collection, iteratee) {
      if (collection == null) {
        return collection;
      }

      if (!isArrayLike_1(collection)) {
        return eachFunc(collection, iteratee);
      }

      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }

      return collection;
    };
  }

  var _createBaseEach = createBaseEach;

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */

  var baseEach = _createBaseEach(_baseForOwn);
  var _baseEach = baseEach;

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */

  function baseMap(collection, iteratee) {
    var index = -1,
        result = isArrayLike_1(collection) ? Array(collection.length) : [];
    _baseEach(collection, function (value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }

  var _baseMap = baseMap;

  /**
   * Creates an array of values by running each element in `collection` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
   *
   * The guarded methods are:
   * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
   * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
   * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
   * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * _.map([4, 8], square);
   * // => [16, 64]
   *
   * _.map({ 'a': 4, 'b': 8 }, square);
   * // => [16, 64] (iteration order is not guaranteed)
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * // The `_.property` iteratee shorthand.
   * _.map(users, 'user');
   * // => ['barney', 'fred']
   */

  function map(collection, iteratee) {
    var func = isArray_1(collection) ? _arrayMap : _baseMap;
    return func(collection, _baseIteratee(iteratee));
  }

  var map_1 = map;

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

  /**
   * 輸入轉字串
   * 若輸入不是數字或字串時則回傳空字串
   *
   * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/cstr.test.js Github}
   * @memberOf wsemi
   * @param {Number|String} v 輸入資料
   * @returns {String} 回傳字串
   * @example
   * cstr(2.25)
   * // => '2.25'
   */

  function cstr(v) {
    //check
    if (!isestr(v) && !isnum(v)) {
      return '';
    }

    var r = String(v);
    return r;
  }

  /*!
   * Vue.js v2.6.10
   * (c) 2014-2019 Evan You
   * Released under the MIT License.
   */

  /*  */
  var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.

  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }
  /**
   * Check if value is primitive.
   */


  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
    _typeof(value) === 'symbol' || typeof value === 'boolean';
  }
  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */


  function isObject$1(obj) {
    return obj !== null && _typeof(obj) === 'object';
  }
  /**
   * Get the raw type string of a value, e.g., [object Object].
   */


  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }
  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */


  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp$1(v) {
    return _toString.call(v) === '[object RegExp]';
  }
  /**
   * Check if val is a valid array index.
   */


  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  function isPromise(val) {
    return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
  }
  /**
   * Convert a value to a string that is actually rendered.
   */


  function toString$1(val) {
    return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
  }
  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */


  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }
  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */


  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');

    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }

    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }
  /**
   * Check if a tag is a built-in tag.
   */


  var isBuiltInTag = makeMap('slot,component', true);
  /**
   * Check if an attribute is a reserved attribute.
   */

  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
  /**
   * Remove an item from an array.
   */

  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);

      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }
  /**
   * Check whether an object has the property.
   */


  var hasOwnProperty$9 = Object.prototype.hasOwnProperty;

  function hasOwn(obj, key) {
    return hasOwnProperty$9.call(obj, key);
  }
  /**
   * Create a cached version of a pure function.
   */


  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }
  /**
   * Camelize a hyphen-delimited string.
   */


  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });
  /**
   * Capitalize a string.
   */

  var capitalize$1 = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  /**
   * Hyphenate a camelCase string.
   */

  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });
  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */

  function polyfillBind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }

    boundFn._length = fn.length;
    return boundFn;
  }

  function nativeBind(fn, ctx) {
    return fn.bind(ctx);
  }

  var bind = Function.prototype.bind ? nativeBind : polyfillBind;
  /**
   * Convert an Array-like object to a real Array.
   */

  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);

    while (i--) {
      ret[i] = list[i + start];
    }

    return ret;
  }
  /**
   * Mix properties into target object.
   */


  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }

    return to;
  }
  /**
   * Merge an Array of Objects into a single Object.
   */


  function toObject(arr) {
    var res = {};

    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }

    return res;
  }
  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */


  function noop(a, b, c) {}
  /**
   * Always return false.
   */


  var no = function no(a, b, c) {
    return false;
  };
  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */


  var identity$1 = function identity(_) {
    return _;
  };
  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */


  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }

    var isObjectA = isObject$1(a);
    var isObjectB = isObject$1(b);

    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);

        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime();
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }
  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */


  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }

    return -1;
  }
  /**
   * Ensure a function is called only once.
   */


  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';
  var ASSET_TYPES = ['component', 'directive', 'filter'];
  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity$1,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };
  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */

  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
  /**
   * Check if a string starts with $ or _
   */

  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }
  /**
   * Define a property.
   */


  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }
  /**
   * Parse simple path.
   */


  var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }

    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }

        obj = obj[segments[i]];
      }

      return obj;
    };
  }
  /*  */
  // can we use __proto__?


  var hasProto = '__proto__' in {}; // Browser environment sniffing

  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

  var nativeWatch = {}.watch;
  var supportsPassive = false;

  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285

      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  } // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV


  var _isServer;

  var isServerRendering = function isServerRendering() {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }

    return _isServer;
  }; // detect devtools


  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  /* istanbul ignore next */

  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set$1;
  /* istanbul ignore if */
  // $flow-disable-line


  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set$1 = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set$1 =
    /*@__PURE__*/
    function () {
      function Set() {
        this.set = Object.create(null);
      }

      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };

      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };

      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }
  /*  */


  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check

  var formatComponentName = noop;

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;

    var classify = function classify(str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function warn(msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function tip(msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }

      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;

      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function repeat(str, n) {
      var res = '';

      while (n) {
        if (n % 2 === 1) {
          res += str;
        }

        if (n > 1) {
          str += str;
        }

        n >>= 1;
      }

      return res;
    };

    generateComponentTrace = function generateComponentTrace(vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;

        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];

            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }

          tree.push(vm);
          vm = vm.$parent;
        }

        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }
  /*  */


  var uid = 0;
  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */

  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();

    if ( !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) {
        return a.id - b.id;
      });
    }

    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }; // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.


  Dep.target = null;
  var targetStack = [];

  function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }
  /*  */


  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = {
    child: {
      configurable: true
    }
  }; // DEPRECATED: alias for componentInstance for backwards compat.

  /* istanbul ignore next */

  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function createEmptyVNode(text) {
    if (text === void 0) text = '';
    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  } // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.


  function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
  }
  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */


  var arrayProto$1 = Array.prototype;
  var arrayMethods = Object.create(arrayProto$1);
  var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
  /**
   * Intercept mutating methods and emit events
   */

  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto$1[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      }

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;

      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;

        case 'splice':
          inserted = args.slice(2);
          break;
      }

      if (inserted) {
        ob.observeArray(inserted);
      } // notify change


      ob.dep.notify();
      return result;
    });
  });
  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */

  var shouldObserve = true;

  function toggleObserving(value) {
    shouldObserve = value;
  }
  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */


  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);

    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }

      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };
  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };
  /**
   * Observe a list of Array items.
   */


  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }; // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */


  function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }
  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */

  /* istanbul ignore next */


  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }
  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */


  function observe(value, asRootData) {
    if (!isObject$1(value) || value instanceof VNode) {
      return;
    }

    var ob;

    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }

    if (asRootData && ob) {
      ob.vmCount++;
    }

    return ob;
  }
  /**
   * Define a reactive property on an Object.
   */


  function defineReactive$$1(obj, key, val, customSetter, shallow) {
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(obj, key);

    if (property && property.configurable === false) {
      return;
    } // cater for pre-defined getter/setters


    var getter = property && property.get;
    var setter = property && property.set;

    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;

        if (Dep.target) {
          dep.depend();

          if (childOb) {
            childOb.dep.depend();

            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }

        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */

        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */


        if ( customSetter) {
          customSetter();
        } // #7981: for accessor properties without setter


        if (getter && !setter) {
          return;
        }

        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }

        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }
  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */


  function set(target, key, val) {
    if ( (isUndef(target) || isPrimitive(target))) {
      warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }

    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }

    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }

    var ob = target.__ob__;

    if (target._isVue || ob && ob.vmCount) {
       warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }

    if (!ob) {
      target[key] = val;
      return val;
    }

    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
  }
  /**
   * Delete a property and trigger change if necessary.
   */


  function del(target, key) {
    if ( (isUndef(target) || isPrimitive(target))) {
      warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
    }

    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }

    var ob = target.__ob__;

    if (target._isVue || ob && ob.vmCount) {
       warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }

    if (!hasOwn(target, key)) {
      return;
    }

    delete target[key];

    if (!ob) {
      return;
    }

    ob.dep.notify();
  }
  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */


  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();

      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }
  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */


  var strats = config.optionMergeStrategies;
  /**
   * Options with restrictions
   */

  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }

      return defaultStrat(parent, child);
    };
  }
  /**
   * Helper that recursively merges two data objects together.
   */


  function mergeData(to, from) {
    if (!from) {
      return to;
    }

    var key, toVal, fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i]; // in case the object is already observed...

      if (key === '__ob__') {
        continue;
      }

      toVal = to[key];
      fromVal = from[key];

      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }

    return to;
  }
  /**
   * Data
   */


  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }

      if (!parentVal) {
        return childVal;
      } // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.


      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
         warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
        return parentVal;
      }

      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };
  /**
   * Hooks and props are merged as arrays.
   */


  function mergeHook(parentVal, childVal) {
    var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
    return res ? dedupeHooks(res) : res;
  }

  function dedupeHooks(hooks) {
    var res = [];

    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }

    return res;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });
  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */

  function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);

    if (childVal) {
       assertObjectType(key, childVal, vm);
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });
  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */

  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }

    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */


    if (!childVal) {
      return Object.create(parentVal || null);
    }

    {
      assertObjectType(key, childVal, vm);
    }

    if (!parentVal) {
      return childVal;
    }

    var ret = {};
    extend(ret, parentVal);

    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];

      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }

      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }

    return ret;
  };
  /**
   * Other object hashes.
   */


  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }

    if (!parentVal) {
      return childVal;
    }

    var ret = Object.create(null);
    extend(ret, parentVal);

    if (childVal) {
      extend(ret, childVal);
    }

    return ret;
  };

  strats.provide = mergeDataOrFn;
  /**
   * Default strategy.
   */

  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };
  /**
   * Validate component names
   */


  function checkComponents(options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName(name) {
    if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
      warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
    }

    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
    }
  }
  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */


  function normalizeProps(options, vm) {
    var props = options.props;

    if (!props) {
      return;
    }

    var res = {};
    var i, val, name;

    if (Array.isArray(props)) {
      i = props.length;

      while (i--) {
        val = props[i];

        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = {
            type: null
          };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : {
          type: val
        };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }

    options.props = res;
  }
  /**
   * Normalize all injections into Object-based format
   */


  function normalizeInject(options, vm) {
    var inject = options.inject;

    if (!inject) {
      return;
    }

    var normalized = options.inject = {};

    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = {
          from: inject[i]
        };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({
          from: key
        }, val) : {
          from: val
        };
      }
    } else {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }
  /**
   * Normalize raw function directives into object format.
   */


  function normalizeDirectives(options) {
    var dirs = options.directives;

    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];

        if (typeof def$$1 === 'function') {
          dirs[key] = {
            bind: def$$1,
            update: def$$1
          };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }
  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */


  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child); // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.

    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }

      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;

    for (key in parent) {
      mergeField(key);
    }

    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }

    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }

    return options;
  }
  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */


  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }

    var assets = options[type]; // check local registration variations first

    if (hasOwn(assets, id)) {
      return assets[id];
    }

    var camelizedId = camelize(id);

    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }

    var PascalCaseId = capitalize$1(camelizedId);

    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    } // fallback to prototype chain


    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

    if ( warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }

    return res;
  }
  /*  */


  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key]; // boolean casting

    var booleanIndex = getTypeIndex(Boolean, prop.type);

    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);

        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    } // check default value


    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
      // make sure to observe it.

      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }

    {
      assertProp(prop, key, value, vm, absent);
    }

    return value;
  }
  /**
   * Get the default value of a prop.
   */


  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }

    var def = prop.default; // warn against non-factory defaults for Object & Array

    if ( isObject$1(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    } // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger


    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    } // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context


    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }
  /**
   * Assert whether a prop is valid.
   */


  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }

    if (value == null && !prop.required) {
      return;
    }

    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];

    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }

      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
      return;
    }

    var validator = prop.validator;

    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);

    if (simpleCheckRE.test(expectedType)) {
      var t = _typeof(value);

      valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }

    return {
      valid: valid,
      expectedType: expectedType
    };
  }
  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */


  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isSameType(a, b) {
    return getType(a) === getType(b);
  }

  function getTypeIndex(type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }

    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }

    return -1;
  }

  function getInvalidTypeMessage(name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize$1).join(', ');
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }

    message += ", got " + receivedType + " "; // check if we need to specify received value

    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }

    return message;
  }

  function styleValue(value, type) {
    if (type === 'String') {
      return "\"" + value + "\"";
    } else if (type === 'Number') {
      return "" + Number(value);
    } else {
      return "" + value;
    }
  }

  function isExplicable(value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) {
      return value.toLowerCase() === elem;
    });
  }

  function isBoolean() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return args.some(function (elem) {
      return elem.toLowerCase() === 'boolean';
    });
  }
  /*  */


  function handleError(err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();

    try {
      if (vm) {
        var cur = vm;

        while (cur = cur.$parent) {
          var hooks = cur.$options.errorCaptured;

          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;

                if (capture) {
                  return;
                }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }

      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling(handler, context, args, vm, info) {
    var res;

    try {
      res = args ? handler.apply(context, args) : handler.call(context);

      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) {
          return handleError(e, vm, info + " (Promise/async)");
        }); // issue #9511
        // avoid catch triggering multiple times when nested calls

        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }

    return res;
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }

    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */


    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }
  /*  */


  var isUsingMicroTask = false;
  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;

    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  } // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).


  var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:

  /* istanbul ignore next, $flow-disable-line */

  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();

    timerFunc = function timerFunc() {
      p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.

      if (isIOS) {
        setTimeout(noop);
      }
    };

    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });

    timerFunc = function timerFunc() {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };

    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Techinically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function timerFunc() {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function timerFunc() {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick(cb, ctx) {
    var _resolve;

    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });

    if (!pending) {
      pending = true;
      timerFunc();
    } // $flow-disable-line


    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  }
  /*  */

  /* not type checking this file because flow doesn't play well with Proxy */


  var initProxy;

  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function warnNonPresent(target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var warnReservedPrefix = function warnReservedPrefix(target, key) {
      warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals' + 'See: https://vuejs.org/v2/api/#data', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

        if (!has && !isAllowed) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }

        return has || !isAllowed;
      }
    };
    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }

        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }
  /*  */


  var seenObjects = new _Set$1();
  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */

  function traverse(val) {
    _traverse(val, seenObjects);

    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);

    if (!isA && !isObject$1(val) || Object.isFrozen(val) || val instanceof VNode) {
      return;
    }

    if (val.__ob__) {
      var depId = val.__ob__.dep.id;

      if (seen.has(depId)) {
        return;
      }

      seen.add(depId);
    }

    if (isA) {
      i = val.length;

      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;

      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */

    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function mark(tag) {
        return perf.mark(tag);
      };

      measure = function measure(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag); // perf.clearMeasures(name)
      };
    }
  }
  /*  */


  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns, vm) {
    function invoker() {
      var arguments$1 = arguments;
      var fns = invoker.fns;

      if (Array.isArray(fns)) {
        var cloned = fns.slice();

        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
      }
    }

    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
    var name, def$$1, cur, old, event;

    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);

      if (isUndef(cur)) {
         warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }

        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }

        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }

    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }
  /*  */


  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }

    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
      // and prevent memory leak

      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }
  /*  */


  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;

    if (isUndef(propOptions)) {
      return;
    }

    var res = {};
    var attrs = data.attrs;
    var props = data.props;

    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);

        {
          var keyInLowerCase = key.toLowerCase();

          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }

        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }

    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];

        if (!preserve) {
          delete hash[key];
        }

        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];

        if (!preserve) {
          delete hash[altKey];
        }

        return true;
      }
    }

    return false;
  }
  /*  */
  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:
  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.


  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }

    return children;
  } // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.


  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;

    for (i = 0; i < children.length; i++) {
      c = children[i];

      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }

      lastIndex = res.length - 1;
      last = res[lastIndex]; //  nested

      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }

          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }

          res.push(c);
        }
      }
    }

    return res;
  }
  /*  */


  function initProvide(vm) {
    var provide = vm.$options.provide;

    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);

    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i]; // #6574 in case the inject object is observed...

        if (key === '__ob__') {
          continue;
        }

        var provideKey = inject[key].from;
        var source = vm;

        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break;
          }

          source = source.$parent;
        }

        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }

      return result;
    }
  }
  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */


  function resolveSlots(children, context) {
    if (!children || !children.length) {
      return {};
    }

    var slots = {};

    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      } // named slots should only be respected if the vnode was rendered in the
      // same context.


      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = data.slot;
        var slot = slots[name] || (slots[name] = []);

        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    } // ignore slots that contains only whitespace


    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }

    return slots;
  }

  function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === ' ';
  }
  /*  */


  function normalizeScopedSlots(slots, normalSlots, prevSlots) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;

    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized;
    } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots;
    } else {
      res = {};

      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    } // expose normal slots on scopedSlots


    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    } // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error


    if (slots && Object.isExtensible(slots)) {
      slots._normalized = res;
    }

    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res;
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function normalized() {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && _typeof(res) === 'object' && !Array.isArray(res) ? [res] // single vnode
      : normalizeChildren(res);
      return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
      ) ? undefined : res;
    }; // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.


    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }

    return normalized;
  }

  function proxyNormalSlot(slots, key) {
    return function () {
      return slots[key];
    };
  }
  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */


  function renderList(val, render) {
    var ret, i, l, keys, key;

    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);

      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);

      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject$1(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();

        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);

        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }

    if (!isDef(ret)) {
      ret = [];
    }

    ret._isVList = true;
    return ret;
  }
  /*  */

  /**
   * Runtime helper for rendering <slot>
   */


  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;

    if (scopedSlotFn) {
      // scoped slot
      props = props || {};

      if (bindObject) {
        if ( !isObject$1(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }

        props = extend(extend({}, bindObject), props);
      }

      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;

    if (target) {
      return this.$createElement('template', {
        slot: target
      }, nodes);
    } else {
      return nodes;
    }
  }
  /*  */

  /**
   * Runtime helper for resolving filters
   */


  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity$1;
  }
  /*  */


  function isKeyNotMatch(expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1;
    } else {
      return expect !== actual;
    }
  }
  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */


  function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName);
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }
  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */


  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject$1(value)) {
         warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }

        var hash;

        var loop = function loop(key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }

          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);

          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});

              on["update:" + key] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) {
          loop(key);
        }
      }
    }

    return data;
  }
  /*  */

  /**
   * Runtime helper for rendering static trees.
   */


  function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.

    if (tree && !isInFor) {
      return tree;
    } // otherwise, render a fresh tree.


    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__" + index, false);
    return tree;
  }
  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */


  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }
  /*  */


  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
         warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};

        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }

    return data;
  }
  /*  */


  function resolveScopedSlots(fns, // see flow/vnode
  res, // the following are added in 2.6
  hasDynamicKeys, contentHashKey) {
    res = res || {
      $stable: !hasDynamicKeys
    };

    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];

      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }

        res[slot.key] = slot.fn;
      }
    }

    if (contentHashKey) {
      res.$key = contentHashKey;
    }

    return res;
  }
  /*  */


  function bindDynamicKeys(baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];

      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if ( key !== '' && key !== null) {
        // null is a speical value for explicitly removing a binding
        warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
      }
    }

    return baseObj;
  } // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.


  function prependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
  }
  /*  */


  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString$1;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }
  /*  */


  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var this$1 = this;
    var options = Ctor.options; // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check

    var contextVm;

    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent); // $flow-disable-line

      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent; // $flow-disable-line

      parent = parent._original;
    }

    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);

    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
      }

      return this$1.$slots;
    };

    Object.defineProperty(this, 'scopedSlots', {
      enumerable: true,
      get: function get() {
        return normalizeScopedSlots(data.scopedSlots, this.slots());
      }
    }); // support for compiled functional template

    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options; // pre-resolve slots for renderSlot()

      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);

        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }

        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;

    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }

      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);

      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }

      return res;
    }
  }

  function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;

    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }

    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }

    return clone;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }
  /*  */

  /*  */

  /*  */

  /*  */
  // inline hooks to be invoked on component VNodes during patch


  var componentVNodeHooks = {
    init: function init(vnode, hydrating) {
      if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow

        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },
    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },
    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }

      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true
          /* direct */
          );
        }
      }
    },
    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true
          /* direct */
          );
        }
      }
    }
  };
  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base; // plain options object: turn it into a constructor

    if (isObject$1(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    } // if at this stage it's not a constructor or an async component factory,
    // reject.


    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }

      return;
    } // async component


    var asyncFactory;

    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {}; // resolve constructor options in case global mixins are applied after
    // component constructor creation

    resolveConstructorOptions(Ctor); // transform component v-model data into props & events

    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    } // extract props


    var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    } // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners


    var listeners = data.on; // replace with listeners with .native modifier
    // so it gets processed during parent component patch.

    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot
      // work around flow
      var slot = data.slot;
      data = {};

      if (slot) {
        data.slot = slot;
      }
    } // install component management hooks onto the placeholder node


    installComponentHooks(data); // return a placeholder vnode

    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
      Ctor: Ctor,
      propsData: propsData,
      listeners: listeners,
      tag: tag,
      children: children
    }, asyncFactory);
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    }; // check inline-template render functions

    var inlineTemplate = vnode.data.inlineTemplate;

    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }

    return new vnode.componentOptions.Ctor(options);
  }

  function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});

    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];

      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1(f1, f2) {
    var merged = function merged(a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };

    merged._merged = true;
    return merged;
  } // transform component v-model info (value and callback) into
  // prop and event handler respectively.


  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';
    (data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;

    if (isDef(existing)) {
      if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }
  /*  */


  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
  // without getting yelled at by flow

  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }

    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }

    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
       warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    } // object syntax in v-bind


    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }

    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    } // warn against non-primitive key


    if ( isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      {
        warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
      }
    } // support single function children as default scoped slot


    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = {
        default: children[0]
      };
      children.length = 0;
    }

    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }

    var vnode, ns;

    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }

    if (Array.isArray(vnode)) {
      return vnode;
    } else if (isDef(vnode)) {
      if (isDef(ns)) {
        applyNS(vnode, ns);
      }

      if (isDef(data)) {
        registerDeepBindings(data);
      }

      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;

    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }

    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];

        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
          applyNS(child, ns, force);
        }
      }
    }
  } // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes


  function registerDeepBindings(data) {
    if (isObject$1(data.style)) {
      traverse(data.style);
    }

    if (isObject$1(data.class)) {
      traverse(data.class);
    }
  }
  /*  */


  function initRender(vm) {
    vm._vnode = null; // the root of the child tree

    vm._staticTrees = null; // v-once cached trees

    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates

    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    }; // normalization is always applied for the public version, used in
    // user-written render functions.


    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    }; // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated


    var parentData = parentVnode && parentVnode.data;
    /* istanbul ignore else */

    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
      } // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.


      vm.$vnode = _parentVnode; // render self

      var vnode;

      try {
        // There's no need to maintain a stack becaues all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render"); // return error render result,
        // or previous vnode to prevent render error causing blank component

        /* istanbul ignore else */

        if ( vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      } // if the returned array contains only a single node, allow it


      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      } // return empty vnode in case the render function errored out


      if (!(vnode instanceof VNode)) {
        if ( Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }

        vnode = createEmptyVNode();
      } // set parent


      vnode.parent = _parentVnode;
      return vnode;
    };
  }
  /*  */


  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
      comp = comp.default;
    }

    return isObject$1(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = {
      data: data,
      context: context,
      children: children,
      tag: tag
    };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    var owner = currentRenderingInstance;

    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null;
      owner.$on('hook:destroyed', function () {
        return remove(owners, owner);
      });

      var forceRender = function forceRender(renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          owners[i].$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;

          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }

          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)

        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });
      var reject = once(function (reason) {
         warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });
      var res = factory(resolve, reject);

      if (isObject$1(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);

            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;

                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;

              if (isUndef(factory.resolved)) {
                reject( "timeout (" + res.timeout + "ms)" );
              }
            }, res.timeout);
          }
        }
      }

      sync = false; // return in case resolved synchronously

      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }
  /*  */


  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }
  /*  */


  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];

        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }
  /*  */

  /*  */


  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false; // init parent attached events

    var listeners = vm.$options._parentListeners;

    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn) {
    target.$on(event, fn);
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler(event, fn) {
    var _target = target;
    return function onceHandler() {
      var res = fn.apply(null, arguments);

      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    };
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;

    Vue.prototype.$on = function (event, fn) {
      var vm = this;

      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup

        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }

      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;

      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }

      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this; // all

      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      } // array of events


      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }

        return vm;
      } // specific event


      var cbs = vm._events[event];

      if (!cbs) {
        return vm;
      }

      if (!fn) {
        vm._events[event] = null;
        return vm;
      } // specific handler


      var cb;
      var i = cbs.length;

      while (i--) {
        cb = cbs[i];

        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }

      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;

      {
        var lowerCaseEvent = event.toLowerCase();

        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }

      var cbs = vm._events[event];

      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";

        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }

      return vm;
    };
  }
  /*  */


  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    };
  }

  function initLifecycle(vm) {
    var options = vm.$options; // locate first non-abstract parent

    var parent = options.parent;

    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }

      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.

      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
        /* removeOnly */
        );
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }

      restoreActiveInstance(); // update __vue__ reference

      if (prevEl) {
        prevEl.__vue__ = null;
      }

      if (vm.$el) {
        vm.$el.__vue__ = vm;
      } // if parent is an HOC, update its $el as well


      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      } // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.

    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;

      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;

      if (vm._isBeingDestroyed) {
        return;
      }

      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true; // remove self from parent

      var parent = vm.$parent;

      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      } // teardown watchers


      if (vm._watcher) {
        vm._watcher.teardown();
      }

      var i = vm._watchers.length;

      while (i--) {
        vm._watchers[i].teardown();
      } // remove reference from data ob
      // frozen object may not have observer.


      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      } // call the last hook...


      vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

      vm.__patch__(vm._vnode, null); // fire destroyed hook


      callHook(vm, 'destroyed'); // turn off all instance listeners.

      vm.$off(); // remove __vue__ reference

      if (vm.$el) {
        vm.$el.__vue__ = null;
      } // release circular reference (#6759)


      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;

    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;

      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }

    callHook(vm, 'beforeMount');
    var updateComponent;
    /* istanbul ignore if */

    if ( config.performance && mark) {
      updateComponent = function updateComponent() {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;
        mark(startTag);

        var vnode = vm._render();

        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);
        mark(startTag);

        vm._update(vnode, hydrating);

        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function updateComponent() {
        vm._update(vm._render(), hydrating);
      };
    } // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined


    new Watcher(vm, updateComponent, noop, {
      before: function before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true
    /* isRenderWatcher */
    );
    hydrating = false; // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook

    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }

    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    {
      isUpdatingChildComponent = true;
    } // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.
    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.


    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.

    var needsForceUpdate = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot);
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }

    vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render

    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject; // update props

    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];

      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?

        props[key] = validateProp(key, propOptions, propsData, vm);
      }

      toggleObserving(true); // keep a copy of raw propsData

      vm.$options.propsData = propsData;
    } // update listeners


    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }

    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;

      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }

    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;

      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }

      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;

      if (isInInactiveTree(vm)) {
        return;
      }
    }

    if (!vm._inactive) {
      vm._inactive = true;

      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }

      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";

    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }

    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }

    popTarget();
  }
  /*  */


  var MAX_UPDATE_COUNT = 100;
  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;
  /**
   * Reset the scheduler's state.
   */

  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};

    {
      circular = {};
    }

    waiting = flushing = false;
  } // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.


  var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

  var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)

  if (inBrowser && !isIE) {
    var performance = window.performance;

    if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function getNow() {
        return performance.now();
      };
    }
  }
  /**
   * Flush both queues and run the watchers.
   */


  function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id; // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.

    queue.sort(function (a, b) {
      return a.id - b.id;
    }); // do not cache length because more watchers might be pushed
    // as we run existing watchers

    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];

      if (watcher.before) {
        watcher.before();
      }

      id = watcher.id;
      has[id] = null;
      watcher.run(); // in dev build, check and stop circular updates.

      if ( has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;

        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    } // keep copies of post queues before resetting state


    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();
    resetSchedulerState(); // call component updated and activated hooks

    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue); // devtool hook

    /* istanbul ignore if */

    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;

    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;

      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }
  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */


  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true
      /* true */
      );
    }
  }
  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */


  function queueWatcher(watcher) {
    var id = watcher.id;

    if (has[id] == null) {
      has[id] = true;

      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;

        while (i > index && queue[i].id > watcher.id) {
          i--;
        }

        queue.splice(i + 1, 0, watcher);
      } // queue the flush


      if (!waiting) {
        waiting = true;

        if ( !config.async) {
          flushSchedulerQueue();
          return;
        }

        nextTick(flushSchedulerQueue);
      }
    }
  }
  /*  */


  var uid$2 = 0;
  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */

  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;

    if (isRenderWatcher) {
      vm._watcher = this;
    }

    vm._watchers.push(this); // options


    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }

    this.cb = cb;
    this.id = ++uid$2; // uid for batching

    this.active = true;
    this.dirty = this.lazy; // for lazy watchers

    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set$1();
    this.newDepIds = new _Set$1();
    this.expression =  expOrFn.toString() ; // parse expression for getter

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);

      if (!this.getter) {
        this.getter = noop;
         warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }

    this.value = this.lazy ? undefined : this.get();
  };
  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;

    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }

      popTarget();
      this.cleanupDeps();
    }

    return value;
  };
  /**
   * Add a dependency to this directive.
   */


  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;

    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);

      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };
  /**
   * Clean up for dependency collection.
   */


  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var i = this.deps.length;

    while (i--) {
      var dep = this.deps[i];

      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }

    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };
  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */


  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };
  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */


  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();

      if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject$1(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;

        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };
  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */


  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };
  /**
   * Depend on all deps collected by this watcher.
   */


  Watcher.prototype.depend = function depend() {
    var i = this.deps.length;

    while (i--) {
      this.deps[i].depend();
    }
  };
  /**
   * Remove self from all dependencies' subscriber list.
   */


  Watcher.prototype.teardown = function teardown() {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }

      var i = this.deps.length;

      while (i--) {
        this.deps[i].removeSub(this);
      }

      this.active = false;
    }
  };
  /*  */


  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };

    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;

    if (opts.props) {
      initProps(vm, opts.props);
    }

    if (opts.methods) {
      initMethods(vm, opts.methods);
    }

    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true
      /* asRootData */
      );
    }

    if (opts.computed) {
      initComputed(vm, opts.computed);
    }

    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.

    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent; // root instance props should be converted

    if (!isRoot) {
      toggleObserving(false);
    }

    var loop = function loop(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */

      {
        var hyphenatedKey = hyphenate(key);

        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }

        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      } // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.


      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) {
      loop(key);
    }

    toggleObserving(true);
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

    if (!isPlainObject(data)) {
      data = {};
       warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    } // proxy data on instance


    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;

    while (i--) {
      var key = keys[i];

      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }

      if (props && hasOwn(props, key)) {
         warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    } // observe data


    observe(data, true
    /* asRootData */
    );
  }

  function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();

    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = {
    lazy: true
  };

  function initComputed(vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;

      if ( getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      } // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.


      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();

    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }

    if ( sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];

      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }

        if (Dep.target) {
          watcher.depend();
        }

        return watcher.value;
      }
    };
  }

  function createGetterInvoker(fn) {
    return function computedGetter() {
      return fn.call(this, this);
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;

    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn("Method \"" + key + "\" has type \"" + _typeof(methods[key]) + "\" in the component definition. " + "Did you reference the function correctly?", vm);
        }

        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }

        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }

      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];

      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }

    if (typeof handler === 'string') {
      handler = vm[handler];
    }

    return vm.$watch(expOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};

    dataDef.get = function () {
      return this._data;
    };

    var propsDef = {};

    propsDef.get = function () {
      return this._props;
    };

    {
      dataDef.set = function () {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };

      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }

    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;

      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }

      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);

      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
        }
      }

      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }
  /*  */


  var uid$3 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this; // a uid

      vm._uid = uid$3++;
      var startTag, endTag;
      /* istanbul ignore if */

      if ( config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      } // a flag to avoid this being observed


      vm._isVue = true; // merge options

      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */


      {
        initProxy(vm);
      } // expose real self


      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props

      initState(vm);
      initProvide(vm); // resolve provide after data/props

      callHook(vm, 'created');
      /* istanbul ignore if */

      if ( config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;

    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;

      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

        var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }

        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }

    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;

    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }

        modified[key] = latest[key];
      }
    }

    return modified;
  }

  function Vue(options) {
    if ( !(this instanceof Vue)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }

    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);
  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      } // additional parameters


      var args = toArray(arguments, 1);
      args.unshift(this);

      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }

      installedPlugins.push(plugin);
      return this;
    };
  }
  /*  */


  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }
  /*  */


  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;
    /**
     * Class inheritance
     */

    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;

      if ( name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.

      if (Sub.options.props) {
        initProps$1(Sub);
      }

      if (Sub.options.computed) {
        initComputed$1(Sub);
      } // allow further extension/mixin/plugin usage


      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use; // create asset registers, so extended classes
      // can have their private assets too.

      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      }); // enable recursive self-lookup

      if (name) {
        Sub.options.components[name] = Sub;
      } // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.


      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options); // cache constructor

      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;

    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;

    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }
  /*  */


  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          if ( type === 'component') {
            validateComponentName(id);
          }

          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }

          if (type === 'directive' && typeof definition === 'function') {
            definition = {
              bind: definition,
              update: definition
            };
          }

          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }
  /*  */


  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp$1(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */


    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;

    for (var key in cache) {
      var cachedNode = cache[key];

      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);

        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];

    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }

    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];
  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,
    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },
    created: function created() {
      this.cache = Object.create(null);
      this.keys = [];
    },
    destroyed: function destroyed() {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },
    mounted: function mounted() {
      var this$1 = this;
      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) {
          return matches(val, name);
        });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) {
          return !matches(val, name);
        });
      });
    },
    render: function render() {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;

      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;

        if ( // not included
        include && (!name || !matches(include, name)) || // excluded
        exclude && name && matches(exclude, name)) {
          return vnode;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance; // make current key freshest

          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key); // prune oldest entry

          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }

      return vnode || slot && slot[0];
    }
  };
  var builtInComponents = {
    KeepAlive: KeepAlive
  };
  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};

    configDef.get = function () {
      return config;
    };

    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }

    Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.

    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };
    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick; // 2.6 explicit observable API

    Vue.observable = function (obj) {
      observe(obj);
      return obj;
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    }); // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.

    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);
  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });
  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  }); // expose FunctionalRenderContext for ssr runtime helper installation

  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });
  Vue.version = '2.6.10';
  /*  */
  // these are reserved for web because they are directly compiled away
  // during template compilation

  var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

  var acceptValue = makeMap('input,textarea,option,select,progress');

  var mustUseProp = function mustUseProp(tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function convertEnumeratedValue(key, value) {
    return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
  };

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function isXlink(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function getXlinkProp(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function isFalsyAttrValue(val) {
    return val == null || val === false;
  };
  /*  */


  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;

    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }

    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }

    return renderClass(data.staticClass, data.class);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
  }

  function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */


    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }

    if (isObject$1(value)) {
      return stringifyObject(value);
    }

    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */


    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;

    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }

        res += stringified;
      }
    }

    return res;
  }

  function stringifyObject(value) {
    var res = '';

    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }

        res += key;
      }
    }

    return res;
  }
  /*  */


  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };
  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.

  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isReservedTag = function isReservedTag(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    } // basic support for MathML
    // note it doesn't support other MathML elements being component roots


    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = Object.create(null);

  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }

    if (isReservedTag(tag)) {
      return false;
    }

    tag = tag.toLowerCase();
    /* istanbul ignore if */

    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }

    var el = document.createElement(tag);

    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');
  /*  */

  /**
   * Query an element selector if it's not an element already.
   */

  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);

      if (!selected) {
         warn('Cannot find element: ' + el);
        return document.createElement('div');
      }

      return selected;
    } else {
      return el;
    }
  }
  /*  */


  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);

    if (tagName !== 'select') {
      return elm;
    } // false or null will remove the attribute but undefined will not


    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }

    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps =
  /*#__PURE__*/
  Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });
  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;

    if (!isDef(key)) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;

    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }
  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */


  var emptyNode = new VNode('', {}, []);
  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }

    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};

    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;

      if (isDef(key)) {
        map[key] = i;
      }
    }

    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};
    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];

      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }

      remove$$1.listeners = listeners;
      return remove$$1;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1(vnode, inVPre) {
      return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
        return isRegExp$1(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
      })) && config.isUnknownElement(vnode.tag);
    }

    var creatingElmInVPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check

      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;

      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }

          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }

        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);
        /* istanbul ignore if */

        {
          createChildren(vnode, children, insertedVnodeQueue);

          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }

          insert(parentElm, vnode.elm, refElm);
        }

        if ( data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;

      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false
          /* hydrating */
          );
        } // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.


        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);

          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }

          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }

      vnode.elm = vnode.componentInstance.$el;

      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode); // make sure to invoke the insert hook

        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i; // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.

      var innerNode = vnode;

      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;

        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }

          insertedVnodeQueue.push(innerNode);
          break;
        }
      } // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself


      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }

        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }

      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }

      i = vnode.data.hook; // Reuse variable

      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }

        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    } // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.


    function setScope(vnode) {
      var i;

      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;

        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }

          ancestor = ancestor.parent;
        }
      } // for slot content they should also get the scopeId from the host instance.


      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }

        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }

      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];

        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;

        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        } // recursively invoke hooks on child component root node


        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }

        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }

        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions

      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }

          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];

            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }

          newStartVnode = newCh[++newStartIdx];
        }
      }

      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys(children) {
      var seenKeys = {};

      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;

        if (isDef(key)) {
          if (seenKeys[key]) {
            warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];

        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }

        return;
      } // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.


      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;

      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;

      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }

        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }

      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }

          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }

          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).

    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true;
      } // assert node match


      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false;
        }
      }

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true
          /* hydrating */
          );
        }

        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }

      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if ( typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }

                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;

              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }

                childNode = childNode.nextSibling;
              } // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.


              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if ( typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }

                return false;
              }
            }
          }
        }

        if (isDef(data)) {
          var fullInvoke = false;

          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }

          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }

      return true;
    }

    function assertNodeMatch(node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }

        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);

        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }

            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            } // either not server-rendered, or hydration failed.
            // create an empty node and replace it


            oldVnode = emptyNodeAt(oldVnode);
          } // replacing existing element


          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm); // create new node

          createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);

            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }

              ancestor.elm = vnode.elm;

              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                } // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.


                var insert = ancestor.data.hook.insert;

                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }

              ancestor = ancestor.parent;
            }
          } // destroy old node


          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }
  /*  */


  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
    var dirsWithInsert = [];
    var dirsWithPostpatch = [];
    var key, oldDir, dir;

    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];

      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);

        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);

        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function callInsert() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };

      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);

    if (!dirs) {
      // $flow-disable-line
      return res;
    }

    var i, dir;

    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];

      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }

      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    } // $flow-disable-line


    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];

    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];
  /*  */

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;

    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }

    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }

    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];

      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    } // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max

    /* istanbul ignore if */


    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }

    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.

      /* istanbul ignore if */
      if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
        var blocker = function blocker(e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };

        el.addEventListener('input', blocker); // $flow-disable-line

        el.__ieph = true;
        /* IE placeholder patched */
      }

      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };
  /*  */

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode); // handle transition classes

    var transitionClass = el._transitionClasses;

    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    } // set the class


    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };
  /*  */

  /*  */

  /*  */

  /*  */
  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.

  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';
  /*  */
  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.

  function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    } // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4

    /* istanbul ignore if */


    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1(event, handler, capture) {
    var _target = target$1; // save current target element in closure

    return function onceHandler() {
      var res = handler.apply(null, arguments);

      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    };
  } // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.


  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1(name, handler, capture, passive) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;

      handler = original._wrapper = function (e) {
        if ( // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget || // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document) {
          return original.apply(this, arguments);
        }
      };
    }

    target$1.addEventListener(name, handler, supportsPassive ? {
      capture: capture,
      passive: passive
    } : capture);
  }

  function remove$2(name, handler, capture, _target) {
    (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }

    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };
  /*  */

  var svgContainer;

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }

    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key]; // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)

      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }

        if (cur === oldProps[key]) {
          continue;
        } // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property


        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur; // avoid resetting cursor position when value is the same

        var strCur = isUndef(cur) ? '' : String(cur);

        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;

        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }

        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if ( // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  } // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
  }

  function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true; // #6157
    // work around IE bug when accessing document.activeElement in an iframe

    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}

    return notInFocus && elm.value !== checkVal;
  }

  function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime

    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal);
      }

      if (modifiers.trim) {
        return value.trim() !== newVal.trim();
      }
    }

    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };
  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  }); // merge static and dynamic style data on the same vnode

  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it

    return data.staticStyle ? extend(data.staticStyle, style) : style;
  } // normalize possible array / string values into Object


  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }

    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }

    return bindingStyle;
  }
  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */


  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;

      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;

        if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;

    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }

    return res;
  }
  /*  */


  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;

  var setProp = function setProp(el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);

      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];
  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);

    if (prop !== 'filter' && prop in emptyStyle) {
      return prop;
    }

    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

    var oldStyle = oldStaticStyle || oldStyleBinding;
    var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.

    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }

    for (name in newStyle) {
      cur = newStyle[name];

      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };
  /*  */

  var whitespaceRE = /\s+/;
  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */

  function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }
    /* istanbul ignore else */


    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";

      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }
  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */


  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }
    /* istanbul ignore else */


    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }

      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';

      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }

      cur = cur.trim();

      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }
  /*  */


  function resolveTransition(def$$1) {
    if (!def$$1) {
      return;
    }
    /* istanbul ignore else */


    if (_typeof(def$$1) === 'object') {
      var res = {};

      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }

      extend(res, def$$1);
      return res;
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });
  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation'; // Transition property/event sniffing

  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';

  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }

    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  } // binding to window is necessary to make hot reload work in IE in strict mode


  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
  /* istanbul ignore next */
  function (fn) {
    return fn();
  };

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }

    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;

    if (!type) {
      return cb();
    }

    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;

    var end = function end() {
      el.removeEventListener(event, onEnd);
      cb();
    };

    var onEnd = function onEnd(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };

    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);
    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */

    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }

    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  } // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors


  function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
  }
  /*  */


  function enter(vnode, toggleDisplay) {
    var el = vnode.elm; // call leave callback now

    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;

      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);

    if (isUndef(data)) {
      return;
    }
    /* istanbul ignore if */


    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration; // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.

    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;

    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
    var explicitEnterDuration = toNumber(isObject$1(duration) ? duration.enter : duration);

    if ( explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);
    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }

      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }

        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }

      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];

        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }

        enterHook && enterHook(el, cb);
      });
    } // start enter transition


    beforeEnterHook && beforeEnterHook(el);

    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);

        if (!cb.cancelled) {
          addTransitionClass(el, toClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm; // call enter callback now

    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;

      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);

    if (isUndef(data) || el.nodeType !== 1) {
      return rm();
    }
    /* istanbul ignore if */


    if (isDef(el._leaveCb)) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);
    var explicitLeaveDuration = toNumber(isObject$1(duration) ? duration.leave : duration);

    if ( isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }

      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }

      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }

        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }

      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      } // record leaving element


      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }

      beforeLeave && beforeLeave(el);

      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);

          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);

            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }

      leave && leave(el, cb);

      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  } // only used in dev mode


  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }
  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */


  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }

    var invokerFns = fn.fns;

    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};
  var platformModules = [attrs, klass, events, domProps, style, transition];
  /*  */
  // the directive module should be applied last, after all
  // built-in modules have been applied.

  var modules = platformModules.concat(baseModules);
  var patch = createPatchFunction({
    nodeOps: nodeOps,
    modules: modules
  });
  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */

  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;

      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }

        el._vOptions = [].map.call(el.options, getValue$1);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;

        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.

          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */

          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.

        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue$1);

        if (curOptions.some(function (o, i) {
          return !looseEqual(o, prevOptions[i]);
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function (v) {
            return hasNoMatchingOption(v, curOptions);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */

    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;

    if (isMultiple && !Array.isArray(value)) {
       warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }

    var selected, option;

    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];

      if (isMultiple) {
        selected = looseIndexOf(value, getValue$1(option)) > -1;

        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue$1(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }

          return;
        }
      }
    }

    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    return options.every(function (o) {
      return !looseEqual(o, value);
    });
  }

  function getValue$1(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }

    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }
  /*  */
  // recursively search for possible transition defined inside the component root


  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },
    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;
      /* istanbul ignore if */

      if (!value === !oldValue) {
        return;
      }

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;

      if (transition$$1) {
        vnode.data.show = true;

        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },
    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };
  var platformDirectives = {
    model: directive,
    show: show
  };
  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  }; // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered

  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;

    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options; // props

    for (var key in options.propsData) {
      data[key] = comp[key];
    } // events.
    // extract listeners and pass them directly to the transition methods


    var listeners = options._parentListeners;

    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }

    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var isNotTextNode = function isNotTextNode(c) {
    return c.tag || isAsyncPlaceholder(c);
  };

  var isVShowDirective = function isVShowDirective(d) {
    return d.name === 'show';
  };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,
    render: function render(h) {
      var this$1 = this;
      var children = this.$slots.default;

      if (!children) {
        return;
      } // filter out text nodes (possible whitespaces)


      children = children.filter(isNotTextNode);
      /* istanbul ignore if */

      if (!children.length) {
        return;
      } // warn multiple elements


      if ( children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode; // warn invalid mode

      if ( mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0]; // if this is a component root node and the component's
      // parent container node also has transition, skip.

      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      } // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive


      var child = getRealChild(rawChild);
      /* istanbul ignore if */

      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      } // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.


      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild); // mark v-show
      // so that the transition module can hand over the control to the directive

      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }

          var delayedLeave;

          var performLeave = function performLeave() {
            delayedLeave();
          };

          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }
  };
  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);
  delete props.mode;
  var TransitionGroup = {
    props: props,
    beforeMount: function beforeMount() {
      var this$1 = this;
      var update = this._update;

      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

        this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
        );

        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },
    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];

        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;
            (c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];

        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();

          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }

        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },
    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';

      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation); // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line

      this._reflow = document.body.offsetHeight;
      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (e && e.target !== el) {
              return;
            }

            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },
    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        /* istanbul ignore if */


        if (this._hasMove) {
          return this._hasMove;
        } // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.


        var clone = el.cloneNode();

        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }

        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */


    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;

    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };
  /*  */
  // install platform specific utils

  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents); // install platform patch function

  Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

  Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  }; // devtools global hook

  /* istanbul ignore next */


  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
        }
      }

      if ( config.productionTip !== false && typeof console !== 'undefined') {
        console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
      }
    }, 0);
  }

  var vue_runtime_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Vue
  });

  var types = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.isString = isString;
    exports.isObject = isObject;
    exports.isHtmlElement = isHtmlElement;

    function isString(obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
    }

    function isObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    }

    function isHtmlElement(node) {
      return node && node.nodeType === Node.ELEMENT_NODE;
    }

    var isFunction = exports.isFunction = function isFunction(functionToCheck) {
      var getType = {};
      return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    };

    var isUndefined = exports.isUndefined = function isUndefined(val) {
      return val === void 0;
    };

    var isDefined = exports.isDefined = function isDefined(val) {
      return val !== undefined && val !== null;
    };
  });
  unwrapExports(types);
  var types_1 = types.isString;
  var types_2 = types.isObject;
  var types_3 = types.isHtmlElement;
  var types_4 = types.isFunction;
  var types_5 = types.isUndefined;
  var types_6 = types.isDefined;

  var _vue = getCjsExportFromNamespace(vue_runtime_esm);

  var util = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.isEmpty = exports.isEqual = exports.arrayEquals = exports.looseEqual = exports.capitalize = exports.kebabCase = exports.autoprefixer = exports.isFirefox = exports.isEdge = exports.isIE = exports.coerceTruthyValueToArray = exports.arrayFind = exports.arrayFindIndex = exports.escapeRegexpString = exports.valueEquals = exports.generateId = exports.getValueByPath = undefined;

    var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
      return _typeof(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
    };

    exports.noop = noop;
    exports.hasOwn = hasOwn;
    exports.toObject = toObject;
    exports.getPropByPath = getPropByPath;
    exports.rafThrottle = rafThrottle;
    exports.objToArray = objToArray;

    var _vue2 = _interopRequireDefault(_vue);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    function noop() {}

    function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
    }

    function extend(to, _from) {
      for (var key in _from) {
        to[key] = _from[key];
      }

      return to;
    }

    function toObject(arr) {
      var res = {};

      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }

      return res;
    }

    var getValueByPath = exports.getValueByPath = function getValueByPath(object, prop) {
      prop = prop || '';
      var paths = prop.split('.');
      var current = object;
      var result = null;

      for (var i = 0, j = paths.length; i < j; i++) {
        var path = paths[i];
        if (!current) break;

        if (i === j - 1) {
          result = current[path];
          break;
        }

        current = current[path];
      }

      return result;
    };

    function getPropByPath(obj, path, strict) {
      var tempObj = obj;
      path = path.replace(/\[(\w+)\]/g, '.$1');
      path = path.replace(/^\./, '');
      var keyArr = path.split('.');
      var i = 0;

      for (var len = keyArr.length; i < len - 1; ++i) {
        if (!tempObj && !strict) break;
        var key = keyArr[i];

        if (key in tempObj) {
          tempObj = tempObj[key];
        } else {
          if (strict) {
            throw new Error('please transfer a valid prop path to form item!');
          }

          break;
        }
      }

      return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj ? tempObj[keyArr[i]] : null
      };
    }

    var generateId = exports.generateId = function generateId() {
      return Math.floor(Math.random() * 10000);
    };

    var valueEquals = exports.valueEquals = function valueEquals(a, b) {
      // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
      if (a === b) return true;
      if (!(a instanceof Array)) return false;
      if (!(b instanceof Array)) return false;
      if (a.length !== b.length) return false;

      for (var i = 0; i !== a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }

      return true;
    };

    var escapeRegexpString = exports.escapeRegexpString = function escapeRegexpString() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    }; // TODO: use native Array.find, Array.findIndex when IE support is dropped


    var arrayFindIndex = exports.arrayFindIndex = function arrayFindIndex(arr, pred) {
      for (var i = 0; i !== arr.length; ++i) {
        if (pred(arr[i])) {
          return i;
        }
      }

      return -1;
    };

    var arrayFind = exports.arrayFind = function arrayFind(arr, pred) {
      var idx = arrayFindIndex(arr, pred);
      return idx !== -1 ? arr[idx] : undefined;
    }; // coerce truthy value to array


    var coerceTruthyValueToArray = exports.coerceTruthyValueToArray = function coerceTruthyValueToArray(val) {
      if (Array.isArray(val)) {
        return val;
      } else if (val) {
        return [val];
      } else {
        return [];
      }
    };

    var isIE = exports.isIE = function isIE() {
      return !_vue2.default.prototype.$isServer && !isNaN(Number(document.documentMode));
    };

    var isEdge = exports.isEdge = function isEdge() {
      return !_vue2.default.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
    };

    var isFirefox = exports.isFirefox = function isFirefox() {
      return !_vue2.default.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
    };

    var autoprefixer = exports.autoprefixer = function autoprefixer(style) {
      if ((typeof style === 'undefined' ? 'undefined' : _typeof$1(style)) !== 'object') return style;
      var rules = ['transform', 'transition', 'animation'];
      var prefixes = ['ms-', 'webkit-'];
      rules.forEach(function (rule) {
        var value = style[rule];

        if (rule && value) {
          prefixes.forEach(function (prefix) {
            style[prefix + rule] = value;
          });
        }
      });
      return style;
    };

    var kebabCase = exports.kebabCase = function kebabCase(str) {
      var hyphenateRE = /([^-])([A-Z])/g;
      return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
    };

    var capitalize = exports.capitalize = function capitalize(str) {
      if (!(0, types.isString)(str)) return str;
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    var looseEqual = exports.looseEqual = function looseEqual(a, b) {
      var isObjectA = (0, types.isObject)(a);
      var isObjectB = (0, types.isObject)(b);

      if (isObjectA && isObjectB) {
        return JSON.stringify(a) === JSON.stringify(b);
      } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
      } else {
        return false;
      }
    };

    var arrayEquals = exports.arrayEquals = function arrayEquals(arrayA, arrayB) {
      arrayA = arrayA || [];
      arrayB = arrayB || [];

      if (arrayA.length !== arrayB.length) {
        return false;
      }

      for (var i = 0; i < arrayA.length; i++) {
        if (!looseEqual(arrayA[i], arrayB[i])) {
          return false;
        }
      }

      return true;
    };

    var isEqual = exports.isEqual = function isEqual(value1, value2) {
      if (Array.isArray(value1) && Array.isArray(value2)) {
        return arrayEquals(value1, value2);
      }

      return looseEqual(value1, value2);
    };

    var isEmpty = exports.isEmpty = function isEmpty(val) {
      // null or undefined
      if (val == null) return true;
      if (typeof val === 'boolean') return false;
      if (typeof val === 'number') return !val;
      if (val instanceof Error) return val.message === '';

      switch (Object.prototype.toString.call(val)) {
        // String or Array
        case '[object String]':
        case '[object Array]':
          return !val.length;
        // Map or Set or File

        case '[object File]':
        case '[object Map]':
        case '[object Set]':
          {
            return !val.size;
          }
        // Plain Object

        case '[object Object]':
          {
            return !Object.keys(val).length;
          }
      }

      return false;
    };

    function rafThrottle(fn) {
      var locked = false;
      return function () {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (locked) return;
        locked = true;
        window.requestAnimationFrame(function (_) {
          fn.apply(_this, args);
          locked = false;
        });
      };
    }

    function objToArray(obj) {
      if (Array.isArray(obj)) {
        return obj;
      }

      return isEmpty(obj) ? [] : [obj];
    }
  });
  unwrapExports(util);
  var util_1 = util.isEmpty;
  var util_2 = util.isEqual;
  var util_3 = util.arrayEquals;
  var util_4 = util.looseEqual;
  var util_5 = util.capitalize;
  var util_6 = util.kebabCase;
  var util_7 = util.autoprefixer;
  var util_8 = util.isFirefox;
  var util_9 = util.isEdge;
  var util_10 = util.isIE;
  var util_11 = util.coerceTruthyValueToArray;
  var util_12 = util.arrayFind;
  var util_13 = util.arrayFindIndex;
  var util_14 = util.escapeRegexpString;
  var util_15 = util.valueEquals;
  var util_16 = util.generateId;
  var util_17 = util.getValueByPath;
  var util_18 = util.noop;
  var util_19 = util.hasOwn;
  var util_20 = util.toObject;
  var util_21 = util.getPropByPath;
  var util_22 = util.rafThrottle;
  var util_23 = util.objToArray;

  var migrating = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    /**
     * Show migrating guide in browser console.
     *
     * Usage:
     * import Migrating from 'element-ui/src/mixins/migrating';
     *
     * mixins: [Migrating]
     *
     * add getMigratingConfig method for your component.
     *  getMigratingConfig() {
     *    return {
     *      props: {
     *        'allow-no-selection': 'allow-no-selection is removed.',
     *        'selection-mode': 'selection-mode is removed.'
     *      },
     *      events: {
     *        selectionchange: 'selectionchange is renamed to selection-change.'
     *      }
     *    };
     *  },
     */

    exports.default = {
      mounted: function mounted() {
        if (!this.$vnode) return;

        var _getMigratingConfig = this.getMigratingConfig(),
            _getMigratingConfig$p = _getMigratingConfig.props,
            props = _getMigratingConfig$p === undefined ? {} : _getMigratingConfig$p,
            _getMigratingConfig$e = _getMigratingConfig.events,
            events = _getMigratingConfig$e === undefined ? {} : _getMigratingConfig$e;

        var _$vnode = this.$vnode,
            data = _$vnode.data,
            componentOptions = _$vnode.componentOptions;
        var definedProps = data.attrs || {};
        var definedEvents = componentOptions.listeners || {};

        for (var propName in definedProps) {
          propName = (0, util.kebabCase)(propName); // compatible with camel case

          if (props[propName]) {
            console.warn('[Element Migrating][' + this.$options.name + '][Attribute]: ' + props[propName]);
          }
        }

        for (var eventName in definedEvents) {
          eventName = (0, util.kebabCase)(eventName); // compatible with camel case

          if (events[eventName]) {
            console.warn('[Element Migrating][' + this.$options.name + '][Event]: ' + events[eventName]);
          }
        }
      },
      methods: {
        getMigratingConfig: function getMigratingConfig() {
          return {
            props: {},
            events: {}
          };
        }
      }
    };
  });
  unwrapExports(migrating);

  var shared = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.isDef = isDef;
    exports.isKorean = isKorean;

    function isDef(val) {
      return val !== undefined && val !== null;
    }

    function isKorean(text) {
      var reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
      return reg.test(text);
    }
  });
  unwrapExports(shared);
  var shared_1 = shared.isDef;
  var shared_2 = shared.isKorean;

  var emitter = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    function _broadcast(componentName, eventName, params) {
      this.$children.forEach(function (child) {
        var name = child.$options.componentName;

        if (name === componentName) {
          child.$emit.apply(child, [eventName].concat(params));
        } else {
          _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
      });
    }

    exports.default = {
      methods: {
        dispatch: function dispatch(componentName, eventName, params) {
          var parent = this.$parent || this.$root;
          var name = parent.$options.componentName;

          while (parent && (!name || name !== componentName)) {
            parent = parent.$parent;

            if (parent) {
              name = parent.$options.componentName;
            }
          }

          if (parent) {
            parent.$emit.apply(parent, [eventName].concat(params));
          }
        },
        broadcast: function broadcast(componentName, eventName, params) {
          _broadcast.call(this, componentName, eventName, params);
        }
      }
    };
  });
  unwrapExports(emitter);

  var merge = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    exports.default = function (target) {
      for (var i = 1, j = arguments.length; i < j; i++) {
        var source = arguments[i] || {};

        for (var prop in source) {
          if (source.hasOwnProperty(prop)) {
            var value = source[prop];

            if (value !== undefined) {
              target[prop] = value;
            }
          }
        }
      }

      return target;
    };
  });
  unwrapExports(merge);

  var input = createCommonjsModule(function (module) {
    module.exports =
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/dist/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 74);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      0:
      /***/
      function _(module, __webpack_exports__, __webpack_require__) {
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "a", function () {
          return normalizeComponent;
        });
        /* globals __VUE_SSR_CONTEXT__ */
        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.


        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier,
        /* server only */
        shadowMode
        /* vue-cli only */
        ) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // render functions

          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          } // functional template


          if (functionalTemplate) {
            options.functional = true;
          } // scopedId


          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
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


              if (injectStyles) {
                injectStyles.call(this, context);
              } // register component module identifier for async chunk inferrence


              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            }; // used by ssr in case component is cached and beforeCreate
            // never gets called


            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function () {
              injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
          }

          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook; // register for functioal component in vue file

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

          return {
            exports: scriptExports,
            options: options
          };
        }
        /***/

      },

      /***/
      10:
      /***/
      function _(module, exports) {
        module.exports = migrating;
        /***/
      },

      /***/
      21:
      /***/
      function _(module, exports) {
        module.exports = shared;
        /***/
      },

      /***/
      4:
      /***/
      function _(module, exports) {
        module.exports = emitter;
        /***/
      },

      /***/
      74:
      /***/
      function _(module, __webpack_exports__, __webpack_require__) {

        __webpack_require__.r(__webpack_exports__); // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=template&id=343dd774&


        var render = function render() {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c("div", {
            class: [_vm.type === "textarea" ? "el-textarea" : "el-input", _vm.inputSize ? "el-input--" + _vm.inputSize : "", {
              "is-disabled": _vm.inputDisabled,
              "is-exceed": _vm.inputExceed,
              "el-input-group": _vm.$slots.prepend || _vm.$slots.append,
              "el-input-group--append": _vm.$slots.append,
              "el-input-group--prepend": _vm.$slots.prepend,
              "el-input--prefix": _vm.$slots.prefix || _vm.prefixIcon,
              "el-input--suffix": _vm.$slots.suffix || _vm.suffixIcon || _vm.clearable || _vm.showPassword
            }],
            on: {
              mouseenter: function mouseenter($event) {
                _vm.hovering = true;
              },
              mouseleave: function mouseleave($event) {
                _vm.hovering = false;
              }
            }
          }, [_vm.type !== "textarea" ? [_vm.$slots.prepend ? _c("div", {
            staticClass: "el-input-group__prepend"
          }, [_vm._t("prepend")], 2) : _vm._e(), _vm.type !== "textarea" ? _c("input", _vm._b({
            ref: "input",
            staticClass: "el-input__inner",
            attrs: {
              tabindex: _vm.tabindex,
              type: _vm.showPassword ? _vm.passwordVisible ? "text" : "password" : _vm.type,
              disabled: _vm.inputDisabled,
              readonly: _vm.readonly,
              autocomplete: _vm.autoComplete || _vm.autocomplete,
              "aria-label": _vm.label
            },
            on: {
              compositionstart: _vm.handleCompositionStart,
              compositionupdate: _vm.handleCompositionUpdate,
              compositionend: _vm.handleCompositionEnd,
              input: _vm.handleInput,
              focus: _vm.handleFocus,
              blur: _vm.handleBlur,
              change: _vm.handleChange
            }
          }, "input", _vm.$attrs, false)) : _vm._e(), _vm.$slots.prefix || _vm.prefixIcon ? _c("span", {
            staticClass: "el-input__prefix"
          }, [_vm._t("prefix"), _vm.prefixIcon ? _c("i", {
            staticClass: "el-input__icon",
            class: _vm.prefixIcon
          }) : _vm._e()], 2) : _vm._e(), _vm.getSuffixVisible() ? _c("span", {
            staticClass: "el-input__suffix"
          }, [_c("span", {
            staticClass: "el-input__suffix-inner"
          }, [!_vm.showClear || !_vm.showPwdVisible || !_vm.isWordLimitVisible ? [_vm._t("suffix"), _vm.suffixIcon ? _c("i", {
            staticClass: "el-input__icon",
            class: _vm.suffixIcon
          }) : _vm._e()] : _vm._e(), _vm.showClear ? _c("i", {
            staticClass: "el-input__icon el-icon-circle-close el-input__clear",
            on: {
              mousedown: function mousedown($event) {
                $event.preventDefault();
              },
              click: _vm.clear
            }
          }) : _vm._e(), _vm.showPwdVisible ? _c("i", {
            staticClass: "el-input__icon el-icon-view el-input__clear",
            on: {
              click: _vm.handlePasswordVisible
            }
          }) : _vm._e(), _vm.isWordLimitVisible ? _c("span", {
            staticClass: "el-input__count"
          }, [_c("span", {
            staticClass: "el-input__count-inner"
          }, [_vm._v("\n            " + _vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit) + "\n          ")])]) : _vm._e()], 2), _vm.validateState ? _c("i", {
            staticClass: "el-input__icon",
            class: ["el-input__validateIcon", _vm.validateIcon]
          }) : _vm._e()]) : _vm._e(), _vm.$slots.append ? _c("div", {
            staticClass: "el-input-group__append"
          }, [_vm._t("append")], 2) : _vm._e()] : _c("textarea", _vm._b({
            ref: "textarea",
            staticClass: "el-textarea__inner",
            style: _vm.textareaStyle,
            attrs: {
              tabindex: _vm.tabindex,
              disabled: _vm.inputDisabled,
              readonly: _vm.readonly,
              autocomplete: _vm.autoComplete || _vm.autocomplete,
              "aria-label": _vm.label
            },
            on: {
              compositionstart: _vm.handleCompositionStart,
              compositionupdate: _vm.handleCompositionUpdate,
              compositionend: _vm.handleCompositionEnd,
              input: _vm.handleInput,
              focus: _vm.handleFocus,
              blur: _vm.handleBlur,
              change: _vm.handleChange
            }
          }, "textarea", _vm.$attrs, false)), _vm.isWordLimitVisible && _vm.type === "textarea" ? _c("span", {
            staticClass: "el-input__count"
          }, [_vm._v(_vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit))]) : _vm._e()], 2);
        };

        var staticRenderFns = [];
        render._withStripped = true; // CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=template&id=343dd774&
        // EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"

        var emitter_ = __webpack_require__(4);

        var emitter_default =
        /*#__PURE__*/
        __webpack_require__.n(emitter_); // EXTERNAL MODULE: external "element-ui/lib/mixins/migrating"


        var migrating_ = __webpack_require__(10);

        var migrating_default =
        /*#__PURE__*/
        __webpack_require__.n(migrating_); // CONCATENATED MODULE: ./packages/input/src/calcTextareaHeight.js


        var hiddenTextarea = void 0;
        var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
        var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

        function calculateNodeStyling(targetElement) {
          var style = window.getComputedStyle(targetElement);
          var boxSizing = style.getPropertyValue('box-sizing');
          var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
          var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
          var contextStyle = CONTEXT_STYLE.map(function (name) {
            return name + ':' + style.getPropertyValue(name);
          }).join(';');
          return {
            contextStyle: contextStyle,
            paddingSize: paddingSize,
            borderSize: borderSize,
            boxSizing: boxSizing
          };
        }

        function calcTextareaHeight(targetElement) {
          var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          if (!hiddenTextarea) {
            hiddenTextarea = document.createElement('textarea');
            document.body.appendChild(hiddenTextarea);
          }

          var _calculateNodeStyling = calculateNodeStyling(targetElement),
              paddingSize = _calculateNodeStyling.paddingSize,
              borderSize = _calculateNodeStyling.borderSize,
              boxSizing = _calculateNodeStyling.boxSizing,
              contextStyle = _calculateNodeStyling.contextStyle;

          hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
          hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';
          var height = hiddenTextarea.scrollHeight;
          var result = {};

          if (boxSizing === 'border-box') {
            height = height + borderSize;
          } else if (boxSizing === 'content-box') {
            height = height - paddingSize;
          }

          hiddenTextarea.value = '';
          var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

          if (minRows !== null) {
            var minHeight = singleRowHeight * minRows;

            if (boxSizing === 'border-box') {
              minHeight = minHeight + paddingSize + borderSize;
            }

            height = Math.max(minHeight, height);
            result.minHeight = minHeight + 'px';
          }

          if (maxRows !== null) {
            var maxHeight = singleRowHeight * maxRows;

            if (boxSizing === 'border-box') {
              maxHeight = maxHeight + paddingSize + borderSize;
            }

            height = Math.min(maxHeight, height);
          }

          result.height = height + 'px';
          hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
          hiddenTextarea = null;
          return result;
        }

        var merge_ = __webpack_require__(9);

        var merge_default =
        /*#__PURE__*/
        __webpack_require__.n(merge_); // EXTERNAL MODULE: external "element-ui/lib/utils/shared"


        var shared_ = __webpack_require__(21); // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=script&lang=js&
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

        /* harmony default export */


        var inputvue_type_script_lang_js_ = {
          name: 'ElInput',
          componentName: 'ElInput',
          mixins: [emitter_default.a, migrating_default.a],
          inheritAttrs: false,
          inject: {
            elForm: {
              default: ''
            },
            elFormItem: {
              default: ''
            }
          },
          data: function data() {
            return {
              textareaCalcStyle: {},
              hovering: false,
              focused: false,
              isComposing: false,
              passwordVisible: false
            };
          },
          props: {
            value: [String, Number],
            size: String,
            resize: String,
            form: String,
            disabled: Boolean,
            readonly: Boolean,
            type: {
              type: String,
              default: 'text'
            },
            autosize: {
              type: [Boolean, Object],
              default: false
            },
            autocomplete: {
              type: String,
              default: 'off'
            },

            /** @Deprecated in next major version */
            autoComplete: {
              type: String,
              validator: function validator(val) {
                return true;
              }
            },
            validateEvent: {
              type: Boolean,
              default: true
            },
            suffixIcon: String,
            prefixIcon: String,
            label: String,
            clearable: {
              type: Boolean,
              default: false
            },
            showPassword: {
              type: Boolean,
              default: false
            },
            showWordLimit: {
              type: Boolean,
              default: false
            },
            tabindex: String
          },
          computed: {
            _elFormItemSize: function _elFormItemSize() {
              return (this.elFormItem || {}).elFormItemSize;
            },
            validateState: function validateState() {
              return this.elFormItem ? this.elFormItem.validateState : '';
            },
            needStatusIcon: function needStatusIcon() {
              return this.elForm ? this.elForm.statusIcon : false;
            },
            validateIcon: function validateIcon() {
              return {
                validating: 'el-icon-loading',
                success: 'el-icon-circle-check',
                error: 'el-icon-circle-close'
              }[this.validateState];
            },
            textareaStyle: function textareaStyle() {
              return merge_default()({}, this.textareaCalcStyle, {
                resize: this.resize
              });
            },
            inputSize: function inputSize() {
              return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
            },
            inputDisabled: function inputDisabled() {
              return this.disabled || (this.elForm || {}).disabled;
            },
            nativeInputValue: function nativeInputValue() {
              return this.value === null || this.value === undefined ? '' : String(this.value);
            },
            showClear: function showClear() {
              return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering);
            },
            showPwdVisible: function showPwdVisible() {
              return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused);
            },
            isWordLimitVisible: function isWordLimitVisible() {
              return this.showWordLimit && this.$attrs.maxlength && (this.type === 'text' || this.type === 'textarea') && !this.inputDisabled && !this.readonly && !this.showPassword;
            },
            upperLimit: function upperLimit() {
              return this.$attrs.maxlength;
            },
            textLength: function textLength() {
              if (typeof this.value === 'number') {
                return String(this.value).length;
              }

              return (this.value || '').length;
            },
            inputExceed: function inputExceed() {
              // show exceed style if length of initial value greater then maxlength
              return this.isWordLimitVisible && this.textLength > this.upperLimit;
            }
          },
          watch: {
            value: function value(val) {
              this.$nextTick(this.resizeTextarea);

              if (this.validateEvent) {
                this.dispatch('ElFormItem', 'el.form.change', [val]);
              }
            },
            // native input value is set explicitly
            // do not use v-model / :value in template
            // see: https://github.com/ElemeFE/element/issues/14521
            nativeInputValue: function nativeInputValue() {
              this.setNativeInputValue();
            },
            // when change between <input> and <textarea>,
            // update DOM dependent value and styles
            // https://github.com/ElemeFE/element/issues/14857
            type: function type() {
              var _this = this;

              this.$nextTick(function () {
                _this.setNativeInputValue();

                _this.resizeTextarea();

                _this.updateIconOffset();
              });
            }
          },
          methods: {
            focus: function focus() {
              this.getInput().focus();
            },
            blur: function blur() {
              this.getInput().blur();
            },
            getMigratingConfig: function getMigratingConfig() {
              return {
                props: {
                  'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
                  'on-icon-click': 'on-icon-click is removed.'
                },
                events: {
                  'click': 'click is removed.'
                }
              };
            },
            handleBlur: function handleBlur(event) {
              this.focused = false;
              this.$emit('blur', event);

              if (this.validateEvent) {
                this.dispatch('ElFormItem', 'el.form.blur', [this.value]);
              }
            },
            select: function select() {
              this.getInput().select();
            },
            resizeTextarea: function resizeTextarea() {
              if (this.$isServer) return;
              var autosize = this.autosize,
                  type = this.type;
              if (type !== 'textarea') return;

              if (!autosize) {
                this.textareaCalcStyle = {
                  minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
                };
                return;
              }

              var minRows = autosize.minRows;
              var maxRows = autosize.maxRows;
              this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
            },
            setNativeInputValue: function setNativeInputValue() {
              var input = this.getInput();
              if (!input) return;
              if (input.value === this.nativeInputValue) return;
              input.value = this.nativeInputValue;
            },
            handleFocus: function handleFocus(event) {
              this.focused = true;
              this.$emit('focus', event);
            },
            handleCompositionStart: function handleCompositionStart() {
              this.isComposing = true;
            },
            handleCompositionUpdate: function handleCompositionUpdate(event) {
              var text = event.target.value;
              var lastCharacter = text[text.length - 1] || '';
              this.isComposing = !Object(shared_["isKorean"])(lastCharacter);
            },
            handleCompositionEnd: function handleCompositionEnd(event) {
              if (this.isComposing) {
                this.isComposing = false;
                this.handleInput(event);
              }
            },
            handleInput: function handleInput(event) {
              // should not emit input during composition
              // see: https://github.com/ElemeFE/element/issues/10516
              if (this.isComposing) return; // hack for https://github.com/ElemeFE/element/issues/8548
              // should remove the following line when we don't support IE

              if (event.target.value === this.nativeInputValue) return;
              this.$emit('input', event.target.value); // ensure native input value is controlled
              // see: https://github.com/ElemeFE/element/issues/12850

              this.$nextTick(this.setNativeInputValue);
            },
            handleChange: function handleChange(event) {
              this.$emit('change', event.target.value);
            },
            calcIconOffset: function calcIconOffset(place) {
              var elList = [].slice.call(this.$el.querySelectorAll('.el-input__' + place) || []);
              if (!elList.length) return;
              var el = null;

              for (var i = 0; i < elList.length; i++) {
                if (elList[i].parentNode === this.$el) {
                  el = elList[i];
                  break;
                }
              }

              if (!el) return;
              var pendantMap = {
                suffix: 'append',
                prefix: 'prepend'
              };
              var pendant = pendantMap[place];

              if (this.$slots[pendant]) {
                el.style.transform = 'translateX(' + (place === 'suffix' ? '-' : '') + this.$el.querySelector('.el-input-group__' + pendant).offsetWidth + 'px)';
              } else {
                el.removeAttribute('style');
              }
            },
            updateIconOffset: function updateIconOffset() {
              this.calcIconOffset('prefix');
              this.calcIconOffset('suffix');
            },
            clear: function clear() {
              this.$emit('input', '');
              this.$emit('change', '');
              this.$emit('clear');
            },
            handlePasswordVisible: function handlePasswordVisible() {
              this.passwordVisible = !this.passwordVisible;
              this.focus();
            },
            getInput: function getInput() {
              return this.$refs.input || this.$refs.textarea;
            },
            getSuffixVisible: function getSuffixVisible() {
              return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword || this.isWordLimitVisible || this.validateState && this.needStatusIcon;
            }
          },
          created: function created() {
            this.$on('inputSelect', this.select);
          },
          mounted: function mounted() {
            this.setNativeInputValue();
            this.resizeTextarea();
            this.updateIconOffset();
          },
          updated: function updated() {
            this.$nextTick(this.updateIconOffset);
          }
        }; // CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=script&lang=js&

        /* harmony default export */

        var src_inputvue_type_script_lang_js_ = inputvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js

        var componentNormalizer = __webpack_require__(0); // CONCATENATED MODULE: ./packages/input/src/input.vue

        /* normalize component */


        var component = Object(componentNormalizer["a"
        /* default */
        ])(src_inputvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);

        component.options.__file = "packages/input/src/input.vue";
        /* harmony default export */

        var input = component.exports; // CONCATENATED MODULE: ./packages/input/index.js

        /* istanbul ignore next */

        input.install = function (Vue) {
          Vue.component(input.name, input);
        };
        /* harmony default export */


        var packages_input = __webpack_exports__["default"] = input;
        /***/
      },

      /***/
      9:
      /***/
      function _(module, exports) {
        module.exports = merge;
        /***/
      }
      /******/

    });
  });
  unwrapExports(input);

  var dom = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.isInContainer = exports.getScrollContainer = exports.isScroll = exports.getStyle = exports.once = exports.off = exports.on = undefined;

    var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
      return _typeof(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
    };
    /* istanbul ignore next */


    exports.hasClass = hasClass;
    exports.addClass = addClass;
    exports.removeClass = removeClass;
    exports.setStyle = setStyle;

    var _vue2 = _interopRequireDefault(_vue);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var isServer = _vue2.default.prototype.$isServer;
    var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
    var MOZ_HACK_REGEXP = /^moz([A-Z])/;
    var ieVersion = isServer ? 0 : Number(document.documentMode);
    /* istanbul ignore next */

    var trim = function trim(string) {
      return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
    };
    /* istanbul ignore next */


    var camelCase = function camelCase(name) {
      return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
      }).replace(MOZ_HACK_REGEXP, 'Moz$1');
    };
    /* istanbul ignore next */


    var on = exports.on = function () {
      if (!isServer && document.addEventListener) {
        return function (element, event, handler) {
          if (element && event && handler) {
            element.addEventListener(event, handler, false);
          }
        };
      } else {
        return function (element, event, handler) {
          if (element && event && handler) {
            element.attachEvent('on' + event, handler);
          }
        };
      }
    }();
    /* istanbul ignore next */


    var off = exports.off = function () {
      if (!isServer && document.removeEventListener) {
        return function (element, event, handler) {
          if (element && event) {
            element.removeEventListener(event, handler, false);
          }
        };
      } else {
        return function (element, event, handler) {
          if (element && event) {
            element.detachEvent('on' + event, handler);
          }
        };
      }
    }();
    /* istanbul ignore next */


    var once = exports.once = function once(el, event, fn) {
      var listener = function listener() {
        if (fn) {
          fn.apply(this, arguments);
        }

        off(el, event, listener);
      };

      on(el, event, listener);
    };
    /* istanbul ignore next */


    function hasClass(el, cls) {
      if (!el || !cls) return false;
      if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');

      if (el.classList) {
        return el.classList.contains(cls);
      } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
      }
    }
    /* istanbul ignore next */

    function addClass(el, cls) {
      if (!el) return;
      var curClass = el.className;
      var classes = (cls || '').split(' ');

      for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
          el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
          curClass += ' ' + clsName;
        }
      }

      if (!el.classList) {
        el.className = curClass;
      }
    }
    /* istanbul ignore next */

    function removeClass(el, cls) {
      if (!el || !cls) return;
      var classes = cls.split(' ');
      var curClass = ' ' + el.className + ' ';

      for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
          el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
          curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
      }

      if (!el.classList) {
        el.className = trim(curClass);
      }
    }
    /* istanbul ignore next */

    var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
      if (isServer) return;
      if (!element || !styleName) return null;
      styleName = camelCase(styleName);

      if (styleName === 'float') {
        styleName = 'styleFloat';
      }

      try {
        switch (styleName) {
          case 'opacity':
            try {
              return element.filters.item('alpha').opacity / 100;
            } catch (e) {
              return 1.0;
            }

          default:
            return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
        }
      } catch (e) {
        return element.style[styleName];
      }
    } : function (element, styleName) {
      if (isServer) return;
      if (!element || !styleName) return null;
      styleName = camelCase(styleName);

      if (styleName === 'float') {
        styleName = 'cssFloat';
      }

      try {
        var computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
      } catch (e) {
        return element.style[styleName];
      }
    };
    /* istanbul ignore next */

    function setStyle(element, styleName, value) {
      if (!element || !styleName) return;

      if ((typeof styleName === 'undefined' ? 'undefined' : _typeof$1(styleName)) === 'object') {
        for (var prop in styleName) {
          if (styleName.hasOwnProperty(prop)) {
            setStyle(element, prop, styleName[prop]);
          }
        }
      } else {
        styleName = camelCase(styleName);

        if (styleName === 'opacity' && ieVersion < 9) {
          element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
        } else {
          element.style[styleName] = value;
        }
      }
    }

    var isScroll = exports.isScroll = function isScroll(el, vertical) {
      if (isServer) return;
      var determinedDirection = vertical !== null || vertical !== undefined;
      var overflow = determinedDirection ? vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x') : getStyle(el, 'overflow');
      return overflow.match(/(scroll|auto)/);
    };

    var getScrollContainer = exports.getScrollContainer = function getScrollContainer(el, vertical) {
      if (isServer) return;
      var parent = el;

      while (parent) {
        if ([window, document, document.documentElement].includes(parent)) {
          return window;
        }

        if (isScroll(parent, vertical)) {
          return parent;
        }

        parent = parent.parentNode;
      }

      return parent;
    };

    var isInContainer = exports.isInContainer = function isInContainer(el, container) {
      if (isServer || !el || !container) return false;
      var elRect = el.getBoundingClientRect();
      var containerRect = void 0;

      if ([window, document, document.documentElement, null, undefined].includes(container)) {
        containerRect = {
          top: 0,
          right: window.innerWidth,
          bottom: window.innerHeight,
          left: 0
        };
      } else {
        containerRect = container.getBoundingClientRect();
      }

      return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
    };
  });
  unwrapExports(dom);
  var dom_1 = dom.isInContainer;
  var dom_2 = dom.getScrollContainer;
  var dom_3 = dom.isScroll;
  var dom_4 = dom.getStyle;
  var dom_5 = dom.once;
  var dom_6 = dom.off;
  var dom_7 = dom.on;
  var dom_8 = dom.hasClass;
  var dom_9 = dom.addClass;
  var dom_10 = dom.removeClass;
  var dom_11 = dom.setStyle;

  var clickoutside = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _vue2 = _interopRequireDefault(_vue);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var nodeList = [];
    var ctx = '@@clickoutsideContext';
    var startClick = void 0;
    var seed = 0;
    !_vue2.default.prototype.$isServer && (0, dom.on)(document, 'mousedown', function (e) {
      return startClick = e;
    });
    !_vue2.default.prototype.$isServer && (0, dom.on)(document, 'mouseup', function (e) {
      nodeList.forEach(function (node) {
        return node[ctx].documentHandler(e, startClick);
      });
    });

    function createDocumentHandler(el, binding, vnode) {
      return function () {
        var mouseup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var mousedown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))) return;

        if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
          vnode.context[el[ctx].methodName]();
        } else {
          el[ctx].bindingFn && el[ctx].bindingFn();
        }
      };
    }
    /**
     * v-clickoutside
     * @desc 点击元素外面才会触发的事件
     * @example
     * ```vue
     * <div v-element-clickoutside="handleClose">
     * ```
     */


    exports.default = {
      bind: function bind(el, binding, vnode) {
        nodeList.push(el);
        var id = seed++;
        el[ctx] = {
          id: id,
          documentHandler: createDocumentHandler(el, binding, vnode),
          methodName: binding.expression,
          bindingFn: binding.value
        };
      },
      update: function update(el, binding, vnode) {
        el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
        el[ctx].methodName = binding.expression;
        el[ctx].bindingFn = binding.value;
      },
      unbind: function unbind(el) {
        var len = nodeList.length;

        for (var i = 0; i < len; i++) {
          if (nodeList[i][ctx].id === el[ctx].id) {
            nodeList.splice(i, 1);
            break;
          }
        }

        delete el[ctx];
      }
    };
  });
  unwrapExports(clickoutside);

  /**
   * A collection of shims that provide minimal functionality of the ES6 collections.
   *
   * These implementations are not meant to be used outside of the ResizeObserver
   * modules as they cover only a limited range of use cases.
   */

  /* eslint-disable require-jsdoc, valid-jsdoc */
  var MapShim = function () {
    if (typeof Map !== 'undefined') {
      return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */


    function getIndex(arr, key) {
      var result = -1;
      arr.some(function (entry, index) {
        if (entry[0] === key) {
          result = index;
          return true;
        }

        return false;
      });
      return result;
    }

    return (
      /** @class */
      function () {
        function class_1() {
          this.__entries__ = [];
        }

        Object.defineProperty(class_1.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function get() {
            return this.__entries__.length;
          },
          enumerable: true,
          configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */

        class_1.prototype.get = function (key) {
          var index = getIndex(this.__entries__, key);
          var entry = this.__entries__[index];
          return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */


        class_1.prototype.set = function (key, value) {
          var index = getIndex(this.__entries__, key);

          if (~index) {
            this.__entries__[index][1] = value;
          } else {
            this.__entries__.push([key, value]);
          }
        };
        /**
         * @param {*} key
         * @returns {void}
         */


        class_1.prototype.delete = function (key) {
          var entries = this.__entries__;
          var index = getIndex(entries, key);

          if (~index) {
            entries.splice(index, 1);
          }
        };
        /**
         * @param {*} key
         * @returns {void}
         */


        class_1.prototype.has = function (key) {
          return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */


        class_1.prototype.clear = function () {
          this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */


        class_1.prototype.forEach = function (callback, ctx) {
          if (ctx === void 0) {
            ctx = null;
          }

          for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
            var entry = _a[_i];
            callback.call(ctx, entry[1], entry[0]);
          }
        };

        return class_1;
      }()
    );
  }();
  /**
   * Detects whether window and document objects are available in current environment.
   */


  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

  var global$1 = function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
      return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
      return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
      return window;
    } // eslint-disable-next-line no-new-func


    return Function('return this')();
  }();
  /**
   * A shim for the requestAnimationFrame which falls back to the setTimeout if
   * first one is not supported.
   *
   * @returns {number} Requests' identifier.
   */


  var requestAnimationFrame$1 = function () {
    if (typeof requestAnimationFrame === 'function') {
      // It's required to use a bounded function because IE sometimes throws
      // an "Invalid calling object" error if rAF is invoked without the global
      // object on the left hand side.
      return requestAnimationFrame.bind(global$1);
    }

    return function (callback) {
      return setTimeout(function () {
        return callback(Date.now());
      }, 1000 / 60);
    };
  }(); // Defines minimum timeout before adding a trailing call.


  var trailingTimeout = 2;
  /**
   * Creates a wrapper function which ensures that provided callback will be
   * invoked only once during the specified delay period.
   *
   * @param {Function} callback - Function to be invoked after the delay period.
   * @param {number} delay - Delay after which to invoke callback.
   * @returns {Function}
   */

  function throttle(callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */

    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }

      if (trailingCall) {
        proxy();
      }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */


    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */


    function proxy() {
      var timeStamp = Date.now();

      if (leadingCall) {
        // Reject immediately following calls.
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        } // Schedule new call to be in invoked when the pending one is resolved.
        // This is important for "transitions" which never actually start
        // immediately so there is a chance that we might miss one if change
        // happens amids the pending invocation.


        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }

      lastCallTime = timeStamp;
    }

    return proxy;
  } // Minimum delay before invoking the update of observers.


  var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
  // might affect dimensions of observed elements.

  var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

  var mutationObserverSupported = typeof MutationObserver !== 'undefined';
  /**
   * Singleton controller class which handles updates of ResizeObserver instances.
   */

  var ResizeObserverController =
  /** @class */
  function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
      /**
       * Indicates whether DOM listeners have been added.
       *
       * @private {boolean}
       */
      this.connected_ = false;
      /**
       * Tells that controller has subscribed for Mutation Events.
       *
       * @private {boolean}
       */

      this.mutationEventsAdded_ = false;
      /**
       * Keeps reference to the instance of MutationObserver.
       *
       * @private {MutationObserver}
       */

      this.mutationsObserver_ = null;
      /**
       * A list of connected observers.
       *
       * @private {Array<ResizeObserverSPI>}
       */

      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */


    ResizeObserverController.prototype.addObserver = function (observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      } // Add listeners if they haven't been added yet.


      if (!this.connected_) {
        this.connect_();
      }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */


    ResizeObserverController.prototype.removeObserver = function (observer) {
      var observers = this.observers_;
      var index = observers.indexOf(observer); // Remove observer if it's present in registry.

      if (~index) {
        observers.splice(index, 1);
      } // Remove listeners if controller has no connected observers.


      if (!observers.length && this.connected_) {
        this.disconnect_();
      }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */


    ResizeObserverController.prototype.refresh = function () {
      var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
      // be future ones caused by CSS transitions.

      if (changesDetected) {
        this.refresh();
      }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */


    ResizeObserverController.prototype.updateObservers_ = function () {
      // Collect observers that have active observations.
      var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
      }); // Deliver notifications in a separate cycle in order to avoid any
      // collisions between observers, e.g. when multiple instances of
      // ResizeObserver are tracking the same element and the callback of one
      // of them changes content dimensions of the observed target. Sometimes
      // this may result in notifications being blocked for the rest of observers.

      activeObservers.forEach(function (observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */


    ResizeObserverController.prototype.connect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already added.
      if (!isBrowser || this.connected_) {
        return;
      } // Subscription to the "Transitionend" event is used as a workaround for
      // delayed transitions. This way it's possible to capture at least the
      // final state of an element.


      document.addEventListener('transitionend', this.onTransitionEnd_);
      window.addEventListener('resize', this.refresh);

      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);
        this.mutationEventsAdded_ = true;
      }

      this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */


    ResizeObserverController.prototype.disconnect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already removed.
      if (!isBrowser || !this.connected_) {
        return;
      }

      document.removeEventListener('transitionend', this.onTransitionEnd_);
      window.removeEventListener('resize', this.refresh);

      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }

      if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
      }

      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */


    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
      var _b = _a.propertyName,
          propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

      var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
      });

      if (isReflowProperty) {
        this.refresh();
      }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */


    ResizeObserverController.getInstance = function () {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
      }

      return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */


    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
  }();
  /**
   * Defines non-writable/enumerable properties of the provided target object.
   *
   * @param {Object} target - Object for which to define properties.
   * @param {Object} props - Properties to be defined.
   * @returns {Object} Target object.
   */


  var defineConfigurable = function defineConfigurable(target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }

    return target;
  };
  /**
   * Returns the global object associated with provided element.
   *
   * @param {Object} target
   * @returns {Object}
   */


  var getWindowOf = function getWindowOf(target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
    // provided element.

    return ownerGlobal || global$1;
  }; // Placeholder of an empty content rectangle.


  var emptyRect = createRectInit(0, 0, 0, 0);
  /**
   * Converts provided string to a number.
   *
   * @param {number|string} value
   * @returns {number}
   */

  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  /**
   * Extracts borders size from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @param {...string} positions - Borders positions (top, right, ...)
   * @returns {number}
   */


  function getBordersSize(styles) {
    var positions = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }

    return positions.reduce(function (size, position) {
      var value = styles['border-' + position + '-width'];
      return size + toFloat(value);
    }, 0);
  }
  /**
   * Extracts paddings sizes from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @returns {Object} Paddings box.
   */


  function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position = positions_1[_i];
      var value = styles['padding-' + position];
      paddings[position] = toFloat(value);
    }

    return paddings;
  }
  /**
   * Calculates content rectangle of provided SVG element.
   *
   * @param {SVGGraphicsElement} target - Element content rectangle of which needs
   *      to be calculated.
   * @returns {DOMRectInit}
   */


  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  /**
   * Calculates content rectangle of provided HTMLElement.
   *
   * @param {HTMLElement} target - Element for which to calculate the content rectangle.
   * @returns {DOMRectInit}
   */


  function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth,
        clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.

    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.

    var width = toFloat(styles.width),
        height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).

    if (styles.boxSizing === 'border-box') {
      // Following conditions are required to handle Internet Explorer which
      // doesn't include paddings and borders to computed CSS dimensions.
      //
      // We can say that if CSS dimensions + paddings are equal to the "client"
      // properties then it's either IE, and thus we don't need to subtract
      // anything, or an element merely doesn't have paddings/borders styles.
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, 'left', 'right') + horizPad;
      }

      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
      }
    } // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.


    if (!isDocumentElement(target)) {
      // In some browsers (only in Firefox, actually) CSS width & height
      // include scroll bars size which can be removed at this step as scroll
      // bars are the only difference between rounded dimensions + paddings
      // and "client" properties, though that is not always true in Chrome.
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
      // E.g. for an element with content width of 314.2px it sometimes gives
      // the client width of 315px and for the width of 314.7px it may give
      // 314px. And it doesn't happen all the time. So just ignore this delta
      // as a non-relevant.

      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }

      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
  }
  /**
   * Checks whether provided element is an instance of the SVGGraphicsElement.
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */


  var isSVGGraphicsElement = function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
      return function (target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    } // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens


    return function (target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
    };
  }();
  /**
   * Checks whether provided element is a document element (<html>).
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */


  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  /**
   * Calculates an appropriate content rectangle for provided html or svg element.
   *
   * @param {Element} target - Element content rectangle of which needs to be calculated.
   * @returns {DOMRectInit}
   */


  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
  }
  /**
   * Creates rectangle with an interface of the DOMRectReadOnly.
   * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
   *
   * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
   * @returns {DOMRectReadOnly}
   */


  function createReadOnlyRect(_a) {
    var x = _a.x,
        y = _a.y,
        width = _a.width,
        height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

    defineConfigurable(rect, {
      x: x,
      y: y,
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x
    });
    return rect;
  }
  /**
   * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
   * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
   *
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   * @param {number} width - Rectangle's width.
   * @param {number} height - Rectangle's height.
   * @returns {DOMRectInit}
   */


  function createRectInit(x, y, width, height) {
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }
  /**
   * Class that is responsible for computations of the content rectangle of
   * provided DOM element and for keeping track of it's changes.
   */


  var ResizeObservation =
  /** @class */
  function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
      /**
       * Broadcasted width of content rectangle.
       *
       * @type {number}
       */
      this.broadcastWidth = 0;
      /**
       * Broadcasted height of content rectangle.
       *
       * @type {number}
       */

      this.broadcastHeight = 0;
      /**
       * Reference to the last observed content rectangle.
       *
       * @private {DOMRectInit}
       */

      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */


    ResizeObservation.prototype.isActive = function () {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */


    ResizeObservation.prototype.broadcastRect = function () {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };

    return ResizeObservation;
  }();

  var ResizeObserverEntry =
  /** @class */
  function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
      // and are also not enumerable in the native implementation.
      //
      // Property accessors are not being used as they'd require to define a
      // private WeakMap storage which may cause memory leaks in browsers that
      // don't support this type of collections.

      defineConfigurable(this, {
        target: target,
        contentRect: contentRect
      });
    }

    return ResizeObserverEntry;
  }();

  var ResizeObserverSPI =
  /** @class */
  function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
      /**
       * Collection of resize observations that have detected changes in dimensions
       * of elements.
       *
       * @private {Array<ResizeObservation>}
       */
      this.activeObservations_ = [];
      /**
       * Registry of the ResizeObservation instances.
       *
       * @private {Map<Element, ResizeObservation>}
       */

      this.observations_ = new MapShim();

      if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
      }

      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */


    ResizeObserverSPI.prototype.observe = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      } // Do nothing if current environment doesn't have the Element interface.


      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
      }

      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }

      var observations = this.observations_; // Do nothing if element is already being observed.

      if (observations.has(target)) {
        return;
      }

      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this); // Force the update of observations.

      this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */


    ResizeObserverSPI.prototype.unobserve = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      } // Do nothing if current environment doesn't have the Element interface.


      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
      }

      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }

      var observations = this.observations_; // Do nothing if element is not being observed.

      if (!observations.has(target)) {
        return;
      }

      observations.delete(target);

      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.disconnect = function () {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.gatherActive = function () {
      var _this = this;

      this.clearActive();
      this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.broadcastActive = function () {
      // Do nothing if observer doesn't have active observations.
      if (!this.hasActive()) {
        return;
      }

      var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

      var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */


    ResizeObserverSPI.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    };

    return ResizeObserverSPI;
  }(); // Registry of internal observers. If WeakMap is not available use current shim
  // for the Map collection as it has all required methods and because WeakMap
  // can't be fully polyfilled anyway.


  var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
  /**
   * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
   * exposing only those methods and properties that are defined in the spec.
   */

  var ResizeObserver =
  /** @class */
  function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
      if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
      }

      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      }

      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }

    return ResizeObserver;
  }(); // Expose public methods of ResizeObserver.


  ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
      var _a;

      return (_a = observers.get(this))[method].apply(_a, arguments);
    };
  });

  var index$1 = function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
      return global$1.ResizeObserver;
    }

    return ResizeObserver;
  }();

  var ResizeObserver_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$1
  });

  var _resizeObserverPolyfill = getCjsExportFromNamespace(ResizeObserver_es);

  var resizeEvent = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.removeResizeListener = exports.addResizeListener = undefined;

    var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var isServer = typeof window === 'undefined';
    /* istanbul ignore next */

    var resizeHandler = function resizeHandler(entries) {
      for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var entry = _ref;
        var listeners = entry.target.__resizeListeners__ || [];

        if (listeners.length) {
          listeners.forEach(function (fn) {
            fn();
          });
        }
      }
    };
    /* istanbul ignore next */


    var addResizeListener = exports.addResizeListener = function addResizeListener(element, fn) {
      if (isServer) return;

      if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        element.__ro__ = new _resizeObserverPolyfill2.default(resizeHandler);

        element.__ro__.observe(element);
      }

      element.__resizeListeners__.push(fn);
    };
    /* istanbul ignore next */


    var removeResizeListener = exports.removeResizeListener = function removeResizeListener(element, fn) {
      if (!element || !element.__resizeListeners__) return;

      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

      if (!element.__resizeListeners__.length) {
        element.__ro__.disconnect();
      }
    };
  });
  unwrapExports(resizeEvent);
  var resizeEvent_1 = resizeEvent.removeResizeListener;
  var resizeEvent_2 = resizeEvent.addResizeListener;

  var scrollbarWidth = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    exports.default = function () {
      if (_vue2.default.prototype.$isServer) return 0;
      if (scrollBarWidth !== undefined) return scrollBarWidth;
      var outer = document.createElement('div');
      outer.className = 'el-scrollbar__wrap';
      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      outer.style.position = 'absolute';
      outer.style.top = '-9999px';
      document.body.appendChild(outer);
      var widthNoScroll = outer.offsetWidth;
      outer.style.overflow = 'scroll';
      var inner = document.createElement('div');
      inner.style.width = '100%';
      outer.appendChild(inner);
      var widthWithScroll = inner.offsetWidth;
      outer.parentNode.removeChild(outer);
      scrollBarWidth = widthNoScroll - widthWithScroll;
      return scrollBarWidth;
    };

    var _vue2 = _interopRequireDefault(_vue);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var scrollBarWidth = void 0;
  });
  unwrapExports(scrollbarWidth);

  var scrollbar = createCommonjsModule(function (module) {
    module.exports =
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/dist/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 122);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      122:
      /***/
      function _(module, __webpack_exports__, __webpack_require__) {

        __webpack_require__.r(__webpack_exports__); // EXTERNAL MODULE: external "element-ui/lib/utils/resize-event"


        var resize_event_ = __webpack_require__(15); // EXTERNAL MODULE: external "element-ui/lib/utils/scrollbar-width"


        var scrollbar_width_ = __webpack_require__(37);

        var scrollbar_width_default =
        /*#__PURE__*/
        __webpack_require__.n(scrollbar_width_); // EXTERNAL MODULE: external "element-ui/lib/utils/util"


        var util_ = __webpack_require__(3); // EXTERNAL MODULE: external "element-ui/lib/utils/dom"


        var dom_ = __webpack_require__(2); // CONCATENATED MODULE: ./packages/scrollbar/src/util.js


        var BAR_MAP = {
          vertical: {
            offset: 'offsetHeight',
            scroll: 'scrollTop',
            scrollSize: 'scrollHeight',
            size: 'height',
            key: 'vertical',
            axis: 'Y',
            client: 'clientY',
            direction: 'top'
          },
          horizontal: {
            offset: 'offsetWidth',
            scroll: 'scrollLeft',
            scrollSize: 'scrollWidth',
            size: 'width',
            key: 'horizontal',
            axis: 'X',
            client: 'clientX',
            direction: 'left'
          }
        };

        function renderThumbStyle(_ref) {
          var move = _ref.move,
              size = _ref.size,
              bar = _ref.bar;
          var style = {};
          var translate = 'translate' + bar.axis + '(' + move + '%)';
          style[bar.size] = size;
          style.transform = translate;
          style.msTransform = translate;
          style.webkitTransform = translate;
          return style;
        }

        /* istanbul ignore next */

        /* harmony default export */

        var src_bar = {
          name: 'Bar',
          props: {
            vertical: Boolean,
            size: String,
            move: Number
          },
          computed: {
            bar: function bar() {
              return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
            },
            wrap: function wrap() {
              return this.$parent.wrap;
            }
          },
          render: function render(h) {
            var size = this.size,
                move = this.move,
                bar = this.bar;
            return h('div', {
              'class': ['el-scrollbar__bar', 'is-' + bar.key],
              on: {
                'mousedown': this.clickTrackHandler
              }
            }, [h('div', {
              ref: 'thumb',
              'class': 'el-scrollbar__thumb',
              on: {
                'mousedown': this.clickThumbHandler
              },
              style: renderThumbStyle({
                size: size,
                move: move,
                bar: bar
              })
            })]);
          },
          methods: {
            clickThumbHandler: function clickThumbHandler(e) {
              // prevent click event of right button
              if (e.ctrlKey || e.button === 2) {
                return;
              }

              this.startDrag(e);
              this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
            },
            clickTrackHandler: function clickTrackHandler(e) {
              var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
              var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
              var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];
              this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
            },
            startDrag: function startDrag(e) {
              e.stopImmediatePropagation();
              this.cursorDown = true;
              Object(dom_["on"])(document, 'mousemove', this.mouseMoveDocumentHandler);
              Object(dom_["on"])(document, 'mouseup', this.mouseUpDocumentHandler);

              document.onselectstart = function () {
                return false;
              };
            },
            mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
              if (this.cursorDown === false) return;
              var prevPage = this[this.bar.axis];
              if (!prevPage) return;
              var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
              var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
              var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];
              this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
            },
            mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
              this.cursorDown = false;
              this[this.bar.axis] = 0;
              Object(dom_["off"])(document, 'mousemove', this.mouseMoveDocumentHandler);
              document.onselectstart = null;
            }
          },
          destroyed: function destroyed() {
            Object(dom_["off"])(document, 'mouseup', this.mouseUpDocumentHandler);
          }
        }; // CONCATENATED MODULE: ./packages/scrollbar/src/main.js
        // reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js

        /* istanbul ignore next */

        /* harmony default export */

        var main = {
          name: 'ElScrollbar',
          components: {
            Bar: src_bar
          },
          props: {
            native: Boolean,
            wrapStyle: {},
            wrapClass: {},
            viewClass: {},
            viewStyle: {},
            noresize: Boolean,
            // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
            tag: {
              type: String,
              default: 'div'
            }
          },
          data: function data() {
            return {
              sizeWidth: '0',
              sizeHeight: '0',
              moveX: 0,
              moveY: 0
            };
          },
          computed: {
            wrap: function wrap() {
              return this.$refs.wrap;
            }
          },
          render: function render(h) {
            var gutter = scrollbar_width_default()();
            var style = this.wrapStyle;

            if (gutter) {
              var gutterWith = '-' + gutter + 'px';
              var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';

              if (Array.isArray(this.wrapStyle)) {
                style = Object(util_["toObject"])(this.wrapStyle);
                style.marginRight = style.marginBottom = gutterWith;
              } else if (typeof this.wrapStyle === 'string') {
                style += gutterStyle;
              } else {
                style = gutterStyle;
              }
            }

            var view = h(this.tag, {
              class: ['el-scrollbar__view', this.viewClass],
              style: this.viewStyle,
              ref: 'resize'
            }, this.$slots.default);
            var wrap = h('div', {
              ref: 'wrap',
              style: style,
              on: {
                'scroll': this.handleScroll
              },
              'class': [this.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap--hidden-default']
            }, [[view]]);
            var nodes = void 0;

            if (!this.native) {
              nodes = [wrap, h(src_bar, {
                attrs: {
                  move: this.moveX,
                  size: this.sizeWidth
                }
              }), h(src_bar, {
                attrs: {
                  vertical: true,
                  move: this.moveY,
                  size: this.sizeHeight
                }
              })];
            } else {
              nodes = [h('div', {
                ref: 'wrap',
                'class': [this.wrapClass, 'el-scrollbar__wrap'],
                style: style
              }, [[view]])];
            }

            return h('div', {
              class: 'el-scrollbar'
            }, nodes);
          },
          methods: {
            handleScroll: function handleScroll() {
              var wrap = this.wrap;
              this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
              this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
            },
            update: function update() {
              var heightPercentage = void 0,
                  widthPercentage = void 0;
              var wrap = this.wrap;
              if (!wrap) return;
              heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
              widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;
              this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
              this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
            }
          },
          mounted: function mounted() {
            if (this.native) return;
            this.$nextTick(this.update);
            !this.noresize && Object(resize_event_["addResizeListener"])(this.$refs.resize, this.update);
          },
          beforeDestroy: function beforeDestroy() {
            if (this.native) return;
            !this.noresize && Object(resize_event_["removeResizeListener"])(this.$refs.resize, this.update);
          }
        }; // CONCATENATED MODULE: ./packages/scrollbar/index.js

        /* istanbul ignore next */

        main.install = function (Vue) {
          Vue.component(main.name, main);
        };
        /* harmony default export */


        var scrollbar = __webpack_exports__["default"] = main;
        /***/
      },

      /***/
      15:
      /***/
      function _(module, exports) {
        module.exports = resizeEvent;
        /***/
      },

      /***/
      2:
      /***/
      function _(module, exports) {
        module.exports = dom;
        /***/
      },

      /***/
      3:
      /***/
      function _(module, exports) {
        module.exports = util;
        /***/
      },

      /***/
      37:
      /***/
      function _(module, exports) {
        module.exports = scrollbarWidth;
        /***/
      }
      /******/

    });
  });
  unwrapExports(scrollbar);

  /* eslint-disable no-undefined,no-param-reassign,no-shadow */

  /**
   * Throttle execution of a function. Especially useful for rate limiting
   * execution of handlers on events like resize and scroll.
   *
   * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
   * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
   *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
   *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
   *                                    the internal counter is reset)
   * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
   *                                    to `callback` when the throttled-function is executed.
   * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
   *                                    schedule `callback` to execute after `delay` ms.
   *
   * @return {Function}  A new, throttled, function.
   */
  var throttle$1 = function throttle(delay, noTrailing, callback, debounceMode) {
    // After wrapper has stopped being called, this timeout ensures that
    // `callback` is executed at the proper times in `throttle` and `end`
    // debounce modes.
    var timeoutID; // Keep track of the last time `callback` was executed.

    var lastExec = 0; // `noTrailing` defaults to falsy.

    if (typeof noTrailing !== 'boolean') {
      debounceMode = callback;
      callback = noTrailing;
      noTrailing = undefined;
    } // The `wrapper` function encapsulates all of the throttling / debouncing
    // functionality and when executed will limit the rate at which `callback`
    // is executed.


    function wrapper() {
      var self = this;
      var elapsed = Number(new Date()) - lastExec;
      var args = arguments; // Execute `callback` and update the `lastExec` timestamp.

      function exec() {
        lastExec = Number(new Date());
        callback.apply(self, args);
      } // If `debounceMode` is true (at begin) this is used to clear the flag
      // to allow future `callback` executions.


      function clear() {
        timeoutID = undefined;
      }

      if (debounceMode && !timeoutID) {
        // Since `wrapper` is being called for the first time and
        // `debounceMode` is true (at begin), execute `callback`.
        exec();
      } // Clear any existing timeout.


      if (timeoutID) {
        clearTimeout(timeoutID);
      }

      if (debounceMode === undefined && elapsed > delay) {
        // In throttle mode, if `delay` time has been exceeded, execute
        // `callback`.
        exec();
      } else if (noTrailing !== true) {
        // In trailing throttle mode, since `delay` time has not been
        // exceeded, schedule `callback` to execute `delay` ms after most
        // recent execution.
        //
        // If `debounceMode` is true (at begin), schedule `clear` to execute
        // after `delay` ms.
        //
        // If `debounceMode` is false (at end), schedule `callback` to
        // execute after `delay` ms.
        timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
      }
    } // Return the wrapper function.


    return wrapper;
  };

  /* eslint-disable no-undefined */

  /**
   * Debounce execution of a function. Debouncing, unlike throttling,
   * guarantees that a function is only executed a single time, either at the
   * very beginning of a series of calls, or at the very end.
   *
   * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
   * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
   *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
   *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
   * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
   *                                  to `callback` when the debounced-function is executed.
   *
   * @return {Function} A new, debounced function.
   */

  var debounce = function debounce(delay, atBegin, callback) {
    return callback === undefined ? throttle$1(delay, atBegin, false) : throttle$1(delay, callback, atBegin !== false);
  };

  var focus = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    exports.default = function (ref) {
      return {
        methods: {
          focus: function focus() {
            this.$refs[ref].focus();
          }
        }
      };
    };
  });
  unwrapExports(focus);

  var popupManager = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _vue2 = _interopRequireDefault(_vue);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var hasModal = false;
    var hasInitZIndex = false;
    var zIndex = void 0;

    var getModal = function getModal() {
      if (_vue2.default.prototype.$isServer) return;
      var modalDom = PopupManager.modalDom;

      if (modalDom) {
        hasModal = true;
      } else {
        hasModal = false;
        modalDom = document.createElement('div');
        PopupManager.modalDom = modalDom;
        modalDom.addEventListener('touchmove', function (event) {
          event.preventDefault();
          event.stopPropagation();
        });
        modalDom.addEventListener('click', function () {
          PopupManager.doOnModalClick && PopupManager.doOnModalClick();
        });
      }

      return modalDom;
    };

    var instances = {};
    var PopupManager = {
      modalFade: true,
      getInstance: function getInstance(id) {
        return instances[id];
      },
      register: function register(id, instance) {
        if (id && instance) {
          instances[id] = instance;
        }
      },
      deregister: function deregister(id) {
        if (id) {
          instances[id] = null;
          delete instances[id];
        }
      },
      nextZIndex: function nextZIndex() {
        return PopupManager.zIndex++;
      },
      modalStack: [],
      doOnModalClick: function doOnModalClick() {
        var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topItem) return;
        var instance = PopupManager.getInstance(topItem.id);

        if (instance && instance.closeOnClickModal) {
          instance.close();
        }
      },
      openModal: function openModal(id, zIndex, dom$1, modalClass, modalFade) {
        if (_vue2.default.prototype.$isServer) return;
        if (!id || zIndex === undefined) return;
        this.modalFade = modalFade;
        var modalStack = this.modalStack;

        for (var i = 0, j = modalStack.length; i < j; i++) {
          var item = modalStack[i];

          if (item.id === id) {
            return;
          }
        }

        var modalDom = getModal();
        (0, dom.addClass)(modalDom, 'v-modal');

        if (this.modalFade && !hasModal) {
          (0, dom.addClass)(modalDom, 'v-modal-enter');
        }

        if (modalClass) {
          var classArr = modalClass.trim().split(/\s+/);
          classArr.forEach(function (item) {
            return (0, dom.addClass)(modalDom, item);
          });
        }

        setTimeout(function () {
          (0, dom.removeClass)(modalDom, 'v-modal-enter');
        }, 200);

        if (dom$1 && dom$1.parentNode && dom$1.parentNode.nodeType !== 11) {
          dom$1.parentNode.appendChild(modalDom);
        } else {
          document.body.appendChild(modalDom);
        }

        if (zIndex) {
          modalDom.style.zIndex = zIndex;
        }

        modalDom.tabIndex = 0;
        modalDom.style.display = '';
        this.modalStack.push({
          id: id,
          zIndex: zIndex,
          modalClass: modalClass
        });
      },
      closeModal: function closeModal(id) {
        var modalStack = this.modalStack;
        var modalDom = getModal();

        if (modalStack.length > 0) {
          var topItem = modalStack[modalStack.length - 1];

          if (topItem.id === id) {
            if (topItem.modalClass) {
              var classArr = topItem.modalClass.trim().split(/\s+/);
              classArr.forEach(function (item) {
                return (0, dom.removeClass)(modalDom, item);
              });
            }

            modalStack.pop();

            if (modalStack.length > 0) {
              modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
            }
          } else {
            for (var i = modalStack.length - 1; i >= 0; i--) {
              if (modalStack[i].id === id) {
                modalStack.splice(i, 1);
                break;
              }
            }
          }
        }

        if (modalStack.length === 0) {
          if (this.modalFade) {
            (0, dom.addClass)(modalDom, 'v-modal-leave');
          }

          setTimeout(function () {
            if (modalStack.length === 0) {
              if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
              modalDom.style.display = 'none';
              PopupManager.modalDom = undefined;
            }

            (0, dom.removeClass)(modalDom, 'v-modal-leave');
          }, 200);
        }
      }
    };
    Object.defineProperty(PopupManager, 'zIndex', {
      configurable: true,
      get: function get() {
        if (!hasInitZIndex) {
          zIndex = zIndex || (_vue2.default.prototype.$ELEMENT || {}).zIndex || 2000;
          hasInitZIndex = true;
        }

        return zIndex;
      },
      set: function set(value) {
        zIndex = value;
      }
    });

    var getTopPopup = function getTopPopup() {
      if (_vue2.default.prototype.$isServer) return;

      if (PopupManager.modalStack.length > 0) {
        var topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topPopup) return;
        var instance = PopupManager.getInstance(topPopup.id);
        return instance;
      }
    };

    if (!_vue2.default.prototype.$isServer) {
      // handle `esc` key when the popup is shown
      window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
          var topPopup = getTopPopup();

          if (topPopup && topPopup.closeOnPressEscape) {
            topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
          }
        }
      });
    }

    exports.default = PopupManager;
  });
  unwrapExports(popupManager);

  var popup = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.PopupManager = undefined;

    var _vue2 = _interopRequireDefault(_vue);

    var _merge2 = _interopRequireDefault(merge);

    var _popupManager2 = _interopRequireDefault(popupManager);

    var _scrollbarWidth2 = _interopRequireDefault(scrollbarWidth);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var idSeed = 1;
    var scrollBarWidth = void 0;
    exports.default = {
      props: {
        visible: {
          type: Boolean,
          default: false
        },
        openDelay: {},
        closeDelay: {},
        zIndex: {},
        modal: {
          type: Boolean,
          default: false
        },
        modalFade: {
          type: Boolean,
          default: true
        },
        modalClass: {},
        modalAppendToBody: {
          type: Boolean,
          default: false
        },
        lockScroll: {
          type: Boolean,
          default: true
        },
        closeOnPressEscape: {
          type: Boolean,
          default: false
        },
        closeOnClickModal: {
          type: Boolean,
          default: false
        }
      },
      beforeMount: function beforeMount() {
        this._popupId = 'popup-' + idSeed++;

        _popupManager2.default.register(this._popupId, this);
      },
      beforeDestroy: function beforeDestroy() {
        _popupManager2.default.deregister(this._popupId);

        _popupManager2.default.closeModal(this._popupId);

        this.restoreBodyStyle();
      },
      data: function data() {
        return {
          opened: false,
          bodyPaddingRight: null,
          computedBodyPaddingRight: 0,
          withoutHiddenClass: true,
          rendered: false
        };
      },
      watch: {
        visible: function visible(val) {
          var _this = this;

          if (val) {
            if (this._opening) return;

            if (!this.rendered) {
              this.rendered = true;

              _vue2.default.nextTick(function () {
                _this.open();
              });
            } else {
              this.open();
            }
          } else {
            this.close();
          }
        }
      },
      methods: {
        open: function open(options) {
          var _this2 = this;

          if (!this.rendered) {
            this.rendered = true;
          }

          var props = (0, _merge2.default)({}, this.$props || this, options);

          if (this._closeTimer) {
            clearTimeout(this._closeTimer);
            this._closeTimer = null;
          }

          clearTimeout(this._openTimer);
          var openDelay = Number(props.openDelay);

          if (openDelay > 0) {
            this._openTimer = setTimeout(function () {
              _this2._openTimer = null;

              _this2.doOpen(props);
            }, openDelay);
          } else {
            this.doOpen(props);
          }
        },
        doOpen: function doOpen(props) {
          if (this.$isServer) return;
          if (this.willOpen && !this.willOpen()) return;
          if (this.opened) return;
          this._opening = true;
          var dom$1 = this.$el;
          var modal = props.modal;
          var zIndex = props.zIndex;

          if (zIndex) {
            _popupManager2.default.zIndex = zIndex;
          }

          if (modal) {
            if (this._closing) {
              _popupManager2.default.closeModal(this._popupId);

              this._closing = false;
            }

            _popupManager2.default.openModal(this._popupId, _popupManager2.default.nextZIndex(), this.modalAppendToBody ? undefined : dom$1, props.modalClass, props.modalFade);

            if (props.lockScroll) {
              this.withoutHiddenClass = !(0, dom.hasClass)(document.body, 'el-popup-parent--hidden');

              if (this.withoutHiddenClass) {
                this.bodyPaddingRight = document.body.style.paddingRight;
                this.computedBodyPaddingRight = parseInt((0, dom.getStyle)(document.body, 'paddingRight'), 10);
              }

              scrollBarWidth = (0, _scrollbarWidth2.default)();
              var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
              var bodyOverflowY = (0, dom.getStyle)(document.body, 'overflowY');

              if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
                document.body.style.paddingRight = this.computedBodyPaddingRight + scrollBarWidth + 'px';
              }

              (0, dom.addClass)(document.body, 'el-popup-parent--hidden');
            }
          }

          if (getComputedStyle(dom$1).position === 'static') {
            dom$1.style.position = 'absolute';
          }

          dom$1.style.zIndex = _popupManager2.default.nextZIndex();
          this.opened = true;
          this.onOpen && this.onOpen();
          this.doAfterOpen();
        },
        doAfterOpen: function doAfterOpen() {
          this._opening = false;
        },
        close: function close() {
          var _this3 = this;

          if (this.willClose && !this.willClose()) return;

          if (this._openTimer !== null) {
            clearTimeout(this._openTimer);
            this._openTimer = null;
          }

          clearTimeout(this._closeTimer);
          var closeDelay = Number(this.closeDelay);

          if (closeDelay > 0) {
            this._closeTimer = setTimeout(function () {
              _this3._closeTimer = null;

              _this3.doClose();
            }, closeDelay);
          } else {
            this.doClose();
          }
        },
        doClose: function doClose() {
          this._closing = true;
          this.onClose && this.onClose();

          if (this.lockScroll) {
            setTimeout(this.restoreBodyStyle, 200);
          }

          this.opened = false;
          this.doAfterClose();
        },
        doAfterClose: function doAfterClose() {
          _popupManager2.default.closeModal(this._popupId);

          this._closing = false;
        },
        restoreBodyStyle: function restoreBodyStyle() {
          if (this.modal && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.bodyPaddingRight;
            (0, dom.removeClass)(document.body, 'el-popup-parent--hidden');
          }

          this.withoutHiddenClass = true;
        }
      }
    };
    exports.PopupManager = _popupManager2.default;
  });
  unwrapExports(popup);
  var popup_1 = popup.PopupManager;

  var popper = createCommonjsModule(function (module) {

    var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
      return _typeof(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
    };

    (function (root, factory) {
      if (( _typeof$1(module)) === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
      } else {
        // Browser globals (root is window)
        root.Popper = factory();
      }
    })(undefined, function () {

      var root = window; // default options

      var DEFAULTS = {
        // placement of the popper
        placement: 'bottom',
        gpuAcceleration: true,
        // shift popper from its origin by the given amount of pixels (can be negative)
        offset: 0,
        // the element which will act as boundary of the popper
        boundariesElement: 'viewport',
        // amount of pixel used to define a minimum distance between the boundaries and the popper
        boundariesPadding: 5,
        // popper will try to prevent overflow following this order,
        // by default, then, it could overflow on the left and on top of the boundariesElement
        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],
        // the behavior used by flip to change the placement of the popper
        flipBehavior: 'flip',
        arrowElement: '[x-arrow]',
        arrowOffset: 0,
        // list of functions used to modify the offsets before they are applied to the popper
        modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],
        modifiersIgnored: [],
        forceAbsolute: false
      };
      /**
       * Create a new Popper.js instance
       * @constructor Popper
       * @param {HTMLElement} reference - The reference element used to position the popper
       * @param {HTMLElement|Object} popper
       *      The HTML element used as popper, or a configuration used to generate the popper.
       * @param {String} [popper.tagName='div'] The tag name of the generated popper.
       * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
       * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
       * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
       * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
       * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
       * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
       * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
       * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
       * @param {Object} options
       * @param {String} [options.placement=bottom]
       *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
       *      left(-start, -end)`
       *
       * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
       *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
       *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
       *      reference element.
       *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
       *
       * @param {Boolean} [options.gpuAcceleration=true]
       *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
       *      browser to use the GPU to accelerate the rendering.
       *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
       *
       * @param {Number} [options.offset=0]
       *      Amount of pixels the popper will be shifted (can be negative).
       *
       * @param {String|Element} [options.boundariesElement='viewport']
       *      The element which will define the boundaries of the popper position, the popper will never be placed outside
       *      of the defined boundaries (except if `keepTogether` is enabled)
       *
       * @param {Number} [options.boundariesPadding=5]
       *      Additional padding for the boundaries
       *
       * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
       *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
       *      this means that the last ones will never overflow
       *
       * @param {String|Array} [options.flipBehavior='flip']
       *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
       *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
       *      its axis (`right - left`, `top - bottom`).
       *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
       *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
       *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
       *
       * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
       *      List of functions used to modify the data before they are applied to the popper, add your custom functions
       *      to this array to edit the offsets and placement.
       *      The function should reflect the @params and @returns of preventOverflow
       *
       * @param {Array} [options.modifiersIgnored=[]]
       *      Put here any built-in modifier name you want to exclude from the modifiers list
       *      The function should reflect the @params and @returns of preventOverflow
       *
       * @param {Boolean} [options.removeOnDestroy=false]
       *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
       */

      function Popper(reference, popper, options) {
        this._reference = reference.jquery ? reference[0] : reference;
        this.state = {}; // if the popper variable is a configuration object, parse it to generate an HTMLElement
        // generate a default popper if is not defined

        var isNotDefined = typeof popper === 'undefined' || popper === null;
        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';

        if (isNotDefined || isConfig) {
          this._popper = this.parse(isConfig ? popper : {});
        } // otherwise, use the given HTMLElement as popper
        else {
            this._popper = popper.jquery ? popper[0] : popper;
          } // with {} we create a new object with the options inside it


        this._options = Object.assign({}, DEFAULTS, options); // refactoring modifiers' list

        this._options.modifiers = this._options.modifiers.map(function (modifier) {
          // remove ignored modifiers
          if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return; // set the x-placement attribute before everything else because it could be used to add margins to the popper
          // margins needs to be calculated to get the correct popper offsets

          if (modifier === 'applyStyle') {
            this._popper.setAttribute('x-placement', this._options.placement);
          } // return predefined modifier identified by string or keep the custom one


          return this.modifiers[modifier] || modifier;
        }.bind(this)); // make sure to apply the popper position before any computation

        this.state.position = this._getPosition(this._popper, this._reference);
        setStyle(this._popper, {
          position: this.state.position,
          top: 0
        }); // fire the first update to position the popper in the right place

        this.update(); // setup event listeners, they will take care of update the position in specific situations

        this._setupEventListeners();

        return this;
      } //
      // Methods
      //

      /**
       * Destroy the popper
       * @method
       * @memberof Popper
       */


      Popper.prototype.destroy = function () {
        this._popper.removeAttribute('x-placement');

        this._popper.style.left = '';
        this._popper.style.position = '';
        this._popper.style.top = '';
        this._popper.style[getSupportedPropertyName('transform')] = '';

        this._removeEventListeners(); // remove the popper if user explicity asked for the deletion on destroy


        if (this._options.removeOnDestroy) {
          this._popper.remove();
        }

        return this;
      };
      /**
       * Updates the position of the popper, computing the new offsets and applying the new style
       * @method
       * @memberof Popper
       */


      Popper.prototype.update = function () {
        var data = {
          instance: this,
          styles: {}
        }; // store placement inside the data object, modifiers will be able to edit `placement` if needed
        // and refer to _originalPlacement to know the original value

        data.placement = this._options.placement;
        data._originalPlacement = this._options.placement; // compute the popper and reference offsets and put them inside data.offsets

        data.offsets = this._getOffsets(this._popper, this._reference, data.placement); // get boundaries

        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);
        data = this.runModifiers(data, this._options.modifiers);

        if (typeof this.state.updateCallback === 'function') {
          this.state.updateCallback(data);
        }
      };
      /**
       * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
       * @method
       * @memberof Popper
       * @param {Function} callback
       */


      Popper.prototype.onCreate = function (callback) {
        // the createCallbacks return as first argument the popper instance
        callback(this);
        return this;
      };
      /**
       * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
       * used to style popper and its arrow.
       * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
       * @method
       * @memberof Popper
       * @param {Function} callback
       */


      Popper.prototype.onUpdate = function (callback) {
        this.state.updateCallback = callback;
        return this;
      };
      /**
       * Helper used to generate poppers from a configuration file
       * @method
       * @memberof Popper
       * @param config {Object} configuration
       * @returns {HTMLElement} popper
       */


      Popper.prototype.parse = function (config) {
        var defaultConfig = {
          tagName: 'div',
          classNames: ['popper'],
          attributes: [],
          parent: root.document.body,
          content: '',
          contentType: 'text',
          arrowTagName: 'div',
          arrowClassNames: ['popper__arrow'],
          arrowAttributes: ['x-arrow']
        };
        config = Object.assign({}, defaultConfig, config);
        var d = root.document;
        var popper = d.createElement(config.tagName);
        addClassNames(popper, config.classNames);
        addAttributes(popper, config.attributes);

        if (config.contentType === 'node') {
          popper.appendChild(config.content.jquery ? config.content[0] : config.content);
        } else if (config.contentType === 'html') {
          popper.innerHTML = config.content;
        } else {
          popper.textContent = config.content;
        }

        if (config.arrowTagName) {
          var arrow = d.createElement(config.arrowTagName);
          addClassNames(arrow, config.arrowClassNames);
          addAttributes(arrow, config.arrowAttributes);
          popper.appendChild(arrow);
        }

        var parent = config.parent.jquery ? config.parent[0] : config.parent; // if the given parent is a string, use it to match an element
        // if more than one element is matched, the first one will be used as parent
        // if no elements are matched, the script will throw an error

        if (typeof parent === 'string') {
          parent = d.querySelectorAll(config.parent);

          if (parent.length > 1) {
            console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
          }

          if (parent.length === 0) {
            throw 'ERROR: the given `parent` doesn\'t exists!';
          }

          parent = parent[0];
        } // if the given parent is a DOM nodes list or an array of nodes with more than one element,
        // the first one will be used as parent


        if (parent.length > 1 && parent instanceof Element === false) {
          console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
          parent = parent[0];
        } // append the generated popper to its parent


        parent.appendChild(popper);
        return popper;
        /**
         * Adds class names to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} classes
         */

        function addClassNames(element, classNames) {
          classNames.forEach(function (className) {
            element.classList.add(className);
          });
        }
        /**
         * Adds attributes to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} attributes
         * @example
         * addAttributes(element, [ 'data-info:foobar' ]);
         */


        function addAttributes(element, attributes) {
          attributes.forEach(function (attribute) {
            element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
          });
        }
      };
      /**
       * Helper used to get the position which will be applied to the popper
       * @method
       * @memberof Popper
       * @param config {HTMLElement} popper element
       * @param reference {HTMLElement} reference element
       * @returns {String} position
       */


      Popper.prototype._getPosition = function (popper, reference) {
        var container = getOffsetParent(reference);

        if (this._options.forceAbsolute) {
          return 'absolute';
        } // Decide if the popper will be fixed
        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together


        var isParentFixed = isFixed(reference);
        return isParentFixed ? 'fixed' : 'absolute';
      };
      /**
       * Get offsets to the popper
       * @method
       * @memberof Popper
       * @access private
       * @param {Element} popper - the popper element
       * @param {Element} reference - the reference element (the popper will be relative to this)
       * @returns {Object} An object containing the offsets which will be applied to the popper
       */


      Popper.prototype._getOffsets = function (popper, reference, placement) {
        placement = placement.split('-')[0];
        var popperOffsets = {};
        popperOffsets.position = this.state.position;
        var isParentFixed = popperOffsets.position === 'fixed'; //
        // Get reference element position
        //

        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed); //
        // Get popper sizes
        //

        var popperRect = getOuterSizes(popper); //
        // Compute offsets of popper
        //
        // depending by the popper placement we have to compute its offsets slightly differently

        if (['right', 'left'].indexOf(placement) !== -1) {
          popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;

          if (placement === 'left') {
            popperOffsets.left = referenceOffsets.left - popperRect.width;
          } else {
            popperOffsets.left = referenceOffsets.right;
          }
        } else {
          popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;

          if (placement === 'top') {
            popperOffsets.top = referenceOffsets.top - popperRect.height;
          } else {
            popperOffsets.top = referenceOffsets.bottom;
          }
        } // Add width and height to our offsets object


        popperOffsets.width = popperRect.width;
        popperOffsets.height = popperRect.height;
        return {
          popper: popperOffsets,
          reference: referenceOffsets
        };
      };
      /**
       * Setup needed event listeners used to update the popper position
       * @method
       * @memberof Popper
       * @access private
       */


      Popper.prototype._setupEventListeners = function () {
        // NOTE: 1 DOM access here
        this.state.updateBound = this.update.bind(this);
        root.addEventListener('resize', this.state.updateBound); // if the boundariesElement is window we don't need to listen for the scroll event

        if (this._options.boundariesElement !== 'window') {
          var target = getScrollParent(this._reference); // here it could be both `body` or `documentElement` thanks to Firefox, we then check both

          if (target === root.document.body || target === root.document.documentElement) {
            target = root;
          }

          target.addEventListener('scroll', this.state.updateBound);
          this.state.scrollTarget = target;
        }
      };
      /**
       * Remove event listeners used to update the popper position
       * @method
       * @memberof Popper
       * @access private
       */


      Popper.prototype._removeEventListeners = function () {
        // NOTE: 1 DOM access here
        root.removeEventListener('resize', this.state.updateBound);

        if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
          this.state.scrollTarget.removeEventListener('scroll', this.state.updateBound);
          this.state.scrollTarget = null;
        }

        this.state.updateBound = null;
      };
      /**
       * Computed the boundaries limits and return them
       * @method
       * @memberof Popper
       * @access private
       * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
       * @param {Number} padding - Boundaries padding
       * @param {Element} boundariesElement - Element used to define the boundaries
       * @returns {Object} Coordinates of the boundaries
       */


      Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
        // NOTE: 1 DOM access here
        var boundaries = {};
        var width, height;

        if (boundariesElement === 'window') {
          var body = root.document.body,
              html = root.document.documentElement;
          height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
          width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
          boundaries = {
            top: 0,
            right: width,
            bottom: height,
            left: 0
          };
        } else if (boundariesElement === 'viewport') {
          var offsetParent = getOffsetParent(this._popper);
          var scrollParent = getScrollParent(this._popper);
          var offsetParentRect = getOffsetRect(offsetParent); // Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`

          var getScrollTopValue = function getScrollTopValue(element) {
            return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
          };

          var getScrollLeftValue = function getScrollLeftValue(element) {
            return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
          }; // if the popper is fixed we don't have to substract scrolling from the boundaries


          var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent);
          var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent);
          boundaries = {
            top: 0 - (offsetParentRect.top - scrollTop),
            right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
            bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
            left: 0 - (offsetParentRect.left - scrollLeft)
          };
        } else {
          if (getOffsetParent(this._popper) === boundariesElement) {
            boundaries = {
              top: 0,
              left: 0,
              right: boundariesElement.clientWidth,
              bottom: boundariesElement.clientHeight
            };
          } else {
            boundaries = getOffsetRect(boundariesElement);
          }
        }

        boundaries.left += padding;
        boundaries.right -= padding;
        boundaries.top = boundaries.top + padding;
        boundaries.bottom = boundaries.bottom - padding;
        return boundaries;
      };
      /**
       * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
       * @method
       * @memberof Popper
       * @access public
       * @param {Object} data
       * @param {Array} modifiers
       * @param {Function} ends
       */


      Popper.prototype.runModifiers = function (data, modifiers, ends) {
        var modifiersToRun = modifiers.slice();

        if (ends !== undefined) {
          modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
        }

        modifiersToRun.forEach(function (modifier) {
          if (isFunction(modifier)) {
            data = modifier.call(this, data);
          }
        }.bind(this));
        return data;
      };
      /**
       * Helper used to know if the given modifier depends from another one.
       * @method
       * @memberof Popper
       * @param {String} requesting - name of requesting modifier
       * @param {String} requested - name of requested modifier
       * @returns {Boolean}
       */


      Popper.prototype.isModifierRequired = function (requesting, requested) {
        var index = getArrayKeyIndex(this._options.modifiers, requesting);
        return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
          return modifier === requested;
        }).length;
      }; //
      // Modifiers
      //

      /**
       * Modifiers list
       * @namespace Popper.modifiers
       * @memberof Popper
       * @type {Object}
       */


      Popper.prototype.modifiers = {};
      /**
       * Apply the computed styles to the popper element
       * @method
       * @memberof Popper.modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @returns {Object} The same data object
       */

      Popper.prototype.modifiers.applyStyle = function (data) {
        // apply the final offsets to the popper
        // NOTE: 1 DOM access here
        var styles = {
          position: data.offsets.popper.position
        }; // round top and left to avoid blurry text

        var left = Math.round(data.offsets.popper.left);
        var top = Math.round(data.offsets.popper.top); // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
        // we automatically use the supported prefixed version if needed

        var prefixedProperty;

        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
          styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
          styles.top = 0;
          styles.left = 0;
        } // othwerise, we use the standard `left` and `top` properties
        else {
            styles.left = left;
            styles.top = top;
          } // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!


        Object.assign(styles, data.styles);
        setStyle(this._popper, styles); // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
        // NOTE: 1 DOM access here

        this._popper.setAttribute('x-placement', data.placement); // if the arrow modifier is required and the arrow style has been computed, apply the arrow style


        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
          setStyle(data.arrowElement, data.offsets.arrow);
        }

        return data;
      };
      /**
       * Modifier used to shift the popper on the start or end of its reference element side
       * @method
       * @memberof Popper.modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @returns {Object} The data object, properly modified
       */


      Popper.prototype.modifiers.shift = function (data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftVariation = placement.split('-')[1]; // if shift shiftVariation is specified, run the modifier

        if (shiftVariation) {
          var reference = data.offsets.reference;
          var popper = getPopperClientRect(data.offsets.popper);
          var shiftOffsets = {
            y: {
              start: {
                top: reference.top
              },
              end: {
                top: reference.top + reference.height - popper.height
              }
            },
            x: {
              start: {
                left: reference.left
              },
              end: {
                left: reference.left + reference.width - popper.width
              }
            }
          };
          var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';
          data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
        }

        return data;
      };
      /**
       * Modifier used to make sure the popper does not overflows from it's boundaries
       * @method
       * @memberof Popper.modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @returns {Object} The data object, properly modified
       */


      Popper.prototype.modifiers.preventOverflow = function (data) {
        var order = this._options.preventOverflowOrder;
        var popper = getPopperClientRect(data.offsets.popper);
        var check = {
          left: function left() {
            var left = popper.left;

            if (popper.left < data.boundaries.left) {
              left = Math.max(popper.left, data.boundaries.left);
            }

            return {
              left: left
            };
          },
          right: function right() {
            var left = popper.left;

            if (popper.right > data.boundaries.right) {
              left = Math.min(popper.left, data.boundaries.right - popper.width);
            }

            return {
              left: left
            };
          },
          top: function top() {
            var top = popper.top;

            if (popper.top < data.boundaries.top) {
              top = Math.max(popper.top, data.boundaries.top);
            }

            return {
              top: top
            };
          },
          bottom: function bottom() {
            var top = popper.top;

            if (popper.bottom > data.boundaries.bottom) {
              top = Math.min(popper.top, data.boundaries.bottom - popper.height);
            }

            return {
              top: top
            };
          }
        };
        order.forEach(function (direction) {
          data.offsets.popper = Object.assign(popper, check[direction]());
        });
        return data;
      };
      /**
       * Modifier used to make sure the popper is always near its reference
       * @method
       * @memberof Popper.modifiers
       * @argument {Object} data - The data object generated by _update method
       * @returns {Object} The data object, properly modified
       */


      Popper.prototype.modifiers.keepTogether = function (data) {
        var popper = getPopperClientRect(data.offsets.popper);
        var reference = data.offsets.reference;
        var f = Math.floor;

        if (popper.right < f(reference.left)) {
          data.offsets.popper.left = f(reference.left) - popper.width;
        }

        if (popper.left > f(reference.right)) {
          data.offsets.popper.left = f(reference.right);
        }

        if (popper.bottom < f(reference.top)) {
          data.offsets.popper.top = f(reference.top) - popper.height;
        }

        if (popper.top > f(reference.bottom)) {
          data.offsets.popper.top = f(reference.bottom);
        }

        return data;
      };
      /**
       * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
       * Requires the `preventOverflow` modifier before it in order to work.
       * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
       * @method
       * @memberof Popper.modifiers
       * @argument {Object} data - The data object generated by _update method
       * @returns {Object} The data object, properly modified
       */


      Popper.prototype.modifiers.flip = function (data) {
        // check if preventOverflow is in the list of modifiers before the flip modifier.
        // otherwise flip would not work as expected.
        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
          console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
          return data;
        }

        if (data.flipped && data.placement === data._originalPlacement) {
          // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
          return data;
        }

        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';
        var flipOrder = [];

        if (this._options.flipBehavior === 'flip') {
          flipOrder = [placement, placementOpposite];
        } else {
          flipOrder = this._options.flipBehavior;
        }

        flipOrder.forEach(function (step, index) {
          if (placement !== step || flipOrder.length === index + 1) {
            return;
          }

          placement = data.placement.split('-')[0];
          placementOpposite = getOppositePlacement(placement);
          var popperOffsets = getPopperClientRect(data.offsets.popper); // this boolean is used to distinguish right and bottom from top and left
          // they need different computations to get flipped

          var a = ['right', 'bottom'].indexOf(placement) !== -1; // using Math.floor because the reference offsets may contain decimals we are not going to consider here

          if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
            // we'll use this boolean to detect any flip loop
            data.flipped = true;
            data.placement = flipOrder[index + 1];

            if (variation) {
              data.placement += '-' + variation;
            }

            data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;
            data = this.runModifiers(data, this._options.modifiers, this._flip);
          }
        }.bind(this));
        return data;
      };
      /**
       * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
       * The offsets will shift the popper on the side of its reference element.
       * @method
       * @memberof Popper.modifiers
       * @argument {Object} data - The data object generated by _update method
       * @returns {Object} The data object, properly modified
       */


      Popper.prototype.modifiers.offset = function (data) {
        var offset = this._options.offset;
        var popper = data.offsets.popper;

        if (data.placement.indexOf('left') !== -1) {
          popper.top -= offset;
        } else if (data.placement.indexOf('right') !== -1) {
          popper.top += offset;
        } else if (data.placement.indexOf('top') !== -1) {
          popper.left -= offset;
        } else if (data.placement.indexOf('bottom') !== -1) {
          popper.left += offset;
        }

        return data;
      };
      /**
       * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
       * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
       * @method
       * @memberof Popper.modifiers
       * @argument {Object} data - The data object generated by _update method
       * @returns {Object} The data object, properly modified
       */


      Popper.prototype.modifiers.arrow = function (data) {
        var arrow = this._options.arrowElement;
        var arrowOffset = this._options.arrowOffset; // if the arrowElement is a string, suppose it's a CSS selector

        if (typeof arrow === 'string') {
          arrow = this._popper.querySelector(arrow);
        } // if arrow element is not found, don't run the modifier


        if (!arrow) {
          return data;
        } // the arrow element must be child of its popper


        if (!this._popper.contains(arrow)) {
          console.warn('WARNING: `arrowElement` must be child of its popper element!');
          return data;
        } // arrow depends on keepTogether in order to work


        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
          console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
          return data;
        }

        var arrowStyle = {};
        var placement = data.placement.split('-')[0];
        var popper = getPopperClientRect(data.offsets.popper);
        var reference = data.offsets.reference;
        var isVertical = ['left', 'right'].indexOf(placement) !== -1;
        var len = isVertical ? 'height' : 'width';
        var side = isVertical ? 'top' : 'left';
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowSize = getOuterSizes(arrow)[len]; //
        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
        //
        // top/left side

        if (reference[opSide] - arrowSize < popper[side]) {
          data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
        } // bottom/right side


        if (reference[side] + arrowSize > popper[opSide]) {
          data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
        } // compute center of the popper


        var center = reference[side] + (arrowOffset || reference[len] / 2 - arrowSize / 2);
        var sideValue = center - popper[side]; // prevent arrow from being placed not contiguously to its popper

        sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
        arrowStyle[side] = sideValue;
        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

        data.offsets.arrow = arrowStyle;
        data.arrowElement = arrow;
        return data;
      }; //
      // Helpers
      //

      /**
       * Get the outer sizes of the given element (offset size + margins)
       * @function
       * @ignore
       * @argument {Element} element
       * @returns {Object} object containing width and height properties
       */


      function getOuterSizes(element) {
        // NOTE: 1 DOM access here
        var _display = element.style.display,
            _visibility = element.style.visibility;
        element.style.display = 'block';
        element.style.visibility = 'hidden';
        var calcWidthToForceRepaint = element.offsetWidth; // original method

        var styles = root.getComputedStyle(element);
        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
        var result = {
          width: element.offsetWidth + y,
          height: element.offsetHeight + x
        }; // reset element styles

        element.style.display = _display;
        element.style.visibility = _visibility;
        return result;
      }
      /**
       * Get the opposite placement of the given one/
       * @function
       * @ignore
       * @argument {String} placement
       * @returns {String} flipped placement
       */


      function getOppositePlacement(placement) {
        var hash = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        return placement.replace(/left|right|bottom|top/g, function (matched) {
          return hash[matched];
        });
      }
      /**
       * Given the popper offsets, generate an output similar to getBoundingClientRect
       * @function
       * @ignore
       * @argument {Object} popperOffsets
       * @returns {Object} ClientRect like output
       */


      function getPopperClientRect(popperOffsets) {
        var offsets = Object.assign({}, popperOffsets);
        offsets.right = offsets.left + offsets.width;
        offsets.bottom = offsets.top + offsets.height;
        return offsets;
      }
      /**
       * Given an array and the key to find, returns its index
       * @function
       * @ignore
       * @argument {Array} arr
       * @argument keyToFind
       * @returns index or null
       */


      function getArrayKeyIndex(arr, keyToFind) {
        var i = 0,
            key;

        for (key in arr) {
          if (arr[key] === keyToFind) {
            return i;
          }

          i++;
        }

        return null;
      }
      /**
       * Get CSS computed property of the given element
       * @function
       * @ignore
       * @argument {Eement} element
       * @argument {String} property
       */


      function getStyleComputedProperty(element, property) {
        // NOTE: 1 DOM access here
        var css = root.getComputedStyle(element, null);
        return css[property];
      }
      /**
       * Returns the offset parent of the given element
       * @function
       * @ignore
       * @argument {Element} element
       * @returns {Element} offset parent
       */


      function getOffsetParent(element) {
        // NOTE: 1 DOM access here
        var offsetParent = element.offsetParent;
        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
      }
      /**
       * Returns the scrolling parent of the given element
       * @function
       * @ignore
       * @argument {Element} element
       * @returns {Element} offset parent
       */


      function getScrollParent(element) {
        var parent = element.parentNode;

        if (!parent) {
          return element;
        }

        if (parent === root.document) {
          // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
          // greater than 0 and return the proper element
          if (root.document.body.scrollTop || root.document.body.scrollLeft) {
            return root.document.body;
          } else {
            return root.document.documentElement;
          }
        } // Firefox want us to check `-x` and `-y` variations as well


        if (['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1) {
          // If the detected scrollParent is body, we perform an additional check on its parentNode
          // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
          // fixes issue #65
          return parent;
        }

        return getScrollParent(element.parentNode);
      }
      /**
       * Check if the given element is fixed or is inside a fixed parent
       * @function
       * @ignore
       * @argument {Element} element
       * @argument {Element} customContainer
       * @returns {Boolean} answer to "isFixed?"
       */


      function isFixed(element) {
        if (element === root.document.body) {
          return false;
        }

        if (getStyleComputedProperty(element, 'position') === 'fixed') {
          return true;
        }

        return element.parentNode ? isFixed(element.parentNode) : element;
      }
      /**
       * Set the style to the given popper
       * @function
       * @ignore
       * @argument {Element} element - Element to apply the style to
       * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
       */


      function setStyle(element, styles) {
        function is_numeric(n) {
          return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
        }

        Object.keys(styles).forEach(function (prop) {
          var unit = ''; // add unit if the value is numeric and is one of the following

          if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
            unit = 'px';
          }

          element.style[prop] = styles[prop] + unit;
        });
      }
      /**
       * Check if the given variable is a function
       * @function
       * @ignore
       * @argument {*} functionToCheck - variable to check
       * @returns {Boolean} answer to: is a function?
       */


      function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
      }
      /**
       * Get the position of the given element, relative to its offset parent
       * @function
       * @ignore
       * @param {Element} element
       * @return {Object} position - Coordinates of the element and its `scrollTop`
       */


      function getOffsetRect(element) {
        var elementRect = {
          width: element.offsetWidth,
          height: element.offsetHeight,
          left: element.offsetLeft,
          top: element.offsetTop
        };
        elementRect.right = elementRect.left + elementRect.width;
        elementRect.bottom = elementRect.top + elementRect.height; // position

        return elementRect;
      }
      /**
       * Get bounding client rect of given element
       * @function
       * @ignore
       * @param {HTMLElement} element
       * @return {Object} client rect
       */


      function getBoundingClientRect(element) {
        var rect = element.getBoundingClientRect(); // whether the IE version is lower than 11

        var isIE = navigator.userAgent.indexOf("MSIE") != -1; // fix ie document bounding top always 0 bug

        var rectTop = isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;
        return {
          left: rect.left,
          top: rectTop,
          right: rect.right,
          bottom: rect.bottom,
          width: rect.right - rect.left,
          height: rect.bottom - rectTop
        };
      }
      /**
       * Given an element and one of its parents, return the offset
       * @function
       * @ignore
       * @param {HTMLElement} element
       * @param {HTMLElement} parent
       * @return {Object} rect
       */


      function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
        var elementRect = getBoundingClientRect(element);
        var parentRect = getBoundingClientRect(parent);

        if (fixed) {
          var scrollParent = getScrollParent(parent);
          parentRect.top += scrollParent.scrollTop;
          parentRect.bottom += scrollParent.scrollTop;
          parentRect.left += scrollParent.scrollLeft;
          parentRect.right += scrollParent.scrollLeft;
        }

        var rect = {
          top: elementRect.top - parentRect.top,
          left: elementRect.left - parentRect.left,
          bottom: elementRect.top - parentRect.top + elementRect.height,
          right: elementRect.left - parentRect.left + elementRect.width,
          width: elementRect.width,
          height: elementRect.height
        };
        return rect;
      }
      /**
       * Get the prefixed supported property name
       * @function
       * @ignore
       * @argument {String} property (camelCase)
       * @returns {String} prefixed property (camelCase)
       */


      function getSupportedPropertyName(property) {
        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

        for (var i = 0; i < prefixes.length; i++) {
          var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;

          if (typeof root.document.body.style[toCheck] !== 'undefined') {
            return toCheck;
          }
        }

        return null;
      }
      /**
       * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
       * objects to a target object. It will return the target object.
       * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
       * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
       * @function
       * @ignore
       */


      if (!Object.assign) {
        Object.defineProperty(Object, 'assign', {
          enumerable: false,
          configurable: true,
          writable: true,
          value: function value(target) {
            if (target === undefined || target === null) {
              throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);

            for (var i = 1; i < arguments.length; i++) {
              var nextSource = arguments[i];

              if (nextSource === undefined || nextSource === null) {
                continue;
              }

              nextSource = Object(nextSource);
              var keysArray = Object.keys(nextSource);

              for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                var nextKey = keysArray[nextIndex];
                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

                if (desc !== undefined && desc.enumerable) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }

            return to;
          }
        });
      }

      return Popper;
    });
  });

  var vuePopper = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _vue2 = _interopRequireDefault(_vue);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var PopperJS = _vue2.default.prototype.$isServer ? function () {} : popper;

    var stop = function stop(e) {
      return e.stopPropagation();
    };
    /**
     * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
     * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
     * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
     * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
     * @param {Boolean} [visible=false] Visibility of the popup element.
     * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
     */


    exports.default = {
      props: {
        transformOrigin: {
          type: [Boolean, String],
          default: true
        },
        placement: {
          type: String,
          default: 'bottom'
        },
        boundariesPadding: {
          type: Number,
          default: 5
        },
        reference: {},
        popper: {},
        offset: {
          default: 0
        },
        value: Boolean,
        visibleArrow: Boolean,
        arrowOffset: {
          type: Number,
          default: 35
        },
        appendToBody: {
          type: Boolean,
          default: true
        },
        popperOptions: {
          type: Object,
          default: function _default() {
            return {
              gpuAcceleration: false
            };
          }
        }
      },
      data: function data() {
        return {
          showPopper: false,
          currentPlacement: ''
        };
      },
      watch: {
        value: {
          immediate: true,
          handler: function handler(val) {
            this.showPopper = val;
            this.$emit('input', val);
          }
        },
        showPopper: function showPopper(val) {
          if (this.disabled) return;
          val ? this.updatePopper() : this.destroyPopper();
          this.$emit('input', val);
        }
      },
      methods: {
        createPopper: function createPopper() {
          var _this = this;

          if (this.$isServer) return;
          this.currentPlacement = this.currentPlacement || this.placement;

          if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
            return;
          }

          var options = this.popperOptions;
          var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
          var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

          if (!reference && this.$slots.reference && this.$slots.reference[0]) {
            reference = this.referenceElm = this.$slots.reference[0].elm;
          }

          if (!popper || !reference) return;
          if (this.visibleArrow) this.appendArrow(popper);
          if (this.appendToBody) document.body.appendChild(this.popperElm);

          if (this.popperJS && this.popperJS.destroy) {
            this.popperJS.destroy();
          }

          options.placement = this.currentPlacement;
          options.offset = this.offset;
          options.arrowOffset = this.arrowOffset;
          this.popperJS = new PopperJS(reference, popper, options);
          this.popperJS.onCreate(function (_) {
            _this.$emit('created', _this);

            _this.resetTransformOrigin();

            _this.$nextTick(_this.updatePopper);
          });

          if (typeof options.onUpdate === 'function') {
            this.popperJS.onUpdate(options.onUpdate);
          }

          this.popperJS._popper.style.zIndex = popup.PopupManager.nextZIndex();
          this.popperElm.addEventListener('click', stop);
        },
        updatePopper: function updatePopper() {
          var popperJS = this.popperJS;

          if (popperJS) {
            popperJS.update();

            if (popperJS._popper) {
              popperJS._popper.style.zIndex = popup.PopupManager.nextZIndex();
            }
          } else {
            this.createPopper();
          }
        },
        doDestroy: function doDestroy(forceDestroy) {
          /* istanbul ignore if */
          if (!this.popperJS || this.showPopper && !forceDestroy) return;
          this.popperJS.destroy();
          this.popperJS = null;
        },
        destroyPopper: function destroyPopper() {
          if (this.popperJS) {
            this.resetTransformOrigin();
          }
        },
        resetTransformOrigin: function resetTransformOrigin() {
          if (!this.transformOrigin) return;
          var placementMap = {
            top: 'bottom',
            bottom: 'top',
            left: 'right',
            right: 'left'
          };

          var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];

          var origin = placementMap[placement];
          this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string' ? this.transformOrigin : ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
        },
        appendArrow: function appendArrow(element) {
          var hash = void 0;

          if (this.appended) {
            return;
          }

          this.appended = true;

          for (var item in element.attributes) {
            if (/^_v-/.test(element.attributes[item].name)) {
              hash = element.attributes[item].name;
              break;
            }
          }

          var arrow = document.createElement('div');

          if (hash) {
            arrow.setAttribute(hash, '');
          }

          arrow.setAttribute('x-arrow', '');
          arrow.className = 'popper__arrow';
          element.appendChild(arrow);
        }
      },
      beforeDestroy: function beforeDestroy() {
        this.doDestroy(true);

        if (this.popperElm && this.popperElm.parentNode === document.body) {
          this.popperElm.removeEventListener('click', stop);
          document.body.removeChild(this.popperElm);
        }
      },
      // call destroy in keep-alive mode
      deactivated: function deactivated() {
        this.$options.beforeDestroy[0].call(this);
      }
    };
  });
  unwrapExports(vuePopper);

  var autocomplete = createCommonjsModule(function (module) {
    module.exports =
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/dist/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 63);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      0:
      /***/
      function _(module, __webpack_exports__, __webpack_require__) {
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "a", function () {
          return normalizeComponent;
        });
        /* globals __VUE_SSR_CONTEXT__ */
        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.


        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier,
        /* server only */
        shadowMode
        /* vue-cli only */
        ) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // render functions

          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          } // functional template


          if (functionalTemplate) {
            options.functional = true;
          } // scopedId


          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
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


              if (injectStyles) {
                injectStyles.call(this, context);
              } // register component module identifier for async chunk inferrence


              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            }; // used by ssr in case component is cached and beforeCreate
            // never gets called


            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function () {
              injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
          }

          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook; // register for functioal component in vue file

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

          return {
            exports: scriptExports,
            options: options
          };
        }
        /***/

      },

      /***/
      10:
      /***/
      function _(module, exports) {
        module.exports = migrating;
        /***/
      },

      /***/
      11:
      /***/
      function _(module, exports) {
        module.exports = input;
        /***/
      },

      /***/
      12:
      /***/
      function _(module, exports) {
        module.exports = clickoutside;
        /***/
      },

      /***/
      13:
      /***/
      function _(module, exports) {
        module.exports = scrollbar;
        /***/
      },

      /***/
      16:
      /***/
      function _(module, exports) {
        module.exports = debounce;
        /***/
      },

      /***/
      22:
      /***/
      function _(module, exports) {
        module.exports = focus;
        /***/
      },

      /***/
      3:
      /***/
      function _(module, exports) {
        module.exports = util;
        /***/
      },

      /***/
      4:
      /***/
      function _(module, exports) {
        module.exports = emitter;
        /***/
      },

      /***/
      5:
      /***/
      function _(module, exports) {
        module.exports = vuePopper;
        /***/
      },

      /***/
      63:
      /***/
      function _(module, __webpack_exports__, __webpack_require__) {

        __webpack_require__.r(__webpack_exports__); // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/autocomplete/src/autocomplete.vue?vue&type=template&id=152f2ee6&


        var render = function render() {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c("div", {
            directives: [{
              name: "clickoutside",
              rawName: "v-clickoutside",
              value: _vm.close,
              expression: "close"
            }],
            staticClass: "el-autocomplete",
            attrs: {
              "aria-haspopup": "listbox",
              role: "combobox",
              "aria-expanded": _vm.suggestionVisible,
              "aria-owns": _vm.id
            }
          }, [_c("el-input", _vm._b({
            ref: "input",
            on: {
              input: _vm.handleChange,
              focus: _vm.handleFocus,
              blur: _vm.handleBlur,
              clear: _vm.handleClear
            },
            nativeOn: {
              keydown: [function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
                  return null;
                }

                $event.preventDefault();

                _vm.highlight(_vm.highlightedIndex - 1);
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
                  return null;
                }

                $event.preventDefault();

                _vm.highlight(_vm.highlightedIndex + 1);
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                  return null;
                }

                return _vm.handleKeyEnter($event);
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
                  return null;
                }

                return _vm.close($event);
              }]
            }
          }, "el-input", [_vm.$props, _vm.$attrs], false), [_vm.$slots.prepend ? _c("template", {
            slot: "prepend"
          }, [_vm._t("prepend")], 2) : _vm._e(), _vm.$slots.append ? _c("template", {
            slot: "append"
          }, [_vm._t("append")], 2) : _vm._e(), _vm.$slots.prefix ? _c("template", {
            slot: "prefix"
          }, [_vm._t("prefix")], 2) : _vm._e(), _vm.$slots.suffix ? _c("template", {
            slot: "suffix"
          }, [_vm._t("suffix")], 2) : _vm._e()], 2), _c("el-autocomplete-suggestions", {
            ref: "suggestions",
            class: [_vm.popperClass ? _vm.popperClass : ""],
            attrs: {
              "visible-arrow": "",
              "popper-options": _vm.popperOptions,
              "append-to-body": _vm.popperAppendToBody,
              placement: _vm.placement,
              id: _vm.id
            }
          }, _vm._l(_vm.suggestions, function (item, index) {
            return _c("li", {
              key: index,
              class: {
                highlighted: _vm.highlightedIndex === index
              },
              attrs: {
                id: _vm.id + "-item-" + index,
                role: "option",
                "aria-selected": _vm.highlightedIndex === index
              },
              on: {
                click: function click($event) {
                  _vm.select(item);
                }
              }
            }, [_vm._t("default", [_vm._v("\n        " + _vm._s(item[_vm.valueKey]) + "\n      ")], {
              item: item
            })], 2);
          }), 0)], 1);
        };

        var staticRenderFns = [];
        render._withStripped = true; // CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete.vue?vue&type=template&id=152f2ee6&
        // EXTERNAL MODULE: external "throttle-debounce/debounce"

        var debounce_ = __webpack_require__(16);

        var debounce_default =
        /*#__PURE__*/
        __webpack_require__.n(debounce_); // EXTERNAL MODULE: external "element-ui/lib/input"


        var input_ = __webpack_require__(11);

        var input_default =
        /*#__PURE__*/
        __webpack_require__.n(input_); // EXTERNAL MODULE: external "element-ui/lib/utils/clickoutside"


        var clickoutside_ = __webpack_require__(12);

        var clickoutside_default =
        /*#__PURE__*/
        __webpack_require__.n(clickoutside_); // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/autocomplete/src/autocomplete-suggestions.vue?vue&type=template&id=cd10dcf0&


        var autocomplete_suggestionsvue_type_template_id_cd10dcf0_render = function autocomplete_suggestionsvue_type_template_id_cd10dcf0_render() {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c("transition", {
            attrs: {
              name: "el-zoom-in-top"
            },
            on: {
              "after-leave": _vm.doDestroy
            }
          }, [_c("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.showPopper,
              expression: "showPopper"
            }],
            staticClass: "el-autocomplete-suggestion el-popper",
            class: {
              "is-loading": !_vm.parent.hideLoading && _vm.parent.loading
            },
            style: {
              width: _vm.dropdownWidth
            },
            attrs: {
              role: "region"
            }
          }, [_c("el-scrollbar", {
            attrs: {
              tag: "ul",
              "wrap-class": "el-autocomplete-suggestion__wrap",
              "view-class": "el-autocomplete-suggestion__list"
            }
          }, [!_vm.parent.hideLoading && _vm.parent.loading ? _c("li", [_c("i", {
            staticClass: "el-icon-loading"
          })]) : _vm._t("default")], 2)], 1)]);
        };

        var autocomplete_suggestionsvue_type_template_id_cd10dcf0_staticRenderFns = [];
        autocomplete_suggestionsvue_type_template_id_cd10dcf0_render._withStripped = true; // CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete-suggestions.vue?vue&type=template&id=cd10dcf0&
        // EXTERNAL MODULE: external "element-ui/lib/utils/vue-popper"

        var vue_popper_ = __webpack_require__(5);

        var vue_popper_default =
        /*#__PURE__*/
        __webpack_require__.n(vue_popper_); // EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"


        var emitter_ = __webpack_require__(4);

        var emitter_default =
        /*#__PURE__*/
        __webpack_require__.n(emitter_); // EXTERNAL MODULE: external "element-ui/lib/scrollbar"


        var scrollbar_ = __webpack_require__(13);

        var scrollbar_default =
        /*#__PURE__*/
        __webpack_require__.n(scrollbar_); // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/autocomplete/src/autocomplete-suggestions.vue?vue&type=script&lang=js&
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

        /* harmony default export */


        var autocomplete_suggestionsvue_type_script_lang_js_ = {
          components: {
            ElScrollbar: scrollbar_default.a
          },
          mixins: [vue_popper_default.a, emitter_default.a],
          componentName: 'ElAutocompleteSuggestions',
          data: function data() {
            return {
              parent: this.$parent,
              dropdownWidth: ''
            };
          },
          props: {
            options: {
              default: function _default() {
                return {
                  gpuAcceleration: false
                };
              }
            },
            id: String
          },
          methods: {
            select: function select(item) {
              this.dispatch('ElAutocomplete', 'item-click', item);
            }
          },
          updated: function updated() {
            var _this = this;

            this.$nextTick(function (_) {
              _this.popperJS && _this.updatePopper();
            });
          },
          mounted: function mounted() {
            this.$parent.popperElm = this.popperElm = this.$el;
            this.referenceElm = this.$parent.$refs.input.$refs.input;
            this.referenceList = this.$el.querySelector('.el-autocomplete-suggestion__list');
            this.referenceList.setAttribute('role', 'listbox');
            this.referenceList.setAttribute('id', this.id);
          },
          created: function created() {
            var _this2 = this;

            this.$on('visible', function (val, inputWidth) {
              _this2.dropdownWidth = inputWidth + 'px';
              _this2.showPopper = val;
            });
          }
        }; // CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete-suggestions.vue?vue&type=script&lang=js&

        /* harmony default export */

        var src_autocomplete_suggestionsvue_type_script_lang_js_ = autocomplete_suggestionsvue_type_script_lang_js_; // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js

        var componentNormalizer = __webpack_require__(0); // CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete-suggestions.vue

        /* normalize component */


        var component = Object(componentNormalizer["a"
        /* default */
        ])(src_autocomplete_suggestionsvue_type_script_lang_js_, autocomplete_suggestionsvue_type_template_id_cd10dcf0_render, autocomplete_suggestionsvue_type_template_id_cd10dcf0_staticRenderFns, false, null, null, null);

        component.options.__file = "packages/autocomplete/src/autocomplete-suggestions.vue";
        /* harmony default export */

        var autocomplete_suggestions = component.exports; // EXTERNAL MODULE: external "element-ui/lib/mixins/migrating"

        var migrating_ = __webpack_require__(10);

        var migrating_default =
        /*#__PURE__*/
        __webpack_require__.n(migrating_); // EXTERNAL MODULE: external "element-ui/lib/utils/util"


        var util_ = __webpack_require__(3); // EXTERNAL MODULE: external "element-ui/lib/mixins/focus"


        var focus_ = __webpack_require__(22);

        var focus_default =
        /*#__PURE__*/
        __webpack_require__.n(focus_); // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/autocomplete/src/autocomplete.vue?vue&type=script&lang=js&
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

        /* harmony default export */


        var autocompletevue_type_script_lang_js_ = {
          name: 'ElAutocomplete',
          mixins: [emitter_default.a, focus_default()('input'), migrating_default.a],
          inheritAttrs: false,
          componentName: 'ElAutocomplete',
          components: {
            ElInput: input_default.a,
            ElAutocompleteSuggestions: autocomplete_suggestions
          },
          directives: {
            Clickoutside: clickoutside_default.a
          },
          props: {
            valueKey: {
              type: String,
              default: 'value'
            },
            popperClass: String,
            popperOptions: Object,
            placeholder: String,
            clearable: {
              type: Boolean,
              default: false
            },
            disabled: Boolean,
            name: String,
            size: String,
            value: String,
            maxlength: Number,
            minlength: Number,
            autofocus: Boolean,
            fetchSuggestions: Function,
            triggerOnFocus: {
              type: Boolean,
              default: true
            },
            customItem: String,
            selectWhenUnmatched: {
              type: Boolean,
              default: false
            },
            prefixIcon: String,
            suffixIcon: String,
            label: String,
            debounce: {
              type: Number,
              default: 300
            },
            placement: {
              type: String,
              default: 'bottom-start'
            },
            hideLoading: Boolean,
            popperAppendToBody: {
              type: Boolean,
              default: true
            },
            highlightFirstItem: {
              type: Boolean,
              default: false
            }
          },
          data: function data() {
            return {
              activated: false,
              suggestions: [],
              loading: false,
              highlightedIndex: -1,
              suggestionDisabled: false
            };
          },
          computed: {
            suggestionVisible: function suggestionVisible() {
              var suggestions = this.suggestions;
              var isValidData = Array.isArray(suggestions) && suggestions.length > 0;
              return (isValidData || this.loading) && this.activated;
            },
            id: function id() {
              return 'el-autocomplete-' + Object(util_["generateId"])();
            }
          },
          watch: {
            suggestionVisible: function suggestionVisible(val) {
              var $input = this.getInput();

              if ($input) {
                this.broadcast('ElAutocompleteSuggestions', 'visible', [val, $input.offsetWidth]);
              }
            }
          },
          methods: {
            getMigratingConfig: function getMigratingConfig() {
              return {
                props: {
                  'custom-item': 'custom-item is removed, use scoped slot instead.',
                  'props': 'props is removed, use value-key instead.'
                }
              };
            },
            getData: function getData(queryString) {
              var _this = this;

              if (this.suggestionDisabled) {
                return;
              }

              this.loading = true;
              this.fetchSuggestions(queryString, function (suggestions) {
                _this.loading = false;

                if (_this.suggestionDisabled) {
                  return;
                }

                if (Array.isArray(suggestions)) {
                  _this.suggestions = suggestions;
                  _this.highlightedIndex = _this.highlightFirstItem ? 0 : -1;
                } else {
                  console.error('[Element Error][Autocomplete]autocomplete suggestions must be an array');
                }
              });
            },
            handleChange: function handleChange(value) {
              this.$emit('input', value);
              this.suggestionDisabled = false;

              if (!this.triggerOnFocus && !value) {
                this.suggestionDisabled = true;
                this.suggestions = [];
                return;
              }

              this.debouncedGetData(value);
            },
            handleFocus: function handleFocus(event) {
              this.activated = true;
              this.$emit('focus', event);

              if (this.triggerOnFocus) {
                this.debouncedGetData(this.value);
              }
            },
            handleBlur: function handleBlur(event) {
              this.$emit('blur', event);
            },
            handleClear: function handleClear() {
              this.activated = false;
              this.$emit('clear');
            },
            close: function close(e) {
              this.activated = false;
            },
            handleKeyEnter: function handleKeyEnter(e) {
              var _this2 = this;

              if (this.suggestionVisible && this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
                e.preventDefault();
                this.select(this.suggestions[this.highlightedIndex]);
              } else if (this.selectWhenUnmatched) {
                this.$emit('select', {
                  value: this.value
                });
                this.$nextTick(function (_) {
                  _this2.suggestions = [];
                  _this2.highlightedIndex = -1;
                });
              }
            },
            select: function select(item) {
              var _this3 = this;

              this.$emit('input', item[this.valueKey]);
              this.$emit('select', item);
              this.$nextTick(function (_) {
                _this3.suggestions = [];
                _this3.highlightedIndex = -1;
              });
            },
            highlight: function highlight(index) {
              if (!this.suggestionVisible || this.loading) {
                return;
              }

              if (index < 0) {
                this.highlightedIndex = -1;
                return;
              }

              if (index >= this.suggestions.length) {
                index = this.suggestions.length - 1;
              }

              var suggestion = this.$refs.suggestions.$el.querySelector('.el-autocomplete-suggestion__wrap');
              var suggestionList = suggestion.querySelectorAll('.el-autocomplete-suggestion__list li');
              var highlightItem = suggestionList[index];
              var scrollTop = suggestion.scrollTop;
              var offsetTop = highlightItem.offsetTop;

              if (offsetTop + highlightItem.scrollHeight > scrollTop + suggestion.clientHeight) {
                suggestion.scrollTop += highlightItem.scrollHeight;
              }

              if (offsetTop < scrollTop) {
                suggestion.scrollTop -= highlightItem.scrollHeight;
              }

              this.highlightedIndex = index;
              var $input = this.getInput();
              $input.setAttribute('aria-activedescendant', this.id + '-item-' + this.highlightedIndex);
            },
            getInput: function getInput() {
              return this.$refs.input.getInput();
            }
          },
          mounted: function mounted() {
            var _this4 = this;

            this.debouncedGetData = debounce_default()(this.debounce, this.getData);
            this.$on('item-click', function (item) {
              _this4.select(item);
            });
            var $input = this.getInput();
            $input.setAttribute('role', 'textbox');
            $input.setAttribute('aria-autocomplete', 'list');
            $input.setAttribute('aria-controls', 'id');
            $input.setAttribute('aria-activedescendant', this.id + '-item-' + this.highlightedIndex);
          },
          beforeDestroy: function beforeDestroy() {
            this.$refs.suggestions.$destroy();
          }
        }; // CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete.vue?vue&type=script&lang=js&

        /* harmony default export */

        var src_autocompletevue_type_script_lang_js_ = autocompletevue_type_script_lang_js_; // CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete.vue

        /* normalize component */

        var autocomplete_component = Object(componentNormalizer["a"
        /* default */
        ])(src_autocompletevue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);

        autocomplete_component.options.__file = "packages/autocomplete/src/autocomplete.vue";
        /* harmony default export */

        var autocomplete = autocomplete_component.exports; // CONCATENATED MODULE: ./packages/autocomplete/index.js

        /* istanbul ignore next */

        autocomplete.install = function (Vue) {
          Vue.component(autocomplete.name, autocomplete);
        };
        /* harmony default export */


        var packages_autocomplete = __webpack_exports__["default"] = autocomplete;
        /***/
      }
      /******/

    });
  });
  var Autocomplete = unwrapExports(autocomplete);

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".el-textarea{position:relative;display:inline-block;width:100%;vertical-align:bottom;font-size:14px}.el-textarea__inner{display:block;resize:vertical;padding:5px 15px;line-height:1.5;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;font-size:inherit;color:#606266;background-color:#FFF;background-image:none;border:1px solid #DCDFE6;border-radius:4px;-webkit-transition:border-color .2s cubic-bezier(.645,.045,.355,1);transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.el-textarea__inner::-webkit-input-placeholder{color:#C0C4CC}.el-textarea__inner:-ms-input-placeholder{color:#C0C4CC}.el-textarea__inner::-ms-input-placeholder{color:#C0C4CC}.el-textarea__inner::-moz-placeholder{color:#C0C4CC}.el-textarea__inner::placeholder{color:#C0C4CC}.el-textarea__inner:hover{border-color:#C0C4CC}.el-textarea__inner:focus{outline:0;border-color:#409EFF}.el-textarea .el-input__count{color:#909399;background:#FFF;position:absolute;font-size:12px;bottom:5px;right:10px}.el-textarea.is-disabled .el-textarea__inner{background-color:#F5F7FA;border-color:#E4E7ED;color:#C0C4CC;cursor:not-allowed}.el-textarea.is-disabled .el-textarea__inner::-webkit-input-placeholder{color:#C0C4CC}.el-textarea.is-disabled .el-textarea__inner:-ms-input-placeholder{color:#C0C4CC}.el-textarea.is-disabled .el-textarea__inner::-ms-input-placeholder{color:#C0C4CC}.el-textarea.is-disabled .el-textarea__inner::-moz-placeholder{color:#C0C4CC}.el-textarea.is-disabled .el-textarea__inner::placeholder{color:#C0C4CC}.el-textarea.is-exceed .el-textarea__inner{border-color:#F56C6C}.el-textarea.is-exceed .el-input__count{color:#F56C6C}.el-input{position:relative;font-size:14px;display:inline-block;width:100%}.el-input::-webkit-scrollbar{z-index:11;width:6px}.el-input::-webkit-scrollbar:horizontal{height:6px}.el-input::-webkit-scrollbar-thumb{border-radius:5px;width:6px;background:#b4bccc}.el-input::-webkit-scrollbar-corner{background:#fff}.el-input::-webkit-scrollbar-track{background:#fff}.el-input::-webkit-scrollbar-track-piece{background:#fff;width:6px}.el-input .el-input__clear{color:#C0C4CC;font-size:14px;cursor:pointer;-webkit-transition:color .2s cubic-bezier(.645,.045,.355,1);transition:color .2s cubic-bezier(.645,.045,.355,1)}.el-input .el-input__clear:hover{color:#909399}.el-input .el-input__count{height:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#909399;font-size:12px}.el-input .el-input__count .el-input__count-inner{background:#FFF;line-height:initial;display:inline-block;padding:0 5px}.el-input__inner{-webkit-appearance:none;background-color:#FFF;background-image:none;border-radius:4px;border:1px solid #DCDFE6;-webkit-box-sizing:border-box;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:40px;line-height:40px;outline:0;padding:0 15px;-webkit-transition:border-color .2s cubic-bezier(.645,.045,.355,1);transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%}.el-input__prefix,.el-input__suffix{position:absolute;top:0;-webkit-transition:all .3s;height:100%;color:#C0C4CC;text-align:center}.el-input__inner::-webkit-input-placeholder{color:#C0C4CC}.el-input__inner:-ms-input-placeholder{color:#C0C4CC}.el-input__inner::-ms-input-placeholder{color:#C0C4CC}.el-input__inner::-moz-placeholder{color:#C0C4CC}.el-input__inner::placeholder{color:#C0C4CC}.el-input__inner:hover{border-color:#C0C4CC}.el-input.is-active .el-input__inner,.el-input__inner:focus{border-color:#409EFF;outline:0}.el-input__suffix{right:5px;-webkit-transition:all .3s;transition:all .3s;pointer-events:none}.el-input__suffix-inner{pointer-events:all}.el-input__prefix{left:5px;-webkit-transition:all .3s;transition:all .3s}.el-input__icon{height:100%;width:25px;text-align:center;-webkit-transition:all .3s;transition:all .3s;line-height:40px}.el-input__icon:after{content:'';height:100%;width:0;display:inline-block;vertical-align:middle}.el-input__validateIcon{pointer-events:none}.el-input.is-disabled .el-input__inner{background-color:#F5F7FA;border-color:#E4E7ED;color:#C0C4CC;cursor:not-allowed}.el-input.is-disabled .el-input__inner::-webkit-input-placeholder{color:#C0C4CC}.el-input.is-disabled .el-input__inner:-ms-input-placeholder{color:#C0C4CC}.el-input.is-disabled .el-input__inner::-ms-input-placeholder{color:#C0C4CC}.el-input.is-disabled .el-input__inner::-moz-placeholder{color:#C0C4CC}.el-input.is-disabled .el-input__inner::placeholder{color:#C0C4CC}.el-input.is-disabled .el-input__icon{cursor:not-allowed}.el-input.is-exceed .el-input__inner{border-color:#F56C6C}.el-input.is-exceed .el-input__suffix .el-input__count{color:#F56C6C}.el-input--suffix .el-input__inner{padding-right:30px}.el-input--prefix .el-input__inner{padding-left:30px}.el-input--medium{font-size:14px}.el-input--medium .el-input__inner{height:36px;line-height:36px}.el-input--medium .el-input__icon{line-height:36px}.el-input--small{font-size:13px}.el-input--small .el-input__inner{height:32px;line-height:32px}.el-input--small .el-input__icon{line-height:32px}.el-input--mini{font-size:12px}.el-input--mini .el-input__inner{height:28px;line-height:28px}.el-input--mini .el-input__icon{line-height:28px}.el-input-group{line-height:normal;display:inline-table;width:100%;border-collapse:separate;border-spacing:0}.el-input-group>.el-input__inner{vertical-align:middle;display:table-cell}.el-input-group__append,.el-input-group__prepend{background-color:#F5F7FA;color:#909399;vertical-align:middle;display:table-cell;position:relative;border:1px solid #DCDFE6;border-radius:4px;padding:0 20px;width:1px;white-space:nowrap}.el-input-group--prepend .el-input__inner,.el-input-group__append{border-top-left-radius:0;border-bottom-left-radius:0}.el-input-group--append .el-input__inner,.el-input-group__prepend{border-top-right-radius:0;border-bottom-right-radius:0}.el-input-group__append:focus,.el-input-group__prepend:focus{outline:0}.el-input-group__append .el-button,.el-input-group__append .el-select,.el-input-group__prepend .el-button,.el-input-group__prepend .el-select{display:inline-block;margin:-10px -20px}.el-input-group__append button.el-button,.el-input-group__append div.el-select .el-input__inner,.el-input-group__append div.el-select:hover .el-input__inner,.el-input-group__prepend button.el-button,.el-input-group__prepend div.el-select .el-input__inner,.el-input-group__prepend div.el-select:hover .el-input__inner{border-color:transparent;background-color:transparent;color:inherit;border-top:0;border-bottom:0}.el-input-group__append .el-button,.el-input-group__append .el-input,.el-input-group__prepend .el-button,.el-input-group__prepend .el-input{font-size:inherit}.el-input-group__prepend{border-right:0}.el-input-group__append{border-left:0}.el-input-group--append .el-select .el-input.is-focus .el-input__inner,.el-input-group--prepend .el-select .el-input.is-focus .el-input__inner{border-color:transparent}.el-input__inner::-ms-clear{display:none;width:0;height:0}.el-scrollbar{overflow:hidden;position:relative}.el-scrollbar:active>.el-scrollbar__bar,.el-scrollbar:focus>.el-scrollbar__bar,.el-scrollbar:hover>.el-scrollbar__bar{opacity:1;-webkit-transition:opacity 340ms ease-out;transition:opacity 340ms ease-out}.el-scrollbar__wrap{overflow:scroll;height:100%}.el-scrollbar__wrap--hidden-default::-webkit-scrollbar{width:0;height:0}.el-scrollbar__thumb{position:relative;display:block;width:0;height:0;cursor:pointer;border-radius:inherit;background-color:rgba(144,147,153,.3);-webkit-transition:.3s background-color;transition:.3s background-color}.el-scrollbar__thumb:hover{background-color:rgba(144,147,153,.5)}.el-scrollbar__bar{position:absolute;right:2px;bottom:2px;z-index:1;border-radius:4px;opacity:0;-webkit-transition:opacity 120ms ease-out;transition:opacity 120ms ease-out}.el-scrollbar__bar.is-vertical{width:6px;top:2px}.el-scrollbar__bar.is-vertical>div{width:100%}.el-scrollbar__bar.is-horizontal{height:6px;left:2px}.el-scrollbar__bar.is-horizontal>div{height:100%}.el-popper .popper__arrow,.el-popper .popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.el-popper .popper__arrow{border-width:6px;-webkit-filter:drop-shadow(0 2px 12px rgba(0, 0, 0, .03));filter:drop-shadow(0 2px 12px rgba(0, 0, 0, .03))}.el-popper .popper__arrow::after{content:\" \";border-width:6px}.el-popper[x-placement^=top]{margin-bottom:12px}.el-popper[x-placement^=top] .popper__arrow{bottom:-6px;left:50%;margin-right:3px;border-top-color:#EBEEF5;border-bottom-width:0}.el-popper[x-placement^=top] .popper__arrow::after{bottom:1px;margin-left:-6px;border-top-color:#FFF;border-bottom-width:0}.el-popper[x-placement^=bottom]{margin-top:12px}.el-popper[x-placement^=bottom] .popper__arrow{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:#EBEEF5}.el-popper[x-placement^=bottom] .popper__arrow::after{top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#FFF}.el-popper[x-placement^=right]{margin-left:12px}.el-popper[x-placement^=right] .popper__arrow{top:50%;left:-6px;margin-bottom:3px;border-right-color:#EBEEF5;border-left-width:0}.el-popper[x-placement^=right] .popper__arrow::after{bottom:-6px;left:1px;border-right-color:#FFF;border-left-width:0}.el-popper[x-placement^=left]{margin-right:12px}.el-popper[x-placement^=left] .popper__arrow{top:50%;right:-6px;margin-bottom:3px;border-right-width:0;border-left-color:#EBEEF5}.el-popper[x-placement^=left] .popper__arrow::after{right:1px;bottom:-6px;margin-left:-6px;border-right-width:0;border-left-color:#FFF}.el-autocomplete{position:relative;display:inline-block}.el-autocomplete-suggestion{margin:5px 0;-webkit-box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-shadow:0 2px 12px 0 rgba(0,0,0,.1);border-radius:4px;border:1px solid #E4E7ED;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#FFF}.el-autocomplete-suggestion__wrap{max-height:280px;padding:10px 0;-webkit-box-sizing:border-box;box-sizing:border-box}.el-autocomplete-suggestion__list{margin:0;padding:0}.el-autocomplete-suggestion li{padding:0 20px;margin:0;line-height:34px;cursor:pointer;color:#606266;font-size:14px;list-style:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.el-autocomplete-suggestion li.highlighted,.el-autocomplete-suggestion li:hover{background-color:#F5F7FA}.el-autocomplete-suggestion li.divider{margin-top:6px;border-top:1px solid #000}.el-autocomplete-suggestion li.divider:last-child{margin-bottom:-6px}.el-autocomplete-suggestion.is-loading li{text-align:center;height:100px;line-height:100px;font-size:20px;color:#999}.el-autocomplete-suggestion.is-loading li::after{display:inline-block;content:\"\";height:100%;vertical-align:middle}.el-autocomplete-suggestion.is-loading li:hover{background-color:#FFF}.el-autocomplete-suggestion.is-loading .el-icon-loading{vertical-align:middle}";
  styleInject(css);

  //
  /**
   * @vue-prop {Array} [items=[]] 輸入可選(建議)項目陣列，預設[]
   * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null
   * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
   */

  var script$2 = {
    components: {
      'el-autocomplete': Autocomplete
    },
    props: {
      items: {
        type: Array
      },
      value: {
        type: [Object, String, Number]
      },
      editable: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        items_trans: [],
        value_trans: {}
      };
    },
    mounted: function mounted() {},
    computed: {
      changeParam: function changeParam() {
        //console.log('computed changeParam')
        var vo = this; //items_trans

        vo.items_trans = map_1(vo.items, function (v) {
          var value;

          if (v.text) {
            value = v.text;
          } else {
            value = cstr(v);
          }

          return {
            value: value,
            data: v
          };
        }); //value_trans

        if (vo.value.text) {
          vo.value_trans = vo.value.text;
        } else {
          vo.value_trans = cstr(vo.value);
        }

        return '';
      }
    },
    methods: {
      ch_search: function ch_search(search, cb) {
        //console.log('methods ch_search', search)
        var vo = this; //rs

        var rs = vo.items_trans.filter(function (v) {
          return v.value.indexOf(search) >= 0;
        }); //callback

        cb(rs);
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
      "div",
      { attrs: { changeParam: _vm.changeParam } },
      [
        _c("el-autocomplete", {
          staticStyle: {
            margin: "0px",
            padding: "0px",
            width: "100%",
            height: "28px"
          },
          attrs: {
            placeholder: "",
            readonly: !_vm.editable,
            value: _vm.value_trans,
            "fetch-suggestions": _vm.ch_search
          },
          on: {
            input: function(v) {
              _vm.$emit("input", v);
            },
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
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-67db078a_0", { source: "\n[data-v-67db078a] input {\r\n    font-size: 1rem;\r\n    border: 0px;\r\n    outline: none;\r\n    padding: 0px;\r\n    color: inherit;\n}\n[data-v-67db078a] .el-input__inner {\r\n    background-color: transparent !important;\r\n    height: 28px;\r\n    line-height: 28px; /* for ie11 */\n}\r\n", map: {"version":3,"sources":["D:\\開源-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WTextSuggestCore.vue"],"names":[],"mappings":";AA4GA;IACA,eAAA;IACA,WAAA;IACA,aAAA;IACA,YAAA;IACA,cAAA;AACA;AACA;IACA,wCAAA;IACA,YAAA;IACA,iBAAA,EAAA,aAAA;AACA","file":"WTextSuggestCore.vue","sourcesContent":["<template>\r\n    <div :changeParam=\"changeParam\">\r\n\r\n        <el-autocomplete\r\n            style=\"margin:0px; padding:0px; width:100%; height:28px;\"\r\n            placeholder=\"\"\r\n            :readonly=\"!editable\"\r\n            :value=\"value_trans\"\r\n            :fetch-suggestions=\"ch_search\"\r\n            @input=\"function(v){$emit('input', v)}\"\r\n            @focus=\"$emit('update:focused', true)\"\r\n            @blur=\"$emit('update:focused', false)\"\r\n        ></el-autocomplete>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport map from 'lodash/map'\r\nimport cstr from 'wsemi/src/cstr.mjs'\r\nimport Autocomplete from 'element-ui/lib/autocomplete'\r\nimport 'element-ui/lib/theme-chalk/autocomplete.css'\r\n\r\n/**\r\n * @vue-prop {Array} [items=[]] 輸入可選(建議)項目陣列，預設[]\r\n * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n */\r\nexport default {\r\n    components: {\r\n        'el-autocomplete': Autocomplete,\r\n    },\r\n    props: {\r\n        items: {\r\n            type: Array,\r\n        },\r\n        value: {\r\n            type: [Object, String, Number],\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            items_trans: [],\r\n            value_trans: {},\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //items_trans\r\n            vo.items_trans = map(vo.items, function(v) {\r\n                let value\r\n                if (v.text) {\r\n                    value = v.text\r\n                }\r\n                else {\r\n                    value = cstr(v)\r\n                }\r\n                return {\r\n                    value: value,\r\n                    data: v,\r\n                }\r\n            })\r\n\r\n            //value_trans\r\n            if (vo.value.text) {\r\n                vo.value_trans = vo.value.text\r\n            }\r\n            else {\r\n                vo.value_trans = cstr(vo.value)\r\n            }\r\n\r\n            return ''\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        ch_search: function (search, cb) {\r\n            //console.log('methods ch_search', search)\r\n\r\n            let vo = this\r\n\r\n            //rs\r\n            let rs = vo.items_trans.filter(function (v) {\r\n                return v.value.indexOf(search) >= 0\r\n            })\r\n\r\n            //callback\r\n            cb(rs)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n::v-deep input {\r\n    font-size: 1rem;\r\n    border: 0px;\r\n    outline: none;\r\n    padding: 0px;\r\n    color: inherit;\r\n}\r\n::v-deep .el-input__inner {\r\n    background-color: transparent !important;\r\n    height: 28px;\r\n    line-height: 28px; /* for ie11 */\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$2 = "data-v-67db078a";
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    

    
    var WTextSuggestCore = normalizeComponent_1(
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
   * @vue-prop {Number} [borderRadius=30] 輸入框圓角寬度，單位為px，預設30
   * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
   * @vue-prop {Array} [items=[]] 輸入可選(建議)項目陣列，預設[]
   * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null
   * @vue-prop {String} [icon=''] 輸入框外左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
   * @vue-prop {String} [iconColor='deep-orange lighten-2'] 輸入框外左側圖標顏色字串，預設'deep-orange lighten-2'
   * @vue-prop {String} [iconColorFocus='deep-orange lighten-1'] 輸入框外左側圖標Focus顏色字串，預設'deep-orange lighten-1'
   * @vue-prop {String} [iconTooltip=''] 輸入框外左側圖標提示文字字串，預設''
   * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
   * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'
   * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
   * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'
   * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
   * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
   * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
   */

  var script$3 = {
    components: {
      WShellEllipse: WShellEllipse,
      WTextSuggestCore: WTextSuggestCore
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
      items: {
        type: Array
      },
      value: {
        type: [Object, String, Number]
      },
      icon: {
        type: String,
        default: ''
      },
      iconColor: {
        type: String,
        default: 'deep-orange lighten-2'
      },
      iconColorFocus: {
        type: String,
        default: 'deep-orange lighten-1'
      },
      iconTooltip: {
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
              leftIcon: _vm.icon,
              leftIconColor: _vm.iconColor,
              leftIconColorFocus: _vm.iconColorFocus,
              leftIconTooltip: _vm.iconTooltip,
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
              }
            }
          },
          [
            _c("w-text-suggest-core", {
              attrs: {
                items: _vm.items,
                value: _vm.value,
                editable: _vm.editable
              },
              on: {
                "update:focused": _vm.changeFocused,
                input: function(v) {
                  _vm.$emit("input", v);
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
      inject("data-v-32ab38ae_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"WTextSuggest.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$3 = "data-v-32ab38ae";
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject SSR */
    

    
    var WTextSuggest = normalizeComponent_1(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      browser,
      undefined
    );

  return WTextSuggest;

}));
//# sourceMappingURL=w-text-suggest.umd.js.map
