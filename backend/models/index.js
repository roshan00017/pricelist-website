const sequelize = require("../config/database");
const DataTypes = require("sequelize").DataTypes;

const Pricelist = require("./pricelist.model.js")(sequelize, DataTypes);

module.exports = {
  sequelize,
  Pricelist,
};
