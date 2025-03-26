const array = [1, 2, 3, 4]

function fill(array, value, startIndex=0, endIndex = array.length) {
    for(let i=startIndex; i < endIndex && array.length; i++) {
        array[i] = value
    }
    return array
}

console.log(fill(array, 0, 2, 4))