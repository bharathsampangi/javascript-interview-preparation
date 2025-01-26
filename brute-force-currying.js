const addCurry = function(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(addCurry(1)(2)(3))