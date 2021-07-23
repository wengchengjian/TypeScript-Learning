var a;
a = 2;
var b;
b = 'hello';
// let c:boolean = true;
//如果变量声明和赋值是同时进行的，TS可以自动对变量进行类型检测
var c = true;
function sum(a, b) {
    return a + b;
}
var d = sum(2, 3);
console.log(d);
// c = 123;
