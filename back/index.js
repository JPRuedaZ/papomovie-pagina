const app = require("./src/server"); //Aca se importa el servidor.
const dbConfig = require('./src/config/dBConfig') //Aca se importa la funcion que configura la base de datos.

const PORT = 3000; //Aca se define el puerto

//Aca ejecuto el llamado a la base de datos antes de levantar o iniciar el servidor.
// dbConfig().then((res) => {
// //Aca se inicia el servidor para que escuche las peticiones o solicitudes HTTP que se van a pasar.
//     app.listen(PORT, () => {
//         console.log(`Servidor corriendo en el puerto ${PORT}`);
//     }) 
// }).catch((error) => {
//     console.log(error);
// })

const startServer = async () => {
    try {
        await dbConfig();
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        })
        
    } catch (error) {
        console.log(error);
    }
}

startServer();
