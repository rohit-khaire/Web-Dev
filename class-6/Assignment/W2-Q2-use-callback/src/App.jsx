import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useCallback } from "react";

// Create a component with a text input field and a button. The goal is to display an alert 
// with the text entered when the button is clicked.
// Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.

function App() {
  
  const [inputText, setInputText] = useState("");

  const showAlert = useCallback(()=>{
    alert(inputText)
  },[inputText])

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter some text"
      />
      <Alert showAlert={showAlert} />
    </div>
  );
}

const Alert = React.memo(({ showAlert })=>{
  return <button onClick={showAlert}>Show Alert</button>;
})

export default App;
