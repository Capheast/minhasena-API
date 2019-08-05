const loteryResults = require('../services/loteryResults');
var Number = require('../models/Number');

exports.get = (req, res, next) => {
    const type = req.query.type
    loteryResults.getResults(type).then(result => res.json(result))
}