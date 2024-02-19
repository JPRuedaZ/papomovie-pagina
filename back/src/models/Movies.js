const mongoose = require("mongoose");


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

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;