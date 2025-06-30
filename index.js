const rs = require("readline-sync");

const createOpString = (arrOperators) => {
  let resultString = "";
  for (let i = 0; i < arrOperators.length; i++) {
    if (i < arrOperators.length - 1) {
      resultString += '"' + arrOperators[i] + '", ';
    } else {
      resultString += 'or "' + arrOperators[i] + '"';
    }
  }
  return resultString;
};

const getOperator = (opArr) => {
  let operator = rs.question(
    `What operation would you like to perform? ${operatorsFormattedString}: `
  );
  if (opArr.includes(operator)) {
    return operator;
  } else {
    while (!opArr.includes(operator)) {
      operator = rs.question(`Invalid input! ${operatorsFormattedString}: `);
      if (opArr.includes(operator)) {
        return operator;
      }
    }
  }
};

const numOrder = (num) => rs.questionInt(`Please enter the ${num} number: `);

const doMath = (op, n1, n2) => {
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    case "%":
      return n1 % n2;
  }
};

const runCalculator = (valid) => {
  const operator = getOperator(valid);
  const numOne = numOrder("first");
  const numTwo = numOrder("second");
  const result = doMath(operator, numOne, numTwo);

  console.log(`Result: ${numOne} ${operator} ${numTwo} = ${result}`);
};

const validOperators = ["+", "-", "*", "/", "%"];
const operatorsFormattedString = createOpString(validOperators);

runCalculator(validOperators);
