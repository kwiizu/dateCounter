import React from 'react';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleReduceStep = () => {
    setStep((curStep) => curStep - 1);
  };
  const handleAddStep = () => {
    setStep((curStep) => curStep + 1);
  };

  const handleReduceCount = () => {
    setCount((curCount) => curCount - step);
  };
  const handleAddCount = () => {
    setCount((curCount) => curCount + step);
  };

  const todayDate = new Date().toDateString();

  // const date = new Date();
  // const countDate = date.getDate() + count;
  // date.setDate(countDate);

  const calcDate = () => {
    const date = new Date();
    const countDate = date.getDate() + count;
    date.setDate(countDate);
    return date.toDateString();
  };

  calcDate();

  return (
    <>
      <div>
        <button onClick={handleReduceStep}>-</button>
        <span>Increament: {step}</span>
        <button onClick={handleAddStep}>+</button>
      </div>
      <div>
        <button onClick={handleReduceCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleAddCount}>+</button>
      </div>
      <p style={{ fontSize: 28 }}>
        {`${
          count === 0
            ? `Today is ${todayDate}`
            : `${count} days til ${calcDate()}`
        }`}
      </p>
    </>
  );
};

export default App;
