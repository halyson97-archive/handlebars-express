var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var exphbs = require('express-handlebars');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', require('./routes'));

app.use(function(req,res,next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err,req,res,next){
  console.log('Not found');
  console.log(err);
  res.status(err.status || 500).json({err:err.message});
});

module.exports = app;