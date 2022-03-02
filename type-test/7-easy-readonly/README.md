我的 `Readonly` 实现:

- 之前有 `K extends keyof T` 这样的代码. 有这样的写法可以省略一个中间变量, 不用写 `extends` . `K in keyof T`

```typescript
type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};

```
实际上就是在每个属性前面添加一个 `readonly` 而已


---

有一点值得注意: `pick` 出来的属性也会携带着 `readonly`

```typescript

interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
        author: string;
    };
}

const config: Pick<MyReadonly<Todo1>, 'completed'> = {
    completed: false,
};

config.completed = true;


```

---

以这一套代码作为 demo

```typescript
interface SQL_CONFIG {
    readonly host: string | number;
}

const config: SQL_CONFIG = {
    host: 90000,
};

config.host = 123;
```

**TS 自带的 Readonly 有两种用法:**

直接在需要添加只读限制的属性前面添加 `Readonly`

```typescript
interface SQL_CONFIG {
    readonly host: string | number;
}

```

**另一种就是使用封装好的泛型:这种做法会将类型中所有的属性都设置为只读**

- 源类型是干净的
- 会将所有属性都设置为只读的

```typescript
interface SQL_CONFIG {
    host: string | number;
}

const config: Readonly<SQL_CONFIG> = {
    host: 90000,
};

config1.host = 123;

```


