var express = require('express');
var router = express.Router();
var setupController = require('../src/controllers/setupController');

router.get('/', setupController.get);
router.post('/', setupController.post);
router.put('/', setupController.put);

module.exports = router;