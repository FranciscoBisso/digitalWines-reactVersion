const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
	return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};

const userApiController = {
	signup: async (req, res) => {
		const existingEmail = await db.Usuarios.findOne({
			where: { email: req.body.email },
		});

		if (!existingEmail) {
			const newUser = await db.Usuarios.create({
				nombre: req.body.nombre,
				email: req.body.email,
				contrasenia: req.body.contrasenia,
				//contrasenia: bcryptjs.hashSync(req.body.password, 10),
				tipo_id: 2,
				imagen: req.body.imagen,
				//imagen: req.file.path.split("public").pop(),
			});

			const token = createToken(newUser.id);

			res.status(200).json({
				email: newUser.email,
				token: token,
			});
		}
		if (existingEmail) {
			res.status(400).json({ credentialsError: "Invalid credentials" });
		}
	},

	login: async (req, res) => {},

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
