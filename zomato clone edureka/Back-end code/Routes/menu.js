const express = require('express')
const menuController= require('../Controllers/menu')

const router = express.Router()

router.get('/:rName', menuController.getAllMenu)


module.exports = router