const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
// const direccion = argv.direccion
// console.log(direccion);
const getInfo = async(direccion) => {
        try {
            const coord = await lugar.getLugarLatLng(direccion);
            const temp = await clima.getClima(coords.lat, coord.lng);
            return `El clima de ${ coords.direccion } es de ${ temp }`
        } catch (error) {
            return `No se pudo determinar el clima de ${direccion}`
        }
    }
    // lugar.getLugarLatLng(argv.direccion)
    //     .then(console.log)
    //     .catch(err => { console.log(err); })

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)