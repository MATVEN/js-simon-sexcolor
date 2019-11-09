//Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
//Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;


// variabili
var numArray = [];

// funzione per generare numeri casuali
function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function casualNumb(size) {
  var randomNumber = [];
  while (randomNumber.length < size) {
    var random = getRandomInt(1,100);
      if (!randomNumber.includes(random)) {
        randomNumber.push(random);
    }
  }
  return randomNumber;
}

function comparator(number,array) {
  var flag = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == number) {
      flag = true;
      console.log(i);
    }
  }
  return flag;
}

  // l'utente dovrà inserire i 5 numeri casuali
  function checkIfEntered(numberUser) {
    var check = false;
    for (var i = 0; i < numArray.length; i++) {
      if (numberUser == numArray[i]) {
        check = true;
      }
    }
    return check;
  }

    var casual = casualNumb(5);
    console.log(casual);

    // alert
    alert(casual);

    // imposto il tempo da far trascorrere prima che l'utente possa rispondere
    setTimeout(game, 30000);

    // check del software dei numeri inseriti
    function game() {
      var arrayFound = [];
      while (numArray.length < casual.length) {
        var numero = parseInt(prompt('Inserisci uno dei cinque numeri memorizzati'));
        if (checkIfEntered(numero) != true) {
          numArray.push(numero);
          if (comparator(numero,casual)) {
            arrayFound.push(numero);
          }
        }else {
          alert('Numero già inserito!');
        }
      }
      if (arrayFound.length != 0) {
        console.log('Indovinato!' + arrayFound.length + ' numeri, ovvero: ' + arrayFound);
      } else {
        console.log('Non hai indvinato nessun numero');
      }
      console.log(arrayFound);
      console.log(arrayFound.length);
    }
