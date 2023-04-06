const express = require("express");
const { default: mongoose } = require("mongoose");
const mod_express = express();
require("dotenv").config();
require("./database/connectdb");

mod_express.use(express.json());
mod_express.use(express.text());

mod_express.use("/api/v1", require("./routes/auth.route"));

const PORT = process.env.PORT || 5000;
mod_express.listen(PORT, () =>
  console.log("Server levantado en 🔥🔥🔥 http://localhost:5000")
);
