const path = require("path");
const { body } = require("express-validator");

const createValidation = [
	body("nombre")
		.trim()
		.notEmpty()
		.isLength({ min: 2, max: 30 })
		.withMessage(
			"El nombre debe tener al menos 2 caracteres y no más de 30."
		),
	body("precio")
		.notEmpty()
		.isInt()
		.withMessage("Campo requerido. Solo admite números enteros."),
	body("anio")
		.notEmpty()
		.isInt()
		.withMessage("Campo requerido. Solo admite números enteros."),
	body("stock")
		.notEmpty()
		.isInt()
		.withMessage("Campo requerido. Solo admite números enteros."),
	body("descripcion")
		.trim()
		.notEmpty()
		.isLength({ min: 20, max: 450 })
		.withMessage(
			"La descripción debe tener al menos 20 caracteres. Máximo 450 caracteres"
		),
	body("imagen").custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = [".jpg", ".png", ".jpeg"];

		if (!file) {
			throw new Error("Este campo es requerido.");
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

module.exports = createValidation;
