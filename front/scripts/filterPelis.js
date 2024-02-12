const filterPelis = function (dataPelis, genero) {
  return dataPelis.filter((movie) => movie.genre.includes(genero));
    
  };


module.exports = filterPelis
