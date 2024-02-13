//Aca es una función que recibe el objeto movie y convierte una película en una tarjeta HTML(elemento HTML).
const convertirHTML = (movie) => {
  //Aca se extraen las propiedades del objeto movie (se destructuran en variables).
    let { title, year, duration, rate, poster } = movie;
    //Se crea una tarjeta HTML(elemento div en HTML)
    const tarjeta = document.createElement("div");
    //Se agrega la clase tarjeta
    tarjeta.classList.add("tarjeta");
    /*Se agrega el contenido HTML mediante el innerHTML y con las templates se agregan las propiedades del objeto
    movie y se crea un elemento HTML con todas las etiquetas. */
    tarjeta.innerHTML = `<div class="card border border-0 m-2">
    <img src="${poster}" class="card-img-top p-4 object-fit-contain" alt="imagen">
    <div class="card-body">
      <h3 class="card-title">${title}</h3>
      <p class="card-text">Año: ${year}</p>
      <p class="card-text">Duracion: ${duration}</p>
      <p class="card-text rate">Rating: ${rate}⭐</p>
      </div>
    </div>`;
    //Se retorna la tarjeta, es decir la etiqueta HTML(que contiene la movie).
    return tarjeta;
  };
  //Se exporta la funcion convertirHTML.
  module.exports = convertirHTML;