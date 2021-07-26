var express = require('express')
var app = express()

var hbs = require('express-handlebars').create({
    layoutsDir: `${__dirname}/src/layouts`,
    partialsDir: `${__dirname}/src/partials`,
    extname: 'hbs'
});

  
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/src`)

app.get('/', (req, res) =>
{
    res.status(200).render('./home', {layout: 'main'})
    //res.status(200).render(`${__dirname}/src/home`, {layout: 'main'})
})

app.listen('8080', '0.0.0.0', () =>
{
    console.log(`Listening on http://192.168.1.68:8080`)
})