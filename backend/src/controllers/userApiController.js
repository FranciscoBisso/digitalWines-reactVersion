const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
	return jwt.sign({ id }, process.env.SECRET);
	// función para crear y firmar los tokens para re-usarla c/vez que sea necesario.
	// el 1er argumento es el payload, que no tiene que tener info sensible, y se corresponde con el argumento que recibe la función.
	// el 2do argumento es la clave secreta que solo tiene que ser conocida por el servidor.
	// puede tener un 3er argumento donde establecemos opciones como durabilidad y demás cosas.
};

const userApiController = {
	register: async (req, res) => {
		const existingEmail = await db.Usuarios.findOne({
			where: { email: req.body.email },
		});

		if (!existingEmail) {
			const newUser = await db.Usuarios.create({
				//chequear que los inputs tengan estos nombres.
				nombre: req.body.nombre,
				email: req.body.email,
				contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
				tipo_id: 2,
				imagen: req.body.imagen,
				//imagen: req.file.path.split("public").pop(),
			});

			const token = createToken(newUser.id);

			res.status(200).json({
				newUser: {
					nombre: newUser.nombre,
					email: newUser.email,
					imagen: newUser.imagen,
				},
				token: token,
			});
		}
		if (existingEmail) {
			res.status(400).json({
				credentialsError: "Credenciales inválidas.",
			});
		}
	},

	login: async (req, res) => {
		const user = await db.Usuarios.findOne({
			where: { email: req.body.email },
		});

		if (user) {
			const match = bcryptjs.compareSync(
				req.body.contrasenia,
				user.contrasenia
			);
			if (match) {
				const token = createToken(user.id);

				res.status(200).json({
					loggedUser: {
						nombre: user.nombre,
						email: user.email,
						imagen: user.imagen,
					},
					token: token,
				});
			}
		} else {
			res.status(400).json({
				credentialsError: "Credenciales inválidas.",
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

	logout: async (req, res) => {},
};

module.exports = userApiController;
