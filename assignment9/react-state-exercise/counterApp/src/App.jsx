import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter'
import { useEffect } from 'react'
import ListDemo from './ListDemo'

function App() {
  
  let initialValueForCounter = parseInt(localStorage.getItem("count")) || 5;
    

  return (
    <>
      <Counter initialValue={initialValueForCounter}/>


      <ListDemo/>
    </>
  )
}



export default App
