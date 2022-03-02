type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K;
};

type a = readonly ['a', 'b'];

type b = a[number];
