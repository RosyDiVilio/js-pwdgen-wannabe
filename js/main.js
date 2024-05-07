const firstName = prompt ('Inserisci nome');
const lastName = prompt ('Inserisci cognome');
const color = prompt ('Inserisci il tuo colore preferito');
let numberOne = prompt ('scegli un numero da 10 a 20');
let numberTwo = prompt ('scegli numero da 0 a 10');

const output = `${firstName}${lastName}${color}${parseInt(numberOne / numberTwo)}`;

console.log(output);

document.getElementById ('pswgen').innerHTML = output; 
