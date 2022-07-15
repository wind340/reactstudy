import React from "react";
import { useState, useRef } from "react";

const WordRelay = () => {
  const [word, setWord] = useState("기찻길");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = e => {
    e.preventDefault();
    console.dir(e.target);
    console.log(e.target.children.word.value);
    if (word[word.length - 1] === e.target.children.word.value[0]) {
      setResult("딩동댕"),
        setWord(e.target.children.word.value),
        (e.target.children.word.value = "");
      inputRef.current.focus();
    } else {
      setResult("땡");
      e.target.children.word.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input id="word" ref={inputRef} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
