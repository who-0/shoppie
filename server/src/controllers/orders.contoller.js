const { Order } = require("../models");
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
  try {
    const userOrders = await Order.find(
      { orderBy: req.user.userId },
      { __v: 0, orderBy: 0, updatedAt: 0 }
    ).sort("-createdAt");
    res.status(200).json(userOrders);
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: error.message });
  }
};

module.exports = { postOrder, getAllOrder };
