const assert = require('assert').strict;

function pairs(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]% 2 != 0) {
            array.splice(i,1);
            i--
        }
    }
    console.log(array)
    return array
}
function gt15(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 15) {
            array.splice(i,1)
            i--
        }
    }
    console.log(array)
    return array
}
function lt10(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            array.splice(i,1)
            i--
        }
    }
    console.log(array)
    return array
}

function select(array, condition) {
    switch (condition) {
        case pairs:
            pairs(array)
            break;
        case gt15:
           gt15(array)
            break;
        case lt10:
            lt10(array)
            break;
        default:
            break;
    }
    return array
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]
console.log(2 % 2)
// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])
values = [1, 2, 3, 5, 7, 13, 17, 23, 29]
// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])
values = [1, 2, 3, 5, 7, 13, 17, 23, 29]
// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])