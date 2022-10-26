const largeTen = document.getElementById('large-ten')
const largeDigit = document.getElementById('large-digit')
const smallTen = document.getElementById('small-ten')
const smallDigit = document.getElementById('small-digit')

const random1 = Math.floor(Math.random() * 100);
const random2 = Math.floor(Math.random() * 100);

const randomNumberArray = [random1, random2];
randomNumberArray.sort((a, b) => a - b);

console.log(randomNumberArray);

function convertNumbers(arr) {
    let low = arr[0].toString();
    let high = arr[1].toString();

    let lowArrString = low.split('');
    let highArrString = high.split('');
    return {
        lowArrString,
        highArrString
    }
    
}

const {lowArrString: low, highArrString: high} = convertNumbers(randomNumberArray);

console.log('Low is here ', low);

const number1 = {
    tens: null,
    digit: Number(low[1])
}

const number2 = {
    tens: null,
    digit: Number(high[0])
}

smallDigit.textContent = low[0]
largeDigit.textContent = high[0];

if (high.length === 2) {
    largeTen.textContent = high[0];
    largeDigit.textContent = high[1];
    const number1 = {
        tens: Number(low[0]),
        digit: Number(low[1])
    }
}
if (low.length === 2) {
    smallTen.textContent = low[0];
    smallDigit.textContent = low[1]
    const number2 = {
        tens: Number(high[0]),
        digit: Number(high[0])
    }
}


// console.log(number1);
// console.log(number2);