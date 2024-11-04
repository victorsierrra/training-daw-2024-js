'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple() {
  for (let i = 0; i < pilots.length; i++) {
      console.log(pilots[i])
  }
}
function iterateForEach() {
  pilots.forEach(function (value) {
      console.log(value)
  })
}
function mapIds() {

  // let ids = []
  // for (let pilot of pilots){
  //     console.log(pilot)
  //     ids.push(pilot.id)
  // }
  // return ids;

  // let res = pilots.map(function (value, index, array) {
  //     //return value.name
  //     return `${value.name}: `
  return pilots.map((value) => value.id)
}

function rebels() {
  let result = pilots.filter((value) => value.faction === 'Rebels')
  return result
}
function totalFaction(faction) {
  let result = pilots.filter((value) => value.faction === faction)
  return result.length
}
function avgYears(faction) {
  let suma = 0
  let selectedFaction = pilots.filter((value) => value.faction === faction)
  // selectedFaction.forEach(function (pilot) {
  //     suma += pilot.years
  // })
  suma = selectedFaction.reduce((pv, cv) => pv + cv.years, 0)
  let avg = suma / selectedFaction.length
  return avg

}

// use console.log
iterateSimple()
iterateForEach()
try {
  assert.deepStrictEqual(mapIds(), [2,8,40,66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

  assert.deepStrictEqual(totalFaction('Rebels'), 2)

  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error)
}