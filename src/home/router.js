var router = require('express').Router()
var functions = require('../functions')

router.get('/', (req, res) =>
{
    res.status(200).send("<p style='font-family: monospace'>Choose a template language and merge it with your branch to display your content.<p>")
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