import {number1, number2} from './generator.js'

console.log('this is inputCapture.js ', number2);

// USER INPUTS
const userDigit = document.getElementById('digit')
const userTens = document.getElementById('tens')
const userHundreds = document.getElementById('hundreds') 
const helperTen = document.getElementById('helper-tens');
const helperHundred = document.getElementById('helper-hundreds');


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
    let arr;
    console.log('this is the id: ',e.target.id);
  if (e.key === 'Enter') {
      arr = value.split('')
      if(arr.length === 2) {
        console.log('carry over the 10');
        // helperTen.removeAttribute('disabled');
        helperTen.value = arr[0];
        userDigit.value = arr[1];
        userTens.removeAttribute('disabled');
        userTens.focus();
      }
      if(arr.length === 1) {
        console.log('nothing to carry over');
        userTens.removeAttribute('disabled')
        userTens.focus();
      }
    }
}
function validateTens(e) {
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
      console.log('you solved it!');
    }
  }
}

userDigit.addEventListener('input', updateValue);
userDigit.addEventListener('keypress', validateDigit);
userTens.addEventListener('input', updateValue);
userTens.addEventListener('keypress', validateTens);

/*
 Need to sort out validation now.
*/