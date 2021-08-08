// Require express to get the Router
var router = require('express').Router()
var functions = require('../functions')

// Send message on root/route
// In this case route = '/home', as it was set in app.js
router.get('/', (req, res) =>
{
    // Without template

    // With template
    res.status(200).sendFile(`${__dirname}/index.html`)
})

// Send css file on root/route/index.css request
router.get('/index.css', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/index.css`)
})

// Send logo.png on request
router.get('/res/coffee.png', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/res/coffee.png`)
})

router.get('/res/graph.png', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/res/graph.png`)
})

router.get('/res/climate.png', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/res/climate.png`)
})

router.get('/res/schedule.png', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/res/schedule.png`)
})

// Export the router
module.exports = router