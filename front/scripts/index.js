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
  /*Despues de crear el repositorio, le ingreso la data recorriendo el array de objetos tempData y en cada
  iteracion, llamo al repositorio y llama la funcion createPelicula y le paso el objeto de la iteracion como 
  parametro para crear una nueva Pelicula y se la agregaria al repositorio */
  tempData.forEach((movie) => {
    repositorio.createPelicula(movie);
  });
  
  //Aca creo la funcion que me convierte la Pelicula a etiquetas de HTML para que el DOM pueda leerlo.
  function convertirHTML(movie) {
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
  
  //Esta funcion refleja las peliculas que estan en el contenedor.
  function mostrarPeliculas() {
    const container = document.getElementById("container");
    container.innerHTML = "";
  
    const lista = repositorio.getAllPeliculas();
  
    const mapeo = lista.map((movie) => {
      return convertirHTML(movie);
    });
  
    mapeo.forEach((movie) => container.appendChild(movie));
  }
  
  //Llamada a la funcion para mostrar las peliculas.
  mostrarPeliculas();
  
