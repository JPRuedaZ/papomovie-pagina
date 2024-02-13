//Se llama la libreria axios para hacer llamadas a la API y responder en promesa.
const axios = require("axios");
//Se crea la funcion asincrona para hacer el llamado a la API y traer la data de la API.
const fetchData = async function () {
  //lo metemos dentro del try/catch para darle manejo a los errores.
    try{
      /*se almacena el llamado en la variable dataApi que trae el await que espera a que la promesa que viene 
      en el metodo get sea resuelta y este retorna la data de la API(el array de objetos [{}]*/ 
      const dataApi = await axios.get("https://students-api.2.us-1.fl0.io/movies"); 
      return dataApi.data;
     
    
    }
    //Aca se encapsulan los errores.
    catch(error){
      console.log(error);
    }
    } 
//Se exporta la funcion.
module.exports = fetchData;