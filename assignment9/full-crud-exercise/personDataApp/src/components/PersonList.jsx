import React, {useEffect, useState} from 'react'
import { fetchData } from '../../utils/persistenceFunction'

const PersonList = ({updated}) => {

    const [persons, setPersons] = useState([]); 
    const APIURL = "http://localhost:3000/api"
  
    useEffect(()=>{
        
        fetchData(APIURL, setPersons) 

        }, [updated])
  
    return (
    <div>
    <h1> List of persons</h1>

    <table className="table table-striped">
    <thead>
        <tr key = {crypto.randomUUID()}>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Action</th>
        </tr>
    </thead>
    <tbody>

    {persons.map((person) => (
            <tr key = {crypto.randomUUID()}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.email}</td>
            <td>{person.gender}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
            </tr>
        ))}
        
    </tbody>
    </table>
      
    </div>
  )
}

export default PersonList
