/*
const botones = document.querySelectorAll('#contenedor img');
const btnAnterior = botones[0];
const btnSiguiente = botones[1];
*/

const btnAnterior = document.querySelector('img[alt="anterior"]');
const btnSiguiente = document.querySelector('img[alt="siguiente"]');
const txt2 = document.querySelector('#txt2');

const marcas = [ 
                'Hermès', 'Zara', 'Boss', 'Aeropostale',
                'Tommy', 'Hollister', 'Kingpin', 'Old Navy',
                'YSL'
               ];
console.log(marcas);

let posicion = 1;
const largo = marcas.length;

/* escribimos dentro del span */
txt2.innerText = marcas[posicion];

btnSiguiente.addEventListener(
        'click',
        function()
        {
            posicion++;
            if( posicion >= largo ){
                posicion = 0;
            }
            txt2.innerText = marcas[posicion];
        }
);
btnAnterior.addEventListener(
        'click',
        function(){
            posicion--;
            if( posicion < 0 ){
                posicion = largo - 1;
            }
            txt2.innerText = marcas[posicion];
        }
);