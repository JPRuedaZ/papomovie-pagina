// Llamo la libreria mongoose
const mongoose = require("mongoose");

// Creo el esquema y hago una validacion de los datos para que sean requeridos a la hora de hacer un POST, PUT.
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }, 
    year: Number,
    director: String,
    duration: String,
    genre: String,
    rate: Number,
    poster: {
        type: String,
        required: true,
        unique: true
    },
    description: String
})

// Creo el modelo y le paso el esquema que cree.
const Movie = mongoose.model('Movie', movieSchema);

//Exporto el modelo a los servicios.
module.exports = Movie;