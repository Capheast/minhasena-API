var express = require('express');
var router = express.Router();
var numberController = require('../src/controllers/numberController');

router.get('/results', numberController.get);

module.exports = router;