import React, { useState , useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Create a component that performs an expensive calculation (finding factorial) based on a user input.

function App() {
  const [input, setInput] = useState(0);
  const expensiveValue = useMemo(()=>{
    let fact=1;
    for(let i=1;i<=input;i++){
      fact*=i;
    }
    return fact
  },[input])
  return (
    <div>
      <input placeholder='Enter The Number' type='number' onChange={(e)=>{
        setInput(e.target.value);
      }}></input>
      <div>
        {expensiveValue}
      </div>
      
    </div>
  )
}

export default App
