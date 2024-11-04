// Crear un objeto Persona con los siguientes 
// datos (nombre, apellidos, edad, género, dirección)

const assert = require('assert').strict;

function createPerson(nombre, apellido, años, genero, direccion) {
    var person = 
        {
            name: nombre,
            lastname: apellido,
            years: años,
            gender: genero,
            address: direccion
        }
    return person
}

let person = createPerson('John', 'Foo', 35, 'male', 'fake stree 123')
assert.strictEqual(person.name, 'John')
assert.strictEqual(person.lastname, 'Foo')