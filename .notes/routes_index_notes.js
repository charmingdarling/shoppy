const router = require("express").Router();
const apiRoutes = require("./api");
router.use("api", apiRoutes);
module.exports = router;

// ---------------------------------------------------------- //
// ---------------------------------------------------------- //
// ---------------------------------------------------------- //
// * What is ...? //
const router = require("express").Router();

// Setting up an instance of an Express router. In Express.js, routers are used to create modular, mountable route handlers. They allow you to group related routes and handlers together, making your code more organized and maintainable.

// What is a route handler? A route handler is a function in an Express.js application that gets executed when a specific route is accessed. In an Express application, you define routes to map specific HTTP methods (like GET, POST, etc.) and paths to corresponding functions or middleware. These functions or middleware are the route handlers.

// Example:

const express = require("express");
const app = express();

// Define a route with a route handler
app.get("/example", (req, res) => {
  res.send("This is the route handler for /example");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//

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

// This function is a handler
router.get("/", (req, res) => {
  res.send("Hello, this is the root route!");
});

// This function is also a handler
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

// * End

// ---------------------------------------------------------- //
// ---------------------------------------------------------- //
// ---------------------------------------------------------- //

// * What is ...? //

const apiRoutes = require("./api");
// - is importing a module or file named "api" and assigning it to the variable `apiRoutes`.

// **`require("./api")`**
// - This statement is using the `require` function in Node.js to import the contents of a file or module.
// - The argument passed to `require` is a relative path to the file or module.

// ? NOTE: (relative path) -
// A relative path is a file or directory path that is relative to the current working directory or another specified directory. It specifies the location of a file or directory relative to the current location of the program or file that is referencing it.
// Relative paths do not start with a forward slash (/) or a drive letter, and they can include relative directory references such as ".." (parent directory) or "." (current directory).

// ? Note: (absolute path) -
// An absolute path is a file or directory path that specifies the exact location of a file or directory in the file system. It provides the full path from the root directory to the file or directory.
// Absolute paths typically start with a forward slash (/) on Unix-like systems or with a drive letter (such as C:) on Windows systems.
// Absolute paths do not depend on the current working directory and can be used to access files or directories from any location in the file system.

// **`const apiRoutes = ...`**
// - The result of the `require("./api")` statement is assigned to the variable `apiRoutes`.
// - This means that whatever is exported from the "api" module becomes accessible through the `apiRoutes` variable in the current module.

// Here's an example of how this might work:

// * Assuming you have a file named "api.js" in the same directory:

// api.js

const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json({ message: "API endpoint for users" });
});

router.get("/posts", (req, res) => {
  res.json({ message: "API endpoint for posts" });
});

module.exports = router;

// * Now, in another file (let's call it "app.js" for simplicity):

// * app.js

const express = require("express");
const app = express();

// Import the apiRoutes module
const apiRoutes = require("./api");

// Use the imported routes at a specific path
app.use("/api", apiRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// In this example:

// - The `require('./api')` statement in "app.js" imports the router from the "api.js" file.
// - The `apiRoutes` variable now contains the router with the defined routes for `/users` and `/posts`.
// - `app.use('/api', apiRoutes);` tells Express to use the routes defined in `apiRoutes` at the path `/api`. So, accessing `/api/users` and `/api/posts` will trigger the corresponding route handlers from the "api.js" module.

// This modular approach helps organize your code by breaking it into smaller, manageable pieces. Each module can handle specific functionality, making your application more maintainable and easier to understand.

// * What is -> router.use("api", apiRoutes);

// The line `router.use("api", apiRoutes);` is configuring an Express router to use another router (`apiRoutes`) for any routes that start with "/api". Let's break down this statement:

// - **`router.use("api", apiRoutes);`**:
//   - `router`: This refers to an instance of an Express router. The router is an isolated instance of middleware and routes.
//   - `.use("api", apiRoutes)`: This uses the `use` method of the router to specify middleware. In this case, it's configuring the router to use `apiRoutes` as middleware.
//   - `"api"`: This is a path prefix. It means that the middleware defined in `apiRoutes` will only be applied to routes that start with "/api".
//   - `apiRoutes`: This is assumed to be another router or middleware that will be used for routes starting with "/api".

// **Explanation**:

// - **Path Prefix ("/api"):** The path prefix specifies that this middleware (i.e., the `apiRoutes`) will only be applied to routes that match the specified prefix. For example, if a route is "/api/users", it will match this middleware, but if it's just "/users", it won't.

// - **Use of Another Router (`apiRoutes`):** The second argument, `apiRoutes`, is expected to be another router instance. This means that if a request matches the path prefix ("/api"), the router will use the routes and middleware defined in `apiRoutes` to handle that request.

// **Example**:

// Assuming you have an `apiRoutes` router defined as follows:

// apiRoutes.js

const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json({ message: "API endpoint for users" });
});

router.get("/posts", (req, res) => {
  res.json({ message: "API endpoint for posts" });
});

module.exports = router;

// Then, in another file (let's call it "app.js" for simplicity):

// app.js

const express = require("express");
const app = express();

// Import the apiRoutes module
const apiRoutes = require("./apiRoutes");

// Use the imported routes at the path "/api"
app.use("/api", apiRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// In this example:

// - The `app.use('/api', apiRoutes);` line in "app.js" tells Express to use the routes defined in `apiRoutes` whenever a request is made to a path starting with "/api". So, requests to "/api/users" and "/api/posts" will be handled by the corresponding route handlers in the `apiRoutes` module.

// * End

// ---------------------------------------------------------- //
// ---------------------------------------------------------- //
// ---------------------------------------------------------- //
