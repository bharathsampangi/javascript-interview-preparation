function flatten(array) {
    let result = []
    for(let elem of array) {
        if(typeof elem == 'object') {
            result = [...result, ...flatten(elem)]
        } else {
            result.push(elem)
        }
    }
    return result
}

console.log(flatten([1, 2, [3, 4], 5, [8, 9]], []))