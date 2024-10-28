1)Child Component

function Childcomponent(props) {
    return(
        <>
            <div>
                <h1>Current Weather in {props.location}</h1>
                <h3>Temperature 20C</h3> 
                <h3>Condition:Sunny</h3> 
            </div>
        </>

    )
}
export default Childcomponent

2) Parent Component

import { useState } from "react"
import Childcomponent from "../ChildComponentl";
function ParentComponent() {
    const [location ,setLocation] = useState("New York");
    const handleChange = ()=>{
        const value = document.getElementsByClassName("location")[0].value;
        setLocation(value);
    }
    return (
        <>
            <div>
                <h1>Weather Application</h1>

            </div>
            <div>
                <input placeholder="Enter a location"  className="location" ></input>
                <button onClick={handleChange}>Update Location</button>
            </div>
            <Childcomponent location={location}/>
        </>

    )
}
export default ParentComponent
