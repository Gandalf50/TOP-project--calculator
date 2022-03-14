function add (a=0,b=0) {
    return a+b;
}

function substract (a=0,b=0) {
    return a-b;
}

function multiply (a=0,b=1) {
    return a*b;
}

function divide (a,b) {
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
    return result;
}

let screen = document.getElementById('screen');
let numbers = [];
let simbol = [];

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', () => {
        if (item.id == '+' || item.id == '-' || item.id == '*' || item.id == '/') {
            simbol.push(item.id);
        } else if (item.id == '=') {
            //operate
            alert('This button is not ready yet');
        } else if (item.id == 'clearBtn') {
            screen.textContent = '';
            numbers = [];
        } else {
            numbers += item.id;
            screen.textContent = numbers;
        }
    })
});