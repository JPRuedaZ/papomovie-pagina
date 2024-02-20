//Nos traemos la libreria mongoose
const mongoose = require("mongoose");
//Nos traemos el dotenv(variable de entorno)
require('dotenv').config();

//Aca configuramos la base de datos para que se pueda conectar, ahora con la variable de entorno.
const configDb = async () => {
await mongoose.connect(process.env.MONGO_URI);
}

//Exportamos la funcion configDb para que se pueda usar en el entrypoint(index.js).
module.exports = configDb;