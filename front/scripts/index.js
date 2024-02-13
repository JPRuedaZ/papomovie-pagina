//Se llaman los modulos que se utilizaran en este archivo y se crean las variables que se utilizaran.
const cargarDom = require("./cargarDom");
const dataInfo = require("./dataApi");
const eventsDom = require("./eventGenerosDom");

//Se crea la funcion para la pagina de inicio, como se hace una llamada para la API de la pagina de inicio. 
const inicio = async function () {
  //se mete dentro de un bloque try/catch para capturar posibles errores que se presenten en las paginas.
  try {
    //Se hace la llamada a la API y como se trae la funcion del modulo dataInfo que trae la data capturada(trae el [con {}])
    const dataApi = await dataInfo();
/*Se recorre el array de objetos que contiene la data de la API y se llama a la funcion cargarDom(para utilizarlo en ambas 
paginas de inicio y peliculas) para mostrar las peliculas en el contenedor HTML con el id repositorio
(que aplicaria a ambas paginas por tener el mismo Id)*/
    dataApi.map((movie) => cargarDom(movie, "repositorio"));
    /*Aca se llama la funcion eventsDom que recibe la dataApi para mostrar las peliculas de acuerdo a los generos
     en el contenedor HTML con los botones del navbar.*/ 
    eventsDom(dataApi);
    //Aca se crea el catch para capturar los errores que se presenten en el bundler para las dos paginas.
  } catch (error) {
    console.log(error);
  }
};
//Aca como este archivo es el entrypoint para organizar los modulos, se llama la funcion inicio.
inicio();
