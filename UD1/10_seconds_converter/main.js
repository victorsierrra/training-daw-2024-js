const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    let horas = value / 3600
    horas = Math.round(horas)
    let minutos = value % 3600 / 60
    minutos = Math.round(minutos)
    let segundos = value %60
    segundos = Math.round(segundos)
    return `${horas}:${minutos}:${segundos}`

}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")