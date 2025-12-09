const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentValue = '';
let previousValue = '';
let operator = null;
let shouldResetDisplay = false;

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(e) {
    const value = e.target.textContent;

    if (value === '=') {
        calculate();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
        handleOperator(value);
    } else if (value === '.') {
        handleDecimal();
    } else {
        handleNumber(value);
    }
}

function handleNumber(value) {
    if (shouldResetDisplay) {
        currentValue = '';
        shouldResetDisplay = false;
    }
    currentValue += value;
    updateDisplay();
}

function handleDecimal() {
    if (shouldResetDisplay) {
        currentValue = '0';
        shouldResetDisplay = false;
    }
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
    updateDisplay();
}

function handleOperator(op) {
    if (currentValue === '') return;

    if (previousValue !== '' && operator !== null) {
        calculate();
    }

    previousValue = currentValue;
    operator = op;
    shouldResetDisplay = true;
    updateDisplay();
}

function calculate() {
    if (previousValue === '' || currentValue === '' || operator === null) return;

    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 0;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    operator = null;
    previousValue = '';
    shouldResetDisplay = true;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentValue || '0';
}

// Initialize display
updateDisplay();
