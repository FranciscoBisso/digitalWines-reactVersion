const db = require("../database/models");
const mainApiController = {
    home: async (req, res) => {
        const destacados = await db.Vinos.findAll({
            include: [{ all: true }],
            order: [["nombre", "ASC"]],
            where: { categoria_id: 1 },
        });
        const masVendidos = await db.Vinos.findAll({
            include: [{ all: true }],
            order: [["nombre", "ASC"]],
            where: { categoria_id: 2 },
        });
        const masEconomicos = await db.Vinos.findAll({
            include: [{ all: true }],
            order: [["nombre", "ASC"]],
            where: { categoria_id: 3 },
        });
        res.status(200).json({
            data: {
                destacados: destacados,
                masVendidos: masVendidos,
                masEconomicos: masEconomicos,
            },
        });
    },
};

module.exports = mainApiController;
