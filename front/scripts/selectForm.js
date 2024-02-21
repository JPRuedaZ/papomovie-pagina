const axios  = require("axios");
const validateForm = require("./validateForm");
const createMovieForm = async (event) => {
    try {
        event.preventDefault();

    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const duration = document.getElementById('duration').value;
    const genre = document.getElementById('genre').value.split(' ');
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;
    const director = document.getElementById('director').value;


//const error = validateForm({title, year, duration, genre, rate, poster, director});

// if (error) {
//     alert(error);
//     return;
// }
//console.log({title, year, duration, genre, rate, poster, director});
    const promesa = await axios.post("http://localhost:3000/movies", {title, year, duration, genre, rate, poster, director});
    console.log(promesa);

    } catch (error) {
        console.log(error);
    }
    
};
    


module.exports = createMovieForm;