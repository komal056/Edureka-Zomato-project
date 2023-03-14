const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    restaurantId: {
        type: String
    },
    itemPrice: {
        type: Number,
        require: true
    },
    itemName: {
        type: String
    },
    itemDescription: {
        type: String,
        require: true
    },
    isVeg: {
        type: Boolean,
        require: true
    },

    restaurantName: {
        type: String
    }
})


module.exports = mongoose.model("Menu", menuSchema, "menu")