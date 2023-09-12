//const nombreID0 = document.getElementById('nombreID');
const nombreID = document.querySelector('#nombreID');
//const parrafo = document.getElementsByClassName('parrafo');
const parrafo = document.querySelectorAll('.parrafo');
console.log(parrafo);
//const h1 = document.getElementsByTagName('h1');
//console.log(h1[0].innerText);
const h1 = document.querySelector('h1');

//nombreID0.innerText = 'el id 0'
nombreID.innerText = 'el id'
parrafo[2].style.backgroundColor = 'pink';
h1.style.backgroundColor = 'blue';


/* botones */
const botones = document.querySelectorAll('nav button');
console.log(botones)

btn1 = botones[0];
btn2 = botones[1];

btn1.addEventListener(
        'click',
        function(){
            nombreID.innerText = 'hiciste click';
            nombreID.style.fontSize = '32px';
        }
);