//Aca se importa el Router de express.
const {Router} = require("express");
//Aca se importa funcion controladora movieController.
const {movieController} = require("../controllers/movieController");

//Aca se crea el router.
const router = Router();

//Aca se crea la peticion get pasando el endpoint "/movies" y llama la funcion controladora.
router.get("/movies", movieController)

module.exports = router; //Aca exporto el router para que se pueda usar en el server.