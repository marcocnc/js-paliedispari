// Prompt per chiedere la parola

const parola = prompt('Scegli una parola');

function palindromo(string){
    const parolaSplittata = string.split('');
    const reverse = parolaSplittata.reverse();
    const reverseJoined = reverse.join('');
    return reverseJoined;
}

let parolaReversed = palindromo(parola);

if(parolaReversed == parola){
    console.log('La parola è palindroma');
}else{
    
    console.log('La parola non è palindroma');
}