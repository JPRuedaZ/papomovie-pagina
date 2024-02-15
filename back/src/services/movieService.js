const axios = require("axios");


const movieService = {
    obtenerPeliculas: async (url) => {
        const response = await axios.get(url);
        return response.data;
    },

    agregarPelicula: async (movie) => {
      movies.push(movie);
    }

}

module.exports = movieService;