//MODO FUNCIONAL
/*Esta es una funcion que realiza una solicitud GET a la API de peliculas y cuando la solicitud se completa se ejecuta
una funcion que toma dos parametros data y status. Luego dentro de esta funcion de devolucion de llamada,se itera sobre 
cada pelicula en data(que es un array de Objetos) utilizando el forEach(que modifica el array original) y en ese metodo 
se llama la funcion convertirHTML pasando la peli como argumento, lo que los convierte en elementos de HTML. */ 
const dataApi = function () {
  $.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
    data.forEach((movie => convertirHTML(movie)));
  });
};

dataApi();

//Aca es una función que convierte una película en elementos HTML y los agrega al contenedor con el id "container".
const convertirHTML = (movie) => {
  console.log(movie);
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
  const container = document.getElementById("container");

  titleTarjeta.innerText = title;
  yearTarjeta.innerText = "Año: " + year;
  durationTarjeta.innerText = "Duración: " + duration;
  rateTarjeta.innerText = "Rating: " + rate + "⭐";
  imagenTarjeta.src = poster;

  tarjeta.appendChild(titleTarjeta);
  tarjeta.appendChild(yearTarjeta);
  tarjeta.appendChild(durationTarjeta);
  tarjeta.appendChild(rateTarjeta);
  tarjeta.appendChild(imagenTarjeta);
  container.appendChild(tarjeta);
};
