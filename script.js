let num1 = 0;
let num2 = 0;
let operator;
let answer;

const display = document.querySelector('#display');

const numbersBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');

numbersBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (!operator) {
            num1 += e.target.id;
            updateDisplay (parseInt(num1));
        } else if (operator) {
            num2 += e.target.id;
            updateDisplay (parseInt(num2));
        }
    })
})

operatorBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        operator = e.target.id;
    })
})

equalBtn.addEventListener('click', (e) => {
    operate(num1, num2, operator);
    updateDisplay(answer);
    num1 = answer;
    num2 = 0;
})

clearBtn.addEventListener('click', (e) => {
    num1 = 0;
    num2 = 0;
    operator = "";
    updateDisplay("ANSWER");
})

function updateDisplay (num) {
    display.textContent = num;
}

function operate (num1, num2, operator) {
    switch (operator) {
        case "+":
            answer = add (num1, num2);
            break;
        case "-":
            answer = subtract (num1, num2);
            break;
        case "*":
            answer = multiply (num1, num2);
            break;
        case "/":
            answer = divide (num1, num2);
            break;
    }
}

function add (a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract (a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply (a, b) {
    return parseInt(a) * parseInt(b);
}
function divide (a, b) {
    return parseInt(a) / parseInt(b);
}