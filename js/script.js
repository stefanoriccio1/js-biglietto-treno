// Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
var numeroKm = parseInt(prompt('Quanti Km devi percorrere?'));
console.log (numeroKm);
 // e l’età del passeggero.

var anni = parseInt(prompt('Quanti anni hai?')) ;
console.log (anni);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
var euroKm = 0.21;
var prezzoKm = parseFloat(numeroKm * euroKm).toFixed(2);
console.log (prezzoKm);
// ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
var over = 65
var under = 18

if (anni >= over) {
  console.log (parseFloat(prezzoKm - ((prezzoKm * 40) / 100)).toFIxed(2))
}
else if (anni < under){
  console.log (parseFloat(prezzoKm - ((prezzoKm *20) / 100)).toFIxed(2));
}
else {
  console.log(parseFloat(prezzoKm).toFixed(2));
}

// conclusione
