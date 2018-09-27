'use strict'
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express()

app.use('/database', express.static(__dirname + '/database'))
app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));

const appRoutes = require('./routes/index.js')(app)
//app.listen(8000);

module.exports = app