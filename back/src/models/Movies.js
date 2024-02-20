// Llamo la libreria mongoose
const mongoose = require("mongoose");

// Creo el esquema y hago una validacion de los datos para que sean requeridos a la hora de hacer un POST, PUT.
const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true,
    }, 
    year: {
        type: Number,
        max: [2024, 'No puede ser mayor a el actual year']
    },
    director: String,
    duration: String,
    genre: {
        type:Object,
        values:['Action', 'Adventure', 'Comedy', 'Sci-Fi', 'Drama'],
        message: '{VALUE} no es un genero permitido!!!'
    },
    rate: {
        type: Number,
        min: [1, 'la calificacion minima'],
        max:[10, 'la calificacion maxima']
    },
    poster:String,
    description:String
})

// Creo el modelo y le paso el esquema que cree.
const Movie = mongoose.model('movies', movieSchema);

//Exporto el modelo a los servicios.
module.exports = Movie;