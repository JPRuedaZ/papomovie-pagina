//Aca se importa el Router de express.
const {Router} = require("express");
//Aca se importa funcion controladora movieController,destructurando con objeto.
const {movieController, moviePostController} = require("../controllers/movieController");
//const { movieControllerClass } = require("../controllers/movieClassController");
const {validationCreateMovie} = require("../middlewares/validationCreateMovie");

//Aca se crea el router.
const router = Router();

//Aca se crea la peticion get pasando el endpoint "/movies" y llama la funcion controladora.

router.get("/movies", movieController); //aca se cambia si quiero usar el servicio con clase o sin la clase.
router.post("/movies",validationCreateMovie,moviePostController);

//Aca se capturan los errores que se producen en las peticiones. (ej red de circo-trapesist )
router.use((err, req, res, next) => {
    res.status(500).json({message: 'Se ha producido un error', error:err.message});
});

module.exports = router; //Aca exporto el router para que se pueda usar en el server.