/*Se crea la funcion expresiva filterPelis que recibe dos argumentos (dataPelis(el array de objetos) 
y genero(el genero de la pelicula))*/
const filterPelis = function (dataPelis, genero) {
  /*Se filtra el array de objetos por el genero y se retorna el array filtrado(por eso se 
  coloca el .filter y se le coloca el return y el .includes). */
  return dataPelis.filter((movie) => movie.genre.includes(genero));
    
  };

//Se exporta la funcion filterPelis.
module.exports = filterPelis
