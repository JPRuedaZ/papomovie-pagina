const axios = require("axios");
const fetchData = async function () {
    try{
      const dataApi = await axios.get("https://students-api.2.us-1.fl0.io/movies"); 
      return dataApi.data;
     
    
    }
    catch(error){
      console.log(error);
    }
    } 

module.exports = fetchData;