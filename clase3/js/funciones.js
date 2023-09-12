//ubicamos elementos dentro del DOM
//const caja = document.getElementById('caja');
const caja = document.querySelector('#caja');

//declaramos funciones de control
function pintarRosa()
{
    caja.style.backgroundColor = 'pink';
    caja.innerText = 'Rosa';
}

function pintarCeleste()
{
    caja.style.backgroundColor = 'lightblue';
    caja.innerText = 'Celeste';
}

function pintarVerde()
{
    caja.style.backgroundColor = 'rgb(0, 148, 57)';
    caja.innerText = 'Verde';
}


    