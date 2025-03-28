function ObjectIs(a, b) {
    if(Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }

    if(a === 0 && b === 0) {
        return 1/a === 1/b
    }

    return a === b
}

console.log(ObjectIs(0, -0) === Object.is(0, -0))
console.log(ObjectIs(-0, -0) === Object.is(-0, -0))
console.log(ObjectIs(5, 5) === Object.is(5, 5))
console.log(ObjectIs(5, "5") === Object.is(5, "5"))
console.log(ObjectIs(null, null) === Object.is(null, null))
console.log(ObjectIs(null, undefined) === Object.is(null, undefined))

const obj1 = {}
const obj2 = {}
console.log(ObjectIs(obj1, obj2) === Object.is(obj1, obj2))
console.log(ObjectIs(obj1, obj1) === Object.is(obj1, obj1))

const arr1 = []
const arr2 = []
console.log(ObjectIs(arr1, arr2) === Object.is(arr1, arr2))
console.log(ObjectIs(arr1, arr1) === Object.is(arr1, arr1))

console.log(ObjectIs([], {}))
console.log(ObjectIs([], []))

// Complex nested comparisons
const nestedObj1 = { key: { nested: 1 } };
const nestedObj2 = { key: { nested: 1 } };
console.log(
  ObjectIs(nestedObj1, nestedObj2) === Object.is(nestedObj1, nestedObj2)
);

console.log(ObjectIs(NaN, NaN))