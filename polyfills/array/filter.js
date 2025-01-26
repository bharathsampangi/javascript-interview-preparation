function filter(array, callbackFn) {
    let result = []

    for(let index=0; index < array.length; index++) {
        const value = array[index]

        if(callbackFn(value, index, array)) {
            result.push(value)
        }
    }

    return result
}

const array = [2, 3, 8, 7, 5, 10, 18]
const filteredArray = filter(array, (x) => x % 2 == 0)
console.log(filteredArray)