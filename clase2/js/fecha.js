//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

/*
    mostrar la fecha actual
    formato  Martes 08/09/2023
*/
// creamos un objeto de fecha
const fecha = new Date();
console.log( fecha );

//obtenemos el número ded día de la semana
let diaSemana = fecha.getDay();
/*
    0 -> Domingo
    1 -> Lunes
    2 -> Martes
*/
console.log( 'semana ' + diaSemana);
/* 
if( diaSemana == 0 ){
    diaSemana = 'Domingo';
}
else if( diaSemana == 1 ){
    diaSemana = 'Lunes';
}
else if( diaSemana == 2 ){
    diaSemana = 'Martes';
}
else if( diaSemana == 3 ){
    diaSemana = 'Miércoles';
}
else if( diaSemana == 4 ){
    diaSemana = 'Jueves';
}
else if( diaSemana == 5 ){
    diaSemana = 'Viernes';
}
else {
    diaSemana = 'Sábado';
}
*/

switch( diaSemana ){
    case 0: 
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miércoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';
        break;
}



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
// txt.innerText = diaSemana + ' ' + diaMes +'/'+ mes +'/'+ anio;

// interpolación de cadenas  (backtick)
txt.innerText = `${diaSemana} ${diaMes}/${mes}/${anio}`;
