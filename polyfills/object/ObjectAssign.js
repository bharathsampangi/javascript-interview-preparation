function ObjectAssign(target, ...sources) {
    if(target === null || target === undefined) {
        throw new TypeError("Target must be an object")
    }

    target = Object(target)

    for(let source of sources) {
        if(source === null || source === undefined) {
            continue;
        }

        source = Object(source)

        const keys = Reflect.ownKeys(source)

        const descriptors = Object.getOwnPropertyDescriptors(source)

        keys.forEach((key) => {
            const targetDescriptor = Object.getOwnPropertyDescriptor(target, key)

            if(targetDescriptor && targetDescriptor.writable === false) {
                throw new Error(`Property ${key} is not writable to target`)
            }

            if(descriptors[key].enumerable) {
                target[key] = source[key]
            }
        })
    }

    return target
}

//Test Case 1
const target1 = {a: 1}
const source1 = {b: 2}
console.log(ObjectAssign(target1, source1))

// Test Case 2: Overriding
const target2 = {a: 1, b: 2}
const source2 = {b: 3, c: 4}
console.log(ObjectAssign(target2, source2))

// Test Case 3: Handling non-enumerable properties
const target3 = { }
const source3 = Object.defineProperty({}, "a", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
})
console.log(ObjectAssign(target3, source3))

//Test Case 4: Handling Symbol Properties
const symbolKey = Symbol("symbolKey")
const target4 = {}
const source4 = { [symbolKey]: "symbolValue" }
console.log(ObjectAssign(target4, source4))

// Test Case 5: Null and Undefined sources
const target5 = {a: 1}
console.log(ObjectAssign(target5, null, undefined, {b: 2}))

const target6 = 3
const source6 = {a: 1}
console.log(ObjectAssign(target6, source6))

const target7 = {a: 1}
const source7 = {b: 2}
const source8 = {c: 3}
console.log(ObjectAssign(target7, source7, source8))

const target8 = Object.defineProperty({}, "a", {
    value: 1,
    writable: false,
    enumerable: true
})

const source9 = {a: 2}
try {
    console.log(ObjectAssign(target8, source9))
} catch(err) {
    console.log(err.message)
}