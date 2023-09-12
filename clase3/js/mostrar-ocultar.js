const caja = document.querySelector('#caja');

//declaramos función/es de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}

function mostrarOcultar()
{
    //si se ve
    if( caja.style.display == 'block' ){
        //que no se vea
        //caja.style.display = 'none';
        ocultar();
    }
    else{  //si no se ve
        // que se vea
        //caja.style.display = 'block';
        mostrar()
    }    
    
}