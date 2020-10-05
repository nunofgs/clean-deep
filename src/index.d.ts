interface Options {
    /**
    Remove specific keys, ie: ['foo', 'bar', ' ']

    @default [];
    */
    readonly cleanKeys?: string[];

    /**
    Remove specific values, ie: ['foo', 'bar', ' ']

    @default [];
    */
    readonly cleanValues?: string[];

    /**
    Remove empty arrays, ie: []

    @default true;
    */
    readonly emptyArrays?: boolean;

    /**
    Remove empty objects, ie: {}

    @default true;
    */
    readonly emptyObjects?: boolean;

    /**
    Remove empty strings, ie: `''`

    @default true;
    */
    readonly emptyStrings?: boolean;

    /**
    Remove NaN values, ie: `NaN`

    @default false;
    */
    readonly NaNValues?: boolean;

    /**
    Remove null values, ie: `null`

    @default true;
    */
    readonly nullValues?: boolean;

    /**
    Remove undefined values, ie: `undefined`

    @default true
    */
    readonly undefinedValues?: boolean;
}

/**
    Remove falsy, empty or nullable values from objects

    @example
    ```js
    const cleanDeep = require('clean-deep');

    const object = { bar: {}, baz: null, biz: 'baz' };

    cleanDeep(object);
    // => { biz: 'baz'}
    ```
 */
declare function _exports(object: Record<string, unknown>, options?: Options): Record<string, unknown>;

export = _exports;
