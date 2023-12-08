declare function cleanDeep<T>(object: T, options?: CleanOptions): T;
declare function cleanDeep<T>(
  object: T,
  options?: CleanOptions & CleanKeysOptions
): Partial<T>;

export default cleanDeep;

export type CleanOptions = {
  cleanValues?: string[];
  emptyArrays?: boolean;
  emptyObjects?: boolean;
  emptyStrings?: boolean;
  NaNValues?: boolean;
  nullValues?: boolean;
  undefinedValues?: boolean;
};

export type CleanKeysOptions = {
  cleanKeys: string[];
};
