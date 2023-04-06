const { validationResult } = require("express-validator");
const controllers = {};

controllers.register = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.json({ Aviso: "Welcome" });
  console.log(req.body);
};

controllers.login = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.json({ Aviso: "Welcome" });
  console.log(req.body);
};

module.exports = controllers;

