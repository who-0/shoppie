const express = require("express");
const { postOrder, getAllOrder,ordersStatus } = require("../controllers");
const OrderRouter = express.Router();

OrderRouter.route("/").post(postOrder).get(getAllOrder);
OrderRouter.route("/status").get(ordersStatus)

module.exports = OrderRouter;
