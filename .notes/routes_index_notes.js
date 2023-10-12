const router = require("express").Router();
const apiRoutes = require("./api");
router.use("api", apiRoutes);
module.exports = router;

// The code you've provided is setting up an instance of an Express router. In Express.js, routers are used to create modular, mountable route handlers. They allow you to group related routes and handlers together, making your code more organized and maintainable.

// Let's break down the code:
const router = require("express").Router();

// **`require('express').Router()`**:
// - This line imports the `Router` class from the `express` module.
// - The `Router` class is a part of Express and provides a way to create modular, mountable route handlers.

// **`const router = ...`**:
// - This line creates an instance of the `Router` class and assigns it to the variable `router`.
// - Now, `router` is an object with methods that correspond to HTTP methods (`get`, `post`, `put`, `delete`, etc.).
// - You can use these methods to define routes and their associated handlers.

// Here's a simple example of how you might use this router to define a route:

// ? In a separate file, e.g.,
// ** `routes.js`
// - The `routes.js` file exports the router, which includes two routes (`'/'` and `'/about'`).

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello, this is the root route!");
});

router.get("/about", (req, res) => {
  res.send("This is the about route.");
});

module.exports = router;

// ? Then, in your main application file:
// ** 'server.js'
// - `app.use('/api', routes)` line tells Express to use the router at the path `/api`.
// - So, the routes defined in `routes.js` will be accessible at `/api` and `/api/about`.

const express = require("express");
const app = express();
const routes = require("./routes");

// Mount the router at a specific path
app.use("/api", routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// This modular approach helps to organize your code, especially as your application grows and you have multiple routes. Each module (router) can handle a specific set of related routes, improving code readability and maintainability.
