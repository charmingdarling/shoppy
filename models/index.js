// Import your models from other files
const Category = require("./Product");
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Tag = require("./Tag");

// Products belongsTo Category // RELATIONSHIPS IDed HERE

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE", // Cascade, go through all the products with category_id and destroy them
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Category,
  Product,
  ProductTag,
  Tag,
};
