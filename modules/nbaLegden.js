const mongoose = require("mongoose")
const nbaLegden = mongoose.Schema

const nbaLegdenSchema = new nbaLegden({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    living:{
        type: String
    },
    bountyAmount:{
        type: String
    },
    confrence:{
        type: String
    },
    
})

module.exports = mongoose.model("Legdens", nbaLegdenSchema)