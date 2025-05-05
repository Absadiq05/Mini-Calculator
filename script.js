const display = document.getElementById("display");

let currentInput = "";
let operator = null;
let firstOperand = null;

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(op) {
  if (currentInput === "") return;
  if (firstOperand !== null && operator !== null) {
    calculate();
  }
  firstOperand = parseFloat(currentInput);
  operator = op;
  currentInput = "";
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    display.value = currentInput;
  }
}

function clearDisplay() {
  currentInput = "";
  operator = null;
  firstOperand = null;
  display.value = "";
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}

function calculate() {
  if (operator === null || firstOperand === null || currentInput === "") return;

  let secondOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      if (secondOperand === 0) {
        display.value = "Error";
        return;
      }
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  currentInput = String(result);
  operator = null;
  firstOperand = null;
  display.value = currentInput;
}

function calculatePercentage() {
  if (currentInput === "") return;
  currentInput = String(parseFloat(currentInput) / 100);
  display.value = currentInput;
}

function calculateSquareRoot() {
  if (currentInput === "") return;
  let value = parseFloat(currentInput);
  if (value < 0) {
    display.value = "Error";
    return;
  }
  currentInput = String(Math.sqrt(value));
  display.value = currentInput;
}
