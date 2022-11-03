// initial equation
const topTens = document.getElementById('top-tens');
const topOnes = document.getElementById('top-ones');
const bottomTens = document.getElementById('bottom-tens');
const bottomOnes = document.getElementById('bottom-ones');

// user inputs
const userOnes = document.getElementById('ones')
const userTens = document.getElementById('tens')
const userHundreds = document.getElementById('hundreds')
const helperTens = document.getElementById('helper-tens');
const helperHundreds = document.getElementById('helper-hundreds');

function updateHTML ( bottomOperand, topOperand ) {
    topOnes.textContent = topOperand[1];
    topTens.textContent = topOperand[0] || '';
    bottomOnes.textContent = bottomOperand[1];
    bottomTens.textContent = bottomOperand[0] || '';
  }

function clearValues() {
    helperHundreds.value = null;
    helperTens.value = null;
    userHundreds.value = null;
    userHundreds.setAttribute('disabled', '')
    userTens.value = null;
    userTens.setAttribute('disabled', '')
    userOnes.value = null;
    userOnes.focus()
}

  export {clearValues, updateHTML}