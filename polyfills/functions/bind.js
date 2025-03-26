Function.prototype.myBind = function(context = {}, ...args) {
    const fn = this

    if(typeof fn !== "function") {
        throw new Error("It's not callable")
    }

    const key = Symbol()

    context[key] = fn

    return function(...newArgs) {
        return context[key](...args, ...newArgs)
    }
}

//Test Case
function greet(greeting, name) {
    return `${greeting}, ${name}`
}
const context1 = {}
const greetBound = greet.myBind(context1, "Hello")
console.log(greetBound("Alice"))

const context2 = {name: "Bob"}
function introduce(role) {
    return `${this.name} is a ${role}`
}
const introduceBound = introduce.myBind(context2)
console.log(introduceBound("Software Developer"))

try {
    const nonFunction = {}
    nonFunction.myBind = Function.prototype.myBind
    nonFunction.myBind([])
} catch(err) {
    console.error(err.message)
}

function multiply(a, b) {
    return a * b
}

const context3 = {}
const multiplyBound = multiply.myBind(context3, 2)
console.log(multiplyBound(3))

function add(a, b, c) {
    return a + b + c
}

const context4 = {
}
const addBound = add.myBind(context4, 3, 4)
console.log(addBound(5))