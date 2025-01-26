function isEqual(a, b) {

    if(Number.isNaN(a) && Number.isNaN(b)) {
        return true
    }

    if(a === b) {
        return true
    }

    if(typeof a != "object" || typeof b != "object") {
        return false
    }

    const keysA = Object.keys(a)
    const keysB = Object.keys(b)

    if(keysA.length !== keysB.length) {
        return false
    }

    for(let index=0; index < keysA.length; index++) {
        const keyA = keysA[index]
        const keyB = keysB[index]

        if(!isEqual(a[keyA], b[keyB])) {
            return false
        }
    }

    return true
}

console.log(isEqual(1, 1)) //true
console.log(isEqual(1, 2)) //false
console.log(isEqual("hello", "hello")) //true
console.log(isEqual("hello", "world")); // false
console.log(isEqual(true, true)); // true
console.log(isEqual(true, false)); // false
console.log(isEqual(null, null)); // true
console.log(isEqual(undefined, undefined)); // true
console.log(isEqual(null, undefined)); // false

console.log(isEqual(NaN, NaN)); // true
console.log(isEqual(NaN, 1)); // false
console.log(isEqual(NaN, "NaN")); // false

console.log(isEqual([1, 2, 3], [1, 2, 3])); // true
console.log(isEqual([1, 2, 3], [3, 2, 1])); // false
console.log(isEqual([1, [2, 3]], [1, [2, 3]])); // true
console.log(isEqual([1, [2, 3]], [1, [3, 2]])); // false
console.log(isEqual([], [])); // true
console.log(isEqual([1], [])); // false

console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(isEqual({}, {})); // true

console.log(isEqual([1, { a: 2 }], [1, { a: 2 }])); // true
console.log(isEqual({ a: [1, 2], b: 3 }, { a: [1, 2], b: 3 })); // true
console.log(isEqual({ a: [1, 2], b: 3 }, { a: [1, 2, 3], b: 3 })); // false
console.log(isEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }])); // true

// TODO need to fix
console.log(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true