const myButton = document.getElementById('click-me')

function getRndInteger() {
    console.log(Math.floor(Math.random() * (6 - 1) ) + 1)
    return Math.floor(Math.random() * (6 - 1) ) + 1;
}
myButton.addEventListener('click', function(){
    const evenOrOdd = prompt('Inserisci pari o dispari')
    console.log(evenOrOdd)
    const insertNumber = prompt('Inserisci un numero da 1 a 5')
    console.log(insertNumber)

    getRndInteger()

    
});
