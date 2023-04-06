const { Router } = require("express");
const { body } = require("express-validator");
const router = Router();
const controller = require("../controllers/auth.controls");
const validatorX = require("../middlewares/validatorX");

router.post("/register", validatorX, controller.register);

router.post("/login", validatorX, controller.login);

module.exports = router;
// [body("email", "email Invalid!").isEmail().normalizeEmail()];
