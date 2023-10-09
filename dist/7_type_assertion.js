"use strict";
/**type assertion, also known as type casting, is a way to tell the TypeScript compiler to treat a value as a specific type,
 *even if the compiler's static type checking does not guarantee that the value is of that type. */
/**common use case for type assertions: when dealing with DOM elements or
 * when working with external libraries that don't provide type definitions. */
// const btn = document.getElementById("btn");
// btn.onclick  // Error: 'btn' is possibly 'null'.
// type assertion way 1
const btn1 = document.getElementById("btn");
btn1.onclick;
// type assertion way 2
const btn2 = document.getElementById("btn");
btn2.onclick;
const btn3 = document.getElementById("btn"); // not null
btn3.onclick;
const myobj = {
    name: "naveen",
    email: "navstr10@gmail.com"
};
const getdata = (key) => {
    return myobj[key];
};
getdata("name");
getdata("lol"); // wrong key passed
const myobj2 = {
    name: "naveen",
    email: "navstr10@gmail.com"
};
const getdata2 = (key) => {
    return myobj[key];
};
getdata2("name");
// getdata2("lol");  // Error: Argument of type '"lol"' is not assignable to parameter of type '"name" | "email"'.
const getdata3 = (key) => {
    return myobj[key];
};
