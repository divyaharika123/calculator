import React, { useState } from 'react';
import './App.css';
function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result+(e.target.value))
  }
  const clear = () => {
    setResult("");
  }
  const calculate = () => {
    setResult(eval(result))
  }
  const del=()=>{
    setResult(result.slice(0,-1))
  }
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      <form>
        <input type="text" value={result}></input>
      </form>
      <div className='keys'>
        <button value="clear" onClick={clear}>Clear</button>
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="-" onClick={handleClick}>-</button>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="+" onClick={handleClick}>+</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="del" onClick={del}>DEL</button>
        <button value="*" onClick={handleClick}>*</button>
        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}
export default App;
