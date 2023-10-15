const express = require("express");
const { postOrder, getAllOrder } = require("../controllers");
const OrderRouter = express.Router();

OrderRouter.route("/").post(postOrder).get(getAllOrder);

module.exports = OrderRouter;
