const db = require("../database/models");
const mainApiController = {
	home: async (req, res) => {
		const featured = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
			where: { categoria_id: 1 },
		});
		for (let wine of featured) {
			wine.imagen = "http://localhost:3001" + wine.imagen;
		}
		const bestSellers = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
			where: { categoria_id: 2 },
		});
		for (let wine of bestSellers) {
			wine.imagen = "http://localhost:3001" + wine.imagen;
		}
		const bestDeals = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
			where: { categoria_id: 3 },
		});
		for (let wine of bestDeals) {
			wine.imagen = "http://localhost:3001" + wine.imagen;
		}
		res.status(200).json({
			featured,
			bestSellers,
			bestDeals,
		});
	},
};

module.exports = mainApiController;
