const express = require("express");
const { postOrder, getAllOrder,ordersStatus,getAllOrderByAdmin } = require("../controllers");
const OrderRouter = express.Router();

OrderRouter.route("/").post(postOrder).get(getAllOrder);
OrderRouter.route("/status").get(ordersStatus)
OrderRouter.route("/all").get(getAllOrderByAdmin)

module.exports = OrderRouter;
