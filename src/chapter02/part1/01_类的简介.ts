class Person {
  //定义实力属性
  name: string;
  age: number;
  static year: number = 28;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sum(a: number, b: number): number {
    return a + b;
  }
}

const p = new Person("wcj", 18);

console.log(p);
console.log(p.sum(5, 9));
console.log(Person.year);
