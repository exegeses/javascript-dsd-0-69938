const txt = document.querySelector('#txt');

//declaramos función de control
function dosDigitos( numero )
{
    if( numero < 10 ){
        numero = '0'+ numero;
    }
    return numero;
}

function actualizarReloj()
{
    //creamos un objeto de fecha
    const fecha = new Date();
    console.log( fecha );

    //obtenemos el número de las horas
    let horas = fecha.getHours();
    console.log(horas);

    //obtenemos el número de los minutos
    let minutos = fecha.getMinutes();
        minutos = dosDigitos( minutos );
    console.log(minutos);

    //obtenemos el número de los segundos
    let segundos = fecha.getSeconds();
        segundos = dosDigitos( segundos );
    console.log(segundos);

    //imprimimos dentro dle span
    txt.innerText = horas +':'+ minutos +':'+ segundos
}

//invocamos la función
actualizarReloj();

/* actualizamos  el llamdo a la función */
setInterval( actualizarReloj, 1000 );