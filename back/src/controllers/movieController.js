const movieService = require("../services/movieService"); //Aca se importa el objeto movieService.

//Aca se crea la funcion controladora movieController que recibe la peticion y la responde.
const movieController = async (req,res) => {
    try {
        const movies = await movieService.obtenerPeliculas();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message: 'Error del servidor'});
    }
    
}

module.exports = {movieController}; //Aca se exporta el movieController como un objeto destructurado.