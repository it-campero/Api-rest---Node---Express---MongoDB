const mongoose = require("mongoose");

//Esquema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});

//Modelo
const userModel = mongoose.model("user",userSchema);
module.exports = userModel


