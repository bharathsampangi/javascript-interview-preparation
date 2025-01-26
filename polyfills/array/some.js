function some(array, callbackFn) {
    for(let index = 0; index < array.length; index++) {
        const value = array[index]

        if(callbackFn(value, index, array)) {
            return true
        }
    }

    return false
}

const array = [1, 3, 7, 11, 9]
console.log(some(array, (x) => x % 2 === 0))