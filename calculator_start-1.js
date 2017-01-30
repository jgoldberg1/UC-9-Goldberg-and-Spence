/* TODO: 1. Add these new functions: percentage, inverse, factorial, square and square root
2. Bootstrap it to make it pretty! 3. User can only type numbers in the display (30 max!), and the numbers are right aligned.
4. Fix divide by 0 errors! 5. Add the ability to clear the current input, but not memory.
6. Challenge: Add trig functions (in radian AND degree mode) 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
8. Super Challenge: Add ( and ) buttons that work! 9. Super Duper Challenge: Add exponents (negatives too!)
*/

var current_input = "0"; // what is in the text box

var memory = "0"; // stores memory

var operator = 0; // which math operator is in use

var storeBase;



/**
 * displays the current input onto calc screen
 */
function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}


/**
 * Adds digit to calc screen
 * @param {number} num number you want to add to calc
 */
function addDigit(num) {
    var dig = num;// Adds a digit to the current input
    if (current_input.length > 10) {
    num = "";
    } else if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    } else {
        current_input = current_input + dig;
}

    displayCurrentInput();
}


/**
 * adds decimal to the current input
 * @param {number} current input [[what is currently displayed on calc screen]]
 */
function addDecimal() {
// Adds a decimal to the current input
    if (current_input.length == 0) {
        current_input = "0.";  //no leading ".", use "0."
    } else if (current_input.indexOf(".") == -1) {
        // First make sure one doesn't exist
        current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}



/**
 * clears everything out of screen
 * @param {number} current input   what is currently displayed on screen
 * @param {object} operator [[+, -, /, *]]
 * @param {number} [number stored in calc's memory that the operator will be applied to]
*/
function allClear() {
    current_input = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}



/**
 * stores the entered operator
 * @param {operator}op [+, -, /, *]
 */
function storeOperator(op) {

    if (op.indexOf("") > -1) {
        operator = 1; }; //codes for
    if (op.indexOf("/") > -1) {
        operator = 2; }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3; }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4; };// difference
    if (op.indexOf("^") > -1 ) {
        operator = 5;
    }
    memory = current_input;                     //store value
    current_input = "0";
    displayCurrentInput();
}




/**
 * calculates output using memory, operator, and current input
 */
function calculate() {

    if (operator == 1) {
        current_input = eval(memory) * eval(current_input); };
    if (operator == 2) {
        if (current_input == 0) {
            current_input = "Can't divide by zero";
        } else {
            current_input = eval(memory) / eval(current_input); } };
    if (operator == 3) {
        current_input = eval(memory) + eval(current_input); };
    if (operator == 4) {
        current_input = eval(memory) - eval(current_input); };
    if (operator == 5) {
        current_input = Math.pow(memory, current_input);
    }
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}


/**
 * changes the sign from positive to negative and vice versa
 */
function changeSign() {
    current_input = current_input * -1;
    displayCurrentInput();
}



/**
 * sets current input back to zero
 */
function clar() {
    current_input =  "";
    displayCurrentInput();
}




/**
 * change curren input to percentage
 */
function percentage() {
    current_input = current_input/100;
    displayCurrentInput();
}






/**
 * calculate factorial of the input
 * @param {number?} inputId [tragically, Will did this part and I have no idea what a factorial is]
 */
function factorial(inputId) { //     num = 4
    var number = document.getElementById(inputId).value;
    var factorial  = 1; // initialized the value of the factorial as 1 because anything multiplid by zero is zero

    for ( i = number; i > 0; i--) { // initialze i as the inout, test for every value of i/the decremented value is greater than zero, decrement num i = 4

        factorial = i*factorial;
    }
    current_input = factorial; // set the factorial as currentInput
    displayCurrentInput(); // display the factorial
}







/**
 * calculate square of the current input
 */
function squareNum() {
    var num = document.getElementById('screen').value;
    current_input = Math.pow(num, 2);
    displayCurrentInput();
}



/**
 * calculate square root of current input
 */
function squareRoot() {
    current_input = document.getElementById('screen').value;

    if ( current_input < 0 ) {

        current_input = Math.sqrt(-current_input);
        current_input = current_input + "i";

    }
    else {
        current_input = Math.sqrt(current_input);
}

    displayCurrentInput();
}





/**
 * calculate inverse of current input
 * @param {number?} inputId [idk what an inverse is]
 */
function inverse(inputId) {
    var number = document.getElementById(inputId).value; // get the input
      current_input = 1/number;
    displayCurrentInput();
}

/**
 * sets current input as pi
 */
function getPI() {
    current_input = Math.PI;
    displayCurrentInput();
}












