'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanDeep;

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Export `cleanDeep` function.
 */

function cleanDeep(object, options) {
  options = _.assign({
    emptyObjects: true,
    emptyStrings: true,
    nullValues: true,
    undefinedValues: true
  }, options);

  return _.transform(object, (result, value, key) => {
    // Recurse into objects.
    if (_.isPlainObject(value)) {
      value = cleanDeep(value, options);
    }

    // Exclude empty objects.
    if (options.emptyObjects && _.isPlainObject(value) && _.isEmpty(value)) {
      return;
    }

    // Exclude empty strings.
    if (options.emptyStrings && value === '') {
      return;
    }

    // Exclude null values.
    if (options.nullValues && _.isNull(value)) {
      return;
    }

    // Exclude undefined values.
    if (options.undefinedValues && _.isUndefined(value)) {
      return;
    }

    result[key] = value;
  });
}
/**
 * Module dependencies.
 */

module.exports = Object.assign(exports.default || {}, exports);