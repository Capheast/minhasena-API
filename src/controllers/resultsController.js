const loteryResults = require('../services/loteryResults');
var Number = require('../models/Number');

exports.get = async (req, res, next) => {
    const type = req.query.type
    res.json(await loteryResults.getResults(type))
}