// for ( inicio; condicion; incremento )
for( let n = 1; n < 15; n++ ){
    document.write( n + '<br>' );
}

const lista = document.querySelector('#lista');
const sabores = [
    'Frutilla', 'Chocolate',
    'Menta Granizada', 'Dulce de leche',
    'Vainilla', 'Maracuya',
    'Crema Americana', 'Limón',
    'Cereza', 'Lemon Pie', 'Crema Cookie',
    'Pistacchio'
];
const cantidad = sabores.length;

let contenido = '';
for( let i = 0; i < cantidad; i++ )
{
    contenido = contenido + `<li> ${sabores[i]} </li>`;
}

lista.innerHTML = contenido;