const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  productId: {
    type: Number,
    require: true,
  },
});
