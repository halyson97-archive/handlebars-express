const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const exphbs = require('express-handlebars');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	console.log('render home')
    res.render('home');
});



module.exports = app;