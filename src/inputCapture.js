import {large, small} from './generator.js'

// USER INPUTS
const userDigit = document.getElementById('digit')
const userTens = document.getElementById('tens')
const userHundreds = document.getElementById('hundreds') 
const helperTen = document.getElementById('helper-tens');
const helperHundred = document.getElementById('helper-hundreds');


let value = 0;

const answer = {
  // validation per input
  digits: small.digit + large.digit,
  tens: small.tens + large.tens,
  hundreds: null,

  // validation for answer
  bigTotal: checkNumber(large.tens, large.digit),
  smallTotal: checkNumber(small.tens, small.digit),
  final() {console.log(this.bigTotal);}
};

console.log(answer.bigTotal);
console.log(answer.final());

/*
user stories
large + small < 10
large.digit + small.digit > 10 (pass 1 to tens)
large.tens + small.tens > 10 (pass 1 to hundreds)
*/

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

function checkNumber(tens, units) {
  if (tens === null) {
    return units
  }
  else {
  // Convert tens and units from numbers to strings
  let tenString = tens.toString();
  let unitString = units.toString();

  // Concat both strings 
  tenString.concat(tenString += unitString)
  
  // return number to answer object
  return Number(tenString)
  }
  /*
  tens
  digit
  if tens is null {do this}
  else {return Number(`${tens} + `${units}`}
  */
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


  Account for
  Single digit numbers
  An answer under 10


*/