import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {

  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title={"I am Rohit 2"}></Header>
      <Header title={"I am Rohit 3"}></Header>
      <Header title={"I am Rohit 4"}></Header>
    </>
  )
}

function HeaderWithButton(){
  const [text, setText] = useState("I am Rohit 1")
  function changeHeader(){
    setText("I am Rohit "+ Math.random())
  }
  return (
    <>
      <button onClick={changeHeader}>Change 1st Header</button>
      <Header title={text}></Header>
    </>
  )
}
function Header({title}){
  return (
    <div>
      {title}
    </div>
  )
}

export default App
