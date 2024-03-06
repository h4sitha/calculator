let num1 = "";
let num2 = "";
let operator;
let answer;

const display = document.querySelector('#display');

const numbersBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
const backspaceBtn = document.querySelector('#backspace');

numbersBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (!operator) {

            if (answer) {
                num1 = "";
                answer = "";
            }

            if (e.target.id === '.') {
                if (!num1.toString().includes('.')) {
                    num1 += (num1) ? e.target.id : `0${e.target.id}`;
                }
            } else if (e.target.id === '0') {
                if (num1) {
                    num1 += e.target.id;
                }
            } else {
                num1 += e.target.id;
            }
            
            updateDisplay (num1);
            
        } else if (operator) {

            if (e.target.id === '.') {
                if (!num2.toString().includes('.')) {
                    num2 += (num2) ? e.target.id : `0${e.target.id}`;
                }
            } else if (e.target.id === '0') {
                if (num2) {
                    num2 += e.target.id;
                }
            } else {
                num2 += e.target.id;
            }

            updateDisplay (num2);
        }
    })
})

operatorBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (num1 && num2 && operator) {
            runCalculation ();
        }
        operator = e.target.id;
    })
})

equalBtn.addEventListener('click', runCalculation)

function runCalculation () {
    if (num2) {
        operate(num1, num2, operator);
        updateDisplay(answer);
        num1 = (answer === "ERROR") ? 0 : answer;
        num2 = "";
        operator = "";
    } else if (num1 && operator) {
        operate(num1, num1, operator);
        updateDisplay(answer);
        num1 = answer;
        operator = "";
    }
}

clearBtn.addEventListener('click', (e) => {
    num1 = "";
    num2 = "";
    operator = "";
    updateDisplay(0);
})

backspaceBtn.addEventListener('click', () => {
    if (!num2 && !answer) {
        num1 = num1.toString().substring(0, num1.length - 1);
        if (num1) {
            updateDisplay (num1);
        } else {
            updateDisplay (0);
        }
    } else if (num2) {
        num2 = num2.toString().substring(0, num2.length - 1);
        if (num2) {
            updateDisplay (num2);
        } else {
            updateDisplay (0);
        }
    }
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
    return parseFloat(a) + parseFloat(b);
}

function subtract (a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply (a, b) {
    return parseFloat(a) * parseFloat(b);
}
function divide (a, b) {
    if (parseFloat(b) === 0) {
        return "ERROR";
    } else {
        return parseFloat(a) / parseFloat(b);
    }
}