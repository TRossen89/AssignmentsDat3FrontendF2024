import React, {useEffect, useState} from 'react'
import { fetchData } from '../../utils/persistenceFunction';



const PersonForm = ({addOrUpdatePerson, blankPerson, personToEdit}) => {

    const [person, setPerson] = useState({...personToEdit});

    
    function handleChange(event){

        const value = event.target.value;
        const name = event.target.id;

        setPerson({...person, [name] : value});
    }



    function handleSubmit(event)
    {
        event.preventDefault();

        addOrUpdatePerson({...person});
        //setPerson(blankPerson)
    }


    useEffect(
        ()=> {
            setPerson({...personToEdit});

        }, [personToEdit]
    )


  return (

    <div>
    <form onSubmit={handleSubmit}>

        <label htmlFor="id">Id</label>
        <input id="id"  readOnly placeholder="id" value={person.id} onChange={handleChange}/>

        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="name" value={person.name} onChange={handleChange}/>

        <label htmlFor="age">Age</label>
        <input id="age" type="number" min="1" max="120" placeholder="age" value={person.age} onChange={handleChange}/>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="email" value={person.email} onChange={handleChange}/>

        <label htmlFor="gender">Gender</label>
        <select id="gender" value={person.gender} onChange={handleChange}>

            <option defaultChecked>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        <button type='submit'>Add</button>
        <button type='button' onClick={() => setPerson(blankPerson)}> Reset </button>
</form>
      
    </div>
  )
}

export default PersonForm


