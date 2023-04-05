import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setInput(input.concat(e.target.name));
  }

  const clear = () => {
    setInput('');
    setResult('');
  }

  const backspace = () => {
    setInput(input.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      setResult("Error");
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
        <input type="text" value={result} disabled />
      </div>
      <div className="buttons">
        <button className="btn btn-clear" onClick={clear}>Clear</button>
        <button className="btn btn-backspace" onClick={backspace}>C</button>
        
        <button className="btn" name="7" onClick={handleClick}>7</button>
        <button className="btn" name="8" onClick={handleClick}>8</button>
        <button className="btn" name="9" onClick={handleClick}>9</button>
        <button className="btn" name="4" onClick={handleClick}>4</button>
        <button className="btn" name="5" onClick={handleClick}>5</button>
        <button className="btn" name="6" onClick={handleClick}>6</button>
        <button className="btn" name="1" onClick={handleClick}>1</button>
        <button className="btn" name="2" onClick={handleClick}>2</button>
        <button className="btn" name="3" onClick={handleClick}>3</button>
        <button className="btn" name="+" onClick={handleClick}>+</button>
        <button className="btn" name="/" onClick={handleClick}>/</button>
        <button className="btn" name="*" onClick={handleClick}>*</button>
        <button className="btn" name="-" onClick={handleClick}>-</button>
        <button className="btn btn-zero" name="0" onClick={handleClick}>0</button>
        <button className="btn" name="." onClick={handleClick}>.</button>
        <button className="btn btn-equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
