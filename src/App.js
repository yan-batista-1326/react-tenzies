import React, {useState} from 'react'

import './App.css';

/* Components */
import Die from './components/Die.js'

function App() {
  const [randomDiceObj, setRandomDiceObj] = useState([])

  // Get an amount of random numbers between 
  // 1 and the max number of dice sides
  function getRandomNumbers() {
    const diceSides = 6;

    if(randomDiceObj.length > 0) {
      setRandomDiceObj(prevRandomDice => {
        return prevRandomDice.map(diceObj => {
          return diceObj.held === false ? 
          {...diceObj, value: Math.round((Math.random() * (diceSides - 1) ) + 1)} : {...diceObj}
        })
      })
    } else {
      const randomNumbersArr = [];
      const amount = 10;

      for(let i = 0; i < amount; i++) {
        // Genereate a value between 0 and (sides - 1)
        // and add 1 so that excludes 0.
        const randomNumber = Math.round((Math.random() * (diceSides - 1) ) + 1);
        const obj = {
          id: i, 
          value: randomNumber,
          held: false
        }
    
        randomNumbersArr.push(obj);
      }
      setRandomDiceObj(randomNumbersArr)
    }
  }

  // Change dice held property
  function holdDice(id) {
    setRandomDiceObj(prevDiceObj => {
      return prevDiceObj.map(diceObj => {
        return diceObj.id === id ? {...diceObj, held: !diceObj.held} : diceObj
      })
    })
  }

  // Map the numbers array from state to
  // Die elements
  const dieElements = randomDiceObj.map(diceObj => {
    return <Die key={diceObj.id} id={diceObj.id} value={diceObj.value} handleClick={holdDice} held={diceObj.held}/>
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
