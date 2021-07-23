"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sum(a, b) {
        return a + b;
    }
}
Person.year = 28;
const p = new Person("wcj", 18);
console.log(p);
console.log(p.sum(5, 9));
console.log(Person.year);
