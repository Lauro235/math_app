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
let [ bottomOperand, topOperand ] = createOperands(randomNumberArray);
let total = randomNumberArray[0] + randomNumberArray[1];

return {
    randomNumberArray,
    total,
    bottomOperand,
    topOperand
  }
}



export {generateRandomNumber, createOperands, randomEquation };
// export {generateRandomNumber, createOperands, randomEquation, randomNumberArray, operandArray, bottomOperand, topOperand, total };












// const operandArray = [bottomOperand, topOperand]