const db = require("../database/models");
const mainApiController = {
    home: async (req, res) => {
        const destacados = await db.Vinos.findAll({
            include: [{ all: true }],
            order: [["nombre", "ASC"]],
            where: { categoria_id: 1 },
        });
        for (let vino of destacados) {
            vino.imagen = "http://localhost:3001" + vino.imagen;
        }
        const masVendidos = await db.Vinos.findAll({
            include: [{ all: true }],
            order: [["nombre", "ASC"]],
            where: { categoria_id: 2 },
        });
        for (let vino of masVendidos) {
            vino.imagen = "http://localhost:3001" + vino.imagen;
        }
        const masEconomicos = await db.Vinos.findAll({
            include: [{ all: true }],
            order: [["nombre", "ASC"]],
            where: { categoria_id: 3 },
        });
        for (let vino of masEconomicos) {
            vino.imagen = "http://localhost:3001" + vino.imagen;
        }
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
