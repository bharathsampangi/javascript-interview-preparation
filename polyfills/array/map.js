const array = [1, 4, 9, 16]

function map(array, callbackFn) {
    let result = []

    for(let index = 0; index < array.length; index++) {
        const value = array[index]
        result.push(callbackFn(value, index, array))
    }

    return result
}

const map1 = map(array, (x) => x * 2)
console.log(map1)