
// var op1 = {
//   num1: ,
//   num2: ,
//   operation: ,
//   result:

// };

// Note to futureSelf, on load this component, the first thing
// to do is get the result and compute it
var op1 = {
  num1: 2,
  num2: 2,
  operation: '+',
  result: 4
};




var computeOperator = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y }
}

const { num1, operation, num2, result } = op1;
const getResult = computeOperator['+'](num1, num2);

window.addEventListener('DOMContentLoaded', (e) => {

  const num1Div = document.body.querySelector('#num1');
  const operationDiv = document.body.querySelector('#operation');
  const num2Div = document.body.querySelector('#num2');
  const resultDiv = document.body.querySelector('#result');

  num1Div.innerHTML = num1;
  operationDiv.innerHTML = operation;
  num2Div.innerHTML = num2;
  resultDiv.innerHTML = getResult;


});