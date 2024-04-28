import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import upper from './file1.js'
import { text1, text2, text3 } from './file1.js'
import person from './file2.js'
import {males, females} from './file2.js'
import {Welcome, MultiWelcome, WelcomePerson} from './file3.jsx'
import JokeComponent, {JokeComponentAuto} from './file4.jsx'



function App() {
  
  const {firstName, email} = person;

  const [name1, name2] = males;
  const [name3, name4] = females;

  const allNames = [...males, ...females];

  const allNamesPlusMoreNames = [...males, person.firstName, "Helle", ...females, "Tina"]

  const personV2 = {...person, phone: 22222222, friends: [...females, ...males]}


  console.log(name1, name2, name3, name4);
  console.log(allNames);
  console.log(allNamesPlusMoreNames);
  console.log(personV2);

  return <>

    <h1> Ex 1 </h1>

    <p>{upper(text1)}</p>
    <p>{upper(text2)}</p>
    <p>{upper(text3)}</p>
  
    <h1> Ex 2 </h1>

    <p>First name: {firstName}</p>
    <p>Email: {email}</p>


    <p>{name1}</p>
    <p>{name2}</p>
    <p>{name3}</p>
    <p>{name4}</p>


    <h1> Ex 3</h1>

    <MultiWelcome/>


    <h2> Ex 4 - Chuck Norris joke: </h2>

    <JokeComponent/>

    <h2>Automated jokes for 60 seconds:</h2>
    <JokeComponentAuto/>


  </>
}

export default App
