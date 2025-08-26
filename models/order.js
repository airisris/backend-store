const { Schema, model } = require("mongoose");

/*
  fields needed for order
  - customer name
  - customer email
  - products
  - total price
  - status
      pending, paid, failed, completed
  - billplz_id
  - paid_at
*/

const orderSchema = new Schema({
  customerName: {
    type: String,
    requires: true,
  },
  customerEmail: {
    type: String,
    requires: true,
  },
  products: {
    type: Array,
    requires: true,
  },
  totalPrice: {
    type: Number,
    requires: true,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "paid", "failed", "completed"], // enum limits the value to the provided option only
  },
  billplz_id: String,
  paid_at: Date,
});

const Order = model("Order", orderSchema);
module.exports = Order;
