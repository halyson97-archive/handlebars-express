var express = require('express');
var router = express.Router();

var ExampleMiddleware = require('../middleware/example');
var ExampleControllers = require('../controllers/ExampleControllers');

router.get('/', ExampleMiddleware, ExampleControllers.example);

module.exports = router;