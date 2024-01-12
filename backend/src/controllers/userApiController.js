const port = process.env.PORT || 3001;
const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const createToken = (id) => {
	return jwt.sign({ id }, process.env.SECRET);
	// función para crear y firmar los tokens para re-usarla c/vez que sea necesario.
	// el 1er argumento es el payload, que no tiene que tener info sensible, y se corresponde con el argumento que recibe la función.
	// el 2do argumento es la clave secreta que solo tiene que ser conocida por el servidor.
	// puede tener un 3er argumento donde establecemos opciones como durabilidad y demás cosas.
};

const userApiController = {
	register: async (req, res) => {
		const errors = validationResult(req);

		if (errors.isEmpty()) {
			const existingEmail = await db.Usuarios.findOne({
				where: { email: req.body.email },
			});

			if (!existingEmail) {
				const newUser = await db.Usuarios.create({
					//chequear que los inputs tengan estos nombres.
					nombre: req.body.name,
					email: req.body.email,
					contrasenia: bcryptjs.hashSync(req.body.password, 10),
					tipo_id: 2,
					imagen: req.file.path.split("public").pop(), //*TODO <-- delete this field (row in db), it's nonsense
				});

				const token = createToken(newUser.id);

				res.status(200).json({
					nombre: newUser.nombre,
					email: newUser.email,
					imagen: `http://localhost:${port}` + newUser.imagen,
					token: token,
				});
			}
			if (existingEmail) {
				res.status(400).json({
					credentialsError: "Credenciales inválidas.",
				});
			}
		} else {
			res.status(400).json({
				errors: errors.errors,
			});
		}
	},

	login: async (req, res) => {
		const errors = validationResult(req);
		console.log(errors);

		if (errors.isEmpty()) {
			const user = await db.Usuarios.findOne({
				where: { email: req.body.email },
			});

			if (!user) {
				res.status(400).json({
					credentialsError: "Credenciales inválidas.",
				});
			}

			if (user) {
				const match = bcryptjs.compareSync(
					req.body.password,
					user.contrasenia
				);
				if (match) {
					const token = createToken(user.id);

					res.status(200).json({
						nombre: user.nombre,
						email: user.email,
						imagen: `http://localhost:${port}` + user.imagen,
						token: token,
					});
				}

				if (!match) {
					res.status(400).json({
						credentialsError: "Credenciales inválidas.",
					});
				}
			}
		} else {
			res.status(400).json({
				formErrors: errors.errors,
			});
		}
	},

	details: async (req, res) => {
		const user = await db.Usuarios.findOne({
			where: { id: req.params.id },
		});
		res.status(200).json({ user });
	},

	update: async (req, res) => {},

	delete: async (req, res) => {},
};

module.exports = userApiController;
