// 1 - Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// elenco iscritti con chiediMail
var emailIscritti = ["f.iacono@gmail.com", "marco.milano@gmail.com", "filippo@hotmail.it", "anna@gmail.com"];
console.log(emailIscritti);

// Chiedi all’utente la sua email
var chiediMail = prompt("Inserisci la tua email");
console.log(chiediMail);

// controlla che sia nella lista di chi può accedere
if (chiediMail == emailIscritti) {
  console.log("puoi accedere");
} else {
  console.log("non puoi accedere");
}
// stampa un messaggio appropriato sull’esito del controllo
