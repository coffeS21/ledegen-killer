import React from "react"
import axios from "axios"
import NewLegdenForm from "./NewLegdenForm"
import ListofLegdens from "./ListofLegdens"
function HoldingFile(props){

    function addLegden(newLegden){
        axios.post("/legdens", newLegden)
        .then(res => console.log(res))
    }
    return(
        <>
            <NewLegdenForm submit={addLegden} buttonText="submit"/>    
            <ListofLegdens/>
        </>
    )
}
export default HoldingFile