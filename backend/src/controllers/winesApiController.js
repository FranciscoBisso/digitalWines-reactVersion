const db = require("../database/models");

const winesApiController = {
    winecellar: async (req, res) => {
        const vinos = await db.Vinos.findAll({
            include: [{ all: true }],
            order: [["nombre", "ASC"]],
        });
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
        const bodegas = await db.Bodegas.findAll();
        const uvas = await db.Uvas.findAll();
        const categorias = await db.Categorias.findAll();
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
        const yaExiste = await db.Vinos.findOne({
            include: [{ all: true }],
            where: { nombre: req.body.nombre },
        });

        if (yaExiste) {
            res.status(400).json({
                error: "Ya contamos con ese vino en nuestra DB",
                data: yaExiste,
            });
        } else {
            const newWine = await db.Vinos.create({ ...req.body }); //probablemente tenga que modificar la propiedad imagen del body
            res.status(200).json({
                created: "OK",
                data: newWine,
            });
        }
    },

    modify: async (req, res) => {
        const vinoModificable = await db.Vinos.findOne({
            include: [{ all: true }],
            where: { id: req.params.id },
        });
        const bodegas = await db.Bodegas.findAll();
        const uvas = await db.Uvas.findAll();
        const categorias = await db.Categorias.findAll();

        if (!vinoModificable) {
            res.status(404).json({
                error: "No contamos con ese vino",
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
        const vino = await db.Vinos.findOne({
            include: [{ all: true }],
            where: { id: req.params.id },
        });

        if (!vino) {
            res.status(404).json({
                error: "No se pudo modificar un vino inexistente",
            });
        } else {
            await db.Vinos.update(
                { ...req.body },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            res.status(200).json({
                updated: "OK",
                updatedData: req.body,
                oldData: vino,
            });
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
