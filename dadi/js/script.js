// 2 - Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// generare un numero random da 1 a 6 per pc
var numeroPc = Math.floor(Math.random() * 7);
document.getElementById('computer').innerHTML = numeroPc;
console.log(numeroPc);
// generare un numero random da 1 a 6 per utente
var numeroUtente = Math.floor(Math.random() * 7);
document.getElementById('utente').innerHTML = numeroUtente;
console.log(numeroUtente);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (numeroPc > numeroUtente) {
  // il pc vince
  console.log("Hai perso!!");
  document.getElementById('risultato').innerHTML = "Hai perso!!";
} else if (numeroPc < numeroUtente) {
  // l'utente vice
  console.log("Hai vinto!!");
  document.getElementById('risultato').innerHTML = "Hai vinto!!";
} else {
  // pari
  console.log("Pari");
  document.getElementById('risultato').innerHTML = "Pari";
}
