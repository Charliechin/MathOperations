
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

const { num1, operation, num2, result } = op1;

var computeOperator = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y }
}


const getResult = () => {
  switch (operation) {
    case '+':
      return num1 + num2
      break;

    case '-':
      return num1 - num2
      break;

    default:
      return num1 + num2
      break;
  }
}
// const getResult = computeOperator[operation](num1, num2);

const createMisleadingResult = trueResult => {
  // gets a int and generate a random number that is either +1 or -2 than this
  //*

  // increase this to make the game easier
  const errorRange = 1;

  min = Math.ceil(trueResult - errorRange);
  max = Math.floor(trueResult + errorRange);
  let misleadingResult = Math.floor(Math.random() * (max - min + 1)) + min;

  if (misleadingResult === trueResult) {
    return misleadingResult + 1;

  }
  return misleadingResult;
  // return Math.floor(Math.random() * trueResult + 1) + errorRange;
};

const bothResults = [getResult(), createMisleadingResult(result)];
// Think of changing the name of 'resultChosen'. this is a random selection
// this will randomly display either the real result or the deceptive result 
const resultChosen = bothResults[Math.floor(Math.random() * bothResults.length)];
let userInput = false;

let isCorrect = false;


window.addEventListener('DOMContentLoaded', (e) => {

  const num1Div = document.body.querySelector('#num1');
  const operationDiv = document.body.querySelector('#operation');
  const num2Div = document.body.querySelector('#num2');
  const resultDiv = document.body.querySelector('#result');



  num1Div.innerHTML = num1;
  operationDiv.innerHTML = operation
  num2Div.innerHTML = num2;
  resultDiv.innerHTML = getResult();
  resultDiv.innerHTML = resultChosen;
  // resultDiv.innerHTML = createMisleadingResult(result);

  if (parseInt(resultDiv.innerHTML) === getResult()) {
    isCorrect = true;
  } else {
    // showing deceive result
    isCorrect = false;
  }


  const handleInput = event => {
    switch (event.keyCode) {
      // Stores userInput, left means false, right means true
      case 37:
        console.log("Left");
        userInput = false;
        break;
      case 39:
        console.log("Right");
        userInput = true;
        break;

      default:
        return;
        break;
    };
    if (userInput === isCorrect) {
      console.log("Score!");
    } else {
      console.log("Oh noes!");
    }


  }

  document.addEventListener('keydown', handleInput);

  // document.addEventListener('keyDown', control);



});


// Get a result number
// generate random number :
//  - not equal to result
//    - add 1 to it if so
//  - range from:
//    - 