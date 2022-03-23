const express = require("express")
const nbaLegdenRouter = express.Router()
const Legden = require("../modules/nbaLegden")

nbaLegdenRouter.get("/", (req,res,next)=>{
    Legden.find((err, legdens)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(legdens)
    })
})

nbaLegdenRouter.post("/", (req,res,next)=>{
    const addedLegden = new Legden(req.body)
    addedLegden.save((err, savedLegden)=>{
        if(err){
            res.send(500)
            return next(err)
        }
        res.status(201).send(savedLegden)
    })
})

nbaLegdenRouter.delete("/:legdenId", (req,res,next)=>{
    Legden.findOneAndDelete({_id: req.params.legdenId}, (err, deletedLegden)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`you have won your legdens match up`)
    })
})

nbaLegdenRouter.put("/:legdenId",(req,res,next)=>{
    Legden.findByIdAndUpdate(
        {_id: req.params.legdenId},
        req.body,
        {new: true},
        (err, updatedLegden) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedLegden)
        }
    )
})


module.exports = nbaLegdenRouter