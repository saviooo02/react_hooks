import { useState } from "react";

function Mood(){

    const [mood,setMood]=useState();

    const handleMoodChange = (e)=>{
        setMood(e.target.value)
    }

    return(
        <>
            <p>What's your current mood</p>
            <select onChange={handleMoodChange} name="mood" id="mood">
                <option value="happy" >Happy</option>
                <option value="sad">Sad</option>
                <option value="angry">Angry</option>
                <option value="confused">Confused</option>
            </select>

            <p>Your current mood is : {mood}</p>
        </>
    )
}

export default Mood;