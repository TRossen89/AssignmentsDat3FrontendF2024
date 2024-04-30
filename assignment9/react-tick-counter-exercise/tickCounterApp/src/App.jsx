import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TickCounter from './TickCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <TickCounter/>
        
      </div>
    </>
  )
}

export default App
