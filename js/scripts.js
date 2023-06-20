const word = prompt();
let reverseWord = reverse(word);

if (word == reverseWord) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

