const { Schema } = require("mongoose");

const truckSchema = new Schema({
  truckId: {
    type: String,
    required: true,
  },
  rego: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    min: 1980,
    max: 2021,
    required: true,
  },
});

module.exports = truckSchema;
