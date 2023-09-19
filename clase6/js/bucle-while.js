let n = 1; //inicio
while ( n < 15 ){
    document.write( n + '<br>');   
    n++; //incremento
}

/* combinando con arrays  */
const sabores = [
                    'Frutilla', 'Chocolate',
                    'Menta Granizada', 'Dulce de leche',
                    'Vainilla', 'Maracuya',
                    'Crema Americana', 'Limón',
                    'Cereza', 'Lemon Pie', 'Crema Cookie',
                    'Pistacchio'
                ];

const lista = document.querySelector('#lista');
// document.write('<ul>');
let i = 0;
const cantidad = sabores.length;

let contenido = '';
while( i < cantidad )
{
    //document.write( '<li>'+ sabores[i] +'</li>');
    contenido = contenido + `<li>${sabores[i]}</li>`;
    i++;
}
// document.write('</ul>');
/*#### escribimos dentro de la lista */
lista.innerHTML = contenido;