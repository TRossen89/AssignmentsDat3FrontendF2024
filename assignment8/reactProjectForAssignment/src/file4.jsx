import React, { useState, useEffect } from 'react';

function JokeComponent() {
    
    // State to store the joke
    const [joke, setJoke] = useState('');

    function fetchingJoke(){
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

        const fetchJoke = () => {
            fetch('https://icanhazdadjoke.com/', {
                method: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
                headers: {
                  'Accept': 'application/json' // Setting the Accept header
                }})
                .then(response => response.json())
                .then(data => setJoke(data.joke))            
                .catch(error => console.error('Error fetching joke:', error))
        }

        fetchJoke();

        const intervalId = setInterval(fetchJoke, 10000);

        //setTimeout(() => {clearInterval(intervalId)}, 60000);

        return () => clearInterval(intervalId);
        
        }, []);

    
    
    // Render the joke
    return (
        <div>
            {joke ? (
                <h3>Joke: {joke}</h3>
            ) : (
                <p>Loading...</p>
            )
            }
        </div>
    )
}

export default JokeComponent;
export {JokeComponentAuto};
