import React, { useState, useEffect } from 'react';

function JokeComponent() {
    
    const [joke, setJoke] = useState('');

    function fetchingJoke(){
        // State to store the joke
    
    fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setJoke(data.value))
            .catch(error => console.error('Error fetching joke:', error));
    // useEffect to fetch the joke
    /*useEffect(() => {
    
    }, []); // Empty dependency array means this runs once on mount*/
    
    }
    
    // Render the joke
    return (
        <div>
            <button onClick={fetchingJoke}> Get a joke</button>
            <p>{joke}</p>
        </div>
    )
}



function JokeComponentAuto() {
    
    const [joke, setJoke] = useState('');

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setJoke(data.value))
            .catch(error => console.error('Error fetching joke:', error))
        }, []);


// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

    function fetchingJoke(){
        // State to store the joke
    
    
    //useEffect to fetch the joke
    
    
    
    
    // Render the joke
    return (
        <div>
            <button onClick={fetchingJoke}> Get a joke</button>
            <p>{joke}</p>
        </div>
    )
}






    

export default JokeComponent;
