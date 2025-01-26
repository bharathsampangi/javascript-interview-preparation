function getTypeOf(data) {
    const type = Object.prototype.toString.call(data)

    return type.slice(1, -1).split(" ")[1].toLowerCase()
}

const arr = [1, 2, 3]
const obj = {key: "value"}

console.log(arr.toString())
console.log(obj.toString())

console.log(Object.prototype.toString.call(arr))
console.log(Object.prototype.toString.call(obj))

console.log("\n Test Cases: \n");

// Array
const arr2 = [1, 2, 3];
console.log(getTypeOf(arr)); // Expected: 'array'

// Plain Object
const obj2 = { key: "value" };
console.log(getTypeOf(obj)); // Expected: 'object'

// Date
const date = new Date();
console.log(getTypeOf(date)); // Expected: 'date'

// Regular Expression
const regex = /abc/;
console.log(getTypeOf(regex)); // Expected: 'regexp'

// Function
const func = function () {};
console.log(getTypeOf(func)); // Expected: 'function'

// Null (typeof null is 'object', which is misleading)
const nullValue = null;
console.log(getTypeOf(nullValue)); // Expected: 'null'

// Undefined
const undefinedValue = undefined;
console.log(getTypeOf(undefinedValue)); // Expected: 'undefined'

// BigInt
const bigIntValue = BigInt(12345678901234567890);
console.log(getTypeOf(bigIntValue)); // Expected: 'bigint'

// Symbol
const symbolValue = Symbol("description");
console.log(getTypeOf(symbolValue)); // Expected: 'symbol'

// Map
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(getTypeOf(map)); // Expected: 'map'

// Set
const set = new Set();
set.add(1);
set.add(2);
console.log(getTypeOf(set)); // Expected: 'set'

// Primitive Types
console.log(getTypeOf(42)); // Expected: 'number'
console.log(getTypeOf("Hello, World!")); // Expected: 'string'
console.log(getTypeOf(true)); // Expected: 'boolean'