
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. 
// Pass these functions to a child component which has buttons to perform the 
// increment and decrement actions. Use useCallback to ensure that these 
// functions are not recreated on every render.

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(()=>{
    setCount((count)=> count+1)
  }, [])

  const handleDecrement = useCallback(()=>{
    setCount((count)=> count-1)
  }, [])


  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

//This component should not re-render and only count should re-render
const CounterButtons = ({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);

export default App;