/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const tipoNumero = prompt('Pari o dispari?', 'pari');
const number = parseInt(prompt('Ora scegli un numero da 1 a 5', 2));
console.log(tipoNumero, number);

let numeroCasuale = numRandom(1,5);
console.log('Il numero generato dal computer è', numeroCasuale);

// Generare il numero random compreso tra 1 e 5 e si inserisce in una variabile
function numRandom(min, max){
    const newRandom = Math.floor(Math.random() * (max - min + 1) + min);
    return newRandom;
}

const somma = number + numeroCasuale;
const winner = pariDispari(tipoNumero, somma);
console.log(winner);

function pariDispari(tipo, risultato){
    
    if(risultato % 2 === 0 && tipo === 'pari'){
        console.log("Il risultato è", risultato, "e hai vinto!");
        return true;
    }

    if(risultato % 2 === 1 && tipo === 'dispari'){
        console.log("Il risultato è", risultato, "e hai vinto!");
        return true;
    }
    console.log("Il risultato è", risultato, "e hai perso.");
    return false;
}

// function pariDispari(){

// }
