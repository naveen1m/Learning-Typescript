class Player1 {
    height;
    weight = 82;

    constructor(height: number, weight: number) {
        this.height = height;
        this.weight = weight;
    }

}

const p1 = new Player1(162, 87);
console.log(p1.weight, p1.height);

class Player2 {
    private height;  // can not be accessed outside this class  and js don't have these type of keywords
    weight = 82;

    constructor(height: number, weight: number) {
        this.height = height;
        this.weight = weight;
    }
    myHeight(): number {
        return this.height;
    }

}

const p2 = new Player2(167, 72);
console.log(p2.weight);
// console.log(p2.height); // Error: Property 'height' is private and only accessible within class 'Player2'.t
console.log(p2.myHeight())

class Player3 {
    constructor(private height: number, public weight: number) { }
}
const p3 = new Player3(155, 58);

class Player4 {
    public readonly id: string;  // can not be modified
    constructor(
        private height: number,
        public weight: number,
        protected power?: number,  // can only be accessed within class and subclass
    ) {
        this.id = String(Math.random() * 100);
    }
}

class SubPlayer extends Player4 {
    special;
    constructor(height: number, weight: number, power: number, special: boolean) {
        super(height, weight, power);
        this.special = special;
    }
    getData(): void {
        console.log(
            // this.height,  // Not accessible here
            this.weight,
            this.power,
            this.special
        )
    }
}

const SP1 = new SubPlayer(130, 45, 34, true);

// getter and setter function

class Player5 {
    public readonly id: string;  // can not be modified
    constructor(
        private height: number,
        public weight: number,
        protected power?: number,  // can only be accessed within class and subclass
    ) {
        this.id = String(Math.random() * 100);
    }
    get getMyHeight(): number {
        return this.height;
    }

    set changeMyHeight(val: number) {  // there should be no return type annotation
        this.height = val;
    }
}

const p5 = new Player5(160, 45);
console.log(p5.getMyHeight);
p5.changeMyHeight = 155;
console.log(p5.getMyHeight);

///////////////

interface ProductType {
    ids: string;
    name: string;
    price: number;
    stock: number;
    offer?: boolean;
}

interface GiveId {
    getId: () => string;

}

class Products implements ProductType, GiveId {
    public ids: string = String(Math.random() * 1000);


    constructor(
        public name: string,
        public price: number,
        public stock: number
    ) { }

    getId = () => this.ids;
}

const prd1 = new Products('macbook', 4569, 4568);
prd1.getId();
