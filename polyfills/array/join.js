function join(array, separator = ",") {
    if(array.length === 0)
        return ""

    let result = ""
    for(let index=0; index < array.length; index++) {
        const value = array[index]
        if(index > 0) {
            result = result + separator
        }
        result = result + value
    }

    return result
}

const array = ["I", "am", "a", "Developer"]
console.log(join(array, " "))