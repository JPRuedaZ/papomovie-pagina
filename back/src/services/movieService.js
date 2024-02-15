const movies = require("./dataMovies");


const movieService = {
    obtenerPeliculas: async () => {
        return movies;
        
    },

    agregarPelicula: async (movie) => {
      movies.push(movie);
    }

}

module.exports = movieService;