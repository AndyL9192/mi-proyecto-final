//  capturar la referencia del formulario 
const { json } = require("express");

//referencia al elemento de formulario html
const formGuardar = document.querySelector("#form-guardar")


formGuardar.addEventListener('submit', async (e) => {
    e.preventDefault();

    //se capturan los datos del formulario
    const titulo = document.querySelector('#titulo-post').value;
    const descripcion = document.querySelector('#detalle-post').value;
    const url_imgen = document.querySelector('#url-img').value;
    const fecha = document.querySelector('#fecha').value;

    //enviar al servidor
    const response = await fetch('/publicacion', {
        method: 'post',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({ titulo, descripcion, url_imgen, fecha })
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/"
})