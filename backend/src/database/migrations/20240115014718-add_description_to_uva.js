"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("Uvas", "description", Sequelize.STRING);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn("Uvas", "description");
	},
};
