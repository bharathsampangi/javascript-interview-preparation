function reverse(array) {
    for(let index=0; index < array.length / 2; index++) {
        let temp = array[index]
        array[index] = array[array.length - 1 - index]
        array[array.length - 1 - index] = temp
    }

    return array
}

const array = [1, 19, 50, 3, 7]
console.log(reverse(array))