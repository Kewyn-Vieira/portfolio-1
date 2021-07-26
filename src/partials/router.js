var router = require('express').Router()

var header = require('./header/router')
var footer = require('./footer/router')
router.use('/header', header)
router.use('/footer', footer)

module.exports = router