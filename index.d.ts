declare function cleanDeep<T>(object: T, options?: CleanOptions): Partial<T>;

export default cleanDeep;

export type CleanOptions = {
	cleanKeys?: string[];
	cleanValues?: string[];
	cleanKeysPrefixes?: string[];
	cleanValuesPrefixes?: string[];
	emptyArrays?: boolean;
	emptyObjects?: boolean;
	emptyStrings?: boolean;
	NaNValues?: boolean;
	nullValues?: boolean;
	undefinedValues?: boolean;
};
