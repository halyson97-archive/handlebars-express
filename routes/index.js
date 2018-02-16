var express = require('express');
var router = express.Router();

router.use('/', require('./example'));

module.exports = router;