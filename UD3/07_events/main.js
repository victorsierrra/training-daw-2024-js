window.onload = function(e) {
    console.log('documento cargado')
}

function onClick1(){
    let parrafo = document.getElementById('contenidos_1')
    let enlace = document.getElementById('enlace_1')
    console.log(parrafo)
    if (parrafo.style.display == 'none')
    {
        enlace.innerText = 'Ocultar contenidos'
        parrafo.style.display = 'block'
    }
    else {
        enlace.innerText = 'Mostrar contenidos'
        parrafo.style.display = 'none'
    }
}

function onClick2(){
    let parrafo = document.getElementById('contenidos_2')
    let enlace = document.getElementById('enlace_2')
    console.log(parrafo)
    if (parrafo.style.display == 'none')
    {
        enlace.innerText = 'Ocultar contenidos'
        parrafo.style.display = 'block'
    }
    else {
        enlace.innerText = 'Mostrar contenidos'
        parrafo.style.display = 'none'
    }
}

function onClick3(){
    let parrafo = document.getElementById('contenidos_3')
    let enlace = document.getElementById('enlace_3')
    console.log(parrafo)
    if (parrafo.style.display == 'none')
    {
        enlace.innerText = 'Ocultar contenidos'
        parrafo.style.display = 'block'
    }
    else {
        enlace.innerText = 'Mostrar contenidos'
        parrafo.style.display = 'none'
    }
}