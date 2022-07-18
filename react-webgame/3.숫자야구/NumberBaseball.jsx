import React, { Component } from "react";
import Try from "./try";

const getNumbers = () => {
  // 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

const NumberBaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers);
  const [tries, setTries] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런!"),
        setTries(prevTries => {
          return [...prevTries, { try: value, result: "홈런!" }];
        });
      alert("게임을 다시 시작합니다");
      setValue("");
      setTries([]);
      setAnswer(getNumbers());
      setResult("");
    } else {
      //틀렸을 경우
      const answerArray = value.split("").map(v => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        // 10번이내 실패시
        setResult(`10번 넘게 돌려서 실패! 답은 ${answer.join("")} 였습니다.`);

        alert("게임을 다시 시작합니다");
        setValue("");
        setTries([]);
        setAnswer(getNumbers());
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries(prevTries => [
          ...prevTries,
          { try: value, result: `${strike} 스트라이크 , ${ball} 볼 입니다` },
        ]);
        setValue("");
      }
    }
  };

  const onChange = e => {
    console.log(this.state.answer);
    this.setState({ value: e.target.value });
  };

  return (
    <>
      <div>{result}</div>
      <form onSubmit={onSubmit}>
        <input maxLength={4} onChange={onChange} value={value}></input>
        <button type="submit">입력</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도" : `} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default NumberBaseball;
