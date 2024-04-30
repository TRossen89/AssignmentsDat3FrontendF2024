import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter'
import { useEffect } from 'react'

function App() {
  
  let initialValueForCounter = parseInt(localStorage.getItem("count")) || 5;
    

  return (
    <>
      <Counter initialValue={initialValueForCounter}/>
    </>
  )
}



export default App
