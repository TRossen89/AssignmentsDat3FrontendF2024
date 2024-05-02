import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'


import './styles/App.css'

function App() {
  
  
  const [updated, setUpdated] = useState(false);
  
  const getPersons = () => {
         
  }


  return (
    <>
    <div>
      <h1>Person data</h1>
      <PersonForm updated = {updated} setUpdated= {setUpdated}/>
      <PersonList updated = {updated} setUpdated = {setUpdated}/>
    </div>
      
    </>
  )
}

export default App
