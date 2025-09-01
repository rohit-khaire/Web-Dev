import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
  {
    title: "Go to GYM",
    desc: "Aroud 5-6, and spend 1HR there",
    completed: false
  },
  {
    title: "DSA",
    desc: "2HR of DSA on LeetCode",
    completed: false
  }
  ])

  function addTodo(){
    setTodo([...todo,
      {
        title: "New Task Added",
        desc: "Added on Click of Button",
        completed: false
      }
    ])
  }
  return (
    <div>
        <h1>Todo List</h1>
        <button onClick={addTodo}>Add Todo!</button>
        {
          todo.map(function(x){
            return(
            <div>
              <h2>{x.title}</h2>
              <h5>{x.desc}</h5>
            </div>  )
          })
        }
    </div>
  )
}

export default App
