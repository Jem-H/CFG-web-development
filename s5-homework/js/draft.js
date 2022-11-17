// Summing
function sum(number1, number2) {   
    alert(parseInt(number1)+parseInt(number2));
};

// Subtracting
function subtract(number1, number2) {
    alert(parseInt(number1)-parseInt(number2));
};

// Dividing
function divide(number1, number2) {
    alert(parseInt(number1)/parseInt(number2));
};

// Multiplying
function multiply(number1, number2) {
    alert(parseInt(number1)*parseInt(number2));
};

// Power
function power(number1, number2) {
    alert(parseInt(number1)**parseInt(number2));
};

// Square root
function sqrt(number1) {
    alert(parseInt(Math.sqrt(number1)));
};

// User dialog

let number1 = prompt(`Please enter the first number`);

let key = prompt(
    `Please press the following keys for the desired function:
    Sum a, Subtract b, Divide c, Multiply d, Power e, Square root f`);

if(key!=`f`){
    number2 = prompt(`Please enter the second number`);
}

switch (key) {
    case `a`:
        sum(number1,number2);
        break;
    case `b`:
        subtract(number1,number2);
        break;
    case `c`:
        divide(number1,number2);
        break;
    case `d`:
        multiply(number1,number2);
        break;
    case `e`:
        power(number1,number2);
        break;
    case `f`:
        sqrt(number1);
        break;
    default:
        alert(`You have pressed an incorrect key, please try again.`);
};