//ubicamos elementos dentro del DOM
//const caja = document.getElementById('caja');
const caja = document.querySelector('#caja');
const picker = document.querySelector('#picker');


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
/*  un sóla función */
function pintar( codigoColor, nombreColor )
{
    caja.style.backgroundColor = codigoColor;
    caja.innerText = nombreColor;
}


function colorPicker()
{
    //obtenemos el valor seleccionado por el usuario
    //let valor = picker.value;
    //pintamos la caja 
    pintar( picker.value, picker.value );

}
    