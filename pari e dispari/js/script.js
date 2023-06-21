const myButton = document.getElementById('click-me')

function getRndInteger() {
    //console.log(Math.floor(Math.random() * (6 - 1) ) + 1)
    return Math.floor(Math.random() * (6 - 1) ) + 1;
}
function itsEvenOrOdd(sum) {
    if (sum % 2 === 0) {
        console.log('è pari')
        return 'pari'
    }else {
        console.log('è dispari')
        return 'dispari'
    }
}
myButton.addEventListener('click', evenOrOdd);
    let sum = 0;
    function evenOrOdd() {
        const userChoice = prompt('Inserisci pari o dispari:')
        console.log(userChoice)
        if (userChoice.toLowerCase() == 'pari' || userChoice.toLowerCase() == 'dispari') {
        console.log('Ok sai scrivere')
        }else{
            return alert('Errore')
        }
        //return itsEvenOrOdd(userChoice);
    


    const userNumber = prompt('Inserisci un numero da 1 a 5')
    console.log(userNumber)
    if (userNumber > 1 && userNumber <= 5){
        console.log('ok')
    }else {
        return alert('Errore')
    }
    
    const numberRandomPc = getRndInteger();
    console.log(numberRandomPc)
    sum = numberRandomPc + parseInt(userNumber);
    console.log(sum)
    
    if (itsEvenOrOdd(sum) == userChoice){
        console.log('hai vinto')
    }else {
        console.log('hai perso')
    }

}
