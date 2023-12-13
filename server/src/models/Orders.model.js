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
        singlePrice: {
          type: Number,
          require: true,
        },
        title: {
          type: String,
        },
        status: {
          type: String,
          enum: ["pending", "success", "cancel"],
          default: "pending",
        },
      },
    ],
    orderBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Order must be related to a user"],
    },
    totalPrice: {
      type: Number,
      require: [true, "Total price is required"],
    },
    comment:{
      type :String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", OrderSchema);
