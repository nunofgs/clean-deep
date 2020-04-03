# clean-deep

Removes empty _objects_, _arrays_, empty _strings_, _NaN_, _null_ and _undefined_ values from objects. Does not alter the original object.

As of version 3.0.0, _clean-deep_ traverses arrays as well as objects.

## Status

[![npm version][npm-image]][npm-url] [![build status][workflow-image]][workflow-url]

## Installation

Install the package via `npm`:

```
$ npm install clean-deep --save
```

## Usage

### Arguments

1. `object` _(Object)_: The source object.
2. `[options]` _(Object)_: An optional object with the following options:

Option            | Default value | Description
----------------- | ------------- | -----------------------------------
_cleanKeys_       | _[]_          | Remove specific keys, ie: `['foo', 'bar', ' ']`
_cleanValues_     | _[]_          | Remove specific values, ie: `['foo', 'bar', ' ']`
_emptyArrays_     | _true_        | Remove empty arrays, ie: `[]`
_emptyObjects_    | _true_        | Remove empty objects, ie: `{}`
_emptyStrings_    | _true_        | Remove empty strings, ie: `''`
_NaNValues_       | _false_       | Remove NaN values, ie: `NaN`
_nullValues_      | _true_        | Remove null values, ie: `null`
_undefinedValues_ | _true_        | Remove undefined values, ie: `undefined`

_(Object)_: Returns the cleansed object.

### Example

```javascript
const cleanDeep = require('clean-deep');
const object = {
  bar: {},
  baz: null,
  biz: 'baz',
  foo: '',
  net: [],
  nit: undefined,
  qux: {
    baz: 'boz',
    txi: ''
  }
};

cleanDeep(object);
// => { biz: 'baz', qux: { baz: 'boz' } }
```

## Tests

```javascript
$ npm test
```

## Release

```sh
npm version [<newversion> | major | minor | patch] -m "Release %s"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/clean-deep.svg?style=flat-square
[npm-url]: https://npmjs.org/package/clean-deep
[workflow-image]: https://github.com/nunofgs/clean-deep/workflows/Node%20CI/badge.svg
[workflow-url]: https://github.com/nunofgs/clean-deep/actions
