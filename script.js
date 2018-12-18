const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.getElementById("display");
const clear = document.getElementById("clear");

let currentValue = 0;

numbers.forEach(number => {
    number.addEventListener('click', numberPressed);
});

clear.addEventListener('click', clearValue);

function numberPressed(e) {
    currentValue = parseInt((currentValue) + e.srcElement.innerHTML);
    console.log(currentValue);
    updateDisplay();
}

function updateDisplay() {
    display.innerHTML = currentValue;
}

function clearValue() {
    currentValue = 0;
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

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return `${operator} not found`;
    }
}

