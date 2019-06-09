var express = require('express');
var router = express.Router();
var generatorController = require('../src/controllers/GeneratorController');

router.get('/', generatorController.get);

module.exports = router;