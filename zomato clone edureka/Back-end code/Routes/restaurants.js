const express = require('express')
const restaurantcontroller =require('../Controllers/restaurant')

const router = express.Router();


router.get('/',restaurantcontroller.getAllRestaurants)
router.post('/filter/:pageNo',restaurantcontroller.getAllRestaurantsByFilter)
router.get('/:city',restaurantcontroller.getAllRestaurantsBycity)
router.get('/details/:rName',restaurantcontroller.getRestaurantDetailsByName )

 
module.exports = router 