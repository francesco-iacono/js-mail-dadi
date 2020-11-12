// 1 - Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// elenco iscritti con chiediMail
var mailingList = ["f.iacono@gmail.com", "marco.milano@gmail.com", "filippo@hotmail.it", "anna@gmail.com"];
console.log(mailingList);

// Chiedi all’utente la sua email
var chiediMail = prompt("Inserisci la tua email");
console.log(chiediMail);

// controlla che sia nella lista di chi può accedere
var result = false;
for (var i = 0; i < mailingList.length; i++) {
  if (chiediMail == mailingList[i]) {
    result = true;
  }
}
// stampa un messaggio appropriato sull’esito del controllo
if (result === true) {
  console.log("puoi accedere");
} else {
  console.log("non puoi accedere");
}
