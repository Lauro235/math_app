const userDigit = document.getElementById('digit')
const userTens = document.getElementById('tens')
const userHundreds = document.getElementById('hundreds') 

const helperDigit = document.getElementById('helper-digit');
const helperTen = document.getElementById('helper-ten');

let digit;
let tens;
let hundreds;

let value = 0;

function updateValue(e) {
  //
  value = e.target.value
    console.log(value);
}
function validateDigit(e) {
  if (e.key === 'Enter') {
      console.log('enter clicked');
      console.log('this is the value: ', value);
    }
}

userDigit.addEventListener('input', updateValue);
userDigit.addEventListener('keypress', validateDigit);

    
