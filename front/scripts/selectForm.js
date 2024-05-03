const axios  = require("axios");
const validateForm = require("./validateForm");
const createMovieForm = async () => {
    try {
        

    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const duration = document.getElementById('duration').value;
    const genre = document.getElementById('genre').value.split(',');
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;
    const director = document.getElementById('director').value;


const error = validateForm({title, year, duration, genre, rate, poster, director});

 if (error) {
     alert(error);
     return;
}
//console.log({title, year, duration, genre, rate, poster, director});
    const promesa = await axios.post("https://papomovie-pagina.onrender.com/movies", {title, year, duration, genre, rate, poster, director});
    alert(`Se creo la pelicula con el status ${promesa.status}✔`);

    } catch (error) {
        console.log(error);
    }
    
};
    


module.exports = createMovieForm;