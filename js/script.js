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

