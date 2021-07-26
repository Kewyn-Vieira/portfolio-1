var router = require('express').Router()
var fs = require('fs')

router.get('/index.css', (req, res) =>
{
    fs.readFile(`${__dirname}/index.css`, (err, data) =>
    {
        if(err)
        {
            console.error(err)
            return res.status(500).end()
        }
        res.status(200).end(data)
    })
})

router.get('/index.js', (req, res) =>
{
    fs.readFile(`${__dirname}/index.js`, (err, data) =>
    {
        if(err)
        {
            console.error(err)
            return res.status(500).end()
        }
        res.status(200).end(data)
    })
})

module.exports = router