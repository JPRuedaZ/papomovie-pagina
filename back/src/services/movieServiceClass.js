const Movie = require("../services/movieClass");
const movies = require("../services/dataMoviesClass");


const movieServiceClass = {

    obtenerPeliculas: async () => {
        try {
            
            return movies.map(movie =>  new Movie(movie.id,movie.title, movie.year, movie.duration, movie.genre, movie.rate, movie.poster, movie.director));
            
        } catch (error) {
            console.log('Error al obtener las pelis');
        }
    },
    agregarPelicula: async (movies, title, year, duration, genre, rate, poster, director) => {
        try {
            const movie = new Movie (title, year, duration, genre, rate, poster, director);
            movies.push(movie);
        } catch (error) {
            console.log('Error al agregar la peli');
        }
    }
}

module.exports = movieServiceClass;