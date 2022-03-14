import React, {useState} from 'react'

import './App.css';

/* Components */
import Die from './components/Die.js'

function App() {
  const [randomNumbers, setRandomNumbers] = useState([])

  // Get an amount of random numbers between 
  // 0 and the max number of dice sides
  function getRandomNumbers() {
    const randomNumbersArr = [];
    const amount = 10;
    const diceSides = 6;

    for(let i = 0; i < amount; i++) {
      const obj = {
        id: i, 
        value: Math.floor(Math.random() * diceSides)
      }

      randomNumbersArr.push(obj);
    }

    setRandomNumbers(randomNumbersArr)
  }

  // Map the numbers array from state to
  // Die elements
  const dieElements = randomNumbers.map(number => {
    return <Die key={number.id} value={number.value}/>
  })

  return (
    <div className="App">
      <h1 className="App--title">Tenzi</h1>
      <p className="App--description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      
      <div className="dieContainer">
        {dieElements}
      </div>

      <button className="App--button" onClick={getRandomNumbers}>Roll</button>
    </div>
  );
}

export default App;
