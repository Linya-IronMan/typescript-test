# Partial

> 将类型中所有属性变成可选的

```typescript
type Partial<T> = {
    [P in T]?: T[P]
}
```

```typescript
interface Point {
  x: number;
  y: number;
}

type PartialPoint = Partial<Point>

// PartialPoint 相当于：
// type PartialPoint = {
//     x?: number;
//     y?: number;
// }
// 所有属性均可选
```

