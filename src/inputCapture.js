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
  tens: small.tens + large.tens,
  hundreds: null, 
}

const validateUserInput = {
  digit() {
    if (answer.digits === value) {
      console.log("Units are a match");
      if (value > 9) {
        let numberFragmentArray = breakApartTwoDigitNumber(value)
        userDigit.value = numberFragmentArray[1];
        helperTen.value = Number(numberFragmentArray[0]);
        answer.tens += Number(helperTen.value);
      }
      userTens.removeAttribute('disabled');
      userTens.focus();
    }
  },
  tens() {
    console.log('This is the answer object: ',answer.tens);
    console.log('This is the user value: ', value);
    if (answer.tens === value) {
      console.log("Tens are a match");
      if(value > 9) {
        let numberFragmentArray = breakApartTwoDigitNumber(value)
        userTens.value = numberFragmentArray[1];
        helperHundred.value = Number(numberFragmentArray[0])
        answer.hundreds = Number(helperHundred.value)
        userHundreds.removeAttribute('disabled');
        userHundreds.focus();
      }
    }
    // console.log('tens being analysed');
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
userTens.addEventListener('keyup', validateUserInput.tens);




// Notes

/*
  The user matches a result
  we convert number to string (in order to update document)
*/