const db = require("../../database/models");
const winesApiController = {
    wineCellar: async (req, res) => {
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

    create: async (req, res) => {
        await db.Vinos.create({
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
    },
};

module.exports = winesApiController;
