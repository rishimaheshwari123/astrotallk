const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product: {
    type: Array,
    required: true,
  },
  addressData: {
    type: Object,
    required: true,
  },
  user: {
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

module.exports = mongoose.model("Order", orderSchema);
