const { check } = require("express-validator");

const validateLogin = [
	check("email")
		.trim()
		.notEmpty()
		.withMessage("Debes completar este campo.")
		.isEmail()
		.withMessage("Debes ingresar un email válido."),
	check("password")
		.trim()
		.notEmpty()
		.withMessage("Debes completar este campo."),
];

module.exports = validateLogin;
