const setupService = require('../services/setupService');

exports.get = (req,res,next) => {
    let result = setupService.getSetup();
    res.json(result);
}

exports.post = (req,res,next) => {
    res.json({message: 'POST'})
}

exports.put = (req,res,next) => {
    res.json({message: 'PUT'})
}