import React, {useState, useEffect} from 'react'

import './App.css';

/* Components */
import Die from './components/Die.js'

function App() {
  const [randomDiceObj, setRandomDiceObj] = useState(allNewValue)
  const [tenzi, setTenzi] = useState(false)

  // Check if game ended or not
  useEffect(() => {
    const firstValue = randomDiceObj[0].value;
    const allHeld = randomDiceObj.every(die => die.held)
    const allSameNumber = randomDiceObj.every(die => firstValue === die.value)
    if(allHeld && allSameNumber) {
      setTenzi(true);
    }
  }, [randomDiceObj])

  // Create new dice at the start
  function allNewValue() {
    const diceSides = 6;
    const randomNumbersArr = [];
    const amount = 10;

    for(let i = 0; i < amount; i++) {
      const obj = {
        id: i, 
        value: Math.ceil(Math.random() * diceSides),
        held: false
      }
  
      randomNumbersArr.push(obj);
    }
    return randomNumbersArr
  }

  // Get an amount of random numbers between 
  // 1 and the max number of dice sides
  function getNewRandomNumbers() {
    const diceSides = 6;
    setRandomDiceObj(prevRandomDice => {
      return prevRandomDice.map(diceObj => {
        return diceObj.held === false ? 
        {...diceObj, value: Math.ceil(Math.random() * diceSides)} : {...diceObj}
      })
    })
  }

  // Change dice held property
  function holdDice(id) {
    if(!tenzi) {
      setRandomDiceObj(prevDiceObj => {
        return prevDiceObj.map(diceObj => {
          return diceObj.id === id ? {...diceObj, held: !diceObj.held} : diceObj
        })
      })
    }
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
      {tenzi && <p>Congratulations!</p>}
      <button className="App--button" onClick={getNewRandomNumbers}>{tenzi ? "Reset Game" : "Roll"}</button>
    </div>
  );
}

export default App;
