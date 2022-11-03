import { generateRandomNumber, createOperands, randomEquation } from './generator.js'
import { updateHTML, clearValues } from './updateHTML.js';

const audio = new Audio('./assets/twinkle.mp3');

// has to be at top level cannot be nested

let { randomNumberArray, total, bottomOperand, topOperand } = randomEquation();

updateHTML( bottomOperand, topOperand );

let success = false;

function isSuccess() {
  success = true;
  // console.log('Correctly added numbers')
  audio.play();

  clearValues();
}


function validateDigit(
  currHelperElem,
  nextHelperElem,
  digitIndex,
  currUserDigitElem,
  nextUserDigitElem,
  event) {
    console.log('validation function running');
  
  const value = event.target.value;
  
  const currHelperValue = currHelperElem ?. value ?? 0;

  let correctSum = 0;
  if (nextHelperElem) { 
    correctSum = topOperand[digitIndex] + bottomOperand[digitIndex];
  }
  correctSum += Number(currHelperValue);

// check individual user inputs match correctSum

  if (Number(value) === correctSum) {
    let arr = value.split('');
    if (arr.length < 2) {
      arr = ['', arr[0]];
    }

    currUserDigitElem.value = arr[1];

    // if next helper is not null then...

    if (nextHelperElem) {
      nextHelperElem.value = arr[0];
    }
    userAnswerArray.unshift(arr[1]);

    if (Number(userAnswerArray.join('')) === total) {
      isSuccess(userAnswerArray);
      ({ randomNumberArray, total, bottomOperand, topOperand } = randomEquation());
      updateHTML( bottomOperand, topOperand );
      userAnswerArray = [];
      clearValues();
    } else {
      nextUserDigitElem.removeAttribute('disabled');
      nextUserDigitElem.focus();
    }
  }
}

// USER INPUTS
const userOnes = document.getElementById('ones')
const userTens = document.getElementById('tens')
const userHundreds = document.getElementById('hundreds')
const helperTens = document.getElementById('helper-tens');
const helperHundreds = document.getElementById('helper-hundreds');

let userAnswerArray = [];

userOnes.addEventListener('keyup', validateDigit.bind(null, null, helperTens, 1, userOnes, userTens));
userTens.addEventListener('keyup', validateDigit.bind(null, helperTens, helperHundreds, 0, userTens, userHundreds));
userHundreds.addEventListener('keyup', validateDigit.bind(null, helperHundreds, null, null, userHundreds, null));