import React from "react";
import "./App.css";
import useWordGame from "./hooks/useWordGame";

function App() {
  const {
    textAreaRef,
    isDisabled,
    handleChange,
    inputtedData,
    timeRemaining,
    wordCount,
    startGame,
  } = useWordGame(5);
  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textAreaRef}
        disabled={!isDisabled}
        onChange={handleChange}
        value={inputtedData}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button disabled={isDisabled} onClick={() => startGame()}>
        Start
      </button>
      <h1>
        Word Count:
        {wordCount}
      </h1>
    </>
  );
}

export default App;
