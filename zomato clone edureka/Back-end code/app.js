const express = require('express')
const bodyParser =require('body-parser')
const mongoose = require('mongoose')
const restaurantRoutes = require('./Routes/restaurants')
const locationRoutes = require('./Routes/location')
const mealtypeRoutes = require('./Routes/mealtype')
const menuRoutes = require('./Routes/menu')
const cors = require('cors')
const paymentRoutes=require('./Routes/pay')

const PORT=9027
const MONGO_URI = "mongodb+srv://Komal:JLkomal05@zomato.ykbmjgp.mongodb.net/Zomato"
//"mongodb://127.0.0.1:27017/Zomato"


mongoose.connect(MONGO_URI,()=>{
    console.log("Mongodb connected!!!")
})


const app =express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use('/restaurants',restaurantRoutes)
app.use('/location',locationRoutes)
app.use('/mealtype',mealtypeRoutes)
app.use('/menu',menuRoutes)
app.use('/get-order-id',paymentRoutes)
app.listen(PORT,()=>{
    console.log(`app is started on PORT ${PORT}`)
})

