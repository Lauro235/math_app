/*
PLAN 
let newQuestion = true; - should be shared in generator and inputCapture
set newQuestion to false after updateHTML

Use while loop to wrap lines 31 and 43 on condition that newQuestion is true

Within codeblock for correct answer set newQuestion to true
*/

import {updateHTML} from './updateHTML.js'

function generateRandomNumber () {
  return Math.floor(Math.random() * 100);
}

function createOperands(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .map(num => String(num)
      .padStart(2, '0')
      .split('')
      .map(digit => +digit));  
}

function randomEquation() {
const randomNumberArray = [generateRandomNumber(), generateRandomNumber()];
const [ bottomOperand, topOperand ] = createOperands(randomNumberArray);
let total = randomNumberArray[0] + randomNumberArray[1];

return {
    randomNumberArray,
    total,
    bottomOperand,
    topOperand
  }
}

let { randomNumberArray, total, bottomOperand, topOperand } = randomEquation(); 

// has to be at top level cannot be nested

updateHTML( bottomOperand, topOperand );


export {generateRandomNumber, createOperands, randomEquation, randomNumberArray, bottomOperand, topOperand, total };