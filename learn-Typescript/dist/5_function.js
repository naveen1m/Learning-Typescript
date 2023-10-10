"use strict";
const funct1 = (n, m, l) => {
    if (typeof l === "undefined")
        return "please provide value of l";
    return n * m * l;
};
const funct2 = (n, m, l = 20) => {
    return n * m * l;
};
const funct3 = (...n) => {
    return n;
};
function echo(w) {
    return w;
}
const getData = (product) => {
    console.log(product);
};
const product1 = {
    id: "345kert",
    name: "maacbook",
    stock: 1234,
    price: 22229,
    photo: "photo url"
};
getData(product1);
// Never type
const err = new Error(); // type Error
const errHandler = () => {
    throw new Error();
    // return new Error();  // type Error
};
const mode1 = "light";
const mode2 = "dark";
// const mode3: thememode = "dracula"; // Error: Type '"dracula"' is not assignable to type 'thememode'.
