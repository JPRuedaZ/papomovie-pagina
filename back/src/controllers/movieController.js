//Aca se crea la funcion controladora movieController que recibe la peticion y la responde.
const movieController = (req,res) => {
    res.status(200).send('Estamos recibiendo la solicitud, muy pronto estaran disponibles los datos de las peliculas')
}

module.exports = {movieController}; //Aca se exporta el movieController como un objeto destructurado.