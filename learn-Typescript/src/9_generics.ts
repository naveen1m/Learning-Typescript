const gfunc1 = <CustomType>(n: CustomType): CustomType => {
    return n;
}

const gfunc2 = <T>(n: T): T => {
    return n;
}

type Person = {
    name: string,
    age: number
}

const person1: Person = {
    name: "naveen",
    age: 21,
}

const result = gfunc2<Person>(person1);

const gfunc3 = <T, U>(n: T, m: U): { n: T, m: U } => {
    return { n, m }
}

const ans = gfunc3(20, "twenty");
const ans2 = gfunc3<number, string>(20, "twenty");  // both are true


const gfunc4 = <T, U extends T>(m: T, n: U): { m: T, n: U } => {
    return { m, n }
}
type Persons1 = {
    name: string,
    age: number
}
type Persons2 = {
    name: string,
    age: number,
    email: string,
}
const usr1: Persons1 = {
    name: "naveen",
    age: 21
}
const usr2: Persons2 = {
    name: "naveen",
    age: 21,
    email: "navstr@gmail.com"
}

const ans3 = gfunc4(usr1, usr2);
const ans4 = gfunc4<Persons1, Persons2>(usr1, usr2);

/////////

const usr3: Persons1[] = [
    {
        name: "naveen",
        age: 21
    },
    {
        name: "praveen",
        age: 22
    },
    {
        name: "Ankit",
        age: 21
    }
]


const filterByPeople = <T, K extends keyof T>(arr: T[], property: K, value: T[K]) => {
    arr.filter(item => item[property] === value);
}

const filterByName = filterByPeople(usr3, "name", "naveen");
const filterByAge = filterByPeople(usr3, "age", 21);


