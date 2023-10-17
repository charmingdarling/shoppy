const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Shoes",
  },
];

// `bulkCreate` is a method provided by Sequelize, which is an Object-Relational Mapping (ORM) library for Node.js and JavaScript. This method is used to efficiently insert multiple records into a database table in a single query.

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
