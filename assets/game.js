import Operation from '../operation';

const Game = () => {
  alert("yeye");

}

export default Game;
// const game = () => {
//   alert("hehe")

// }

// export default game;







// // class Operation {

// //   constructor(num1, operator, num2) {
// //     this.num1 = num1;
// //     this.operator = operator;
// //     this.num2 = num2;
// //   }

// //   get result() {
// //     switch (this.operator) {
// //       case '+':
// //         return this.num1 + this.num2
// //         break;

// //       case '-':
// //         return this.num1 - this.num2
// //         break;

// //       default:
// //         return this.num1 + this.num2
// //         break;
// //     }

// //   }
// // }

// // !CLASS OPERATION

// let score = 0;
// let userInput = false;
// let isCorrect = false;


// const getRandomNum = num => {
//   return Math.floor(Math.random() * num);
// }



// var op1 = new Operation(getRandomNum(4), '+', getRandomNum(4));



// // const { num1, operator, num2 } = op1;
// // let result = op1.result;

// // var computeOperator = {
// //   '+': function (x, y) { return x + y },
// //   '-': function (x, y) { return x - y }
// // }


// const createMisleadingResult = trueResult => {
//   // gets a int and generate a random number that is either +1 or -2 than this
//   //*

//   // increase this to make the game easier
//   const errorRange = 1;

//   min = Math.ceil(trueResult - errorRange);
//   max = Math.floor(trueResult + errorRange);
//   let misleadingResult = Math.floor(Math.random() * (max - min + 1)) + min;

//   if (misleadingResult === trueResult) {
//     return misleadingResult + 1;

//   }
//   return misleadingResult;
//   // return Math.floor(Math.random() * trueResult + 1) + errorRange;
// };

// const bothResults = [op1.result, createMisleadingResult(op1.result)];
// // Think of changing the name of 'resultChosen'. this is a random selection
// // this will randomly display either the real result or the deceptive result 
// const resultChosen = () => { return bothResults[Math.floor(Math.random() * bothResults.length)] }


// window.addEventListener('DOMContentLoaded', (e) => {

//   const num1Div = document.body.querySelector('#num1');
//   const operatorDiv = document.body.querySelector('#operator');
//   const num2Div = document.body.querySelector('#num2');
//   const resultDiv = document.body.querySelector('#result');
//   const scoreDiv = document.body.querySelector('#score');



//   num1Div.innerHTML = op1.num1;
//   operatorDiv.innerHTML = op1.operator;
//   num2Div.innerHTML = op1.num2;
//   resultDiv.innerHTML = resultChosen();
//   // resultDiv.innerHTML = resultChosen;
//   // resultDiv.innerHTML = createMisleadingResult(result);

//   if (parseInt(resultDiv.innerHTML) === op1.result) {
//     isCorrect = true;
//   } else {
//     // showing deceive result
//     isCorrect = false;
//   }


//   const handleInput = event => {
//     switch (event.keyCode) {
//       // Stores userInput, left means false, right means true
//       case 37:
//         console.log("Left");
//         userInput = false;
//         break;
//       case 39:
//         console.log("Right");
//         userInput = true;
//         break;

//       default:
//         return;
//         break;
//     };

//     if (userInput === isCorrect) {
//       console.log("Score!");
//       scoreDiv.innerHTML = score++;
//       op1 = new Operation(getRandomNum(3), '+', getRandomNum(3));



//       num1Div.innerHTML = op1.num1;
//       operatorDiv.innerHTML = op1.operator;
//       num2Div.innerHTML = op1.num2;
//       resultDiv.innerHTML = resultChosen();

//       userInput = false;

//     } else {
//       console.log("Oh noes!");
//       debugger;
//     }


//   }

//   document.addEventListener('keydown', handleInput);

//   // document.addEventListener('keyDown', control);



// });


// // Get a result number
// // generate random number :
// //  - not equal to result
// //    - add 1 to it if so
// //  - range from:
// //    - 