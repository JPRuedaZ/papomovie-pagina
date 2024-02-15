const movieServiceClass = require("../services/movieServiceClass");


//

const movieControllerClass = async (req,res) => {
    try {
        const movies = await movieServiceClass.obtenerPeliculas("https://henry-movies-dev-sgtm.3.us-1.fl0.io");
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message: 'Error del servidor'});
    }
    
}

module.exports = {movieControllerClass};