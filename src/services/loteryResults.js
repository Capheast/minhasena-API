import axios from 'axios';
import * as allTypes from './../constants/lotteryTypes'

exports.getResults = async (lotteryType) => {
    let promises = [];
    let lotteries = [];
    Object.values(allTypes).forEach(type => {
        promises.push(axios.get(`https://www.lotodicas.com.br/api/${type}`))
    })
    
    await Promise.all(promises).then(values => {
        values.forEach(result => {
            const lottery = {date: result.data.data, numbersDrawn: result.data.sorteio}
            lotteries.push(lottery)
        })
    }).catch(e => {});

    return lotteries
};