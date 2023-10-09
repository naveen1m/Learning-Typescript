const obj1 = {
    name: "naveen kumar",
    age: 21,
    study: true
}

const obj2: {
    name: string,
    age: number,
    study: boolean
} = {
    name: "naveen kumar",
    age: 21,
    study: true
}

type Obj3 = {
    name: string,
    age: number,
    study: boolean
}
const obj3: Obj3 = {
    name: "naveen kumar",
    age: 21,
    study: true
}
type Obj4 = {
    name: string,
    age: number,
    study?: boolean  // its optional now ?.
}
const obj4: Obj4 = {
    name: "naveen kumar",
    age: 21,
}






