"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Pricelist extends Model {}

  Pricelist.init(
    {
      product_service: DataTypes.STRING,
      in_price: DataTypes.DECIMAL,
      price: DataTypes.DECIMAL,
      vat_rate: DataTypes.DECIMAL,
      row_type: DataTypes.STRING,
      unit: DataTypes.STRING,
      in_stock: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Pricelist",
    }
  );
  return Pricelist;
};
