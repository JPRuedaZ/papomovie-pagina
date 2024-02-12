const convertirHTML = require("./renderCardsHtml");

const cargarDom = (movieObj, container) => {
  let containerMovie = document.getElementById(container);
  const cardHTML = convertirHTML(movieObj);
  containerMovie.appendChild(cardHTML);
};

module.exports = cargarDom;
