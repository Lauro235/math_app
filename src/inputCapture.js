import { generateRandomNumber, createOperands, randomEquation, topOperand, bottomOperand, total } from './generator.js'
import { updateHTML, clearValues } from './updateHTML.js';

const audio = new Audio('./assets/twinkle.mp3');

let success = false;

function isSuccess() {
  success = true;
  console.log('Correctly added numbers')
  console.log(userAnswerArray);
  audio.play();

  clearValues();
}

if (success === true) {
  let { randomNumberArray, total, bottomOperand, topOperand } = randomEquation();
  console.log(randomNumberArray);
  success = false;
}

function validateDigit(
  currHelperElem,
  nextHelperElem,
  digitIndex,
  currUserDigitElem,
  nextUserDigitElem,
  event) {

  const value = event.target.value;
  const currHelperValue = currHelperElem ?. value ?? 0;
  let correctSum = 0;
  if (nextHelperElem) { 
    correctSum = topOperand[digitIndex] + bottomOperand[digitIndex];
  }
  correctSum += Number(currHelperValue);

  if (Number(value) === correctSum) {
    let arr = value.split('');
    if (arr.length < 2) {
      arr = ['', arr[0]];
    }

    currUserDigitElem.value = arr[1];
    if (nextHelperElem) {
      nextHelperElem.value = arr[0];
    }
    userAnswerArray.unshift(arr[1]);

    if (Number(userAnswerArray.join('')) === total) {
      isSuccess(userAnswerArray)

      

      // let randomNumberArray = [generateRandomNumber(), generateRandomNumber()];
      // let [ bottomOperandTwo, topOperandTwo ] = createOperands(randomNumberArray);
      // let totalTwo = randomNumberArray[0] + randomNumberArray[1];
      // console.log(randomNumberArray);

      // updateHTML(bottomOperandTwo, topOperandTwo);
      // clearValues();
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

const userAnswerArray = [];

userOnes.addEventListener('keyup', validateDigit.bind(null, null, helperTens, 1, userOnes, userTens));
userTens.addEventListener('keyup', validateDigit.bind(null, helperTens, helperHundreds, 0, userTens, userHundreds));
userHundreds.addEventListener('keyup', validateDigit.bind(null, helperHundreds, null, null, userHundreds, null));