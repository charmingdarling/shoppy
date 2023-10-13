const Sequelize = require("sequelize");
require("dotenv").config(); // <-loads all the env variables into the process and places it in process.env

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  process.env.DB_NAME,
  // User
  process.env.DB_USER,
  // Password
  process.env.DB_PASSWORD,

  {
    // Database location
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
