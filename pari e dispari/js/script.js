const myButton = document.getElementById('click-me')

function getRndInteger() {
    //console.log(Math.floor(Math.random() * (6 - 1) ) + 1)
    return Math.floor(Math.random() * (6 - 1) ) + 1;
}
function itsEven(sum) {
    if (sum % 2 == 0) {
        console.log('è pari')
    }else {
        console.log('è dispari')
    }
}
myButton.addEventListener('click', function(){
    let sum = 0
    const evenOrOdd = prompt('Inserisci pari o dispari')
    console.log(evenOrOdd)
    const insertNumber = prompt('Inserisci un numero da 1 a 5')
    console.log(insertNumber)
 
    const numberRandomPc = getRndInteger();
    console.log(numberRandomPc)
    debugger
    sum = numberRandomPc + insertNumber;
    console.log(sum)
    
    itsEven(sum)
});


