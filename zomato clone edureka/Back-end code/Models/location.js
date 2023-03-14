const mongoose = require ('mongoose')

const locationSchema = mongoose.Schema({
    id :{
        type:String
    },
    name : {
        type : String,
        require : true
    },
    city_id :{
        type : String,
        require : true
    },
    localion_id : {
        type: String,
        require : true
    },
    country_name : {
        type: String
    }
})


module.exports=mongoose.model("Locations",locationSchema,"location")