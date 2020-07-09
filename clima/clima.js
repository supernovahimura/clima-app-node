const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=a00292ede0df5f56e4fef738fdd6dc57&units=metric`)
    return resp.data.main.temp

}

module.exports = {
    getClima
}