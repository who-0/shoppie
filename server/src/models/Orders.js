const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderProducts: [
      {
        orderId: {
          type: Number,
          require: true,
        },
        quantity: {
          type: Number,
          require: true,
          default: 1,
        },
        totalPrice: {
          type: Number,
          require: true,
        },
      },
    ],
    orderBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Order must be related to a user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", OrderSchema);
