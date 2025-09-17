import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue , setInputValue] = useState(0);

  let count = useMemo(()=>{
    let sum=0;
    for(let i=0;i<=inputValue;i++){
      sum+=i;
    }
    return sum;
  }, [inputValue])

  return (
    <div>
      <input onChange={function(e){
        setInputValue(e.target.value);
      }} ></input>

      <h3>Sum from 1 to {inputValue} : {count}</h3>

      <button onClick={function(){
        setCounter(counter+1)
      }
      }>Counter: {counter}</button>

    </div>
  )

}

export default App
