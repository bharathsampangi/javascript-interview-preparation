function concat(array, ...values) {
    const result = [...array]
    for(let index = 0; index < values.length; index++) {
        let value = values[index]

        if(Array.isArray(value)) {
            for(let i=0; i < value.length; i++) {
                result.push(value[i])
            }
        } else {
            result.push(value)
        }
    }

    return result
}

const array1 = [1, 3, 6, 8]
const array2 = [21, 29]

console.log(concat(array1, 12, 13, [15, 17], array2))