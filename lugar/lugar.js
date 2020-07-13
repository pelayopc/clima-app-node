const axios = require("axios");

const getLugarLatLng = async (direccion) => {
  const encodedURL = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `https://geocode.xyz?json=1&auth=302636995513113221664x6596&locate=${encodedURL}`,
  });

  const resp = await instance.get();

  if (!resp.data.standard || resp.data.standard === null) {
    throw new Error(`No hay resultados para ${direccion}`);
  }
  //console.log(resp.data.standard);
  const data = resp.data;
  const standard = resp.data.standard;
  const direccionRetorno = JSON.stringify(standard);
  //console.log(direccionRetorno);
  return {
    direccion: direccionRetorno,
    lat: data.latt,
    lng: data.longt,
  };
};

module.exports = {
  getLugarLatLng,
};
