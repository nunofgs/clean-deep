
/**
 * Module dependencies.
 */

import * as _ from 'lodash';

/**
 * Export `cleanDeep` function.
 */

export default function cleanDeep(object, options) {
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
