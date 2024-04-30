import { useState } from "react";



function startTimer(){
    
}
function resetTimer(){

}
function TickCounter (){

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [startStop, setStartStop] = useState(null);

    return (
        <div>
        
    

          <div>
            <input
              type="number"
              placeholder="Minutes"
              //value={minutes}
              //onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <input
              type="number"
              placeholder="Seconds"
              //value={seconds}
              //onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <button onClick={startTimer}>Start</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
          <div>Time Remaining: {//formatTime(time)
          }
          </div>
        </div>
      );
}

function formatTime(time){

    return (<div id= "clockDiv">
    <div class="secondsAndMinutes">{minutes}</div>
    <div class="secondsAndMinutes">{seconds}</div>
</div>)
}

export default TickCounter;