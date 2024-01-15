"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameTable("bodegas", "wineries");
		await queryInterface.renameColumn("wineries", "nombre", "name");
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.renameTable("wineries", "bodegas");
		await queryInterface.renameColumn("wineries", "name", "nombre");
	},
};
