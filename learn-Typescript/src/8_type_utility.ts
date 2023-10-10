/**type utilities are built-in utility types that provide common type transformations and operations. 
 *These utilities help you work with and manipulate types more easily.  */

/** Most Used type utilities:
Partial<T>: Makes all properties of a type optional by creating a new type with optional properties.

Required<T>: Makes all properties of a type required by creating a new type with required properties.

Readonly<T>: Makes all properties of a type read-only, preventing them from being modified after creation.

Record<K, T>: Creates a type with keys of type K and values of type T, often used for defining dictionaries or maps.

Pick<T, K>: Creates a type containing only the specified properties K from the original type T.

Omit<T, K>: Creates a type that excludes the specified properties K from the original type T.

Exclude<T, U>: Creates a type by excluding all types in U from T. Useful for filtering union types.

Extract<T, U>: Creates a type by extracting all types in U from T. Useful for extracting specific types from union types.

NonNullable<T>: Creates a type that removes null and undefined from T, ensuring that the resulting type is not nullable.

ReturnType<T>: Obtains the return type of a function or function type T.

Parameters<T>: Obtains the parameter types of a function or function type T.

InstanceType<T>: Obtains the instance type of a constructor function type T.

Required<T>: Ensures that all properties of a type are required.

ConstructorParameters<T>: Obtains the parameter types of a class constructor function type T.
 */

type User = {
    name: string,
    email: string
}

type User1 = Partial<User>

type User2 = Required<User>;

const User3: Partial<User> = {
    name: "Naveen Kumar"
}