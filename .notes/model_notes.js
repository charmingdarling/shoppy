// Import important parts of sequelize library

// ---------------------------------------------------------- //

// * What is a Model?

// In Sequelize, a model represents a table in a relational database. It is a JavaScript class that extends the 'Model' class provided by Sequelize. Each instance of the model represents a row in the corresponding table.

// Model Definition:
// - You define a model by creating a class that extends Model and using the init method to specify the attributes (fields/columns) of the table.
// - Each attribute is defined using the Sequelize DataTypes, specifying the type of data that the attribute will hold.

// Model Associations:
// - Sequelize allows you to define associations between models, representing relationships between tables in the database. For example, you can define associations such as hasMany, belongsTo, hasOne, etc.
// - Associations help Sequelize to understand the relationships between different tables and provide convenient methods for querying related data.

// Instance Methods:
// -Sequelize models can have instance methods, which are methods that can be called on instances of the model (individual rows in the table).
// - These methods can perform operations specific to a particular instance, such as updating attributes, calculating values, etc.

// Class Methods:
// - Class methods are methods that are defined on the model class itself (not on instances).
// - They are often used for operations that affect multiple instances or for querying the database in a way that doesn't involve a specific instance.

// Hooks:
// - Sequelize allows you to define hooks, which are functions that are executed at different stages of the model's lifecycle, such as before creating, updating, or deleting records.
// - Hooks provide a way to perform additional actions or validations before or after certain operations.

// Table Configuration:
// - When defining a model, you can specify various configurations, such as the table name, timestamps (createdAt and updatedAt fields), and other options like underscored naming.

// Validation:
// - Sequelize supports validation for attributes. You can define constraints and requirements for the data stored in each attribute.

// CRUD Operations:
// - Once a model is defined, Sequelize provides methods for performing CRUD (Create, Read, Update, Delete) operations on the corresponding table.

// Here's a simplified example of a Sequelize model for a Book:

// ---------------------------------------------------------- //

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {}

Book.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // ... other attributes
  },
  {
    sequelize,
    modelName: "book",
    timestamps: false,
    // ... other configurations
  }
);

module.exports = Book;

// In this example, Book is a Sequelize model representing a book table with attributes like title and author. The model is then exported for use in other parts of the application.

// ---------------------------------------------------------- //

// * What is a DataType

// DataTypes is an object that is part of the Sequelize library and is used to define the data types of the attributes (fields/columns) in your models. When defining a Sequelize model, you use `DataTypes to specify the type of data that should be stored in that particular attribute.
// These data types help Sequelize understand how to interact with the underlying database when creating tables and performing operations. They also provide a level of abstraction, making it easier to work with different databases without having to worry about the specific SQL syntax for data types.
const { Model, Datatypes } = require("sequelize");
// ---------------------------------------------------------- //

// Import database connection from config.js
const sequelize = require("..config/connection.js");

//Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for Product model
Product.init(
  {
    // STRING: A variable-length string. You can specify a maximum length if needed.
    type: DataTypes.STRING,
    // Optionally, you can specify a maximum length
    // For example, to limit the length to 255 characters
    // allowNull is true by default, meaning the field can be null
    // If you want to enforce a length constraint, you can add a validation like validate: { len: [0, 255] }
  },
  {
    // INTEGER: A 32-bit integer.
    type: DataTypes.INTEGER,
  },
  {
    // BOOLEAN: A boolean value (true or false).
    type: DataTypes.BOOLEAN,
  },
  {
    // DATE: A date and time value.
    type: DataTypes.DATE,
  },
  {
    // FLOAT: A floating-point number.
    type: DataTypes.FLOAT,
  },
  {
    // DOUBLE: A double-precision floating-point number.
    type: DataTypes.DOUBLE,
  },
  {
    // ENUM: A string that is limited to a specific set of values.
    type: DataTypes.ENUM("value1", "value2", "value3"),
  },
  {
    // DECIMAL: A fixed-point number.
    type: DataTypes.DECIMAL,
    // Optionally, you can specify the precision and scale
    // For example, to store a decimal number with up to 10 digits, 2 of which are after the decimal point
    // DECIMAL(10, 2)
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
