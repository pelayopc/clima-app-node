const argv = require("yargs")
  .options({
    direccion: {
      alias: "d",
      desc: "Dirección de la ciudad para obtener clima",
      demand: true,
    },
  })
  .help().argv;

//console.log(argv.direccion);

module.exports = {
  argv,
};
