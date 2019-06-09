const numberGeneratorService = require('../services/numberGeneratorService');

exports.get = (req,res,next) => {
    let result = numberGeneratorService.generate();
    res.json(result);
}

exports.post = (req,res,next) => {
    res.json({message: 'POST'})
}

exports.put = (req,res,next) => {
    res.json({message: 'PUT'})
}