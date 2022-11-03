import { topOperand, bottomOperand, total } from './generator.js'

const audio = new Audio('./assets/twinkle.mp3');

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
      // consider abstracting into success function
      console.log('Correctly added numbers')
      console.log(userAnswerArray);
      audio.play();
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