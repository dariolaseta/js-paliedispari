// Palindrome

const userWord = prompt("Inserisci una parola:");
let reversedUserWord = reverse(userWord);

function reverse(normalUserWord){
    let reversedWord = "";
    for(let i = normalUserWord.length -1; i >= 0; i--){
        reversedWord += normalUserWord[i];
    }

    return reversedWord;
}

if(userWord == reversedUserWord){
    console.log("La parola è palindroma.");
}else if(userWord != reversedUserWord){
    console.log("La parola non è palindroma.")
}else{
    console.log("La parola inserita non è corretta.");
}

// Odd or even

const userNumber = parseInt(prompt("Scegli un numero da 1 a 5:"));
let comNumber = randomNumber(1, 5);
let numberSum = sum(userNumber, comNumber);
console.log("Il tuo numero è " + userNumber);
console.log("Il numero del pc è " + comNumber);
console.log("La somma dei due numeri è " + numberSum);

function randomNumber(min, max){
    let comNumber = Math.floor(Math.random() * max) + min;
    return comNumber;
}

function sum(firstNumber, secondNumber){
    if(isNaN(firstNumber)){
        console.log("Errore, non hai inserito un numero.");
    }else{
        const sum = firstNumber + secondNumber;
        return sum;
    }
}

if(numberSum % 2 == 0){
    console.log("È pari, hai vinto!");
}else if (isNaN(numberSum)){
    console.log("Errore, non hai inserito un numero.");
}else{
    console.log("È dispari, hai perso!");
}