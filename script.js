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
        if (!num1) {
            num1 = parseInt(e.target.id);
        } else if (!num2) {
            num2 = parseInt(e.target.id);
        }
    })
})

operatorBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id);
    })
})

equalBtn.addEventListener('click', (e) => {
    console.log(e.target.id);
})

clearBtn.addEventListener('click', (e) => {
    console.log(e.target.id);
})

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
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}