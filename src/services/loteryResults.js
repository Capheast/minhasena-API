import axios from 'axios'

export const getResults = (lotteryType) => {
    axios.get(`https://www.lotodicas.com.br/api/${lotteryType}`)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    })
    return {}
}