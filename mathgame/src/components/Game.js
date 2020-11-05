import React, { Fragment, useEffect, useRef, useState } from 'react';
import Operation from '../operation';
import useKeypress from '../hooks/useKeypress'

const Game = () => {
  const [operation, setOperation] = useState(new Operation(0, '+', 0));
  const { num1, operator, num2, result, misleadingResult } = operation;
  const [score, setScore] = useState(0);

  const [displayedResult, setDisplayedResult] = useState(0);

  const displayedResultEl = useRef(null);

  const [isCorrect, setIsCorrect] = useState(true);

  useEffect(() => {
    setOperation(new Operation(1, '+', 1));
    // setDisplayedResult(operation.result);
    console.log([result, misleadingResult][Math.floor(Math.random() * 2)]);
  }, [setOperation])


  useKeypress('ArrowLeft', () => {
    console.log(false);
    // [result, misleadingResult][Math.floor(Math.random() * 2) 
    console.log("left");
    console.log(score)
  })

  useKeypress('ArrowRight', () => {
    console.log("right")
    setScore(score + 1);
  }, [setOperation, score, setScore, operation])


  return (
    <Fragment>
      <div className="operation" style={{ display: "inline", margin: "20px" }}>
        <span id="num1">{num1}</span>
        <span id="operator"> {operator} </span>
        <span id="num2">{num2}</span>
        <span> = </span>
        <span id="result" val={result} ref={displayedResultEl} >{result}</span>
        {/* <span id="result" ref={displayedResultEl} >{[result, misleadingResult][Math.floor(Math.random() * 2)]}</span> */}
        <br />
        {/* <span id="misleading-result">{result} -----{misleadingResult}</span> */}
      </div>
      <hr style={{ width: "80%" }} />
      <div className="score"><span id="score">{score}</span></div>
    </Fragment>
  )
}
//   const [operation, setOperation] = useState(new Operation(0, '+', 0));
//   const [userInput, setUserInput] = useState(false);
//   const [isMisleadingOperation, setIsMisleadingOperation] = useState(false);
//   const [resultShown, setResultShown] = useState(0);
//   const { num1, operator, num2, result } = operation;

//   useEffect(() => {
//     setOperation(new Operation(getRandomNum(6), '+', getRandomNum(4)));
//     // get trueResult
//     // result
//     // generate fakeResult
//     let fakeResult = createMisleadingResult(operation.result);
//     console.log(fakeResult);
//     // put them in array
//     // get random
//     // set that value to state
//     console.log("result: ", operation);
//     console.log("Fake result: ", fakeResult);
//   }, []);

//   useKeypress('ArrowLeft', () => {
//     console.log("heh")
//   })
//   useKeypress('ArrowRight', () => {
//     console.log("righ")
//   })

//   // useEffect(() => {

//   // const handleInput = e => {
//   //   switch (e.keyCode) {
//   //     case 37:
//   //       console.log("Left");
//   //       setUserInput(false);
//   //       break;

//   //     case 39:
//   //       console.log("Right");
//   //       setUserInput(true);
//   //       break;

//   //     default:
//   //       console.log("Invalid Key");
//   //       setUserInput(true);
//   //       return;
//   //   }


//   //   debugger
//   //   if (userInput !== isMisleadingOperation) {
//   //     console.log("Score!");
//   //     // setSco
//   //   } else {
//   //     console.log("You Fucked it up");
//   //   }

//   // }
//   // document.addEventListener("keydown", handleInput, false);

//   // if (result === resultShown) {
//   //   setIsMisleadingOperation(false);
//   // } else {
//   //   // showing deceive result
//   //   setIsMisleadingOperation(true);
//   // }

//   //   console.log("isCorrect: ", isMisleadingOperation);
//   //   return () => {
//   //     document.removeEventListener("keydown", handleInput, false);
//   //     console.log("Cleaning");
//   //   };
//   // }, [userInput, operation]);

//   const getRandomNum = num => {
//     return Math.floor(Math.random() * num);
//   }


//   const createMisleadingResult = result => {
//     // Increase this to make the game harder
//     const errorRange = 2;
//     const min = Math.ceil(result - errorRange);
//     const max = Math.floor(result + errorRange);
//     let misleadingResult = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (misleadingResult === result) {
//       return misleadingResult + 1;

//     }
//     return misleadingResult;
//   };





//   // if (result === resultChosen) {
//   //   setIsCorrect(true);
//   // } else {
//   //   // showing deceive result
//   //   setIsCorrect(false);
//   // }

//   // if (userInput === isCorrect) {
//   //   console.log("Score!");
//   //   console.log(result);
//   // }






//   return (
//     <Fragment>
//       <div className="operation" style={{ display: "inline", margin: "20px" }}>
//         <span id="num1">{num1}</span>
//         <span id="operator"> {operator} </span>
//         <span id="num2">{num2}</span>
//         <span> = </span>
//         <span id="result">{resultShown}</span>
//       </div>
//       <hr style={{ width: "80%" }} />
//       <div className="score"><span id="score">0</span></div>
//     </Fragment>
//   )
// }

export default Game;
