const axios = require('axios');

const token = '';
const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${token}&units=metric`)
    return resp.data.main.temp

}

module.exports = {
    getClima
}