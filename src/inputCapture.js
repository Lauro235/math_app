import {large, small} from './generator.js'

console.log('this is the large number', large);
console.log('this is the small number', small);

// USER INPUTS
const userDigit = document.getElementById('digit')
const userTens = document.getElementById('tens')
const userHundreds = document.getElementById('hundreds') 
const helperTen = document.getElementById('helper-tens');
const helperHundred = document.getElementById('helper-hundreds');


let digit;
let tens;
let hundreds;
let userAnswerArray = [];
let result = large + small;

let value = 0;

function updateValue(e) {
  value = e.target.value
}

function validateDigit(e) {
    let arr;
  if (Number(e.target.value) === (large.digit + small.digit)) {
      arr = value.split('')
      if(arr.length === 2) {
        // helperTen.removeAttribute('disabled');
        helperTen.value = arr[0];
        userDigit.value = arr[1];
        userTens.removeAttribute('disabled');
        userTens.focus();
      }
      if(arr.length === 1) {
        userTens.removeAttribute('disabled')
        userTens.focus();
      }
      userAnswerArray.unshift(userDigit.value)
    }
    console.log(e.target.value);
}
/* function validateDigit(e) {
    let arr;
  if (e.key === 'Enter') {
      arr = value.split('')
      if(arr.length === 2) {
        // helperTen.removeAttribute('disabled');
        helperTen.value = arr[0];
        userDigit.value = arr[1];
        userTens.removeAttribute('disabled');
        userTens.focus();
      }
      if(arr.length === 1) {
        userTens.removeAttribute('disabled')
        userTens.focus();
      }
      userAnswerArray.unshift(userDigit.value)
    }
} */

function validateTens(e) {
  let arr;
  console.log('this is the id: ',e.target.id);
  if (helperTen) {
    if (Number(e.target.value) === (helperTen.value + large.tens + small.tens)) {
      arr = value.split('')
      if(arr.length === 2) {
        console.log('carry over the 100');
        helperHundred.value = arr[0];
        userTens.value = arr[1];
        userHundreds.removeAttribute('disabled');
        userHundreds.focus();
      }
      if(arr.length === 1) {
      }
    }
    userAnswerArray.unshift(userTens.value)
  }
}
/* function validateTens(e) {
  let arr;
  console.log('this is the id: ',e.target.id);
    if (e.key === 'Enter') {
      arr = value.split('')
      if(arr.length === 2) {
        console.log('carry over the 100');
        helperHundred.value = arr[0];
        userTens.value = arr[1];
        userHundreds.removeAttribute('disabled');
        userHundreds.focus();
      }
      if(arr.length === 1) {
        userHundreds.removeAttribute('disabled')
        userHundreds.focus();
      }
    userAnswerArray.unshift(userTens.value)
  }
} */
function validateHundred(e) {
  let arr;
  console.log('this is the id: ',e.target.id);
if (e.key === 'Enter') {
    userAnswerArray.unshift(userHundreds.value)
  }
}

userDigit.addEventListener('input', updateValue);
userDigit.addEventListener('keypress', validateDigit);
userTens.addEventListener('input', updateValue);
userTens.addEventListener('keypress', validateTens);
userHundreds.addEventListener('input', updateValue);
userHundreds.addEventListener('keypress', validateHundred);

// Validation 

window.addEventListener('keydown', (e) => {
  if(userAnswerArray.length >= 1 && e.ctrlKey === true && e.key === 'Enter') {
  console.log('keys pressed');
  console.log(userAnswerArray);
}
})
