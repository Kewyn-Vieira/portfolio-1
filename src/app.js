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

app.listen('8080', '0.0.0.0', () =>
{
    console.log(`Listening on http://192.168.1.68:8080`)
})