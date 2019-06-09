var express = require('express');
var router = express.Router();
var numberController = require('../src/controllers/numberController');

router.get('/', numberController.get);
router.post('/', numberController.post);
router.put('/', numberController.put);

module.exports = router;