import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import { fetchData } from '../utils/persistenceFunction'
import './styles/App.css'


const blankPerson = { 
  "id": '',
  "age": '', 
  "name": '',
  "email": '',
  "gender": ''

}

function App() {
  
  const [persons, setPersons] = useState([]);
  const [personToEdit, setPersonToEdit] = useState({...blankPerson});

  const APIURL = "http://localhost:3000/api"



  function editPerson(person){
    setPersonToEdit(person)

  }

  function addPerson(person){

    fetchData(APIURL, (personCreated)=>{setPersons([...persons, personCreated])}, 'POST', person)
  }

  function updatePerson(person){
    
    fetchData(`${APIURL}/${person.id}`, (personCreated) => setPersons(persons.map((p) => p.id === personCreated.id ? {...personCreated} : p)), 'PUT', person);
     
  }

  function addOrUpdatePerson(person){

    if(person.id != ''){
      updatePerson(person);
    }
    
    else{
      delete person.id;
      addPerson(person);
    }

  }

  
  function deleteById(id){

    fetchData(`${APIURL}/${id}`, ()=>{}, 'DELETE');

    setPersons([...persons.filter(p => p.id != id)]);
  }



  function getPersons(callback){

    fetchData(APIURL, callback) 
  }


  useEffect(()=>{
    
    getPersons((data) => setPersons(data));

    }, []);


  return (
    <>
    <div>
      <h1>Person data</h1>
      <PersonForm blankPerson = {blankPerson} personToEdit={personToEdit} addOrUpdatePerson={addOrUpdatePerson}/>
      <PersonList persons ={persons} deleteById = {deleteById} editPerson={editPerson}/>
    </div>
      
    </>
  )
}

export default App
