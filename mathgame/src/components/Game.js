import React, { Fragment, useEffect, useState } from 'react';
import Operation from '../operation';
import useKeypress from '../hooks/useKeypress'

const Game = () => {

  const [operation, setOperation] = useState(new Operation(2, '+', 2))
  const [results, setResults] = useState([operation.result, operation.misleadingResult])
  const [resultDisplay, setResultDisplay] = useState(results[Math.floor(Math.random() * 2)]);

  const [score, setScore] = useState(0);

  // useEffect(() => console.log(muchi));

  useEffect(() => {

    if (operation.result === resultDisplay) {
      console.log("this equation is true");
    } else {
      console.log("this equation is false");
    }


    setResults(() => ([operation.result, operation.misleadingResult]))
    setResultDisplay(() => results[Math.floor(Math.random() * 2)]);
    console.log("Cuenta cambiada");
    console.log(results);
    console.log(operation);

  }, [operation, setResults, setResultDisplay]);


  useKeypress('ArrowLeft', () => {
    console.clear();
    console.log("<-");
    setScore(score => score + 1);

    setOperation(new Operation(Math.floor(Math.random() * 6), '+', Math.floor(Math.random() * 6)))

  });




  return (
    <Fragment>
      <div className="operation" style={{ display: "inline", margin: "20px" }}>
        <span id="num1">{operation.num1}</span>
        <span id="operator"> {operation.operator} </span>
        <span id="num2">{operation.num2}</span>
        <span> = </span>
        <span id="result" >{resultDisplay}</span>
        {/* <span id="result" ref={displayedResultEl} >{[result, misleadingResult][Math.floor(Math.random() * 2)]}</span> */}
        <br />
        {/* <span id="misleading-result">{result} -----{misleadingResult}</span> */}
      </div>
      <hr style={{ width: "80%" }} />
      <div className="score"><span id="score">{`Score: ${score}`}</span></div>
    </Fragment>
  )
}
export default Game;
