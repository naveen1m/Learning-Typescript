"use strict";
let num = 23;
// num = "hello"  // Error: Type 'string' is not assignable to type 'number'
// let name = "naveen kumar"  // Error: Cannot redeclare block-scoped variable 'name'.ts(2451)
//  lib.dom.d.ts(27029, 15): 'name' was also declared here.
let call = "naveen Kumar";
let check;
check = "hello there"; // datatype any
check = 736; // no error
console.log(check);
let types;
types = "TS";
// types = 123; // Error: Type 'number' is not assignable to type 'string'.ts(2322)
console.log(types);
let greet = "123";
// can be string or number
let surname;
surname = "harish";
surname = 3;
let usrnme = "nvbstr10";
usrnme = 746;
// function
const func1 = (n, m) => {
    console.log(n, m);
    return String(n * m);
};
console.log(func1(15, 3));
const func2 = (n, m) => {
    console.log(n, m);
    // return String(n * m);  // Error :Type 'string' is not assignable to type 'number'.ts(2322)
    return (n * m);
};
console.log(func2(15, 3));
const func3 = (n, m) => {
    console.log(n, m);
    return n * m;
};
console.log(func3(6, 3));
