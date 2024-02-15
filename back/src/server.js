const express = require("express"); //Aca se importa la libreria express.
const movieRouter = require("./routes/movieRouter"); //Aca se importa el router de la carpeta routes.
const morgan = require("morgan"); //Aca se importa la libreria morgan para que se pueda ver en consola las peticiones que se realizan.
const cors = require("cors"); //Aca se importa la libreria cors para que se pueda hacer peticiones al servidor.

const app = express(); //Aca se crea el servidor.

app.use(morgan("dev")); //Aca se utiliza la libreria morgan para que se pueda ver en consola las peticiones que se realizan.
app.use(cors()); //Aca se utiliza la libreria cors para que se pueda hacer peticiones al servidor.
app.use(express.json()); //Aca se utiliza la libreria express para que se pueda manejar JSON.


app.use(movieRouter); //Aca se utiliza el router, para que la solicitud tome ese camino hasta el endpoint que contiene la solicitud del enrutador.

module.exports = app; //Aca se exporta el servidor.