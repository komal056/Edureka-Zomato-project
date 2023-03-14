const express = require('express')
const payController= require('../Controllers/pay')

const router = express.Router()

router.post('/', payController.getOrderId)


module.exports = router