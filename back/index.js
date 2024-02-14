const app = require("./src/server"); //Aca se importa el servidor.

const PORT = 3000; //Aca se define el puerto

//Aca se inicia el servidor para que escuche las peticiones o solicitudes HTTP que se van a pasar.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
}) 