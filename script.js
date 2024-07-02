const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
display.value = "";
}

function calculate() {
    let expression = display.value;

    // Regular expression to match operators (+, -, *, /)
    let operators = /[+\-*\/]/g;

    // Split the expression based on operators
    let parts = expression.split(operators);

    // Extract the operators from the expression
    let operatorsArray = expression.match(operators);

    // Convert parts to numbers
    let numbers = parts.map(parseFloat);

    // Perform calculations
    let result = numbers[0];

    for (let i = 0; i < operatorsArray.length; i++) {
        let operator = operatorsArray[i];
        let number = numbers[i + 1];

        switch (operator) {
            case '+':
                result += number;
                break;
            case '-':
                result -= number;
                break;
            case '*':
                result *= number;
                break;
            case '/':
                if (number !== 0) {
                    result /= number;
                } else {
                    display.value = "0";
                    return;
                }
                break;
            default:
                break;
        }
    }

    // Update the display with the result
    display.value = result;
}


function backspace(){
    let currentDisplayValue = display.value;
    if (currentDisplayValue.length > 0){
        let newDisplayvalue = currentDisplayValue.substring(0, currentDisplayValue.length - 1);
        display.value = newDisplayvalue;
    }
}

