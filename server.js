// Import express module
const express = require("express");
// Import sequelize connection, modularizing routes that were separated into different files for better organization and maintainability
const routes = require("./routes");
// Call node native utility module
const path = require("path");
// Initialize instance of Express.js
const app = express();
// Specify port express will run on
const PORT = process.env.PORT || 3003;

// Middeware to parse incoming requests with JSON data
// This middleware lets Express automatically parse the request body if it is in JSON format and make it available in the req.body property of the request object. This allows you to easily access the data sent to the request body.
// It is used before defining your routes, so that the req.body (like in the app.post of your routes) can be parsed before the routes handle the incoming requests
app.use(express.json());

// Middeware to parse incoming requests with URL-encoded data
// URL-encoded data area commonly used when submitting form data from HTML forms.
// This middleware parses data sent from the request body as URL-encoded format and makes it available in the req.body property of the request object
// The { extended: true } option allows for parsing of nested objects in the URL-encoded data.
app.use(express.urlencoded({ extended: true }));
// Initialize using routes
app.use(routes);
//Sync sequelize models to the database, then turn on server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
