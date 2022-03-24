import React, {useState} from "react"
import NewLegdenForm from "./NewLegdenForm"


function LegdensListRender(props){
    const [edit, setEdit] = useState(false)
  
    const {firstName, lastName, confrence, bountyAmount, _id, retired}  = props
    return(
        <div>
            {!edit?
                <>
            <header>
                <h1>{firstName} {lastName}</h1>
            </header>
            <section>
                <h4>confrence:{confrence}</h4>
            </section>
            <section>
                <h4>bounty amount: {bountyAmount}</h4>
            </section>
            <section>
                <h4>player id: {_id}</h4>
                <h4>retired: {retired === true? "yes": "no"}</h4>
            </section>
                <button onClick={() => props.delete(_id)}>delete player</button>
                <button onClick={()=> setEdit(prevEdit => !edit)}>edit</button>
            </>
            :
            <>
            <NewLegdenForm buttonText="edit legden info" submit={props.edit} _id={_id}/>
            <button onClick={()=> setEdit(prevEdit => !edit)}>close</button>
            </>}
           
        </div>
    )
}
export default LegdensListRender