/*
PLAN 
let newQuestion = true; - should be shared in generator and inputCapture
set newQuestion to false after updateHTML

Use while loop to wrap lines 31 and 43 on condition that newQuestion is true

Within codeblock for correct answer set newQuestion to true
*/

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

function updateHTML ({ topOperand, bottomOperand }) {
  topOnes.textContent = topOperand[1];
  topTens.textContent = topOperand[0] || '';
  bottomOnes.textContent = bottomOperand[1];
  bottomTens.textContent = bottomOperand[0] || '';
}

// OPERANDS 
const topTens = document.getElementById('top-tens')
const topOnes = document.getElementById('top-ones')
const bottomTens = document.getElementById('bottom-tens')
const bottomOnes = document.getElementById('bottom-ones')

const randomNumberArray = [generateRandomNumber(), generateRandomNumber()];
const [ bottomOperand, topOperand ] = createOperands(randomNumberArray);
const total = randomNumberArray[0] + randomNumberArray[1];

updateHTML({ bottomOperand, topOperand });


export { bottomOperand, topOperand, total };

/*
- wrap random number generator into object of methods
- export randomNumber object

- create updateHTML file
in updateHTML
  - import bottomOperand and topOperand from generator.js
  - add updateHTML func
  - add updateHTML call
  - export updateHTML func
*/