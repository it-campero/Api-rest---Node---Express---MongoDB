// require("dotenv").config();// Eliminar para que desde aca no se conecte
const mongoose = require("mongoose");

if (process.env.MONGODB_URI === undefined) {
  console.log(
    "dotenv no está enlazado/cargado en este archivo --> agregue la siguiente linea al principio de este archivo:require('dotenv').config();"
  );
} else {
  const mongoconnect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Mongo Connected!");
    } catch (error) {
      console.log("Fatal Error");
    }
  };
  mongoconnect();
}

// conexion desde el index -->
// const connectMongo = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Mongo Connected!");

//     mod_express.listen(PORT, () =>
//       console.log("Server levantado en 🔥🔥🔥 http://localhost:5000")
//     );
//   } catch (error) {
//     console.log("Error Fatal");
//   }
// };
// connectMongo();
