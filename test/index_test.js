
/**
 * Module dependencies.
 */

import cleanDeep from '../src/index';

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
        qux: 100
      }
    };

    cleanDeep(object).should.eql({
      foo: {
        baz: true,
        biz: false,
        qux: 100
      }
    });
  });

  it('should include non plain objects', () => {
    const object = {
      foo: {
        bar: new Date(0),
        biz: undefined
      }
    };

    cleanDeep(object).should.eql({
      foo: {
        bar: new Date(0)
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

    cleanDeep(object, { emptyObjects: false }).should.eql({
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
        baz: 123
      },
      foo: []
    };

    cleanDeep(object, { emptyArrays: false }).should.eql({
      biz: {
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

    cleanDeep(object, { emptyStrings: false }).should.eql({
      foo: {
        bar: '',
        biz: 123
      }
    });
  });

  it('should include falsy values if `falsyValues` is `false`', () => {
    const object = {
      foo: {
        bar: false,
        biz: 123
      }
    };

    cleanDeep(object, { falsyValues: false }).should.eql({
      foo: {
        bar: false,
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

    cleanDeep(object, { nullValues: false }).should.eql({
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
        biz: 123
      }
    };

    cleanDeep(object, { undefinedValues: false }).should.eql({
      foo: {
        bar: undefined,
        biz: 123
      }
    });
  });
});
