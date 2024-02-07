//MODO FUNCIONAL
const dataApi = function () {
  $.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
    data.map((movie => convertirHTML(movie)));
  });
};

dataApi();

//Aca creo la funcion que me convierte la Pelicula a etiquetas de HTML para que el DOM pueda leerlo.
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
