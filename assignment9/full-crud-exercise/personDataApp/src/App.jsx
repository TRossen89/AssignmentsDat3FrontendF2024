import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'


import './styles/App.css'

function App() {
  
  
  const [updated, setUpdated] = useState(false);
  //const [formFill, setFormFill] = useState({"age": " ", "name": " ", "email": " ", "gender":"Select gender"})
  
  const getPersons = () => {
         
  }


  return (
    <>
    <div>
      <h1>Person data</h1>
      <PersonForm updated = {updated} setUpdated= {setUpdated} />
      <PersonList updated = {updated} setUpdated = {setUpdated}/>
    </div>
      
    </>
  )
}

export default App
