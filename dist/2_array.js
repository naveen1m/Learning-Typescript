"use strict";
const arr1 = [12, 24, 36, 48];
const arr2 = [13, 26, 39, 52];
const arr3 = [14, 28, 42, 56];
console.log(arr1);
console.log(arr2);
console.log(arr3);
arr1[5] = 15;
console.log(arr1); // (6) [12, 24, 36, 48, empty, 15]
arr2.forEach(i => {
    console.log(i);
});
// Tuple
const tpl = [45, "rohit", 217];
// const tpl: [number, string, number] = [45, "rohit", 217,456]; // error: Type '[number, string, number, number]' is not assignable to type '[number, string, number]' 
console.log(tpl);
