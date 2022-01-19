
# &符号 —— 交叉类型

将多个类型合并为一个类型

包含了所需所有类型的特性

**如果多个类型中存在想通过的属性**

- 如果合并的两个类型中相同字段类型为基础类型，并且类型不同，合并后类型为 `never`
- 如果这两个类型中的相同字段不是基础类型，继续向下一层进行合并


```typescript
type PointX = {
 x: number;
 z: string;
}

type Point =  PointX & {
 y: number;
    z: number;
}

let point: Point = {
    x: 1,
    y: 2,
    z: 3, // Type 'number' is not assignable to type 'never'.  number & string => never
} 
```

## ?? 空值合并运算符

ES2021 的特性，typescript 3.7 支持了这个特性，当左侧的操作数为 `null` 或者 `undefined` 时，返回其右侧的操作数，否则返回左侧的操作数

```typescript
var level1 = user.level ?? '暂无等级' // level1 -> '暂无等级'
var level2 = user.other_level ?? '暂无等级' // level1 -> '暂无等级'
```