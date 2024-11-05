// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
let suma = 0
let grande = 0;
let pequeño = array[0]
for (let i = 0; i < array.length; i++)
{
    suma+=array[i]
    if (array[i]>grande)
    {
        grande = array[i]
    }
    if (array[i]< pequeño)
    {
        pequeño = array[i]
    }

}

let media = suma / array.length
console.log(`La suma es ${suma}, el número más grande es ${grande}, el número más pequeño es ${pequeño} y la media es ${media}`)
}



doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])