import React, {useEffect, useState} from 'react'
import { fetchData } from '../../utils/persistenceFunction';



const PersonForm = ({updated, setUpdated, formFill, setFormFill}) => {

    const APIURL = "http://localhost:3000/api"
    
    const addPerson = (e) => {
        e.preventDefault();

        const person = {
            "age": e.target.age.value,
            "name": e.target.name.value,
            "email": e.target.email.value,
            "gender": e.target.gender.value}
        
        fetchData(APIURL, ()=>{}, 'POST', person)
        setUpdated(!updated)}



  return (

    <div>
    <form onSubmit={addPerson}>

        <label htmlFor="id">Id</label>
        <input id="id" type="number" readOnly placeholder="id"/>

        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="name"/>

        <label htmlFor="age">Age</label>
        <input id="age" type="number" min="1" max="120" placeholder="age"/>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="email"/>

        <label htmlFor="gender">Gender</label>
        <select id="gender">

            <option defaultChecked>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        <button type="submit">Add</button>
</form>
      
    </div>
  )
}

export default PersonForm


