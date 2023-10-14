// Import express module
const express = require("express");
// Import sequelize connection, modularizing routes that were separated into different files for better organization and maintainability
const sequelize = require("./config/connection");

// Initialize instance of Express.js
const app = express();

// Import routes
const routes = require("./routes");

// Specify port express will run on
const PORT = process.env.PORT || 3003;

// Middeware to parse incoming requests with JSON data
app.use(express.json());

// Middeware to parse incoming requests with URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Initialize using routes
app.use(routes);

// Sync sequelize models to the database, then turn on server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
