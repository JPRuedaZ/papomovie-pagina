const Movie = require('../models/Movies');

const movieService = {
    obtenerPeliculas: async () => { try {
      const movies = await Movie.find();
        return movies;
    } catch (error) {
      console.log('Error al obtener las pelis');
    }
        
    },

    agregarPelicula: async (movie) => {
      
    }

}

module.exports = movieService;