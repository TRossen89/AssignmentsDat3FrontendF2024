import { useEffect, useState } from "react";




function TickCounter (){

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [start, setStart] = useState(false);

    const resetTimer = () => {
      setStart(false);
      setMinutes(0);
      setSeconds(0);

    }

    const startTimer = () => {
      setStart(true);
    }

    useEffect(() => {
      
      if(start){


        const timer = () => {

          if(minutes == 0 && seconds == 0){
            setStart(false)
            setMinutes(0)
            setSeconds(0)
          } else

          {
            if(seconds > 0){
              setSeconds((seconds) => seconds - 1)
            }
            if(seconds == 0){
    
              setMinutes((minutes) => minutes -1)
              setSeconds(59)
            } 
          }
        
      }
    
    const intervalId = setInterval(timer, 1000);

    return () => clearInterval(intervalId) 
      }
  
  }, [start, seconds]);

    return (
        <div>
        

          <div>
            <input
              type="number"
              placeholder="Minutes"
              //value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <input
              type="number"
              placeholder="Seconds"
              //value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <button onClick={startTimer}>Start</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
          <div>Time Remaining: 
            <div id= "clockDiv">
              <div class="secondsAndMinutes" >{minutes}</div>
              <div class="secondsAndMinutes" >{seconds}</div>
            </div>
          </div>
        </div>
      );
}


export default TickCounter;