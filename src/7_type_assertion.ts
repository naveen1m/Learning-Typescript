/**type assertion, also known as type casting, is a way to tell the TypeScript compiler to treat a value as a specific type, 
 *even if the compiler's static type checking does not guarantee that the value is of that type. */
/**common use case for type assertions: when dealing with DOM elements or
 * when working with external libraries that don't provide type definitions. */


// const btn = document.getElementById("btn");
// btn.onclick  // Error: 'btn' is possibly 'null'.

// type assertion way 1

const btn1 = <HTMLElement>document.getElementById("btn");
btn1.onclick

// type assertion way 2

const btn2 = document.getElementById("btn") as HTMLElement;
btn2.onclick

const btn3 = document.getElementById("btn")!;  // not null
btn3.onclick

/** DOM MANIPULATION HTML ELEMENT TO ACCESS ALL PROPERTIES
 * <button>  - HTMLButtonElement
 * <input>   - HTMLInputElement
 * <a>       - HTMLAnchorElement
 * <p>       - HTMLParagraphElement
 * <h1>...<h6> - HTMLHeadingElement
 * <ul>      - HTMLUListElement
 * <ol>      - HTMLOListElement
 * <li>      - HTMLLListElement
 * <img>     - HTMLImageElement
 * <form>    - HTMLFormElement
 * <span>    - HTMLSpanElement
 */


interface Person1 {
    [key: string]: string; // dynamic key
}
const myobj: Person1 = {
    name: "naveen",
    email: "navstr10@gmail.com"
}

const getdata = (key: string): string => {
    return myobj[key];
}

getdata("name")
getdata("lol")  // wrong key passed

interface Person2 {
    name: string,
    email: string
}

const myobj2: Person2 = {
    name: "naveen",
    email: "navstr10@gmail.com"
}

const getdata2 = (key: "name" | "email"): string => {
    return myobj[key];
}
getdata2("name");
// getdata2("lol");  // Error: Argument of type '"lol"' is not assignable to parameter of type '"name" | "email"'.

const getdata3 = (key: keyof Person2): string => {
    return myobj[key];
}