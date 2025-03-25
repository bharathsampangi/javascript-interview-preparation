const array = [5, 12, 8, 130, 44];

// Array.prototype.pat = function(index) {
//     if(index < -this.length || index >= this.length) {
//         return undefined
//     }

//     if(index >= 0) {
//         return this[index]
//     } else {
//         return this[this.length + index]
//     }
// }

// console.log(array.pat(2))
// console.log(array.pat(-1))

function at(arr, index) {
    if (index < -arr.length || index >= arr.length) {
        return undefined;
    }

    if (index < 0) {
        return arr[arr.length + index];
    } else {
        return arr[index];
    }
}

console.log(at(array, 2))
console.log(at(array, -1))