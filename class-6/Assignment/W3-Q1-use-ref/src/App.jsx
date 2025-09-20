import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useEffect, useRef } from "react";

// Create a component with a text input field and a button.
// When the component mounts or the button is clicked, automatically focus the text input field using useRef.

function App() {
  const inputField = useRef();

  useEffect(() => {
    inputField.current.focus();
  }, []);

  const handleButtonClick = () => {
    inputField.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={inputField} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}

export default App;
