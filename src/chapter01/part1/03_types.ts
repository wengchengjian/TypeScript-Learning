let a:10;

a = 10;
// a = 11;
//联合类型
let b: 'male'|'female';

b = 'male';
b = 'female';
// b = 'do';

let c : boolean | string;

c = true;

c = 'abc';

// c = 2;
//any 任意类型 设置any后相当于对该变量关闭了ts对类型检测
let d : any;
d = 10;

d = 'hello';

d = true;
//
let e : unknown;

e = 10;

e ='hello';

e= 'true';

let s : string;

s = d;
//类型断言，它可以告诉解析器变量对世纪类型
//1.e as string
s = e as string;
//2.<string>
s = <string> e ;
if(typeof e ==='string'){
    s = e;
}


function fn(): never{
    throw 'a';
}