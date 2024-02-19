const mongoose = require("mongoose");
require('dotenv').config();


const configDb = async () => {
await mongoose.connect(process.env.MONGO_URI);
}

module.exports = configDb;