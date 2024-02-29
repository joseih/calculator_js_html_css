let firstNum = 0;
let secondNum = 0;
let operator = null;
let buttonNumber = document.getElementsByClassName("btn-number");
let buttonDelete = document.querySelector("#btn-delete");
let buttonOperator = document.getElementsByClassName("btn-operator");
let buttonEquals = document.querySelector("#btn-equals");
let result = document.querySelector("#result");

//math logic
function add(x, y) {
  return parseInt(x) + parseInt(y);
}

function subtract(x, y) {
  return parseInt(x) - parseInt(y);
}

function multiply(x, y) {
  return parseInt(x) * parseInt(y);
}

function divide(x, y) {
  return parseInt(x) / parseInt(y);
}
// end math logic

function operate(firstNum, secondNum, operator) {
  //operate sequence
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
    case "-":
      return subtract(firstNum, secondNum);
    case "*":
      return multiply(firstNum, secondNum);
    case "/":
      return divide(firstNum, secondNum);
  }
}

buttonEquals.addEventListener("click", (x) => {
  result.value = operate(firstNum, secondNum, operator);
});

buttonDelete.addEventListener("click", (x) => {
  //reset all
  result.value = "";
  firstNum = 0;
  secondNum = 0;
  operator = null;
});

for (const iterator of buttonNumber) {
  iterator.addEventListener("click", (x) => {
    //add numbers in variables and input form
    if (operator == null) {
      firstNum += iterator.textContent;
      result.value += iterator.textContent;
    } else {
      secondNum += iterator.textContent;
      result.value += iterator.textContent;
    }
  });
}

for (const iterator of buttonOperator) {
  iterator.addEventListener("click", (x) => {
    //add operator into variable and inputform
    operator = iterator.textContent;
    result.value += operator;
  });
}
