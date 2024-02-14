const express = require("express"); //Aca se importa la libreria express.
const router = require("./routes/movieRouter"); //Aca se importa el router de la carpeta routes.

const app = express(); //Aca se crea el servidor.

app.use(router); //Aca se utiliza el router, para que la solicitud tome ese camino hasta el endpoint que contiene la solicitud del enrutador.

module.exports = app; //Aca se exporta el servidor.