import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import React from "react"

function App() {

  return (
    <div>
      <Header />
    </div>
  )
}

const Header = React.memo(()=>{
    const [id, setId] = useState(1)
    const [todo, setTodo] = useState({})

    useEffect(()=>{
      axios.get(`https://dummyjson.com/todos/${id}`).then((res)=>{
        setTodo(res.data)
      }).catch((err)=>{
        console.log("Error")
      })
    },[id])
    return (
      <div>
        <div>
          <button onClick={function(){
            setId(1)
          }}>1</button>
          <button onClick={function(){
            setId(2)
          }}>2</button>
          <button onClick={function(){
            setId(3)
          }}>3</button>
          <button onClick={function(){
            setId(4)
          }}>4</button>
        </div>
        <div>
          <h3>ID : {todo.id}</h3>
          <h3>Title : {todo.todo}</h3>
          <h3>Completed: {todo.completed == true ? "Yes" : "No"}</h3>
          <h3>User ID : {todo.userId}</h3>
        </div>
      </div>
    )
  }
)

export default App
