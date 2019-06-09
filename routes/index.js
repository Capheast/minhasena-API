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
    setup.sorteios = {}

    setup.sorteios.main = {
        "title": "Escolha o sorteio",
        "items": [
            {
                "title": "Mega Sena",
                "subTitle": "Acerte 6 números e gannhe uma bolada",
                "text": "Sorteio atual de R$180 milhões"
            },
            {
                "title": "Quina",
                "subTitle": "5 números para pra te ajudar nas contas",
                "text": "Sorteio atual de R$80 mil"
            },
        ]
    }

    setup.sorteios.highlight = {
        "title": "Fique de olho",
        "items": [
            {
                "title": "Lotofácil",
                "subTitle": "Sorteio fácil para uma ajuda no fim do mês",
                "text": "Sorteio atual de R$420 mil"
            },
        ]
    }
    setup.sorteios.secondary = {
        "title": "Outros",
        "items": [

            {
                "title": "Dupla Sena",
                "subTitle": "Nem perde seu tempo",
                "text": "Sorteio atual de R$180 milhões"
            },
        ]
    }
    res.json(setup)
})

module.exports = router;
