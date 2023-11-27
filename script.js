// console.log("hello mom");

// //make var to represent the value of html here

// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const text = document.getElementsByClassName('.text');
// const input = document.getElementById('inp');

// console.log({
//     h1,
//     p,
//     text,
//     input,
// });

// h1.innerHTML = "te <br>sorprenderemos <br>antes <br><span>krk</span>";
// // be carefull with this one
// h1.innerText = "im using innerText";
// // better this one if you wanna change something

// h1.getAttribute('screen');
// // help to read an attribute of an element
// console.log(h1.getAttribute('screen'));
// // also can read class etc

// h1.setAttribute('class', 'rojo')
// // modify attributes you have to write the name and
// // then the value

// //js has more power than html to set value etc

// h1.classList.add('blanco');
// //add a class to a label

// h1.classList.remove('rojo');
// //remove a class

// h1.classList.contains('');
// //return true of false depending in the class that you ask

// // h1.classList.toggle('');
// // //add if that class doesnt exist or remove if that exist

// //input.value = '3g'

// document.createElement('img');
// //Make content from js to html

// const img = document.createElement('img');
// //add a element from js to html
// img.setAttribute('src', 'https://images.pexels.com/photos/8859079/pexels-photo-8859079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
// console.log(img);

// const h1 = document.querySelector('h1');
// const input1 = document.querySelector('#calculate1');
// const input2 = document.querySelector('#calculate2');
// const button = document.querySelector('.button');
// const pResult = document.querySelector('#result');
// const buttonR = document.querySelector('.buttonRest');
// we have to select them and then listen the events

// input1.placeholder = 'hi';
//you can change using the var for the label + the
//attribute

// function listenBtn(){
//     const sumInput = Number(input1.value) + parseInt(input2.value);
//     pResult.innerText = "Result: " + sumInput;
//     //console.log("Listening a button");
// }

// function listnRestBtn (){
//     const restInput = Number(input1.value) - Number(input2.value);
//     pResult.innerHTML = "Result rest: " + restInput;
// }

// function listenInput(){
//     console.log('Changing the input');
// }

// -------------- addEventListener ---------
//how to listen and do events from js to html
//you need send to arguments 1 name of element
//2 code js without () in argument

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculate1');
const input2 = document.querySelector('#calculate2');
const input3 = document.querySelector('.input3');
const button = document.querySelector('.button');
const pResult = document.querySelector('#result');
const buttonR = document.querySelector('.buttonRest');
const form = document.querySelector('.form');


//button.addEventListener('click', btnOnClick);
form.addEventListener('submit', btnOnClick);

input3.addEventListener('keydown', cantTypeP);

function cantTypeP(event){
    if (event.key === 'p') {
        pResult.innerHTML = "Oe no puedes escribir P"
    }
}

function btnOnClick(event){
    console.log({event});
    event.preventDefault();
    //cancel autoreload with the parameter event
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}


//<form></form>Forms interpretate the buttons as submit
// insted of the normal use of a button
