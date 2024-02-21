const validateForm = ({title, year, duration, genre, rate, poster, director}) => {
    if (!title || !year || !director || !duration || !genre[0] || !rate || !poster || !description ) {
        return 'Todos los campos deben diligenciarse';
    }
    if (year < 1850 || year > 2024) {
        return 'El año debe ser un número entre 1850 y el año actual';
    }
    if (director.length < 5 || director.length > 50) {
        return 'El director debe tener entre 5 y 50 caracteres';
        
    }
    if (!duration.includes('h') && !duration.includes('min')) {
        return 'La duración debe tener el formato recomendado';
    }
    if (isNaN(rate) || rate < 1 || rate > 10) {
        return 'La rating debe ser un número entre 1 y 10';
    }
    if (!poster.includes('https://') && !poster.includes('http://')) {
        return 'El poster debe ser una URL';
        
    }
    
    return null;
}

module.exports = validateForm;