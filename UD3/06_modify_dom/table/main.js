window.onload = function (e) {
    const table = document.querySelector('thead').querySelector('tr')
    console.log(table)
    let th = document.createElement('th')
    th.innerText = 'Acciones'
    table.appendChild(th)
}
let id = 0
function onClick() {

    id++
    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = id
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    td = document.createElement('td')
    let enlace = document.createElement('a')
    enlace.innerText = 'Enlace'
    enlace.href = "http://localhost/edit/id"
    tr.appendChild(td)
    td.appendChild(enlace)

    tbody.appendChild(tr)
    console.log('add')
}