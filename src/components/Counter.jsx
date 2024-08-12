import { useState } from "react";

function Counter(){

    const [num,setNum]= useState(0)

    const addCounter = ()=>{
        setNum(num+1);
    }

    const subCounter = ()=>{
        setNum(num-1);
    }

    const reset = ()=>{
        setNum(0);
    }
    
    return(
        <div>
            <p>Num: {num}</p>
            <button onClick={addCounter}>Add</button>
            <button onClick={subCounter}>Subtract</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;