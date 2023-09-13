//ubicamos elementos dentrop del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//creamos función de control
function countdown()
{
    //creamos objetos de fecha
    const ahora = new Date();
    const final = new Date(2023, 9, 13);
    console.log(ahora);
    console.log(final);
    //diferencia entre fechas
    let diferencia = final - ahora;
    /* tiempo expresado en milisegundos */
    console.log(diferencia);

    //obtenemos tiempo expresado en segundos, minutos, horas y días
    // expresado en segundos
    let segundos = Math.trunc( diferencia / 1000 );
    console.log(segundos);

    // expresado en minutos
    let minutos = Math.trunc( segundos / 60 );
    console.log(minutos);
    
    // expresado en horas
    let horas = Math.trunc( minutos / 60 );
    console.log( horas );

    // expresado en días
    let dias = Math.trunc( horas / 24 );
    console.log( dias );


    /* calculamos los restantes */
    horas = horas % 24;
        console.log( horas );
    minutos = minutos % 60;
        console.log( minutos );
    segundos = segundos % 60;
        console.log( segundos );


    /* imprimimos en los span */
    txtSegundos.innerText = segundos;
    txtMinutos.innerText = minutos;
    txtHoras.innerText = horas;
    txtDias.innerText = dias;
}

//invocamos la función
countdown();
//actualizamos el llamado a la función
setInterval( countdown, 1000 )
