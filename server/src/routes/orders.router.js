const express = require("express");
const { postOrder } = require("../controllers");
const OrderRouter = express.Router();

OrderRouter.route("/").post(postOrder);

module.exports = OrderRouter;
