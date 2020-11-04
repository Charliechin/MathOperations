
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

const createMisleadingResult = trueResult => {
  // gets a int and generate a random number that is either +1 or -2 than this
  //*

  // increase this to make the game easier
  const errorRange = 1;

  min = Math.ceil(trueResult - errorRange);
  max = Math.floor(trueResult + errorRange);
  let misleadingResult = Math.floor(Math.random() * (max - min + 1)) + min;

  if (misleadingResult === trueResult) {
    // if is the same, just increase it by 1
    console.log("si");
    console.log(misleadingResult);
    return misleadingResult + 1;

  }
  return misleadingResult;
  // return Math.floor(Math.random() * trueResult + 1) + errorRange;
};

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
  resultDiv.innerHTML = createMisleadingResult(result);


});


// Get a result number
// generate random number :
//  - not equal to result
//    - add 1 to it if so
//  - range from:
//    - 