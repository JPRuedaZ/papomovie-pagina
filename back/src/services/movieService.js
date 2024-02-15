const axios = require("axios");
const url = "https://henry-movies-dev-sgtm.3.us-1.fl0.io";

const movieService = {
    obtenerPeliculas: async () => { try {
      const response = await axios.get(url);
        return response.data;
    } catch (error) {
      console.log('Error al obtener las pelis');
    }
        
    },

    agregarPelicula: async (movie) => {
      movies.push(movie);
    }

}

module.exports = movieService;