const phantom = document.querySelector('img[alt="phantom"]');
const body = document.querySelector('body');

//flag
let direccion = 'derecha';
let posX = 0;
let posXBG = 0;


function moverX()
{

    if( direccion == 'derecha' ){
        posX++; //posX = posX + 1; 
        posXBG = posX / -2;
    }else{
        posX--;
        posXBG = posX / -2;
    }
    console.log(posXBG);

    console.log(posX);
    //movimiento
    //phantom.style.left = posX +'px'; // consumew demasiados recursos
    //transform: translateX();
    phantom.style.transform =  'translateX('+ posX +'px)';
    body.style.backgroundPosition = posXBG +'px -500px'; 


    if( posX >= 680 ){
        direccion = 'izquierda';
    }
    if( posX <= 0 ){
        direccion = 'derecha';
    }
}

setInterval( moverX, 20);