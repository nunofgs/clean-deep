# clean-deep

Removes empty _objects_, empty _strings_, _null_ and _undefined_ values from objects. Does not alter the original object.

## Status

  [![npm version][npm-image]][npm-url]
  [![npm downloads][downloads-image]][downloads-url]
  [![build status][travis-image]][travis-url]

## Installation

  Install the package via `npm`:

```
$ npm install clean-deep
```

## Usage

#### Arguments

  1. `object` *(Object)*: The source object.
  2. `[options]` *(Object)*: An optional object with the following options:

| Option            | Default value | Description                         |
|-------------------|---------------|-------------------------------------|
| _emptyObjects_    | _true_        | Remove empty objects, ie: `{}`      |
| _emptyStrings_    | _true_        | Remove empty strings, ie: `''`      |
| _nullValues_      | _true_        | Remove null values, ie: `null`      |
| _undefinedValues_ | _true_        | Remove null values, ie: `undefined` |

#### Returns

  *(Object)*: Returns the cleansed object.

#### Example

```js
var cleanDeep = require('clean-deep');

var object = { foo: '', bar: {}, biz: 'baz', qux: { baz: 'boz', txi: '' } };

cleanDeep(object);
// => { biz: 'baz', qux: { baz: 'boz' } }
```

## Tests

```js
$ npm test
```

## License

MIT

[downloads-image]: https://img.shields.io/npm/dm/clean-deep.svg
[downloads-url]: https://npmjs.org/package/clean-deep
[npm-image]: https://img.shields.io/npm/v/clean-deep.svg
[npm-url]: https://npmjs.org/package/clean-deep
[travis-image]: https://travis-ci.org/seegno/clean-deep.svg
[travis-url]: https://travis-ci.org/seegno/clean-deep
