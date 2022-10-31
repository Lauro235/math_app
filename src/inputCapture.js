import {large, small} from './generator.js'

console.log('this is inputCapture.js ', small);

// USER INPUTS
const userDigit = document.getElementById('digit')
const userTens = document.getElementById('tens')
const userHundreds = document.getElementById('hundreds') 
const helperTen = document.getElementById('helper-tens');
const helperHundred = document.getElementById('helper-hundreds');


let value = 0;

const answer = {
  digits: small.digit + large.digit,
  tens: small.tens + large.tens + helperTen,
  hundreds: helperHundred, 
}

const validateUserInput = {
  digit() {
    if (answer.digits === value) {
      console.log("It's a match");
      if (value > 9) {
        let numberFragmentArray = breakApartTwoDigitNumber(value)
        userDigit.value = numberFragmentArray[1];
        helperTen.value = numberFragmentArray[0];
      }
      userTens.removeAttribute('disabled');
      userTens.focus();
    }
  },
  tens() {
    console.log('tens being analysed');
  }
}

// REUSABLE CODE =====================

function updateValue(e) {
  //
  value = Number(e.target.value);
    console.log(value);
}

// not pure code...

function breakApartTwoDigitNumber(num) {
    console.log('this is the number: ', num);
    num = num.toString();
    num = num.split('')
    return num;
}

// ====================================



// Event listeners

userDigit.addEventListener('input', updateValue);
userDigit.addEventListener('keyup', validateUserInput.digit);
userTens.addEventListener('input', updateValue);
userTens.addEventListener('keypress', validateUserInput.tens);




// Notes

/*
  The user matches a result
  we convert number to string (in order to update document)
*/