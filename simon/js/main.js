//Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
//Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;


// variabili
var numArray = [];
var randomNumb;

// funzione per generare numeri casuali
function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// ciclo per generare numeri casuali
while (numbArray.length < 5) {
  randomNumb = getRandomInt(1, 101);
  if (numbArray.includes(randomNumb) == false) {
    numbArray.push(randomNumb);
    alert(numbArray);
  }

// 