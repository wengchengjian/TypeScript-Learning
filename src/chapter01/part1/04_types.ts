let a: object;
a = {};

a = function () {};

let b: { name: string; age: number };

b = { name: "wcg", age: 18 };

// let d :Function;

let d: (a: number, b: number, [c]: any) => number;

d = function (a, b, c) {
  return a + b;
};

let e: string[];
e.push("a");
e.push("b");
e.push("c");
// e.push(1);

let f: number[];
f = [1, 2.2, 3, 4, 5];

let g: Array<number>;

// g = [1,2,3,3,'a'];

//元组，固定长度对数组
let h: [string, string];

// h = ['a','b','123'];

//枚举

enum gender {
  Male = 0,
  Female = 1,
}

let i: { name: string; gender: gender };

i = {
  name: "wcj",
  gender: gender.Male,
};

type mytype = string;

let m: mytype;
