var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/generate', function (req, res, next) {

    let numbers = []

    while (numbers.length <= 6) {
        let generatedNumber = Math.ceil(Math.random() * 60);
        if (!numbers.includes(generatedNumber)) {
            numbers.push(generatedNumber)
        }
    }

    numbers.sort((current, next) => current - next)

    res.json({numbers})
});

router.get('/setup', (req, res, next) => {
    let setup = {}
    setup.sorteios = {
        "ttilte": "Escolha o sorteio",
        "items": [
            {
                "title": "Mega Sena",
                "subTitle": "Acerte 6 números e gannhe uma bolada",
                "text": "Sorteio atual de R$180 milhões"
            },
            {
                "title": "Mega Sena",
                "subTitle": "Acerte 6 números e gannhe uma bolada",
                "text": "Sorteio atual de R$180 milhões"
            },
        ]
    }

    setup.highlight = [
        {
            "title": "Mega Sena",
            "subTitle": "Acerte 6 números e gannhe uma bolada",
            "text": "Sorteio atual de R$180 milhões"
        },
    ]
    res.json(setup)
})

module.exports = router;
