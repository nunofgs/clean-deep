
/**
 * Module dependencies.
 */

const has = require('lodash.has');
const isPlainObject = require('lodash.isplainobject');
const transform = require('lodash.transform');

/**
 * Checks if an object is empty.
 * This is an alternative version if `_.isEmpty` that works with symbols as keys.
 * See: https://github.com/lodash/lodash/issues/3492 & https://github.com/lodash/lodash/issues/4167
 */

function isObjectEmpty(object) {
  for (const name in object) {
    if (has(object, name)) {
      return false
    }
  }

  return true
}

/**
 * Export `cleanDeep` function.
 */

module.exports = function cleanDeep(object, {
  cleanKeys = [],
  cleanValues = [],
  emptyArrays = true,
  emptyObjects = true,
  emptyStrings = true,
  NaNValues = false,
  nullValues = true,
  undefinedValues = true
} = {}) {
  return transform(object, (result, value, key) => {
    // Exclude specific keys.
    if (cleanKeys.includes(key)) {
      return;
    }

    // Recurse into arrays and objects.
    if (Array.isArray(value) || isPlainObject(value)) {
      value = cleanDeep(value, { NaNValues, cleanKeys, cleanValues, emptyArrays, emptyObjects, emptyStrings, nullValues, undefinedValues });
    }

    // Exclude specific values.
    if (cleanValues.includes(value)) {
      return;
    }

    // Exclude empty objects.
    if (emptyObjects && isPlainObject(value) && isObjectEmpty(value)) {
      return;
    }

    // Exclude empty arrays.
    if (emptyArrays && Array.isArray(value) && !value.length) {
      return;
    }

    // Exclude empty strings.
    if (emptyStrings && value === '') {
      return;
    }

    // Exclude NaN values.
    if (NaNValues && Number.isNaN(value)) {
      return;
    }

    // Exclude null values.
    if (nullValues && value === null) {
      return;
    }

    // Exclude undefined values.
    if (undefinedValues && value === undefined) {
      return;
    }

    // Append when recursing arrays.
    if (Array.isArray(result)) {
      return result.push(value);
    }

    result[key] = value;
  });
};
