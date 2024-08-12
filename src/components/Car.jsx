import React , {useState} from "react";

function Car(){

    const [car,setCar]=useState({year:2024 , brand:"ford"})

    const handleYear = (e)=>{
        setCar({...car,year:e.target.value})
    }
    return(
        <div>
            <p>Your Favorite Car is : {car.year} , {car.brand} </p>

            <input type="number" onChange={handleYear} value={car.year}/>
            <input type="text" value={car.brand}/> 

        </div>
    )
}

export default Car;