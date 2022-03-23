import React, {useState} from "react"
import axios from "axios"
function NewLegdenForm(props){

    const inputData = {
        firstName: "",
        lastName: "",
        living: "",
        confrence: "",
        bountyAmount: ""
    }
    const  [legdenData, setLegdenData] = useState(inputData)

    const handleChange = e =>{
        const {name, value} = e.target
        setLegdenData(prevData => ({...prevData, [name]: value}))
    }

    
    const handleSubmit = e=>{
        e.preventDefault()
        props.submit(legdenData, props._id)
        setLegdenData(inputData)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="firstName"
                value={legdenData.firstName}
                onChange={handleChange}
                placeholder= "f name"
                />
                <input
                type="text"
                name="lastName"
                value={legdenData.lastName}
                onChange={handleChange}
                placeholder= "l name"
                />
                <input
                type="text"
                name="living"
                value={legdenData.living}
                onChange={handleChange}
                placeholder= "living?"
                />
                <input
                type="text"
                name="confrence"
                value={legdenData.confrence}
                onChange={handleChange}
                placeholder= "conf"
                />
                <input
                type="text"
                name="bountyAmount"
                value={legdenData.bountyAmount}
                onChange={handleChange}
                placeholder= "amount"
                />
                <button>{props.buttonText}</button>
            </form>
        </>
    )
}
export default NewLegdenForm