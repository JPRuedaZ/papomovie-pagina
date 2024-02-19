//Aca se importa el Router de express.
const {Router} = require("express");
//Aca se importa funcion controladora movieController,destructurando con objeto.
const {movieController} = require("../controllers/movieController");
const { movieControllerClass } = require("../controllers/movieClassController");

//Aca se crea el router.
const router = Router();

//Aca se crea la peticion get pasando el endpoint "/movies" y llama la funcion controladora.

router.get("/movies", movieController); //aca se cambia si quiero usar el servicio con clase o sin la clase.

module.exports = router; //Aca exporto el router para que se pueda usar en el server.