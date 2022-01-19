//  & 交叉类型
type PointX = {
  x: number;
  z: string;
};

type Point = PointX & {
  y: number;
  z: number;
};

let point: Point = {
  x: 1,
  y: 2,
  z: 3, // Type 'number' is not assignable to type 'never'.  number & string => never
};

// ？？ 空值合并运算符
const user = null;
var level1 = user ?? "暂无等级";
var level2 = user ?? "暂无等级";

interface X {
  name: string;
  age: number;
}

interface Y {
  habbit: string;
}

type PointType = X & Y;

interface ThreeDimesions extends PointType {
  a: number;
}

const a: ThreeDimesions = { a: 123 };
const b: ThreeDimesions = {
  a: 123,
  name: "thee",
  age: 12,
  habbit: "basketball",
};
