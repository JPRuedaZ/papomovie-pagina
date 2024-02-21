//Aca se llama la funcion que convierte el objeto a HTML(que devuelve la tarjeta que es la peli en HTML).
const convertirHTML = require("./renderCardsHtml");

/*Aca se crea la funcion que inserta la peli que recibe como parametro el objeto y el contenedor en el que se 
insertara la peli*/
const cargarDom = (movieObj, container) => {
  //se obtiene el contenedor del HTML mediante el id.
  let containerMovie = document.getElementById(container);
  //Se llama a la funcion convertirHTML para convertir el objeto en HTML y se almacena en la variable cardHTML
  const cardHTML = convertirHTML(movieObj);
  //Se agrega la cardHTML al contenedor(se inserta al HTML).
  containerMovie?.appendChild(cardHTML);
};

//Se exporta la funcion cargarDom.
module.exports = cargarDom;
