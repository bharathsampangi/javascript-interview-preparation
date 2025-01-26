function reduce(array, callbackFn, initialValue) {
    let accumulator = initialValue;
    for (let index = 0; index < array.length; index++) {
        let value = array[index];

        if (accumulator) {
            accumulator = callbackFn(accumulator, value, index, array);
        } else {
            accumulator = value;
        }
    }

    return accumulator;
}

const initialValue = 0;
const array = [1, 2, 3, 4];
const sumWithInitial = reduce(
    array,
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial)
