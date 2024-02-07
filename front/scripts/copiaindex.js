//MODO CLASES 
class Pelicula {
    constructor({ id, title, year, duration, rate, poster }) {
      this.id = id;
      this.title = title;
      this.year = year;
      this.duration = duration;
      this.rate = rate;
      this.poster = poster;
    }
  }
  
  class Container {
    constructor() {
      this.movies = [];
      this.id = 0;
    }
  
    getAllPeliculas() {
      return this.movies;
    }
  
    createPelicula(mov) {
      this.id++;
      const movie = new Pelicula({ id: this.id, ...mov });
      this.movies.push(movie);
    }
  
    deletePelicula(id) {
      this.movies = this.movies.filter((mov) => mov.id !== id);
    }
  }
  
  const repositorio = new Container();

 /*Se define la funcion llamada convertirHTML que toma un objeto movie como argumento y retorna un elemento HTML,que
 representa la pelicula. En esta funcion se crean las etiquetas o elementos HTML y se le asignan las clases correspondientes*/ 
  const convertirHTML = (movie) => {
    let { title, year, duration, rate, poster } = movie;

    const titleTarjeta = document.createElement("h3");
    titleTarjeta.classList.add("title-movie");
    const yearTarjeta = document.createElement("p");
    yearTarjeta.classList.add("year");
    const durationTarjeta = document.createElement("p");
    durationTarjeta.classList.add("duration");
    const rateTarjeta = document.createElement("p");
    rateTarjeta.classList.add("rate");
    const imagenTarjeta = document.createElement("img");
    imagenTarjeta.classList.add("img");
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
  
    titleTarjeta.innerText = title;
    yearTarjeta.innerText = "Año: " +	 year;
    durationTarjeta.innerText = "Duración: " + duration;
    rateTarjeta.innerText = "Rating: " +rate+"⭐";
    imagenTarjeta.src =  poster;
  
    tarjeta.appendChild(titleTarjeta);
    tarjeta.appendChild(yearTarjeta);
    tarjeta.appendChild(durationTarjeta);
    tarjeta.appendChild(rateTarjeta);
    tarjeta.appendChild(imagenTarjeta);
  
    return tarjeta;
  }
  
  /*Se define una funcion llamada mostrarPeliculas que toma un objeto movie como argumento y dentro de esta funcion
  se obtiene el contenedor HTML con id container donde mostrara las peliculas, este se vacia(se borra el contenido existente del contenedor)
  y ahi se ontiene la lista de todas las peliculas utilizando el metodo getAllPeliculas de la clase Container del objeto movie
  y se mapea la lista de peliculas y se convierte cada pelicula a elementos de HTML con la funcion convertirHTML y los elementos resultantes 
  se agregan al contenedor HTML*/
  function mostrarPeliculas(movie) {
    
    const container = document.getElementById("container");
    container.innerHTML = "";
  
    const lista = movie.getAllPeliculas();
  
    const mapeo = lista.map((movie) => convertirHTML(movie));
  
    mapeo.forEach((movie) => container.appendChild(movie));
  }
  
  /* Realiza una solicitud GET a la API de películas, crea instancias de películas y las agrega al repositorio,
  y luego muestra las películas en el contenedor HTML.*/
  const agregarData = () => {
    $.get('https://students-api.2.us-1.fl0.io/movies', (data, status) => {
      if(status === 'success'){
      data.forEach((movie) => repositorio.createPelicula(movie));
      mostrarPeliculas(repositorio);
    }
    })
  }

  agregarData();
  
