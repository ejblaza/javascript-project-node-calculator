var numOne = 0;
var numTwo = 0;
var result = 0;
var opCheck = false;

var rs = require("readline-sync");

var operator = rs.question(
  'What operation would you like to perform? "+", "-", "*", "/", or "%": '
);

if (
  operator == "+" ||
  operator == "-" ||
  operator == "*" ||
  operator == "/" ||
  operator == "%"
) {
  opCheck = true;
} else {
  while (!opCheck) {
    operator = rs.question('Invalid input! "+", "-", "*", "/", or "%":  ');
    if (
      operator == "+" ||
      operator == "-" ||
      operator == "*" ||
      operator == "/" ||
      operator == "%"
    ) {
      opCheck = true;
    }
  }
}

numOne = rs.questionInt("Please enter the first number: ");
numTwo = rs.questionInt("Please enter the second number: ");

switch (operator) {
  case "+":
    result = numOne + numTwo;
    break;
  case "-":
    result = numOne - numTwo;
    break;
  case "*":
    result = numOne * numTwo;
    break;
  case "/":
    result = numOne / numTwo;
    break;
  case "%":
    result = numOne % numTwo;
    break;
}

console.log(`Result: ${numOne} ${operator} ${numTwo} = ${result}`);
