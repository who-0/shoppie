const { Order } = require("../models");
const moment = require("moment");
const checkPermissions = require("../utils/checkPermission");

const postOrder = async (req, res) => {
  const { userOrder, totalPrice, userId } = req.body;
  const newOrder = [];
  checkPermissions(userId, req.user.userId);
  userOrder.forEach((item) => {
    const { id, title, price, quantity } = item;
    newOrder.push({
      orderId: id,
      quantity,
      singlePrice: price,
      title,
    });
  });
  try {
    const order = await Order.create({
      orderProducts: newOrder,
      orderBy: req.user.userId,
      totalPrice,
    });
    res.status(200).json(order);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

const getAllOrder = async (req, res) => {
  const userOrder = await Order.find({ orderBy: req.user.userId });
  console.log(userOrder);
  userOrder.forEach((order) => {
    console.log("order products", order.orderProducts);
    console.log("order totalPrice", order.totalPrice);
    console.log("order create time", order.createdAt);
    const date = moment(order.createdAt).calendar();
    console.log(date);
  });
};

module.exports = { postOrder, getAllOrder };
