//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

/*
    mostrar la fecha actual
    formato 08/09/2023
*/
// creamos un objeto de fecha
const fecha = new Date();
console.log( fecha );

//obtenemos el número de día de mes 
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0' + diaMes;
} 
console.log( diaMes );

//obtenemos el número de mes actual 
let mes = fecha.getMonth()+1;
if( mes < 10 ){
    mes = '0' + mes;
} 
console.log( mes );

//obtenemos el número de año actual
let anio = fecha.getFullYear();
console.log( anio );

//imprimimos dentro del span txt
// txt.innerText = diaMes +'/'+ mes +'/'+ anio;

// interpolación de cadenas  (backtick)
txt.innerText = `${diaMes}/${mes}/${anio}`;
