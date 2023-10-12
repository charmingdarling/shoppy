// ---------------------------------------------------------- //

//* QUESTION: What is parsing?

// Parsing refers to the process of analyzing and interpreting data in a specific format or structure. In the context of web development, parsing typically refers to the process of extracting meaningful information from incoming requests.

// When a client sends a request to a server, the request may contain data in various formats such as JSON, URL-encoded, XML, or multipart form data. In order to work with this data, it needs to be parsed or converted into a more usable format.

// In an Express.js application, middleware functions are used to parse the request body and make it accessible in the req.body property of the request object. This allows developers to easily access and work with the data sent in the request body.

// For example, if a client sends a POST request with JSON data in the request body, the express.json() middleware parses the JSON data and makes it available in req.body. Similarly, the express.urlencoded() middleware parses URL-encoded data and makes it available in req.body.

// By parsing the request body, developers can extract the necessary information and use it to perform various operations, such as saving data to a database, processing form submissions, or handling API requests.

// Overall, parsing is an essential step in web development to convert incoming data into a usable format and enable further processing and manipulation.

// * End

// ---------------------------------------------------------- //

// Import express module
const express = require("express");

// ---------------------------------------------------------- //
//* QUESTION: What is -> const routes = require("./routes");

// Requiring the routes module in your code. This is a common practice in Express.js to modularize your routes and separate them into different files for better organization and maintainability.

// By requiring the routes module, you can use the defined routes in that module in your Express application. Make sure that the routes.js file exists in the same directory as the file where you are requiring it.

// Requiring the 'routes' module in your code. This is common practice in Express.js to separate routes into different files for better organization and maintainability

// By requiring 'routes' module, you can use the defined routes in that module in your Express application. Make sure that the routes.js file exists in the same directory as the file you were requiring it.

const routes = require("./routes");

// * End
// ---------------------------------------------------------- //

// ---------------------------------------------------------- //
//* QUESTION: What is -> const sequelize = require('./config/connection');

// The const sequelize = require('./config/connection'); code snippet suggests that you are importing the sequelize object from the connection.js file in the config folder. This is a common practice when using Sequelize as an ORM (Object-Relational Mapping) tool to interact with a database.

// By requiring the sequelize object, you can use it to define models, perform database operations, and establish a connection to the database.

// Make sure that the connection.js file in the config folder properly configures the connection to your database using Sequelize.

const sequelize = require("./config/connection");

// * End
// ---------------------------------------------------------- //

// Initialize instance of Express.js
const app = express();

// Specify port express will run on
const PORT = process.env.PORT || 3003;

// Middeware to parse incoming requests with JSON data
// This middleware lets Express automatically parse the request body if it is in JSON format and make it available in the req.body property of the request object. This allows you to easily access the data sent to the request body.
// It is used before defining your routes, so that the req.body (like in the app.post of your routes) can be parsed before the routes handle the incoming requests
app.use(express.json());

// ---------------------------------------------------------- //

//* QUESTION: app.use(express.urlencoded({ extended: true }))

// The app.use(express.urlencoded({ extended: true })) statement is used in an Express.js application to parse incoming requests with URL-encoded payloads.

// URL-encoded payloads are commonly used when submitting form data from HTML forms. This middleware parses the data sent in the request body as URL-encoded format and makes it available in the req.body property of the request object.

// The { extended: true } option allows for parsing of nested objects in the URL-encoded data.

// By using this middleware, you can access the parsed request body data using req.body in your route handlers.

// Here's an example of how you can access req.body with URL-encoded data:

app.post("/example", (req, res) => {
  const requestBody = req.body;
  // Do something with the request body
  res.send("Request body received");
});

// In this example, the req.body property is accessed inside the route handler for a POST request to the '/example' endpoint. The parsed URL-encoded request body data is stored in the requestBody variable and can be used for further processing.

// Make sure to include the app.use(express.urlencoded({ extended: true })) middleware before defining your routes, so that the request body is properly parsed.

// * End

// ---------------------------------------------------------- //

// Middeware to parse incoming requests with URL-encoded data
// URL-encoded data area commonly used when submitting form data from HTML forms.
// This middleware parses data sent from the request body as URL-encoded format and makes it available in the req.body property of the request object
// The { extended: true } option allows for parsing of nested objects in the URL-encoded data.
app.use(express.urlencoded({ extended: true }));

// Initialize using routes
app.use(routes);

//Sync sequelize models to the database, then turn on server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
