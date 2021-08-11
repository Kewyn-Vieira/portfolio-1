// Require express for the server application
var express = require('express')
var router = express.Router()

// Require routers
var home = require('./home/router')

// Use routers
// Setting '/home' as a route and assigning home router to deal with requests
router.use('/', home)

module.exports = router