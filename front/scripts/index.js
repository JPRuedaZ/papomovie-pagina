//MODO FUNCIONAL
/*Esta es una funcion que realiza una solicitud GET a la API de peliculas y cuando la solicitud se completa se ejecuta
una funcion que toma dos parametros data y status. Luego dentro de esta funcion de devolucion de llamada,se itera sobre
cada pelicula en data(que es un array de Objetos) utilizando el forEach o map(que nos da un nuevo array) y en ese metodo
se llama la funcion convertirHTML pasando la peli como argumento, lo que los convierte en elementos de HTML. */

const cargarDom = require("./cargarDom");
const dataInfo = require("./dataApi");
const eventsDom = require("./eventGenerosDom");

const inicio = async function () {
  try {
    const dataApi = await dataInfo();

    dataApi.map((movie) => cargarDom(movie, "repositorio"));
    eventsDom(dataApi);
  } catch (error) {
    console.log(error);
  }
};

inicio();
