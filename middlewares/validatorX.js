//PASAR A VALIDATORS
const {body}= require("express-validator");
const validatorX = [
  body("email", "email Invalid!").trim().isEmail().normalizeEmail(),
  body("password", "password Invalid").trim().isLength({ min: 6 }),
];

module.exports = validatorX;

