const loteryResults = require('../services/loteryResults');
var Number = require('../models/Number');

exports.get = (req, res, next) => {
    const type = req.query.type
    res.json = loteryResults.getResults(type)
}