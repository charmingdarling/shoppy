const Sequelize = require("sequelize");

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  "shoppy_db",
  // User
  "root",
  // Password
  "root",
  {
    // Database location
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
