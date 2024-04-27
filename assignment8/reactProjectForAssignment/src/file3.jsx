import React from "react";
import {persons} from './file2.js' 


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }


function MultiWelcome() {

    
    return (
        <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <p>---</p>
        <p>---</p>

        <WelcomePerson person = {persons[0]} />
        <p>---</p>
        <WelcomePerson person = {persons[1]} />
        <p>---</p>
        <WelcomePerson person = {persons[2]} />

        <h1>Repeated with persons.map():</h1>

        {persons.map((person)=>{return <><p>---</p> <WelcomePerson person = {person}/> </>})}

        
    
        </div>
    );
}

function WelcomePerson(props){

    return ( <div>
        <h2>First name: {props.person.firstName}</h2>
        <h2>Last name: {props.person.lastName}</h2>
        <h2>Email: {props.person.email}</h2>
        </div> );


}

export {Welcome};
export {MultiWelcome};
export {WelcomePerson};