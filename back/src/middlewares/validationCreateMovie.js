module.exports = {
validationCreateMovie: (req, res, next) => {
const {title,year,duration,genre,rate,poster} = req.body;
// Verifica que el título esté presente y no esté vacío
if (!title || typeof title !== 'string' || title.trim() === '') {
   throw new Error('El título es requerido y debe ser una cadena no vacía');
}

// Verifica que el año sea un número entero y esté en un rango aceptable
if (!year || isNaN(year) || !Number.isInteger(year) || year < 1850 || year > 2024) {
    throw new Error('El año debe ser un número entero válido entre 1850 y el año actual');
}

// Verifica que la duración sea un número positivo
if (!duration || !duration.includes('h') && !duration.includes('min') || typeof duration !== 'string'){
    throw new Error('La duración debe tener el formato recomendado');
}

// Verifica que el género sea una cadena no vacía
if (!genre || typeof genre !== 'string' || genre.trim() === '') {
    throw new Error('El género es requerido y debe ser una cadena no vacía.');
}

// Verifica que la tasa (rate) sea un número entre 0 y 10
if (!rate || isNaN(rate) || rate < 1 || rate > 10) {
    throw new Error('La rating debe ser un número válido entre 1 y 10.');
}

// Verifica que el poster sea una cadena no vacía (podrías agregar validaciones adicionales)
if (!poster || typeof poster !== 'string' || poster.trim() === '' || !poster.includes('https://') && !poster.includes('http://')) {
    throw new Error('El poster debe tener el formato recomendado y no puede ser una cadena no vacía.');
}

// Si todas las validaciones pasan, pasa al siguiente middleware
next();
}
}