// database.js
const { Sequelize } = require("sequelize");
const config = require("./config.js");

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

let sequelize;

if (dbConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable], {
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions || {},
    logging: false,
  });
} else {
  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      port: dbConfig.port || 5432,
      dialect: dbConfig.dialect,
      dialectOptions: dbConfig.dialectOptions || {},
      logging: false,
    }
  );
}

module.exports = sequelize;
