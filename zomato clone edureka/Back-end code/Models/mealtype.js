const mongoose = require ('mongoose')

const mealtypeSchema = mongoose.Schema({
    name : {
        type: String
    },
    content : {
        type: String
    },
    image : {
        type : String
    }
     
})



module.exports = mongoose.model('Mealtypes',mealtypeSchema,"mealtype")