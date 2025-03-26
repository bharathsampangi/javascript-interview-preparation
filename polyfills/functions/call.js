Function.prototype.myCall = function(context = {}, ...args) {
    const fn = this

    if(typeof fn != "function") {
        throw new Error("It's not callable")
    }

    const key = Symbol()

    context[key] = fn

    const result = context[key](...args)

    delete context[key]

    return result
}

//Test Case
function greet(greeting, name) {
    return `${greeting}, ${name}`
}
const context1 = {}

console.log(greet.myCall(context1, "Welcome", "Alice"))

const context2 = {name: "Bob"}
function introduce(role) {
    return `${this.name} is a ${role}`
}

console.log(introduce.myCall(context2, "Software Developer"))

try {
    const nonFunction = {}
    nonFunction.myCall = Function.prototype.myCall
    nonFunction.myCall([],[])
} catch(err) {
    console.error(err.message)
}

try {
    function sayGoodBye(name) {
        return `Good Bye ${name}`
    }
    sayGoodBye.myCall(context1, "George")
} catch(err) {
    console.error(err.message)
}