import axios from 'axios';
import * as allTypes from './../constants/lotteryTypes'

exports.getResults = async (lotteryType) => {
    let promises = [];
    let lotteries = [];
    Object.values(allTypes).forEach(({constant}) => {
        promises.push(axios.get(process.env.API_LOTERICA + constant))
    })

    await Promise.all(promises).then(values => {
        values.forEach((result, index) => {
            const accumulated = result.data.valor_acumulado || 0
            const subTitle = accumulated > 0 ? `Sorteio atual de ${accumulated.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })}` : 'Não acumulado'
            const lottery = {
                title: Object.values(allTypes)[index].title,
                subTitle: subTitle,
                color: Object.values(allTypes)[index].color,
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