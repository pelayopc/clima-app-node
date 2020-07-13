const axios = require("axios");

const getClima = async (lat, lng) => {
  const apikey = "eb51543f7da9e8d6823ad7c7b69e3302";

  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}&units=metric`
  );
  if (!resp.data.main.temp || resp.data.main.temp === null) {
    throw new Error(`No hay temperatura para ${lat}, ${lng}`);
  }
  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
