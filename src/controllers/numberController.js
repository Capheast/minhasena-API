const numberGeneratorService = require('../services/numberGeneratorService');
var Number = require('../models/Number');

exports.get = (req, res, next) => {
    let result = numberGeneratorService.generate();
    result.forEach((item) => {
        if (!!Number.find({ value: item })) {
            let number = new Number({ value: item });
            number.save((err) => {
                if (err) console.log(err)
            });
        }
    })
    res.json(result);
}

exports.post = async (req, res, next) => {
    res.json({ message: 'POST' })
}

exports.put = (req, res, next) => {
    res.json({ message: 'PUT' })
}