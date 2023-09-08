//ubicamos elemento dentro del DOM
const contenedor = document.getElementById('contenedor');

/*
    hacer una pregunta al usuario
    almacenar respuesta en memoria
*/

//alert('texto informativo');
const respuesta = prompt('¿que selección ganó la copa Qatar 2022?');

if ( respuesta.toLowerCase() === 'argentina' ){
    //bloque a ejecutar si la condición es true
    //contenedor.innerText = '¡Correcto!';
    contenedor.innerHTML = '¡Correcto! <br> <img src="imgs/ok.png">';
}
else{
    //bloque a ejecutar si la condición es false
    contenedor.innerHTML = '¡Incorrecto! <br> <img src="imgs/error.png">';
}