"use strict";
const obj5 = {
    name: "naveen kumar",
    age: 21,
};
const obj6 = {
    name: "naveen kumar",
    age: 45,
    scholar: false,
    func() {
        console.log("hello there");
    },
    func2(n, m) {
        return n * m;
    },
};
console.log(obj6.func2(4, 5));
// console.log(obj6.func());  // Error: Cannot invoke an object which is possibly 'undefined'.
