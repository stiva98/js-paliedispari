const word = prompt();
let reverseWord = reverse(word);
const myP = document.getElementById('press');

if (word == reverseWord) {
    //console.log('la parola è palindroma');
    myP.innerHTML= 'La parola è palindroma'
} else {
    //console.log('la parola non è palindroma');
    myP.innerHTML= 'La parola NON è palindroma'
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