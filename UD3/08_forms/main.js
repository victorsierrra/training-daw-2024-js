window.onload = function() {
    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue
    let condiciones = document.getElementById('condiciones')
    let privacidad = document.getElementById('privacidad')
    let boton = document.getElementById('submit')
    boton.disabled = true;


    condiciones.onchange = function() {
        checkConditionsAndPrivacy(condiciones, privacidad, boton);
    };
    privacidad.onchange = function() {
        checkConditionsAndPrivacy(condiciones, privacidad, boton);
    };
    
}

function changeValue(e) {
     console.log('changed' + e.target.value)
}

function checkConditionsAndPrivacy(condiciones, privacidad, boton) {
    if (condiciones.checked && privacidad.checked) {
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }
}