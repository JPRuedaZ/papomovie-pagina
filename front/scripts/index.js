//MODO FUNCIONAL
/*Esta es una funcion que realiza una solicitud GET a la API de peliculas y cuando la solicitud se completa se ejecuta
una funcion que toma dos parametros data y status. Luego dentro de esta funcion de devolucion de llamada,se itera sobre
cada pelicula en data(que es un array de Objetos) utilizando el forEach o map(que nos da un nuevo array) y en ese metodo
se llama la funcion convertirHTML pasando la peli como argumento, lo que los convierte en elementos de HTML. */
const dataApi = function () {
  $.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
    if(status === "success") {
    data.map((movie => convertirHTML(movie)));
  } else {
    return alert("Error al cargar la informacion")
  }
});

};

dataApi();

//Aca es una función que convierte una película en elementos HTML y los agrega al contenedor con el id "container".
const convertirHTML = (movie) => {
  let { title, year, duration, rate, poster } = movie;

  
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  const container = document.getElementById("repositorio");
  tarjeta.innerHTML = `<div class="card border border-0 m-2">
  <img src="${poster}" class="card-img-top p-4 object-fit-contain" alt="imagen">
  <div class="card-body">
    <h3 class="card-title">${title}</h3>
    <p class="card-text">Año: ${year}</p>
    <p class="card-text">Duracion: ${duration}</p>
    <p class="card-text rate">Rating: ${rate}⭐</p>
    </div>
  </div>`;
  container.appendChild(tarjeta);
  // console.log(movie);
  // console.log(tarjeta);
  // console.log(container);
};
