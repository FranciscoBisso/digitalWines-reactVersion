const db = require("../../database/models");
const mainApiController = {
    home: async (req, res) => {
        const vinos = await db.Vinos.findAll({
            include: [
                { association: "vinoBodega" },
                { association: "vinoCategoria" },
            ],
            order: [["nombre", "ASC"]],
        });
        return res.json({
            status: 200,
            total: vinos.length,
            data: vinos,
        });
    },
};

module.exports = mainApiController;
