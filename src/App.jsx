import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  const STARTING_TIME = 5;
  const [inputtedData, setInputedData] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [timerStarted, setTimerStarted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isDisabled, setDisabled] = useState(false);

  let handleChange = event => {
    const {value} = event.target;
    setInputedData(value);
  }

  let calculateWordCount = text => {
    setTimerStarted(true);
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter(word => word !== "");
    return filteredWords.length;
  }

  let startGame = () => {
    setInputedData("");
    setTimerStarted(true);
    setTimeRemaining(STARTING_TIME);
    setDisabled(true)
  }

  let endGame = () => {
    setTimerStarted(false);
    const total = calculateWordCount(inputtedData);
    setWordCount(total);
    setDisabled(false)
  }

  useEffect(() => {
    if (timeRemaining > 0 && timerStarted === true) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000)      
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, timerStarted]);
  
  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea disabled={!isDisabled} onChange={handleChange} value={inputtedData} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button disabled={isDisabled} onClick={() => startGame()}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </>
  )
}

export default App
