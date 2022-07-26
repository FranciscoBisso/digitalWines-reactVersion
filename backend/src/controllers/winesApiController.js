const db = require("../database/models");
const { validationResult } = require("express-validator");

const winesApiController = {
	winecellar: async (req, res) => {
		const vinos = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
		});
		for (let vino of vinos) {
			vino.imagen = "http://localhost:3001" + vino.imagen;
		}
		res.status(200).json({
			total: vinos.length,
			data: vinos,
		});
	},

	details: async (req, res) => {
		const vino = await db.Vinos.findOne({
			include: [{ all: true }],
			where: { id: req.params.id },
		});
		vino.imagen = "http://localhost:3001" + vino.imagen;

		if (!vino) {
			res.status(404).json({
				error: "No contamos con ese vino",
			});
		} else {
			res.status(200).json({
				data: vino,
			});
		}
	},

	add: async (req, res) => {
		const bodegas = await db.Bodegas.findAll({
			order: [["nombre", "ASC"]],
		});
		const uvas = await db.Uvas.findAll({ order: [["nombre", "ASC"]] });
		const categorias = await db.Categorias.findAll({
			order: [["nombre", "ASC"]],
		});
		if (bodegas && uvas && categorias) {
			res.status(200).json({
				data: {
					bodegas: bodegas,
					uvas: uvas,
					categorias: categorias,
				},
			});
		} else {
			res.status(400).json({
				error: "F",
			});
		}
	},

	create: async (req, res) => {
		let errors = validationResult(req);

		if (errors.isEmpty()) {
			const yaExiste = await db.Vinos.findOne({
				include: [{ all: true }],
				where: { nombre: req.body.nombre },
			});

			if (yaExiste) {
				res.status(400).json({
					error: "Ya contamos con ese vino en nuestra DB.",
					data: yaExiste,
				});
			} else {
				const newWine = await db.Vinos.create({
					nombre: req.body.nombre,
					imagen: req.file.path.split("public").pop(),
					bodega_id: req.body.bodega_id,
					descripcion: req.body.descripcion,
					precio: req.body.precio,
					anio: req.body.anio,
					uva_id: req.body.uva_id,
					categoria_id: req.body.categoria_id,
					stock: req.body.stock,
				});
				res.status(200).json({
					created: "OK",
					data: newWine,
				});
			}
		} else {
			res.status(400).json({ errorsData: errors.errors });
		}
	},

	modify: async (req, res) => {
		const vinoModificable = await db.Vinos.findOne({
			include: [{ all: true }],
			where: { id: req.params.id },
		});
		const bodegas = await db.Bodegas.findAll({
			order: [["nombre", "ASC"]],
		});
		const uvas = await db.Uvas.findAll({ order: [["nombre", "ASC"]] });
		const categorias = await db.Categorias.findAll({
			order: [["nombre", "ASC"]],
		});

		if (!vinoModificable) {
			res.status(404).json({
				error: "Vino inexistente",
			});
		} else if (!bodegas) {
			res.status(404).json({
				error: "F con las bodegas",
			});
		} else if (!uvas) {
			res.status(404).json({
				error: "F con las uvas",
			});
		} else if (!categorias) {
			res.status(404).json({
				error: "F con las categorias",
			});
		} else {
			vinoModificable.imagen =
				"http://localhost:3001" + vinoModificable.imagen;
			res.status(200).json({
				data: {
					wine: vinoModificable,
					bodegas: bodegas,
					uvas: uvas,
					categorias: categorias,
				},
			});
		}
	},

	update: async (req, res) => {
		let errors = validationResult(req);

		const vinoModificable = await db.Vinos.findOne({
			include: [{ all: true }],
			where: { id: req.params.id },
		});

		if (errors.isEmpty()) {
			await db.Vinos.update(
				{
					nombre: req.body.nombre,
					imagen: req.file.path.split("public").pop(),
					bodega_id: req.body.bodega_id,
					descripcion: req.body.descripcion,
					precio: req.body.precio,
					anio: req.body.anio,
					uva_id: req.body.uva_id,
					categoria_id: req.body.categoria_id,
					stock: req.body.stock,
				},
				{
					where: {
						id: req.params.id,
					},
				}
			);
			res.status(200).json({
				updatedData: req.body,
				oldData: vinoModificable,
			});
		} else {
			res.status(400).json({ formErrors: errors.errors });
		}
	},

	delete: async (req, res) => {
		const vino = await db.Vinos.findOne({
			include: [{ all: true }],
			where: { id: req.params.id },
		});

		if (!vino) {
			res.status(404).json({
				error: "No contamos con ese vino",
			});
		} else {
			vino.imagen = "http://localhost:3001" + vino.imagen;
			res.status(200).json({
				data: vino,
			});
		}
	},

	destroy: async (req, res) => {
		const vinoAEliminar = await db.Vinos.findOne({
			include: [{ all: true }],
			where: { id: req.params.id },
		});

		if (vinoAEliminar) {
			await db.Vinos.destroy({
				where: {
					id: req.params.id,
				},
			});
			res.status(200).json({
				deleted: "OK",
				deletedWine: vinoAEliminar,
			});
		} else {
			res.status(400).json({
				error: "No se pudo eliminar un vino inexistente",
			});
		}
	},
};

module.exports = winesApiController;
