import React, { useState, useRef, useEffect } from "react";

function useWordGame(startingTime = 10) {
  const [inputtedData, setInputedData] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [timerStarted, setTimerStarted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  const textAreaRef = useRef();

  let handleChange = (event) => {
    const { value } = event.target;
    setInputedData(value);
  };

  let calculateWordCount = (text) => {
    setTimerStarted(true);
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter((word) => word !== "");
    return filteredWords.length;
  };

  let startGame = () => {
    setInputedData("");
    setTimerStarted(true);
    setTimeRemaining(startingTime);
    setDisabled(true);
    textAreaRef.current.focus();
  };

  let endGame = () => {
    setTimerStarted(false);
    const total = calculateWordCount(inputtedData);
    setWordCount(total);
    setDisabled(false);
  };

  useEffect(() => {
    if (timeRemaining > 0 && timerStarted === true) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, timerStarted]);
  return {
    textAreaRef,
    isDisabled,
    handleChange,
    inputtedData,
    timeRemaining,
    wordCount,
    startGame,
  };
}

export default useWordGame;
