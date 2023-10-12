const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

// Extends: functionality of the parent (class Car extends Vehicle)
// Model is inherited in Sequelize for functioning
class Category extends Model {}

Category.init(
  {
    // // Define fields/columns on model
    // // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
    // {
    //   title: {
    //     type: DataTypes.STRING,
    //   },
    //   author: {
    //     type: DataTypes.STRING,
    //   },
    //   isbn: {
    //     type: DataTypes.STRING,
    //   },
    //   pages: {
    //     type: DataTypes.INTEGER,
    //   },
    //   edition: {
    //     type: DataTypes.INTEGER,
    //   },
    //   // Will become `is_paperback` in table due to `underscored` flag
    //   isPaperback: {
    //     type: DataTypes.BOOLEAN,
    //   },
    // },
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
