declare function arrayWrap<T>(): never[];
declare function arrayWrap<T>(value: T | T[]): T[];

export = arrayWrap;
