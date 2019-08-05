var express = require('express');
var router = express.Router();
var resultsController = require('../src/controllers/resultsController');

router.get('/results', resultsController.get);

module.exports = router;