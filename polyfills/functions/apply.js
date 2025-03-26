Function.prototype.myApply = function(context={}, args) {
    const fn = this

    if(typeof fn !== "function") {
        throw new Error("It's not callable")
    }

    if(!Array.isArray(args)) {
        throw new TypeError("Second argument must be an array")
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

console.log(greet.myApply(context1, ["Welcome", "Alice"]))

const context2 = {name: "Bob"}
function introduce(role) {
    return `${this.name} is a ${role}`
}

console.log(introduce.myApply(context2, ["Software Developer"]))

try {
    const nonFunction = {}
    nonFunction.myApply = Function.prototype.myApply
    nonFunction.myApply([],[])
} catch(err) {
    console.error(err.message)
}

try {
    function sayGoodBye(name) {
        return `Good Bye ${name}`
    }
    sayGoodBye.myApply(context1, "George")
} catch(err) {
    console.error(err.message)
}