var router = require('express').Router()
var functions = require('../functions')

router.get('/', (req, res) =>
{
    res.status(200).render('./home', {layout: 'main'})
})

router.get('/index.css', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/index.css`)
})

router.get('/index.js', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/index.js`)
})

router.get('/res/logo.png', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/res/logo.png`)
})

module.exports = router