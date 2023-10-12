// Import important parts of sequelize library
const { Model, Datatypes } = require("sequelize");
// Import database connection from config.js
const sequelize = require("..config/connection.js");
//Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for Product model
Product.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
