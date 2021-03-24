const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  productName: { type: String },
});

module.exports = model("Product", schema);
