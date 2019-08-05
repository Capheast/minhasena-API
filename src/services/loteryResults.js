const axios = require('axios');

exports.getResults = async (lotteryType) => {
    const res = await axios.get(`https://www.lotodicas.com.br/api/${lotteryType}`)
    return res.data
}