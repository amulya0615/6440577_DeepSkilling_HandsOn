import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handlePress = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  return (
    <div>
      <h1>React Event Examples</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <br /><br />

      <button onClick={handlePress}>OnPress</button>

      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
