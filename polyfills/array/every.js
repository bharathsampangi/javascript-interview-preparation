function every(array, callbackFn) {
    for(let index=0; index < array.length; index++) {
        let value = array[index]
        if(!callbackFn(value, index, array)) {
            return false
        }
    }
    return true
}

const array = [2, 8, 16, 30, 15]
const even = every(array, x => x % 2 == 0)
console.log(even)