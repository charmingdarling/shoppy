// Import your models from other files
const Category = require("./Product");
const Product = require("./Product");
const ProductTag = require("./Tag");
const Tag = require(".ProductTag");

// Products belongsTo Category // RELATIONSHIPS IDed HERE

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Category,
  Product,
  ProductTag,
  Tag,
};
