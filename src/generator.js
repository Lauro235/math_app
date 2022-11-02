const largeTen = document.getElementById('large-ten')
const largeDigit = document.getElementById('large-digit')
const smallTen = document.getElementById('small-ten')
const smallDigit = document.getElementById('small-digit')

// create two random numbers
const random1 = Math.floor(Math.random() * 100);
const random2 = Math.floor(Math.random() * 100);

// add random numbers to array
const randomNumberArray = [random1, random2];

// sort array lowest to highest
randomNumberArray.sort((a, b) => a - b);

// Use convertNumbers to return one array for each random number, making sure to split each random number into tens and digits 

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

// destructure arrays from convertNumbers
const {lowArrString: low, highArrString: high} = convertNumbers(randomNumberArray);

// Set lowest numbers (0-9) to include null in the tens prop

let large;
let small;

console.log('this is the low value array ', low);

console.log(`low = ${low}. `);

// update document with value of digits

smallDigit.textContent = low[0]
largeDigit.textContent = high[0];

// if randomNumberArrays have a length of 2, set and display numbers in document

if (high.length === 2) {
    largeTen.textContent = high[0];
    largeDigit.textContent = high[1];
    large = {
        tens: Number(high[0]),
        digit: Number(high[1])
    }
}
else {
    large = {
        tens: null,
        digit: Number(high[0])
    }
}
if (low.length === 2) {
    smallTen.textContent = low[0];
    smallDigit.textContent = low[1]
    small = {
        tens: Number(low[0]),
        digit: Number(low[1])
    }
}
else {
    small = {
        tens: null,
        digit: Number(low[0])
    }
}

export {large, small};