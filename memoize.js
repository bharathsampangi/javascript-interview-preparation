function memoize(fn, keygen) {

    if(!keygen) {
        keygen = (...args) => args.join("_")
    }

    let cache = new Map()

    return function(...args) {
        const key = keygen(...args)

        if(cache.has(key)) {
            console.log("cached")
            return cache.get(key)
        } else {
            console.log("Computed")
            const sum = fn.call(this, ...args)
            cache.set(key, sum)
            return sum
        }
    }
}

const add = (a,b) => a + b

const memoizedAdd = memoize(add)

console.log(memoizedAdd(1, 2))
console.log(memoizedAdd(1, 2))
console.log(memoizedAdd(1, 4))