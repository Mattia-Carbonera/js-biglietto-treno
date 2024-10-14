/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare 
centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// RACCOLTA DATI
const kilometers = prompt("Quanti Km deve percorrere?");
const passengerAge = prompt("Quanti anni ha?");
let finalPrice;

//ELABORAZIONE
//calcolo il prezzo
let ticketPrice = kilometers * 0.21;

//calcolo lo sconto per i minorenni
let discountUnder = (ticketPrice / 100) * 80;

//calcolo lo sconto per gli over 65
let discountOver = (ticketPrice / 100) * 60;

//seleziono il prezzo
if (passengerAge >= 18 && passengerAge < 65) {
  finalPrice = ticketPrice;
} else if (passengerAge < 18) {
  finalPrice = discountUnder;
} else if (passengerAge >= 65) {
  finalPrice = discountOver;
}

//OUTPUT
console.log(finalPrice.toFixed(2) + "€");
