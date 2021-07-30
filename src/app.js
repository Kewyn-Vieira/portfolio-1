var express = require('express')
var app = express()

app.get('/', (req, res) =>
{
    res.status(308).redirect('/home')
})

var home = require('./home/router')

app.use('/home', home)

app.use(function(req, res) {
    res.status(404).end('Page not found')
})

var host = require('os').networkInterfaces().Ethernet[1].address
var port = '8080'

app.listen(port, host, () =>
{
    console.log(`Listening on locally http://${host}:${port}`)
})