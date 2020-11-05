import React, { Fragment, useEffect, useState } from 'react';
// import Operation from '../components/'
import Operation from '../operation';

const Game = () => {
  const [operation, setOperation] = useState('');
  const [userInput, setUserInput] = useState(false);
  const [isMisleadingOperation, setIsMisleadingOperation] = useState(false);


  useEffect(() => {
    setOperation(new Operation(getRandomNum(4), '+', getRandomNum(3)));
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleInput, false);
    const bothResults = [result, createMisleadingResult(result)];
    // Think of changing the name of 'resultChosen'. this is a random selection
    // this will randomly display either the real result or the deceptive result 
    const resultChosen = bothResults[Math.floor(Math.random() * bothResults.length)];
    if (result === resultChosen) {
      setIsMisleadingOperation(true);
    } else {
      // showing deceive result
      setIsMisleadingOperation(false);
    }
    console.log("isCorrect: ", isMisleadingOperation);
    return () => {
      document.removeEventListener("keydown", handleInput, false);
    };
  }, [operation]);

  const { num1, operator, num2, result } = operation;
  const getRandomNum = num => {
    return Math.floor(Math.random() * num);
  }

  const handleInput = e => {
    switch (e.keyCode) {
      case 37:
        console.log("Left");
        setUserInput(false);
        break;

      case 39:
        console.log("Right");
        setUserInput(true);
        break;

      default:
        break;
    }
    if (userInput !== isMisleadingOperation) {
      console.log("Score!");
      // setSco
    }

  }

  const createMisleadingResult = result => {
    // Increase this to make the game harder
    const errorRange = 1;
    const min = Math.ceil(result - errorRange);
    const max = Math.floor(result + errorRange);
    let misleadingResult = Math.floor(Math.random() * (max - min + 1)) + min;
    if (misleadingResult === result) {
      return misleadingResult + 1;

    }
    return misleadingResult;
  };





  // if (result === resultChosen) {
  //   setIsCorrect(true);
  // } else {
  //   // showing deceive result
  //   setIsCorrect(false);
  // }

  // if (userInput === isCorrect) {
  //   console.log("Score!");
  //   console.log(result);
  // }






  return (
    <Fragment>
      <div className="operation" style={{ display: "inline", margin: "20px" }}>
        <span id="num1">{num1}</span>
        <span id="operator"> {operator} </span>
        <span id="num2">{num2}</span>
        <span> = </span>
        <span id="result">{result}</span>
      </div>
      <hr style={{ width: "80%" }} />
      <div className="score"><span id="score">0</span></div>
    </Fragment>
  )
}

export default Game;
