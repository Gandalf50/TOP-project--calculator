function add (a=0,b=0) {
    return +a + +b;
}

function substract (a=0,b=0) {
    if (b == "") {
        return -1 * a;
    } else {
        return a-b;
    }
}

function multiply (a,b) {
    if (a != "" && b != "") {
        return a*b;
    } else if (a == "") {
        return +b;
    } else if (b == "") {
        return +a;
    }
}

function divide (a,b) {
    if (b == "") {
        return a;
    } else if (b != 0) {
        return a/b;
    } else {
        alert("Can't divide by 0");
        clear();
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
let ans = "";
let firstSecond = 0;

function clear () {
    screen.textContent = "";
    firstNumber = "";
    secondNumber = "";
    simbol = "";
    firstSecond = 0;
    ans = "";
}

//document.querySelectorAll('button').forEach(key => key.addEventListener('transitionend', removeTransition))

document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', () => {
        if (item.className == "num") {
            if (firstSecond == 0 && ans == "") {
                firstNumber += item.id;
                screen.textContent = firstNumber;
            } else if (secondNumber == "" && ans != "" && firstSecond != 1) {
                clear();
                firstNumber += item.id;
                screen.textContent = firstNumber;
            } else {
                secondNumber += item.id;
                screen.textContent = secondNumber;
            }
        } else {
            if (item.id == "clearBtn") {
                clear();
            } else if (item.id == "+" || item.id == "-" || item.id == "*" || item.id == "/") {
                if (simbol != "") {
                    ans = operate(firstNumber,simbol,secondNumber);
                    firstNumber = ans;
                    secondNumber = "";
                    screen.textContent = firstNumber;
                }
                simbol = item.id;
                if (firstNumber != "") {
                    firstSecond = 1;
                }
            } else if (item.id == "=") {
                if (firstNumber != "" && secondNumber != "" && simbol != "") {
                    ans = operate(firstNumber,simbol,secondNumber);
                    firstNumber = ans;
                    secondNumber = "";
                    simbol = "";
                    screen.textContent = firstNumber;
                    firstSecond = 1;
                } else if (secondNumber == "") {
                    if (simbol == "-" ) {
                        firstNumber = -1 * firstNumber;
                        screen.textContent = firstNumber;
                        simbol = "";
                    } else {
                        firstNumber = "";
                    }
                }
            }
        }
        //console.log("first: " + firstNumber, "simbol: " + simbol, "second: " + secondNumber, "ans: " + ans, "number: " + firstSecond);
    })
});
