import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function onClickHandler(){setCount(count+1)}
  return (
    <div>
      <h1>Rohit Khaire</h1>
      <button onClick={onClickHandler}>Counter: {count}</button>
    </div>
  )
}

export default App
