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

//Aca creo la funcion controladora que responde la peticion POST y maneja el servicio
const moviePostController = async (req,res) => {
    try {
         const {title,year,director,duration,genre,rate,poster,description} = req.body;
        await movieService.agregarPelicula({title,year,director,duration,genre,rate,poster,description});
        res.status(201).json({message:'Pelicula agregada'});
    } catch (error) {
        res.status(500).json({message:'No se agrego la pelicula', error:error.message});
        //console.log(error.message);
        
    }
}

module.exports = {movieController, moviePostController}; //Aca se exporta el movieController como un objeto destructurado.