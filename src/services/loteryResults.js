const axios = require('axios');
const {allTypes} = require('./../constants/lotteryTypes')

exports.getResults = async (lotteryType) => {
    let promisses = []
    let lotteries = []
    allTypes.forEach(type => {
        promisses.push(axios.get(`https://www.lotodicas.com.br/api/${type}`))
    })

    await Promise.all(promisses).then(values => {
        values.forEach(result => {
            const lottery = {date: result.data.data, numbersDrawn: result.data.sorteio}
            lotteries.push(lottery)
        })
    })

    return lotteries
};