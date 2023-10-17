const { Product, Category, Tag, ProductTag } = require("../../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const productData = await Product.findAll({
      include: [Category, { model: Tag, through: ProductTag }],
    });

    const products = productData.map((product) => product.get({ plain: true }));

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "You have an error." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [Category, { model: Tag, through: ProductTag }],
    });

    const product = productData.get({ plain: true });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "You have an error." });
  }
});

// create new product

router.post("/", (req, res) => {
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// router.post("/", async (req, res) => {
//   try {
//     // Product Creation:
//     // - This line creates a new product record using the `create` method provided by Sequelize. It waits for the option to complete before moving on.
//     const productData = await Product.create(req.body);

//     // This block checks if there are `tagIds` in the request body. If so, it creates an array of objects (`productTagIdArr`) representing the associations between the newly created product and the provided tags. It then uses `bulkCreate` to efficiently create these associations in the `ProductTag` model.
//     if (req.body.tagIds.length) {
//       const productTagIdArr = req.body.tagIds.map((tag_id) => {
//         return {
//           product_id: productData.id,
//           tag_id,
//         };
//       });
//       await ProductTag.bulkCreate(productTagIdArr);
//     }

//     // If no product tags, just respond...
//     // This line sends a JSON response with the created product data. If there are associated tags, they also been created at this point.
//     res.status(200).json(productData);

//     // Error Handling:
//     // - This block catches any errors that may occur during the process (validation error, database error) and responsds with a 500 status along with the error details.
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const productData = await Product.create(req.body);
//     res.status(200).json(productData);
//     if (req.body.tagIds.length) {
//       const productTagIdArr = req.body.tagIds.map((tag_id) => {
//         return {
//           product_id: Product.id,
//           tag_id,
//         };
//       });
//       return ProductTag.bulkCreate(productTagIdArr);
//     } else {
//       res.status(200).json(productData);
//     }
//     // if no product tags, just respond
//   } catch (err) {
//     res.status(500).json({ message: "You have an error." });
//   }
// });

// Product.create(req.body)
//   .then((product) => {
//     // if there's product tags, we need to create pairings to bulk create in the ProductTag model
//     if (req.body.tagIds.length) {
//       const productTagIdArr = req.body.tagIds.map((tag_id) => {
//         return {
//           product_id: product.id,
//           tag_id,
//         };
//       });
//       return ProductTag.bulkCreate(productTagIdArr);
//     }
//     // if no product tags, just respond
//     res.status(200).json(product);
//   })
//   .then((productTagIds) => res.status(200).json(productTagIds))
//   .catch((err) => {
//     console.log(err);
//     res.status(400).json(err);
//   });

// // ! -------------------------------------------------- //
// // ! KIM LOOK AT THIS HERE WHEN YOU GOT FOOD IN YOU
// // ! -------------------------------------------------- //

// update product
router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        ProductTag.findAll({
          where: { product_id: req.params.id },
        }).then((productTags) => {
          // create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
            .filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                product_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const productTagsToRemove = productTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// // ! -------------------------------------------------- //
// // ! KIM LOOK AT THIS HERE WHEN YOU GOT FOOD IN YOU
// // ! -------------------------------------------------- //

// router.put("/:id", async (req, res) => {
//   try {
//     const productToUpdate = await Product.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!tagUpdate) {
//       res
//         .status(404)
//         .json({ message: "Oops. No tag found with this id to update." });
//     }
//     res.status(200).json(tagToUpdate);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.delete("/:id", async (req, res) => {
  // delete a product by its `id` value
  try {
    const productToDelete = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(productToDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
