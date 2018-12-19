const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const negate = document.getElementById("negate");
const equals = document.getElementById("equals");

let currentValue = 0;
let storedValue = 0;
let currentOperator = "";
let isEnteringNumber = true;

numbers.forEach(number => {
    number.addEventListener('click', numberPressed);
});

operators.forEach(operator => {
    operator.addEventListener('click', updateValues);
});

equals.addEventListener('click', operate);
clear.addEventListener('click', clearValue);
negate.addEventListener('click', negateValue);

function numberPressed(e) {
    if(isEnteringNumber) {
        currentValue = parseInt((currentValue) + e.srcElement.innerHTML);
    } else {
        currentValue = parseInt(e.srcElement.innerHTML);
    }
    isEnteringNumber = true;
    updateDisplay();
}

function updateValues(e) {
    currentOperator = e.srcElement.id;
    storedValue = parseInt(currentValue);
    isEnteringNumber = false;
    updateDisplay();
}

function updateDisplay() {
    display.innerHTML = parseInt(currentValue);
    console.log([currentOperator, currentValue, storedValue, isEnteringNumber]);
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

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b == 0 ? "Error" : a / b;
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
    updateDisplay();
}

