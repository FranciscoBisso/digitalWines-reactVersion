const path = require("path");
const { body } = require("express-validator");
const { check } = require("express-validator");

let validateRegister = [
	body("name").notEmpty().withMessage("Debes completar tu nombre"),
	body("email")
		.notEmpty()
		.withMessage("Debes completar el mail")
		.isEmail()
		.withMessage("Debes ingresar un email valido"),
	body("password")
		.notEmpty()
		.withMessage("Debes completar con tu contraseña"),
	check("confirmPassword").custom((value, { req }) => {
		if (value != req.body.password) {
			throw new Error("Tus contraseñas deben ser iguales");
		}
		if (value == req.body.password) {
			return true;
		}
	}),
	body("image").custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = [".jpg", ".png", ".jpeg", ",gif"];

		if (!file) {
			throw new Error("Tienes que subir una foto de perfil.");
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(
					`Las extensiones de archivo permitidas son ${acceptedExtensions.join(
						", "
					)}`
				);
			}
		}
		return true;
	}),
];

module.exports = validateRegister;
