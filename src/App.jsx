import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [inputtedData, setInputedData] = useState("");
  let handleChange = event => {
    const {value} = event.target;
    setInputedData(value);
  }

  let calculateWordCount = text => {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter(word => word !== "");
    console.log(filteredWords.length);
    return filteredWords.length;
  }
  
  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={inputtedData} />
      <h4>Time Remaining: ???</h4>
      <button onClick={() => calculateWordCount(inputtedData)}>Start</button>
      <h1>Word Count: ???</h1>
      <div>{inputtedData}</div>
    </>
  )
}

export default App
