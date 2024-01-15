"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameColumn("varietals", "nombre", "name");
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.renameTable("varietals", "uvas");
	},
};
