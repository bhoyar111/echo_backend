'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('chg_pharmacies', {
			pharmacyId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			pName: {
				type: Sequelize.STRING(191),
				allowNull: false,
			},
			pOwnerName: {
				type: Sequelize.STRING(191),
				allowNull: false,
			},
			pMobile: {
				type: Sequelize.STRING(30),
				allowNull: false
			},
			pEmail: {
				type: Sequelize.STRING(191),
				allowNull: true
			},
			pCountry: {
				type: Sequelize.STRING(191),
				allowNull: true
			},
			pRegion: {
				type: Sequelize.STRING(191),
				allowNull: true
			},
            pAddress: {
				type: Sequelize.STRING(191),
				allowNull: true
			},
            pPassword: {
				type: Sequelize.STRING(191),
				allowNull: true
			},
			pStatus: {
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

	down: queryInterface /* , Sequelize */ => queryInterface.dropTable('chg_pharmacies')
};