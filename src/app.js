var express = require('express')
var app = express()

var hbs = require('express-handlebars').create({
    layoutsDir: `${__dirname}/layouts`,
    partialsDir: `${__dirname}/partials`,
    extname: 'hbs'
});
  
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', `${__dirname}`)

app.get('/', (req, res) =>
{
    res.status(308).redirect('/home')
})

var partials = require('./partials/router')
var home = require('./home/router')

app.use('/home', home)
app.use('/partials', partials)

app.use(function(req, res) {
    res.status(404).end('Page not found')
})

var host = require('os').networkInterfaces().Ethernet[1].address
var port = '8080'

app.listen(port, host, () =>
{
    console.log(`Listening on locally http://${host}:${port}`)
})