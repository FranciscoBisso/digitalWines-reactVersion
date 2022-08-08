const db = require("../database/models");

const winesApiController = {
    findAll: async (req, res) => {
        const vinos = await db.Vinos.findAll({
            include: [{ all: true }],
            order: [["nombre", "ASC"]],
        });
        res.status(200).json({
            total: vinos.length,
            data: vinos,
        });
    },

    findOne: async (req, res) => {
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

        if (!vinoModificable) {
            res.status(404).json({
                error: "No contamos con ese vino",
            });
        } else {
            res.status(200).json({
                data: vinoModificable,
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
