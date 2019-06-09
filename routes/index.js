// import {GenerateNumbers} from '../app/controllers/GenerateNumbers.js'

var express = require('express');
var generate = require('../app/controllers/GenerateNumbers.js');
var router = express.Router();


/* GET home page. */
router.get('/generate', function (req, res, next) {
    let numbers = generate(req.query.size)

    res.json({numbers})
});

router.get('/setup', (req, res, next) => {
    let setup = [{
      "title": "Escolha o sorteio",
      "items": [{
       "title": "Mega Sena",
       "subTitle": "Sorteio atual de R$180 milhões",
       "color": "#00B758"
      }, {
       "title": "Quina",
       "subTitle": "Sorteio atual de R$80 mil",
       "color": "#42338B"
      }]
     }, {
      "title": "Fique de olho",
      "items": [{
       "title": "Lotofácil",
       "subTitle": "Sorteio atual de R$420 mil",
       "color": "#AB1D88"
      }]
     }, {
      "title": "Outros",
      "items": [{
       "title": "Dupla Sena",
       "subTitle": "Sorteio atual de R$180 milhões",
       "color": "#A20635"
      }]
     }]
    res.json(setup)
})

module.exports = router;
