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
    // console.log(test)

    return(
        <>
            <form onSubmit={handleSubmit}>
                
                <input
                type="checkbox"
                name="retired"
                onChange={handleClick}
                checked={legdenData.retired}
                />
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