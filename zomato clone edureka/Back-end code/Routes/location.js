const express = require('express')
const locationController= require('../Controllers/location')

const router = express.Router()

router.get('/', locationController.getAllLocations)


module.exports = router