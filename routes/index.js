var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/generate', function(req, res, next) {

  let numbers = []

  while (numbers.length <= 6){
    let generatedNumber = Math.ceil(Math.random() * 60);
    if (!numbers.includes(generatedNumber)) {
      numbers.push(generatedNumber)
    }
  }

  numbers.sort((current, next) => current - next)

  res.json({numbers})
});

module.exports = router;
