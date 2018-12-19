const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const negate = document.getElementById("negate");
const equals = document.getElementById("equals");
const decimal = document.getElementById("decimal");
const percent = document.getElementById("percent");

let currentValue = 0;
let storedValue = 0;
let currentOperator = "";
let isEnteringNumber = true;

let isDecimal = function(num) { return num % 1 !== 0 }

numbers.forEach(number => {
    number.addEventListener('click', numberPressed);
});

operators.forEach(operator => {
    operator.addEventListener('click', operatorPressed);
});

clear.addEventListener('click', clearValue);
negate.addEventListener('click', negateValue);
equals.addEventListener('click', operate);
decimal.addEventListener('click', decimalize);
percent.addEventListener('click', percentify);

function numberPressed(e) {
    if(isEnteringNumber && !isDecimal) {
        currentValue = parseInt((currentValue) + e.srcElement.innerHTML);
    } else if(!isEnteringNumber && !isDecimal) {
        currentValue = parseInt(e.srcElement.innerHTML);
    } else if(isEnteringNumber && isDecimal) {
        currentValue = parseFloat((currentValue) + e.srcElement.innerHTML);
    } else {
        currentValue = parseFloat(e.srcElement.innerHTML);
    }
    isEnteringNumber = true;
    updateDisplay();
}

function operatorPressed(e) {
    currentOperator = e.srcElement.id;
    storedValue = (currentValue);
    isEnteringNumber = false;
    updateDisplay();
}

function updateDisplay() {
    display.innerHTML = currentValue;
    console.log([currentOperator, currentValue, storedValue, isEnteringNumber, isDecimal(currentValue), isDecimal(storedValue)]);
}

function clearValue() {
    currentValue = 0;
    storedValue = 0;
    currentOperator = "";
    updateDisplay();
}

function negateValue() {
    currentValue *= -1;
    updateDisplay();
}

function decimalize() {
    if(!isDecimal(currentValue)) {
        currentValue += ".";
        updateDisplay();
    }
}

function percentify() {
    currentValue /= 100;
    updateDisplay();
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return isEnteringNumber ? a - b : b - a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(a == 0 || b == 0) return "Error";

    return isEnteringNumber ? a / b : b / a;
}

function operate() {
    let operator = currentOperator, a = storedValue, b = currentValue;
    let newValue = 0;
   
    switch(operator) {
        case "add":
            newValue = add(a,b);
            break;
        case "subtract":
            newValue = subtract(a,b);
            break;
        case "multiply":
            newValue = multiply(a,b);
            break;
        case "divide":
            newValue = divide(a,b);
            break;
        default:
            console.log(`${operator} not found`);
    }
    if(isEnteringNumber) {
        storedValue = currentValue;
    }
    currentValue = newValue;
    isEnteringNumber = false;
    updateDisplay();
}

