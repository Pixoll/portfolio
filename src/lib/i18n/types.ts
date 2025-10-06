export type I18nObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: string | string[] | I18nObject | ((...args: any[]) => string);
};

export type RemoveConstantStrings<O extends I18nObject> = {
  [K in keyof O]: O[K] extends string
    ? string
    : O[K] extends string[]
      ? TupleToType<O[K], string>
      : O[K] extends (...args: infer Args) => string
        ? (...args: Args) => string
        : O[K] extends I18nObject
          ? RemoveConstantStrings<O[K]>
          : O[K];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TupleToType<T extends readonly any[], U> = {
  [K in keyof T]: U;
};
