const assert = require('assert').strict;

function nextPairs(value) {
    let numeroUno
    let numeroDos
    if (value%2 === 0){
        numeroUno = value - 2
        numeroDos = value + 2
    }
    else{
        numeroUno = value - 1
        numeroDos = value + 1
    }

    return [numeroUno,numeroDos]
}

assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])