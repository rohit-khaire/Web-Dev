import React, { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { response } from 'express'

function App() {
  return (
    <div>
      <Todo id={2} />
    </div>
  )
}

const Todo = React.memo(({id})=>{
  const [todo, setTodo] = useState({})

  useEffect(function(){
    fetch(`https://dummyjson.com/todos/${id}`).then((response)=>{
      return response.json()
    }).then((result)=>{
      setTodo(result)
    }).catch(()=><h1>Error</h1>)
  },[id])

  return (
  <div>
    <h1>TODO Test that re-renders on change of id</h1>
    <h1>ID: {todo.id}</h1>
    <h3>Title: {todo.todo}</h3>
    <h3>Completed: {(todo.completed)==true ? "Yes" : "No"}</h3>
    <h3>User ID: {todo.userId}</h3>
  </div>
  )
})

export default App
