- 在范型中， `<T, K>`  `K` 是可以做约束的，并且约束条件是可以由 `T` 生成
- keyof 能够获取到一个 类型的 key（将一个复杂的类型<`interface`> 类比成一个对象来看）
- `keyof` 生成的应该是一个联合类型，可以使用 `extends` 继承
- 可以通过 `T[K]` 这样的操作来获取一个类型中 `K` 对应的类型

---

同时 我们也应该掌握 TS 提供的 Pick.
感觉上就是 TS 自身存在不少原生的内置函数,可以让我们调用.


```typescript
interface SQL_CONFIG {
    host: string;
    port: string | number;
    user: string;
    password: string;
    encoding: string;
    db?: string;
    locate?: string;
}

type SQL_CONFIG_ORACLE = Pick<SQL_CONFIG, 'host' | 'port'>;
```