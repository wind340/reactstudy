import React, { Component } from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumber = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumber, bonusNumber];
}

class Lottoclass extends Component() {
  state = {
    winNumber: getWinNumbers(), //당첨 숫자
    winBalls: [],
    bonus: null, // 보너스 숫자
    redo: false,
  };
  render() {
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map(v => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <div>보너스</div>
        {bonus && <Ball number={bonus} />}
        <button onClick={redo ? onClickRedo : () => {}}> 한 번 더 !</button>
      </>
    );
  }
}

export default Lottoclass;
