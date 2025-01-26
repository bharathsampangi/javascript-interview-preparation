function find(array, callbackFn) {
    for(let index = 0; index < array.length; index++) {
        let value = array[index]
        if(callbackFn(value, index, array)) {
            return value
        }
    }
    return undefined
}

const array = [2, 8, 13, 18, 9]
console.log(find(array, (x) => x > 14))