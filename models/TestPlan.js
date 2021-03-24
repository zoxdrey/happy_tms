const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  testPlanName: { type: String },
});

module.exports = model("TestPlan", schema);
