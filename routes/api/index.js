const router = require("express").Router();
const apiRoutes = require("./api");

// ? This is what I tried below, but looks like it is the wrong way. We are in the 'api' folder, so use that route first to include everything in the folder.
// const category = require("./category");
// const product = require("./product");
// const tag = require("./tag");

// router.use("/category-routes", category);
// router.use("/product-routes", product);
// router.use("/tag-routes", tag);

router.use('api', apiRoutes);

// `use` method in Express is used to apply middleware to incoming requests. Here it is used to define a catch-all route handler
// `((req,res) => { res.send(`<h1>Oops. Wrong route.</h1>`)}; -> Arrow function that represents the route handler. It needs the request and responnse object to take in as parameters. In this handler, when it is executed, it sends an HTML response with the message "Oops. Wrong route."
// Catch-All Route Handler -> When you define a catch-all route handler using router.use without a specific path, it becomes a catch-all for any route that hasn't been matched by previous route handlers.

router.use((req, res) => {
  // Set up a catch-all route handler in an Express router
  res.send(`<h1>Oops. Wrong route.</h1>`);
});

module.exports = router;
