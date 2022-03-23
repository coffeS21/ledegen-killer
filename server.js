const express = require("express")
const server = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const db = "mongodb+srv://chai:chai@nbalegends.si1o6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
server.use(express.json())
server.use(morgan("dev"))

server.use("/legdens", require("./routes/nbaLegdenRouter"))
mongoose.connect(db, ()=>{
    console.log("db on")
})

server.listen(9000, ()=>{
    console.log("server is running")
})