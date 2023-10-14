const { Model, DataTypes } = require("sequelize");

// Import database connection from config.js
const sequelize = require("../config/connection.js");

// Extends: functionality of the parent
// Example: (class Car extends Vehicle {})
// Model is inherited in Sequelize for functioning

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
