const cargarDom = require("./cargarDom");
const filterPelis = require("./filterPelis");

const eventsDom = function (dataApi) {
    const buttonGeneros = document.getElementsByClassName("btn-genres");
    for (let i = 0; i < buttonGeneros.length; i++) {
      const button = buttonGeneros[i];
      button.addEventListener("click", (event) => {
        const repo = document.getElementById("repositorio");
        repo.innerHTML = "";
        filterPelis(dataApi, event.target.dataset.genero).forEach((movie) => cargarDom(movie,"repositorio"));
      });
    }
}

module.exports = eventsDom;