var nombre = document.getElementById("nombre")
var precio = document.getElementById("precio")
var inventario = document.getElementById("inventario")
var error = document.getElementById("error")

var form = document.getElementById('formulario');
form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Completar el Campo Nombre <br>')
    }
    if(precio.value === null || precio.value === ''){
        mensajesError.push('Completar el Campo Precio <br>')
    }
    if(inventario.value === null || inventario.value === ''){
        mensajesError.push('Completar el Campo Inventario <br>')
    }
    error.innerHTML = mensajesError.join('');
});


