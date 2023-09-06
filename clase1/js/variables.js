/*
    para declarar variables utilizamos
    la palabra reservada "let"
*/
let numero = 10;
let frase = 'Hola Mundo';
/*
    para declarar constantes utilizamos
    la palabra reservada "const"
*/
const nombre = 'marcos';

/* escribimos en el documento */
//document.write( numero );
/* escribimoe en la consola de javascript del browser */
console.log( numero );
console.log( frase );
console.log( nombre );

/* sobreescribimos el valor de las variables */
numero = 536;
frase = 'Jsvascript desde 0';
console.log( numero );
console.log( frase );

/* no se puede sobreescribir una constante
nombre = 'Rick Sánchez';
  */

numero = 'manzana';
console.log( numero );