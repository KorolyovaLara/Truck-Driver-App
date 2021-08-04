const { Schema } = require("mongoose");

const driverSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  driverLicence: {
    type: Number,
    required: true,
  },
});

module.exports = driverSchema;
