import './App.css';

/* Components */
import Die from './components/Die.js'

function App() {
  return (
    <div className="App">
      <h1 className="App--title">Tenzi</h1>
      <p className="App--description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dieContainer">
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
      </div>

      <button className="App--button">Roll</button>
    </div>
  );
}

export default App;
