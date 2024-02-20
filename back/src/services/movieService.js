//Aca llamo el modelo 
const Movie = require('../models/Movies');

/*Aca llamo el servicio que es una funcion asincrona y va y me busca 
en la base de datos, en este caso me trae todas las pelis, 
por que no le pongo nada en el find().*/
const movieService = {
  /*Aca hago la propiedad que es una funcion asincrona sin el try/catch 
  pq eso se lo coloco donde termina la operacion, entonces seria en 
  el controlador.*/
    obtenerPeliculas: async () =>  { 
      const movies = await Movie.find();
        return movies;  
    },

    agregarPelicula: async (movie) => {
      
    }

}
//Exporto el servicio al controlador.
module.exports = movieService;