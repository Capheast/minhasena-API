import axios from 'axios';
import * as allTypes from './../constants/lotteryTypes'

exports.getResults = async (lotteryType) => {
    let promises = [];
    let lotteries = [];
    Object.values(allTypes).forEach(type => {
        promises.push(axios.get(`https://www.lotodicas.com.br/api/${type}`))
    })

    await Promise.all(promises).then(values => {
        values.forEach((result, index) => {
            const lottery = {
                title: Object.keys(allTypes)[index],
                date: result.data.data,
                numbersDrawn: result.data.sorteio,
                accumulated: result.data.valor_acumulado || ''
            }
            lotteries.push(lottery)
        })
    }).catch(e => {
    });

    return {
        data: {
            title: 'Escolha o sorteio',
            items: lotteries
        }
    }
};