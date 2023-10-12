const { Model, DataTypes } = require("sequelize");

const sequelize = require("..config/connection.js");

// Extends: functionality of the parent
// Example: (class Car extends Vehicle {})
// Model is inherited in Sequelize for functioning

class Category extends Models {}

{
  // define columns
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "category,"
};

module.exports = Category;