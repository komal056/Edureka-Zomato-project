const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    city_name :{
        type : String,
        require : true
    },
    city : {
        type : String,
        require: true
    },
    area : {
        type : String,
        require : true
    },
    locality : {
        type: String,
        require : true
    },
    thumb :{
        type : String
    },
    cost :{
        type : Number
    },
    address :{
        type: String
    },
    type : {
        type : Array
    },
    Cuisine :{
        type : Array
    }

})

module.exports=mongoose.model("Restaurants",restaurantSchema,"restaurant")