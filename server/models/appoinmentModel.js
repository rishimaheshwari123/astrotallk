const mongoose = require("mongoose");

const appoinmentSchema = new mongoose.Schema({
  addressData: {
    type: Object,
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Processing",
  },
  paymentInfo: {
    id: {
      type: String,
    },
    status: {
      type: String,
    },
    type: {
      type: String,
    },

  },

}, { timestamps: true });

module.exports = mongoose.model("Appoinment", appoinmentSchema);
