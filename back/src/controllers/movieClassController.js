const movieServiceClass = require("../services/movieServiceClass");


//

const movieControllerClass = async (req,res) => {
    try {
        
        const movies = await movieServiceClass.obtenerPeliculas();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message: 'Error del servidor'});
    }
    
}

module.exports = {movieControllerClass};