const axios = require('axios')

const getLugarLatLng = async(dir) => {


    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUlr }`,
        // baseURL: 'https://consultas.semovioaxaca.gob.mx',
        timeout: 1000,
        headers: {
            'x-rapidapi-key': '8a7687e155msh9f7d9bc952d3ceep1abe1fjsn9607ec9cedef',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'useQueryString': 'true'
        }
    });

    instance.get().then(resp => {
        console.log(resp.data.Results[0]);
    }).catch(err => {
        console.log("ERROR!!!!!", err);
    })
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}