
/**
 * Module dependencies.
 */

const cleanDeep = require ('src/index');

/**
 * Test `cleanDeep`.
 */

describe('cleanDeep()', () => {
  it('should pick defined values from the object', () => {
    const object = {
      bar: {},
      biz: [],
      foo: {
        bar: undefined,
        baz: true,
        biz: false,
        buz: null,
        net: '',
        qux: 100
      }
    };

    expect(cleanDeep(object)).toEqual({
      foo: {
        baz: true,
        biz: false,
        qux: 100
      }
    });
  });

  it('should clean arrays', () => {
    const object = {
      foo: [{
        bar: undefined,
        baz: '',
        biz: 0
      }]
    };

    expect(cleanDeep(object)).toEqual({
      foo: [{
        biz: 0
      }]
    });
  });

  it('should include non plain objects', () => {
    const object = {
      foo: {
        bar: new Date(0),
        biz: undefined
      }
    };

    expect(cleanDeep(object)).toEqual({
      foo: {
        bar: new Date(0)
      }
    });
  });

  it('should support custom values', () => {
    const object = {
      biz: {
        baz: 123
      },
      foo: {
        bar: 'abc'
      }
    };

    expect(cleanDeep(object, { cleanValues: ['abc'] })).toEqual({
      biz: {
        baz: 123
      }
    });
  });

  it('should include empty objects if `emptyObjects` is `false`', () => {
    const object = {
      biz: {
        baz: 123
      },
      foo: {
        bar: {}
      }
    };

    expect(cleanDeep(object, { emptyObjects: false })).toEqual({
      biz: {
        baz: 123
      },
      foo: {
        bar: {}
      }
    });
  });

  it('should include empty arrays if `emptyArrays` is `false`', () => {
    const object = {
      biz: {
        bar: [],
        baz: 123
      },
      foo: []
    };

    expect(cleanDeep(object, { emptyArrays: false })).toEqual({
      biz: {
        bar: [],
        baz: 123
      },
      foo: []
    });
  });

  it('should include empty strings if `emptyStrings` is `false`', () => {
    const object = {
      foo: {
        bar: '',
        biz: 123
      }
    };

    expect(cleanDeep(object, { emptyStrings: false })).toEqual({
      foo: {
        bar: '',
        biz: 123
      }
    });
  });

  it('should include null values if `nullValues` is `false`', () => {
    const object = {
      foo: {
        bar: null,
        biz: 123
      }
    };

    expect(cleanDeep(object, { nullValues: false })).toEqual({
      foo: {
        bar: null,
        biz: 123
      }
    });
  });

  it('should include undefined values if `undefinedValues` is `false`', () => {
    const object = {
      foo: {
        bar: undefined,
        biz: 123,
        qux: [
          undefined,
          {},
          true
        ]
      }
    };

    expect(cleanDeep(object, { undefinedValues: false })).toEqual({
      foo: {
        bar: undefined,
        biz: 123,
        qux: [
          undefined,
          true
        ]
      }
    });
  });

  it('should remove specified keys if `cleanKeys` is passed', () => {
    const object = {
      foo: {
        alsoMe: {
          biz: 123,
        },
        bar: undefined,
        biz: 123,
        qux: [
          undefined,
          {},
          true
        ],
        removeMe: true,
      },
      removeMe: true,
    };

    expect(cleanDeep(object, { cleanKeys: ['removeMe', 'alsoMe'] })).toEqual({
      foo: {
        biz: 123,
        qux: [true]
      }
    });
  });
});
