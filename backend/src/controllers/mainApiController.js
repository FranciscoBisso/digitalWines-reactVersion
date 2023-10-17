const db = require("../database/models");
const mainApiController = {
	home: async (req, res) => {
		const featured = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
			where: { categoria_id: 1 },
		});

		const bestSellers = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
			where: { categoria_id: 2 },
		});

		const bestDeals = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
			where: { categoria_id: 3 },
		});

		if (!featured && !bestSellers && !bestDeals) {
			res.status(404).json({
				error: "¡Houston, tenemos un problema  con los vinos de la página principal!",
			});
		}

		if (featured && bestSellers && bestDeals) {
			for (let wine of featured) {
				wine.imagen = "http://localhost:3001" + wine.imagen;
			}

			for (let wine of bestSellers) {
				wine.imagen = "http://localhost:3001" + wine.imagen;
			}

			for (let wine of bestDeals) {
				wine.imagen = "http://localhost:3001" + wine.imagen;
			}

			res.status(200).json({
				total: {
					all:
						featured.length + bestSellers.length + bestDeals.length,
					featured: featured.length,
					bestSellers: bestSellers.length,
					bestDeals: bestDeals.length,
				},
				featured,
				bestSellers,
				bestDeals,
			});
		}
	},
};

module.exports = mainApiController;
