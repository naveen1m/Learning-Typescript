interface Obj5 {
    name: string,
    age: number,
    study?: boolean  // its optional now ?.
}
const obj5: Obj5 = {
    name: "naveen kumar",
    age: 21,
}

type funcType = (n: number, m: number) => number;

interface Obj6 extends Obj5 {
    scholar: boolean
    func?: () => void;
    func2: funcType;
}

const obj6: Obj6 = {
    name: "naveen kumar",
    age: 45,
    scholar: false,
    func() {
        console.log("hello there")
    },
    func2(n, m) {
        return n * m;
    },
}
console.log(obj6.func2(4, 5));
// console.log(obj6.func());  // Error: Cannot invoke an object which is possibly 'undefined'.
