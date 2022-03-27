//math functions
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
//the operate function calls the math functions
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
    return Number(result.toFixed(7)) /*toFixed keeps only 4 decimals
    and Number turns it back into a number (from a string), this way
    we avoid getting numbers like 0.6000000001 from the calculations*/;
}

//global var
let screen = document.getElementById('screen');
let firstNumber = "";
let secondNumber = "";
let simbol = "";
let ans = "";
let firstSecond = 0;

//resets the global var
function clear () {
    screen.textContent = "";
    firstNumber = "";
    secondNumber = "";
    simbol = "";
    firstSecond = 0;
    ans = "";
}

//calculator algorithm
document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', () => {
        if (item.id == "." && screen.textContent.includes(".")) {
            return;
        }
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
        } else { //this "else" is separated form the next "if" just so that it's easier to divide numbers from the rest of the buttons
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
            } else if (item.id == "eraser") {
                alert("This button is useless at the moment, it'll eventually allow you to delete the last character you typed in");
            }
        }
        //console.log("first: " + firstNumber, "simbol: " + simbol, "second: " + secondNumber, "ans: " + ans, "number: " + firstSecond);
    })
});

//keyboard integration
window.addEventListener('keydown',logKey);

function logKey (e) {
    key = `${e.code}`;
    if (key.includes("Numpad")) {
        switch (key.slice(6)) {
            case "0":
                document.getElementById("0").click();
                break;
            case "1":
                document.getElementById("1").click();
                break;
            case "2":
                document.getElementById("2").click();
                break;
            case "3":
                document.getElementById("3").click();
                break;
            case "4":
                document.getElementById("4").click();
                break;
            case "5":
                document.getElementById("5").click();
                break;
            case "6":
                document.getElementById("6").click();
                break;
            case "7":
                document.getElementById("7").click();
                break;
            case "8":
                document.getElementById("8").click();
                break;
            case "9":
                document.getElementById("9").click();
                break;
            case "Add":
                document.getElementById("+").click();
                break;
            case "Subtract":
                document.getElementById("-").click();
                break;
            case "Multiply":
                document.getElementById("*").click();
                break;
            case "Divide":
                document.getElementById("/").click();
                break;
            case "Decimal":
                document.getElementById(".").click();
                break;
        }
    } else if(key.includes("Digit")) {
        switch (key.slice(5)) {
            case "0":
                if (event.shiftKey) {
                    document.getElementById("=").click();
                } else{
                    document.getElementById("0").click();
                }
                break;
            case "1":
                document.getElementById("1").click();
                break;
            case "2":
                document.getElementById("2").click();
                break;
            case "3":
                document.getElementById("3").click();
                break;
            case "4":
                document.getElementById("4").click();
                break;
            case "5":
                document.getElementById("5").click();
                break;
            case "6":
                document.getElementById("6").click();
                break;
            case "7":
                document.getElementById("7").click();
                break;
            case "8":
                document.getElementById("8").click();
                break;
            case "9":
                document.getElementById("9").click();
                break;
        }
    } else if (key == "Backspace") {
        document.getElementById("eraser").click();
    } else {
        switch (key) {
            case "Period":
                document.getElementById(".").click();
                break;
        }
    }
}