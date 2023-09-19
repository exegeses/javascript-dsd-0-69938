const txt = document.querySelector('#txt');

/* let nombres = new Array('Vicky', 'Abril', 'Agus', 'Ali', 'Lu', 'Bren', 'Cami');
console.log( nombres ); */

let nombres = ['Vicky', 'Abril', 'Agus', 'Ali', 'Lu', 'Bren', 'Cami'];
console.log( nombres );

/* escribimos en el span */
//txt.innerText = nombres;

txt.innerText = nombres[5];

const diasSemana = [ 
                    'Domingo', 'Lunes', 'Martes', 
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
                    ];
const fecha = new Date();
let nDiaSemana = fecha.getDay();

console.log( diasSemana[ nDiaSemana ] );