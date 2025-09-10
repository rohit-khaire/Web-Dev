import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState("")
  const [sum,setSum] = useState(0)

  return (
    <div>
      <input type="number" placeholder='Enter The Number' value={number} onChange={function(e){
    const value = e.target.value
    setNumber(value)
    const num = parseInt(value)
    if (!isNaN(num)) {
      setSum((num * (num + 1)) / 2)  // formula for sum
    } else {
      setSum(0)  // reset sum if input is empty, show 0 , not NaN
    }}}></input>
      <h3>Sum is : {sum}</h3>
      <button onClick={function(){
        setCount(count+1)
      }}>Counter: {count}</button>
    </div>
  )
}

export default App
