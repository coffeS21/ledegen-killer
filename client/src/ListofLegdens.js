import React,{useState, useEffect} from "react"
import LegdensListRender from "./LegdensListRender"
import axios from "axios"

function ListofLegdens(props){
    const [legdensList, setLegdensList] = useState([])

    const retriveList = ()=>{
        axios.get("/legdens")
        .then(res =>{
            const data = res.data
            setLegdensList(data)
            console.log(data)
        })
        .catch(err =>{
            console.log("opps you got an error")
            alert("opps you got an error")
          })
    }
    const deleteLegden = id =>{
        axios.delete(`/legdens/${id}`)
        .then(res => {
            setLegdensList(prevList=> prevList.filter(legden => legden._id !== id))
        })
        .catch(err => console.log("error"))
    }

    const editLegden = (edit, legdenId)=>{
        axios.put(`/legdens/${legdenId}`, edit)
        .then(res => {
            setLegdensList(prevLegden => prevLegden.map(legden => legden._id !== legdenId? legden: res.data))
        })
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        retriveList()
    },[])

    const mappedLegdens = legdensList.map((looper, index)=>{
        return <LegdensListRender {...looper} key={looper._id} delete={deleteLegden} edit={editLegden}/> 
    })
    return(
        <>
        {mappedLegdens}
        </>
    )
}
export default ListofLegdens