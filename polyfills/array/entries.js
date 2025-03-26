const array = ["a", "b", "c"]

function entries(array) {
    function* generator() {
        for(let idx=0; idx < array.length; idx++) {
            yield(idx, array[idx])
        }
    }
    return generator()
}

const iterator = entries(array)
console.log('iterator',iterator.next())
for(const key of iterator) {
    console.log(key)
}