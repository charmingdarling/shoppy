const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

// Extends: functionality of the parent (class Car extends Vehicle)
// Model is inherited in Sequelize for functioning
class Category extends Model {}

Category.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
