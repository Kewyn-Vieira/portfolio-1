var router = require('express').Router()
var functions = require('../functions')

router.get('/', (req, res) =>
{
    res.status(200).send('Work In Progress')
})

router.get('/index.css', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/index.css`)
})

router.get('/res/logo.png', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/res/logo.png`)
})

module.exports = router