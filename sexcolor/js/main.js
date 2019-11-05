//Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
//Sulla pagina html deve apparire “Ciao <nome>“,
//il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

// variabili
var name = prompt('Scrivi il tuo nome');
var sex = prompt('Specifica il tuo sesso');
var element = getElementById('user');

// condizioni
if (sex = maschio) {
  element.className = 'male' + 'Ciao' + name;
} else if (sex = femmina) {
  element.className = 'female' + 'Ciao' + name;
}
