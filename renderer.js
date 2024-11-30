let currentInput = '';
let firstOperand = '';
let operator = '';

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    operator = '';
    updateDisplay('0');
}

function calculate() {
    if (firstOperand !== '' && currentInput !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(currentInput);
                break;
            default:
                break;
        }
        updateDisplay(result);
        currentInput = result.toString();
        firstOperand = '';
        operator = '';
    }
}

function operatorClicked(op) {
    if (firstOperand === '') {
        firstOperand = currentInput;
        currentInput = '';
        operator = op;
    }
}
