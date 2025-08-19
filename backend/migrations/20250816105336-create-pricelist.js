"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pricelists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_service: {
        type: Sequelize.STRING,
      },
      in_price: {
        type: Sequelize.DECIMAL,
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      vat_rate: {
        type: Sequelize.DECIMAL,
      },
      row_type: {
        type: Sequelize.STRING,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      in_stock: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pricelists");
  },
};
