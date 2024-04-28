import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SvgComponent from './SvgComponent'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div>
      <SvgComponent/>
    </div>
    </>
  )
}
/*
const countryClick = () => {
  
  let previousClickedCountry = null; 

    const handleClick = (event) => {


      if (previousClickedCountry) {
        previousClickedCountry.style.fill = "Silver";
      }

      const countryId = event.target.id;

      if (countryId) {
       
        const country = document.getElementById(countryId);

        if (country) {
            
            country.style.fill = "red";
            previousClickedCountry = country;
        }
    }
  };

  document.getElementById('svg2').addEventListener('click', handleClick);
}
countryClick();
*/

export default App
