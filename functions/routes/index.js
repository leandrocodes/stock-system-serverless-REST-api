const express = require('express')
let router = express.Router()

router.use('/products', require('./products'))

module.exports = router