declare function cleanDeep<T>(object: T, options?: CleanOptions): Partial<T>;

export default cleanDeep;

export type CleanOptions = {
    cleanKeys?: string[];
    cleanValues?: (string | number)[];
    emptyArrays?: boolean;
    emptyObjects?: boolean;
    emptyStrings?: boolean;
    NaNValues?: boolean;
    nullValues?: boolean;
    undefinedValues?: boolean;
};
