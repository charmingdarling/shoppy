const { Category, Product } = require("../../models");

const router = require("express").Router();

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    });

    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );

    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "You have an error." });
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // findOne > needs key
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [Product],
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id." });
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryToUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryToUpdate) {
      res
        .status(404)
        .json({ message: "Oops. No category found with this id to update." });
    }
    res.status(200).json(categoryToUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryToDelete = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(categoryToDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

///routes above the export ^
module.exports = router;
