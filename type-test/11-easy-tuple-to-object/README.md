需要先理解下题目

1. `as const` 作用: 将数组中的所有数据定义为常量, 不可修改.
2. `typeof tuple` 作用: 获取 tuple 变量的类型
3. `T[number]` 的写法, ji

**可以尝试下这段代码在添加末尾处的 `as const` 前后有什么不同之处**

添加前,`tuple` 的类型就是 `string[]`
添加后, `tuple` 的类型就变成了: `readonly ["tesla", "model 3", "model X", "model Y"]` 数组中的每一项都是只读并且固定的.


```typescript
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
```

根据 `test-cases` 中提供的 `demo` 可以看出, `TupleToObject` 是在将数组中的每一项的类型,转换成对象的表达方式

**`T[number]` 实例**

实际上就是这道题的解法: 

```typescript
type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K;
};

```

`T[number]` 在 `T` 为一个数组类型的时候成立. 表示将数组中的所有类型提取出来,成为一个联合类型.

比如 `[string, number]` 就会变成 `string | number`

类似的就是用于对象的 `keyof T` , 能够将对象的所有键名提取出来形成一个联合类型.


这个 Tuple 貌似不是 TS 原生支持的

---