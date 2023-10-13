const { Category, Product } = require("../../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const categoryData = Category.findAll({
      include: [Product],
    });

    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );

    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "You have an error!" });
  }
});

///routes above the export ^
module.exports = router;
