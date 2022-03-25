import React, {useState} from "react"

function NewLegdenForm(props){

    const inputData = {
        firstName: "",
        lastName: "",
        retired: false,
        confrence: "",
        bountyAmount: 0
    }
    const  [legdenData, setLegdenData] = useState(inputData)

    const handleChange = e =>{
        const {name, value} = e.target
         setLegdenData(prevData => ({...prevData, [name]: value}))
    }
    const handleClick = e =>{
        const {name, value, checked, type} = e.target
       const test =  type === "checkbox" ? setLegdenData({ [name]: checked }) : setLegdenData({ [name]: value })
    }

    

    const handleSubmit = e=>{
        e.preventDefault()
        props.submit(legdenData, props._id)
        setLegdenData(inputData)
    }
    // const test = legdenData.retired
     console.log(legdenData.confrence)

    return(
        <>
            <form onSubmit={handleSubmit}>
                retied:
                <input
                type="checkbox"
                name="retired"
                onChange={handleClick}
                checked={legdenData.retired}
                />
                
                <select
                value={legdenData.confrence}
                onChange={handleChange}
                name="confrence"
                >    
                    <option value="east">Please Select Confrence</option>    
                    <option value="east">east</option>    
                    <option value="west">west</option>    
                </select>
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