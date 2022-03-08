'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('chg_hospitals', {
			hospitalId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			hName: {
				type: Sequelize.STRING(191),
				allowNull: false,
			},
			hDesc: {
				type: Sequelize.STRING(666),
				allowNull: true,
			},
			hCountry: {
				type: Sequelize.STRING(191),
				allowNull: false
			},
			hRegion: {
				type: Sequelize.STRING(191),
				allowNull: true
			},
			hPic: {
				type: Sequelize.STRING(666),
				allowNull: true
			},
			hStatus: {
				type: Sequelize.STRING(191),
				allowNull: true
			},
			status: {
				type: Sequelize.BOOLEAN(true),
				allowNull: true,
				defaultValue: '1'
			},
			created_by: {
				type: Sequelize.INTEGER(11),
				allowNull: true,
			},
			updated_by: {
				type: Sequelize.INTEGER(11),
				allowNull: true,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},

	down: queryInterface /* , Sequelize */ => queryInterface.dropTable('chg_hospitals')
};