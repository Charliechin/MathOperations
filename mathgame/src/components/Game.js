import React, { Fragment, useEffect, useState } from 'react';
import Operation from '../operation';
import useKeypress from '../hooks/useKeypress'

const Game = () => {

  const [operation, setOperation] = useState(new Operation(2, '+', 2))

  const muchi = [operation.result, operation.misleadingResult];
  const [muchiElegida, setMuchiElegida] = useState(muchi[Math.floor(Math.random() * 2)]);
  const [score, setScore] = useState(0);

  useEffect(() => console.log(muchi), [score]);
  useKeypress('ArrowLeft', () => {
    console.log("<-");
    setScore(score => score + 1);

  });

  return (
    <Fragment>
      <div className="operation" style={{ display: "inline", margin: "20px" }}>
        <span id="num1">{operation.num1}</span>
        <span id="operator"> {operation.operator} </span>
        <span id="num2">{operation.num2}</span>
        <span> = </span>
        <span id="result" >{muchiElegida}</span>
        {/* <span id="result" ref={displayedResultEl} >{[result, misleadingResult][Math.floor(Math.random() * 2)]}</span> */}
        <br />
        {/* <span id="misleading-result">{result} -----{misleadingResult}</span> */}
      </div>
      <hr style={{ width: "80%" }} />
      <div className="score"><span onClick={(e) => { setScore(score + 1) }} id="score">{`Score: ${score}`}</span></div>
    </Fragment>
  )
}
export default Game;
