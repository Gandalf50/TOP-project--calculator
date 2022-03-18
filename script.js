function add (a=0,b=0) {
    return +a + +b;
}

function substract (a=0,b=0) {
    return a-b;
}

function multiply (a=0,b=1) {
    return a*b;
}

function divide (a=1,b=1) {
    if (b != 0) {
        return a/b;
    } else {
        return "Can't divide by 0";
    }
}

function operate (num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(num1,num2);
        break;
        case '-':
            result = substract(num1,num2);
        break;
        case '*':
            result = multiply(num1,num2);
        break;
        case '/':
            result = divide(num1,num2);
        break;
    }
    return Number(result.toFixed(4)) /*toFixed keeps only 4 decimals
    and Number turns it back into a number (from a string), this way
    we avoid getting numbers like 0.6000000001 from the calculations*/;
}

/*global var*/
let screen = document.getElementById('screen');
let firstNumber = "";
let secondNumber = "";
let simbol = "";
let controler = 0;

document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', () => {
        if (item.id == '+' || item.id == '-' || item.id == '*' || item.id == '/') {
            simbol = item.id;
            screen.textContent += simbol;
            controler = controler == 0 ? 1:0;
        } else if (item.id == '=') {
            if (firstNumber == "" || simbol == "") {
                return;
            } else {
                firstNumber = operate(firstNumber,simbol,secondNumber);
                screen.textContent = firstNumber;
                secondNumber = "";
                simbol = "";
                controler = controler == 0 ? 1:0;
            }
        } else if (item.id == 'clearBtn') {
            screen.textContent = '';
            firstNumber = "";
            secondNumber = "";
            simbol = "";
            controler = 0;
        } else {
            if (screen.textContent != "" && simbol == "") {
                firstNumber = item.id;
                screen.textContent = firstNumber;
            } else if (controler == 0) {
                firstNumber += item.id;
                screen.textContent = firstNumber;
            } else {
                secondNumber += item.id;
                screen.textContent += secondNumber;
            }
        }
    })
});