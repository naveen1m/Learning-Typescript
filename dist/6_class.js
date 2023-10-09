"use strict";
class Player1 {
    constructor(height, weight) {
        this.weight = 82;
        this.height = height;
        this.weight = weight;
    }
}
const p1 = new Player1(162, 87);
console.log(p1.weight, p1.height);
class Player2 {
    constructor(height, weight) {
        this.weight = 82;
        this.height = height;
        this.weight = weight;
    }
    myHeight() {
        return this.height;
    }
}
const p2 = new Player2(167, 72);
console.log(p2.weight);
// console.log(p2.height); // Error: Property 'height' is private and only accessible within class 'Player2'.t
console.log(p2.myHeight());
class Player3 {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}
const p3 = new Player3(155, 58);
class Player4 {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
}
class SubPlayer extends Player4 {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
    }
    getData() {
        console.log(
        // this.height,  // Not accessible here
        this.weight, this.power, this.special);
    }
}
const SP1 = new SubPlayer(130, 45, 34, true);
// getter and setter function
class Player5 {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    get getMyHeight() {
        return this.height;
    }
    set changeMyHeight(val) {
        this.height = val;
    }
}
const p5 = new Player5(160, 45);
console.log(p5.getMyHeight);
p5.changeMyHeight = 155;
console.log(p5.getMyHeight);
class Products {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.ids = String(Math.random() * 1000);
        this.getId = () => this.ids;
    }
}
const prd1 = new Products('macbook', 4569, 4568);
prd1.getId();
