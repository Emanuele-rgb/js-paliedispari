var numero1 = parseInt(prompt('Inserisci numero da 1 a 5'));

var scelta = prompt('Inserisci pari o dispari')

var numeroComputer = getRandomNumber(1, 5);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1) ) + min;
}

var somma = numeroComputer + numero1;

var risultatoPariDispari = check(somma)

function controllo(numero) {
  if(numero % 2 == 0){
    return: 'pari';
  }
  return: 'dispari';
}

if(scelta == risultatoPariDispari) {
  console.log('Hai vinto')
}
else {
  console.log('Hai perso')
}



// WARNING: Fine es 1


var parola = prompt('Inserisci parola').trim();
parola = parola.toLowerCase();

var parolaInvertita = giraParola(parola);

if (parola == parolaInvertita) {
  console.log('Palindroma')
}
else {
  console.log('Non palindroma')
}

function giraParola(word) {
  var res = '';

  for (var i = word.length - 1; i>=0; i-- ) {
    res += word[i];
  }
  return res;
}
