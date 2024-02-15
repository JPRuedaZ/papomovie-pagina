class Movie {
    constructor(id,title, year, duration, genre, rate, poster, director) {
      if (!title || !poster || !director) {
        throw new Error('Hace falta diligenciar los datos del titulo, poster y director');
      }
  
      this.id = id;
      this.title = title;
      this.year = year;
      this.duration = duration;
      this.genre = genre;
      this.rate = rate;
      this.poster = poster;
      this.director = director;
    }
  }
  
  module.exports = Movie;