function calculate (data) {
    let menor = data[0];
    let mayor = 0;
    let sumaTotal = 0;
    let anterior = 0
    let actual = 0
    for (let i = 0; i <data.length; i++){
        const element = data[i]
        console.log(`Elemento ${element}`)
        anterior = data[i -1]
        actual = data [i]
        if(actual < anterior && i > -1){
            menor = actual;
        }
        if(actual > anterior){
            mayor = actual;
        }
        sumaTotal +=element;
    }

    let media = sumaTotal/data.length;

    console.log(`La media es ${media}`)
    console.log(`El total es ${sumaTotal}`)
    console.log(`El mayor es ${mayor}`)
    console.log(`El menor es ${menor}`)

}

let valores = [1,10,20,30,40,50]

calculate(valores);