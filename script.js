const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "ERR";
    }
}

function backspace(){
    let currentDisplayValue = display.value;
    if (currentDisplayValue.length > 0){
        let newDisplayvalue = currentDisplayValue.substring(0, currentDisplayValue.length - 1);
        display.value = newDisplayvalue;
    }
}

