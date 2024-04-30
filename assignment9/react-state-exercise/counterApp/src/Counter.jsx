import { useState, useEffect } from "react";


function Counter({initialValue}){

    const [count, setCount] = useState(initialValue);


    const handleClickPlus = () => setCount((count) => count + initialValue);
    const handleClickMinus = () => setCount((count) => count - initialValue);

    return (<>

        <div>
            <button onClick = {handleClickPlus}>Plus</button>
            {count ? (<p> {count}</p>) : (<p>{initialValue}</p>)} 
            <button onClick={handleClickMinus}>Minus</button>

        </div>


    </>)

}

export {Counter};