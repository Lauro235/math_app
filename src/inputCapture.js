const userDigit = document.getElementById('digit')
const userTens = document.getElementById('tens')
const userHundreds = document.getElementById('hundreds') 

const helperDigit = document.getElementById('helper-digit');
const helperTen = document.getElementById('helper-ten');

let digit;
let tens;
let hundreds;

function updateValue(e) {
    console.log(e.target.value);
}

userDigit.addEventListener('keydown', updateValue);
    
