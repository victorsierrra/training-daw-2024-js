window.onload = function() {
    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue
    let condiciones = document.getElementById('condiciones')
    let privacidad = document.getElementById('privacidad')
    let boton = document.getElementById('enviar')
    if (condiciones.checked == true && privacidad.checked == true )
    {
        boton.disabled = true
    }
    else {
        boton.disabled = false
    }
    
}

function changeValue(e) {
     console.log('changed' + e.target.value)
}