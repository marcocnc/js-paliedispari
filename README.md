Esercizi JS
Palindromo - Pari e Dispari
===
## Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
### Logica
1. Due prompt in cui si chiedono i due parametri all'utente;
2. Creare una funzione che genera un numero random che va da 1 a 5;
3. Si fa la somma;
4. Con una funzione si stabilisce se la somma è pari o dispari e si dichiara il vincitore

## Palindromo
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
### Logica
1. Prompt in cui si inserisce una parola;
2. Funzione in cui la parola viene inserita in un array con split;
3. Questo nuovo array verrà invertito con reverse;
4. Infine si fa un join per trasformare questo reverse in una stringa;
5. Ora che la funzione è completa viene richiamata a livello globale;
6. Condizione che andrà a stabilire se la parola rovesciata è uguale alla parola che l'utente inserirà, stabilendo così se è palindroma o no.