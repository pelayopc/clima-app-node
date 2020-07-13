const { argv } = require("./config/yargs");
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const direccion = argv.direccion;

//console.log(direccion);

// lugar
//   .getLugarLatLng(direccion)
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((resp) => {
//     console.log(resp);
//   });

// clima.getClima(43.37056, -5.83459).then(console.log).catch(console.log);

const getInfo = async (direccion2) => {
  // salida
  // el clima de xxx es de xxx temperatura
  // no se pudo determinar el clima de xxx lugar

  try {
    const coordenadas = await lugar.getLugarLatLng(direccion2);
    const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
    return `El clima de ${direccion2} es de ${temperatura}`;
  } catch (e) {
    return `No se pudo determinar geolocalización de ${direccion2}`;
  }

  // lugar
  //   .getLugarLatLng(direccion)
  //   .catch((err) => {
  //     throw new Error(`No se pudo determinar geolocalización de ${direccion}`);
  //   })
  //   .then((resp) => {
  //     clima
  //       .getClima(resp.lat, resp.lng)
  //       .then((respClima) => {
  //         console.log(`El clima de ${direccion} es de ${respClima}`);
  //         return respClima;
  //       })
  //       .catch((err) => {
  //         throw new Error(`No se pudo determinar temperatura de ${direccion}`);
  //       });
  //   });
};

getInfo(argv.direccion)
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log("Error al determinar la temperatura", err);
  });
