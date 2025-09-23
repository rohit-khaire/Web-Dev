import { useRef, useState } from 'react'
//Count number of times re-rendered
//Disable Strict Mode!

function App() {
  const [count, setCount] = useState(0);
  const noOfTimesReRendered = useRef(0);
  const forceReRender = ()=>{
    setCount(count+1)
  }
  noOfTimesReRendered.current +=1;
  return (
    <div>
      <p>Number of Times Re-Rendered: {noOfTimesReRendered.current}</p>
      <p>Counter: {count}</p>
      <button onClick={forceReRender}>Force to Re-Render</button>
    </div>
  )
}

export default App
