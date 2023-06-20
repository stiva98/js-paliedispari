const word = prompt();
let reverseWord = reverse(word);

if (word == reverseWord) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function reverse(array) {
    let reverseWord = '';

    let i = array.length - 1;

    while (i >= 0) {
        reverseWord += array[i];
        i--;
    }

    return reverseWord;
}