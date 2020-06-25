const { Router } = require("express");

const Item = require("../models/Item");

const router = Router();

// Create new
router.post("/add", async (req, res, next) => {
  try {
    const item = new Item(req.body);
    const newItem = await item.save();
    res.json(newItem);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

// Fetch all
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// Search by name
router.get("/search/:itemName", async (req, res) => {
  let itemName = req.params.itemName;

  try {
    const items = await Item.find({ title: new RegExp(itemName, "i") });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// Update item
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  Item.update(
    { _id: id },
    {
      $set: updateOps,
    }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// Soft delete
router.patch("/delete/:id", (req, res) => {
  const id = req.params.id;
  const now = new Date().toISOString();

  Item.update(
    { _id: id },
    {
      $set: { deletedAt: now },
    }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
