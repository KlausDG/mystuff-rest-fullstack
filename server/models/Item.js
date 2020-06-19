const mongoose = require("mongoose");

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const itemSchema = new Schema(
  {
    title: requiredString,
    image: requiredString,
    category: requiredString,
    price: {
      type: Number,
      required: true,
    },
    isSealed: {
      type: Boolean,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
    },
    author: String,
    deletedAt: Date
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;