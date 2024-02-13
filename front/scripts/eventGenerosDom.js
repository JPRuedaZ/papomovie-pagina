//Aca se llaman los modulos que se utilizaran en este archivo y se crean las variables que se utilizaran.
const cargarDom = require("./cargarDom");
const filterPelis = require("./filterPelis");

//Aca se crea la funcion eventsDom que recibe la dataApi(array de objetos [{}])
const eventsDom = function (dataApi) {
  //Se llaman los botones del navbar que tiene la lista de generos en el HTML.
  const buttonGeneros = document.getElementsByClassName("btn-genres");
  //Se crea un for para recorrer el array de botones(pq es un HTML Collection que es un [])
  for (let i = 0; i < buttonGeneros.length; i++) {
    //se crea una variable button para cada boton.
    const button = buttonGeneros[i];
    //Se agrega el evento click al boton.
    button.addEventListener("click", (event) => {
      //Se crea una variable repo para llamar el contenedor del HTML mediante el id.
      const repo = document.getElementById("repositorio");
      //se vacia el contenedor cada vez que se presiona un genero(que se ejecuta el evento click en el boton).
      repo.innerHTML = "";
      /*Se llama a la funcion filterPelis que recibe dos argumentos (dataApi(el array de objetos) 
        y genero(el genero de la pelicula que viene dado por el evento del click en el boton que accedería al valor
        del atributo de datos genero que esta en el atributo de la etiqueta HTML))*/
      filterPelis(dataApi, event.target.dataset.genero).forEach((movie) =>
        cargarDom(movie, "repositorio") /*Aca despues de que se filtra el array de objetos se llama al metodo forEach que recibe
      la funcion cargarDom para cargar la pelicula en el contenedor HTML con el id repositorio.*/

      ); 
    });
  }
};

module.exports = eventsDom;
