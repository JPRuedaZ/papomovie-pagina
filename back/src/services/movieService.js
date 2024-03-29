//Aca llamo el modelo 
const Movie = require('../models/Movie');

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
    
    /*Aca creo la */ 
    agregarPelicula: async (movie) => {
      const movieExist = await Movie.findOne({title: movie.title});
      if (movieExist) {
        throw new Error('La pelicula ya existe');
      } else {
        try {
          const newMovie = await Movie.create(movie);
          return newMovie;
        } catch (error) {
          console.log('este es el error:',error)
        }
      }
    }

}
//Exporto el servicio al controlador.
module.exports = movieService;