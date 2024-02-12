//Aca es una función que convierte una película en elementos HTML y los agrega al contenedor con el id "container".
const convertirHTML = (movie) => {
    let { title, year, duration, rate, poster } = movie;
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `<div class="card border border-0 m-2">
    <img src="${poster}" class="card-img-top p-4 object-fit-contain" alt="imagen">
    <div class="card-body">
      <h3 class="card-title">${title}</h3>
      <p class="card-text">Año: ${year}</p>
      <p class="card-text">Duracion: ${duration}</p>
      <p class="card-text rate">Rating: ${rate}⭐</p>
      </div>
    </div>`;
    return tarjeta;
  };
  module.exports = convertirHTML;