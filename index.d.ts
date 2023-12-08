declare function cleanDeep<T>(object: T, options?: CleanOptions): Partial<T>;
declare function cleanDeep<T>(
  object: T,
  options?: CleanOptions & KeepTypeOptions
): T;

export default cleanDeep;

export type CleanOptions = {
  cleanKeys?: string[];
  cleanValues?: string[];
  emptyArrays?: boolean;
  emptyObjects?: boolean;
  emptyStrings?: boolean;
  NaNValues?: boolean;
  nullValues?: boolean;
  undefinedValues?: boolean;
};

export type KeepTypeOptions = {
  keepType: boolean;
};
