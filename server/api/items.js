const { Router } = require("express");

const Item = require("../models/Item");

const router = Router();

router.get("/all", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

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

module.exports = router;
