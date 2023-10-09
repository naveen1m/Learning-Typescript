type FuncType1 = (n: number, m: number, l?: number) => number | string;

const funct1: FuncType1 = (n, m, l) => {
    if (typeof l === "undefined") return "please provide value of l";

    return n * m * l;
}

type FuncType2 = (n: number, m: number, l: number) => number;

const funct2: FuncType2 = (n, m, l = 20) => {   // default parameter
    return n * m * l;
}

// Rest operator
type FuncType3 = (n: number[]) => number[];

const funct3 = (...n: number[]): number[] => {
    return n;
}

function echo(w: string): string {
    return w;
}

// function with objects
interface Product {
    readonly id: string,
    name: string, stock: number, price: number, photo: string
}

type getDataType = (product: Product) => void;
const getData: getDataType = (product) => {
    console.log(product)
}

const product1: Product = {
    id: "345kert",
    name: "maacbook",
    stock: 1234,
    price: 22229,
    photo: "photo url"
}
getData(product1);
