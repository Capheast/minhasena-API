var express = require('express');
var router = express.Router();
var generatorController = require('../src/controllers/generatorController');

router.get('/', generatorController.get);
router.post('/', generatorController.post);
router.put('/', generatorController.put);

module.exports = router;