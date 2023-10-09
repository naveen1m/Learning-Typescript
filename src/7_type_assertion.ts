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
